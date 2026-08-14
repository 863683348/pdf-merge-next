import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';

export const metadata: Metadata = {
  title: 'PDFMergeNext 隐私设计白皮书 | PDFMergeNext',
  description:
    'PDFMergeNext 的隐私设计是怎么落地的：文件为什么不上传、本地处理的技术架构、日志策略与安全边界。Privacy design deep dive, honestly documented.',
  keywords: [
    'PDFMergeNext 隐私',
    'PDF 合并 隐私',
    '本地PDF 处理',
    '文件不上传',
    'PDFMergeNext privacy',
    'local pdf merge privacy',
    'pdf merge privacy design',
    'browser pdf merge secure',
  ],
  alternates: {
    canonical: '/blog/pdfmergenext-privacy-design',
    languages: {
      'zh-CN': '/blog/pdfmergenext-privacy-design',
      'en-US': '/blog/pdfmergenext-privacy-design',
      'x-default': '/blog/pdfmergenext-privacy-design',
    },
  },
  openGraph: {
    title: 'PDFMergeNext 隐私设计白皮书 · PDFMergeNext',
    description:
      'PDFMergeNext 的隐私设计是怎么落地的：文件为什么不上传、本地处理的技术架构、日志策略与安全边界。Privacy design deep dive, honestly documented.',
    type: 'article',
    url: `${SITE_URL}/blog/pdfmergenext-privacy-design`,
    siteName: 'PDFMergeNext',
    publishedTime: '2026-08-09T00:00:00.000Z',
    images: [{ url: `${SITE_URL}/og`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PDFMergeNext 隐私设计白皮书 · PDFMergeNext',
    description:
      'PDFMergeNext 的隐私设计是怎么落地的：文件为什么不上传、本地处理的技术架构、日志策略与安全边界。Privacy design deep dive, honestly documented.',
    images: [`${SITE_URL}/og`],
  },
};

const FAQ = [
  {
    q: 'PDFMergeNext 会把我的文件上传到服务器吗？',
    a: '不会。合并全程在浏览器本地完成，PDF 文件不离开你的设备，也没有任何上传请求。这是架构层面的设计，不是设置选项，所以不存在"默认上传"的隐患。',
  },
  {
    q: '本地处理是怎么实现的？',
    a: '核心是浏览器原生能力：PDF.js 负责解析与渲染，页面的合并、排序、删除都在内存里完成，最后通过 Blob 生成新文件。整个过程不依赖任何后端接口。',
  },
  {
    q: '你们会记录合并历史或收集使用数据吗？',
    a: '不记录文件内容，也不保存合并历史。站点只保留基础的访问统计（匿名、不含文件信息）用于了解工具使用情况，PDF 内容零存储。',
  },
  {
    q: '本地处理在安全上有什么边界？',
    a: '两条诚实说明：一是加密 PDF 需要你输入密码，解密在本机完成，但密码泄露风险由你持有密码的情况决定；二是浏览器扩展或恶意插件理论上可以读取页面内容，所以建议在干净的浏览器环境使用。',
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
            name: 'PDFMergeNext 隐私设计白皮书 / Privacy Design Deep Dive',
            item: `${SITE_URL}/blog/pdfmergenext-privacy-design`,
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
        headline: 'PDFMergeNext 隐私设计白皮书 / Privacy Design Deep Dive',
        description: '文件为什么不上传、本地处理的技术架构、日志策略与安全边界——PDFMergeNext 的隐私设计完整拆解。',
        author: { '@type': 'Person', name: 'PDFMergeNext', url: 'https://pdfmergenext.shop', '@id': 'https://pdfmergenext.shop/#organization' },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-08-09',
        dateModified: '2026-08-09',
        image: `${SITE_URL}/og`,
        url: `${SITE_URL}/blog/pdfmergenext-privacy-design`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/pdfmergenext-privacy-design` },
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
        <span>PDFMergeNext 隐私设计白皮书</span>
      </nav>

      <h1 className="text-3xl font-bold leading-tight">
        PDFMergeNext 隐私设计白皮书 / PDFMergeNext Privacy Design Deep Dive
      </h1>
      <p className="mt-2 text-sm text-fg-muted">
        更新于 2026-08-09 · 阅读约 7 分钟 / 7 min read
      </p>

      <div className="my-6 rounded-lg bg-subtle p-4 text-sm leading-relaxed">
        <strong className="block mb-1">快速结论 / TL;DR</strong>
        PDFMergeNext 的隐私承诺不是一句口号，而是架构选择：文件全程不离开浏览器，
        没有上传接口、没有服务器存储、没有合并历史。这篇白皮书把实现方式、日志策略
        与安全边界原样写出来，包括哪些地方做不到绝对安全。
      </div>

      <nav className="mb-8 rounded-lg border border-line p-4 text-sm">
        <strong className="block mb-2">目录 / Contents</strong>
        <ul className="list-inside space-y-1">
          <li><a href="#principle" className="text-primary hover:underline">1. 核心原则：文件不出设备</a></li>
          <li><a href="#impl" className="text-primary hover:underline">2. 技术实现：本地处理的架构</a></li>
          <li><a href="#logs" className="text-primary hover:underline">3. 日志与数据策略：什么被记录</a></li>
          <li><a href="#vs" className="text-primary hover:underline">4. 与在线工具对比：差异在哪</a></li>
          <li><a href="#edge" className="text-primary hover:underline">5. 诚实的安全边界</a></li>
          <li><a href="#faq" className="text-primary hover:underline">6. 常见问题 / FAQ</a></li>
        </ul>
      </nav>

      <h2 id="principle" className="text-2xl font-semibold mt-10">1. 核心原则：文件不出设备</h2>
      <p className="mt-3">
        隐私设计的第一个决定是架构性的：把处理放在哪一端。在线工具把 PDF 上传到服务器再处理，
        意味着文件内容经过第三方网络与磁盘——即使服务商不读取，传输与存储本身就是风险面。
        PDFMergeNext 选择把全部处理放在浏览器本地：读取、解析、合并、写出，都在你的设备内存里完成。
      </p>
      <ul className="mt-3 space-y-2">
        <li><strong>无上传接口</strong>——代码里不存在把文件内容发往服务器的路径</li>
        <li><strong>无服务器存储</strong>——没有文件存储、没有合并历史、没有账号体系绑定文件</li>
        <li><strong>无第三方处理</strong>——不调用云端 PDF 处理 API，全程本地</li>
      </ul>

      <h2 id="impl" className="text-2xl font-semibold mt-10">2. 技术实现：本地处理的架构</h2>
      <p className="mt-3">
        具体来说，合并链路是这样跑的：选中的 PDF 通过浏览器 File API 读入内存，
        PDF.js 负责解析页面结构与渲染预览；排序、删除、合并这些操作全部作用于内存中的页面对象；
        最后用 Blob 与 URL.createObjectURL 生成并触发下载。网络层面没有请求发出，
        唯一可能的外部调用是加载工具自身的静态资源（页面、脚本），与你的文件内容无关。
      </p>
      <p className="mt-2">
        这也是为什么离线也能用：工具本身是静态站点，缓存后就完全断网可用，
        文件处理不依赖任何后端。想深入看离线与在线边界，可参考我们之前的
        <Link href="/blog/offline-pdf-merge-limits" className="text-primary hover:underline">离线合并边界分析</Link>。
      </p>

      <h2 id="logs" className="text-2xl font-semibold mt-10">3. 日志与数据策略：什么被记录</h2>
      <p className="mt-3">
        诚实交代：站点会运行基础的访问统计（页面浏览、来源、设备类型等匿名指标），
        用于了解工具是否好用。这些统计不含文件名、文件内容、合并参数或任何可还原文件的信息。
        我们刻意不记录的内容包括：合并历史、文件哈希、文件大小分布（细粒度）、IP 与文件的关联。
      </p>
      <ul className="mt-3 space-y-2">
        <li>记录：匿名访问统计（页面、来源、设备）</li>
        <li>不记录：文件内容、文件名、合并历史、可还原文件的任何信息</li>
        <li>存储：PDF 内容零存储，任务结束后内存即释放</li>
      </ul>

      <h2 id="vs" className="text-2xl font-semibold mt-10">4. 与在线工具对比：差异在哪</h2>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-line text-left">
              <th className="py-2 pr-4">维度</th>
              <th className="py-2 pr-4">在线合并工具</th>
              <th className="py-2">PDFMergeNext（本地）</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-line">
              <td className="py-2 pr-4">文件流向</td>
              <td className="py-2 pr-4">上传到服务器</td>
              <td className="py-2">不出设备</td>
            </tr>
            <tr className="border-b border-line">
              <td className="py-2 pr-4">服务端存储</td>
              <td className="py-2 pr-4">多数有临时存储</td>
              <td className="py-2">无存储</td>
            </tr>
            <tr className="border-b border-line">
              <td className="py-2 pr-4">断网可用</td>
              <td className="py-2 pr-4">不可用</td>
              <td className="py-2">缓存后可用</td>
            </tr>
            <tr className="border-b border-line">
              <td className="py-2 pr-4">文件大小上限</td>
              <td className="py-2 pr-4">受服务器配额限制</td>
              <td className="py-2">受本机内存限制</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-2">
        结论很直接：如果文件里有合同、证件、财务报表这类敏感内容，本地处理是唯一不需要
        "信任服务商承诺"的方案，因为文件压根没有离开你的设备。
      </p>

      <h2 id="edge" className="text-2xl font-semibold mt-10">5. 诚实的安全边界</h2>
      <p className="mt-3">
        隐私设计不回避做不到的事。两条边界说清楚：
      </p>
      <ul className="mt-3 space-y-2">
        <li><strong>加密 PDF</strong>——需要密码才能解密，解密在本机完成。密码本身由你持有，工具不存储也不传输它。</li>
        <li><strong>浏览器环境</strong>——本地处理依赖浏览器沙箱。如果设备被恶意软件或浏览器扩展入侵，理论上页面内容可被读取。敏感场景建议在干净、无多余扩展的环境使用。</li>
      </ul>

      <h2 id="faq" className="text-2xl font-semibold mt-10">6. 常见问题 / FAQ</h2>
      <div className="mt-3 space-y-4">
        {FAQ.map((it) => (
          <div key={it.q} className="rounded-lg border border-line p-4">
            <h3 className="font-semibold">{it.q}</h3>
            <p className="mt-1 text-sm text-fg-muted">{it.a}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-lg bg-subtle p-4 text-sm">
        <strong className="block mb-1">关于 PDFMergeNext</strong>
        PDFMergeNext（pdfmergenext.shop）是一个 100% 本地处理的 PDF 合并工具：
        文件不上传、无存储、无合并历史。回到 <Link href="/" className="text-primary hover:underline">首页</Link>
        直接使用，或浏览 <Link href="/blog" className="text-primary hover:underline">博客</Link>
        了解我们为什么要做成本地处理。
      </div>
    </article>
  );
}
