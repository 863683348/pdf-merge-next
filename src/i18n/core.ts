import { dict, LANG_STORAGE_KEY } from './dict';
import type { Lang } from './types';

export type TParams = Record<string, string | number>;

const VALID_LANGS: Lang[] = ['zh', 'en'];
const COOKIE_KEY = 'mergelocal-lang';

// 在模块加载时探测一次（SSR 环境无 navigator/localStorage/cookie，回退 zh；客户端优先读持久化偏好）。
function detectLang(): Lang {
  if (typeof window === 'undefined') return 'zh';
  try {
    const stored = localStorage.getItem(LANG_STORAGE_KEY) as Lang | null;
    if (stored && VALID_LANGS.includes(stored)) return stored;
  } catch {
    // 隐私模式/localStorage 禁用 → 继续用 cookie 或 navigator
  }
  // 兜底：尝试读 cookie
  const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_KEY}=([^;]*)`));
  const cookieLang = match?.[1] as Lang | undefined;
  if (cookieLang && VALID_LANGS.includes(cookieLang)) return cookieLang;
  return /^\s*zh/i.test(navigator.language) ? 'zh' : 'en';
}

function setCookie(value: Lang): void {
  if (typeof document === 'undefined') return;
  try {
    document.cookie = `${COOKIE_KEY}=${value}; Path=/; Max-Age=31536000; SameSite=Lax`;
  } catch {
    /* ignore */
  }
}

let current: Lang = detectLang();
const listeners = new Set<() => void>();

export function getLang(): Lang {
  return current;
}

export function setLang(lang: Lang): void {
  current = lang;
  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch {
    /* 隐私模式下写入失败可忽略 */
  }
  setCookie(lang);
  listeners.forEach((fn) => fn());
}

export function subscribeLang(fn: () => void): () => void {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}

// 单例翻译函数：store（非 React 上下文）与组件均可调用。
// 缺失 key：优先回退 zh 并 console.warn；若 zh 也无则直接返回 key（不白屏）。
export function t(key: string, params?: TParams): string {
  const table = dict[current] ?? dict.zh;
  let str = table[key];
  if (str === undefined) {
    const fallback = dict.zh[key];
    if (fallback === undefined) {
      if (typeof console !== 'undefined') {
        console.warn(`[i18n] missing key: ${key}`);
      }
      return key;
    }
    if (typeof console !== 'undefined' && current !== 'zh') {
      console.warn(`[i18n] missing "${key}" for "${current}", fallback zh`);
    }
    str = fallback;
  }
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      str = str.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v));
    }
  }
  return str;
}
