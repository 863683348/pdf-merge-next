import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';

export const metadata: Metadata = {
  title: 'iLovePDF 替代方案：5 个零上传的本地工具 | PDFMergeNext',
  description:
    '5 个优秀的 iLovePDF 替代方案，完全在浏览器中处理你的文件——无需上传、无需服务器处理、最大隐私。5 no-upload iLovePDF alternatives that run entirely in your browser.',
  keywords: [
    'iLovePDF 替代',
    'iLovePDF alternatives',
    '不上传 PDF 工具',
    'no upload PDF tools',
    '隐私 PDF 合并',
    'privacy PDF merger',
    '本地 PDF 处理',
    'browser-based PDF tools',
  ],
  alternates: {
    canonical: '/blog/ilovepdf-alternatives-no-upload',
    languages: {
      'zh-CN': '/blog/ilovepdf-alternatives-no-upload',
      'en-US': '/blog/ilovepdf-alternatives-no-upload',
      'x-default': '/blog/ilovepdf-alternatives-no-upload',
    },
  },
  openGraph: {
    title: 'iLovePDF 替代方案：5 个零上传的本地工具 · PDFMergeNext',
    description:
      '5 个优秀的 iLovePDF 替代方案，完全在浏览器中处理你的文件——无需上传、无需服务器处理、最大隐私。5 no-upload iLovePDF alternatives.',
    type: 'article',
    url: `${SITE_URL}/blog/ilovepdf-alternatives-no-upload`,
    siteName: 'PDFMergeNext',
    publishedTime: '2026-09-02T00:00:00.000Z',
    images: [{ url: `${SITE_URL}/og`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iLovePDF 替代方案：5 个零上传的本地工具 · PDFMergeNext',
    description:
      '5 个优秀的 iLovePDF 替代方案，完全在浏览器中处理你的文件——无需上传、无需服务器处理、最大隐私。5 no-upload iLovePDF alternatives.',
    images: [`${SITE_URL}/og`],
  },
};

// FAQ 数据
const FAQ = [
  {
    q: 'iLovePDF 真的会把文件上传到服务器吗？',
    a: '是的。iLovePDF 等大多数在线 PDF 工具需要在处理前把你的文件上传到他们的服务器，处理完后再把结果下载回来。即使他们承诺短时间后删除，你的文件仍然经过了第三方基础设施。如果你处理的是合同、报表或证件，这种上传本身就构成了隐私风险。',
  },
  {
    q: '有哪些完全不上传的 iLovePDF 替代工具？',
    a: '本文介绍的 5 个工具都在浏览器本地或完全离线处理文件：PDFMergeNext（浏览器零上传合并）、PDF24 Tools（桌面离线处理）、以及注重隐私模式的 Smallpdf、Adobe Acrobat 本地操作、各类浏览器扩展。其中 PDFMergeNext 与 PDF24 是"零上传"程度最高的两个。',
  },
  {
    q: 'PDFMergeNext 和 iLovePDF 有什么区别？',
    a: '核心区别在架构：iLovePDF 需要把文件上传到云端服务器处理；PDFMergeNext 使用 WebAssembly + pdf-lib 在浏览器本地执行，文件永不离开你的设备。功能上 iLovePDF 更全（压缩、转换、签名等），但 PDFMergeNext 在"合并"这一最常见的场景下做到免费、无水印、零上传。',
  },
  {
    q: '不上传合并会影响功能吗？比如挑页合并？',
    a: '不会。以 PDFMergeNext 为例，本地合并同样支持 1-3,5 这样的挑页语法，可指定每个文件要合并的页码范围，且完全免费。受限制的是某些高级格式转换（如 PDF 转 Word），这类功能在纯浏览器本地实现成本高，需要权衡。',
  },
  {
    q: '免费的零上传工具会不会有隐藏收费？',
    a: 'PDFMergeNext 目前完全免费：无每日次数限制、无文件大小限制、无水印、无需注册。PDF24 的桌面版也是免费的。判断一个工具是否真的免费，最可靠的方式是打开 DevTools（F12）→ Network 标签，拖入文件后观察是否出现任何上传请求——零请求的才是真正本地处理。',
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
            name: 'iLovePDF 替代方案 / iLovePDF Alternatives',
            item: `${SITE_URL}/blog/ilovepdf-alternatives-no-upload`,
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
        headline: 'iLovePDF 替代方案：5 个零上传的本地工具 / iLovePDF Alternatives: 5 No-Upload Tools',
        description:
          '5 个优秀的 iLovePDF 替代方案，完全在浏览器中处理文件——无需上传、无需服务器处理、最大隐私。',
        author: { '@type': 'Person', name: 'PDFMergeNext', url: 'https://pdfmergenext.shop', '@id': 'https://pdfmergenext.shop/#organization' },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-09-02',
        dateModified: '2026-09-02',
        image: `${SITE_URL}/og`,
        url: `${SITE_URL}/blog/ilovepdf-alternatives-no-upload`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/ilovepdf-alternatives-no-upload` },
      },
    ],
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-fg-muted" aria-label="Breadcrumb">
        <a href="/" className="hover:underline">首页 / Home</a>
        {' › '}
        <a href="/blog" className="hover:underline">博客 / Blog</a>
        {' › '}
        <span>iLovePDF 替代方案 / iLovePDF Alternatives</span>
      </nav>

      {/* Title */}
      <h1 className="text-3xl font-bold leading-tight">
        iLovePDF 替代方案：5 个零上传的本地工具 / iLovePDF Alternatives: 5 No-Upload Tools
      </h1>
      <p className="mt-2 text-sm text-fg-muted">
        更新于 2026-09-02 · 阅读约 6 分钟 / 6 min read
      </p>

      {/* TL;DR */}
      <div className="my-6 rounded-lg bg-subtle p-4 text-sm leading-relaxed">
        <strong className="block mb-1">📋 快速结论 / TL;DR</strong>
        如果你担心把敏感 PDF 上传到别人的服务器，这 5 个工具能在<strong>浏览器本地</strong>完成处理——
        其中 <strong>PDFMergeNext</strong> 零上传、免费、无水印；<strong>PDF24</strong> 则走完全离线的桌面路线。
        选工具前先想清楚你的优先级：隐私、功能还是便利。
      </div>

      {/* TOC */}
      <nav className="mb-8 rounded-lg border border-line p-4 text-sm">
        <strong className="block mb-2">📑 目录 / Contents</strong>
        <ul className="list-inside space-y-1">
          <li><a href="#why" className="text-primary hover:underline">1. 为什么需要 iLovePDF 替代</a></li>
          <li><a href="#tools" className="text-primary hover:underline">2. 5 个零上传的替代工具</a></li>
          <li><a href="#choose" className="text-primary hover:underline">3. 如何做选择</a></li>
          <li><a href="#privacy" className="text-primary hover:underline">4. 隐私要点</a></li>
          <li><a href="#faq" className="text-primary hover:underline">5. 常见问题</a></li>
        </ul>
      </nav>

      {/* Section 1 */}
      <h2 id="why" className="text-2xl font-semibold mt-10">
        1. 为什么需要 iLovePDF 替代
      </h2>
      <p className="mt-3">
        iLovePDF 多年来一直是 PDF 操作的首选工具。但有一个日益增长的担忧：<strong>把你的文档上传到别人的服务器</strong>。
        如果 PDF 里包含敏感信息呢？如果你在处理机密商业文件呢？
      </p>
      <p className="mt-2">
        本文介绍 5 个优秀的 iLovePDF 替代方案，它们<strong>完全在浏览器中处理你的文件</strong>——无需上传、无需服务器处理、最大隐私。
      </p>

      {/* Section 2 */}
      <h2 id="tools" className="text-2xl font-semibold mt-10">
        2. 5 个零上传的替代工具
      </h2>

      <h3 className="text-xl font-semibold mt-6">① PDFMergeNext — 浏览器本地合并</h3>
      <p className="mt-2">
        PDFMergeNext 是一个免费、开源的工具，直接在浏览器中合并 PDF。无需账户，无需将文件上传到外部服务器。
      </p>
      <ul className="mt-2 space-y-1">
        <li><strong>最适合：</strong> 隐私很重要的快速合并。</li>
        <li><strong>限制：</strong> 单一功能（仅合并），无压缩或格式转换。</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6">② Adobe Acrobat Online — 值得信赖的品牌</h3>
      <p className="mt-2">
        Adobe 自家的在线 PDF 工具提供与其桌面软件同级的可靠性。虽然部分高级功能需要上传，但基础的合并与拆分可以在本地完成。
      </p>
      <ul className="mt-2 space-y-1">
        <li><strong>最适合：</strong> 想要专业功能的可信品牌用户。</li>
        <li><strong>限制：</strong> 部分高级功能需要 Adobe 账户与云端处理。</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6">③ Smallpdf — 注重隐私的选项</h3>
      <p className="mt-2">
        Smallpdf 提供"隐私模式"，在可能时本地处理文件。其基于浏览器的工具能在无服务器上传的情况下完成许多常见 PDF 操作。
      </p>
      <ul className="mt-2 space-y-1">
        <li><strong>最适合：</strong> 需要多种 PDF 操作且看重隐私选项的用户。</li>
        <li><strong>限制：</strong> 免费版有每日限制；部分功能需付费。</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6">④ PDF24 Tools — 离线处理</h3>
      <p className="mt-2">
        PDF24 提供完全离线处理文件的桌面版本。无需联网、无需上传，完整隐私。
      </p>
      <ul className="mt-2 space-y-1">
        <li><strong>最适合：</strong> 把隐私放在第一位的人。</li>
        <li><strong>限制：</strong> 需要安装软件；非浏览器方案。</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6">⑤ 浏览器扩展 — 即时处理</h3>
      <p className="mt-2">
        PDF Expert、PDF Binder 等工具提供在本地处理 PDF 的浏览器扩展，适合不离开浏览器就能完成的快速操作。
      </p>
      <ul className="mt-2 space-y-1">
        <li><strong>最适合：</strong> 需要频繁、快速 PDF 操作的用户。</li>
        <li><strong>限制：</strong> 功能集相比完整应用更有限。</li>
      </ul>

      {/* Section 3 */}
      <h2 id="choose" className="text-2xl font-semibold mt-10">
        3. 如何做选择
      </h2>
      <p className="mt-3">根据你的优先级选择：</p>
      <ul className="mt-2 space-y-2">
        <li><strong>🔒 最大隐私：</strong> PDF24（离线）或 PDFMergeNext（浏览器本地）</li>
        <li><strong>🛠 专业功能：</strong> Adobe Acrobat</li>
        <li><strong>⚡ 便利性：</strong> Smallpdf</li>
        <li><strong>🔁 高频使用：</strong> 浏览器扩展</li>
      </ul>

      {/* Section 4 */}
      <h2 id="privacy" className="text-2xl font-semibold mt-10">
        4. 隐私要点
      </h2>
      <p className="mt-3">
        你的文档应该获得与个人照片相同的隐私保护。当本地工具存在时，<strong>不要将敏感 PDF 上传到未知服务器</strong>。
        本地处理从架构层面消除了数据经过第三方的风险——你可以用 DevTools（F12）→ Network 标签验证：拖入文件后，真正的零上传工具不会出现任何文件上传请求。
      </p>

      {/* Section 5: FAQ */}
      <h2 id="faq" className="text-2xl font-semibold mt-10">
        5. 常见问题 / FAQ
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

      {/* Related Articles */}
      <section className="mt-12">
        <h2 className="text-title font-semibold text-fg">相关阅读 / Related</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Link
            href="/blog/merge-pdf-no-upload"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">合并PDF不上传</p>
            <p className="mt-1 text-xs text-fg-secondary">安全免费的本地离线解决方案</p>
          </Link>
          <Link
            href="/blog/why-local-offline-pdf-merge"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">为什么选本地离线 PDF 合并</p>
            <p className="mt-1 text-xs text-fg-secondary">隐私优先才是正解</p>
          </Link>
          <Link
            href="/blog/pdfmergenext-vs-smallpdf-vs-ilovepdf"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">PDFMergeNext vs Smallpdf vs iLovePDF</p>
            <p className="mt-1 text-xs text-fg-secondary">2026 隐私与限制全对比</p>
          </Link>
          <Link
            href="/blog/browser-pdf-merge-privacy"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">浏览器合并 PDF 的隐私革命</p>
            <p className="mt-1 text-xs text-fg-secondary">WebAssembly 时代的本地处理</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <div className="mt-10 rounded-lg bg-primary/5 p-6 text-center">
        <p className="text-lg font-semibold">👉 试试 PDFMergeNext</p>
        <p className="mt-1 text-sm text-fg-muted">
          零上传、无水印、无限制。合并任意数量 PDF，免费。
        </p>
        <a
          href="/"
          className="mt-3 inline-block rounded-lg bg-primary px-6 py-2 text-sm font-medium text-white hover:bg-primary/90"
        >
          立即合并 / Merge Now
        </a>
      </div>
    </article>
  );
}
