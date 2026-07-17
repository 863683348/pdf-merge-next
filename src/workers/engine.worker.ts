// Engine Worker —— F2 整文件合并 + F4 页面级抽取
// pdf-lib copyPages 原样拷贝页面对象（保真），分文件处理并让出事件循环。
import { PDFDocument, EncryptedPDFError } from 'pdf-lib';
import type { MergeRequest, MergeResult } from '../types';

const ctx = self as unknown as Worker;

// 加密错误的编码前缀，便于主线程按 i18n 字典本地化（而非硬编码中文）。
const ENC_PREFIX = '__PDF_ENC__:';

ctx.onmessage = async (e: MessageEvent) => {
  const msg = e.data as MergeRequest;
  if (!msg || msg.type !== 'merge') return;
  const { plan, total } = msg;

  try {
    const out = await PDFDocument.create();
    let done = 0;
    ctx.postMessage({ type: 'progress', done: 0, total } as MergeResult);

    for (const item of plan) {
      const bytes = await item.file.arrayBuffer();
      let src: PDFDocument;
      try {
        src = await PDFDocument.load(bytes, { updateMetadata: false });
      } catch (loadErr) {
        if (loadErr instanceof EncryptedPDFError) {
          throw new Error(`${ENC_PREFIX}${item.file.name}`);
        }
        throw loadErr;
      }

      const idx =
        item.pages === 'all' ? src.getPageIndices() : item.pages;
      const copied = await out.copyPages(src, idx);
      copied.forEach((p) => out.addPage(p));

      done += idx.length;
      ctx.postMessage({ type: 'progress', done, total } as MergeResult);

      // 让出事件循环，避免大文件长时间阻塞 Worker
      await new Promise((r) => setTimeout(r, 0));
    }

    const outBytes = await out.save();
    // Uint8Array 以 transferable 零拷贝回传
    ctx.postMessage({ type: 'done', bytes: outBytes } as MergeResult, [
      outBytes.buffer as ArrayBuffer,
    ]);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    ctx.postMessage({ type: 'error', message } as MergeResult);
  }
};
