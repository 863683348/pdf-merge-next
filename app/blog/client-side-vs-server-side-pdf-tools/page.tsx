import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';

export const metadata: Metadata = {
  title: '客户端 PDF 工具 vs 服务器端：架构对比 | PDFMergeNext',
  description:
    '同样叫合并 PDF，架构可能完全不同。客户端工具在浏览器本地处理、文件不出设备；服务器端工具把文件上传云端。隐私、速度、离线能力的差异全讲透。Client-side vs server-side PDF tools, honestly compared.',
  keywords: [
    '客户端 PDF 工具',
    'client-side pdf tools',
    'client side pdf merge',
    'browser pdf merge privacy',
    '本地PDF 处理',
    '服务器端 PDF 工具',
    'pdf merge architecture',
    'PDFMergeNext client side',
  ],
  alternates: {
    canonical: '/blog/client-side-vs-server-side-pdf-tools',
    languages: {
      'zh-CN': '/blog/client-side-vs-server-side-pdf-tools',
      'en-US': '/blog/client-side-vs-server-side-pdf-tools',
      'x-default': '/blog/client-side-vs-server-side-pdf-tools',
    },
  },
};

const FAQ = [
  {
    q: '客户端处理会不会很慢？',
    a: '对大多数 PDF 合并任务，现代浏览器本机处理比上传-下载更快，因为省掉了网络往返。只有超大文件（几百 MB）才可能受限于浏览器内存。',
  },
  {
    q: '客户端工具能处理加密 PDF 吗？',
    a: '可以，密码解密在本机完成。但注意：本机解密意味着密码在你的设备上处理，安全边界与你的设备环境有关，建议在干净环境使用。',
  },
  {
    q: '浏览器内存限制怎么办？',
    a: '大文件建议拆分处理，或改用桌面应用。浏览器端的极限通常在 1-2GB 级别，超过建议换工具。',
  },
  {
    q: 'PDFMergeNext 是哪种架构？',
    a: '纯客户端。合并全程在浏览器本地完成，没有上传接口、没有服务器存储。想深入了解实现，看我们的隐私设计白皮书。',
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
            name: '客户端 PDF 工具 vs 服务器端 / Client-side vs Server-side PDF Tools',
            item: `${SITE_URL}/blog/client-side-vs-server-side-pdf-tools`,
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
        headline: '客户端 PDF 工具 vs 服务器端：架构对比 / Client-side vs Server-side PDF Tools',
        description: '同样叫合并 PDF，架构可能完全不同。客户端在浏览器本地处理、文件不出设备；服务器端把文件上传云端。隐私、速度、离线能力的差异全讲透。',
        author: { '@type': 'Person', name: 'PDFMergeNext', url: 'https://pdfmergenext.shop', '@id': 'https://pdfmergenext.shop/#organization' },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-08-10',
        dateModified: '2026-08-10',
        image: `${SITE_URL}/og`,
        url: `${SITE_URL}/blog/client-side-vs-server-side-pdf-tools`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/client-side-vs-server-side-pdf-tools` },
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
        <span>客户端 PDF 工具 vs 服务器端</span>
      </nav>

      <h1 className="text-3xl font-bold leading-tight">
        客户端 PDF 工具 vs 服务器端：架构对比 / Client-side vs Server-side PDF Tools
      </h1>
      <p className="mt-2 text-sm text-fg-muted">
        更新于 2026-08-10 · 阅读约 7 分钟 / 7 min read
      </p>

      <div className="my-6 rounded-lg bg-subtle p-4 text-sm leading-relaxed">
        <strong className="block mb-1">快速结论 / TL;DR</strong>
        同样叫"合并 PDF 的工具"，架构可能完全不同。客户端工具在浏览器本地完成全部处理，
        文件内容不出设备；服务器端工具把文件上传云端再处理。这决定了你的文件去了哪里、
        速度有多快、离线能不能用。隐私不是功能开关，是架构选择。
      </div>

      <nav className="mb-8 rounded-lg border border-line p-4 text-sm">
        <strong className="block mb-2">目录 / Contents</strong>
        <ul className="list-inside space-y-1">
          <li><a href="#diff" className="text-primary hover:underline">1. 两种架构到底差在哪</a></li>
          <li><a href="#dim" className="text-primary hover:underline">2. 三个关键维度对比</a></li>
          <li><a href="#privacy" className="text-primary hover:underline">3. 为什么隐私是决定性差异</a></li>
          <li><a href="#pick" className="text-primary hover:underline">4. 什么场景该选哪种</a></li>
          <li><a href="#test" className="text-primary hover:underline">5. 怎么快速判断一个工具是哪种</a></li>
          <li><a href="#faq" className="text-primary hover:underline">6. 常见问题 / FAQ</a></li>
        </ul>
      </nav>

      <h2 id="diff" className="text-2xl font-semibold mt-10">1. 两种架构到底差在哪</h2>
      <p className="mt-3">
        客户端（client-side pdf tools）：文件通过浏览器 File API 读入内存，解析、合并、输出
        全部在本机完成。没有上传请求，文件内容不出设备。处理速度取决于你的设备性能，
        断网也能用（前提是工具本身已加载）。
      </p>
      <p className="mt-2">
        服务器端：文件先上传到服务器，云端完成处理后再下载结果。文件内容经过第三方网络和磁盘。
        速度取决于服务器性能与你的带宽，必须联网，且受服务器负载影响。
      </p>
      <p className="mt-2">
        一句话总结：客户端把"处理"放在你的设备上，服务器端把"处理"放在别人的服务器上。
      </p>

      <h2 id="dim" className="text-2xl font-semibold mt-10">2. 三个关键维度对比</h2>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-line text-left">
              <th className="py-2 pr-4">维度</th>
              <th className="py-2 pr-4">客户端</th>
              <th className="py-2">服务器端</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-line">
              <td className="py-2 pr-4">文件流向</td>
              <td className="py-2 pr-4">不出设备</td>
              <td className="py-2">上传 → 处理 → 下载</td>
            </tr>
            <tr className="border-b border-line">
              <td className="py-2 pr-4">隐私风险</td>
              <td className="py-2 pr-4">无第三方接触文件</td>
              <td className="py-2">文件经过第三方基础设施</td>
            </tr>
            <tr className="border-b border-line">
              <td className="py-2 pr-4">速度</td>
              <td className="py-2 pr-4">取决于本机 CPU</td>
              <td className="py-2">取决于带宽 + 服务器</td>
            </tr>
            <tr className="border-b border-line">
              <td className="py-2 pr-4">离线可用</td>
              <td className="py-2 pr-4">可以</td>
              <td className="py-2">不行</td>
            </tr>
            <tr className="border-b border-line">
              <td className="py-2 pr-4">大文件支持</td>
              <td className="py-2 pr-4">受浏览器内存限制</td>
              <td className="py-2">受服务器配额与上传限制</td>
            </tr>
            <tr className="border-b border-line">
              <td className="py-2 pr-4">协作/多设备</td>
              <td className="py-2 pr-4">单机</td>
              <td className="py-2">可在云端暂存</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="privacy" className="text-2xl font-semibold mt-10">3. 为什么隐私是决定性差异</h2>
      <p className="mt-3">
        对大多数日常 PDF 合并任务，两种架构都能完成，差别在"文件去过哪里"。如果你的 PDF
        含合同、身份证、财务记录，文件流向就是硬指标：客户端意味着没有网络路径让文件离开设备，
        服务器端意味着文件至少经历一次上传。
      </p>
      <p className="mt-2">
        注意一个细节：很多"在线"工具声称"传输加密""30 分钟后删除"。加密保护的是传输过程，
        删除是服务商承诺，两者都无法让你确认文件真的没被读取、复制或用于训练。
        隐私不是功能开关，是架构选择。
      </p>

      <h2 id="pick" className="text-2xl font-semibold mt-10">4. 什么场景该选哪种</h2>
      <p className="mt-3">选客户端的场景：处理合同、证件、财务等敏感文件；需要离线使用（出差、弱网环境）；在意文件"被看见"的风险，哪怕概率很低。</p>
      <p className="mt-2">选服务器端的场景：设备性能很弱，合并超大文件跑不动；需要跨设备取用处理结果；用平台的团队协作功能（共享、审核）。</p>
      <p className="mt-2">如果只是偶尔合并几个普通 PDF，两种都行；一旦文件值得"不想让任何人看见"，客户端是唯一符合直觉的选择。</p>

      <h2 id="test" className="text-2xl font-semibold mt-10">5. 怎么快速判断一个工具是哪种</h2>
      <p className="mt-3">
        不用看宣传，用两个实测。第一，断网刷新页面再操作，能用的就是客户端；第二，打开浏览器
        开发者工具的 Network 面板，合并一个文件，看有没有文件上传请求（multipart/form-data
        或二进制 PUT）。有请求就是服务器端，没有就是客户端。我们之前写过用 DevTools 验证的
        <Link href="/blog/how-zero-upload-pdf-tools-work" className="text-primary hover:underline">详细方法</Link>。
      </p>

      <h2 id="faq" className="text-2xl font-semibold mt-10">6. 常见问题 / FAQ</h2>
      <p className="mt-3"><strong>客户端处理会不会很慢？</strong> 对大多数 PDF 合并任务，现代浏览器本机处理比上传-下载更快，因为省掉了网络往返。只有超大文件（几百 MB）才可能受限于浏览器内存。</p>
      <p className="mt-2"><strong>客户端工具能处理加密 PDF 吗？</strong> 可以，密码解密在本机完成。但注意：本机解密意味着密码在你的设备上处理，安全边界与你的设备环境有关，建议在干净环境使用。</p>
      <p className="mt-2"><strong>浏览器内存限制怎么办？</strong> 大文件建议拆分处理，或改用桌面应用。浏览器端的极限通常在 1-2GB 级别，超过建议换工具。</p>
      <p className="mt-2"><strong>PDFMergeNext 是哪种架构？</strong> 纯客户端。合并全程在浏览器本地完成，没有上传接口、没有服务器存储。想深入了解实现，看我们的<Link href="/blog/pdfmergenext-privacy-design" className="text-primary hover:underline">隐私设计白皮书</Link>。</p>

      <div className="mt-8 rounded-lg bg-subtle p-4 text-sm leading-relaxed">
        <strong className="block mb-1">相关阅读 / Related</strong>
        <ul className="list-inside space-y-1">
          <li><Link href="/blog/offline-pdf-merge-limits" className="text-primary hover:underline">100% 离线 PDF 合并：理论可行性的边界</Link></li>
          <li><Link href="/blog/why-local-pdf-merge-beats-online" className="text-primary hover:underline">为什么本地 PDF 合并比在线更安全</Link></li>
          <li><Link href="/blog/how-zero-upload-pdf-tools-work" className="text-primary hover:underline">零上传 PDF 工具：工作原理全解析</Link></li>
        </ul>
      </div>

      <p className="mt-8">
        到 <a href="https://pdfmergenext.shop" className="text-primary hover:underline">PDFMergeNext（pdfmergenext.shop）</a>
        的<a href="/" className="text-primary hover:underline">首页</a>直接用本地合并工具试试。
        文件全程不出浏览器。
      </p>
    </article>
  );
}
