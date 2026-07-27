'use client';

import Link from 'next/link';
import { PageShell } from '@/components/atoms/PageShell';
import { useT } from '@/i18n/provider';

export default function BlogPage() {
  const t = useT();

  return (
    <PageShell titleKey="blog.title">
      <p className="mt-2 text-body text-fg-secondary">{t('blog.desc')}</p>

      <Link
        href="/blog/why-local-offline-pdf-merge"
        className="mt-8 block rounded-xl border border-line bg-surface p-6 shadow-sm transition-colors duration-fast hover:bg-subtle"
      >
        <p className="text-caption font-semibold uppercase tracking-wide text-brand">
          {t('blog.featured.label')}
        </p>
        <h2 className="mt-1 text-title font-semibold text-fg">
          {t('blog.featured.title')}
        </h2>
        <p className="mt-2 text-sm text-fg-secondary">
          {t('blog.featured.excerpt')}
        </p>
      </Link>

      <Link
        href="/blog/how-to-merge-pdf-without-uploading"
        className="mt-6 block rounded-xl border border-line bg-surface p-6 shadow-sm transition-colors duration-fast hover:bg-subtle"
      >
        <p className="text-caption font-semibold uppercase tracking-wide text-brand">
          PDF 合并 · 操作教程
        </p>
        <h2 className="mt-1 text-title font-semibold text-fg">
          如何不上传合并 PDF:可验证的完整指南
        </h2>
        <p className="mt-1 text-sm font-medium text-fg-muted">
          How to Merge PDF Without Uploading (Step-by-Step, Verifiable)
        </p>
        <p className="mt-2 text-sm text-fg-secondary">
          三种不上传合并方法对比，附 DevTools 验证零上传教程与挑页合并技巧。Three no-upload methods compared, plus a DevTools trick to verify it yourself.
        </p>
      </Link>

      <Link
        href="/blog/pdfmergenext-vs-smallpdf-vs-ilovepdf"
        className="mt-6 block rounded-xl border border-line bg-surface p-6 shadow-sm transition-colors duration-fast hover:bg-subtle"
      >
        <p className="text-caption font-semibold uppercase tracking-wide text-brand">
          PDF 工具 · 对比测评
        </p>
        <h2 className="mt-1 text-title font-semibold text-fg">
          PDFMergeNext vs Smallpdf vs iLovePDF：2026 隐私与限制全对比
        </h2>
        <p className="mt-1 text-sm font-medium text-fg-muted">
          PDFMergeNext vs Smallpdf vs iLovePDF: Honest 2026 Comparison
        </p>
        <p className="mt-2 text-sm text-fg-secondary">
          全面的三工具对比——隐私、免费限制、挑页合并、水印、价格，附第三方实测数据。Honest comparison across privacy, free limits, page selection, watermarks, and pricing with third-party test data.
        </p>
      </Link>
    </PageShell>
  );
}
