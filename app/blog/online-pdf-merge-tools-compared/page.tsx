import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';

export const metadata: Metadata = {
  title: '在线 PDF 合并工具横评：2026 年谁更值得用 | PDFMergeNext',
  description:
    '2026 年主流在线 PDF 合并工具横评：Smallpdf、iLovePDF、PDF24、PDFMergeNext 与 Adobe 在线版，在上传隐私、文件限制、价格上逐项对比，帮你选对那一个。A 2026 head-to-head of online PDF merge tools — Smallpdf, iLovePDF, PDF24, PDFMergeNext and Adobe online — compared on upload privacy, file limits, and price.',
  keywords: [
    '在线PDF合并',
    '在线 pdf merge',
    'PDF 合并工具对比',
    'online pdf merge tool',
    'Smallpdf 对比',
    'iLovePDF 对比',
    '本地 PDF 合并',
    'PDF merge comparison',
  ],
  alternates: {
    canonical: '/blog/online-pdf-merge-tools-compared',
    languages: {
      'zh-CN': '/blog/online-pdf-merge-tools-compared',
      'en-US': '/blog/online-pdf-merge-tools-compared',
      'x-default': '/blog/online-pdf-merge-tools-compared',
    },
  },
  openGraph: {
    title: '在线 PDF 合并工具横评：2026 年谁更值得用 · PDFMergeNext',
    description:
      'Smallpdf、iLovePDF、PDF24、PDFMergeNext、Adobe 在线版逐项对比：隐私、限制、价格。A 2026 head-to-head of online PDF merge tools.',
    type: 'article',
    url: `${SITE_URL}/blog/online-pdf-merge-tools-compared`,
    siteName: 'PDFMergeNext',
    publishedTime: '2026-09-06T00:00:00.000Z',
    images: [{ url: `${SITE_URL}/og`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '在线 PDF 合并工具横评：2026 年谁更值得用 · PDFMergeNext',
    description:
      'Smallpdf、iLovePDF、PDF24、PDFMergeNext、Adobe 在线版逐项对比：隐私、限制、价格。',
    images: [`${SITE_URL}/og`],
  },
};

const FAQ = [
  {
    q: '在线合并 PDF 安全吗？',
    a: '取决于工具是否上传文件。Smallpdf、iLovePDF 这类云端工具会把文件传到服务器处理，协议里通常保留训练或留存权利；PDFMergeNext 这类浏览器本地工具文件不出设备，相对更安全。敏感文档优先选本地处理。',
  },
  {
    q: 'Is merging PDFs online safe?',
    a: 'It depends on whether the tool uploads your files. Cloud services like Smallpdf and iLovePDF process files on their servers and their terms often reserve training or retention rights. Browser-local tools like PDFMergeNext keep files on your device, which is safer for sensitive documents.',
  },
  {
    q: '免费的在线合并工具有哪些限制？',
    a: '多数免费档会限制每小时页数、文件大小、加水印，或限制"每天 N 次"。PDFMergeNext 的免费档无文件大小限制、无水印、不限次数，靠本地处理省掉服务器成本。',
  },
  {
    q: 'What limits do free online merge tools have?',
    a: 'Most free tiers cap pages per hour, file size, add watermarks, or limit you to a few merges a day. PDFMergeNext’s free tier has no file-size limit, no watermark, and no per-day cap — local processing removes the server cost.',
  },
  {
    q: 'PDFMergeNext 和 Smallpdf 哪个更值得用？',
    a: '只想偶尔合并、且看重隐私 → PDFMergeNext（零上传、免费、无大小限制）。需要整套云端编辑、转换、电子签名，且不在乎上传 → Smallpdf 更全。对比见 /blog/pdfmergenext-vs-smallpdf-vs-ilovepdf。',
  },
  {
    q: 'Which is better, PDFMergeNext or Smallpdf?',
    a: 'If you only merge occasionally and care about privacy, PDFMergeNext (zero upload, free, no size limit). If you need a full cloud suite — editing, conversion, e-sign — and don’t mind uploading, Smallpdf is broader. See /blog/pdfmergenext-vs-smallpdf-vs-ilovepdf.',
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
            name: '在线 PDF 合并工具横评',
            item: `${SITE_URL}/blog/online-pdf-merge-tools-compared`,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: FAQ.map((it) => ({
          '@type': 'Question',
          name: it.q,
          acceptedAnswer: { '@type': 'Answer', text: it.a },
        })),
      },
      {
        '@type': 'Article',
        headline: '在线 PDF 合并工具横评 / Online PDF Merge Tools Compared',
        description:
          '2026 年 Smallpdf、iLovePDF、PDF24、PDFMergeNext、Adobe 在线版在隐私、限制、价格上的逐项对比。',
        author: { '@type': 'Person', name: 'PDFMergeNext', url: 'https://pdfmergenext.shop', '@id': 'https://pdfmergenext.shop/#organization' },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-09-06',
        dateModified: '2026-09-06',
        image: `${SITE_URL}/og`,
        url: `${SITE_URL}/blog/online-pdf-merge-tools-compared`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/online-pdf-merge-tools-compared` },
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
        <span>在线 PDF 合并工具横评</span>
      </nav>

      <h1 className="text-3xl font-bold leading-tight">
        在线 PDF 合并工具横评：2026 年谁更值得用 / Online PDF Merge Tools Compared
      </h1>
      <p className="mt-2 text-sm text-fg-muted">
        更新于 2026-09-06 · 阅读约 8 分钟 / 8 min read
      </p>

      <div className="my-6 rounded-lg bg-subtle p-4 text-sm leading-relaxed">
        <strong className="block mb-1">📋 快速结论 / TL;DR</strong>
        想合并 PDF，绕不开一个选择：把文件上传到云端，还是在自己浏览器里本地处理。我们横评了 5 个主流工具，<strong>隐私</strong>和<strong>限制</strong>才是真正拉开差距的地方——不是界面好不好看。如果你偶尔合并、又不想把合同或报表发出去，<strong>PDFMergeNext</strong> 的零上传方案最省心。When you merge a PDF, the real choice is whether your files get uploaded to a server or stay in your own browser. We compared five tools; privacy and limits matter more than looks. If you merge occasionally and don’t want contracts or reports leaving your machine, PDFMergeNext’s zero-upload approach is the calmest pick.
      </div>

      <nav className="mb-8 rounded-lg border border-line p-4 text-sm">
        <strong className="block mb-2">📑 目录 / Contents</strong>
        <ul className="list-inside space-y-1">
          <li><a href="#what" className="text-primary hover:underline">1. 什么是"在线合并"</a></li>
          <li><a href="#compare" className="text-primary hover:underline">2. 五款工具逐项对比</a></li>
          <li><a href="#privacy" className="text-primary hover:underline">3. 隐私：上传还是本地</a></li>
          <li><a href="#limits" className="text-primary hover:underline">4. 免费档的限制</a></li>
          <li><a href="#pick" className="text-primary hover:underline">5. 什么时候选哪个</a></li>
          <li><a href="#faq" className="text-primary hover:underline">6. 常见问题</a></li>
        </ul>
      </nav>

      <h2 id="what" className="text-2xl font-semibold mt-10">
        1. 什么是"在线合并" / What "online merge" actually means
      </h2>
      <p className="mt-3">
        "在线 PDF 合并"通常指打开一个网页、拖入文件、点合并。但底层分两种：<strong>云端合并</strong>把文件传到服务器处理，<strong>浏览器本地合并</strong>用 WebAssembly 在你本机处理。两者都"在线"（不用装软件），但文件去哪了完全不同。Smallpdf、iLovePDF、Adobe 在线版属于前者；PDFMergeNext 属于后者。
      </p>
      <p className="mt-2">
        "Online PDF merge" usually means open a page, drop files, click merge. Under the hood there are two models: <strong>cloud merge</strong> uploads files to a server, while <strong>browser-local merge</strong> processes them on your device with WebAssembly. Both are "online" (no install), but where your files go is completely different. Smallpdf, iLovePDF and Adobe online are the first kind; PDFMergeNext is the second.
      </p>

      <h2 id="compare" className="text-2xl font-semibold mt-10">
        2. 五款工具逐项对比 / Five tools, head to head
      </h2>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-line">
              <th className="py-2 pr-4 text-left font-semibold">维度 / Aspect</th>
              <th className="py-2 pr-4 text-left font-semibold">Smallpdf</th>
              <th className="py-2 pr-4 text-left font-semibold">iLovePDF</th>
              <th className="py-2 pr-4 text-left font-semibold">PDF24</th>
              <th className="py-2 pr-4 text-left font-semibold">PDFMergeNext</th>
              <th className="py-2 text-left font-semibold">Adobe 在线版</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-line"><td className="py-2 pr-4">处理位置</td><td className="py-2 pr-4">云端</td><td className="py-2 pr-4">云端</td><td className="py-2 pr-4">桌面/离线</td><td className="py-2 pr-4">浏览器本地</td><td className="py-2">云端</td></tr>
            <tr className="border-b border-line"><td className="py-2 pr-4">上传文件</td><td className="py-2 pr-4">是</td><td className="py-2 pr-4">是</td><td className="py-2 pr-4">否（桌面）</td><td className="py-2 pr-4">零上传</td><td className="py-2">是</td></tr>
            <tr className="border-b border-line"><td className="py-2 pr-4">免费档限制</td><td className="py-2 pr-4">每日次数</td><td className="py-2 pr-4">每日次数</td><td className="py-2 pr-4">免费、无限制</td><td className="py-2 pr-4">无大小限制</td><td className="py-2">需订阅</td></tr>
            <tr className="border-b border-line"><td className="py-2 pr-4">水印</td><td className="py-2 pr-4">付费去</td><td className="py-2 pr-4">付费去</td><td className="py-2 pr-4">无</td><td className="py-2 pr-4">无水印</td><td className="py-2">订阅内</td></tr>
            <tr className="border-b border-line"><td className="py-2 pr-4">挑页合并</td><td className="py-2 pr-4">支持</td><td className="py-2 pr-4">支持</td><td className="py-2 pr-4">支持</td><td className="py-2 pr-4">1-3,5 语法</td><td className="py-2">支持</td></tr>
            <tr className="border-b border-line"><td className="py-2 pr-4">安装</td><td className="py-2 pr-4">无需</td><td className="py-2 pr-4">无需</td><td className="py-2 pr-4">需下载</td><td className="py-2 pr-4">无需</td><td className="py-2">无需</td></tr>
            <tr><td className="py-2 pr-4">价格</td><td className="py-2 pr-4">订阅制</td><td className="py-2 pr-4">订阅制</td><td className="py-2 pr-4">免费</td><td className="py-2 pr-4">免费+订阅</td><td className="py-2">订阅制</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="privacy" className="text-2xl font-semibold mt-10">
        3. 隐私：上传还是本地 / Privacy: upload or local
      </h2>
      <p className="mt-3">
        这是横评里最重要的一项。云端工具的便利是有代价的：文件离开你的设备，落到别人服务器上。它们的服务条款通常保留处理、留存、甚至用于模型训练的权利。对个人税务、公司合同、医疗报表这类敏感文件，这风险不值得。浏览器本地工具把文件留在你机器上，处理完即销毁于内存，没有上传环节——用 DevTools → Network 验证，应该是零请求。
      </p>
      <p className="mt-2">
        This is the most important row. Cloud tools trade convenience for exposure: files leave your device. Their terms usually reserve the right to process, retain, or even train on your uploads. For tax forms, contracts, or medical reports, that risk isn’t worth it. Browser-local tools keep files on your machine and destroy them from memory after merging — no upload step. Verify with DevTools → Network: a true local tool shows zero requests.
      </p>

      <h2 id="limits" className="text-2xl font-semibold mt-10">
        4. 免费档的限制 / What the free tiers actually cap
      </h2>
      <ul className="mt-3 space-y-2">
        <li><strong>次数限制：</strong>Smallpdf、iLovePDF 免费档多为"每天 N 次"，重度用户很快撞墙。</li>
        <li><strong>大小限制：</strong>云端工具对单文件/总大小设上限，大归档吃不消。</li>
        <li><strong>水印：</strong>不少免费合并会盖水印，付费才去。</li>
        <li><strong>PDFMergeNext 的免费档：</strong>无文件大小限制、无水印、不限次数——因为本地处理没有服务器成本，这部分优势是结构性的。</li>
      </ul>

      <h2 id="pick" className="text-2xl font-semibold mt-10">
        5. 什么时候选哪个 / When to pick which
      </h2>
      <ul className="mt-3 space-y-2">
        <li><strong>偶尔合并、在意隐私</strong> → PDFMergeNext 最省事（<a href="/blog/why-local-offline-pdf-merge" className="text-primary hover:underline">为什么本地离线合并更安全</a>）。</li>
        <li><strong>要整套云端编辑/转换/电子签名</strong> → Smallpdf 或 Adobe，代价是上传。</li>
        <li><strong>想完全离线、不怕装软件</strong> → PDF24 桌面版，对比见 <a href="/blog/pdf24-vs-pdfmergenext" className="text-primary hover:underline">PDF24 vs PDFMergeNext</a>。</li>
        <li><strong>想换掉 iLovePDF</strong> → 看 <a href="/blog/ilovepdf-alternatives-no-upload" className="text-primary hover:underline">iLovePDF 零上传替代</a>，5 个本地工具。</li>
      </ul>

      <h2 id="faq" className="text-2xl font-semibold mt-10">
        6. 常见问题 / FAQ
      </h2>
      <div className="mt-4 space-y-4">
        {FAQ.map((item, i) => (
          <details key={i} className="group rounded-lg border border-line p-4">
            <summary className="cursor-pointer font-medium group-open:text-primary">
              {item.q}
            </summary>
            <p className="mt-2 text-sm text-fg-muted">
              {item.a}
            </p>
          </details>
        ))}
      </div>

      <section className="mt-10 rounded-lg border border-line bg-subtle p-6">
        <h2 className="text-lg font-semibold">关于 pdfmergenext.shop</h2>
        <p className="mt-2 text-sm leading-relaxed text-fg-muted">
          pdfmergenext.shop 是一个<strong>零上传</strong>的 PDF 合并工具：文件在你的浏览器本地用 WebAssembly 处理，绝不传到任何服务器，免费、无水印、无文件大小限制。
          想看它在隐私上和竞品的真实差距，读我们对比 Acrobat 的 <a href="/blog/pdfmergenext-vs-smallpdf-vs-ilovepdf" className="text-primary hover:underline">PDFMergeNext vs Smallpdf vs iLovePDF</a>，
          以及 <a href="/blog/why-local-offline-pdf-merge" className="text-primary hover:underline">为什么本地离线合并更安全</a>、
          <a href="/blog/compress-pdf-local-no-upload" className="text-primary hover:underline">压缩 PDF 不上传</a>，
          和 <a href="/blog/how-to-merge-pdf-step-by-step" className="text-primary hover:underline">分步合并教程</a>。
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-title font-semibold text-fg">相关阅读 / Related</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Link href="/blog/pdfmergenext-vs-smallpdf-vs-ilovepdf" className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle">
            <p className="text-sm font-semibold text-fg">PDFMergeNext vs Smallpdf vs iLovePDF</p>
            <p className="mt-1 text-xs text-fg-secondary">2026 隐私与限制全对比</p>
          </Link>
          <Link href="/blog/why-local-offline-pdf-merge" className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle">
            <p className="text-sm font-semibold text-fg">为什么选本地离线合并</p>
            <p className="mt-1 text-xs text-fg-secondary">隐私优先才是正解</p>
          </Link>
          <Link href="/blog/ilovepdf-alternatives-no-upload" className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle">
            <p className="text-sm font-semibold text-fg">iLovePDF 替代方案</p>
            <p className="mt-1 text-xs text-fg-secondary">5 个零上传的本地工具</p>
          </Link>
          <Link href="/blog/how-to-merge-pdf-step-by-step" className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle">
            <p className="text-sm font-semibold text-fg">分步合并 PDF 教程</p>
            <p className="mt-1 text-xs text-fg-secondary">从拖拽到下载</p>
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
