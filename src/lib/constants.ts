// 内存/页数分级阈值（MB），与架构文档 §7 / Spec §9 对齐
export const MAX_SINGLE_FILE_MB = 300; // 单文件黑(阻断) 技术上限
export const MAX_TOTAL_FILE_MB_DESKTOP = 1800; // 总量黑(桌面) 技术上限
export const MAX_TOTAL_FILE_MB_MOBILE = 180; // 总量黑(移动) 技术上限

// Free 层商业限制（必须小于技术上限）。超过任一触发 Free 门禁提示。
export const FREE_MAX_FILES = 5;
export const FREE_MAX_SINGLE_FILE_MB = 100; // 单文件 100 MB
export const FREE_MAX_TOTAL_FILE_MB = 200; // 总 200 MB

// Pro 层商业限制（付费订阅解锁，接近技术上限，等于"解锁一切"的体感）。
export const PRO_MAX_FILES = 100;
export const PRO_MAX_SINGLE_FILE_MB = 300; // 单文件 300 MB（技术上限）
export const PRO_MAX_TOTAL_FILE_MB = 1800; // 总 1800 MB（桌面技术上限）

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
