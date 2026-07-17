'use client';

import { useEffect, useState } from 'react';
import { initTheme, setStoredTheme, type Theme } from '../lib/theme';

function readInitial(): Theme {
  if (typeof document === 'undefined') return 'light';
  const current = document.documentElement.dataset.theme as Theme | undefined;
  return current === 'dark' ? 'dark' : 'light';
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(readInitial);

  // 兜底：确保主题已应用（layout 内联脚本已先行，这里再确认一次）
  useEffect(() => {
    const t = initTheme();
    setThemeState(t);
    // 仅首次挂载执行
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setTheme = (t: Theme) => {
    document.documentElement.dataset.theme = t;
    setStoredTheme(t);
    setThemeState(t);
  };

  const toggle = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return { theme, setTheme, toggle };
}
