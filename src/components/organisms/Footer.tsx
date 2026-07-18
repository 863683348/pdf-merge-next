'use client';

import Link from 'next/link';
import { useT } from '../../i18n/provider';

const links = [
  { key: 'privacy', href: '/privacy' },
  { key: 'terms', href: '/terms' },
  { key: 'faq', href: '/' }, // FAQ 在首页
  { key: 'blog', href: '/blog' },
  { key: 'contact', href: '/contact' },
] as const;

export function Footer() {
  const t = useT();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-canvas">
      <div className="mx-auto max-w-content px-4 py-8 sm:px-6 sm:py-10">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          {/* 链接 */}
          <nav
            className="flex flex-wrap justify-center gap-x-5 gap-y-2"
            aria-label="Footer"
          >
            {links.map((l) => (
              <Link
                key={l.key}
                href={l.href}
                className="text-sm text-fg-secondary transition-colors duration-fast hover:text-fg"
              >
                {t(`footer.${l.key}`)}
              </Link>
            ))}
          </nav>
        </div>

        <p className="mt-4 text-center text-caption text-fg-muted sm:mt-3">
          {t('footer.copyright', { year: String(year) })}
        </p>
      </div>
    </footer>
  );
}
