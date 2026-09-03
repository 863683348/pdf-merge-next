'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { PageShell } from '@/components/atoms/PageShell';
import { useT } from '@/i18n/provider';
import { getBlogPosts } from '@/lib/blog/posts';

// P1-1：按粗分类（tag 中「·」前的主类）做客户端筛选，
// 让 25+ 篇博客按主题聚类、长尾更清晰，也避免单页信息过载。
function categoryOf(tag: string): string {
  return tag.split(' · ')[0] || tag;
}

export default function BlogPage() {
  const t = useT();
  const all = getBlogPosts();
  const cats = useMemo(() => {
    const set = new Set(all.map((p) => categoryOf(p.tag)));
    return Array.from(set);
  }, [all]);
  const [active, setActive] = useState<string | null>(null);
  const posts = active ? all.filter((p) => categoryOf(p.tag) === active) : all;

  return (
    <PageShell titleKey="blog.title">
      <p className="mt-2 text-body text-fg-secondary">{t('blog.desc')}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActive(null)}
          className={`rounded-full border px-3 py-1 text-xs transition-colors duration-fast ${
            active === null
              ? 'border-brand bg-brand-subtle text-brand'
              : 'border-line text-fg-secondary hover:border-brand'
          }`}
        >
          全部 / All
        </button>
        {cats.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            className={`rounded-full border px-3 py-1 text-xs transition-colors duration-fast ${
              active === c
                ? 'border-brand bg-brand-subtle text-brand'
                : 'border-line text-fg-secondary hover:border-brand'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

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
