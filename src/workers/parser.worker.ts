// Parser Worker —— F5 缩略图 + 页数/尺寸 + 加密/损坏检测
// pdfjs 在 Worker 内联运行（无嵌套 Worker）；worker 文件自托管以做到零外部请求。
import './parser-worker-shim';
import * as pdfjsLib from 'pdfjs-dist';
import type { ParseRequest, ParseResult } from '../types';

// 使用自托管的 pdf.js 资源（public/ 下，由 scripts/copy-pdfjs-assets.mjs 构建时产出），
// 避免拉取 CDN。由于我们在自定义 Web Worker 内运行 pdf.js 主库，配合 parser-worker-shim
// 提供 document/window。
//
// 路径带 pdfjs 版本号，这样这些文件可以用 Cache-Control: immutable 长缓存，而不会出现
// 「主库已升级、浏览器仍缓存旧 worker」导致的 API/Worker 版本不匹配。版本号直接取自主库
// 运行时导出，与 copy 脚本读取的 package.json 版本天然一致。
const PDFJS_V = pdfjsLib.version;

pdfjsLib.GlobalWorkerOptions.workerSrc = `/pdf.worker.${PDFJS_V}.min.mjs`;

// 在 Worker 全局作用域下，self 即 WorkerGlobalScope；
// 用 Worker 类型获取正确的 postMessage(transfer) 签名。
const ctx = self as unknown as Worker;

ctx.onmessage = async (e: MessageEvent) => {
  const msg = e.data as ParseRequest;
  if (!msg || msg.type !== 'parse') return;
  const { reqId, file } = msg;

  try {
    const buf = await file.arrayBuffer();
    const doc = await pdfjsLib.getDocument({
      data: buf,
      cMapUrl: `/cmap-${PDFJS_V}/`,
      cMapPacked: true,
      standardFontDataUrl: `/standard_fonts-${PDFJS_V}/`,
    }).promise;

    const page = await doc.getPage(1);
    const baseVp = page.getViewport({ scale: 1 });

    // 缩略图输出高度约 280px（保真且省内存）
    const targetH = 280;
    const scale = targetH / baseVp.height;
    const vp = page.getViewport({ scale });
    const canvas = new OffscreenCanvas(
      Math.ceil(vp.width),
      Math.ceil(vp.height)
    );
    const canvasCtx = canvas.getContext('2d') as unknown as CanvasRenderingContext2D | null;
    if (!canvasCtx) throw new Error('无法创建离屏画布上下文');
    await page.render({ canvasContext: canvasCtx, viewport: vp }).promise;

    const bitmap = canvas.transferToImageBitmap();
    const pageCount = doc.numPages;
    await doc.destroy();

    const result: ParseResult = {
      type: 'parsed',
      reqId,
      pageCount,
      pageWidth: Math.round(baseVp.width),
      pageHeight: Math.round(baseVp.height),
      thumbnail: bitmap,
    };
    // ImageBitmap 以 transferable 零拷贝回传
    ctx.postMessage(result, [bitmap]);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    const encrypted = /encrypted|password|incorrect|bad\.|FIPS/i.test(message);
    // 保留真实错误 message 用于 UI 展示与浏览器控制台排错；status 仍决定主文案。
    console.error('[parser.worker]', message, err);
    const result: ParseResult = {
      type: 'error',
      reqId,
      status: encrypted ? 'encrypted' : 'error',
      message,
    };
    ctx.postMessage(result);
  }
};
