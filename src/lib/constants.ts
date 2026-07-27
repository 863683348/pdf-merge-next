// 内存/页数分级阈值（MB），与架构文档 §7 / Spec §9 对齐
export const MAX_SINGLE_FILE_MB = 500; // 单文件硬上限（Pro 500MB 对应文案，技术极限）
export const MAX_TOTAL_FILE_MB_DESKTOP = 2000; // 总硬盘上限（2GB，对应 Pro 营销文案）
export const MAX_TOTAL_FILE_MB_MOBILE = 180; // 总硬上限（移动端，浏览器 TAB 内存有限）

// Free 层商业限制（必须小于技术上限）。超过任一触发 Free 门禁提示。
export const FREE_MAX_FILES = 5;
export const FREE_MAX_SINGLE_FILE_MB = 100; // 单文件 100 MB
export const FREE_MAX_TOTAL_FILE_MB = 200; // 总 200 MB

// Pro 层商业限制（与 pricing 页文案对齐：不限/500MB/2GB）。
export const PRO_MAX_FILES = 9999; // "不限"——实际非常大，正常场景不会碰到
export const PRO_MAX_SINGLE_FILE_MB = 500; // 单文件 500 MB
export const PRO_MAX_TOTAL_FILE_MB = 2000; // 总 2 GB（2000 MB）

export interface PlanLimits {
  maxFiles: number;
  maxSingleFileMB: number;
  maxTotalFileMB: number;
}

// 根据订阅状态返回对应档位阈值，store 与 ActionBar 共用，避免散落硬编码。
export function getPlanLimits(isPro: boolean): PlanLimits {
  return isPro
    ? {
        maxFiles: PRO_MAX_FILES,
        maxSingleFileMB: PRO_MAX_SINGLE_FILE_MB,
        maxTotalFileMB: PRO_MAX_TOTAL_FILE_MB,
      }
    : {
        maxFiles: FREE_MAX_FILES,
        maxSingleFileMB: FREE_MAX_SINGLE_FILE_MB,
        maxTotalFileMB: FREE_MAX_TOTAL_FILE_MB,
      };
}

// 移动端粗粒度判定（窄视口即视为移动），用于启用 180 MB 总量上限
export function isMobileView(): boolean {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(max-width: 768px)').matches;
}

export const THEME_KEY = 'mergelocal-theme';
export const ONBOARD_KEY = 'mergelocal-onboarded';

export const MAX_TOASTS = 3;
export const TOAST_TTL = 4500; // ms

// F6 默认文件名约定：merged-<时间戳>.pdf
export function defaultMergedName(): string {
  return `merged-${Date.now()}.pdf`;
}
