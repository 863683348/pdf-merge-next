import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';

export const metadata: Metadata = {
  title: '24 Privacy PDF Tool Alternatives | PDFMergeNext',
  description:
    'Twenty-four privacy-first PDF tool alternatives for people who will not upload files to the cloud: free options, open-source tools, offline utilities, and who each one fits best. 24 个本地优先的隐私 PDF 工具替代品，从免费到开源到离线，总有一款适合你。',
  keywords: [
    'privacy pdf tool alternatives',
    '隐私 PDF 工具',
    'local pdf tools',
    'offline pdf tools',
    'open source pdf tools',
    'free pdf tools no upload',
    'PDF 本地工具',
    'pdf tool alternatives',
    'PDFMergeNext 隐私',
    'no upload pdf tools',
  ],
  alternates: {
    canonical: '/blog/24-privacy-pdf-tool-alternatives',
    languages: {
      'zh-CN': '/blog/24-privacy-pdf-tool-alternatives',
      'en-US': '/blog/24-privacy-pdf-tool-alternatives',
      'x-default': '/blog/24-privacy-pdf-tool-alternatives',
    },
  },
  openGraph: {
    title: '24 Privacy PDF Tool Alternatives · PDFMergeNext',
    description:
      'Twenty-four privacy-first PDF tool alternatives for people who will not upload files to the cloud. 24 个本地优先的隐私 PDF 工具替代品清单。',
    type: 'article',
    url: `${SITE_URL}/blog/24-privacy-pdf-tool-alternatives`,
    siteName: 'PDFMergeNext',
    publishedTime: '2026-08-17T00:00:00.000Z',
    images: [{ url: `${SITE_URL}/og`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '24 Privacy PDF Tool Alternatives · PDFMergeNext',
    description:
      'Twenty-four privacy-first PDF tool alternatives for people who will not upload files to the cloud. 24 个本地优先的隐私 PDF 工具替代品清单。',
    images: [`${SITE_URL}/og`],
  },
};

const FAQ_EN = [
  {
    q: 'Are free PDF tools private?',
    a: 'Free and private are two separate questions. Many free tools survive by selling your uploads or ads; some genuinely local tools are free forever. The test is the same: disconnect your network and see if the tool still works. If it does, it is local. If not, it is a free uploader, and your file went somewhere.',
  },
  {
    q: 'What is the best privacy pdf tool for merging?',
    a: 'For merging specifically, a local tool is the answer. Merge is the fastest PDF operation there is, and doing it in your browser or desktop app takes milliseconds with zero upload. The question is not which online tool to trust, but which local one feels best to you.',
  },
  {
    q: 'Are open source PDF tools safe?',
    a: 'Open source removes the trust problem at the source: you can read the code, and the community audits it. That does not make every open source tool perfect, but it makes hidden upload behavior far harder to hide. For privacy-sensitive files, open source is the strongest baseline.',
  },
  {
    q: 'Why do people switch from online PDF sites?',
    a: 'Usually after one document that should not have left the computer: a signed contract, a tax scan, a medical record. Once you notice that online PDF sites exist to collect files, not to protect them, the local-first habit sticks.',
  },
];

const FAQ_ZH = [
  {
    q: '免费 PDF 工具私密吗？',
    a: '免费和私密是两回事。很多免费工具靠你的上传和广告活着，也有些真正的本地工具永远免费。判断方法一样：断开网络，看工具还能不能用。能用就是本地的，不能用就是免费上传器，你的文件已经去了某个地方。',
  },
  {
    q: '合并 PDF 最好的隐私工具是什么？',
    a: '单论合并，答案一定是本地工具。合并是 PDF 操作里最快的一类，在浏览器或桌面应用里毫秒完成、零上传。问题不是信哪个在线工具，而是哪个本地工具用着顺手。',
  },
  {
    q: '开源 PDF 工具安全吗？',
    a: '开源直接从源头解决了信任问题：代码可读，社区在审计。这不代表每个开源工具都完美，但隐藏的上传行为很难藏得住。对敏感文件来说，开源是最强的基线。',
  },
  {
    q: '为什么大家从在线 PDF 网站换走？',
    a: '通常是因为一份不该离开电脑的文件：签好的合同、税务扫描件、病历。一旦你意识到在线 PDF 网站存在的目的是收集文件而不是保护文件，本地优先的习惯就养成了。',
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
            name: '24 Privacy PDF Tool Alternatives / 24 个隐私 PDF 工具替代品',
            item: `${SITE_URL}/blog/24-privacy-pdf-tool-alternatives`,
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
        headline: '24 Privacy PDF Tool Alternatives / 24 个隐私 PDF 工具替代品',
        description:
          'Twenty-four privacy-first PDF tool alternatives for people who will not upload files to the cloud. 24 个本地优先的隐私 PDF 工具替代品，从免费到开源到离线。',
        author: { '@type': 'Person', name: 'PDFMergeNext', url: 'https://pdfmergenext.shop', '@id': 'https://pdfmergenext.shop/#organization' },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-08-17',
        dateModified: '2026-08-17',
        image: `${SITE_URL}/og`,
        url: `${SITE_URL}/blog/24-privacy-pdf-tool-alternatives`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/24-privacy-pdf-tool-alternatives` },
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
        <span>24 Privacy PDF Tool Alternatives</span>
      </nav>

      <h1 className="text-3xl font-bold leading-tight">
        24 Privacy PDF Tool Alternatives / 24 个隐私 PDF 工具替代品
      </h1>
      <p className="mt-2 text-sm text-fg-muted">
        更新于 2026-08-17 · 阅读约 10 分钟 / 10 min read
      </p>

      <div className="my-6 rounded-lg bg-subtle p-4 text-sm leading-relaxed">
        <strong className="block mb-1">快速结论 / TL;DR</strong>
        隐私 PDF 工具的核心不是某个软件，而是本地优先这个习惯。这份清单按用途分了六类，共 24 个替代品：免费本地、开源、离线、浏览器内、命令行、专业工具。每类都有免安装就能用的选项。Twenty-four privacy-first PDF tools grouped into six categories: free local, open source, offline, in-browser, command line, and professional. Every category has a no-install option.
      </div>

      <nav className="mb-8 rounded-lg border border-line p-4 text-sm">
        <strong className="block mb-2">目录 / Contents</strong>
        <ul className="list-inside space-y-1">
          <li><a href="#why" className="text-primary hover:underline">1. Why you need alternatives at all</a></li>
          <li><a href="#merge" className="text-primary hover:underline">2. Merge and split (6 tools)</a></li>
          <li><a href="#compress" className="text-primary hover:underline">3. Compress and optimize (5 tools)</a></li>
          <li><a href="#convert" className="text-primary hover:underline">4. Convert and OCR (4 tools)</a></li>
          <li><a href="#browser" className="text-primary hover:underline">5. In-browser and offline (4 tools)</a></li>
          <li><a href="#cli" className="text-primary hover:underline">6. Command line and open source (3 tools)</a></li>
          <li><a href="#pro" className="text-primary hover:underline">7. Professional workflows (2 tools)</a></li>
          <li><a href="#faq" className="text-primary hover:underline">8. FAQ</a></li>
        </ul>
      </nav>

      <h2 id="why" className="text-2xl font-semibold mt-10">1. Why You Need Alternatives at All</h2>
      <p className="mt-3">
        The default PDF tools on most computers are either an online upload site or a feature-light viewer. The upload sites are the problem: every file you drop on them is a file that left your device, with no way to know where it went or who else can see it. A signed contract, a tax return, a medical record — these are not files that should take a round trip through a stranger&apos;s server.
      </p>
      <p className="mt-2">
        The alternative universe is bigger than most people think. Local tools have been quietly excellent for years. This list collects 24 of them, organized by job, with honest notes about who each one fits.
      </p>

      <h2 id="merge" className="text-2xl font-semibold mt-10">2. Merge and Split (6 Tools)</h2>
      <ul className="mt-3 list-inside space-y-1">
        <li><strong>Local browser merge tools</strong> — free, no install, WebAssembly in your tab. Perfect for the occasional merge.</li>
        <li><strong>Desktop PDF editors</strong> — free tiers handle merge, split, and reorder without watermark for basic use.</li>
        <li><strong>Print-to-PDF workaround</strong> — zero extra software: print multiple files to PDF and let the system combine them.</li>
        <li><strong>Preview (macOS)</strong> — built-in, handles merge, reorder, and split with drag and drop.</li>
        <li><strong>Document scanners&apos; bundled apps</strong> — most scanner software merges multi-page scans locally.</li>
        <li><strong>Email attachments</strong> — a boring but real one: mail multiple PDFs; the recipient&apos;s mail client can save them together.</li>
      </ul>

      <h2 id="compress" className="text-2xl font-semibold mt-10">3. Compress and Optimize (5 Tools)</h2>
      <ul className="mt-3 list-inside space-y-1">
        <li><strong>Browser-local compressors</strong> — quality slider, runs entirely in the tab, output stays on your machine.</li>
        <li><strong>Ghostscript</strong> — the classic command-line compressor, scriptable and deterministic.</li>
        <li><strong>Image-based rebuild</strong> — re-export pages as optimized images inside a PDF shell, great for scans.</li>
        <li><strong>Desktop optimizer plugins</strong> — PDF editors with a &quot;reduce file size&quot; button that runs locally.</li>
        <li><strong>Built-in OS print settings</strong> — lower the quality in print-to-PDF to shrink output without extra tools.</li>
      </ul>

      <h2 id="convert" className="text-2xl font-semibold mt-10">4. Convert and OCR (4 Tools)</h2>
      <ul className="mt-3 list-inside space-y-1">
        <li><strong>PDF to image converters</strong> — export pages as PNG or JPG locally, one page at a time or in batch.</li>
        <li><strong>PDF to text extractors</strong> — pull text out of digital PDFs without any cloud service.</li>
        <li><strong>Open source OCR engines</strong> — heavyweight but fully local text recognition for scanned documents.</li>
        <li><strong>Office suite exports</strong> — Word and spreadsheet apps export to PDF locally; reverse is possible with the right add-in.</li>
      </ul>

      <h2 id="browser" className="text-2xl font-semibold mt-10">5. In-Browser and Offline (4 Tools)</h2>
      <ul className="mt-3 list-inside space-y-1">
        <li><strong>Progressive web apps (PWA)</strong> — installable PDF tools that work offline after the first load.</li>
        <li><strong>Offline-first PDF viewers</strong> — viewers that cache documents locally and work without network.</li>
        <li><strong>Browser print-to-PDF</strong> — any web page becomes a PDF locally; the browser does the work.</li>
        <li><strong>Local file managers with preview</strong> — some file managers render PDFs without opening another app.</li>
      </ul>

      <h2 id="cli" className="text-2xl font-semibold mt-10">6. Command Line and Open Source (3 Tools)</h2>
      <ul className="mt-3 list-inside space-y-1">
        <li><strong>qpdf</strong> — the Swiss-army knife of local PDF manipulation: merge, split, encrypt, decrypt, all offline.</li>
        <li><strong>Ghostscript</strong> — postscript interpreter that doubles as the most powerful local PDF processor.</li>
        <li><strong>pdftk / pdfunite / pdfseparate</strong> — a family of tiny utilities that cover the 90% cases with one command each.</li>
      </ul>

      <h2 id="pro" className="text-2xl font-semibold mt-10">7. Professional Workflows (2 Tools)</h2>
      <ul className="mt-3 list-inside space-y-1">
        <li><strong>Local-first legal tools</strong> — document suites for firms that keep files on premises and handle PDF assembly internally.</li>
        <li><strong>Self-hosted document servers</strong> — your own instance, your own storage, PDF operations run where you control them.</li>
      </ul>

      <h2 id="faq" className="text-2xl font-semibold mt-10">8. FAQ</h2>
      <p className="mt-3"><strong>Are free PDF tools private?</strong> Free and private are two separate questions. Many free tools survive by selling your uploads or ads; some genuinely local tools are free forever. The test is the same: disconnect your network and see if the tool still works. If it does, it is local. If not, it is a free uploader, and your file went somewhere.</p>
      <p className="mt-2"><strong>What is the best privacy pdf tool for merging?</strong> For merging specifically, a local tool is the answer. Merge is the fastest PDF operation there is, and doing it in your browser or desktop app takes milliseconds with zero upload. The question is not which online tool to trust, but which local one feels best to you.</p>
      <p className="mt-2"><strong>Are open source PDF tools safe?</strong> Open source removes the trust problem at the source: you can read the code, and the community audits it. That does not make every open source tool perfect, but it makes hidden upload behavior far harder to hide. For privacy-sensitive files, open source is the strongest baseline.</p>
      <p className="mt-2"><strong>Why do people switch from online PDF sites?</strong> Usually after one document that should not have left the computer: a signed contract, a tax scan, a medical record. Once you notice that online PDF sites exist to collect files, not to protect them, the local-first habit sticks.</p>

      <div className="mt-10 rounded-lg bg-subtle p-5 text-sm leading-relaxed">
        <strong className="block mb-1">中文版摘要</strong>
        不需要记住这 24 个名字，记住一条原则：PDF 操作在本地完成，文件不出设备。合并和拆分有浏览器本地工具和系统自带预览；压缩有本地压缩器和 Ghostscript；转换和 OCR 有本地引擎；命令行有 qpdf 和 Ghostscript 全家桶。想上手最快的方式，是从一个浏览器内本地工具开始，再按需加命令行工具。全部不注册、不上传、不收费。
      </div>

      <div className="mt-6">
        <Link
          href="/"
          className="inline-block rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white hover:opacity-90"
        >
          试试本地合并 PDF，文件不出本机 → / Merge PDF locally, no upload
        </Link>
      </div>
    </article>
  );
}
