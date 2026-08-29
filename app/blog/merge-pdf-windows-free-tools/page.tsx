import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';

export const metadata: Metadata = {
  title: 'Windows 合并 PDF：免费工具指南 / Merge PDF on Windows: Free Tools | PDFMergeNext',
  description:
    '在 Windows 上合并 PDF 不需要付费软件。从系统内置的浏览器本地方案到免费开源工具，几个免费选项各有优势，本文给出实用比较与隐私建议。',
  keywords: [
    'windows 合并 pdf',
    'merge pdf windows',
    'windows pdf 合并',
    'free pdf merge windows',
    'windows 10 合并 pdf',
    'windows 11 合并 pdf',
    'merge pdf windows free',
    'combine pdf windows',
    'windows pdf merger free',
  ],
  alternates: {
    canonical: '/blog/merge-pdf-windows-free-tools',
    languages: {
      'zh-CN': '/blog/merge-pdf-windows-free-tools',
      'en-US': '/blog/merge-pdf-windows-free-tools',
      'x-default': '/blog/merge-pdf-windows-free-tools',
    },
  },
  openGraph: {
    title: 'Windows 合并 PDF：免费工具指南 · PDFMergeNext',
    description: 'Windows 上免费合并 PDF 的实用方案：浏览器本地工具、PowerShell、免费开源软件，含隐私对比。',
    url: `${SITE_URL}/blog/merge-pdf-windows-free-tools`,
    type: 'article',
    publishedTime: '2026-08-26T00:00:00.000Z',
    authors: ['PDFMergeNext'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Windows 合并 PDF：免费工具指南 · PDFMergeNext',
    description: 'Windows 上免费合并 PDF 的实用方案，含隐私对比。',
  },
};

// 文章级 FAQ：覆盖本文 PAA 长尾词，配 FAQPage schema 抢精选摘要。
const ARTICLE_FAQ: { q: string; a: string }[] = [
  {
    q: 'Windows 上免费合并 PDF 用什么工具？',
    a: '不想装软件就用浏览器本地工具（如 PDFMergeNext，文件不出设备）；喜欢命令行可用 PowerShell；要图形界面又有完整功能，可考虑免费开源软件（如 PDFsam Basic 免费版）。',
  },
  {
    q: 'Windows 自带合并 PDF 功能吗？',
    a: '不。Windows 的「打印到 PDF」只能单个导出，不能直接合并多个文件。要合并需要浏览器本地工具、PowerShell 或第三方免费软件。',
  },
  {
    q: 'How to merge PDFs on Windows for free?',
    a: 'The easiest free option is a browser-based local tool like PDFMergeNext — no install, files stay on your device. Advanced users can use PowerShell commands or free open-source tools like PDFsam Basic.',
  },
  {
    q: '用免费在线工具合并 PDF 安全吗？',
    a: '在线网站会把文件上传到对方服务器，免费版还常有页数/大小限制，敏感文档不建议。本地浏览器工具和开源软件都在本机处理，更安全。',
  },
];

const TOC = [
  { id: 'lead', label: '一句话结论 / TL;DR' },
  { id: 'browser', label: '方案一：浏览器本地工具（推荐）' },
  { id: 'powershell', label: '方案二：PowerShell（零安装）' },
  { id: 'desktop', label: '方案三：免费开源桌面软件' },
  { id: 'compare', label: '方案对比' },
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
            name: 'Windows 合并 PDF：免费工具指南',
            item: `${SITE_URL}/blog/merge-pdf-windows-free-tools`,
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
        headline: 'Windows 合并 PDF：免费工具指南 / Merge PDF on Windows: Free Tools',
        description: 'Windows 上免费合并 PDF 的实用方案：浏览器本地工具、PowerShell、免费开源软件，含隐私对比。',
        author: { '@type': 'Person', name: 'PDFMergeNext', url: 'https://pdfmergenext.shop', '@id': 'https://pdfmergenext.shop/#organization' },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-08-26',
        dateModified: '2026-08-26',
        image: `${SITE_URL}/og`,
        url: `${SITE_URL}/blog/merge-pdf-windows-free-tools`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/merge-pdf-windows-free-tools` },
      },
    ],
  };

  return (
    <article className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-16">
      <header>
        <p className="text-caption font-semibold uppercase tracking-wide text-brand">Windows 技巧 · Windows Tips</p>
        <h1 className="mt-2 text-h1 font-bold tracking-tight text-fg">
          Windows 合并 PDF：免费工具指南 / Merge PDF on Windows: Free Tools
        </h1>
        <p className="mt-3 text-body text-fg-secondary">
          在 Windows 上合并 PDF 不需要付费软件。浏览器本地工具最省心、PowerShell 零安装、免费开源软件功能全。下面把几个免费选项、适用场景和隐私差异一次讲清。
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
            <strong>日常使用</strong>：浏览器本地工具（如 <Link href="/" className="text-brand hover:underline">PDFMergeNext</Link>），零安装、文件不出电脑。<strong>喜欢命令行</strong>：PowerShell 一行命令搞定。<strong>要图形界面全功能</strong>：免费开源软件 PDFsam Basic。都免费，按习惯选。
          </p>
          <p className="mt-2 text-fg-secondary">
            For everyday use, a browser-based local tool like PDFMergeNext is best — no install, files stay on your PC. For command-line fans, PowerShell does it in one line. For a full-featured GUI, use free open-source PDFsam Basic. All are free.
          </p>
        </section>

        {/* 浏览器本地工具 */}
        <section id="browser">
          <h2 className="text-title font-semibold text-fg">方案一：浏览器本地工具（推荐）/ Method 1: Browser-based local tool</h2>
          <p className="mt-2 text-fg-secondary">用 Edge 或 Chrome 打开 <Link href="/" className="text-brand hover:underline">PDFMergeNext</Link>，拖入 PDF → 排序（或挑页）→ 合并 → 下载。文件在浏览器里用 WebAssembly 本地处理，不上传服务器，断网也能用。</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-fg-secondary">
            <li><strong>优点</strong>：零安装、跨设备、支持 1-3,5 挑页、免费无水印、文件不出电脑。</li>
            <li><strong>隐私</strong>：这是隐私上最稳的免费方案，适合合同、证件等敏感文档。</li>
          </ul>
        </section>

        {/* PowerShell */}
        <section id="powershell">
          <h2 className="text-title font-semibold text-fg">方案二：PowerShell（零安装）/ Method 2: PowerShell</h2>
          <p className="mt-2 text-fg-secondary">
            Windows 自带的 PowerShell 可以配合第三方免费工具完成合并，完全命令行、零安装。前提是系统里已有可用的 PDF 合并引擎（如某些开源 CLI 工具）。适合习惯脚本的进阶用户，可批量处理、可写入自动化流程。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-fg-secondary">
            <li>适合：批量、自动化、需要纳入脚本流程的场景。</li>
            <li>门槛：需要配置命令行工具，对普通用户稍复杂。</li>
          </ul>
        </section>

        {/* 免费开源桌面软件 */}
        <section id="desktop">
          <h2 className="text-title font-semibold text-fg">方案三：免费开源桌面软件 / Method 3: Free open-source desktop software</h2>
          <p className="mt-2 text-fg-secondary">
            PDFsam Basic 是最知名的免费开源 PDF 合并工具之一：安装后选择文件、排序、合并即可，支持 Windows 10/11。数据完全在本地处理，不上传任何内容。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-fg-secondary">
            <li><strong>优点</strong>：图形界面、功能完整（合并/拆分/旋转）、本地处理、免费开源。</li>
            <li><strong>注意</strong>：需要安装，功能更新依赖社区维护。</li>
          </ul>
        </section>

        {/* 对比 */}
        <section id="compare">
          <h2 className="text-title font-semibold text-fg">方案对比 / Comparison</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-subtle text-left text-fg">
                  <th className="border border-line px-3 py-2">维度</th>
                  <th className="border border-line px-3 py-2">浏览器本地工具</th>
                  <th className="border border-line px-3 py-2">PowerShell</th>
                  <th className="border border-line px-3 py-2">开源桌面软件</th>
                </tr>
              </thead>
              <tbody className="text-fg-secondary">
                <tr>
                  <td className="border border-line px-3 py-2 font-medium text-fg">安装</td>
                  <td className="border border-line px-3 py-2">零安装</td>
                  <td className="border border-line px-3 py-2">零安装</td>
                  <td className="border border-line px-3 py-2">需安装</td>
                </tr>
                <tr>
                  <td className="border border-line px-3 py-2 font-medium text-fg">文件是否上传</td>
                  <td className="border border-line px-3 py-2">否</td>
                  <td className="border border-line px-3 py-2">否</td>
                  <td className="border border-line px-3 py-2">否</td>
                </tr>
                <tr>
                  <td className="border border-line px-3 py-2 font-medium text-fg">易用性</td>
                  <td className="border border-line px-3 py-2">高</td>
                  <td className="border border-line px-3 py-2">低（需脚本）</td>
                  <td className="border border-line px-3 py-2">中</td>
                </tr>
                <tr>
                  <td className="border border-line px-3 py-2 font-medium text-fg">批量处理</td>
                  <td className="border border-line px-3 py-2">好</td>
                  <td className="border border-line px-3 py-2">极好（可自动化）</td>
                  <td className="border border-line px-3 py-2">好</td>
                </tr>
                <tr>
                  <td className="border border-line px-3 py-2 font-medium text-fg">挑页合并</td>
                  <td className="border border-line px-3 py-2">1-3,5 语法</td>
                  <td className="border border-line px-3 py-2">脚本控制</td>
                  <td className="border border-line px-3 py-2">手动选页</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-line bg-subtle p-6">
          <h2 className="text-title font-semibold text-fg">在 Windows 上试试</h2>
          <p className="mt-2 text-fg-secondary">
            <Link href="/" className="text-brand hover:underline">打开 PDFMergeNext</Link>，拖入你的 PDF——文件全程留在本机。想了解本地处理的原理，可读{' '}
            <Link href="/blog/how-zero-upload-pdf-tools-work" className="text-brand hover:underline">零上传 PDF 工具工作原理</Link>
            ，或{' '}
            <Link href="/blog/merge-pdf-mac-3-methods" className="text-brand hover:underline">Mac 合并教程</Link>
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
            href="/blog/merge-pdf-iphone-safari"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">iPhone 合并 PDF：Safari 完整教程</p>
            <p className="mt-1 text-xs text-fg-secondary">Merge PDF on iPhone</p>
          </Link>
          <Link
            href="/blog/merge-pdf-mac-3-methods"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">Mac 合并 PDF：3 种方法详解</p>
            <p className="mt-1 text-xs text-fg-secondary">Merge PDF on Mac</p>
          </Link>
          <Link
            href="/blog/merge-pdf-on-mobile"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">手机合并PDF：iOS/Android 完整教程</p>
            <p className="mt-1 text-xs text-fg-secondary">Merge PDF on Mobile</p>
          </Link>
        </div>
      </section>
    </article>
  );
}
