import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';

export const metadata: Metadata = {
  title: 'Mac 合并 PDF：3 种方法详解 / Merge PDF on Mac: 3 Methods Explained | PDFMergeNext',
  description:
    '在 Mac 上合并 PDF 比以往更容易。从内置的访达/预览到浏览器在线方案，3 种方法一次讲清，含隐私对比和 macOS Sequoia 兼容说明。',
  keywords: [
    'mac 合并 pdf',
    'merge pdf mac',
    'mac pdf 合并',
    '预览 合并 pdf',
    '访达 合并 pdf',
    'merge pdf macos',
    'combine pdf mac',
    'mac pdf merger',
    'macos 合并 pdf 教程',
  ],
  alternates: {
    canonical: '/blog/merge-pdf-mac-3-methods',
    languages: {
      'zh-CN': '/blog/merge-pdf-mac-3-methods',
      'en-US': '/blog/merge-pdf-mac-3-methods',
      'x-default': '/blog/merge-pdf-mac-3-methods',
    },
  },
  openGraph: {
    title: 'Mac 合并 PDF：3 种方法详解 · PDFMergeNext',
    description: '预览 App、访达快捷操作、浏览器在线方案——3 种 Mac 合并 PDF 的方法一次讲清。',
    url: `${SITE_URL}/blog/merge-pdf-mac-3-methods`,
    type: 'article',
    publishedTime: '2026-08-25T00:00:00.000Z',
    authors: ['PDFMergeNext'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mac 合并 PDF：3 种方法详解 · PDFMergeNext',
    description: '预览 App、访达快捷操作、浏览器在线方案——3 种 Mac 合并 PDF 的方法。',
  },
};

// 文章级 FAQ：覆盖本文 PAA 长尾词，配 FAQPage schema 抢精选摘要。
const ARTICLE_FAQ: { q: string; a: string }[] = [
  {
    q: 'Mac 自带怎么合并 PDF？',
    a: '用自带的「预览」App：打开第一个 PDF → 视图 → 缩略图 → 把第二个 PDF 的缩略图拖进来 → 文件 → 导出。全程离线、免费、无需安装任何软件。',
  },
  {
    q: 'Can I merge PDFs on Mac without any app?',
    a: 'Yes. The built-in Preview app can merge PDFs: open the first file, go to View > Thumbnails, drag thumbnails from a second PDF into the sidebar, then File > Export. No third-party software needed.',
  },
  {
    q: '哪种方法最安全？',
    a: '看文件是否离开设备。Mac 自带「预览」和本地浏览器工具都完全在设备上处理，不上传任何数据；把文件拖到云端在线网站则会上传服务器。敏感文件优先选本地方案。',
  },
  {
    q: 'Preview 能挑页合并吗？',
    a: '可以。在缩略图侧栏里，你可以删除不想要的页面、拖动调整顺序，然后导出。不过跨多份文件批量挑页时，浏览器本地工具（如 PDFMergeNext）的 1-3,5 语法更高效。',
  },
];

const TOC = [
  { id: 'lead', label: '一句话结论 / TL;DR' },
  { id: 'preview', label: '方法一：预览 App（免费内置）' },
  { id: 'finder', label: '方法二：访达快捷操作' },
  { id: 'browser', label: '方法三：浏览器本地工具' },
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
            name: 'Mac 合并 PDF：3 种方法详解',
            item: `${SITE_URL}/blog/merge-pdf-mac-3-methods`,
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
        headline: 'Mac 合并 PDF：3 种方法详解 / Merge PDF on Mac: 3 Methods Explained',
        description:
          '在 Mac 上合并 PDF 比以往更容易。从内置的访达/预览到浏览器在线方案，3 种方法一次讲清，含隐私对比。',
        author: { '@type': 'Person', name: 'PDFMergeNext', url: 'https://pdfmergenext.shop', '@id': 'https://pdfmergenext.shop/#organization' },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-08-25',
        dateModified: '2026-08-25',
        image: `${SITE_URL}/og`,
        url: `${SITE_URL}/blog/merge-pdf-mac-3-methods`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/merge-pdf-mac-3-methods` },
      },
    ],
  };

  return (
    <article className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-16">
      <header>
        <p className="text-caption font-semibold uppercase tracking-wide text-brand">Mac 技巧 · Mac Tips</p>
        <h1 className="mt-2 text-h1 font-bold tracking-tight text-fg">
          Mac 合并 PDF：3 种方法详解 / Merge PDF on Mac: 3 Methods Explained
        </h1>
        <p className="mt-3 text-body text-fg-secondary">
          在 Mac 上合并 PDF 不需要装任何付费软件。系统自带的「预览」就能搞定；要批量或挑页，浏览器本地工具更顺手。下面把三种主流方法、适用场景和隐私差异一次讲清。
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
            <strong>偶尔合并一两份</strong>：用系统自带「预览」，免费且完全离线。<strong>要批量或挑页</strong>：用 <Link href="/" className="text-brand hover:underline">PDFMergeNext</Link> 这类浏览器本地工具，不上传、支持 1-3,5 挑页。<strong>不推荐</strong>：把敏感文件拖去云端在线网站。
          </p>
          <p className="mt-2 text-fg-secondary">
            For occasional merges, use the built-in Preview app — free and fully offline. For batch jobs or page selection, use a browser-based local tool like PDFMergeNext. Avoid uploading sensitive files to cloud-based sites.
          </p>
        </section>

        {/* 预览 */}
        <section id="preview">
          <h2 className="text-title font-semibold text-fg">方法一：预览 App（免费内置）/ Method 1: Preview</h2>
          <p className="mt-2 text-fg-secondary">macOS 自带的「预览」能直接合并 PDF，不需要任何第三方软件。</p>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-fg-secondary">
            <li>用「预览」打开第一个 PDF 文件。</li>
            <li>点顶部菜单「显示」→「缩略图」（或 Cmd+Option+2）打开侧栏。</li>
            <li>在访达里选中第二个 PDF，按住拖动到「预览」的缩略图侧栏里。</li>
            <li>在侧栏里拖动缩略图调整顺序（要删页就选中后按 Delete）。</li>
            <li>点「文件」→「导出」，存成新的 PDF。</li>
          </ol>
          <p className="mt-2 text-fg-secondary">
            优点：免费、离线、系统自带；缺点：多文件批量合并时操作繁琐，没有挑页语法，文件过大可能卡顿。
          </p>
        </section>

        {/* 访达 */}
        <section id="finder">
          <h2 className="text-title font-semibold text-fg">方法二：访达快捷操作 / Method 2: Finder Quick Action</h2>
          <p className="mt-2 text-fg-secondary">
            如果你装了 Adobe Acrobat 或其他支持「快速操作」的 PDF 工具，可以在访达里全选多个 PDF，右键 → 快速操作 → 合并为 PDF。系统内置的「快速操作」其实也走预览引擎，本质和方法一相同，只是省去了手动拖拽。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-fg-secondary">
            <li>适合：一次合并同一目录下的多个文件。</li>
            <li>限制：合并顺序按文件名的字母序，无法精细控制挑页。</li>
          </ul>
        </section>

        {/* 浏览器 */}
        <section id="browser">
          <h2 className="text-title font-semibold text-fg">方法三：浏览器本地工具 / Method 3: Browser-based local tool</h2>
          <p className="mt-2 text-fg-secondary">
            用 Safari 或 Chrome 打开 <Link href="/" className="text-brand hover:underline">PDFMergeNext</Link>，拖入 PDF → 排序（或挑页）→ 合并 → 下载。文件在浏览器里用 WebAssembly 本地处理，不上传服务器，断网也能用。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-fg-secondary">
            <li><strong>优点</strong>：零安装、跨设备（Mac 上做的也能在手机继续）、支持 1-3,5 挑页、支持批量多文件。</li>
            <li><strong>隐私</strong>：和预览一样，文件不出设备——这是它的核心卖点。</li>
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
                  <th className="border border-line px-3 py-2">预览 App</th>
                  <th className="border border-line px-3 py-2">访达快速操作</th>
                  <th className="border border-line px-3 py-2">浏览器本地工具</th>
                </tr>
              </thead>
              <tbody className="text-fg-secondary">
                <tr>
                  <td className="border border-line px-3 py-2 font-medium text-fg">费用</td>
                  <td className="border border-line px-3 py-2">免费</td>
                  <td className="border border-line px-3 py-2">免费/需工具</td>
                  <td className="border border-line px-3 py-2">免费</td>
                </tr>
                <tr>
                  <td className="border border-line px-3 py-2 font-medium text-fg">文件是否上传</td>
                  <td className="border border-line px-3 py-2">否</td>
                  <td className="border border-line px-3 py-2">否</td>
                  <td className="border border-line px-3 py-2">否</td>
                </tr>
                <tr>
                  <td className="border border-line px-3 py-2 font-medium text-fg">批量多文件</td>
                  <td className="border border-line px-3 py-2">一般</td>
                  <td className="border border-line px-3 py-2">好</td>
                  <td className="border border-line px-3 py-2">好</td>
                </tr>
                <tr>
                  <td className="border border-line px-3 py-2 font-medium text-fg">挑页合并</td>
                  <td className="border border-line px-3 py-2">手动删页</td>
                  <td className="border border-line px-3 py-2">无</td>
                  <td className="border border-line px-3 py-2">1-3,5 语法</td>
                </tr>
                <tr>
                  <td className="border border-line px-3 py-2 font-medium text-fg">跨设备</td>
                  <td className="border border-line px-3 py-2">仅本机</td>
                  <td className="border border-line px-3 py-2">仅本机</td>
                  <td className="border border-line px-3 py-2">任意设备</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-line bg-subtle p-6">
          <h2 className="text-title font-semibold text-fg">在 Mac 上试试</h2>
          <p className="mt-2 text-fg-secondary">
            <Link href="/" className="text-brand hover:underline">打开 PDFMergeNext</Link>，拖入你的 PDF——文件全程留在本机。想了解本地处理的原理，可读{' '}
            <Link href="/blog/how-zero-upload-pdf-tools-work" className="text-brand hover:underline">零上传 PDF 工具工作原理</Link>
            ，或{' '}
            <Link href="/blog/merge-pdf-on-mobile" className="text-brand hover:underline">手机端合并教程</Link>
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
            href="/blog/merge-pdf-on-mobile"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">手机合并PDF：iOS/Android 教程</p>
            <p className="mt-1 text-xs text-fg-secondary">Merge PDF on Mobile</p>
          </Link>
          <Link
            href="/blog/pdf-page-selection-1-3-5-syntax"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">PDF 挑页合并：1-3,5 语法详解</p>
            <p className="mt-1 text-xs text-fg-secondary">Page Selection Syntax</p>
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
