import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';

export const metadata: Metadata = {
  title: 'Edge 浏览器合并 PDF 教程 / Edge Browser PDF Merge Tutorial | PDFMergeNext',
  description:
    'Edge PDF 合并有三种做法：打开在线工具、用 Edge 打印到 PDF、或用浏览器本地工具。这篇给出每一步操作、页数与体积限制、保留书签与表单的差异对照，以及不上传文件的做法。',
  keywords: [
    'Edge PDF 合并',
    'edge browser pdf merge',
    'merge pdf in edge',
    'edge pdf merge tool',
    'edge 合并 pdf',
    'microsoft edge pdf merge',
    'merge pdf edge browser free',
    'edge 浏览器 合并 pdf',
    'PDFMergeNext',
  ],
  alternates: {
    canonical: '/blog/edge-browser-pdf-merge',
    languages: {
      'zh-CN': '/blog/edge-browser-pdf-merge',
      'en-US': '/blog/edge-browser-pdf-merge',
      'x-default': '/blog/edge-browser-pdf-merge',
    },
  },
  openGraph: {
    title: 'Edge 浏览器合并 PDF 教程 · PDFMergeNext',
    description: '在 Edge 里合并 PDF 的三种做法，含限制对照与本地不上传方案。',
    url: `${SITE_URL}/blog/edge-browser-pdf-merge`,
    type: 'article',
    publishedTime: '2026-11-03T00:00:00.000Z',
    authors: ['PDFMergeNext'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Edge 浏览器合并 PDF 教程 · PDFMergeNext',
    description: 'Edge 里合并 PDF 的三种方法、限制对照，以及不上传文件的做法。',
  },
};

// 文章级 FAQ：覆盖本文 PAA 长尾词，配 FAQPage schema 抢精选摘要。
const ARTICLE_FAQ: { q: string; a: string }[] = [
  {
    q: 'Edge 能直接合并 PDF 吗？',
    a: '不能。Edge 自带的阅读器只能看、加批注、打印。打印到 PDF 是把当前一份重新输出，不是合并。要合并得用在线工具或本地工具。',
  },
  {
    q: 'merge pdf in edge 需要安装插件吗？',
    a: '不需要。在线工具和本地浏览器工具都在网页里跑。装插件反而多一个能读你文件的程序，能不装就不装。',
  },
  {
    q: 'Is there an edge pdf merge tool that keeps files private?',
    a: 'Yes. Browser tools like PDFMergeNext process files with WebAssembly on your own device, so nothing is uploaded. Edge print-to-PDF also stays local, but it only handles one document at a time.',
  },
  {
    q: '合并后顺序乱了、文件变大怎么办？',
    a: '顺序乱了就用本地工具重新排一次。体积暴涨通常是某份文件嵌了字体或高清扫描图，可以先压缩再合并。合并前把文件按 01、02 重命名，比事后拖缩略图省事。',
  },
];

const TOC = [
  { id: 'lead', label: '一句话结论 / TL;DR' },
  { id: 'method1', label: '方法一：Edge 打开在线合并工具' },
  { id: 'method2', label: '方法二：Edge 打印到 PDF' },
  { id: 'method3', label: '方法三：Edge 里的本地工具，不上传' },
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
            name: 'Edge 浏览器合并 PDF 教程',
            item: `${SITE_URL}/blog/edge-browser-pdf-merge`,
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
        headline: 'Edge 浏览器合并 PDF 教程 / Edge Browser PDF Merge Tutorial',
        description: '在 Edge 里合并 PDF 的三种做法，含限制对照与本地不上传方案。',
        author: { '@type': 'Person', name: 'PDFMergeNext', url: 'https://pdfmergenext.shop', '@id': 'https://pdfmergenext.shop/#organization' },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-11-03',
        dateModified: '2026-11-03',
        image: `${SITE_URL}/og`,
        url: `${SITE_URL}/blog/edge-browser-pdf-merge`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/edge-browser-pdf-merge` },
      },
    ],
  };

  return (
    <article className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-16">
      <header>
        <p className="text-caption font-semibold uppercase tracking-wide text-brand">Edge 技巧 · Edge Tips</p>
        <h1 className="mt-2 text-h1 font-bold tracking-tight text-fg">
          Edge 浏览器合并 PDF 教程 / Edge Browser PDF Merge Tutorial
        </h1>
        <p className="mt-3 text-body text-fg-secondary">
          在 Edge 浏览器里合并 PDF 有两条路：一条走在线网站，一条走本地工具。这篇把 Edge PDF 合并的完整流程拆开讲，包括 Edge 自带的打印成 PDF 怎么用、在线工具常见的页数限制，以及不想把文件上传时该选哪种 edge browser pdf merge 方案。
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
            <strong>偶尔合并一两份</strong>：Edge 打开免费在线工具，最快。<strong>文件里是合同、身份证或客户名单</strong>：别上传，改用浏览器本地工具。<strong>只想存一份网页或单页文档</strong>：Edge 自带的打印到 PDF 就够了，但它一次只处理一份，顺序要你自己盯。
          </p>
          <p className="mt-2 text-fg-secondary">
            Two files, once in a while: open a free online merger in Edge. Contracts, ID scans, or a customer list: skip the upload and use a local tool. Turning a web page or a single document into a PDF: Edge print-to-PDF is enough on its own, but it handles one document at a time and you have to watch the page order yourself.
          </p>
        </section>

        {/* 方法一：在线工具 */}
        <section id="method1">
          <h2 className="text-title font-semibold text-fg">方法一：Edge 打开在线合并工具 / Method 1: Open an online merger in Edge</h2>
          <p className="mt-2 text-fg-secondary">merge pdf in edge 最省事的做法，是打开一个在线合并网站。四步走完：</p>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-fg-secondary">
            <li>在 Edge 里打开你选定的在线合并网站。</li>
            <li>点「选择文件」，或把 PDF 从资源管理器拖进页面。</li>
            <li>拖着缩略图把顺序排好。</li>
            <li>点「合并」，等进度条走完，下载结果。</li>
          </ol>
          <p className="mt-2 text-fg-secondary">
            两个前提要记住：文件会传到对方服务器；免费版普遍有页数或体积限制，常见的是一次 25 页、50MB。超过限制要么分批，要么换成本地方案。
          </p>
          <p className="mt-2 text-fg-secondary">
            The quickest way to merge pdf in edge is a free online merger: open the site, choose your files or drag them in from File Explorer, drag the thumbnails into the order you want, hit merge, then download. Two things to keep in mind: the files land on someone else&apos;s server, and free tiers usually cap page count or file size, often around 25 pages or 50MB.
          </p>
        </section>

        {/* 方法二：打印到 PDF */}
        <section id="method2">
          <h2 className="text-title font-semibold text-fg">方法二：Edge 打印到 PDF / Method 2: Print to PDF in Edge</h2>
          <p className="mt-2 text-fg-secondary">
            在 Edge 里按 Ctrl+P，打印机选「另存为 PDF」，再点保存。这条路的门槛最低，也最容易被误当成 edge pdf merge tool，但它其实只把当前打开的这一个文档重新输出一遍。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-fg-secondary">
            <li><strong>一次一份</strong>：要凑齐三份，你得分别打印三次，再拿别的工具拼。</li>
            <li><strong>会丢东西</strong>：书签、可填写的表单字段、文档属性，走一趟打印通常就没了。</li>
            <li><strong>顺序全靠手</strong>：打印窗口里能调的是页码范围，不是文件之间的先后。</li>
          </ul>
          <p className="mt-2 text-fg-secondary">
            它的正经用途是把网页、邮件或单页票据存成 PDF。真要合并多份文档，用方法一或方法三更省时间。
          </p>
          <p className="mt-2 text-fg-secondary">
            Press Ctrl+P, choose &quot;Save as PDF&quot; as the printer, and save. This is the lowest barrier of the three, and it is the one people mistake for an edge pdf merge tool, when all it does is re-export the single document you have open. One file per pass, bookmarks and fillable fields usually do not survive, and the print dialog controls page ranges rather than file order.
          </p>
        </section>

        {/* 方法三：本地方案 */}
        <section id="method3">
          <h2 className="text-title font-semibold text-fg">方法三：Edge 里的本地合并工具，文件不出电脑 / Method 3: A local merger that runs inside Edge</h2>
          <p className="mt-2 text-fg-secondary">
            打开 <Link href="/" className="text-brand hover:underline">PDFMergeNext</Link>，选文件、排序、合并、下载，全程在浏览器里用 WebAssembly 跑，文件不离开这台设备，断网也能用。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-fg-secondary">
            <li><strong>排序和挑页都在本地</strong>：支持 1-3,5 这样的挑页语法，不要第 2 页到第 4 页，就把要留的区间填进去。</li>
            <li><strong>没有上传这一步</strong>，也就没有对方服务器留副本的问题。</li>
            <li><strong>免费</strong>，不加水印。</li>
          </ul>
          <p className="mt-3 text-fg-secondary font-medium">发出去之前的三项核对：</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-fg-secondary">
            <li>顺序：合并完从头翻一遍，别只看缩略图，跨页表格最容易错位。</li>
            <li>页数：总数对不对，挑页填错会静默少页。</li>
            <li>体积：合并后比预期大很多，多半是某一份里嵌了整本字体或高清扫描图。</li>
          </ul>
          <p className="mt-2 text-fg-secondary">
            Open PDFMergeNext, pick your files, set the order, merge, download. The work runs through WebAssembly inside your browser, so files stay on this device and it works with the network off. Three checks before you send the file: scroll the whole thing instead of trusting thumbnails, verify the total page count, and watch the size, since a jump usually means one source file embeds a full font set or full-resolution scans.
          </p>
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
                  <th className="border border-line px-3 py-2">Edge 打印到 PDF</th>
                  <th className="border border-line px-3 py-2">本地浏览器工具</th>
                </tr>
              </thead>
              <tbody className="text-fg-secondary">
                <tr>
                  <td className="border border-line px-3 py-2 font-medium text-fg">文件是否上传</td>
                  <td className="border border-line px-3 py-2">是</td>
                  <td className="border border-line px-3 py-2">否</td>
                  <td className="border border-line px-3 py-2">否</td>
                </tr>
                <tr>
                  <td className="border border-line px-3 py-2 font-medium text-fg">一次能处理几份</td>
                  <td className="border border-line px-3 py-2">多份</td>
                  <td className="border border-line px-3 py-2">一份</td>
                  <td className="border border-line px-3 py-2">多份</td>
                </tr>
                <tr>
                  <td className="border border-line px-3 py-2 font-medium text-fg">保留书签与表单</td>
                  <td className="border border-line px-3 py-2">多数不保留</td>
                  <td className="border border-line px-3 py-2">不保留</td>
                  <td className="border border-line px-3 py-2">保留</td>
                </tr>
                <tr>
                  <td className="border border-line px-3 py-2 font-medium text-fg">挑页合并</td>
                  <td className="border border-line px-3 py-2">部分支持</td>
                  <td className="border border-line px-3 py-2">不支持</td>
                  <td className="border border-line px-3 py-2">1-3,5 语法</td>
                </tr>
                <tr>
                  <td className="border border-line px-3 py-2 font-medium text-fg">离线可用</td>
                  <td className="border border-line px-3 py-2">否</td>
                  <td className="border border-line px-3 py-2">是</td>
                  <td className="border border-line px-3 py-2">是</td>
                </tr>
                <tr>
                  <td className="border border-line px-3 py-2 font-medium text-fg">常见限制</td>
                  <td className="border border-line px-3 py-2">25 页、50MB</td>
                  <td className="border border-line px-3 py-2">单份文档</td>
                  <td className="border border-line px-3 py-2">取决于设备内存</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-line bg-subtle p-6">
          <h2 className="text-title font-semibold text-fg">在 Edge 里试一次</h2>
          <p className="mt-2 text-fg-secondary">
            <Link href="/" className="text-brand hover:underline">打开 PDFMergeNext</Link>，在 Edge 里合并你的 PDF，文件全程留在这台电脑上。想了解本地处理的原理，可读{' '}
            <Link href="/blog/how-zero-upload-pdf-tools-work" className="text-brand hover:underline">零上传 PDF 工具工作原理</Link>
            ，或{' '}
            <Link href="/blog/pdf-page-selection-1-3-5-syntax" className="text-brand hover:underline">PDF 挑页合并 1-3,5 语法详解</Link>
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
            href="/blog/how-to-merge-pdf-step-by-step"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">合并 PDF 完整步骤：从选文件到下载</p>
            <p className="mt-1 text-xs text-fg-secondary">Merge PDF Step by Step</p>
          </Link>
          <Link
            href="/blog/browser-pdf-merge-privacy"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">浏览器合并 PDF 的隐私边界</p>
            <p className="mt-1 text-xs text-fg-secondary">Browser PDF Merge Privacy</p>
          </Link>
          <Link
            href="/blog/merge-pdf-windows-file-order"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">Windows 合并 PDF：文件顺序怎么排</p>
            <p className="mt-1 text-xs text-fg-secondary">File Order on Windows</p>
          </Link>
          <Link
            href="/blog/merge-pdf-windows-free-tools"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">Windows 合并 PDF：免费工具指南</p>
            <p className="mt-1 text-xs text-fg-secondary">Free Tools on Windows</p>
          </Link>
        </div>
      </section>
    </article>
  );
}
