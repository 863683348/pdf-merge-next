import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';

export const metadata: Metadata = {
  title: 'Top 10 隐私优先的 PDF 工具（2026）| PDFMergeNext',
  description:
    '十款把隐私放在第一位的 PDF 工具：从浏览器本地处理、桌面离线工具，到自建服务器方案。逐一说明处理位置、是否上传文件、免费范围，以及每款在什么场景下才值得用。',
  keywords: [
    'privacy pdf tools',
    '隐私优先 pdf 工具',
    'pdf tools no upload',
    'offline pdf merge',
    'self hosted pdf tools',
    '本地 pdf 处理',
    'top pdf tools 2026',
    'pdf tools that do not upload',
  ],
  alternates: {
    canonical: '/blog/top-10-privacy-pdf-tools-2026',
    languages: {
      'zh-CN': '/blog/top-10-privacy-pdf-tools-2026',
      'en-US': '/blog/top-10-privacy-pdf-tools-2026',
      'x-default': '/blog/top-10-privacy-pdf-tools-2026',
    },
  },
  openGraph: {
    title: 'Top 10 隐私优先的 PDF 工具（2026）· PDFMergeNext',
    description:
      '浏览器本地处理、桌面离线工具、自建服务器三种路线的十款 PDF 工具，逐一说明文件到底去了哪里。',
    type: 'article',
    url: `${SITE_URL}/blog/top-10-privacy-pdf-tools-2026`,
    siteName: 'PDFMergeNext',
    publishedTime: '2026-09-14T00:00:00.000Z',
    images: [{ url: `${SITE_URL}/og`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top 10 隐私优先的 PDF 工具（2026）· PDFMergeNext',
    description: '十款不上传文件的 PDF 工具，按本地处理、离线桌面、自建服务器三条路线分类。',
    images: [`${SITE_URL}/og`],
  },
};

const FAQ = [
  {
    q: '“隐私优先”具体指什么？',
    a: '指文件不被上传到别人运营的服务器。可以是浏览器本地处理（文件不出设备）、桌面离线应用（在你自己机器上跑），或者你自建的服务器（数据在你能控制的地方）。只要文件离开了你的设备，就不算。',
  },
  {
    q: '免费的隐私工具可靠吗？',
    a: '免费的本地工具通常可靠，因为它们没有服务器成本压力，也没必要靠你的文件来赚钱。要留意的是“免费 + 云端上传”的组合：如果处理发生在别人的服务器上，那你的文件就是它的成本项，需要看清楚它靠什么活。',
  },
  {
    q: '自建 PDF 服务值得折腾吗？',
    a: '如果你处理的是合同、病历、身份文件，或者团队有合规要求，值得。代价是你要自己维护容器、备份和更新。个人偶尔合并文件，浏览器本地工具就够了。',
  },
  {
    q: 'Which PDF tool should I use if I just need to merge a few files?',
    a: 'A browser-based local tool such as PDFMergeNext. Nothing is uploaded, there is no account, no watermark, and no file-size ceiling, so there is no reason to hand the files to a server for a one-off merge.',
  },
  {
    q: 'Is a self-hosted PDF service more private than a local browser tool?',
    a: 'Not automatically. Self-hosting wins when several people share the tool or when document retention rules require a controlled location. For a single person on a single machine, a browser-local tool has a smaller attack surface because there is no server to patch.',
  },
];

const TOOLS = [
  {
    n: 1,
    name: 'PDFMergeNext',
    where: '浏览器本地（WebAssembly）',
    upload: '不上传',
    install: '不需要',
    note: '合并、排序、删页都在你的浏览器里完成，文件从不离开设备，也没有账号和水印。适合绝大多数“我只是想把几份 PDF 合起来”的场景。',
  },
  {
    n: 2,
    name: 'Stirling PDF',
    where: '自建服务器（Docker）',
    upload: '上传到你自己的服务器',
    install: '需要，容器化部署',
    note: '功能覆盖面最广的开源自建方案：合并、拆分、转换、OCR、签章都有。数据留在你能控制的位置，代价是你得自己维护容器和更新。',
  },
  {
    n: 3,
    name: 'PDFsam Basic',
    where: '桌面离线',
    upload: '不上传',
    install: '需要（Windows / macOS / Linux）',
    note: '开源、纯本地，合并与拆分都稳。界面朴素，但处理上千页文件时比浏览器方案更从容。适合同一台机器上反复处理大文件的人。',
  },
  {
    n: 4,
    name: 'LibreOffice Draw',
    where: '桌面离线',
    upload: '不上传',
    install: '需要',
    note: '很多人不知道它能把多个 PDF 拖进来导出成一份。它本来不是 PDF 工具，排版会偶尔走形，适合偶尔应急、又不想装新软件的情况。',
  },
  {
    n: 5,
    name: 'Ghostscript',
    where: '命令行，本地',
    upload: '不上传',
    install: '需要',
    note: '命令行老将，压缩、转图、合并都能做，脚本化能力最强。缺点是参数记忆成本高，一条命令写错就白跑。',
  },
  {
    n: 6,
    name: 'qpdf',
    where: '命令行，本地',
    upload: '不上传',
    install: '需要',
    note: '专注 PDF 结构层面的无损操作：加密、解密、线性化、合并、拆分。想批量处理又不想重新编码文件内容的，它是正确工具。',
  },
  {
    n: 7,
    name: 'Sejda Desktop',
    where: '桌面离线',
    upload: '不上传（桌面版）',
    install: '需要',
    note: '网页版会上传文件，桌面版不会，这一点常被混淆。带图形界面，操作直觉，免费额度有限。用之前先确认自己打开的是桌面版。',
  },
  {
    n: 8,
    name: 'PDF24 Creator',
    where: '桌面离线',
    upload: '不上传',
    install: '需要（Windows）',
    note: '功能齐、免费、无账号。仅限 Windows，这是它最大的限制。界面风格偏工具化，但稳定。',
  },
  {
    n: 9,
    name: 'pdftk',
    where: '命令行，本地',
    upload: '不上传',
    install: '需要',
    note: '经典的批量拆分与合并工具，脚本友好。项目维护节奏慢、对新版 PDF 特性支持有限，但处理常规文件依然可靠。',
  },
  {
    n: 10,
    name: '系统自带预览工具',
    where: '桌面离线',
    upload: '不上传',
    install: '已预装',
    note: 'macOS 预览、部分 Linux 阅读器都能拖拽重排并导出 PDF。功能最少，但零安装、零配置、零上传，应急时最省事。',
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
            name: 'Top 10 隐私优先的 PDF 工具',
            item: `${SITE_URL}/blog/top-10-privacy-pdf-tools-2026`,
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
        headline: 'Top 10 隐私优先的 PDF 工具（2026）/ Top 10 Privacy-First PDF Tools',
        description:
          '十款不上传文件的 PDF 工具，按浏览器本地、桌面离线、自建服务器三条路线分类，附对比表与选择建议。',
        author: {
          '@type': 'Person',
          name: 'PDFMergeNext',
          url: 'https://pdfmergenext.shop',
          '@id': 'https://pdfmergenext.shop/#organization',
        },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-09-14',
        dateModified: '2026-09-14',
        image: `${SITE_URL}/og`,
        url: `${SITE_URL}/blog/top-10-privacy-pdf-tools-2026`,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${SITE_URL}/blog/top-10-privacy-pdf-tools-2026`,
        },
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
        <span>Top 10 隐私优先的 PDF 工具</span>
      </nav>

      <h1 className="text-3xl font-bold leading-tight">
        Top 10 隐私优先的 PDF 工具（2026） / Top 10 Privacy-First PDF Tools
      </h1>
      <p className="mt-2 text-sm text-fg-muted">
        更新于 2026-09-14 · 阅读约 9 分钟 / 9 min read
      </p>

      <div className="my-6 rounded-lg bg-subtle p-4 text-sm leading-relaxed">
        <strong className="block mb-1">📋 快速结论 / TL;DR</strong>
        判断一个 PDF 工具是否真隐私优先，只看一件事：文件有没有离开你的设备。只想合并几份 PDF，用浏览器本地工具（如 PDFMergeNext）最快也最省心；要在团队里共享、或有留存合规要求，自建 Stirling PDF 更合适；命令行批量处理选 qpdf 或 PDFsam。凡是需要上传文件的网页工具，无论它怎么描述加密，文件都已经不在你手上了。
      </div>

      <nav className="mb-8 rounded-lg border border-line p-4 text-sm">
        <strong className="block mb-2">📑 目录 / Contents</strong>
        <ul className="list-inside space-y-1">
          <li><a href="#what" className="text-primary hover:underline">1. 什么才算隐私优先</a></li>
          <li><a href="#list" className="text-primary hover:underline">2. 十款工具逐个看</a></li>
          <li><a href="#table" className="text-primary hover:underline">3. 逐项对比</a></li>
          <li><a href="#pick" className="text-primary hover:underline">4. 怎么选</a></li>
          <li><a href="#faq" className="text-primary hover:underline">5. 常见问题</a></li>
        </ul>
      </nav>

      <h2 id="what" className="text-2xl font-semibold mt-10">
        1. 什么才算隐私优先
      </h2>
      <p className="mt-3">
        “隐私优先”这个说法被用得很随意，所以需要一条硬标准：文件有没有离开你的设备。
      </p>
      <ul className="mt-3 space-y-2">
        <li><strong>浏览器本地处理：</strong>文件在你的浏览器内存里被处理，没有网络请求把它发出去。隐私性最好，因为根本不存在一份服务器副本。</li>
        <li><strong>桌面离线应用：</strong>程序跑在你自己的机器上，同样不上传。代价是需要安装，跨设备使用不方便。</li>
        <li><strong>自建服务器：</strong>文件上传了，但上传到你自己控制的机器。适合多人共用或有留存规定的场景，前提是你愿意维护它。</li>
        <li><strong>看起来加密的云端工具：</strong>传输加密并不等于处理不上传。文件到了对方服务器，就要按对方服务器的规则来。<a href="/blog/client-side-vs-server-side-pdf-tools" className="text-primary hover:underline">客户端与服务端处理</a>这篇把这个区别讲得更细。</li>
      </ul>
      <p className="mt-3">
        另外值得记住的是：隐私工具的评估标准里，功能多寡排在后面。<a href="/blog/how-we-evaluate-privacy-first-pdf-tools" className="text-primary hover:underline">我们的评估方法</a>把“文件去了哪里”放在第一位，其次是能否离线工作，最后才是格式兼容与速度。
      </p>

      <h2 id="list" className="text-2xl font-semibold mt-10">
        2. 十款工具逐个看
      </h2>
      <p className="mt-3">
        下面按处理位置分组，每款都标清了文件是否上传、是否要装东西，以及它真正适合的场景。没有一款是全能的，选之前先确认你的场景。
      </p>

      <div className="mt-4 space-y-6">
        {TOOLS.map((t) => (
          <section key={t.n} className="rounded-lg border border-line p-4">
            <h3 className="text-lg font-semibold">
              {t.n}. {t.name}
            </h3>
            <p className="mt-1 text-xs text-fg-secondary">
              处理位置：{t.where} · 文件上传：{t.upload} · 需要安装：{t.install}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-fg-muted">{t.note}</p>
          </section>
        ))}
      </div>

      <h2 id="table" className="text-2xl font-semibold mt-10">
        3. 逐项对比
      </h2>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-line">
              <th className="py-2 pr-4 text-left font-semibold">工具</th>
              <th className="py-2 pr-4 text-left font-semibold">文件去向</th>
              <th className="py-2 pr-4 text-left font-semibold">安装</th>
              <th className="py-2 text-left font-semibold">最适合</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-line"><td className="py-2 pr-4">PDFMergeNext</td><td className="py-2 pr-4">不上传</td><td className="py-2 pr-4">无需</td><td className="py-2">一次性合并、敏感文件</td></tr>
            <tr className="border-b border-line"><td className="py-2 pr-4">Stirling PDF</td><td className="py-2 pr-4">上传到你自己的服务器</td><td className="py-2 pr-4">需容器</td><td className="py-2">团队共用、留存合规</td></tr>
            <tr className="border-b border-line"><td className="py-2 pr-4">PDFsam Basic</td><td className="py-2 pr-4">不上传</td><td className="py-2 pr-4">需要</td><td className="py-2">大文件、反复处理</td></tr>
            <tr className="border-b border-line"><td className="py-2 pr-4">LibreOffice Draw</td><td className="py-2 pr-4">不上传</td><td className="py-2 pr-4">需要</td><td className="py-2">偶尔应急、不想装新软件</td></tr>
            <tr className="border-b border-line"><td className="py-2 pr-4">Ghostscript</td><td className="py-2 pr-4">不上传</td><td className="py-2 pr-4">需要</td><td className="py-2">脚本化、压缩转换</td></tr>
            <tr className="border-b border-line"><td className="py-2 pr-4">qpdf</td><td className="py-2 pr-4">不上传</td><td className="py-2 pr-4">需要</td><td className="py-2">无损结构操作、批量</td></tr>
            <tr className="border-b border-line"><td className="py-2 pr-4">Sejda Desktop</td><td className="py-2 pr-4">不上传（桌面版）</td><td className="py-2 pr-4">需要</td><td className="py-2">想要图形界面</td></tr>
            <tr className="border-b border-line"><td className="py-2 pr-4">PDF24 Creator</td><td className="py-2 pr-4">不上传</td><td className="py-2 pr-4">需要</td><td className="py-2">Windows 免费替代</td></tr>
            <tr className="border-b border-line"><td className="py-2 pr-4">pdftk</td><td className="py-2 pr-4">不上传</td><td className="py-2 pr-4">需要</td><td className="py-2">批量拆分合并脚本</td></tr>
            <tr><td className="py-2 pr-4">系统自带预览</td><td className="py-2 pr-4">不上传</td><td className="py-2 pr-4">已装</td><td className="py-2">最省事的应急重排</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="pick" className="text-2xl font-semibold mt-10">
        4. 怎么选
      </h2>
      <ul className="mt-3 space-y-2">
        <li><strong>只是偶尔合并几份 PDF：</strong>用浏览器本地工具，不要为了这个装软件，更不要把文件传给服务器。</li>
        <li><strong>经常处理几百页的大文件：</strong>桌面离线工具更稳，内存和批量能力都比浏览器充裕。</li>
        <li><strong>团队共用、或有留存规定：</strong>自建 Stirling PDF，把数据的落点放在你能说明白的地方。</li>
        <li><strong>要写进自动化流程：</strong>qpdf 处理结构、Ghostscript 处理压缩，两者搭配覆盖大多数批量任务。</li>
        <li><strong>文件本身敏感（合同、身份、医疗）：</strong>先排除任何要上传的网页工具，再在剩下的里面比功能。</li>
      </ul>
      <p className="mt-3">
        如果你现在用的还是 Smallpdf 或 iLovePDF 这类云端工具，迁移路径可以看<a href="/blog/smallpdf-alternatives-privacy-first" className="text-primary hover:underline">Smallpdf 隐私优先替代方案</a>，以及<a href="/blog/24-privacy-pdf-tool-alternatives" className="text-primary hover:underline">24 款替代工具清单</a>。想弄清“不上传”到底意味着什么，读<a href="/blog/pdf-merge-no-upload-privacy-facts" className="text-primary hover:underline">零上传的事实说明</a>。
      </p>

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

      <section className="mt-10 rounded-lg border border-line bg-subtle p-6">
        <h2 className="text-lg font-semibold">关于 pdfmergenext.shop</h2>
        <p className="mt-2 text-sm leading-relaxed text-fg-muted">
          pdfmergenext.shop 是一个<strong>零上传</strong>的 PDF 合并工具：文件在你的浏览器本地用 WebAssembly 处理，绝不传到任何服务器，免费、无水印、无文件大小限制。
          想了解它和云端工具的设计差异，可以读<a href="/blog/pdfmergenext-privacy-design" className="text-primary hover:underline">隐私设计说明</a>，
          或看它和 Smallpdf、iLovePDF 的<a href="/blog/pdfmergenext-vs-smallpdf-vs-ilovepdf" className="text-primary hover:underline">三方对比</a>。
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-title font-semibold text-fg">相关阅读 / Related</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Link href="/blog/smallpdf-alternatives-privacy-first" className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle">
            <p className="text-sm font-semibold text-fg">Smallpdf 替代方案</p>
            <p className="mt-1 text-xs text-fg-secondary">五款隐私优先的本地工具</p>
          </Link>
          <Link href="/blog/client-side-vs-server-side-pdf-tools" className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle">
            <p className="text-sm font-semibold text-fg">客户端 vs 服务端处理</p>
            <p className="mt-1 text-xs text-fg-secondary">文件到底去了哪里</p>
          </Link>
          <Link href="/blog/pdf-merge-no-upload-privacy-facts" className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle">
            <p className="text-sm font-semibold text-fg">零上传的事实</p>
            <p className="mt-1 text-xs text-fg-secondary">四件常被夸大或误传的事</p>
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
