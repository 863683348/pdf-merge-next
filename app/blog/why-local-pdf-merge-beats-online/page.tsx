import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';

export const metadata: Metadata = {
  title: '为什么本地PDF合并比在线更安全：7 个核心原因 | PDFMergeNext',
  description:
    '本地PDF合并 vs 在线合并：从数据链路、合规、服务器日志到中间人攻击逐层拆解，为什么 on-device PDF tools 才是敏感文件的安全选择。Why local PDF merge beats online.',
  keywords: [
    '本地PDF合并',
    '本地合并PDF',
    '离线合并PDF',
    'PDF合并 本地处理',
    'PDF合并 不上传',
    '本地PDF工具',
    'PDF合并 安全性',
    'on-device PDF tools',
    'why local PDF merge',
    'offline PDF merge',
  ],
  alternates: {
    canonical: '/blog/why-local-pdf-merge-beats-online',
    languages: {
      'zh-CN': '/blog/why-local-pdf-merge-beats-online',
      'en-US': '/blog/why-local-pdf-merge-beats-online',
      'x-default': '/blog/why-local-pdf-merge-beats-online',
    },
  },
  openGraph: {
    title: '为什么本地PDF合并比在线更安全：7 个核心原因 · PDFMergeNext',
    description:
      '本地PDF合并 vs 在线合并：从数据链路、合规、服务器日志到中间人攻击逐层拆解，为什么 on-device PDF tools 才是敏感文件的安全选择。Why local PDF merge beats online.',
    type: 'article',
    url: `${SITE_URL}/blog/why-local-pdf-merge-beats-online`,
    siteName: 'PDFMergeNext',
    publishedTime: '2026-08-05T00:00:00.000Z',
    images: [{ url: `${SITE_URL}/og`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '为什么本地PDF合并比在线更安全：7 个核心原因 · PDFMergeNext',
    description:
      '本地PDF合并 vs 在线合并：从数据链路、合规、服务器日志到中间人攻击逐层拆解，为什么 on-device PDF tools 才是敏感文件的安全选择。Why local PDF merge beats online.',
    images: [`${SITE_URL}/og`],
  },
};

// FAQ 数据
const FAQ = [
  {
    q: '本地PDF合并和在线合并最大的区别是什么？',
    a: '核心区别在数据是否离开你的设备。在线合并（Smallpdf、iLovePDF、Adobe 在线版）会把文件上传到对方服务器处理；本地PDF合并（如 PDFMergeNext、PDFsam Basic）在设备本地完成全部处理，文件永不经过第三方基础设施。',
  },
  {
    q: '在线工具承诺"1 小时后自动删除"，为什么还不够安全？',
    a: '因为"删除"发生在你无法审计的服务器上。文件在上传、处理、删除的整个窗口期都暴露在第三方基础设施中，可能被记录、备份或内部访问。合规上，GDPR/HIPAA/个保法都要求数据最小化——不上传才是从源头消除风险。',
  },
  {
    q: '本地PDF合并 性能会很差吗？',
    a: '取决于设备。浏览器本地合并（WebAssembly）在普通电脑上处理 200MB 以内的文件通常流畅；超大文件（500MB+）建议使用 PDFsam Basic 等桌面软件。对绝大多数日常场景，本地合并的体验与在线工具几乎无差别。',
  },
  {
    q: '如何验证一个工具是真的本地处理？',
    a: '三个方法：①打开 DevTools（F12）→ Network 标签，操作时观察是否有文件上传请求，真正的零上传工具不会有任何请求；②断网后重试，纯本地工具离线也能工作；③查看技术说明，本地工具通常基于 WebAssembly/pdf-lib 或开源引擎。',
  },
  {
    q: 'PDFMergeNext 的本地合并 支持哪些功能？',
    a: '支持多文件合并、拖拽排序、挑页合并（1-3,5 语法）、完全免费无水印无注册。所有处理在浏览器本地完成，无需上传，移动端浏览器同样可用。',
  },
  {
    q: '哪些场景必须用本地PDF合并？',
    a: '凡是文件内容敏感的场景都建议本地合并：法律合同（律师-客户保密特权）、医疗记录（HIPAA）、财务报表、商业计划书、个人证件扫描件。这些文件一旦上传，即使没有泄露事故，也可能违反合规要求。',
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
            name: '为什么本地PDF合并比在线更安全 / Why Local PDF Merge Beats Online',
            item: `${SITE_URL}/blog/why-local-pdf-merge-beats-online`,
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
        headline: '为什么本地PDF合并比在线更安全：7 个核心原因 / Why Local PDF Merge Beats Online',
        description:
          '从数据链路、合规、服务器日志到中间人攻击，逐层拆解本地PDF合并 vs 在线合并的安全性差异，附本地方案对比与验证方法。',
        author: { '@type': 'Person', name: 'PDFMergeNext', url: 'https://pdfmergenext.shop', '@id': 'https://pdfmergenext.shop/#organization' },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-08-05',
        dateModified: '2026-08-05',
        image: `${SITE_URL}/og`,
        url: `${SITE_URL}/blog/why-local-pdf-merge-beats-online`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/why-local-pdf-merge-beats-online` },
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
        <span>为什么本地PDF合并比在线更安全 / Why Local PDF Merge Beats Online</span>
      </nav>

      {/* Title */}
      <h1 className="text-3xl font-bold leading-tight">
        为什么本地PDF合并比在线更安全 / Why Local PDF Merge Beats Online
      </h1>
      <p className="mt-2 text-sm text-fg-muted">
        更新于 2026-08-05 · 阅读约 7 分钟 / 7 min read
      </p>

      {/* TL;DR */}
      <div className="my-6 rounded-lg bg-subtle p-4 text-sm leading-relaxed">
        <strong className="block mb-1">📋 快速结论 / TL;DR</strong>
        本地PDF合并比在线合并更安全，根本原因是<strong>数据不出设备</strong>：在线工具会把文件上传到第三方服务器，
        而本地合并（on-device PDF tools）在浏览器或本机完成全部处理，从架构上消除服务器日志、中间人攻击、
        数据留存三大风险。对法律、医疗、财务等敏感场景，本地PDF合并不仅是更优解，往往是唯一合规的选择。
      </div>

      {/* TOC */}
      <nav className="mb-8 rounded-lg border border-line p-4 text-sm">
        <strong className="block mb-2">📑 目录 / Contents</strong>
        <ul className="list-inside space-y-1">
          <li><a href="#arch" className="text-primary hover:underline">1. 本地 vs 在线：核心架构差异</a></li>
          <li><a href="#chain" className="text-primary hover:underline">2. 数据链路：你的文件经历了什么</a></li>
          <li><a href="#reasons" className="text-primary hover:underline">3. 为什么本地PDF合并更安全：7 个原因</a></li>
          <li><a href="#compare" className="text-primary hover:underline">4. 本地合并方案横向对比</a></li>
          <li><a href="#verify" className="text-primary hover:underline">5. 如何验证工具真的"本地"</a></li>
          <li><a href="#scenarios" className="text-primary hover:underline">6. 哪些场景必须本地合并</a></li>
          <li><a href="#faq" className="text-primary hover:underline">7. 常见问题 / FAQ</a></li>
        </ul>
      </nav>

      {/* Section 1 */}
      <h2 id="arch" className="text-2xl font-semibold mt-10">
        1. 本地 vs 在线：核心架构差异
      </h2>
      <p className="mt-3">
        <strong>本地PDF合并</strong>（local PDF merge / on-device PDF tools）指 PDF 处理全部发生在你的设备上：
        要么通过浏览器本地技术（WebAssembly + pdf-lib），要么通过安装在电脑里的桌面软件。整个过程中，
        <strong>文件字节不离开你的设备</strong>。
      </p>
      <p className="mt-2">
        在线合并则完全不同：你点击"上传"的那一刻，文件被拆分成数据包，经过 HTTPS 传输到对方的服务器，
        在服务器上合并完成后再传回给你。这意味着你的文件至少短暂驻留在<strong>你无法控制的第三方基础设施</strong>上——
        即使服务商承诺自动删除。
      </p>
      <p className="mt-2">
        这不是功能上的小差异，而是<strong>信任模型</strong>的根本区别：在线工具要求你信任服务商（以及它的运维人员、
        云服务商、备份系统），本地工具把控制权完全交还给你。关于零上传方案的更多细节，
        可参考<a href="/blog/merge-pdf-no-upload" className="text-primary hover:underline">合并PDF不上传：安全免费的本地离线解决方案</a>。
      </p>

      {/* Section 2 */}
      <h2 id="chain" className="text-2xl font-semibold mt-10">
        2. 数据链路：你的文件经历了什么
      </h2>
      <p className="mt-3">
        把两种方式的数据链路画出来，安全性差异一目了然：
      </p>
      <ul className="mt-2 space-y-2">
        <li><strong>🌐 在线合并的数据链路</strong>：你的设备 → 运营商网络 → 服务商边缘节点 → 应用服务器 → 对象存储/临时目录 → 反向合并 → 传回你的设备。中间经过 <strong>4-6 个不可控环节</strong>。</li>
        <li><strong>💻 本地合并的数据链路</strong>：你的设备 →（浏览器内存或本地进程）→ 合并结果。全程 <strong>0 个外部环节</strong>。</li>
      </ul>
      <p className="mt-3">
        数据链路越长，暴露面越大。在线链路的每一跳都可能留下日志、缓存或副本：
      </p>
      <ul className="mt-2 space-y-2">
        <li><strong>服务器访问日志</strong> — 即使不记录文件内容，也会记录文件大小、时间、IP、用户代理</li>
        <li><strong>中间缓存</strong> — CDN 与代理节点可能临时缓存响应内容</li>
        <li><strong>备份与审计留存</strong> — 企业级服务商的备份策略可能导致"已删除"文件仍存在于快照中</li>
        <li><strong>内部可见性</strong> — 运维人员与技术团队在排障时可能接触原始文件</li>
      </ul>

      {/* Section 3 */}
      <h2 id="reasons" className="text-2xl font-semibold mt-10">
        3. 为什么本地PDF合并更安全：7 个原因
      </h2>
      <p className="mt-3">
        综合安全领域的主流共识，本地PDF合并（offline PDF merge）在以下 7 个维度全面优于在线合并：
      </p>
      <ol className="mt-3 space-y-3 list-decimal list-inside">
        <li>
          <strong>数据最小化（Data Minimization）</strong>：GDPR 第 5 条、中国个保法第 6 条都要求只处理完成任务所必需的数据。
          本地合并根本不收集文件，是数据最小化的极致形态——没有数据，就没有合规负担。
        </li>
        <li>
          <strong>消除服务器日志</strong>：文件不上传，就不存在"文件名、大小、哈希、时间戳"被记录的可能。
          在线工具即使内容加密，元数据泄露本身也可能暴露商业敏感信息（如"谁在深夜合并了 30 份合同"）。
        </li>
        <li>
          <strong>无中间人风险</strong>：文件不出设备，就绕开了网络传输层，天然免疫中间人攻击（MITM）、
          不安全的证书、被劫持的 DNS 等传输层威胁。
        </li>
        <li>
          <strong>合规确定性</strong>：HIPAA 对 ePHI（电子受保护健康信息）的传输有严格限制；
          律师-客户保密特权要求文件不经第三方。本地合并让这些合规要求自动满足，无需依赖对方的合规承诺。
        </li>
        <li>
          <strong>数据留存可控</strong>：本地工具处理完即释放内存，没有"自动删除是否真的删除"的悬念。
          你可以掌控数据在设备上存留的每一秒。
        </li>
        <li>
          <strong>离线可用</strong>：本地处理不依赖网络，断网、弱网环境下照常工作，
          也避免了"上传一半断线导致文件损坏"这类在线服务常见事故。
        </li>
        <li>
          <strong>无账号无画像</strong>：真正隐私友好的本地工具不需要注册登录，
          不会为你的文件处理行为建立用户画像。隐私友好工作流的完整设计思路见
          <a href="/blog/why-local-offline-pdf-merge" className="text-primary hover:underline">为什么选择本地离线 PDF 合并</a>。
        </li>
      </ol>

      {/* Section 4 */}
      <h2 id="compare" className="text-2xl font-semibold mt-10">
        4. 本地合并方案横向对比
      </h2>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-subtle border-b border-line">
              <th className="p-3 text-left font-semibold">对比维度</th>
              <th className="p-3 text-left font-semibold">浏览器零上传工具</th>
              <th className="p-3 text-left font-semibold">开源桌面软件</th>
              <th className="p-3 text-left font-semibold">系统自带工具</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-line">
              <td className="p-3 font-medium">代表产品</td>
              <td className="p-3">PDFMergeNext</td>
              <td className="p-3">PDFsam Basic</td>
              <td className="p-3">macOS 预览 / Windows 打印</td>
            </tr>
            <tr className="border-b border-line">
              <td className="p-3 font-medium">安装成本</td>
              <td className="p-3 text-green-600 dark:text-green-400">✅ 免安装</td>
              <td className="p-3">📥 需下载</td>
              <td className="p-3">✅ 系统内置</td>
            </tr>
            <tr className="border-b border-line">
              <td className="p-3 font-medium">跨平台</td>
              <td className="p-3 text-green-600 dark:text-green-400">✅ 任何浏览器</td>
              <td className="p-3">✅ Win/Mac/Linux</td>
              <td className="p-3">⚠️ 平台绑定</td>
            </tr>
            <tr className="border-b border-line">
              <td className="p-3 font-medium">离线可用</td>
              <td className="p-3">✅ 页面加载后可离线</td>
              <td className="p-3 text-green-600 dark:text-green-400">✅ 完全离线</td>
              <td className="p-3 text-green-600 dark:text-green-400">✅ 完全离线</td>
            </tr>
            <tr className="border-b border-line">
              <td className="p-3 font-medium">挑页合并</td>
              <td className="p-3 text-green-600 dark:text-green-400">✅ 免费（1-3,5）</td>
              <td className="p-3">✅ 支持</td>
              <td className="p-3">⚠️ 有限</td>
            </tr>
            <tr className="border-b border-line">
              <td className="p-3 font-medium">超大文件（500MB+）</td>
              <td className="p-3">⚠️ 受浏览器内存限制</td>
              <td className="p-3 text-green-600 dark:text-green-400">✅ 更稳定</td>
              <td className="p-3">⚠️ 有限</td>
            </tr>
            <tr className="border-b border-line">
              <td className="p-3 font-medium">价格</td>
              <td className="p-3 text-green-600 dark:text-green-400">✅ 免费</td>
              <td className="p-3 text-green-600 dark:text-green-400">✅ 开源免费</td>
              <td className="p-3 text-green-600 dark:text-green-400">✅ 内置</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-fg-muted">
        浏览器零上传工具兼顾便利与隐私，是大多数场景的首选；处理超大文件或完全脱离浏览器的环境时，桌面软件更合适。
      </p>

      {/* Section 5 */}
      <h2 id="verify" className="text-2xl font-semibold mt-10">
        5. 如何验证工具真的"本地"
      </h2>
      <p className="mt-3">
        很多在线工具也自称"本地处理"，别信宣传，用 3 个方法实测（以 PDFMergeNext 为例）：
      </p>
      <ol className="mt-3 space-y-3 list-decimal list-inside">
        <li>
          <strong>DevTools 网络面板验证</strong>：打开 <a href="/" className="text-primary hover:underline">pdfmergenext.shop</a>，
          按 F12 → Network 标签 → 拖入 PDF 文件 → 观察请求列表。真正的零上传工具<strong>不会出现任何文件上传请求</strong>。
          断网状态下重复操作，功能应完全正常。
        </li>
        <li>
          <strong>源码与实现审查</strong>：查看工具技术栈。基于 WebAssembly + pdf-lib 的浏览器工具，
          处理逻辑在本地 WASM 运行时内执行；开源工具（如 PDFsam Basic）可以审查全部代码。
        </li>
        <li>
          <strong>文件指纹核对</strong>：合并前后用 md5/sha256 校验工具核对——如果处理过程真的在本地，
          输入文件的内容不会以任何形式出现在网络流量中。更严格的验证教程见
          <a href="/blog/how-to-merge-pdf-without-uploading" className="text-primary hover:underline">如何不上传合并 PDF：可验证的完整指南</a>。
        </li>
      </ol>

      {/* Section 6 */}
      <h2 id="scenarios" className="text-2xl font-semibold mt-10">
        6. 哪些场景必须本地合并
      </h2>
      <p className="mt-3">
        以下场景中，本地PDF合并不是"更优选择"，而是<strong>合规底线</strong>：
      </p>
      <ul className="mt-2 space-y-2">
        <li><strong>⚖️ 法律行业</strong> — 律师-客户保密特权（Attorney-Client Privilege）：客户文件一旦经第三方传输，特权可能受损</li>
        <li><strong>🏥 医疗健康</strong> — HIPAA 要求对 ePHI 的传输采取最小必要措施，本地处理是最强的实现</li>
        <li><strong>💰 财务税务</strong> — 银行对账单、税务申报表、审计底稿属于高敏数据，泄露可能导致重大损失</li>
        <li><strong>🏢 企业 HR</strong> — 员工薪酬、体检、绩效信息合并，本地处理避免内部数据外流</li>
        <li><strong>📄 个人证件</strong> — 身份证、护照、签证扫描件，个保法下应坚持最小化处理</li>
        <li><strong>🎓 学术研究</strong> — 未发表论文、评审材料，防止上传导致的抄袭争议与成果泄露</li>
      </ul>
      <p className="mt-3">
        换句话说：<strong>如果这份文件的内容让你"有点犹豫要不要上传"，那就应该用本地合并。</strong>
        犹豫本身就是信号——文件越重要，越不该让它离开你的设备。
      </p>

      {/* Section 7: FAQ */}
      <h2 id="faq" className="text-2xl font-semibold mt-10">
        7. 常见问题 / FAQ
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
            <p className="text-sm font-semibold text-fg">合并PDF不上传：安全免费的本地离线解决方案</p>
            <p className="mt-1 text-xs text-fg-secondary">Merge PDF Without Uploading — Free & Secure</p>
          </Link>
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
            <p className="mt-1 text-xs text-fg-secondary">How to Merge PDF Without Uploading (Step-by-Step)</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <div className="mt-10 rounded-lg bg-primary/5 p-6 text-center">
        <p className="text-lg font-semibold">👉 试试本地PDF合并</p>
        <p className="mt-1 text-sm text-fg-muted">
          零上传、无水印、无限制。文件永不离开你的设备，免费。
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
