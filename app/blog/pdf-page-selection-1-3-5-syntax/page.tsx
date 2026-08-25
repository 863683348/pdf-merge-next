import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';

export const metadata: Metadata = {
  title: 'PDF 挑页合并：1-3,5 语法详解 / PDF Page Selection: 1-3,5 Syntax | PDFMergeNext',
  description:
    '学会用 1-3,5 语法挑页合并 PDF，只保留你需要的页面。单页、连续范围、跨文件挑页一次讲清，含进阶技巧与常见错误。',
  keywords: [
    'pdf挑页合并',
    'pdf 1-3 5 语法',
    'pdf page selection',
    '挑页合并',
    'merge specific pages pdf',
    'pdf select pages to merge',
    'pdf 合并 指定页',
    'pdf page range syntax',
    'pdf 挑页 教程',
  ],
  alternates: {
    canonical: '/blog/pdf-page-selection-1-3-5-syntax',
    languages: {
      'zh-CN': '/blog/pdf-page-selection-1-3-5-syntax',
      'en-US': '/blog/pdf-page-selection-1-3-5-syntax',
      'x-default': '/blog/pdf-page-selection-1-3-5-syntax',
    },
  },
  openGraph: {
    title: 'PDF 挑页合并：1-3,5 语法详解 · PDFMergeNext',
    description: '单页、连续范围、跨文件挑页一次讲清，只合并你需要的页面。',
    url: `${SITE_URL}/blog/pdf-page-selection-1-3-5-syntax`,
    type: 'article',
    publishedTime: '2026-08-23T00:00:00.000Z',
    authors: ['PDFMergeNext'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PDF 挑页合并：1-3,5 语法详解 · PDFMergeNext',
    description: '用 1-3,5 语法挑页合并 PDF，只保留你需要的页面。',
  },
};

// 文章级 FAQ：覆盖本文 PAA 长尾词，配 FAQPage schema 抢精选摘要。
const ARTICLE_FAQ: { q: string; a: string }[] = [
  {
    q: '1-3,5 语法是什么意思？',
    a: '1-3,5 表示「第 1 到第 3 页，以及第 5 页」。逗号分隔多个片段，连字符表示连续范围。例如 1-3,5 会选中第 1、2、3、5 页；2,4-6 会选中第 2、4、5、6 页。',
  },
  {
    q: 'How does the 1-3,5 page syntax work?',
    a: 'It selects page 1 through 3, plus page 5. Commas separate individual pages or ranges, and hyphens define continuous ranges. For example, 1-3,5 selects pages 1, 2, 3 and 5.',
  },
  {
    q: '可以跨多个 PDF 文件挑页合并吗？',
    a: '可以。挑页模式支持对每个文件分别设置页面范围，然后一次性合并。这样你可以在多个文件的几十页里，只提取各自需要的部分组成一个新文档。',
  },
  {
    q: '挑页合并会修改原文件吗？',
    a: '不会。合并工具读取原文件生成一个全新的 PDF，原始文件保持原样。你可以放心保留原始版本，挑页结果是一个独立的文件。',
  },
];

const TOC = [
  { id: 'lead', label: '一句话结论 / TL;DR' },
  { id: 'syntax', label: '1-3,5 语法速查' },
  { id: 'howto', label: '在 PDFMergeNext 里怎么用' },
  { id: 'cross', label: '跨文件挑页合并' },
  { id: 'tips', label: '常见错误与进阶技巧' },
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
            name: 'PDF 挑页合并：1-3,5 语法详解',
            item: `${SITE_URL}/blog/pdf-page-selection-1-3-5-syntax`,
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
        headline: 'PDF 挑页合并：1-3,5 语法详解 / PDF Page Selection: 1-3,5 Syntax',
        description:
          '学会用 1-3,5 语法挑页合并 PDF，只保留你需要的页面。单页、连续范围、跨文件挑页一次讲清。',
        author: { '@type': 'Person', name: 'PDFMergeNext', url: 'https://pdfmergenext.shop', '@id': 'https://pdfmergenext.shop/#organization' },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-08-23',
        dateModified: '2026-08-23',
        image: `${SITE_URL}/og`,
        url: `${SITE_URL}/blog/pdf-page-selection-1-3-5-syntax`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/pdf-page-selection-1-3-5-syntax` },
      },
    ],
  };

  return (
    <article className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-16">
      <header>
        <p className="text-caption font-semibold uppercase tracking-wide text-brand">PDF 合并 · 进阶</p>
        <h1 className="mt-2 text-h1 font-bold tracking-tight text-fg">
          PDF 挑页合并：1-3,5 语法详解 / PDF Page Selection: 1-3,5 Syntax
        </h1>
        <p className="mt-3 text-body text-fg-secondary">
          合并 PDF 不一定非要整份文件。用 1-3,5 这样的语法，你可以从一份几十页的文档里只挑出需要的页，也可以跨多个文件挑页后合并成一份新文档。本文把语法和操作一次讲透。
        </p>
        <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-subtle px-3 py-1 text-caption font-medium text-fg-muted">
          阅读约 4 分钟 · 4 min read
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
            在 <Link href="/" className="text-brand hover:underline">PDFMergeNext</Link> 的挑页模式里，输入 <code className="mx-1 rounded bg-subtle px-1.5 py-0.5 text-sm">1-3,5</code> 表示「第 1 到 3 页 + 第 5 页」，每个文件可以单独设置范围，最后一起合并。语法很简单：<strong>逗号分隔片段，连字符表示范围</strong>。
          </p>
          <p className="mt-2 text-fg-secondary">
            In PDFMergeNext's page-selection mode, type <code className="mx-1 rounded bg-subtle px-1.5 py-0.5 text-sm">1-3,5</code> to keep pages 1-3 and 5. Commas separate items, hyphens define ranges, and each file can have its own selection.
          </p>
        </section>

        {/* 语法 */}
        <section id="syntax">
          <h2 className="text-title font-semibold text-fg">1-3,5 语法速查 / Syntax cheat sheet</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-subtle text-left text-fg">
                  <th className="border border-line px-3 py-2">输入</th>
                  <th className="border border-line px-3 py-2">选中的页</th>
                </tr>
              </thead>
              <tbody className="text-fg-secondary">
                <tr><td className="border border-line px-3 py-2 font-medium text-fg">5</td><td className="border border-line px-3 py-2">第 5 页</td></tr>
                <tr><td className="border border-line px-3 py-2 font-medium text-fg">1-3</td><td className="border border-line px-3 py-2">第 1、2、3 页（连续范围）</td></tr>
                <tr><td className="border border-line px-3 py-2 font-medium text-fg">1,3,5</td><td className="border border-line px-3 py-2">第 1、3、5 页（多个单页）</td></tr>
                <tr><td className="border border-line px-3 py-2 font-medium text-fg">1-3,5</td><td className="border border-line px-3 py-2">第 1、2、3、5 页（范围+单页）</td></tr>
                <tr><td className="border border-line px-3 py-2 font-medium text-fg">2-4,7-8</td><td className="border border-line px-3 py-2">第 2、3、4、7、8 页（两个范围）</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 操作 */}
        <section id="howto">
          <h2 className="text-title font-semibold text-fg">在 PDFMergeNext 里怎么用 / How to use it</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-fg-secondary">
            <li>打开 <Link href="/" className="text-brand hover:underline">PDFMergeNext</Link>，把 PDF 拖进页面。</li>
            <li>对每个文件点「挑页」，进入挑页模式。</li>
            <li>在输入框里填页面范围，例如 <code className="mx-1 rounded bg-subtle px-1.5 py-0.5 text-sm">1-3,5</code>。</li>
            <li>确认每份文件的选中页，然后点「合并」。</li>
            <li>下载新生成的 PDF，里面只包含你选中的页面。</li>
          </ol>
          <p className="mt-2 text-fg-secondary">
            整个过程在浏览器本地完成，文件不上传——挑页合并同样享受隐私保护。
          </p>
        </section>

        {/* 跨文件 */}
        <section id="cross">
          <h2 className="text-title font-semibold text-fg">跨文件挑页合并 / Cross-file page selection</h2>
          <p className="mt-2 text-fg-secondary">
            挑页模式最大的价值在于跨文件重组：比如把合同 A 的第 1-3 页、合同 B 的第 2 页、附件 C 的全部页合成一份新的完整文档。每个文件单独设置范围，合并后按文件顺序输出。
          </p>
          <p className="mt-2 text-fg-secondary">
            The real power is cross-file: take pages 1-3 from contract A, page 2 from contract B, and all of appendix C, then merge them into one document. Set each file's range independently and merge in order.
          </p>
        </section>

        {/* 常见错误 */}
        <section id="tips">
          <h2 className="text-title font-semibold text-fg">常见错误与进阶技巧 / Common mistakes & tips</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-fg-secondary">
            <li><strong>别用「页数」当「页码」</strong>：页码是从 1 开始的实际位置，不是文件里的 PDF 标签页编号。</li>
            <li><strong>范围别写反</strong>：<code className="mx-1 rounded bg-subtle px-1.5 py-0.5 text-sm">5-3</code> 是无效的，要从小到大写。</li>
            <li><strong>空格会自动忽略</strong>：<code className="mx-1 rounded bg-subtle px-1.5 py-0.5 text-sm">1-3, 5</code> 和 <code className="mx-1 rounded bg-subtle px-1.5 py-0.5 text-sm">1-3,5</code> 等价。</li>
            <li><strong>超范围会提示</strong>：如果输入了文件不存在的页码，工具会标红提醒，先检查再合并。</li>
            <li><strong>挑页后可继续排序</strong>：如果合并顺序不对，回到列表重新拖一下顺序再合并。</li>
          </ul>
        </section>

        <section className="rounded-xl border border-line bg-subtle p-6">
          <h2 className="text-title font-semibold text-fg">马上试试挑页合并</h2>
          <p className="mt-2 text-fg-secondary">
            <Link href="/" className="text-brand hover:underline">打开 PDFMergeNext</Link>，拖入文件，用 <code className="mx-1 rounded bg-subtle px-1.5 py-0.5 text-sm">1-3,5</code> 挑出你需要的页面——全程本地处理、不上传。想了解完整的本地工作流，可读{' '}
            <Link href="/blog/privacy-first-pdf-workflow" className="text-brand hover:underline">隐私友好的 PDF 工作流设计</Link>
            ，或{' '}
            <Link href="/blog/5-pdf-merge-methods-compared" className="text-brand hover:underline">5 种 PDF 合并方法对比</Link>
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
            href="/blog/3-steps-merge-multiple-pdfs"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">三步合并多个 PDF</p>
            <p className="mt-1 text-xs text-fg-secondary">最简单的方法 / Easiest Method</p>
          </Link>
          <Link
            href="/blog/merge-pdf-on-mobile"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">手机合并PDF：iOS/Android 教程</p>
            <p className="mt-1 text-xs text-fg-secondary">Merge PDF on Mobile</p>
          </Link>
          <Link
            href="/blog/5-pdf-merge-methods-compared"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">PDF 合并的 5 种方法对比</p>
            <p className="mt-1 text-xs text-fg-secondary">在线/桌面/命令行/插件/编程库</p>
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
