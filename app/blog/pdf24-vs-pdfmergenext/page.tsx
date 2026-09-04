import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';

export const metadata: Metadata = {
  title: 'PDF24 vs PDFMergeNext：功能对比 | PDFMergeNext',
  description:
    '同是免费、本地处理文件的 PDF 工具，PDF24 与 PDFMergeNext 到底差在哪？合并、压缩、隐私、上手成本逐项对比，帮你选对那一个。Both free and local-first — a feature-by-feature comparison of merging, compression, privacy, and ease of use.',
  keywords: [
    'PDF24 vs PDFMergeNext',
    'PDF24 对比',
    'PDF24 替代品',
    'PDF24 alternative',
    '本地 PDF 工具对比',
    'local PDF tool comparison',
    'PDF24 功能',
    'PDF24 features',
  ],
  alternates: {
    canonical: '/blog/pdf24-vs-pdfmergenext',
    languages: {
      'zh-CN': '/blog/pdf24-vs-pdfmergenext',
      'en-US': '/blog/pdf24-vs-pdfmergenext',
      'x-default': '/blog/pdf24-vs-pdfmergenext',
    },
  },
  openGraph: {
    title: 'PDF24 vs PDFMergeNext：功能对比 · PDFMergeNext',
    description:
      '免费、本地处理的两款 PDF 工具逐项对比：合并、压缩、隐私、上手成本。Both free and local-first — feature-by-feature.',
    type: 'article',
    url: `${SITE_URL}/blog/pdf24-vs-pdfmergenext`,
    siteName: 'PDFMergeNext',
    publishedTime: '2026-09-04T00:00:00.000Z',
    images: [{ url: `${SITE_URL}/og`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PDF24 vs PDFMergeNext：功能对比 · PDFMergeNext',
    description:
      '免费、本地处理的两款 PDF 工具逐项对比：合并、压缩、隐私、上手成本。',
    images: [`${SITE_URL}/og`],
  },
};

const FAQ = [
  {
    q: 'PDF24 和 PDFMergeNext 哪个更安全（隐私）？',
    a: '两者都不上传文件，安全等级在同一档。区别在于形态：PDF24 是本地桌面程序，文件在你的电脑里处理；PDFMergeNext 是浏览器内 WebAssembly 处理，文件同样不出设备。两者都能用 DevTools → Network 验证「零上传请求」。',
  },
  {
    q: 'Which is better if I only need to merge a few PDFs?',
    a: 'PDFMergeNext. Open the page, drop your files, done — no install, no upload, no watermark. PDF24 works too, but you first download a whole desktop suite for what is often a one-time task.',
  },
  {
    q: 'PDF24 能完全替代 PDFMergeNext 吗？',
    a: '如果你要的只是「合并」，两者都能做到。但 PDF24 更重（一整套套件），PDFMergeNext 更轻（单功能、免安装）。只做合并的话，PDFMergeNext 更顺手，也更适合临时用别人电脑的人。',
  },
  {
    q: 'Do either tool edit text or convert to Word?',
    a: "PDF24's desktop suite covers conversion and basic editing; PDFMergeNext is merge-only by design. If you need format conversion or OCR, PDF24 (or Acrobat for compliance work) is the one to reach for.",
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
            name: 'PDF24 vs PDFMergeNext',
            item: `${SITE_URL}/blog/pdf24-vs-pdfmergenext`,
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
        headline: 'PDF24 vs PDFMergeNext：功能对比 / PDF24 vs PDFMergeNext: Feature Comparison',
        description:
          '同是免费、本地处理文件的 PDF 工具，PDF24 与 PDFMergeNext 逐项功能对比：合并、压缩、隐私、上手成本。',
        author: { '@type': 'Person', name: 'PDFMergeNext', url: 'https://pdfmergenext.shop', '@id': 'https://pdfmergenext.shop/#organization' },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-09-04',
        dateModified: '2026-09-04',
        image: `${SITE_URL}/og`,
        url: `${SITE_URL}/blog/pdf24-vs-pdfmergenext`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/pdf24-vs-pdfmergenext` },
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
        <span>PDF24 vs PDFMergeNext</span>
      </nav>

      <h1 className="text-3xl font-bold leading-tight">
        PDF24 vs PDFMergeNext：功能对比 / PDF24 vs PDFMergeNext: Feature Comparison
      </h1>
      <p className="mt-2 text-sm text-fg-muted">
        更新于 2026-09-04 · 阅读约 7 分钟 / 7 min read
      </p>

      <div className="my-6 rounded-lg bg-subtle p-4 text-sm leading-relaxed">
        <strong className="block mb-1">📋 快速结论 / TL;DR</strong>
        两者都免费、都本地处理、都零上传。差别在形态：<strong>PDF24</strong> 是德国出品的桌面套件，装好就能离线用全套（合并、压缩、转换、OCR）；<strong>PDFMergeNext</strong> 是浏览器内零安装的合并工具，打开网页就干活。只想合并、不想装软件 → 选 PDFMergeNext；想要离线全套 + 转换 → 选 PDF24。
      </div>

      <nav className="mb-8 rounded-lg border border-line p-4 text-sm">
        <strong className="block mb-2">📑 目录 / Contents</strong>
        <ul className="list-inside space-y-1">
          <li><a href="#what" className="text-primary hover:underline">1. 它们各自是什么</a></li>
          <li><a href="#features" className="text-primary hover:underline">2. 功能逐项对比</a></li>
          <li><a href="#privacy" className="text-primary hover:underline">3. 隐私模型</a></li>
          <li><a href="#ease" className="text-primary hover:underline">4. 上手成本</a></li>
          <li><a href="#pick" className="text-primary hover:underline">5. 什么时候选哪个</a></li>
          <li><a href="#faq" className="text-primary hover:underline">6. 常见问题</a></li>
        </ul>
      </nav>

      <h2 id="what" className="text-2xl font-semibold mt-10">
        1. 它们各自是什么
      </h2>
      <p className="mt-3">
        <strong>PDF24</strong> 是德国开发商 ePubli 推出的免费桌面套件，包含合并、拆分、压缩、格式转换、OCR 等几十个工具。安装后完全在本机运行，无需联网、无需上传。
      </p>
      <p className="mt-2">
        <strong>PDFMergeNext</strong> 是一个浏览器内的 PDF 合并工具，用 WebAssembly + pdf-lib 在本地处理文件。它的定位很窄：只做合并，但做到零上传、免费、无水印、无文件大小限制、无需注册。
      </p>

      <h2 id="features" className="text-2xl font-semibold mt-10">
        2. 功能逐项对比
      </h2>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-line">
              <th className="py-2 pr-4 text-left font-semibold">维度 / Aspect</th>
              <th className="py-2 pr-4 text-left font-semibold">PDF24（桌面版）</th>
              <th className="py-2 text-left font-semibold">PDFMergeNext</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-line"><td className="py-2 pr-4">合并 PDF</td><td className="py-2 pr-4">✅ 支持，含挑页</td><td className="py-2">✅ 支持，含 1-3,5 挑页语法</td></tr>
            <tr className="border-b border-line"><td className="py-2 pr-4">压缩</td><td className="py-2 pr-4">✅ 支持</td><td className="py-2">✅ 合并前可先压</td></tr>
            <tr className="border-b border-line"><td className="py-2 pr-4">格式转换</td><td className="py-2 pr-4">✅ 多格式</td><td className="py-2">❌ 仅合并</td></tr>
            <tr className="border-b border-line"><td className="py-2 pr-4">OCR</td><td className="py-2 pr-4">✅ 桌面版支持</td><td className="py-2">❌</td></tr>
            <tr className="border-b border-line"><td className="py-2 pr-4">安装</td><td className="py-2 pr-4">需下载安装</td><td className="py-2">零安装，开页即用</td></tr>
            <tr className="border-b border-line"><td className="py-2 pr-4">离线</td><td className="py-2 pr-4">✅ 完全离线</td><td className="py-2">✅ 浏览器本地（无需联网）</td></tr>
            <tr className="border-b border-line"><td className="py-2 pr-4">上传</td><td className="py-2 pr-4">不上传</td><td className="py-2">零上传</td></tr>
            <tr className="border-b border-line"><td className="py-2 pr-4">水印 / 费用</td><td className="py-2 pr-4">免费、无水印</td><td className="py-2">免费、无水印、无大小限制</td></tr>
            <tr><td className="py-2 pr-4">系统</td><td className="py-2 pr-4">Windows（部分 macOS）</td><td className="py-2">任意现代浏览器</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="privacy" className="text-2xl font-semibold mt-10">
        3. 隐私模型
      </h2>
      <p className="mt-3">
        两者都不把文件传到服务器，这是它们最大的共同点。区别只在「文件在哪处理」：PDF24 在你的桌面 exe 里处理，PDFMergeNext 在你的浏览器 WASM 里处理。要自己验证，打开 DevTools（F12）→ Network，拖入文件后看有没有任何上传请求——真正的本地工具应该是零请求。
      </p>

      <h2 id="ease" className="text-2xl font-semibold mt-10">
        4. 上手成本
      </h2>
      <p className="mt-3">
        PDF24 功能多，但界面偏旧、要先装软件，第一次用得在几十个工具里找合并入口。PDFMergeNext 只有一个页面，拖文件、排顺序、合并，几秒钟上手。如果你只想偶尔合并一两份 PDF，装一整套桌面软件确实杀鸡用牛刀。
      </p>

      <h2 id="pick" className="text-2xl font-semibold mt-10">
        5. 什么时候选哪个
      </h2>
      <ul className="mt-3 space-y-2">
        <li><strong>只合并、偶尔用、不想装软件</strong> → PDFMergeNext 最省事。</li>
        <li><strong>要离线全套、OCR、转 Word、频繁处理</strong> → PDF24 更合适。</li>
        <li><strong>团队合规场景（数字签名、认证修订）</strong> → 两者都不是，仍建议 Acrobat，对比见 <a href="/blog/pdfmergenext-vs-smallpdf-vs-ilovepdf" className="text-primary hover:underline">PDFMergeNext vs Smallpdf vs iLovePDF</a>。</li>
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
          如果你只是想把几份 PDF 合在一起，不用为了这点事下载一整套软件。试试 <a href="/" className="text-primary hover:underline">PDFMergeNext 在线合并</a>，
          或读我们对比 Acrobat 的 <a href="/blog/pdfmergenext-vs-smallpdf-vs-ilovepdf" className="text-primary hover:underline">PDFMergeNext vs Smallpdf vs iLovePDF</a>，
          以及 <a href="/blog/why-local-offline-pdf-merge" className="text-primary hover:underline">为什么本地离线合并更安全</a>，
          和 <a href="/blog/ilovepdf-alternatives-no-upload" className="text-primary hover:underline">iLovePDF 零上传替代</a>。
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
          <Link href="/blog/compress-pdf-local-no-upload" className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle">
            <p className="text-sm font-semibold text-fg">压缩 PDF 不上传</p>
            <p className="mt-1 text-xs text-fg-secondary">浏览器本地瘦身指南</p>
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
