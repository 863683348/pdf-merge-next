import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';

export const metadata: Metadata = {
  title: 'iPhone 合并 PDF：Safari 完整教程 / Merge PDF on iPhone: Safari Guide | PDFMergeNext',
  description:
    '在 iPhone 上用 Safari 合并 PDF，无需安装应用。从系统内置的文件应用到分享表单技巧，再到浏览器本地方案，本文给出完整教程与推荐工具对比。',
  keywords: [
    'iphone 合并 pdf',
    'merge pdf iphone',
    'iphone pdf 合并',
    'safari 合并 pdf',
    'merge pdf safari iphone',
    'iphone merge pdf without app',
    'ios 合并 pdf',
    'merge pdf ios',
  ],
  alternates: {
    canonical: '/blog/merge-pdf-iphone-safari',
    languages: {
      'zh-CN': '/blog/merge-pdf-iphone-safari',
      'en-US': '/blog/merge-pdf-iphone-safari',
      'x-default': '/blog/merge-pdf-iphone-safari',
    },
  },
  openGraph: {
    title: 'iPhone 合并 PDF：Safari 完整教程 · PDFMergeNext',
    description: '无需安装应用，在 iPhone Safari 中合并 PDF 的完整教程：文件应用方法、分享表单技巧、本地方案对比。',
    url: `${SITE_URL}/blog/merge-pdf-iphone-safari`,
    type: 'article',
    publishedTime: '2026-08-27T00:00:00.000Z',
    authors: ['PDFMergeNext'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iPhone 合并 PDF：Safari 完整教程 · PDFMergeNext',
    description: '无需安装应用，在 iPhone Safari 中合并 PDF 的完整教程。',
  },
};

// 文章级 FAQ：覆盖本文 PAA 长尾词，配 FAQPage schema 抢精选摘要。
const ARTICLE_FAQ: { q: string; a: string }[] = [
  {
    q: 'iPhone 上怎么合并 PDF？',
    a: '最简单的是用系统自带的「文件」应用：选择多个 PDF → 创建 PDF，全程离线。要更多功能（挑页、无页数限制），用浏览器本地工具如 PDFMergeNext。',
  },
  {
    q: 'iPhone Safari 能直接合并 PDF 吗？',
    a: 'Safari 本身不能合并，但可以配合内置「文件」应用完成合并，或打开浏览器本地工具在设备内处理。无需安装第三方应用。',
  },
  {
    q: 'How to merge PDFs on iPhone without an app?',
    a: 'Use the built-in Files app: select multiple PDFs, tap the more menu, then Create PDF. For advanced merging (page selection, no 15-page limit), use a browser-based local tool like PDFMergeNext.',
  },
  {
    q: 'iPhone 合并 PDF 会降低文件质量吗？',
    a: '系统「文件」应用会保留原始质量；在线工具压缩输出时则可能降低。要保质量选本地方案，且文件不出设备更安全。',
  },
];

const TOC = [
  { id: 'lead', label: '一句话结论 / TL;DR' },
  { id: 'files', label: '方法一：文件应用（系统内置）' },
  { id: 'sharesheet', label: '方法二：分享表单技巧' },
  { id: 'local', label: '方法三：浏览器本地方案（隐私首选）' },
  { id: 'compare', label: '推荐工具对比' },
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
            name: 'iPhone 合并 PDF：Safari 完整教程',
            item: `${SITE_URL}/blog/merge-pdf-iphone-safari`,
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
        headline: 'iPhone 合并 PDF：Safari 完整教程 / Merge PDF on iPhone: Safari Guide',
        description: '无需安装应用，在 iPhone Safari 中合并 PDF 的完整教程：文件应用方法、分享表单技巧、本地方案对比。',
        author: { '@type': 'Person', name: 'PDFMergeNext', url: 'https://pdfmergenext.shop', '@id': 'https://pdfmergenext.shop/#organization' },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-08-27',
        dateModified: '2026-08-27',
        image: `${SITE_URL}/og`,
        url: `${SITE_URL}/blog/merge-pdf-iphone-safari`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/merge-pdf-iphone-safari` },
      },
    ],
  };

  return (
    <article className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-16">
      <header>
        <p className="text-caption font-semibold uppercase tracking-wide text-brand">iPhone 技巧 · iOS Tips</p>
        <h1 className="mt-2 text-h1 font-bold tracking-tight text-fg">
          iPhone 合并 PDF：Safari 完整教程 / Merge PDF on iPhone: Safari Guide
        </h1>
        <p className="mt-3 text-body text-fg-secondary">
          在 iPhone 上合并 PDF 不需要安装任何应用。系统自带的「文件」应用就能搞定；要挑页或更多页数，浏览器本地方案更顺手。下面把三种方法、限制与隐私差异一次讲清。
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
            <strong>快速简单合并</strong>：系统「文件」应用，免费离线。<strong>要挑页或 50+ 页</strong>：用 <Link href="/" className="text-brand hover:underline">PDFMergeNext</Link> 这类浏览器本地工具，不上传、支持 1-3,5 挑页。<strong>不推荐</strong>：把敏感文件拖去在线网站。
          </p>
          <p className="mt-2 text-fg-secondary">
            For quick merges, use the built-in Files app — free and offline. For page selection or 50+ page jobs, use a browser-based local tool like PDFMergeNext. Avoid uploading sensitive files to cloud-based sites.
          </p>
        </section>

        {/* 文件应用 */}
        <section id="files">
          <h2 className="text-title font-semibold text-fg">方法一：文件应用（系统内置）/ Method 1: Files App</h2>
          <p className="mt-2 text-fg-secondary">iPhone 内置的文件应用可以在不离开 Safari 的情况下合并 PDF：</p>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-fg-secondary">
            <li>在 Safari 下载 PDF：点分享按钮 → 存储到「文件」。</li>
            <li>打开「文件」应用，定位到你保存 PDF 的位置。</li>
            <li>点右上「选择」，勾选两个或多个 PDF。</li>
            <li>点右下「⋯」→「创建 PDF」。</li>
            <li>分享结果：将合并文件发送回 Safari 或邮件。</li>
          </ol>
          <p className="mt-2 text-fg-secondary">
            优点：免费、离线、系统自带；限制：每次合并最多 15 页、无法重新排序、无压缩选项。需要更多功能时用第三方工具。
          </p>
        </section>

        {/* 分享表单 */}
        <section id="sharesheet">
          <h2 className="text-title font-semibold text-fg">方法二：分享表单技巧 / Method 2: Share Sheet Tricks</h2>
          <p className="mt-2 text-fg-secondary">
            iOS 的分享表单（Share Sheet）可以把「文件」里的多个 PDF 一起传给支持合并的应用。例如在「文件」里选中多个 PDF → 分享 → 选择支持「合并为 PDF」的快捷指令或应用，一次完成。这条路径适合已有轻量快捷指令的进阶用户。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-fg-secondary">
            <li>适合：已有「快捷指令」自动化习惯的用户。</li>
            <li>限制：需要预先配置快捷指令，对新手有门槛。</li>
          </ul>
        </section>

        {/* 本地方案 */}
        <section id="local">
          <h2 className="text-title font-semibold text-fg">方法三：浏览器本地方案（隐私首选）/ Method 3: Browser-based local tool</h2>
          <p className="mt-2 text-fg-secondary">
            用 Safari 打开 <Link href="/" className="text-brand hover:underline">PDFMergeNext</Link>，选择文件 → 排序（或挑页）→ 合并 → 下载。文件在浏览器里用 WebAssembly 本地处理，不上传服务器，断网也能用，也没有 15 页限制。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-fg-secondary">
            <li><strong>优点</strong>：零安装、无页数限制、支持 1-3,5 挑页、文件不出设备、跨设备。</li>
            <li><strong>隐私</strong>：和「文件」应用一样，文件不出手机——这是它的核心卖点。</li>
          </ul>
        </section>

        {/* 工具对比 */}
        <section id="compare">
          <h2 className="text-title font-semibold text-fg">推荐工具对比 / Tool Comparison</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-subtle text-left text-fg">
                  <th className="border border-line px-3 py-2">工具</th>
                  <th className="border border-line px-3 py-2">免费</th>
                  <th className="border border-line px-3 py-2">限制</th>
                  <th className="border border-line px-3 py-2">适合</th>
                </tr>
              </thead>
              <tbody className="text-fg-secondary">
                <tr>
                  <td className="border border-line px-3 py-2 font-medium text-fg">文件应用</td>
                  <td className="border border-line px-3 py-2">是</td>
                  <td className="border border-line px-3 py-2">15 页</td>
                  <td className="border border-line px-3 py-2">快速简单合并</td>
                </tr>
                <tr>
                  <td className="border border-line px-3 py-2 font-medium text-fg">PDFMergeNext（本地）</td>
                  <td className="border border-line px-3 py-2">是</td>
                  <td className="border border-line px-3 py-2">无</td>
                  <td className="border border-line px-3 py-2">挑页/大文件/隐私</td>
                </tr>
                <tr>
                  <td className="border border-line px-3 py-2 font-medium text-fg">在线网站</td>
                  <td className="border border-line px-3 py-2">是</td>
                  <td className="border border-line px-3 py-2">页数/大小限制，需上传</td>
                  <td className="border border-line px-3 py-2">快速（不敏感文件）</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-line bg-subtle p-6">
          <h2 className="text-title font-semibold text-fg">在 iPhone 上试试</h2>
          <p className="mt-2 text-fg-secondary">
            <Link href="/" className="text-brand hover:underline">打开 PDFMergeNext</Link>，在 Safari 里合并你的 PDF——文件全程留在手机。想了解本地处理的原理，可读{' '}
            <Link href="/blog/how-zero-upload-pdf-tools-work" className="text-brand hover:underline">零上传 PDF 工具工作原理</Link>
            ，或{' '}
            <Link href="/blog/android-merge-pdf-chrome" className="text-brand hover:underline">Android Chrome 合并教程</Link>
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
            href="/blog/android-merge-pdf-chrome"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">Android 合并 PDF：Chrome 浏览器方式</p>
            <p className="mt-1 text-xs text-fg-secondary">Merge PDF on Android</p>
          </Link>
          <Link
            href="/blog/merge-pdf-windows-free-tools"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">Windows 合并 PDF：免费工具指南</p>
            <p className="mt-1 text-xs text-fg-secondary">Free Tools on Windows</p>
          </Link>
          <Link
            href="/blog/merge-pdf-on-mobile"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">手机合并PDF：iOS/Android 完整教程</p>
            <p className="mt-1 text-xs text-fg-secondary">Merge PDF on Mobile</p>
          </Link>
          <Link
            href="/blog/pdf-page-selection-1-3-5-syntax"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">PDF 挑页合并：1-3,5 语法详解</p>
            <p className="mt-1 text-xs text-fg-secondary">Page Selection Syntax</p>
          </Link>
        </div>
      </section>
    </article>
  );
}
