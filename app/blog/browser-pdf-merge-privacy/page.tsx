import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';

export const metadata: Metadata = {
  title: '浏览器合并PDF：WebAssembly 时代的隐私革命 | PDFMergeNext',
  description:
    '浏览器合并PDF 为什么是隐私革命：文件不离开设备、没有服务器日志、没有传输链路。WebAssembly + pdf-lib 让本地合并足够流畅。Browser PDF merge as a privacy revolution.',
  keywords: [
    '浏览器合并PDF',
    '浏览器本地合并PDF',
    'WebAssembly 隐私',
    '本地PDF工具',
    'browser pdf merge',
    'merge pdf in browser',
    'privacy pdf tools',
    'local pdf processing',
  ],
  alternates: {
    canonical: '/blog/browser-pdf-merge-privacy',
    languages: {
      'zh-CN': '/blog/browser-pdf-merge-privacy',
      'en-US': '/blog/browser-pdf-merge-privacy',
      'x-default': '/blog/browser-pdf-merge-privacy',
    },
  },
  openGraph: {
    title: '浏览器合并PDF：WebAssembly 时代的隐私革命 · PDFMergeNext',
    description:
      '浏览器合并PDF 为什么是隐私革命：文件不离开设备、没有服务器日志、没有传输链路。WebAssembly + pdf-lib 让本地合并足够流畅。Browser PDF merge as a privacy revolution.',
    type: 'article',
    url: `${SITE_URL}/blog/browser-pdf-merge-privacy`,
    siteName: 'PDFMergeNext',
    publishedTime: '2026-08-07T00:00:00.000Z',
    images: [{ url: `${SITE_URL}/og`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '浏览器合并PDF：WebAssembly 时代的隐私革命 · PDFMergeNext',
    description:
      '浏览器合并PDF 为什么是隐私革命：文件不离开设备、没有服务器日志、没有传输链路。WebAssembly + pdf-lib 让本地合并足够流畅。Browser PDF merge as a privacy revolution.',
    images: [`${SITE_URL}/og`],
  },
};

const FAQ = [
  {
    q: '浏览器合并PDF 真的安全吗？',
    a: '安全且更安全。文件从拖入到下载结束始终停留在你的设备内存里，没有上传请求就没有服务器日志、没有传输链路、没有第三方访问。用 DevTools → Network 标签可以亲眼验证零网络请求。',
  },
  {
    q: '浏览器合并和"在线合并"有什么区别？',
    a: '在线工具（Smallpdf、iLovePDF）把文件上传到服务器处理；浏览器合并（如 PDFMergeNext）全部在本地完成。区别不在功能，而在文件经不经过第三方基础设施——这正是隐私革命的核心。',
  },
  {
    q: 'WebAssembly 为什么对 PDF 合并重要？',
    a: 'PDF 合并需要解析二进制格式并做大量计算，纯 JavaScript 在大文件下性能不足。WebAssembly 接近原生速度运行，让几百 MB 的 PDF 也能在浏览器本地流畅处理。',
  },
  {
    q: '浏览器合并PDF 有文件大小限制吗？',
    a: '主要限制是设备内存而非平台：普通电脑上 200MB 以内的文件通常流畅，超大文件建议分批合并。没有在线工具常见的"免费版 50MB 上限"式的人为限制。',
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
            name: '浏览器合并PDF：WebAssembly 时代的隐私革命 / Browser PDF Merge: Privacy Revolution',
            item: `${SITE_URL}/blog/browser-pdf-merge-privacy`,
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
        headline: '浏览器合并PDF：WebAssembly 时代的隐私革命 / Browser PDF Merge: Privacy Revolution',
        description: '为什么在浏览器里合并 PDF 是一场隐私革命：本地处理、零上传、无服务器日志，以及 WebAssembly 如何让这一切流畅可行。',
        author: { '@type': 'Person', name: 'PDFMergeNext', url: 'https://pdfmergenext.shop', '@id': 'https://pdfmergenext.shop/#organization' },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-08-07',
        dateModified: '2026-08-07',
        image: `${SITE_URL}/og`,
        url: `${SITE_URL}/blog/browser-pdf-merge-privacy`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/browser-pdf-merge-privacy` },
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
        <span>浏览器合并PDF：隐私革命</span>
      </nav>

      <h1 className="text-3xl font-bold leading-tight">
        浏览器合并PDF：WebAssembly 时代的隐私革命 / Browser PDF Merge: Privacy Revolution
      </h1>
      <p className="mt-2 text-sm text-fg-muted">
        更新于 2026-08-07 · 阅读约 7 分钟 / 7 min read
      </p>

      <div className="my-6 rounded-lg bg-subtle p-4 text-sm leading-relaxed">
        <strong className="block mb-1">快速结论 / TL;DR</strong>
        "浏览器合并PDF"把 PDF 处理从服务器搬回你的设备：文件不离开浏览器，就没有上传、没有日志、没有第三方。
        WebAssembly 让这种架构在大文件下也足够流畅——这不是功能变化，是隐私权的位置变化。
      </div>

      <nav className="mb-8 rounded-lg border border-line p-4 text-sm">
        <strong className="block mb-2">目录 / Contents</strong>
        <ul className="list-inside space-y-1">
          <li><a href="#what" className="text-primary hover:underline">1. 什么是"浏览器合并PDF"</a></li>
          <li><a href="#shift" className="text-primary hover:underline">2. 隐私的重心从服务器移回了你的设备</a></li>
          <li><a href="#wasm" className="text-primary hover:underline">3. WebAssembly：让本地合并"够快"的那块拼图</a></li>
          <li><a href="#benefit" className="text-primary hover:underline">4. 谁最该用浏览器合并</a></li>
          <li><a href="#compare" className="text-primary hover:underline">5. 浏览器合并 vs 传统在线工具</a></li>
          <li><a href="#faq" className="text-primary hover:underline">6. 常见问题 / FAQ</a></li>
        </ul>
      </nav>

      <h2 id="what" className="text-2xl font-semibold mt-10">1. 什么是"浏览器合并PDF"</h2>
      <p className="mt-3">
        浏览器合并PDF，指的是 PDF 的读取、合并、写出全部在浏览器本地完成，文件自始至终不离开你的设备。
        听起来像个小技术细节，但它解决的是在线 PDF 工具一个说大不大、说小不小的问题：你的文件要先上传到别人的服务器。
      </p>
      <p className="mt-2">
        过去二十年，PDF 工具默认走"上传 → 处理 → 下载"的路线，用户没有别的选择，只能接受文件经过第三方服务器这个事实。
        浏览器合并把这层默认值掀掉了：处理能力现在就放在你的浏览器里。
      </p>

      <h2 id="shift" className="text-2xl font-semibold mt-10">2. 隐私的重心从服务器移回了你的设备</h2>
      <p className="mt-3">
        在线工具在传输和存储环节会产生一串你管不着的东西：服务器日志、传输链路、第三方访问权限、数据保留策略。
        对普通文件无所谓，但换成合同、病历、财务报表、身份证复印件，这些"管不着"就变得很扎眼。
      </p>
      <ul className="mt-3 space-y-2">
        <li><strong>没有上传请求</strong>——自然没有服务器日志，没有"谁在何时传了什么"的记录</li>
        <li><strong>没有传输链路</strong>——不经过第三方基础设施，也就不存在传输环节被截获的问题</li>
        <li><strong>没有数据保留</strong>——处理完内存自动释放，没有"你的文件在服务器上存了 30 天"这种条款</li>
        <li><strong>可验证</strong>——打开 DevTools 的 Network 标签就能亲眼确认零网络请求</li>
      </ul>
      <p className="mt-2">
        这就是"隐私革命"的含义：把隐私风险的决策权从平台手里拿回来，交还给文件的主人。
      </p>

      <h2 id="wasm" className="text-2xl font-semibold mt-10">3. WebAssembly：让本地合并"够快"的那块拼图</h2>
      <p className="mt-3">
        浏览器本地处理 PDF 的想法并不新鲜，早年卡在性能上：PDF 解析和页面重组是计算密集操作，纯 JavaScript 处理大文件会明显卡顿。
        <strong>WebAssembly（Wasm）</strong>改变了这个局面——它是浏览器里的高性能二进制执行环境，运行速度接近原生。
      </p>
      <p className="mt-2">
        具体到实现，PDFMergeNext 用 <strong>pdf-lib</strong>（一个纯 JavaScript 的 PDF 操作库，可直接在浏览器运行）配合 Wasm 优化，
        在设备内存里完成页面的读取、合并、写入，最后用浏览器原生下载能力保存结果。
        用户感知到的结果是：几百 MB 的文件在本地处理依然流畅，且全程没有一次网络请求。
      </p>

      <h2 id="benefit" className="text-2xl font-semibold mt-10">4. 谁最该用浏览器合并</h2>
      <ul className="mt-3 space-y-2">
        <li><strong>法律与合规人员</strong>——合同、NDA、尽调材料，属于"不应该出现在别人服务器上"的文件</li>
        <li><strong>医疗与财务从业者</strong>——病历、报销单、银行对账单，监管要求数据最小化</li>
        <li><strong>人力资源</strong>——简历、身份证件、背调材料，招聘流程里的敏感文件</li>
        <li><strong>任何对"文件被上传"感到不舒服的人</strong>——不需要理由，感觉就够</li>
      </ul>

      <h2 id="compare" className="text-2xl font-semibold mt-10">5. 浏览器合并 vs 传统在线工具</h2>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-subtle border-b border-line">
              <th className="p-3 text-left font-semibold">维度</th>
              <th className="p-3 text-left font-semibold">浏览器合并（本地）</th>
              <th className="p-3 text-left font-semibold">传统在线工具</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-line"><td className="p-3 font-medium">文件位置</td><td className="p-3">始终在你的设备</td><td className="p-3">上传到第三方服务器</td></tr>
            <tr className="border-b border-line"><td className="p-3 font-medium">网络请求</td><td className="p-3">处理过程零请求（可验证）</td><td className="p-3">上传 + 下载两次传输</td></tr>
            <tr className="border-b border-line"><td className="p-3 font-medium">服务器日志</td><td className="p-3">不存在</td><td className="p-3">存在，且用户无法控制</td></tr>
            <tr className="border-b border-line"><td className="p-3 font-medium">数据保留</td><td className="p-3">内存即用即释放</td><td className="p-3">取决于平台保留策略</td></tr>
            <tr className="border-b border-line"><td className="p-3 font-medium">大小限制</td><td className="p-3">取决于设备内存</td><td className="p-3">免费版常见 50-200MB 上限</td></tr>
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
            href="/blog/how-zero-upload-pdf-tools-work"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">零上传PDF工具：工作原理全解析</p>
            <p className="mt-1 text-xs text-fg-secondary">How Zero-Upload PDF Tools Work</p>
          </Link>
          <Link
            href="/blog/how-to-merge-pdf-without-uploading"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">如何不上传合并 PDF</p>
            <p className="mt-1 text-xs text-fg-secondary">可验证的完整指南 / Step-by-Step, Verifiable</p>
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
