import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';

export const metadata: Metadata = {
  title: 'Best Chrome Extensions for PDF | PDFMergeNext',
  description:
    'Chrome 自带的 PDF 阅读器只能看不能改。这份清单按「本地处理」和「上传处理」把常见 PDF 扩展分成两组，写明各自权限要求与实测短板，并给出三步自查法。Chrome\'s built-in viewer reads PDFs but does little else.',
  keywords: [
    'Chrome PDF 扩展',
    'best chrome extensions for pdf',
    'chrome pdf extension',
    'pdf viewer chrome extension',
    'chrome pdf editor extension',
    'chrome pdf merge extension',
    '本地处理 PDF 扩展',
    'chrome extension pdf privacy',
    'PDFMergeNext',
  ],
  alternates: {
    canonical: '/blog/best-chrome-extensions-for-pdf',
    languages: {
      'zh-CN': '/blog/best-chrome-extensions-for-pdf',
      'en-US': '/blog/best-chrome-extensions-for-pdf',
      'x-default': '/blog/best-chrome-extensions-for-pdf',
    },
  },
  openGraph: {
    title: 'Best Chrome Extensions for PDF · PDFMergeNext',
    description:
      'A list of PDF extensions for Chrome, split into ones that work locally and ones that send your file to a server, with the permission flags to check before installing.',
    type: 'article',
    url: `${SITE_URL}/blog/best-chrome-extensions-for-pdf`,
    siteName: 'PDFMergeNext',
    publishedTime: '2026-11-02T00:00:00.000Z',
    images: [{ url: `${SITE_URL}/og`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Chrome Extensions for PDF · PDFMergeNext',
    description:
      'PDF extensions for Chrome, grouped by whether your file stays on the device or gets uploaded.',
    images: [`${SITE_URL}/og`],
  },
};

const FAQ_EN = [
  {
    q: 'Does Chrome need an extension to open PDFs?',
    a: 'No. Chrome has opened PDFs on its own since 2015, with zoom, rotation, page thumbnails, printing plus find. You install an extension when you need something the viewer does not do: annotation that sticks, form filling, merging, or conversion.',
  },
  {
    q: 'How can I tell whether a PDF extension uploads my file?',
    a: 'Open DevTools, switch to the Network tab, then run a merge or conversion and watch the request list. A local extension shows no request carrying your file. An upload-based one posts to a domain you do not own, usually with a multipart or octet-stream body.',
  },
  {
    q: 'Are Chrome PDF extensions safe for contracts and medical scans?',
    a: 'Only the ones that work offline. If an extension stops functioning the moment you disable Wi-Fi, your document was going somewhere. For contracts, tax scans, and medical records, run the network test first or use a tool that never leaves the browser tab.',
  },
  {
    q: 'Can a Chrome extension merge PDFs without a file size limit?',
    a: 'Size limits come from memory, not policy. Chrome tabs are capped well below what a desktop app can allocate, so a browser merge of several hundred megabytes may fail while the same files merge fine in a native app. Splitting the job is the usual workaround.',
  },
];

const FAQ_ZH = [
  {
    q: 'Chrome 需要装扩展才能打开 PDF 吗？',
    a: '不需要。Chrome 从 2015 年起就自带 PDF 阅读器，缩放、旋转、缩略图、打印、查找都有。只有当你需要批注留存、表单填写、合并、转换这类阅读器做不到的事，才需要装扩展。',
  },
  {
    q: '怎么判断一个 PDF 扩展有没有上传我的文件？',
    a: '打开 DevTools 切到 Network 面板，执行一次合并或转换，然后看请求列表。本地处理的扩展不会出现携带你文件的请求；上传型的则会往一个不属于你的域名发 multipart 或 octet-stream 请求体。',
  },
  {
    q: 'Chrome 的 PDF 扩展能处理合同、病历这类文件吗？',
    a: '只有离线可用的那批可以。断网后立刻失效的扩展，说明文件去了别的地方。合同、税务扫描件、病历这类文件，先做一次断网测试，或者直接用不离开浏览器标签页的工具。',
  },
  {
    q: 'Chrome 扩展合并 PDF 有大小限制吗？',
    a: '限制来自内存而不是政策。Chrome 单个标签页能分配的内存远低于桌面程序，几百 MB 的文件在浏览器里可能失败，同样的文件用本地程序就能过。常见的办法是把任务拆成几批。',
  },
];

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '首页 / Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: '博客 / Blog', item: `${SITE_URL}/blog` },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Best Chrome Extensions for PDF / Chrome 扩展推荐：最佳 PDF 工具',
            item: `${SITE_URL}/blog/best-chrome-extensions-for-pdf`,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          ...FAQ_EN.map((it) => ({
            '@type': 'Question',
            name: it.q,
            acceptedAnswer: { '@type': 'Answer', text: it.a },
          })),
          ...FAQ_ZH.map((it) => ({
            '@type': 'Question',
            name: it.q,
            acceptedAnswer: { '@type': 'Answer', text: it.a },
          })),
        ],
      },
      {
        '@type': 'Article',
        headline: 'Best Chrome Extensions for PDF / Chrome 扩展推荐：最佳 PDF 工具',
        description:
          'PDF extensions for Chrome, grouped by whether the file stays on the device or gets uploaded, with the permission flags to check before installing.',
        author: { '@type': 'Person', name: 'PDFMergeNext', url: 'https://pdfmergenext.shop', '@id': 'https://pdfmergenext.shop/#organization' },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-11-02',
        dateModified: '2026-11-02',
        image: `${SITE_URL}/og`,
        url: `${SITE_URL}/blog/best-chrome-extensions-for-pdf`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/best-chrome-extensions-for-pdf` },
      },
    ],
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav className="mb-6 text-sm text-fg-muted" aria-label="Breadcrumb">
        <a href="/" className="hover:underline">首页 / Home</a>
        {' › '}
        <a href="/blog" className="hover:underline">博客 / Blog</a>
        {' › '}
        <span>Best Chrome Extensions for PDF</span>
      </nav>

      <h1 className="text-3xl font-bold leading-tight">
        Best Chrome Extensions for PDF / Chrome 扩展推荐：最佳 PDF 工具
      </h1>
      <p className="mt-2 text-sm text-fg-muted">
        更新于 2026-11-02 · 阅读约 8 分钟 / 8 min read
      </p>

      <div className="my-6 rounded-lg bg-subtle p-4 text-sm leading-relaxed">
        <strong className="block mb-1">快速结论 / TL;DR</strong>
        选 PDF 扩展只看一条：文件有没有离开你的电脑。这篇把常见扩展按本地处理和上传处理分成两组，逐条写明权限要求、实测短板和适用场景，最后给出三步自查法。想直接干活不想装东西的人，浏览器里开一个零上传的合并页面就够了。Pick a PDF extension on one question only: does the file leave your machine. The list below splits the common ones into local and upload groups, with permission flags, real drawbacks, and a three-step check you can run yourself.
      </div>

      <nav className="mb-8 rounded-lg border border-line p-4 text-sm">
        <strong className="block mb-2">目录 / Contents</strong>
        <ul className="list-inside space-y-1">
          <li><a href="#builtin" className="text-primary hover:underline">1. What Chrome already does</a></li>
          <li><a href="#local" className="text-primary hover:underline">2. Extensions that work locally</a></li>
          <li><a href="#upload" className="text-primary hover:underline">3. Extensions that upload your file</a></li>
          <li><a href="#permissions" className="text-primary hover:underline">4. Permissions worth reading</a></li>
          <li><a href="#check" className="text-primary hover:underline">5. Three-step check before you install</a></li>
          <li><a href="#faq" className="text-primary hover:underline">6. FAQ</a></li>
        </ul>
      </nav>

      <h2 id="builtin" className="text-2xl font-semibold mt-10">1. What Chrome Already Does</h2>
      <p className="mt-3">
        Chrome has rendered PDFs without help since 2015. Zoom, rotation, page thumbnails, printing, text selection, find-in-document all work before you install anything. Most people who search for a PDF extension are not trying to read a file; they are trying to change one, and the built-in viewer stops exactly there.
      </p>
      <p className="mt-2">
        That gap explains the whole category. Extensions exist to annotate, fill forms, sign, merge, split, convert, or compress. The question is where the bytes go while that happens, because Chrome gives an extension broad access to whatever page you are on.
      </p>

      <h2 id="local" className="text-2xl font-semibold mt-10">2. Extensions That Work Locally</h2>
      <ul className="mt-3 list-inside space-y-1">
        <li><strong>PDF Viewer by PDF.js Labs</strong>: open source, it replaces the default viewer with annotation tools that persist into the file. Drawback: annotation is the whole feature set, with no merge or conversion.</li>
        <li><strong>Kdan PDF Reader</strong>: annotates, converts, signs and merges inside the browser, and the offline mode sits behind a paid tier. Drawback: the free tier pushes cloud conversion, so the offline path costs money.</li>
        <li><strong>Form Filler (Autofill for PDFs)</strong>: it saves typed form data and replays it across documents. Drawback: it stores your entries locally in plaintext, which is fine at home and risky on a shared machine.</li>
        <li><strong>Save Page WE</strong>: it captures a rendered PDF page as a local file, which helps when archiving signed documents. Drawback: output fidelity drops on complex layouts, so it is an archive tool rather than an editor.</li>
      </ul>
      <p className="mt-2">
        These four keep processing on the device. You can confirm it: disable Wi-Fi and the tools still finish the job.
      </p>

      <h2 id="upload" className="text-2xl font-semibold mt-10">3. Extensions That Upload Your File</h2>
      <p className="mt-3">
        The popular converters work by sending the document to a server, converting it there, and handing back a download link. That architecture buys you OCR, heavy compression, and formats a browser cannot produce alone. It also means your file exists on someone else&apos;s disk, usually long enough to be logged.
      </p>
      <ul className="mt-3 list-inside space-y-1">
        <li><strong>Online converter extensions</strong>: broad format support plus decent OCR. Drawback: file size caps on the free tier, queues during peak hours, and a copy of the document on a third-party server.</li>
        <li><strong>Cloud annotation suites</strong>: they sync highlights across devices. Drawback: sync only works with an account, and deleting the local file does not delete the cloud copy until you purge it yourself.</li>
        <li><strong>E-signature add-ons</strong>: useful when a signature needs a certificate trail. Drawback: the signed document lives with the provider, which is a compliance problem for contracts under NDA.</li>
      </ul>
      <p className="mt-2">
        None of these are bad tools. They are the wrong tool when the document is a contract, a tax scan, or a medical record.
      </p>

      <h2 id="permissions" className="text-2xl font-semibold mt-10">4. Permissions Worth Reading</h2>
      <p className="mt-3">
        The Chrome Web Store shows a permission line on every listing. Three flags matter for a PDF extension. <strong>Read and change all your data on all websites</strong> is the broadest one and lets the extension see anything in any tab, which is far more than merging a file requires. <strong>Downloads</strong> is expected for a tool that writes output. A listed <strong>host permission</strong> for one specific domain usually means the processing happens on that domain.
      </p>
      <p className="mt-2">
        Manifest V3 tightened some of this, though it did not remove the all-sites permission. Look at the listed host domains first: if the extension needs to reach a company server to do its job, the permission line says so.
      </p>

      <h2 id="check" className="text-2xl font-semibold mt-10">5. Three-Step Check Before You Install</h2>
      <ul className="mt-3 list-inside space-y-1">
        <li>Read the permission line and the host domains on the store listing. One specific host means a server is involved.</li>
        <li>Install it, open DevTools, switch to the Network tab, then run a real job. Watch whether a request carries your file.</li>
        <li>Disable Wi-Fi and repeat the job. A tool that still finishes is processing on your machine.</li>
      </ul>
      <p className="mt-2">
        The second and third steps catch what marketing copy hides. A page that claims local processing and then posts a multipart request is not processing locally.
      </p>

      <h2 id="faq" className="text-2xl font-semibold mt-10">6. FAQ</h2>
      <p className="mt-3"><strong>Does Chrome need an extension to open PDFs?</strong> No. Chrome has opened PDFs on its own since 2015, with zoom, rotation, page thumbnails, printing plus find. You install an extension when you need something the viewer does not do: annotation that sticks, form filling, merging, or conversion.</p>
      <p className="mt-2"><strong>How can I tell whether a PDF extension uploads my file?</strong> Open DevTools, switch to the Network tab, then run a merge or conversion and watch the request list. A local extension shows no request carrying your file. An upload-based one posts to a domain you do not own, usually with a multipart or octet-stream body.</p>
      <p className="mt-2"><strong>Are Chrome PDF extensions safe for contracts and medical scans?</strong> Only the ones that work offline. If an extension stops functioning the moment you disable Wi-Fi, your document was going somewhere. For contracts, tax scans, and medical records, run the network test first or use a tool that never leaves the browser tab.</p>
      <p className="mt-2"><strong>Can a Chrome extension merge PDFs without a file size limit?</strong> Size limits come from memory, not policy. Chrome tabs are capped well below what a desktop app can allocate, so a browser merge of several hundred megabytes may fail while the same files merge fine in a native app. Splitting the job is the usual workaround.</p>

      <div className="mt-10 rounded-lg bg-subtle p-5 text-sm leading-relaxed">
        <strong className="block mb-1">中文版摘要</strong>
        选 Chrome 的 PDF 扩展只看一件事：文件有没有离开本机。本地处理的一组包括 PDF.js Labs 的 PDF Viewer（批注可写回文件）、Kdan PDF Reader（离线模式要付费）、Form Filler（表单数据明文存在本地）和 Save Page WE（归档用，复杂版式会掉精度）；上传处理的一组包括各类在线转换扩展、云端批注套件和电子签名插件，换来 OCR、大比例压缩和证书签名链，代价是文件在别人服务器上留了一份。装之前跑三步自查：读权限行和 host 域名、用 DevTools Network 看有没有请求携带文件、断网再跑一次任务。批注和签名之外的活，直接在浏览器里开一个零上传的合并页面更省事。
      </div>

      <section className="mt-10 rounded-lg border border-line bg-subtle p-6">
        <h2 className="text-lg font-semibold">关于 pdfmergenext.shop</h2>
        <p className="mt-2 text-sm leading-relaxed text-fg-muted">
          pdfmergenext.shop 是一个<strong>零上传</strong>的 PDF 合并工具：文件在你的浏览器本地用 WebAssembly 处理，绝不传到任何服务器，免费、无水印、无文件大小限制。
          与其为了合并几份文件给 Chrome 装一个扩展，不如打开 <a href="/" className="text-primary hover:underline">PDFMergeNext 在线合并</a>，
          或者读我们对比扩展权限与本地处理的 <a href="/blog/browser-pdf-merge-privacy" className="text-primary hover:underline">浏览器 PDF 合并的隐私边界</a>，
          以及 <a href="/blog/how-to-merge-pdf-without-uploading" className="text-primary hover:underline">不上传怎么合并 PDF</a>，
          还有这份 <a href="/blog/top-10-privacy-pdf-tools-2026" className="text-primary hover:underline">2026 隐私优先 PDF 工具清单</a>。
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-title font-semibold text-fg">相关阅读 / Related</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Link href="/blog/browser-pdf-merge-privacy" className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle">
            <p className="text-sm font-semibold text-fg">浏览器 PDF 合并的隐私边界</p>
            <p className="mt-1 text-xs text-fg-secondary">Browser PDF Merge Privacy</p>
          </Link>
          <Link href="/blog/how-to-merge-pdf-without-uploading" className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle">
            <p className="text-sm font-semibold text-fg">不上传怎么合并 PDF</p>
            <p className="mt-1 text-xs text-fg-secondary">Merge PDF Without Uploading</p>
          </Link>
          <Link href="/blog/top-10-privacy-pdf-tools-2026" className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle">
            <p className="text-sm font-semibold text-fg">2026 隐私优先 PDF 工具清单</p>
            <p className="mt-1 text-xs text-fg-secondary">Top 10 Privacy PDF Tools 2026</p>
          </Link>
          <Link href="/blog/how-zero-upload-pdf-tools-work" className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle">
            <p className="text-sm font-semibold text-fg">零上传工具的工作原理</p>
            <p className="mt-1 text-xs text-fg-secondary">How Zero-Upload PDF Tools Work</p>
          </Link>
        </div>
      </section>

      <div className="mt-10 rounded-lg bg-primary/5 p-6 text-center">
        <p className="text-lg font-semibold">👉 试试 PDFMergeNext</p>
        <p className="mt-1 text-sm text-fg-muted">
          零上传、无水印、无限制。合并任意数量 PDF，免费。
        </p>
        <a href="/" className="mt-3 inline-block rounded-lg bg-primary px-6 py-2 text-sm font-medium text-white hover:bg-primary/90">
          立即合并 / Merge Now
        </a>
      </div>
    </article>
  );
}
