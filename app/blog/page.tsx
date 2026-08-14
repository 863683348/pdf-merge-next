'use client';

import Link from 'next/link';
import { PageShell } from '@/components/atoms/PageShell';
import { useT } from '@/i18n/provider';
import { getBlogPosts } from '@/lib/blog/posts';

export default function BlogPage() {
  const t = useT();
  const posts = getBlogPosts();

  return (
    <PageShell titleKey="blog.title">
      <p className="mt-2 text-body text-fg-secondary">{t('blog.desc')}</p>

      {posts.map((p) => (
        <Link
          key={p.slug}
          href={`/blog/${p.slug}`}
          className="mt-6 block rounded-xl border border-line bg-surface p-6 shadow-sm transition-colors duration-fast hover:bg-subtle"
        >
          <p className="text-caption font-semibold uppercase tracking-wide text-brand">
            {p.tag}
          </p>
          <p className="mt-1 text-xs text-fg-tertiary">{p.date}</p>
          <h2 className="mt-1 text-title font-semibold text-fg">
            {p.zhTitle}
          </h2>
          <p className="mt-1 text-sm font-medium text-fg-muted">
            {p.enTitle}
          </p>
          <p className="mt-2 text-sm text-fg-secondary">
            {p.zhDesc}
          </p>
        </Link>
      ))}
    </PageShell>
  );
}
