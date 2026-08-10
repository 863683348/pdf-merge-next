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
        href="/blog/client-side-vs-server-side-pdf-tools"
        className="mt-6 block rounded-xl border border-line bg-surface p-6 shadow-sm transition-colors duration-fast hover:bg-subtle"
      >
        <p className="text-caption font-semibold uppercase tracking-wide text-brand">
          架构对比 · Architecture
        </p>
        <p className="mt-1 text-xs text-fg-tertiary">2026-08-10</p>
        <h2 className="mt-1 text-title font-semibold text-fg">
          客户端 PDF 工具 vs 服务器端：架构对比
        </h2>
        <p className="mt-1 text-sm font-medium text-fg-muted">
          Client-side vs Server-side PDF Tools: Architecture Compared
        </p>
        <p className="mt-2 text-sm text-fg-secondary">
          同样叫合并 PDF，架构可能完全不同。客户端工具在浏览器本地处理、文件不出设备；服务器端工具把文件上传云端。隐私、速度、离线能力的差异全讲透。
        </p>
      </Link>

      <Link
        href="/blog/pdfmergenext-privacy-design"
        className="mt-6 block rounded-xl border border-line bg-surface p-6 shadow-sm transition-colors duration-fast hover:bg-subtle"
      >
        <p className="text-caption font-semibold uppercase tracking-wide text-brand">
          产品设计 · Privacy Design
        </p>
        <p className="mt-1 text-xs text-fg-tertiary">2026-08-09</p>
        <h2 className="mt-1 text-title font-semibold text-fg">
          PDFMergeNext 隐私设计白皮书
        </h2>
        <p className="mt-1 text-sm font-medium text-fg-muted">
          PDFMergeNext Privacy Design Deep Dive
        </p>
        <p className="mt-2 text-sm text-fg-secondary">
          PDFMergeNext 的隐私设计是怎么落地的：文件为什么不上传、本地处理的技术架构、日志策略与安全边界。
        </p>
      </Link>

      <Link
        href="/blog/offline-pdf-merge-limits"
        className="mt-6 block rounded-xl border border-line bg-surface p-6 shadow-sm transition-colors duration-fast hover:bg-subtle"
      >
        <p className="text-caption font-semibold uppercase tracking-wide text-brand">
          技术边界 · Offline Limits
        </p>
        <p className="mt-1 text-xs text-fg-tertiary">2026-08-08</p>
        <h2 className="mt-1 text-title font-semibold text-fg">
          100% 离线PDF合并：理论可行性的边界
        </h2>
        <p className="mt-1 text-sm font-medium text-fg-muted">
          100% Offline PDF Merge: Limits of What's Possible
        </p>
        <p className="mt-2 text-sm text-fg-secondary">
          离线PDF合并到底能走多远？浏览器本地处理的理论边界、实际瓶颈（内存/性能/加密 PDF/扫描件），以及哪些场景确实做不到 100% 离线。
        </p>
      </Link>

      <Link
        href="/blog/browser-pdf-merge-privacy"
        className="mt-6 block rounded-xl border border-line bg-surface p-6 shadow-sm transition-colors duration-fast hover:bg-subtle"
      >
        <p className="text-caption font-semibold uppercase tracking-wide text-brand">
          隐私技术 · Privacy Tech
        </p>
        <p className="mt-1 text-xs text-fg-tertiary">2026-08-07</p>
        <h2 className="mt-1 text-title font-semibold text-fg">
          浏览器合并PDF：WebAssembly 时代的隐私革命
        </h2>
        <p className="mt-1 text-sm font-medium text-fg-muted">
          Browser PDF Merge: Privacy Revolution
        </p>
        <p className="mt-2 text-sm text-fg-secondary">
          浏览器合并PDF 为什么是隐私革命：文件不离开设备、没有服务器日志、没有传输链路。WebAssembly + pdf-lib 让本地合并足够流畅。
        </p>
      </Link>

<Link
        href="/blog/how-zero-upload-pdf-tools-work"
        className="mt-6 block rounded-xl border border-line bg-surface p-6 shadow-sm transition-colors duration-fast hover:bg-subtle"
      >
        <p className="text-caption font-semibold uppercase tracking-wide text-brand">
          隐私技术 · 原理剖析
        </p>
        <p className="mt-1 text-xs text-fg-tertiary">2026-08-06</p>
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
        href="/blog/why-local-pdf-merge-beats-online"
        className="mt-6 block rounded-xl border border-line bg-surface p-6 shadow-sm transition-colors duration-fast hover:bg-subtle"
      >
        <p className="text-caption font-semibold uppercase tracking-wide text-brand">
          PDF 合并 · 隐私优先
        </p>
        <p className="mt-1 text-xs text-fg-tertiary">2026-08-05</p>
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
        <p className="mt-1 text-xs text-fg-tertiary">2026-07-30</p>
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
        href="/blog/how-to-merge-pdf-without-uploading"
        className="mt-6 block rounded-xl border border-line bg-surface p-6 shadow-sm transition-colors duration-fast hover:bg-subtle"
      >
        <p className="text-caption font-semibold uppercase tracking-wide text-brand">
          PDF 合并 · 操作教程
        </p>
        <p className="mt-1 text-xs text-fg-tertiary">2026-07-27</p>
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
        <p className="mt-1 text-xs text-fg-tertiary">2026-07-27</p>
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
        href="/blog/why-local-offline-pdf-merge"
        className="mt-8 block rounded-xl border border-line bg-surface p-6 shadow-sm transition-colors duration-fast hover:bg-subtle"
      >
        <p className="text-caption font-semibold uppercase tracking-wide text-brand">
          {t('blog.featured.label')}
        </p>
        <p className="mt-1 text-xs text-fg-tertiary">2026-07-22</p>
        <h2 className="mt-1 text-title font-semibold text-fg">
          {t('blog.featured.title')}
        </h2>
        <p className="mt-2 text-sm text-fg-secondary">
          {t('blog.featured.excerpt')}
        </p>
      </Link>
    </PageShell>
  );
}
