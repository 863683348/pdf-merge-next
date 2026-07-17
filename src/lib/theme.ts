export type Theme = 'light' | 'dark';
export const THEME_KEY = 'mergelocal-theme';

export function getPrefersDark(): boolean {
  return (
    typeof window !== 'undefined' &&
    !!window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );
}

export function getStoredTheme(): Theme | null {
  try {
    const t = localStorage.getItem(THEME_KEY);
    return t === 'light' || t === 'dark' ? t : null;
  } catch {
    return null;
  }
}

export function applyTheme(t: Theme): void {
  document.documentElement.dataset.theme = t;
}

export function initTheme(): Theme {
  const stored = getStoredTheme();
  const t = stored ?? (getPrefersDark() ? 'dark' : 'light');
  applyTheme(t);
  return t;
}

export function setStoredTheme(t: Theme): void {
  try {
    localStorage.setItem(THEME_KEY, t);
  } catch {
    /* 忽略隐私模式下的写入失败 */
  }
}
