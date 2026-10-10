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

      {(!active || active === '操作选择') && (
        <Link
          href="/blog/pdf-merge-vs-split-when-to-use"
          className="mt-6 block rounded-xl border border-line bg-surface p-6 shadow-sm transition-colors duration-fast hover:bg-subtle"
        >
          <p className="text-caption font-semibold uppercase tracking-wide text-brand">
            操作选择 · Merge or Split
          </p>
          <p className="mt-1 text-xs text-fg-tertiary">2026-10-11</p>
          <h2 className="mt-1 text-title font-semibold text-fg">
            PDF 合并 vs PDF 拆分：什么情况该用哪个
          </h2>
          <p className="mt-1 text-sm font-medium text-fg-muted">
            PDF Merge vs Split: When to Use Each One
          </p>
          <p className="mt-2 text-sm text-fg-secondary">
            合并改的是文件数量，拆分改的是页码边界。先看交付终点是一份还是几份，第一步就该选谁就清楚了。
          </p>
        </Link>
      )}
      {(!active || active === '元数据') && (
        <Link
          href="/blog/pdf-metadata-preservation-merge"
          className="mt-6 block rounded-xl border border-line bg-surface p-6 shadow-sm transition-colors duration-fast hover:bg-subtle"
        >
          <p className="text-caption font-semibold uppercase tracking-wide text-brand">
            元数据 · Metadata
          </p>
          <p className="mt-1 text-xs text-fg-tertiary">2026-10-09</p>
          <h2 className="mt-1 text-title font-semibold text-fg">
            PDF 元数据保留：合并时该注意什么
          </h2>
          <p className="mt-1 text-sm font-medium text-fg-muted">
            PDF Metadata Preservation: What Survives a Merge
          </p>
          <p className="mt-2 text-sm text-fg-secondary">
            合并 PDF 时元数据不会自动跟着走：文档信息字典一个文件只有一份，合并后标题、作者、关键词只能留下其中一套值。这篇讲清哪些会留下、哪些会被覆盖，以及合并前后怎么回填。
          </p>
        </Link>
      )}
      {(!active || active === '质量对比') && (
        <Link
          href="/blog/pdf-merge-quality-before-after-test"
          className="mt-6 block rounded-xl border border-line bg-surface p-6 shadow-sm transition-colors duration-fast hover:bg-subtle"
        >
          <p className="text-caption font-semibold uppercase tracking-wide text-brand">
            质量对比 · Quality Comparison
          </p>
          <p className="mt-1 text-xs text-fg-tertiary">2026-10-08</p>
          <h2 className="mt-1 text-title font-semibold text-fg">
            PDF 合并前后：质量对比测试怎么做
          </h2>
          <p className="mt-1 text-sm font-medium text-fg-muted">
            PDF Quality Before and After Merge: How to Test It
          </p>
          <p className="mt-2 text-sm text-fg-secondary">
            PDF 质量对比要先固定住变量：同一份源文件、同一页、同一缩放比例。这篇讲清对比测试怎么搭、该看哪六个指标，以及三种会把结论带偏的测法。
          </p>
        </Link>
      )}
      {(!active || active === '压缩质量') && (
        <Link
          href="/blog/compressed-pdf-merge-quality-loss"
          className="mt-6 block rounded-xl border border-line bg-surface p-6 shadow-sm transition-colors duration-fast hover:bg-subtle"
        >
          <p className="text-caption font-semibold uppercase tracking-wide text-brand">
            压缩质量 · Compression Quality
          </p>
          <p className="mt-1 text-xs text-fg-tertiary">2026-10-07</p>
          <h2 className="mt-1 text-title font-semibold text-fg">
            PDF 压缩后合并：质量损失有多大
          </h2>
          <p className="mt-1 text-sm font-medium text-fg-muted">
            Compressed PDF Merge: How Much Quality Do You Lose
          </p>
          <p className="mt-2 text-sm text-fg-secondary">
            压缩过的 PDF 可以直接合并，合并这一步不再掉画质，真正糊掉画面的是同一张图被压了两次。这篇讲清先压缩还是先合并，以及一次成型的本地流程。
          </p>
        </Link>
      )}
      {(!active || active === '书签导航') && (
        <Link
          href="/blog/pdf-bookmark-merge-keep-outline"
          className="mt-6 block rounded-xl border border-line bg-surface p-6 shadow-sm transition-colors duration-fast hover:bg-subtle"
        >
          <p className="text-caption font-semibold uppercase tracking-wide text-brand">
            书签导航 · Bookmarks
          </p>
          <p className="mt-1 text-xs text-fg-tertiary">2026-10-06</p>
          <h2 className="mt-1 text-title font-semibold text-fg">
            PDF 书签合并：怎样保住导航结构
          </h2>
          <p className="mt-1 text-sm font-medium text-fg-muted">
            PDF Bookmark Merge: How to Keep the Navigation Outline
          </p>
          <p className="mt-2 text-sm text-fg-secondary">
            合并带书签的 PDF，常见结果是目录层级塌成一堆同名条目、页码全部错位。这篇讲清 PDF 书签合并为什么会丢导航，哪些做法能保住层级，并给出可复用的本地流程。
          </p>
        </Link>
      )}
      {(!active || active === '表单处理') && (
        <Link
          href="/blog/pdf-form-merge-keep-fields"
          className="mt-6 block rounded-xl border border-line bg-surface p-6 shadow-sm transition-colors duration-fast hover:bg-subtle"
        >
          <p className="text-caption font-semibold uppercase tracking-wide text-brand">
            表单处理 · PDF Forms
          </p>
          <p className="mt-1 text-xs text-fg-tertiary">2026-10-05</p>
          <h2 className="mt-1 text-title font-semibold text-fg">
            PDF 表单合并：怎样保住可填写字段
          </h2>
          <p className="mt-1 text-sm font-medium text-fg-muted">
            PDF Form Merge: How to Keep Fillable Fields
          </p>
          <p className="mt-2 text-sm text-fg-secondary">
            合并带表单的 PDF 后字段变灰、填不了、提交报错，多半是字段重名或页面对象被重建。这篇讲清哪些做法能保住字段、哪些一定丢，并给出可复用的本地流程。
          </p>
        </Link>
      )}
      {(!active || active === '加密文件') && (
        <Link
          href="/blog/encrypted-pdf-can-you-merge"
          className="mt-6 block rounded-xl border border-line bg-surface p-6 shadow-sm transition-colors duration-fast hover:bg-subtle"
        >
          <p className="text-caption font-semibold uppercase tracking-wide text-brand">
            加密文件 · Encrypted PDFs
          </p>
          <p className="mt-1 text-xs text-fg-tertiary">2026-10-04</p>
          <h2 className="mt-1 text-title font-semibold text-fg">
            PDF 加密文件能合并吗？密码、权限与签名处理指南
          </h2>
          <p className="mt-1 text-sm font-medium text-fg-muted">
            Can You Merge Encrypted PDFs? Passwords, Permissions, and Signatures
          </p>
          <p className="mt-2 text-sm text-fg-secondary">
            有密码的 PDF 不一定能直接合并：打开密码、权限限制、证书加密和数字签名要分别处理。这篇给出不绕过访问控制的本地操作流程。
          </p>
        </Link>
      )}

      {posts.filter((p) => p.slug !== 'encrypted-pdf-can-you-merge' && p.slug !== 'pdf-form-merge-keep-fields' && p.slug !== 'pdf-bookmark-merge-keep-outline' && p.slug !== 'compressed-pdf-merge-quality-loss' && p.slug !== 'pdf-merge-quality-before-after-test' && p.slug !== 'pdf-metadata-preservation-merge' && p.slug !== 'pdf-merge-vs-split-when-to-use').map((p) => (
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
