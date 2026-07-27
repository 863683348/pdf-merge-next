export type FileStatus = 'parsing' | 'ready' | 'error' | 'encrypted';

export type Level = 'green' | 'yellow' | 'orange' | 'black';

// ---- Parser Worker 消息 ----
export interface ParseRequest {
  type: 'parse';
  reqId: number;
  file: File;
}

export interface ParseSuccess {
  type: 'parsed';
  reqId: number;
  pageCount: number;
  pageWidth: number;
  pageHeight: number;
  thumbnail: ImageBitmap;
}

export interface ParseFailure {
  type: 'error';
  reqId: number;
  status: 'encrypted' | 'error';
  // 仅用于调试/日志；展示文案由 UI 依据 status 从 i18n 字典取，保证双语一致
  message?: string;
}

export type ParseResult = ParseSuccess | ParseFailure;
export type ParserInbound = ParseRequest;

// ---- Engine Worker 消息 ----
export interface MergePlanItem {
  file: File;
  pages: number[] | 'all';
}

export interface MergeRequest {
  type: 'merge';
  plan: MergePlanItem[];
  total: number;
}

export interface MergeProgress {
  type: 'progress';
  done: number;
  total: number;
}

export interface MergeDone {
  type: 'done';
  bytes: Uint8Array;
}

export interface MergeError {
  type: 'error';
  message: string;
}

export type MergeResult = MergeProgress | MergeDone | MergeError;
export type EngineInbound = MergeRequest;
