// pdf.js 主库（display api）预期运行在浏览器主线程，会读取 document.baseURI / document.createElement
// 以及 window.location.href 等 DOM API。本文件在 Worker 全局作用域提供一个最小 stub，
// 使 pdf.js 在 Web Worker 内也能实例化 PDFWorker 并解析/渲染 PDF。
const workerSelf = self as any;

// window.location.href 被 pdf.js 用于判断 workerSrc 是否同域
if (typeof workerSelf.window === 'undefined') {
  workerSelf.window = workerSelf;
}

if (typeof workerSelf.document === 'undefined') {
  workerSelf.document = {
    baseURI: workerSelf.location?.href ?? '',
    createElement: (tagName: string) => {
      const t = String(tagName).toLowerCase();
      if (t === 'canvas') {
        // pdf.js 内部会创建临时 canvas 用于 pattern/gradient/mask 等缓存绘制。
        // Web Worker 中没有 HTMLCanvasElement，用 OffscreenCanvas 提供真实 2D 上下文。
        return new OffscreenCanvas(1, 1);
      }
      // 其他 DOM 元素（script/link/div）pdf.js 只做创建/设属性，不挂载也不渲染，
      // 返回最小 stub 即可。
      return {
        getContext: () => null,
        style: {},
        setAttribute: () => {},
        append: () => {},
        remove: () => {},
      };
    },
    body: { append: () => {}, remove: () => {} },
  };
}
