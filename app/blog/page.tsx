'use client';

import { PageShell } from '@/components/atoms/PageShell';
import { useT } from '@/i18n/provider';

export default function BlogPage() {
  const t = useT();

  return (
    <PageShell titleKey="blog.title">
      <p className="mt-2 text-body text-fg-secondary">{t('blog.desc')}</p>

      <div className="mt-10 flex flex-col items-center justify-center rounded-xl border border-dashed border-line bg-subtle py-16">
        <svg
          className="h-12 w-12 text-fg-muted"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
          />
        </svg>
        <p className="mt-4 text-sm text-fg-muted">{t('blog.placeholder')}</p>
      </div>
    </PageShell>
  );
}
