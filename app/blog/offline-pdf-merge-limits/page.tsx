import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';

export const metadata: Metadata = {
  title: '100% 离线PDF合并：理论可行性的边界 | PDFMergeNext',
  description:
    '离线PDF合并到底能走多远？浏览器本地处理的理论边界、实际瓶颈（内存/性能/加密 PDF/扫描件），以及哪些场景确实做不到 100% 离线。Offline PDF merge, honestly examined.',
  keywords: [
    '离线PDF合并',
    '100% 离线PDF',
    '本地PDF合并 边界',
    'PDF合并 不联网',
    'offline pdf merge',
    'merge pdf offline',
    'local pdf merge limits',
    'pdf merge without internet',
  ],
  alternates: {
    canonical: '/blog/offline-pdf-merge-limits',
    languages: {
      'zh-CN': '/blog/offline-pdf-merge-limits',
      'en-US': '/blog/offline-pdf-merge-limits',
      'x-default': '/blog/offline-pdf-merge-limits',
    },
  },
  openGraph: {
    title: '100% 离线PDF合并：理论可行性的边界 · PDFMergeNext',
    description:
      '离线PDF合并到底能走多远？浏览器本地处理的理论边界、实际瓶颈（内存/性能/加密 PDF/扫描件），以及哪些场景确实做不到 100% 离线。Offline PDF merge, honestly examined.',
    type: 'article',
    url: `${SITE_URL}/blog/offline-pdf-merge-limits`,
    siteName: 'PDFMergeNext',
    publishedTime: '2026-08-08T00:00:00.000Z',
    images: [{ url: `${SITE_URL}/og`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '100% 离线PDF合并：理论可行性的边界 · PDFMergeNext',
    description:
      '离线PDF合并到底能走多远？浏览器本地处理的理论边界、实际瓶颈（内存/性能/加密 PDF/扫描件），以及哪些场景确实做不到 100% 离线。Offline PDF merge, honestly examined.',
    images: [`${SITE_URL}/og`],
  },
};

const FAQ = [
  {
    q: '100% 离线合并PDF真的能做到吗？',
    a: '能，但要看"离线"的定义。纯本地处理（文件不离开设备、不联网）对普通 PDF 完全可行，PDFMergeNext 就是这么做的。真正的边界在输入：需要联网才能获取的内容（网页转 PDF、云端文件）做不到 100% 离线。',
  },
  {
    q: '离线合并有文件大小限制吗？',
    a: '主要限制是设备内存而非软件。普通电脑上 200MB 以内的文件通常流畅；超大文件建议分批合并。没有在线工具常见的人为上限，但也别期待 1GB 文件在低配机器上秒开。',
  },
  {
    q: '加密 PDF 能离线合并吗？',
    a: '有密码的 PDF 需要先输入密码解密。离线工具会在本机完成解密与合并，但前提是你持有密码。没有密码的加密文件，任何工具（在线或离线）都无能为力。',
  },
  {
    q: '离线合并和在线合并哪个更快？',
    a: '小文件差别不大；大文件取决于你的设备和网络。离线合并省去了上传下载两次传输，但处理速度受本地 CPU 限制。综合来看，离线合并在隐私和传输时间上占优。',
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
            name: '100% 离线PDF合并：理论可行性的边界 / 100% Offline PDF Merge: Limits',
            item: `${SITE_URL}/blog/offline-pdf-merge-limits`,
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
        headline: '100% 离线PDF合并：理论可行性的边界 / 100% Offline PDF Merge: Limits',
        description: '浏览器本地处理 PDF 能走多远？内存、性能、加密、扫描件——离线合并的真实边界与做不到的场景。',
        author: { '@type': 'Person', name: 'PDFMergeNext', url: 'https://pdfmergenext.shop', '@id': 'https://pdfmergenext.shop/#organization' },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-08-08',
        dateModified: '2026-08-08',
        image: `${SITE_URL}/og`,
        url: `${SITE_URL}/blog/offline-pdf-merge-limits`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/offline-pdf-merge-limits` },
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
        <span>100% 离线PDF合并：边界</span>
      </nav>

      <h1 className="text-3xl font-bold leading-tight">
        100% 离线PDF合并：理论可行性的边界 / 100% Offline PDF Merge: Limits
      </h1>
      <p className="mt-2 text-sm text-fg-muted">
        更新于 2026-08-08 · 阅读约 7 分钟 / 7 min read
      </p>

      <div className="my-6 rounded-lg bg-subtle p-4 text-sm leading-relaxed">
        <strong className="block mb-1">快速结论 / TL;DR</strong>
        "100% 离线合并"对普通 PDF 完全可行——文件不联网、不离开设备，PDFMergeNext 每天就是这么跑的。
        但"离线"有真实边界：需要联网获取的内容（网页转 PDF、云端文件）、加密 PDF、超大文件，
        以及扫描件这类需要 OCR 的场景。这篇把能做的和做不到的分开讲清楚。
      </div>

      <nav className="mb-8 rounded-lg border border-line p-4 text-sm">
        <strong className="block mb-2">目录 / Contents</strong>
        <ul className="list-inside space-y-1">
          <li><a href="#define" className="text-primary hover:underline">1. 先定义"100% 离线"：两种含义</a></li>
          <li><a href="#can" className="text-primary hover:underline">2. 离线合并能做到什么</a></li>
          <li><a href="#limit" className="text-primary hover:underline">3. 真实瓶颈：内存、性能、格式</a></li>
          <li><a href="#cannot" className="text-primary hover:underline">4. 哪些场景确实做不到 100% 离线</a></li>
          <li><a href="#compare" className="text-primary hover:underline">5. 离线 vs 在线：一张表看清</a></li>
          <li><a href="#faq" className="text-primary hover:underline">6. 常见问题 / FAQ</a></li>
        </ul>
      </nav>

      <h2 id="define" className="text-2xl font-semibold mt-10">1. 先定义"100% 离线"：两种含义</h2>
      <p className="mt-3">
        讨论离线PDF合并之前，得先把"离线"这个词拆开，因为两种含义差别很大。
      </p>
      <ul className="mt-3 space-y-2">
        <li><strong>含义 A：处理不联网</strong>——PDF 的读取、合并、写出全部在本机完成，文件不离开设备，没有任何网络请求。这是 PDFMergeNext 的默认形态。</li>
        <li><strong>含义 B：使用不联网</strong>——从打开工具到完成合并，整个过程完全断网也能跑。对浏览器工具来说，这意味着工具本身（页面、脚本）也要本地化。</li>
      </ul>
      <p className="mt-2">
        大多数人讨论"离线合并"时其实指的是含义 A：文件不上传、不经过服务器。含义 B 更严格，
        但用起来也更麻烦（需要本地安装版或 PWA）。下面按含义 A 展开——这也是隐私场景下最有价值的一种。
      </p>

      <h2 id="can" className="text-2xl font-semibold mt-10">2. 离线合并能做到什么</h2>
      <p className="mt-3">
        现代浏览器已经能完整处理 PDF 的合并类操作，且性能足够日常使用。能做到的包括：
      </p>
      <ul className="mt-3 space-y-2">
        <li><strong>合并多个 PDF</strong>——把若干文件按顺序拼成一个，支持拖拽排序</li>
        <li><strong>挑页合并</strong>——用 "1-3,5" 语法只取指定页（详见<a href="/blog/how-to-merge-pdf-without-uploading" className="text-primary hover:underline">不上传合并指南</a>）</li>
        <li><strong>保留书签与元数据</strong>——大多数结构化 PDF 的目录结构可以保留</li>
        <li><strong>大文件处理</strong>——得益于 WebAssembly，几百 MB 的文件在设备内存里处理仍然流畅</li>
      </ul>
      <p className="mt-2">
        这些能力的共同点是：PDF 文件本身是完整的、本地的、无需外部数据即可解析的。
      </p>

      <h2 id="limit" className="text-2xl font-semibold mt-10">3. 真实瓶颈：内存、性能、格式</h2>
      <p className="mt-3">
        离线合并不是没有限制，只是限制的性质和在线工具不同。在线工具限制你的是"免费版 50MB"这种人为规则；
        离线工具限制你的是物理现实。
      </p>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-subtle border-b border-line">
              <th className="p-3 text-left font-semibold">瓶颈</th>
              <th className="p-3 text-left font-semibold">表现</th>
              <th className="p-3 text-left font-semibold">应对</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-line"><td className="p-3 font-medium">内存</td><td className="p-3">超大文件（500MB+）在低配机器上可能卡顿或失败</td><td className="p-3">分批合并，或关掉其他标签页</td></tr>
            <tr className="border-b border-line"><td className="p-3 font-medium">CPU</td><td className="p-3">合并本身很快，但渲染预览大文件时吃 CPU</td><td className="p-3">非必要不预览，直接合并</td></tr>
            <tr className="border-b border-line"><td className="p-3 font-medium">格式兼容</td><td className="p-3">极老旧或损坏的 PDF 可能解析异常</td><td className="p-3">用其他工具先修复/重新导出</td></tr>
            <tr className="border-b border-line"><td className="p-3 font-medium">加密文件</td><td className="p-3">有密码的 PDF 需先输入密码解密</td><td className="p-3">本机解密，前提是你持有密码</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="cannot" className="text-2xl font-semibold mt-10">4. 哪些场景确实做不到 100% 离线</h2>
      <p className="mt-3">
        诚实地说，有几种情况"100% 离线"只是营销话术，因为输入本身就依赖外部：
      </p>
      <ul className="mt-3 space-y-2">
        <li><strong>网页转 PDF</strong>——需要联网抓取网页内容，离线无从谈起</li>
        <li><strong>云端文件</strong>——存在 Google Drive / Dropbox 里的文件，得先下载（下载本身联网）</li>
        <li><strong>扫描件 OCR</strong>——扫描版 PDF 的文字识别通常需要模型，纯本地 OCR 模型体积大、加载慢，多数工具走云端</li>
        <li><strong>格式转换（如 PDF→Word）</strong>——复杂布局的重排质量依赖外部解析服务，本地版效果明显打折</li>
      </ul>
      <p className="mt-2">
        所以更准确的说法是：<strong>本地文件 + 合并类操作 = 100% 离线</strong>；
        需要联网获取内容或深度 AI 处理的场景，离线做不到。买工具前先想清楚你的需求落在哪一边。
      </p>

      <h2 id="compare" className="text-2xl font-semibold mt-10">5. 离线 vs 在线：一张表看清</h2>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-subtle border-b border-line">
              <th className="p-3 text-left font-semibold">维度</th>
              <th className="p-3 text-left font-semibold">离线合并（本地）</th>
              <th className="p-3 text-left font-semibold">在线工具</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-line"><td className="p-3 font-medium">文件是否离开设备</td><td className="p-3">否</td><td className="p-3">是（上传服务器）</td></tr>
            <tr className="border-b border-line"><td className="p-3 font-medium">是否联网</td><td className="p-3">处理过程不需要</td><td className="p-3">必须</td></tr>
            <tr className="border-b border-line"><td className="p-3 font-medium">人为大小限制</td><td className="p-3">无（受设备内存限制）</td><td className="p-3">免费版常见 50-200MB</td></tr>
            <tr className="border-b border-line"><td className="p-3 font-medium">OCR / 网页转 PDF</td><td className="p-3">基本做不到</td><td className="p-3">常见功能</td></tr>
            <tr className="border-b border-line"><td className="p-3 font-medium">隐私风险</td><td className="p-3">低（数据不出设备）</td><td className="p-3">取决于平台策略</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="faq" className="text-2xl font-semibold mt-10">6. 常见问题 / FAQ</h2>
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

      <section className="mt-12">
        <h2 className="text-title font-semibold text-fg">相关阅读 / Related</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Link
            href="/blog/browser-pdf-merge-privacy"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">浏览器合并PDF：WebAssembly 时代的隐私革命</p>
            <p className="mt-1 text-xs text-fg-secondary">Browser PDF Merge: Privacy Revolution</p>
          </Link>
          <Link
            href="/blog/how-zero-upload-pdf-tools-work"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">零上传PDF工具：工作原理全解析</p>
            <p className="mt-1 text-xs text-fg-secondary">How Zero-Upload PDF Tools Work</p>
          </Link>
        </div>
      </section>

      <div className="mt-10 rounded-lg bg-primary/5 p-6 text-center">
        <p className="text-lg font-semibold">👉 试试 PDFMergeNext</p>
        <p className="mt-1 text-sm text-fg-muted">
          浏览器本地合并，零上传、无水印、无限制。合并任意数量 PDF，免费。
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
