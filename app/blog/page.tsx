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

      <Link
        href="/blog/why-local-pdf-merge-beats-online"
        className="mt-6 block rounded-xl border border-line bg-surface p-6 shadow-sm transition-colors duration-fast hover:bg-subtle"
      >
        <p className="text-caption font-semibold uppercase tracking-wide text-brand">
          PDF 合并 · 隐私优先
        </p>
        <h2 className="mt-1 text-title font-semibold text-fg">
          为什么本地PDF合并比在线更安全
        </h2>
        <p className="mt-1 text-sm font-medium text-fg-muted">
          Why Local PDF Merge Beats Online — 7 Reasons
        </p>
        <p className="mt-2 text-sm text-fg-secondary">
          从数据链路、服务器日志到中间人攻击逐层拆解本地 vs 在线合并的安全性差异，附本地方案对比与验证方法。
        </p>
      </Link>

      <Link
        href="/blog/merge-pdf-no-upload"
        className="mt-6 block rounded-xl border border-line bg-surface p-6 shadow-sm transition-colors duration-fast hover:bg-subtle"
      >
        <p className="text-caption font-semibold uppercase tracking-wide text-brand">
          PDF 合并 · 中文指南
        </p>
        <h2 className="mt-1 text-title font-semibold text-fg">
          合并PDF不上传：安全免费的本地离线解决方案
        </h2>
        <p className="mt-1 text-sm font-medium text-fg-muted">
          Merge PDF Without Uploading — Free & Secure Local Solution
        </p>
        <p className="mt-2 text-sm text-fg-secondary">
          3 种不上传合并方案对比（浏览器/桌面/系统工具）、PDFMergeNext 完整使用步骤、隐私合规指南。
        </p>
      </Link>

      <Link
        href="/blog/how-zero-upload-pdf-tools-work"
        className="mt-6 block rounded-xl border border-line bg-surface p-6 shadow-sm transition-colors duration-fast hover:bg-subtle"
      >
        <p className="text-caption font-semibold uppercase tracking-wide text-brand">
          隐私技术 · 原理剖析
        </p>
        <h2 className="mt-1 text-title font-semibold text-fg">
          零上传PDF工具：工作原理全解析
        </h2>
        <p className="mt-1 text-sm font-medium text-fg-muted">
          How Zero-Upload PDF Tools Work — WebAssembly & Local Processing
        </p>
        <p className="mt-2 text-sm text-fg-secondary">
          WebAssembly + pdf-lib 本地架构拆解：零网络请求如何实现、如何用 DevTools 自己验证、限制与边界。
        </p>
      </Link>

      <Link
        href="/blog/browser-pdf-merge-privacy"
        className="mt-6 block rounded-xl border border-line bg-surface p-6 shadow-sm transition-colors duration-fast hover:bg-subtle"
      >
        <p className="text-caption font-semibold uppercase tracking-wide text-brand">
          隐私技术 · 趋势解读
        </p>
        <h2 className="mt-1 text-title font-semibold text-fg">
          浏览器合并PDF：WebAssembly 时代的隐私革命
        </h2>
        <p className="mt-1 text-sm font-medium text-fg-muted">
          Browser PDF Merge: A Privacy Revolution
        </p>
        <p className="mt-2 text-sm text-fg-secondary">
          为什么在浏览器里合并 PDF 是一场隐私革命：隐私的重心从服务器移回你的设备，以及谁最该用这种方式。
        </p>
      </Link>
    </PageShell>
  );
}
