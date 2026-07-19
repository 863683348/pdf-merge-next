'use client';

import { useState } from 'react';
import { RotateCcw, Menu, X } from 'lucide-react';
import Link from 'next/link';
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
  const [menuOpen, setMenuOpen] = useState(false);

  const segItem =
    'rounded px-2 py-1 text-sm font-medium transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface';

  const navLinkClass =
    'block rounded-lg px-3 py-2.5 text-base font-medium text-fg transition-colors duration-fast hover:bg-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface';

  return (
    <header className="sticky top-0 z-30 h-topbar border-b border-line bg-surface">
      <div className="mx-auto flex h-full max-w-content items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-2.5">
          <Link
            href="/"
            className="text-title-sm font-semibold tracking-tight transition-colors duration-fast hover:text-brand"
          >
            {t('app.name')}
          </Link>
          <SecureBadge className="hidden sm:inline-flex" />
          <Link
            href="/pricing"
            className="ml-1 hidden rounded px-2 py-1 text-sm font-medium text-fg-secondary transition-colors duration-fast hover:bg-subtle hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface sm:inline-flex"
          >
            {t('nav.pricing')}
          </Link>
          <Link
            href="/blog"
            className="hidden rounded px-2 py-1 text-sm font-medium text-fg-secondary transition-colors duration-fast hover:bg-subtle hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface sm:inline-flex"
          >
            {t('nav.blog')}
          </Link>
          <Link
            href="/contact"
            className="hidden rounded px-2 py-1 text-sm font-medium text-fg-secondary transition-colors duration-fast hover:bg-subtle hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface sm:inline-flex"
          >
            {t('nav.contact')}
          </Link>
        </div>
        <div className="flex items-center gap-1">
          {/* 语言切换：分段按钮 中 / EN */}
          <div
            className="mr-1 hidden rounded-md border border-line p-0.5 sm:inline-flex"
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

          {/* 移动端汉堡菜单按钮 */}
          <button
            type="button"
            aria-label={menuOpen ? t('common.close') : t('nav.menu')}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-fg-secondary transition-colors duration-fast hover:bg-subtle hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface sm:hidden"
          >
            {menuOpen ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
          </button>
        </div>
      </div>

      {/* 移动端导航菜单 */}
      {menuOpen && (
        <div className="absolute left-0 right-0 top-topbar z-30 border-b border-line bg-surface px-4 py-3 shadow-lg sm:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className={navLinkClass}
            >
              {t('nav.home')}
            </Link>
            <Link
              href="/pricing"
              onClick={() => setMenuOpen(false)}
              className={navLinkClass}
            >
              {t('nav.pricing')}
            </Link>
            <Link
              href="/blog"
              onClick={() => setMenuOpen(false)}
              className={navLinkClass}
            >
              {t('nav.blog')}
            </Link>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className={navLinkClass}
            >
              {t('nav.contact')}
            </Link>
          </nav>

          {/* 小屏语言切换（菜单底部） */}
          <div className="mt-3 border-t border-line pt-3">
            <div
              className="inline-flex rounded-md border border-line p-0.5"
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
          </div>
        </div>
      )}
    </header>
  );
}
