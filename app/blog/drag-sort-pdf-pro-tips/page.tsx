import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';

export const metadata: Metadata = {
  title: '拖拽排序 PDF：进阶技巧 / Drag-Sort PDF: Pro Tips| PDFMergeNext',
  description:
    '掌握拖拽排序的进阶技巧：批量调整顺序、使用快捷键、避免常见错误，让 PDF 合并效率翻倍。',
  keywords: [
    '合并多个pdf',
    'merge multiple pdfs',
    '怎么合并pdf',
    'pdf合并 教程',
    'merge multiple pdf into one',
    'combine multiple pdf files',
    'pdf 合并 多个 文件',
    '合并pdf 三步',
    'how to merge multiple pdfs',
  ],
  alternates: {
    canonical: '/blog/3-steps-merge-multiple-pdfs',
    languages: {
      'zh-CN': '/blog/3-steps-merge-multiple-pdfs',
      'en-US': '/blog/3-steps-merge-multiple-pdfs',
      'x-default': '/blog/3-steps-merge-multiple-pdfs',
    },
  },
  openGraph: {
    title: '三步合并多个 PDF / Drag-Sort PDF: Pro Tips· PDFMergeNext',
    description: '选工具 → 选文件 → 点合并，三步合并任意数量 PDF。全程本地处理，文件不上传。',
    url: `${SITE_URL}/blog/3-steps-merge-multiple-pdfs`,
    type: 'article',
    publishedTime: '2026-08-21T00:00:00.000Z',
    authors: ['PDFMergeNext'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '三步合并多个 PDF / Drag-Sort PDF: Pro Tips· PDFMergeNext',
    description: '选工具 → 选文件 → 点合并，三步合并任意数量 PDF。',
  },
};

// 文章级 FAQ：覆盖本文 PAA 长尾词，配 FAQPage schema 抢精选摘要。
const ARTICLE_FAQ: { q: string; a: string }[] = [
  {
    q: '合并多个 PDF 需要付费吗？',
    a: '不需要。PDFMergeNext 免费合并任意数量的 PDF，无水印、不限页数。文件在浏览器本地处理，也不存在按用量收费的服务器成本。',
  },
  {
    q: 'Can I merge multiple PDFs for free?',
    a: 'Yes. PDFMergeNext merges any number of PDFs for free, with no watermark and no page limits. Since files are processed locally in your browser, there is no server cost to pass on to you.',
  },
  {
    q: '合并后原来的文件会被修改吗？',
    a: '不会。合并工具读取原文件生成一个新文件，原 PDF 保持原样。你可以放心保留原始版本，合并结果是一个全新的独立文件。',
  },
  {
    q: '一次最多能合并几个 PDF？',
    a: '浏览器本地工具没有硬性数量限制，取决于你的设备内存。几十个中等大小的 PDF 通常没问题；超大文件建议分批合并以防内存吃紧。',
  },
];

const TOC = [
  { id: 'lead', label: '一句话结论 / TL;DR' },
  { id: 'step1', label: '第一步：选工具' },
  { id: 'step2', label: '第二步：选文件' },
  { id: 'step3', label: '第三步：点合并' },
  { id: 'tips', label: '常见错误与提醒' },
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
            name: '三步合并多个 PDF',
            item: `${SITE_URL}/blog/3-steps-merge-multiple-pdfs`,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: ARTICLE_FAQ.map((it) => ({
          '@type': 'Question',
          name: it.q,
          acceptedAnswer: { '@type': 'Answer', text: it.a },
        })),
      },
      {
        '@type': 'Article',
        headline: '拖拽排序 PDF：进阶技巧 / 3 Steps to Merge Multiple PDFs',
        description:
          '合并多个 PDF 文件其实很简单。本文教你三步完成：选择工具、上传文件、点击合并。含隐私提醒和常见错误避免方法。',
        author: { '@type': 'Person', name: 'PDFMergeNext', url: 'https://pdfmergenext.shop', '@id': 'https://pdfmergenext.shop/#organization' },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-08-21',
        dateModified: '2026-08-21',
        image: `${SITE_URL}/og`,
        url: `${SITE_URL}/blog/3-steps-merge-multiple-pdfs`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/3-steps-merge-multiple-pdfs` },
      },
    ],
  };

  return (
    <article className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-16">
      <header>
        <p className="text-caption font-semibold uppercase tracking-wide text-brand">PDF 合并 · 教程</p>
        <h1 className="mt-2 text-h1 font-bold tracking-tight text-fg">
          三步合并多个 PDF / 3 Steps to Merge Multiple PDFs
        </h1>
        <p className="mt-3 text-body text-fg-secondary">
          合并多个 PDF 没有想象中复杂：选工具、选文件、点合并，三步完成。下面用浏览器本地工具演示，全程文件不出设备，也提醒几个容易踩的坑。
        </p>
        <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-subtle px-3 py-1 text-caption font-medium text-fg-muted">
          阅读约 3 分钟 · 3 min read
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
            <strong>合并多个 PDF 只需三步</strong>：① 打开一个本地处理工具（如 <Link href="/" className="text-brand hover:underline">PDFMergeNext</Link>）② 把要合并的文件全部加进来并按需排序 ③ 点"合并"，下载结果。没有第四步——不注册、不付钱、不上传。
          </p>
          <p className="mt-2 text-fg-secondary">
            Merging multiple PDFs takes three steps: open a local tool, add and order your files, hit Merge and download. No sign-up, no payment, no upload.
          </p>
        </section>

        {/* 第一步 */}
        <section id="step1">
          <h2 className="text-title font-semibold text-fg">第一步：选工具 / Choose a tool</h2>
          <p className="mt-2 text-fg-secondary">
            这是唯一需要花点心思的一步。建议选<strong>本地处理</strong>的工具：文件在浏览器里解析和重组，不上传服务器。验证方法很简单——断网后再打开一次，还能用就是本地处理。选择「上传到云端」的网站意味着你的合同、证件会经过别人的服务器。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-fg-secondary">
            <li>本地处理：文件不出设备，隐私有保障。</li>
            <li>云端处理：方便但文件经第三方服务器，留意隐私政策。</li>
            <li>桌面/命令行：本地但需要安装或会用终端。</li>
          </ul>
        </section>

        {/* 第二步 */}
        <section id="step2">
          <h2 className="text-title font-semibold text-fg">第二步：选文件并排序 / Pick and order your files</h2>
          <p className="mt-2 text-fg-secondary">
            在 PDFMergeNext 页面点"添加文件"，从本地多选要合并的 PDF（支持拖拽）。文件会按添加顺序排列，想调整先后就拖动卡片。需要挑页合并时，切到挑页模式输入 <code className="mx-1 rounded bg-subtle px-1.5 py-0.5 text-sm">1-3, 5</code> 这类范围即可。
          </p>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-fg-secondary">
            <li>点"添加文件"，多选你的 PDF（可一次全选）。</li>
            <li>在列表里拖动，确定最终合并顺序。</li>
            <li>（可选）用挑页模式只合并指定页。</li>
          </ol>
        </section>

        {/* 第三步 */}
        <section id="step3">
          <h2 className="text-title font-semibold text-fg">第三步：点合并，下载结果 / Merge and download</h2>
          <p className="mt-2 text-fg-secondary">
            点"合并"，几秒后浏览器生成一个新 PDF 并触发下载。整个处理在你设备的内存里完成，没有上传请求，所以快且安全。合并完成后记得确认文件页数正确，再用于发送或归档。
          </p>
        </section>

        {/* 常见错误 */}
        <section id="tips">
          <h2 className="text-title font-semibold text-fg">常见错误与提醒 / Common mistakes</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-fg-secondary">
            <li><strong>顺序搞错</strong>：合并前一定检查拖拽后的顺序，导出后想改只能重来。</li>
            <li><strong>原文件被覆盖的担心</strong>：本地工具生成的是新文件，原 PDF 不会被改动。</li>
            <li><strong>敏感文件用了云端工具</strong>：合同、身份证、财务报表别走上传服务器的那类网站。</li>
            <li><strong>超大文件一次性全选</strong>：几十个几百页的文件容易让手机/低配电脑内存吃紧，建议分批。</li>
          </ul>
        </section>

        <section className="rounded-xl border border-line bg-subtle p-6">
          <h2 className="text-title font-semibold text-fg">现在就试</h2>
          <p className="mt-2 text-fg-secondary">
            <Link href="/" className="text-brand hover:underline">打开 PDFMergeNext</Link>，三步合并你的 PDF——文件全程不出浏览器。想深入了解隐私机制，可读{' '}
            <Link href="/blog/why-local-offline-pdf-merge" className="text-brand hover:underline">本地离线合并的优势</Link>
            ，或{' '}
            <Link href="/blog/privacy-first-pdf-workflow" className="text-brand hover:underline">隐私友好的 PDF 工作流设计</Link>
            。
          </p>
          <Link
            href="/"
            className="mt-4 inline-block rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-on-primary transition-colors duration-fast hover:bg-brand-hover"
          >
            开始合并 →
          </Link>
        </section>

        {/* 可见 FAQ 段 */}
        <section id="faq" className="rounded-xl border border-line p-6">
          <h2 className="text-title font-semibold text-fg">常见问题</h2>
          <div className="mt-4 space-y-4">
            {ARTICLE_FAQ.map((it) => (
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
            href="/blog/5-pdf-merge-methods-compared"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">PDF 合并的 5 种方法对比</p>
            <p className="mt-1 text-xs text-fg-secondary">在线/桌面/命令行/插件/编程库</p>
          </Link>
          <Link
            href="/blog/how-to-merge-pdf-without-uploading"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">如何不上传合并 PDF</p>
            <p className="mt-1 text-xs text-fg-secondary">可验证的完整指南 / Verifiable Guide</p>
          </Link>
          <Link
            href="/blog/merge-pdf-no-upload"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">合并PDF不上传：本地离线的安全方案</p>
            <p className="mt-1 text-xs text-fg-secondary">Merge PDF Without Uploading</p>
          </Link>
          <Link
            href="/blog/privacy-first-pdf-workflow"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">隐私友好的 PDF 工作流设计</p>
            <p className="mt-1 text-xs text-fg-secondary">4 Stages, Zero Upload</p>
          </Link>
        </div>
      </section>
    </article>
  );
}
