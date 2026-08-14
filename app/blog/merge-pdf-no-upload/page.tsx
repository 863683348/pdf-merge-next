import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';

export const metadata: Metadata = {
  title: '合并PDF不上传：安全免费的本地离线解决方案 | PDFMergeNext',
  description:
    '合并不上传的 3 种方案对比（浏览器零上传 / 桌面软件 / 在线服务），附隐私合规分析与 PDFMergeNext 完整使用教程。Merge PDF without uploading — 3 solutions compared.',
  keywords: [
    '合并PDF 不上传',
    '离线合并PDF',
    '免费合并PDF',
    '本地合并PDF',
    'PDF合并 免上传',
    '合并PDF 无水印',
    '合并PDF 隐私',
    '不上传合并PDF',
    '浏览器合并PDF',
    'merge PDF without uploading',
  ],
  alternates: {
    canonical: '/blog/merge-pdf-no-upload',
    languages: {
      'zh-CN': '/blog/merge-pdf-no-upload',
      'en-US': '/blog/merge-pdf-no-upload',
      'x-default': '/blog/merge-pdf-no-upload',
    },
  },
  openGraph: {
    title: '合并PDF不上传：安全免费的本地离线解决方案 · PDFMergeNext',
    description:
      '合并不上传的 3 种方案对比（浏览器零上传 / 桌面软件 / 在线服务），附隐私合规分析与 PDFMergeNext 完整使用教程。Merge PDF without uploading — 3 solutions compared.',
    type: 'article',
    url: `${SITE_URL}/blog/merge-pdf-no-upload`,
    siteName: 'PDFMergeNext',
    publishedTime: '2026-07-30T00:00:00.000Z',
    images: [{ url: `${SITE_URL}/og`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '合并PDF不上传：安全免费的本地离线解决方案 · PDFMergeNext',
    description:
      '合并不上传的 3 种方案对比（浏览器零上传 / 桌面软件 / 在线服务），附隐私合规分析与 PDFMergeNext 完整使用教程。Merge PDF without uploading — 3 solutions compared.',
    images: [`${SITE_URL}/og`],
  },
};

// FAQ 数据
const FAQ = [
  {
    q: 'PDFMergeNext 真的不上传文件吗？',
    a: '是的。PDFMergeNext 使用 WebAssembly + pdf-lib 在浏览器本地执行所有 PDF 处理。你可以打开 DevTools（F12）→ Network 标签验证——拖入 PDF 后看不到任何文件上传请求。所有数据停留在你的设备内存中，处理完成后自动释放。',
  },
  {
    q: '不上传合并PDF 和在线合并有什么区别？',
    a: '在线合并（如 Smallpdf、iLovePDF）需要把文件上传到对方的服务器，处理完后再下载。即使他们承诺 1-2 小时后删除，你的文件仍然经过第三方基础设施。不上传合并（如 PDFMergeNext）全程在浏览器本地完成，文件永不离开你的设备——这是本质上的架构差异。',
  },
  {
    q: 'PDFMergeNext 免费版有什么限制？',
    a: '目前完全免费：无每日操作次数限制、无文件大小限制、无文件数量限制、无水印、无需注册。免费版即可满足绝大多数日常需求。',
  },
  {
    q: '不上传合并 适用于哪些场景？',
    a: '适用于所有对隐私有要求的场景：法律合同合并（律师-客户保密特权）、财务报表汇总、医疗记录归档（HIPAA 合规）、学术论文整合（防抄袭争议）、个人证件扫描件整理（个保法合规）。',
  },
  {
    q: '合并大文件（超过 100MB）会卡吗？',
    a: 'PDFMergeNext 合并大文件的性能取决于你的设备内存（RAM）。在普通电脑上合并总大小 200MB 以内的 PDF 通常流畅。如果遇到大文件卡顿，可以分批合并或使用 PDFsam Basic（开源桌面应用）处理超大文件。',
  },
  {
    q: 'PDFMergeNext 支持按页挑选合并吗？',
    a: '支持。你可以使用 1-3,5 语法从每个文件中指定要合并的页码范围。例如输入 1-3,5 表示取第 1、2、3 和 5 页（跳过第 4 页）。这是完全免费的功能，而竞品（Smallpdf、iLovePDF）需要付费订阅才能实现。',
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
            name: '合并PDF不上传 / Merge PDF Without Uploading',
            item: `${SITE_URL}/blog/merge-pdf-no-upload`,
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
        headline: '合并PDF不上传：安全免费的本地离线解决方案 / Merge PDF Without Uploading',
        description:
          '不上传合并PDF的3种方案对比与完整教程。支持零上传、挑页合并、无水印，符合GDPR/HIPAA/个保法合规要求。',
        author: { '@type': 'Person', name: 'PDFMergeNext', url: 'https://pdfmergenext.shop', '@id': 'https://pdfmergenext.shop/#organization' },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-07-30',
        dateModified: '2026-07-30',
        image: `${SITE_URL}/og`,
        url: `${SITE_URL}/blog/merge-pdf-no-upload`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/merge-pdf-no-upload` },
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
        <span>合并PDF不上传 / Merge PDF Without Uploading</span>
      </nav>

      {/* Title */}
      <h1 className="text-3xl font-bold leading-tight">
        合并PDF不上传：安全免费的本地离线解决方案 / Merge PDF Without Uploading
      </h1>
      <p className="mt-2 text-sm text-fg-muted">
        更新于 2026-07-30 · 阅读约 6 分钟 / 6 min read
      </p>

      {/* TL;DR */}
      <div className="my-6 rounded-lg bg-subtle p-4 text-sm leading-relaxed">
        <strong className="block mb-1">📋 快速结论 / TL;DR</strong>
        合并不上传 PDF 的核心价值在于<strong>隐私安全</strong>——文件不经过第三方服务器，杜绝数据泄露风险。
        3 种方案中，<strong>浏览器零上传工具</strong>（如 PDFMergeNext）兼顾便利与安全，无需安装、免费无水印、
        支持挑页合并。如果你处理的是法律合同、医疗记录或财务数据，不上传合并是唯一合规的选择。
      </div>

      {/* TOC */}
      <nav className="mb-8 rounded-lg border border-line p-4 text-sm">
        <strong className="block mb-2">📑 目录 / Contents</strong>
        <ul className="list-inside space-y-1">
          <li><a href="#what" className="text-primary hover:underline">1. 什么是"不上传合并PDF"</a></li>
          <li><a href="#why" className="text-primary hover:underline">2. 为什么需要不上传合并</a></li>
          <li><a href="#compare" className="text-primary hover:underline">3. 3 种方案对比</a></li>
          <li><a href="#howto" className="text-primary hover:underline">4. 使用 PDFMergeNext 合并 PDF（步骤）</a></li>
          <li><a href="#compliance" className="text-primary hover:underline">5. 隐私合规说明</a></li>
          <li><a href="#faq" className="text-primary hover:underline">6. 常见问题</a></li>
        </ul>
      </nav>

      {/* Section 1 */}
      <h2 id="what" className="text-2xl font-semibold mt-10">
        1. 什么是"不上传合并PDF"
      </h2>
      <p className="mt-3">
        "不上传合并PDF"（Merge PDF Without Uploading）指的是<strong>在本地设备完成 PDF 合并操作</strong>，
        不需要将文件发送到任何远程服务器。传统在线 PDF 工具（如 Smallpdf、iLovePDF、Adobe Acrobat Online）
        都需要将你的文件上传到他们的服务器进行处理。而不上传的工具（如 PDFMergeNext）使用浏览器本地技术
        （WebAssembly + pdf-lib）直接在设备内存中完成合并。
      </p>
      <p className="mt-2">
        通俗地说：传统工具是"把文件寄出去，别人帮你处理完再寄回来"；不上传工具是"你自己在家里处理，门都不出"。
        后者意味着你的文件<strong>永远不会离开你的控制</strong>。
      </p>

      {/* Section 2 */}
      <h2 id="why" className="text-2xl font-semibold mt-10">
        2. 为什么需要不上传合并PDF
      </h2>
      <p className="mt-3">
        如果你的 PDF 文件包含以下内容，不上传合并就不是"可选项"，而是"必选项"：
      </p>
      <ul className="mt-2 space-y-2">
        <li><strong>🔒 法律合同</strong> — 律师-客户保密特权要求文件不可经第三方传输</li>
        <li><strong>🏥 医疗记录</strong> — HIPAA（美国健康保险可携性和责任法案）限制患者数据出境的途径</li>
        <li><strong>💰 财务数据</strong> — 银行账单、税务申报表、审计文件属于高度敏感信息</li>
        <li><strong>📄 商业机密</strong> — 产品设计稿、商业计划书、源代码——上传即可能构成泄露</li>
        <li><strong>🆔 个人证件</strong> — 身份证、护照、签证扫描件——个保法要求最小化数据暴露</li>
      </ul>
      <p className="mt-3">
        即使在线工具承诺"处理完成后 1-2 小时删除文件"，你的数据仍会经过第三方基础设施，
        存在法律和技术上的泄露风险。不上传合并从架构层面消除了这些风险。
      </p>

      {/* Section 3 */}
      <h2 id="compare" className="text-2xl font-semibold mt-10">
        3. 不上传合并 PDF：3 种方案对比
      </h2>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-subtle border-b border-line">
              <th className="p-3 text-left font-semibold">对比维度</th>
              <th className="p-3 text-left font-semibold">浏览器零上传工具</th>
              <th className="p-3 text-left font-semibold">开源桌面软件</th>
              <th className="p-3 text-left font-semibold">macOS 预览 / 系统工具</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-line">
              <td className="p-3 font-medium">代表产品</td>
              <td className="p-3">PDFMergeNext</td>
              <td className="p-3">PDFsam Basic</td>
              <td className="p-3">Preview（Mac）</td>
            </tr>
            <tr className="border-b border-line">
              <td className="p-3 font-medium">安装</td>
              <td className="p-3 text-green-600 dark:text-green-400">✅ 无需安装</td>
              <td className="p-3">📥 需下载安装</td>
              <td className="p-3">✅ 系统自带</td>
            </tr>
            <tr className="border-b border-line">
              <td className="p-3 font-medium">隐私级别</td>
              <td className="p-3 text-green-600 dark:text-green-400">✅ 本地处理</td>
              <td className="p-3 text-green-600 dark:text-green-400">✅ 完全离线</td>
              <td className="p-3 text-green-600 dark:text-green-400">✅ 完全离线</td>
            </tr>
            <tr className="border-b border-line">
              <td className="p-3 font-medium">跨平台</td>
              <td className="p-3 text-green-600 dark:text-green-400">✅ 任何浏览器</td>
              <td className="p-3">✅ Windows/Mac/Linux</td>
              <td className="p-3">❌ 仅 Mac</td>
            </tr>
            <tr className="border-b border-line">
              <td className="p-3 font-medium">挑页合并</td>
              <td className="p-3 text-green-600 dark:text-green-400">✅ 免费（1-3,5 语法）</td>
              <td className="p-3">✅ 支持</td>
              <td className="p-3">⚠️ 有限</td>
            </tr>
            <tr className="border-b border-line">
              <td className="p-3 font-medium">移动端</td>
              <td className="p-3 text-green-600 dark:text-green-400">✅ 手机浏览器可用</td>
              <td className="p-3">❌ 无</td>
              <td className="p-3">❌ 无</td>
            </tr>
            <tr className="border-b border-line">
              <td className="p-3 font-medium">价格</td>
              <td className="p-3 text-green-600 dark:text-green-400">✅ 免费</td>
              <td className="p-3 text-green-600 dark:text-green-400">✅ 开源免费</td>
              <td className="p-3 text-green-600 dark:text-green-400">✅ 系统内置</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Section 4 */}
      <h2 id="howto" className="text-2xl font-semibold mt-10">
        4. 使用 PDFMergeNext 合并 PDF（完整步骤）
      </h2>
      <p className="mt-3">
        以下是如何使用 PDFMergeNext 实现不上传合并 PDF 的完整操作步骤：
      </p>
      <ol className="mt-3 space-y-3 list-decimal list-inside">
        <li>
          <strong>打开工具</strong>：访问 <a href="/" className="text-primary hover:underline">pdfmergenext.shop</a>，
          无需注册或登录。
        </li>
        <li>
          <strong>添加文件</strong>：点击选择按钮或将 PDF 文件拖拽到虚线区域，可一次选择多个文件。
          文件处理在浏览器本地进行，不会上传到任何服务器。
        </li>
        <li>
          <strong>调整顺序</strong>：拖动文件右侧的手柄上下移动，调整合并顺序。顺序确定后，"先加入、先合并"。
        </li>
        <li>
          <strong>挑页合并（可选）</strong>：展开每个文件，在输入框中填入页码范围（如 <code className="mx-1 rounded bg-subtle px-1.5 py-0.5 font-mono text-xs">1-3,5</code>
          表示只取第 1、2、3、5 页），适用于从大文件中提取特定页面。
        </li>
        <li>
          <strong>合并</strong>：点击"合并"按钮，处理完成后自动下载合并后的 PDF。
          你可以用 DevTools（F12）→ Network 标签验证全程无网络请求。
        </li>
        <li>
          <strong>验证零上传</strong>（高级）：打开 Chrome DevTools → Network 标签 → 拖入文件，
          观察是否出现任何文件上传请求。PDFMergeNext 的处理结果是<strong>零网络请求</strong>。
          完整的分步验证教程见<a href="/blog/how-to-merge-pdf-without-uploading" className="text-primary hover:underline">如何不上传合并 PDF：可验证的完整指南</a>。
        </li>
      </ol>

      {/* Section 5 */}
      <h2 id="compliance" className="text-2xl font-semibold mt-10">
        5. 隐私合规说明
      </h2>
      <p className="mt-3">
        PDFMergeNext 的零上传架构天然符合多项数据保护法规的要求：
      </p>
      <ul className="mt-2 space-y-2">
        <li><strong>GDPR（欧盟通用数据保护条例）</strong> — 数据传输最小化原则：不上传即无数据传输</li>
        <li><strong>HIPAA（美国健康保险可携性和责任法案）</strong> — 保护电子受保护健康信息（ePHI）：文件不离开设备</li>
        <li><strong>个人信息保护法（中国）</strong> — 个人信息处理最小必要原则：本地处理无需收集个人信息</li>
        <li><strong>SOC 2</strong> — 虽然 PDFMergeNext 本身无需 SOC 2 审计（无服务器），零上传架构本质上消除了与数据处理相关的风险点</li>
      </ul>
      <p className="mt-2 text-sm text-fg-muted">
        注意：PDFMergeNext 当前为纯客户端工具，不使用任何第三方分析服务追踪你的文件内容。
        网站统计仅收集页面浏览数据（如 GA4 和 Clarity），不涉及文件内容。
      </p>

      {/* Section 6: FAQ */}
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

      {/* Related Articles */}
      <section className="mt-12">
        <h2 className="text-title font-semibold text-fg">相关阅读 / Related</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Link
            href="/blog/why-local-offline-pdf-merge"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">为什么选择本地离线 PDF 合并</p>
            <p className="mt-1 text-xs text-fg-secondary">隐私优先才是正解 / Privacy-First PDF Merge</p>
          </Link>
          <Link
            href="/blog/how-to-merge-pdf-without-uploading"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">如何不上传合并 PDF</p>
            <p className="mt-1 text-xs text-fg-secondary">How to Merge PDF Without Uploading</p>
          </Link>
          <Link
            href="/blog/pdfmergenext-vs-smallpdf-vs-ilovepdf"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">PDFMergeNext vs Smallpdf vs iLovePDF</p>
            <p className="mt-1 text-xs text-fg-secondary">2026 隐私与限制全对比</p>
          </Link>
          <Link
            href="/blog/why-local-pdf-merge-beats-online"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">为什么本地PDF合并比在线更安全</p>
            <p className="mt-1 text-xs text-fg-secondary">Why Local PDF Merge Beats Online</p>
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
