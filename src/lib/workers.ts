import type {
  ParseResult,
  MergeResult,
  MergePlanItem,
} from '../types';

// 单例 Worker 句柄。主线程仅持有轻量 File 引用，
// 物化字节在 Worker 内（file.arrayBuffer()）、用后由 GC 回收。
let parserWorker: Worker | null = null;
let engineWorker: Worker | null = null;
let reqCounter = 0;

function getParser(): Worker {
  if (!parserWorker) {
    parserWorker = new Worker(
      new URL('../workers/parser.worker.ts', import.meta.url),
      { type: 'module' }
    );
  }
  return parserWorker;
}

function getEngine(): Worker {
  if (!engineWorker) {
    engineWorker = new Worker(
      new URL('../workers/engine.worker.ts', import.meta.url),
      { type: 'module' }
    );
  }
  return engineWorker;
}

// F5：解析单文件（页数 + 尺寸 + 首页缩略图 ImageBitmap，transferable 回传）
export function parseFile(file: File): Promise<ParseResult> {
  const w = getParser();
  const reqId = (reqCounter += 1);
  return new Promise<ParseResult>((resolve) => {
    const handler = (e: MessageEvent) => {
      const d = e.data as ParseResult;
      if (d.reqId !== reqId) return;
      if (d.type === 'parsed' || d.type === 'error') {
        w.removeEventListener('message', handler);
        resolve(d);
      }
    };
    w.addEventListener('message', handler);
    w.postMessage({ type: 'parse', reqId, file });
  });
}

// F2/F4：按序合并/抽取。progress 回调驱动进度条；done 回传 Uint8Array(transferable)。
export function mergeFiles(
  plan: MergePlanItem[],
  total: number,
  onProgress: (done: number, total: number) => void
): Promise<Uint8Array> {
  const w = getEngine();
  return new Promise<Uint8Array>((resolve, reject) => {
    const handler = (e: MessageEvent) => {
      const d = e.data as MergeResult;
      if (d.type === 'progress') {
        onProgress(d.done, d.total);
      } else if (d.type === 'done') {
        w.removeEventListener('message', handler);
        resolve(d.bytes);
      } else if (d.type === 'error') {
        w.removeEventListener('message', handler);
        reject(new Error(d.message));
      }
    };
    w.addEventListener('message', handler);
    w.postMessage({ type: 'merge', plan, total });
  });
}
