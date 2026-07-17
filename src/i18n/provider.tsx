'use client';

import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
} from 'react';
import {
  getLang,
  setLang as setLangCore,
  subscribeLang,
  t as tCore,
  type TParams,
} from './core';
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
}: {
  children: React.ReactNode;
}) {
  const lang = useSyncExternalStore(subscribeLang, getLang, () => 'zh' as Lang);
  const value: I18nContextValue = {
    lang,
    setLang: setLangCore,
    t: tCore,
  };

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
