import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';

export const metadata: Metadata = {
  title: 'Android 合并 PDF：Chrome 浏览器方式 / Merge PDF on Android: Chrome Browser Method | PDFMergeNext',
  description:
    '在 Android 上用 Chrome 合并 PDF，无需安装任何应用。从免费在线工具到 Google Drive，再到完全本地的浏览器方案，三种方法一次讲清，含隐私对比。',
  keywords: [
    'android 合并 pdf',
    'merge pdf android',
    'chrome 合并 pdf',
    'merge pdf chrome',
    'android pdf 合并',
    'merge pdf android without app',
    'chrome pdf merger',
  ],
  alternates: {
    canonical: '/blog/android-merge-pdf-chrome',
    languages: {
      'zh-CN': '/blog/android-merge-pdf-chrome',
      'en-US': '/blog/android-merge-pdf-chrome',
      'x-default': '/blog/android-merge-pdf-chrome',
    },
  },
  openGraph: {
    title: 'Android 合并 PDF：Chrome 浏览器方式 · PDFMergeNext',
    description: '在 Android Chrome 中合并 PDF 的 3 种方法：在线工具、Google Drive、本地方案，含隐私对比。',
    url: `${SITE_URL}/blog/android-merge-pdf-chrome`,
    type: 'article',
    publishedTime: '2026-08-28T00:00:00.000Z',
    authors: ['PDFMergeNext'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Android 合并 PDF：Chrome 浏览器方式 · PDFMergeNext',
    description: '在 Android Chrome 中合并 PDF 的 3 种方法，含隐私对比。',
  },
};

// 文章级 FAQ：覆盖本文 PAA 长尾词，配 FAQPage schema 抢精选摘要。
const ARTICLE_FAQ: { q: string; a: string }[] = [
  {
    q: 'Android 上怎么合并 PDF？',
    a: '最简单的是直接用 Chrome 打开免费在线工具，或 Google Drive 网页版；想完全不上传、保护隐私，用本地浏览器工具（如 PDFMergeNext）在设备内合并。都不需要安装应用。',
  },
  {
    q: 'Android 自带合并 PDF 功能吗？',
    a: '不。Android 和 Chrome 自带的 PDF 查看器只能预览，不能合并。要合并需要借助在线工具、Google Drive 或浏览器本地工具。',
  },
  {
    q: 'Can I merge PDFs on Android without an app?',
    a: 'Yes. Use Chrome to open a free online PDF merger, or Google Drive web to combine files, or a browser-based local tool like PDFMergeNext that processes files entirely on your device.',
  },
  {
    q: 'Chrome 合并 PDF 文件会泄露隐私吗？',
    a: '取决于工具。在线工具会把文件上传服务器；本地浏览器工具（如 PDFMergeNext）用 WebAssembly 在设备内处理，文件不出手机，断网也能用。敏感文件优先选本地方案。',
  },
];

const TOC = [
  { id: 'lead', label: '一句话结论 / TL;DR' },
  { id: 'method1', label: '方法一：免费在线工具' },
  { id: 'method2', label: '方法二：Chrome + Google Drive' },
  { id: 'method3', label: '方法三：浏览器本地工具（隐私首选）' },
  { id: 'compare', label: '三种方法对比' },
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
            name: 'Android 合并 PDF：Chrome 浏览器方式',
            item: `${SITE_URL}/blog/android-merge-pdf-chrome`,
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
        headline: 'Android 合并 PDF：Chrome 浏览器方式 / Merge PDF on Android: Chrome Browser Method',
        description: '在 Android Chrome 中合并 PDF 的 3 种方法：在线工具、Google Drive、本地方案，含隐私对比。',
        author: { '@type': 'Person', name: 'PDFMergeNext', url: 'https://pdfmergenext.shop', '@id': 'https://pdfmergenext.shop/#organization' },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-08-28',
        dateModified: '2026-08-28',
        image: `${SITE_URL}/og`,
        url: `${SITE_URL}/blog/android-merge-pdf-chrome`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/android-merge-pdf-chrome` },
      },
    ],
  };

  return (
    <article className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-16">
      <header>
        <p className="text-caption font-semibold uppercase tracking-wide text-brand">Android 技巧 · Android Tips</p>
        <h1 className="mt-2 text-h1 font-bold tracking-tight text-fg">
          Android 合并 PDF：Chrome 浏览器方式 / Merge PDF on Android: Chrome Browser Method
        </h1>
        <p className="mt-3 text-body text-fg-secondary">
          在 Android 上合并 PDF 不需要装任何应用。Chrome 打开免费在线工具就能搞定；想保护隐私，本地浏览器工具更稳妥。下面把三种主流方法、适用场景和隐私差异一次讲清。
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
            <strong>偶尔合并一两份</strong>：Chrome 打开免费在线工具，最快。<strong>要保护隐私</strong>：用 <Link href="/" className="text-brand hover:underline">PDFMergeNext</Link> 这类浏览器本地工具，文件不出手机、断网可用。<strong>不推荐</strong>：把敏感文件拖去云端在线网站。
          </p>
          <p className="mt-2 text-fg-secondary">
            For occasional merges, use a free online tool in Chrome. For privacy-sensitive documents, use a browser-based local tool like PDFMergeNext — files never leave your device. Avoid uploading sensitive files to cloud-based sites.
          </p>
        </section>

        {/* 方法一：在线工具 */}
        <section id="method1">
          <h2 className="text-title font-semibold text-fg">方法一：免费在线工具 / Method 1: Free Online Tools</h2>
          <p className="mt-2 text-fg-secondary">用 Chrome 打开任意免费在线 PDF 合并网站，无需安装。这是最快的方式：</p>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-fg-secondary">
            <li>在 Chrome 打开你选定的在线合并工具。</li>
            <li>点「选择文件」或把 PDF 从文件管理器拖进页面。</li>
            <li>调整顺序后点「合并」，等待处理。</li>
            <li>下载合并后的 PDF 到手机（或直接分享）。</li>
          </ol>
          <p className="mt-2 text-fg-secondary">
            优点：零安装、快；缺点：文件要上传到对方服务器，有隐私风险，且免费版常有页数或文件大小限制（如 25 页、50MB）。
          </p>
        </section>

        {/* 方法二：Google Drive */}
        <section id="method2">
          <h2 className="text-title font-semibold text-fg">方法二：Chrome + Google Drive / Method 2: Chrome + Google Drive</h2>
          <p className="mt-2 text-fg-secondary">
            如果你已经在用 Google Drive，可以不装任何第三方：把要合并的 PDF 上传到 Drive，网页版打开，用第三方 Drive 应用（或直接把多个文件选中后「合并」）生成一个新文件。整个过程都在 Chrome 里完成。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-fg-secondary">
            <li>适合：已深度使用 Google 生态的用户。</li>
            <li>注意：文件仍会上传到 Google 服务器，敏感文档请谨慎。</li>
          </ul>
        </section>

        {/* 方法三：本地方案 */}
        <section id="method3">
          <h2 className="text-title font-semibold text-fg">方法三：浏览器本地工具（隐私首选）/ Method 3: Browser-based local tool</h2>
          <p className="mt-2 text-fg-secondary">
            用 Chrome 打开 <Link href="/" className="text-brand hover:underline">PDFMergeNext</Link>，选择文件 → 排序（或挑页）→ 合并 → 下载。文件在浏览器里用 WebAssembly 本地处理，不上传服务器，断网也能用。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-fg-secondary">
            <li><strong>优点</strong>：零安装、文件不出设备、支持 1-3,5 挑页、免费无水印、跨设备。</li>
            <li><strong>隐私</strong>：这是唯一真正「文件不出手机」的方案。</li>
          </ul>
        </section>

        {/* 对比 */}
        <section id="compare">
          <h2 className="text-title font-semibold text-fg">三种方法对比 / Comparison</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-subtle text-left text-fg">
                  <th className="border border-line px-3 py-2">维度</th>
                  <th className="border border-line px-3 py-2">在线工具</th>
                  <th className="border border-line px-3 py-2">Google Drive</th>
                  <th className="border border-line px-3 py-2">本地浏览器工具</th>
                </tr>
              </thead>
              <tbody className="text-fg-secondary">
                <tr>
                  <td className="border border-line px-3 py-2 font-medium text-fg">安装应用</td>
                  <td className="border border-line px-3 py-2">否</td>
                  <td className="border border-line px-3 py-2">否</td>
                  <td className="border border-line px-3 py-2">否</td>
                </tr>
                <tr>
                  <td className="border border-line px-3 py-2 font-medium text-fg">文件是否上传</td>
                  <td className="border border-line px-3 py-2">是</td>
                  <td className="border border-line px-3 py-2">是</td>
                  <td className="border border-line px-3 py-2">否</td>
                </tr>
                <tr>
                  <td className="border border-line px-3 py-2 font-medium text-fg">离线可用</td>
                  <td className="border border-line px-3 py-2">否</td>
                  <td className="border border-line px-3 py-2">否</td>
                  <td className="border border-line px-3 py-2">是</td>
                </tr>
                <tr>
                  <td className="border border-line px-3 py-2 font-medium text-fg">免费限制</td>
                  <td className="border border-line px-3 py-2">常有页数/大小限制</td>
                  <td className="border border-line px-3 py-2">存储空间限制</td>
                  <td className="border border-line px-3 py-2">无</td>
                </tr>
                <tr>
                  <td className="border border-line px-3 py-2 font-medium text-fg">挑页合并</td>
                  <td className="border border-line px-3 py-2">部分支持</td>
                  <td className="border border-line px-3 py-2">弱</td>
                  <td className="border border-line px-3 py-2">1-3,5 语法</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-line bg-subtle p-6">
          <h2 className="text-title font-semibold text-fg">在 Android 上试试</h2>
          <p className="mt-2 text-fg-secondary">
            <Link href="/" className="text-brand hover:underline">打开 PDFMergeNext</Link>，在 Chrome 里合并你的 PDF——文件全程留在手机。想了解本地处理的原理，可读{' '}
            <Link href="/blog/how-zero-upload-pdf-tools-work" className="text-brand hover:underline">零上传 PDF 工具工作原理</Link>
            ，或{' '}
            <Link href="/blog/merge-pdf-iphone-safari" className="text-brand hover:underline">iPhone Safari 合并教程</Link>
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
            href="/blog/merge-pdf-iphone-safari"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">iPhone 合并 PDF：Safari 完整教程</p>
            <p className="mt-1 text-xs text-fg-secondary">Merge PDF on iPhone</p>
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
