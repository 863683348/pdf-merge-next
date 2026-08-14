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

      <Link
        key="personal-pdf-privacy-vs-enterprise-saas"
        href="/blog/personal-pdf-privacy-vs-enterprise-saas"
        className="mt-6 block rounded-xl border border-line bg-surface p-6 shadow-sm transition-colors duration-fast hover:bg-subtle"
      >
        <p className="text-caption font-semibold uppercase tracking-wide text-brand">
          个人隐私 · Privacy
        </p>
        <p className="mt-1 text-xs text-fg-tertiary">2026-08-14</p>
        <h2 className="mt-1 text-title font-semibold text-fg">
          个人隐私 PDF 工具 vs 企业 SaaS
        </h2>
        <p className="mt-1 text-sm font-medium text-fg-muted">
          Personal PDF Privacy vs Enterprise SaaS
        </p>
        <p className="mt-2 text-sm text-fg-secondary">
          个人隐私 PDF 工具和企业级 SaaS 差在哪？从文件到底在谁手里、本地隐私保什么、到自托管中间路线，一篇讲清两者在隐私维度上的真实取舍。
        </p>
      </Link>

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
