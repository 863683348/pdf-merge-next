// GA4 分析工具 —— 仅生产环境 + 有 NEXT_PUBLIC_GA_ID 时激活
// 调用方式：import { gtagEvent, gtagPageview } from '@/lib/analytics'

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'set',
      targetId: string,
      params?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? '';

export const analyticsEnabled =
  process.env.NODE_ENV === 'production' && GA_ID.length > 0;

/** 发送 GA4 事件（仅在启用时有效） */
export function gtagEvent(
  name: string,
  params?: Record<string, unknown>
): void {
  if (!analyticsEnabled || typeof window === 'undefined') return;
  try {
    window.gtag?.('event', name, params);
  } catch {
    /* 静默失败，不干扰用户操作 */
  }
}

/** 发送 page_view（路由切换时调用） */
export function gtagPageview(url: string): void {
  if (!analyticsEnabled || typeof window === 'undefined') return;
  try {
    window.gtag?.('config', GA_ID, { page_path: url });
  } catch {
    /* 静默失败 */
  }
}
