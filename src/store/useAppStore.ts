import { create } from 'zustand';
import { parseFile, mergeFiles } from '../lib/workers';
import { parsePageRange } from '../lib/range';
import { fileSizeLevel, pageCountLevel, type Level } from '../lib/thresholds';
import { isPdf, formatBytes } from '../lib/format';
import {
  MAX_SINGLE_FILE_MB,
  MAX_TOTAL_FILE_MB_DESKTOP,
  MAX_TOTAL_FILE_MB_MOBILE,
  FREE_MAX_FILES,
  FREE_MAX_SINGLE_FILE_MB,
  FREE_MAX_TOTAL_FILE_MB,
  MAX_TOASTS,
  TOAST_TTL,
  ONBOARD_KEY,
  defaultMergedName,
  isMobileView,
} from '../lib/constants';
import { t } from '../i18n/core';
import type { FileStatus } from '../types';
import {
  setStoredUser,
  clearStoredUser,
  type GoogleUser,
} from '../lib/auth';

// 与 engine.worker.ts 中的加密错误编码前缀保持一致
const ENC_PREFIX = '__PDF_ENC__:';

export interface FileItem {
  id: string;
  file: File;
  name: string;
  size: number;
  status: FileStatus;
  pageCount?: number;
  pageWidth?: number;
  pageHeight?: number;
  thumbnail?: ImageBitmap | null;
  mode: 'all' | 'range';
  rangeText: string;
  rangeError?: string;
  selectedCount: number; // 实际参与合并的页数
  sizeLevel: Level;
  pageLevel: Level;
  expanded: boolean;
  errorMsg?: string;
}

export interface ResultData {
  blob: Blob;
  fileName: string;
  size: number;
  pageCount: number;
  thumbnail?: ImageBitmap | null;
}

export type ToastKind = 'success' | 'error' | 'info';
export interface ToastItem {
  id: string;
  kind: ToastKind;
  message: string;
}

export type View = 'workbench' | 'result';

interface Processing {
  active: boolean;
  done: number;
  total: number;
}

interface AppState {
  files: FileItem[];
  view: View;
  processing: Processing;
  result?: ResultData;
  resultError?: string;
  toasts: ToastItem[];
  onboarded: boolean;
  gaUser: GoogleUser | null;

  addFiles: (files: File[]) => void;
  removeFile: (id: string) => void;
  reorder: (activeId: string, overId: string) => void;
  move: (id: string, dir: -1 | 1) => void;
  setMode: (id: string, mode: 'all' | 'range') => void;
  setRange: (id: string, text: string) => void;
  toggleExpand: (id: string) => void;
  clearAll: () => void;
  runMerge: () => Promise<void>;
  retryMerge: () => void;
  resetToWorkbench: () => void;
  dismissOnboarding: () => void;

  login: (user: GoogleUser) => void;
  logout: () => void;

  addToast: (kind: ToastKind, message: string) => void;
  removeToast: (id: string) => void;
}

