'use client';

import { RotateCcw } from 'lucide-react';
import { useAppStore } from '../../store/useAppStore';
import { SecureBadge } from './SecureBadge';
import { ThemeToggle } from '../atoms/ThemeToggle';
import { GoogleLoginButton } from './GoogleLoginButton';
import { useT, useLang } from '../../i18n/provider';
import { setLang } from '../../i18n/core';
import { cn } from '../../lib/cn';

export function TopBar() {
  const clearAll = useAppStore((s) => s.clearAll);
  const hasFiles = useAppStore((s) => s.files.length > 0);
  const t = useT();
  const lang = useLang();

  const segItem =
    'rounded px-2 py-1 text-sm font-medium transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface';

  return (
    <header className="sticky top-0 z-30 h-topbar border-b border-line bg-surface">
      <div className="mx-auto flex h-full max-w-content items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-2.5">
          <span className="text-title-sm font-semibold tracking-tight">
            {t('app.name')}
          </span>
          <SecureBadge className="hidden sm:inline-flex" />
        </div>
        <div className="flex items-center gap-1">
          {/* 语言切换：分段按钮 中 / EN */}
          <div
            className="mr-1 inline-flex rounded-md border border-line p-0.5"
            role="group"
            aria-label={t('lang.switch')}
          >
            <button
              type="button"
              onClick={() => setLang('zh')}
              aria-pressed={lang === 'zh'}
              className={cn(
                segItem,
                lang === 'zh'
                  ? 'bg-brand-subtle text-brand'
                  : 'text-fg-secondary hover:bg-subtle'
              )}
            >
              {t('lang.zh')}
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
              className={cn(
                segItem,
                lang === 'en'
                  ? 'bg-brand-subtle text-brand'
                  : 'text-fg-secondary hover:bg-subtle'
              )}
            >
              {t('lang.en')}
            </button>
          </div>

          {hasFiles && (
            <button
              type="button"
              onClick={clearAll}
              aria-label={t('topbar.clear')}
              title={t('topbar.clearTitle')}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-fg-secondary transition-colors duration-fast hover:bg-subtle hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            >
              <RotateCcw size={20} aria-hidden />
            </button>
          )}
          <ThemeToggle />
          <GoogleLoginButton />
        </div>
      </div>
    </header>
  );
}
