import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';

export const metadata: Metadata = {
  title: '大文件 PDF 合并：浏览器内存策略 | Large PDF Merge: Browser Memory Strategies | PDFMergeNext',
  description:
    '合并大 PDF 文件时浏览器内存不足怎么办？了解浏览器内存策略：分块处理、Web Worker、Streams API，让 PDFMergeNext 在本地处理 GB 级文件。',
  keywords: [
    'large pdf merge',
    '大文件 PDF 合并',
    'browser memory pdf',
    '浏览器内存 PDF',
    'pdf merge memory limit',
    'webassembly pdf merge',
    'pdf merge without upload',
    'PDFMergeNext 内存策略',
    'large file pdf merge browser',
  ],
  alternates: {
    canonical: '/blog/large-pdf-merge-browser-memory',
    languages: {
      'zh-CN': '/blog/large-pdf-merge-browser-memory',
      'en-US': '/blog/large-pdf-merge-browser-memory',
      'x-default': '/blog/large-pdf-merge-browser-memory',
    },
  },
  openGraph: {
    title: '大文件 PDF 合并：浏览器内存策略 · PDFMergeNext',
    description: '合并大 PDF 文件时浏览器内存不足？了解分块处理、Web Worker、Streams API 等浏览器内存策略，让 PDFMergeNext 在本地处理 GB 级文件。',
    type: 'article',
    url: `${SITE_URL}/blog/large-pdf-merge-browser-memory`,
    siteName: 'PDFMergeNext',
    publishedTime: '2026-08-29T00:00:00.000Z',
    images: [{ url: `${SITE_URL}/og`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '大文件 PDF 合并：浏览器内存策略 · PDFMergeNext',
    description: '合并大 PDF 文件时浏览器内存不足？了解浏览器内存策略，让 PDFMergeNext 在本地处理 GB 级文件。',
    images: [`${SITE_URL}/og`],
  },
};

const FAQ_ZH = [
  {
    q: 'PDFMergeNext 能合并多大的 PDF？',
    a: '理论上没有硬性上限，受限于你的浏览器内存。实际测试中，2GB 以内的 PDF 在主流浏览器上都能流畅处理。超过 2GB 时建议使用桌面软件。',
  },
  {
    q: 'Why does my browser crash when merging large PDFs?',
    a: 'Browser crashes during large PDF merges are usually caused by memory limits. Each PDF page loads into memory, and merging multiple large files can exceed your browser\'s allocation. PDFMergeNext uses chunked processing to minimize this risk.',
  },
  {
    q: '浏览器内存策略具体是什么？',
    a: '分块处理（chunked processing）把大 PDF 拆成小块处理，避免一次性加载整个文件。Web Worker 在后台线程运行，不阻塞主线程。Streams API 允许流式读写，减少内存峰值。',
  },
];

const TOC = [
  { id: 'lead', label: '一句话结论 / TL;DR' },
  { id: 'problem', label: '大文件合并的内存问题' },
  { id: 'chunked', label: '分块处理策略' },
  { id: 'worker', label: 'Web Worker 后台处理' },
  { id: 'streams', label: 'Streams API 流式处理' },
  { id: 'tips', label: '实用建议' },
  { id: 'faq', label: '常见问题' },
];

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '首页', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: '博客', item: `${SITE_URL}/blog` },
          {
            '@type': 'ListItem',
            position: 3,
            name: '大文件 PDF 合并：浏览器内存策略',
            item: `${SITE_URL}/blog/large-pdf-merge-browser-memory`,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: FAQ_ZH.map((it) => ({
          '@type': 'Question',
          name: it.q,
          acceptedAnswer: { '@type': 'Answer', text: it.a },
        })),
      },
      {
        '@type': 'Article',
        headline: '大文件 PDF 合并：浏览器内存策略 / Large PDF Merge: Browser Memory Strategies',
        description: '合并大 PDF 文件时浏览器内存不足怎么办？了解分块处理、Web Worker、Streams API 等浏览器内存策略。',
        author: { '@type': 'Person', name: 'PDFMergeNext', url: 'https://pdfmergenext.shop', '@id': 'https://pdfmergenext.shop/#organization' },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-08-29',
        dateModified: '2026-08-29',
        image: `${SITE_URL}/og`,
        url: `${SITE_URL}/blog/large-pdf-merge-browser-memory`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/large-pdf-merge-browser-memory` },
      },
    ],
  };

  return (
    <article className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-16">
      <header>
        <p className="text-caption font-semibold uppercase tracking-wide text-brand">
          PDF 合并 · 高级技巧
        </p>
        <h1 className="mt-2 text-h1 font-bold tracking-tight text-fg">
          大文件 PDF 合并：浏览器内存策略 / Large PDF Merge: Browser Memory Strategies
        </h1>
        <p className="mt-3 text-body text-fg-secondary">
          合并大 PDF 文件时，浏览器内存不足是常见问题。这篇讲清楚为什么会出现这个问题，以及 PDFMergeNext 如何在浏览器本地处理 GB 级文件。
        </p>
        <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-subtle px-3 py-1 text-caption font-medium text-fg-muted">
          阅读约 5 分钟 · 5 min read
        </p>
      </header>

      {/* 目录锚点 */}
      <nav aria-label="文章目录" className="mt-8 rounded-xl border border-line bg-subtle p-5">
        <p className="text-caption font-semibold uppercase tracking-wide text-fg-muted">目录 / Contents</p>
        <ul className="mt-2 grid gap-1 sm:grid-cols-2">
          {TOC.map((t) => (
            <li key={t.id}>
              <a href={`#${t.id}`} className="text-sm text-brand hover:underline">
                {t.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-8 space-y-8 text-body text-fg">
        {/* 导语 */}
        <section id="lead" className="rounded-xl border border-brand/30 bg-brand/5 p-6">
          <h2 className="text-title font-semibold text-fg">一句话结论</h2>
          <p className="mt-2 text-fg-secondary">
            <strong>大文件 PDF 合并</strong> 的核心挑战是内存。PDFMergeNext 用分块处理 + Web Worker + Streams API 在浏览器本地处理 GB 级文件，文件从不上传。
          </p>
          <p className="mt-2 text-fg-secondary">
            The core challenge of large PDF merging is memory. PDFMergeNext uses chunked processing + Web Workers + Streams API to handle GB-sized files locally in your browser — nothing is uploaded.
          </p>
        </section>

        {/* 问题 */}
        <section id="problem">
          <h2 className="text-title font-semibold text-fg">大文件合并的内存问题 / The memory problem</h2>
          <p className="mt-2 text-fg-secondary">
            浏览器合并 PDF 时，需要把每个文件加载到内存中解析。一个 500MB 的 PDF 可能需要 1-2GB 的内存峰值。当合并多个大文件时，内存需求会叠加，浏览器可能直接崩溃。
          </p>
          <p className="mt-2 text-fg-secondary">
            When merging PDFs in a browser, each file must be loaded into memory for parsing. A 500MB PDF may need 1-2GB of peak memory. Merging multiple large files compounds this, and the browser may crash.
          </p>
          <div className="mt-4 rounded-lg border border-line bg-subtle p-4">
            <p className="text-sm text-fg-muted">
              典型浏览器内存限制：Chrome 约 2-4GB（取决于系统内存），Safari 约 1-2GB。超过这个限制，页面会卡死或崩溃。
            </p>
          </div>
        </section>

        {/* 分块处理 */}
        <section id="chunked">
          <h2 className="text-title font-semibold text-fg">分块处理策略 / Chunked processing</h2>
          <p className="mt-2 text-fg-secondary">
            分块处理是把大 PDF 拆成小块（比如每块 50 页），逐块处理后再合并结果。这样内存峰值从"整个文件"降到"一块文件"。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-fg-secondary">
            <li>读取 PDF 的前 N 页 → 处理 → 写入临时缓冲区</li>
            <li>释放已处理页面的内存</li>
            <li>继续读取下一批页</li>
            <li>所有块处理完毕后，合并缓冲区中的结果</li>
          </ul>
          <p className="mt-3 text-fg-secondary">
            Chunked processing splits a large PDF into smaller batches (e.g., 50 pages at a time), processes each batch, then merges the results. This reduces peak memory from "entire file" to "one batch."
          </p>
        </section>

        {/* Web Worker */}
        <section id="worker">
          <h2 className="text-title font-semibold text-fg">Web Worker 后台处理 / Web Workers</h2>
          <p className="mt-2 text-fg-secondary">
            主线程负责 UI 渲染，Web Worker 在后台线程处理 PDF。这有两个好处：
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-fg-secondary">
            <li>UI 不会卡死——你可以继续滚动、调整文件顺序</li>
            <li>处理进度可以实时更新（进度条、当前页数）</li>
            <li>主线程和 Worker 线程的内存是隔离的，崩溃影响范围更小</li>
          </ul>
          <p className="mt-3 text-fg-secondary">
            The main thread handles UI rendering while Web Workers process PDFs in background threads. This keeps the UI responsive and provides real-time progress updates.
          </p>
        </section>

        {/* Streams API */}
        <section id="streams">
          <h2 className="text-title font-semibold text-fg">Streams API 流式处理 / Streams API</h2>
          <p className="mt-2 text-fg-secondary">
            Web Streams API 允许你以流的方式读取和写入数据，而不是一次性加载全部内容。对于 PDF 合并，这意味着：
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-fg-secondary">
            <li>读取源 PDF 时流式解析，不一次性加载全部</li>
            <li>写入目标 PDF 时流式拼接页面，边处理边写入</li>
            <li>内存峰值保持在较低水平</li>
          </ul>
          <p className="mt-3 text-fg-secondary">
            The Web Streams API allows reading and writing data in a streaming fashion rather than loading everything at once. This keeps memory peaks low even for multi-gigabyte files.
          </p>
        </section>

        {/* 实用建议 */}
        <section id="tips">
          <h2 className="text-title font-semibold text-fg">实用建议 / Practical tips</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-fg-secondary">
            <li><strong>拆分大文件</strong>：如果某个 PDF 超过 1GB，先拆成多个小文件再合并</li>
            <li><strong>关闭其他标签</strong>：合并大文件前关闭浏览器中其他标签，释放内存</li>
            <li><strong>使用 Chrome</strong>：Chrome 的 V8 引擎对大内存处理比 Safari 更稳定</li>
            <li><strong>耐心</strong>：大文件处理需要时间，不要关闭页面</li>
            <li><strong>定期保存</strong>：PDFMergeNext 支持断点续传，网络中断后可继续</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="rounded-xl border border-line bg-subtle p-6">
          <h2 className="text-title font-semibold text-fg">马上试试</h2>
          <p className="mt-2 text-fg-secondary">
            打开 PDFMergeNext，拖入你的大 PDF 文件。分块处理 + Web Worker + Streams API，在浏览器本地完成合并——文件从不上传。
          </p>
          <Link
            href="/"
            className="mt-4 inline-block rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-on-primary transition-colors duration-fast hover:bg-brand-hover"
          >
            开始合并大文件 →
          </Link>
        </section>

        {/* FAQ */}
        <section id="faq" className="rounded-xl border border-line p-6">
          <h2 className="text-title font-semibold text-fg">常见问题</h2>
          <div className="mt-4 space-y-4">
            {FAQ_ZH.map((it) => (
              <div key={it.q}>
                <h3 className="text-base font-semibold text-fg">{it.q}</h3>
                <p className="mt-1 text-fg-secondary">{it.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 相关文章 */}
      <section className="mx-auto mt-12 max-w-content px-4 sm:px-6">
        <h2 className="text-title font-semibold text-fg">相关阅读 / Related</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Link
            href="/blog/how-to-merge-pdf-step-by-step"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">怎么合并PDF：完整步骤图解</p>
            <p className="mt-1 text-xs text-fg-secondary">Step-by-step merge guide / 完整步骤</p>
          </Link>
          <Link
            href="/blog/why-local-offline-pdf-merge"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">为什么选择本地离线 PDF 合并</p>
            <p className="mt-1 text-xs text-fg-secondary">Privacy-first PDF Merge / 隐私优先</p>
          </Link>
          <Link
            href="/blog/how-zero-upload-pdf-tools-work"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">零上传PDF工具：工作原理全解析</p>
            <p className="mt-1 text-xs text-fg-secondary">How Zero-Upload PDF Tools Work / WebAssembly</p>
          </Link>
          <Link
            href="/blog/pdf-merge-no-upload"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">如何不上传合并 PDF</p>
            <p className="mt-1 text-xs text-fg-secondary">Verifiable guide / 可验证指南</p>
          </Link>
        </div>
      </section>
    </article>
  );
}