function makeId(): string {
  return `f_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

function makeToastId(): string {
  return `t_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`;
}

function readOnboarded(): boolean {
  try {
    return localStorage.getItem(ONBOARD_KEY) === '1';
  } catch {
    return false;
  }
}

function computeSelectedCount(item: FileItem): number {
  if (item.status !== 'ready' || !item.pageCount) return 0;
  if (item.mode === 'all') return item.pageCount;
  const r = parsePageRange(item.rangeText, item.pageCount);
  if (r.error || r.pages === 'all') return item.pageCount;
  return r.pages.length;
}

export const useAppStore = create<AppState>((set, get) => ({
  files: [],
  view: 'workbench',
  processing: { active: false, done: 0, total: 0 },
  result: undefined,
  resultError: undefined,
  toasts: [],
  onboarded: readOnboarded(),
  gaUser: null, // 首次挂载由 login 组件从 localStorage 恢复

  addFiles: (incoming) => {
    if (!incoming || incoming.length === 0) return;
    const state = get();
    const currentFiles = state.files;
    const currentTotalMB =
      currentFiles.reduce((s, f) => s + f.size, 0) / 1024 / 1024;
    const wouldExceedFiles = currentFiles.length + incoming.length > FREE_MAX_FILES;

    if (wouldExceedFiles) {
      get().addToast('error', t('toast.freeFileLimit', { max: FREE_MAX_FILES }));
      return;
    }

    const seen = new Set(
      currentFiles.map((f) => `${f.name}-${f.size}-${f.file.lastModified ?? ''}`)
    );
    const accepted: File[] = [];

    for (const f of incoming) {
      if (!isPdf(f)) {
        get().addToast('error', t('toast.onlyPdf'));
        continue;
      }
      const sizeMB = f.size / 1024 / 1024;
      if (sizeMB > FREE_MAX_SINGLE_FILE_MB) {
        get().addToast(
          'error',
          t('toast.freeSingleFileTooBig', { name: f.name, size: formatBytes(f.size), max: FREE_MAX_SINGLE_FILE_MB })
        );
        continue;
      }
      if (sizeMB + currentTotalMB + accepted.reduce((s, x) => s + x.size, 0) / 1024 / 1024 > FREE_MAX_TOTAL_FILE_MB) {
        get().addToast('error', t('toast.freeTotalTooBig', { max: FREE_MAX_TOTAL_FILE_MB }));
        break;
      }
      // 仍保留技术上限兜底（Free 阈值应更严格，但保留以防常量被改错）
      if (sizeMB > MAX_SINGLE_FILE_MB) {
        get().addToast(
          'error',
          t('toast.fileTooBig', { name: f.name, size: formatBytes(f.size) })
        );
        continue;
      }
      const key = `${f.name}-${f.size}-${f.lastModified ?? ''}`;
      if (seen.has(key)) continue;
      seen.add(key);
      accepted.push(f);
    }

    if (accepted.length === 0) return;

    const newItems: FileItem[] = accepted.map((f) => ({
      id: makeId(),
      file: f,
      name: f.name,
      size: f.size,
      status: 'parsing',
      mode: 'all',
      rangeText: '',
      selectedCount: 0,
      sizeLevel: fileSizeLevel(f.size / 1024 / 1024),
      pageLevel: 'green',
      expanded: false,
    }));

    set({ files: [...get().files, ...newItems] });

    // 触发解析（异步，按结果回写）
    for (const item of newItems) {
      parseFile(item.file)
        .then((res) => {
          set((state) => ({
            files: state.files.map((f) => {
              if (f.id !== item.id) return f;
              if (res.type === 'parsed') {
                return {
                  ...f,
                  status: 'ready',
                  pageCount: res.pageCount,
                  pageWidth: res.pageWidth,
                  pageHeight: res.pageHeight,
                  thumbnail: res.thumbnail,
                  pageLevel: pageCountLevel(res.pageCount),
                  selectedCount: res.pageCount,
                };
              }
              return {
                ...f,
                status: res.status,
                errorMsg: res.message,
                thumbnail: null,
                selectedCount: 0,
              };
            }),
          }));
        })
        .catch((err: unknown) => {
          set((state) => ({
            files: state.files.map((f) =>
              f.id === item.id
                ? {
                    ...f,
                    status: 'error',
                    errorMsg: err instanceof Error ? err.message : String(err),
                    thumbnail: null,
                    selectedCount: 0,
                  }
                : f
            ),
          }));
          void err;
        });
    }
  },

  removeFile: (id) => {
    set((state) => {
      const target = state.files.find((f) => f.id === id);
      if (target?.thumbnail) {
        try {
          target.thumbnail.close();
        } catch {
          /* noop */
        }
      }
      return { files: state.files.filter((f) => f.id !== id) };
    });
  },

  move: (id, dir) => {
    set((state) => {
      const arr = [...state.files];
      const i = arr.findIndex((f) => f.id === id);
      const j = i + dir;
      if (i < 0 || j < 0 || j >= arr.length) return {};
      const [moved] = arr.splice(i, 1);
      arr.splice(j, 0, moved);
      return { files: arr };
    });
  },

  reorder: (activeId, overId) => {
    if (activeId === overId) return;
    set((state) => {
      const arr = [...state.files];
      const from = arr.findIndex((f) => f.id === activeId);
      const to = arr.findIndex((f) => f.id === overId);
      if (from < 0 || to < 0) return {};
      const [moved] = arr.splice(from, 1);
      arr.splice(to, 0, moved);
      return { files: arr };
    });
  },

  setMode: (id, mode) => {
    set((state) => ({
      files: state.files.map((f) => {
        if (f.id !== id) return f;
        const next: FileItem = { ...f, mode };
        if (mode === 'all') {
          next.rangeError = undefined;
          next.selectedCount = f.pageCount ?? 0;
        } else {
          // 进入指定范围：默认给个示例值便于用户修改
          if (!f.rangeText.trim()) next.rangeText = '1';
          next.selectedCount = computeSelectedCount({ ...next });
        }
        return next;
      }),
    }));
  },

  setRange: (id, text) => {
    set((state) => ({
      files: state.files.map((f) => {
        if (f.id !== id) return f;
        const next: FileItem = { ...f, rangeText: text };
        if (f.pageCount) {
          const r = parsePageRange(text, f.pageCount);
          if (r.error) {
            next.rangeError = r.error;
            next.selectedCount = f.pageCount; // 非法 → 回退全页
          } else if (r.pages === 'all') {
            next.rangeError = undefined;
            next.selectedCount = f.pageCount;
          } else {
            next.rangeError = undefined;
            next.selectedCount = r.pages.length;
          }
        }
        return next;
      }),
    }));
  },

  toggleExpand: (id) => {
    set((state) => ({
      files: state.files.map((f) =>
        f.id === id ? { ...f, expanded: !f.expanded } : f
      ),
    }));
  },

  clearAll: () => {
    set((state) => {
      state.files.forEach((f) => {
        if (f.thumbnail) {
          try {
            f.thumbnail.close();
          } catch {
            /* noop */
          }
        }
      });
      return { files: [] };
    });
  },

  runMerge: async () => {
    const state = get();
    const valid = state.files.filter((f) => f.status === 'ready');
    if (valid.length === 0) return;

    const totalMB = valid.reduce((s, f) => s + f.size, 0) / 1024 / 1024;
    const mobile = isMobileView();
    const limitMB = mobile
      ? MAX_TOTAL_FILE_MB_MOBILE
      : MAX_TOTAL_FILE_MB_DESKTOP;
    if (totalMB > limitMB) {
      get().addToast(
        'error',
        mobile ? t('toast.totalTooBigMobile') : t('toast.totalTooBigDesktop')
      );
      return;
    }

    const plan = valid.map((f) => {
      let pages: number[] | 'all' = 'all';
      if (f.mode === 'range' && f.pageCount) {
        const r = parsePageRange(f.rangeText, f.pageCount);
        if (!r.error && r.pages !== 'all') pages = r.pages;
      }
      return { file: f.file, pages };
    });

    const total = valid.reduce(
      (s, f) => s + (f.mode === 'all' ? (f.pageCount ?? 0) : f.selectedCount),
      0
    );

    set({ processing: { active: true, done: 0, total }, view: 'workbench' });

    try {
      const bytes = await mergeFiles(plan, total, (done, tot) => {
        set({ processing: { active: true, done, total: tot } });
      });
      // TS 5.7+ 将 Uint8Array 泛型化为 ArrayBufferLike；这里复制为
      // ArrayBuffer 支撑的 Uint8Array，确保可安全作为 BlobPart（零语义风险）。
      const outBytes = new Uint8Array(bytes);
      const blob = new Blob([outBytes], { type: 'application/pdf' });
      const fileName = defaultMergedName();
      const mergedFile = new File([blob], fileName, {
        type: 'application/pdf',
      });
      const parseRes = await parseFile(mergedFile);
      const thumbnail =
        parseRes.type === 'parsed' ? parseRes.thumbnail : null;

      set((prev) => {
        if (prev.result?.thumbnail && prev.result.thumbnail !== thumbnail) {
          try {
            prev.result.thumbnail.close();
          } catch {
            /* noop */
          }
        }
        return {
          processing: { active: false, done: total, total },
          result: {
            blob,
            fileName,
            size: blob.size,
            pageCount: total,
            thumbnail,
          },
          resultError: undefined,
          view: 'result',
        };
      });
      get().addToast('success', t('toast.mergeDone'));
    } catch (err: unknown) {
      const raw = err instanceof Error ? err.message : '';
      let message: string;
      if (raw.startsWith(ENC_PREFIX)) {
        message = t('error.encryptedCannotMerge', {
          name: raw.slice(ENC_PREFIX.length),
        });
      } else {
        message = t('toast.mergeFailed', {
          message: raw || t('error.unknown'),
        });
      }
      set({
        processing: { active: false, done: 0, total: 0 },
        resultError: message,
        view: 'result',
      });
      get().addToast('error', message);
    }
  },

  retryMerge: () => {
    void get().runMerge();
  },

  resetToWorkbench: () => {
    set((prev) => {
      if (prev.result?.thumbnail) {
        try {
          prev.result.thumbnail.close();
        } catch {
          /* noop */
        }
      }
      return {
        view: 'workbench',
        result: undefined,
        resultError: undefined,
        processing: { active: false, done: 0, total: 0 },
      };
    });
  },

  dismissOnboarding: () => {
    try {
      localStorage.setItem(ONBOARD_KEY, '1');
    } catch {
      /* noop */
    }
    set({ onboarded: true });
  },

  addToast: (kind, message) => {
    const id = makeToastId();
    set((state) => {
      const toasts = [...state.toasts, { id, kind, message }];
      // 超过上限时丢弃最旧
      while (toasts.length > MAX_TOASTS) toasts.shift();
      return { toasts };
    });
    if (typeof setTimeout !== 'undefined') {
      setTimeout(() => get().removeToast(id), TOAST_TTL);
    }
  },

  removeToast: (id) => {
    set((state) => ({ toasts: state.toasts.filter((to) => to.id !== id) }));
  },

  login: (user) => {
    setStoredUser(user);
    set({ gaUser: user });
  },

  logout: () => {
    clearStoredUser();
    set({ gaUser: null });
    try {
      window.google?.accounts.id.disableAutoSelect();
    } catch {
      /* noop */
    }
  },
}));
