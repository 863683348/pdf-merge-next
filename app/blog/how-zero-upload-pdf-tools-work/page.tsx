import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';

export const metadata: Metadata = {
  title: '零上传PDF工具：工作原理全解析 | PDFMergeNext',
  description:
    '零上传PDF工具如何在浏览器本地完成合并？WebAssembly + pdf-lib 架构拆解：本地调试端口、渲染进程注入、零网络请求原理。How zero-upload PDF tools work under the hood.',
  keywords: [
    '零上传PDF',
    '零上传PDF原理',
    'WebAssembly PDF',
    'pdf-lib 浏览器处理',
    '本地PDF工具架构',
    'zero-upload PDF tools',
    'how zero-upload pdf works',
    'browser-based PDF processing',
  ],
  alternates: {
    canonical: '/blog/how-zero-upload-pdf-tools-work',
    languages: {
      'zh-CN': '/blog/how-zero-upload-pdf-tools-work',
      'en-US': '/blog/how-zero-upload-pdf-tools-work',
      'x-default': '/blog/how-zero-upload-pdf-tools-work',
    },
  },
};

const FAQ = [
  {
    q: '零上传PDF工具真的不上传吗？',
    a: '真的。核心原理是浏览器本地计算：工具用 WebAssembly + pdf-lib 在设备内存里完成所有 PDF 处理。用 DevTools（F12）→ Network 标签验证，拖入文件后看不到任何上传请求——这是架构决定的，不是"承诺"。',
  },
  {
    q: 'WebAssembly 在 PDF 工具里起什么作用？',
    a: 'WebAssembly 是浏览器里的高性能二进制执行环境。PDF 合并这类计算密集操作，用 Wasm 接近原生速度，让几百 MB 的大文件也能在浏览器本地流畅处理，而不是依赖服务器。',
  },
  {
    q: '零上传工具和在线工具有什么本质区别？',
    a: '在线工具（Smallpdf、iLovePDF）把文件上传到服务器处理，文件经过第三方基础设施；零上传工具（如 PDFMergeNext）全部在浏览器本地完成，文件永不离开设备——这是架构差异，不是功能差异。',
  },
  {
    q: '浏览器本地处理 PDF 安全吗？',
    a: '安全且更安全：本地处理意味着没有服务器日志、没有传输链路、没有第三方访问。结合"主题只读本地"原则，零上传架构天然符合 GDPR/HIPAA/个保法的数据最小化要求。',
  },
  {
    q: '零上传工具有什么限制吗？',
    a: '主要限制是设备内存：超大文件（数百 MB 级）可能受浏览器内存限制。PDFMergeNext 在普通电脑上处理 200MB 以内的文件通常流畅，超大文件建议分批合并。',
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
            name: '零上传PDF工具：工作原理全解析 / How Zero-Upload PDF Tools Work',
            item: `${SITE_URL}/blog/how-zero-upload-pdf-tools-work`,
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
        headline: '零上传PDF工具：工作原理全解析 / How Zero-Upload PDF Tools Work',
        description: '零上传PDF工具原理拆解：WebAssembly + pdf-lib 浏览器本地架构，零网络请求如何实现。',
        author: { '@type': 'Person', name: 'PDFMergeNext' },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-08-06',
        dateModified: '2026-08-06',
        image: `${SITE_URL}/og`,
        url: `${SITE_URL}/blog/how-zero-upload-pdf-tools-work`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/how-zero-upload-pdf-tools-work` },
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
        <span>零上传PDF工具：工作原理全解析</span>
      </nav>

      <h1 className="text-3xl font-bold leading-tight">
        零上传PDF工具：工作原理全解析 / How Zero-Upload PDF Tools Work
      </h1>
      <p className="mt-2 text-sm text-fg-muted">
        更新于 2026-08-06 · 阅读约 6 分钟 / 6 min read
      </p>

      <div className="my-6 rounded-lg bg-subtle p-4 text-sm leading-relaxed">
        <strong className="block mb-1">快速结论 / TL;DR</strong>
        "零上传"不是营销话术，而是<strong>架构</strong>：工具用 WebAssembly + pdf-lib 在浏览器本地完成 PDF 处理，
        文件永不离开设备。用 DevTools 的 Network 标签即可验证——拖入文件后零网络请求。
      </div>

      <nav className="mb-8 rounded-lg border border-line p-4 text-sm">
        <strong className="block mb-2">目录 / Contents</strong>
        <ul className="list-inside space-y-1">
          <li><a href="#what" className="text-primary hover:underline">1. 什么是"零上传"架构</a></li>
          <li><a href="#wasm" className="text-primary hover:underline">2. WebAssembly：浏览器里的高性能引擎</a></li>
          <li><a href="#pipeline" className="text-primary hover:underline">3. 本地处理流水线</a></li>
          <li><a href="#verify" className="text-primary hover:underline">4. 如何自己验证零上传</a></li>
          <li><a href="#limits" className="text-primary hover:underline">5. 限制与边界</a></li>
          <li><a href="#faq" className="text-primary hover:underline">6. 常见问题 / FAQ</a></li>
        </ul>
      </nav>

      <h2 id="what" className="text-2xl font-semibold mt-10">1. 什么是"零上传"架构</h2>
      <p className="mt-3">
        传统在线 PDF 工具（Smallpdf、iLovePDF、Adobe Acrobat Online）的架构是"客户端-服务器"：
        你把文件<strong>上传</strong>到他们的服务器 → 服务器处理 → 你再<strong>下载</strong>结果。
        文件在传输和存储环节经过第三方基础设施。
      </p>
      <p className="mt-2">
        <strong>零上传工具</strong>（如 PDFMergeNext）采用完全不同的架构：所有 PDF 解析、合并、
        重写都在<strong>浏览器本地</strong>完成。文件从被你拖入的那一刻起，就停留在设备内存里，
        处理完自动释放。没有上传请求，就没有服务器日志、没有传输链路、没有第三方访问。
      </p>

      <h2 id="wasm" className="text-2xl font-semibold mt-10">2. WebAssembly：浏览器里的高性能引擎</h2>
      <p className="mt-3">
        浏览器要本地处理 PDF，需要能高效解析二进制格式并做大量计算。JavaScript 可以做到，但大文件下性能不够。
        <strong>WebAssembly（Wasm）</strong>是浏览器的高性能二进制执行环境：它接近原生速度运行，
        让 PDF 合并这类计算密集操作在本地也足够流畅。
      </p>
      <p className="mt-2">
        具体到实现：<strong>pdf-lib</strong> 是一个纯 JavaScript 的 PDF 操作库，可以直接在浏览器运行，
        无需服务器。工具加载 pdf-lib（配合 Wasm 优化），在设备内存中完成页面的读取、合并、写入，
        最后用浏览器原生的下载能力把新 PDF 保存到本地。
      </p>

      <h2 id="pipeline" className="text-2xl font-semibold mt-10">3. 本地处理流水线</h2>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-subtle border-b border-line">
              <th className="p-3 text-left font-semibold">步骤</th>
              <th className="p-3 text-left font-semibold">发生了什么</th>
              <th className="p-3 text-left font-semibold">是否联网</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-line"><td className="p-3 font-medium">1. 拖入文件</td><td className="p-3">File API 读取本地文件，浏览器放入内存</td><td className="p-3 text-green-600 dark:text-green-400">❌ 无</td></tr>
            <tr className="border-b border-line"><td className="p-3 font-medium">2. 解析 PDF</td><td className="p-3">pdf-lib/Wasm 在本地解析页面结构</td><td className="p-3 text-green-600 dark:text-green-400">❌ 无</td></tr>
            <tr className="border-b border-line"><td className="p-3 font-medium">3. 合并/挑页</td><td className="p-3">按顺序/页码范围在内存中组装新 PDF</td><td className="p-3 text-green-600 dark:text-green-400">❌ 无</td></tr>
            <tr className="border-b border-line"><td className="p-3 font-medium">4. 写出结果</td><td className="p-3">生成新 PDF 字节流</td><td className="p-3 text-green-600 dark:text-green-400">❌ 无</td></tr>
            <tr className="border-b border-line"><td className="p-3 font-medium">5. 下载</td><td className="p-3">浏览器原生下载，保存到本地</td><td className="p-3 text-green-600 dark:text-green-400">❌ 无</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="verify" className="text-2xl font-semibold mt-10">4. 如何自己验证零上传</h2>
      <ol className="mt-3 space-y-3 list-decimal list-inside">
        <li>打开 <a href="/" className="text-primary hover:underline">pdfmergenext.shop</a></li>
        <li>按 F12 打开 DevTools → Network（网络）标签</li>
        <li>把 PDF 拖入页面，观察网络请求列表</li>
        <li>结论：除首次加载工具本身外，处理过程<strong>零网络请求</strong></li>
      </ol>
      <p className="mt-3">
        完整的分步验证教程见<a href="/blog/how-to-merge-pdf-without-uploading" className="text-primary hover:underline">如何不上传合并 PDF：可验证的完整指南</a>。
      </p>

      <h2 id="limits" className="text-2xl font-semibold mt-10">5. 限制与边界</h2>
      <ul className="mt-3 space-y-2">
        <li><strong>设备内存</strong>——本地处理依赖 RAM，超大文件（数百 MB）可能受限；普通电脑 200MB 以内流畅</li>
        <li><strong>工具本身需联网加载</strong>——首次访问需要加载页面和库文件；加载完成后处理过程完全本地</li>
        <li><strong>适合场景</strong>——法律合同、医疗记录、财务数据等隐私敏感文件的合并首选零上传</li>
      </ul>

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
            href="/blog/merge-pdf-no-upload"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">合并PDF不上传：本地离线的安全方案</p>
            <p className="mt-1 text-xs text-fg-secondary">Merge PDF Without Uploading</p>
          </Link>
          <Link
            href="/blog/why-local-offline-pdf-merge"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">为什么选择本地离线 PDF 合并</p>
            <p className="mt-1 text-xs text-fg-secondary">隐私优先才是正解 / Privacy-First PDF Merge</p>
          </Link>
        </div>
      </section>

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
