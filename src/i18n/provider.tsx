'use client';

import {
  createContext,
  useContext,
  useEffect,
  useCallback,
  useMemo,
  useSyncExternalStore,
} from 'react';
import {
  getLang,
  setLang as setLangCore,
  subscribeLang,
  t as tCore,
  type TParams,
} from './core';
import { dict } from './dict';
import type { Lang } from './types';

interface I18nContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string, params?: TParams) => string;
}

const I18nContext = createContext<I18nContextValue>({
  lang: 'zh',
  setLang: () => {},
  t: tCore,
});

export function LanguageProvider({
  children,
  serverLang,
}: {
  children: React.ReactNode;
  serverLang?: Lang;
}) {
  const lang = useSyncExternalStore(
    subscribeLang,
    getLang,
    () => (serverLang ?? 'zh') as Lang
  );

  // 翻译函数基于上下文语言，确保服务端/客户端首屏一致，避免 hydration 文本不匹配。
  const t = useCallback(
    (key: string, params?: TParams) => {
      const table = dict[lang] ?? dict.zh;
      let str = table[key];
      if (str === undefined) {
        const fallback = dict.zh[key];
        if (fallback === undefined) {
          if (typeof console !== 'undefined') {
            console.warn(`[i18n] missing key: ${key}`);
          }
          return key;
        }
        if (lang !== 'zh') {
          console.warn(`[i18n] missing "${key}" for "${lang}", fallback zh`);
        }
        str = fallback;
      }
      if (params) {
        for (const [k, v] of Object.entries(params)) {
          str = str.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v));
        }
      }
      return str;
    },
    [lang]
  );

  const value = useMemo<I18nContextValue>(
    () => ({
      lang,
      setLang: setLangCore,
      t,
    }),
    [lang, t]
  );

  // 同步 <html lang> 以适配屏幕阅读器与浏览器翻译
  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  }, [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  return useContext(I18nContext);
}

export function useT(): (key: string, params?: TParams) => string {
  const { t } = useI18n();
  return t;
}

export function useLang(): Lang {
  return useI18n().lang;
}
