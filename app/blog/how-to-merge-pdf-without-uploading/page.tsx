import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';

export const metadata: Metadata = {
  title: 'How to Merge PDF Without Uploading (Step-by-Step, Verifiable) | PDFMergeNext',
  description:
    'Merge PDFs without uploading to any server. Three methods compared, plus how to verify zero-upload with browser DevTools. No sign-up, no watermark, works offline.',
  keywords: [
    'merge pdf without uploading',
    'how to merge pdf without upload',
    'offline pdf merge',
    'client-side pdf merge',
    'merge pdf in browser',
    'no upload pdf merger',
    'merge pdf locally',
    '不上传合并pdf',
    '本地合并pdf',
    '浏览器合并pdf',
    '免上传pdf合并',
  ],
  alternates: {
    canonical: '/blog/how-to-merge-pdf-without-uploading',
    languages: {
      'zh-CN': '/blog/how-to-merge-pdf-without-uploading',
      'en-US': '/blog/how-to-merge-pdf-without-uploading',
      'x-default': '/blog/how-to-merge-pdf-without-uploading',
    },
  },
  openGraph: {
    title: 'How to Merge PDF Without Uploading · PDFMergeNext',
    description: 'Three no-upload methods compared, plus a DevTools trick to verify it yourself.',
    url: `${SITE_URL}/blog/how-to-merge-pdf-without-uploading`,
    type: 'article',
    publishedTime: '2026-07-27T00:00:00.000Z',
    authors: ['PDFMergeNext'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Merge PDF Without Uploading · PDFMergeNext',
    description: 'Three no-upload methods compared, plus a DevTools trick to verify it yourself.',
  },
};

// 文章级 FAQ：覆盖本文 PAA 长尾词，配 FAQPage schema 抢精选摘要。
const ARTICLE_FAQ: { q: string; a: string }[] = [
  {
    q: '“不上传合并 PDF”到底是什么意思？',
    a: '指合并过程完全在你的设备（浏览器）里完成，文件不会被发送到任何第三方服务器。技术上用 pdf.js 解析、pdf-lib 重组，整个操作不产生文件上传请求。和“先上传到服务器再下载”的在线工具是两回事。',
  },
  {
    q: '怎么证明工具真的没有上传我的文件？',
    a: '打开浏览器开发者工具（F12）→ Network 面板，清除已有请求后再执行合并。如果工具是真正的客户端处理，合并期间 Network 面板不会出现任何携带文件数据的上传请求。更彻底的办法：在 DevTools 里切到 Offline 模式后合并，能成功就说明完全不依赖网络。',
  },
  {
    q: '不上传合并 PDF 收费吗？',
    a: 'PDFMergeNext 免费版即可合并，免注册、无水印；Pro 版提供更高批量额度与优先支持。隐私和本地处理对所有版本一致——不会因为免费就上传你的文件。',
  },
  {
    q: '能合并加密或有密码的 PDF 吗？',
    a: '需要先输入正确密码解锁后再合并。本地工具会在你的设备上验证密码，密码本身也不上传。合并后的文件默认不带密码，如需加密可在合并后单独设置。',
  },
  {
    q: '没有网络能用吗？',
    a: '可以。工具页面首次加载后会被浏览器缓存，之后断网仍能合并——因为处理逻辑全部跑在本地，不依赖服务器。这也正是“零上传”最强有力的证据。',
  },
];

const TOC = [
  { id: 'lead', label: '一句话结论 / TL;DR' },
  { id: 'compare', label: '三种不上传合并方法对比' },
  { id: 'method-browser', label: '方法一：浏览器端工具（PDFMergeNext）' },
  { id: 'verify', label: '如何验证“真的零上传”' },
  { id: 'pick-pages', label: '进阶：只合并指定页' },
  { id: 'compliance', label: '合规视角：数据不出境' },
  { id: 'mobile', label: '手机上怎么合并' },
  { id: 'method-mac', label: '方法二：macOS Preview' },
  { id: 'method-desktop', label: '方法三：桌面软件（PDFsam）' },
  { id: 'faq', label: '常见问题' },
];

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '首页', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: '博客', item: `${SITE_URL}/blog` },
          {
            '@type': 'ListItem',
            position: 3,
            name: '如何不上传合并 PDF',
            item: `${SITE_URL}/blog/how-to-merge-pdf-without-uploading`,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: ARTICLE_FAQ.map((it) => ({
          '@type': 'Question',
          name: it.q,
          acceptedAnswer: { '@type': 'Answer', text: it.a },
        })),
      },
      {
        '@type': 'Article',
        headline: 'How to Merge PDF Without Uploading (Step-by-Step, Verifiable)',
        description:
          'Merge PDFs without uploading to any server. Three methods compared, plus how to verify zero-upload with browser DevTools. No sign-up, no watermark, works offline.',
        author: { '@type': 'Person', name: 'PDFMergeNext' },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-07-27',
        dateModified: '2026-07-27',
        image: `${SITE_URL}/og`,
        url: `${SITE_URL}/blog/how-to-merge-pdf-without-uploading`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/how-to-merge-pdf-without-uploading` },
      },
    ],
  };

  return (
    <article className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-16">
      <header>
        <p className="text-caption font-semibold uppercase tracking-wide text-brand">
          PDF 合并 · 操作教程
        </p>
        <h1 className="mt-2 text-h1 font-bold tracking-tight text-fg">
          如何不上传合并 PDF:可验证的完整指南 / How to Merge PDF Without Uploading
        </h1>
        <p className="mt-3 text-body text-fg-secondary">
          How to merge PDF without uploading — three no-upload methods compared, plus a DevTools trick to verify it yourself.
        </p>
        <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-subtle px-3 py-1 text-caption font-medium text-fg-muted">
          阅读约 7 分钟 · 7 min read
        </p>
      </header>

      {/* 目录锚点 */}
      <nav aria-label="文章目录" className="mt-8 rounded-xl border border-line bg-subtle p-5">
        <p className="text-caption font-semibold uppercase tracking-wide text-fg-muted">目录 / Contents</p>
        <ul className="mt-2 grid gap-1 sm:grid-cols-2">
          {TOC.map((t) => (
            <li key={t.id}>
              <a href={`#${t.id}`} className="text-sm text-brand hover:underline">
                {t.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-8 space-y-8 text-body text-fg">
        {/* 导语：直接回答，抢精选摘要 */}
        <section id="lead" className="rounded-xl border border-brand/30 bg-brand/5 p-6">
          <h2 className="text-title font-semibold text-fg">一句话结论</h2>
          <p className="mt-2 text-fg-secondary">
            <strong>不上传合并 PDF</strong>，指文件全程在你的浏览器里用 pdf.js 解析、pdf-lib 重组，不发送到任何服务器。
            最快的做法:打开 <Link href="/" className="text-brand hover:underline">PDFMergeNext</Link> → 拖入 PDF → 排序 → 合并下载，全程可断网。
            你还能用浏览器开发者工具的 Network 面板<strong>亲自验证“零上传”</strong>。
          </p>
          <p className="mt-2 text-fg-secondary">
            Merging a PDF without uploading means the file is parsed by pdf.js and re-assembled by pdf-lib entirely in your
            browser — nothing is sent to a server. Open PDFMergeNext, drop in your files, reorder, merge, download. You can even
            verify the zero-upload claim yourself with your browser&apos;s DevTools.
          </p>
        </section>

        {/* 方法对比表：抢 table 精选摘要 */}
        <section id="compare">
          <h2 className="text-title font-semibold text-fg">三种不上传合并方法对比</h2>
          <p className="mt-2 text-fg-secondary">
            不上传合并并非只有一种路径。下表按“是否上传 / 是否需安装 / 是否有水印 / 能否挑页 / 是否支持手机”五个维度对比三种主流方案。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-subtle text-left text-fg">
                  <th className="border border-line px-3 py-2">方法</th>
                  <th className="border border-line px-3 py-2">上传到服务器</th>
                  <th className="border border-line px-3 py-2">需安装</th>
                  <th className="border border-line px-3 py-2">水印</th>
                  <th className="border border-line px-3 py-2">挑页合并</th>
                  <th className="border border-line px-3 py-2">手机端</th>
                </tr>
              </thead>
              <tbody className="text-fg-secondary">
                <tr>
                  <td className="border border-line px-3 py-2 font-medium text-fg">浏览器工具（PDFMergeNext）</td>
                  <td className="border border-line px-3 py-2">否</td>
                  <td className="border border-line px-3 py-2">否</td>
                  <td className="border border-line px-3 py-2">否</td>
                  <td className="border border-line px-3 py-2">是</td>
                  <td className="border border-line px-3 py-2">是</td>
                </tr>
                <tr>
                  <td className="border border-line px-3 py-2 font-medium text-fg">macOS Preview</td>
                  <td className="border border-line px-3 py-2">否</td>
                  <td className="border border-line px-3 py-2">内置</td>
                  <td className="border border-line px-3 py-2">否</td>
                  <td className="border border-line px-3 py-2">部分</td>
                  <td className="border border-line px-3 py-2">否</td>
                </tr>
                <tr>
                  <td className="border border-line px-3 py-2 font-medium text-fg">PDFsam Basic（桌面）</td>
                  <td className="border border-line px-3 py-2">否</td>
                  <td className="border border-line px-3 py-2">是</td>
                  <td className="border border-line px-3 py-2">否</td>
                  <td className="border border-line px-3 py-2">是</td>
                  <td className="border border-line px-3 py-2">否</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-caption text-fg-muted">
            三者都不上传文件，区别在于易用性、平台与是否能挑页。对大多数人，浏览器工具是门槛最低、且唯一同时支持手机与挑页的选项。
          </p>
        </section>

        {/* 方法一：浏览器工具详细步骤，抢 how-to 精选摘要 */}
        <section id="method-browser">
          <h2 className="text-title font-semibold text-fg">方法一:浏览器端工具(PDFMergeNext)</h2>
          <p className="mt-2 text-fg-secondary">
            这是最快的方式:打开网页就能用，无需安装、无需注册，合并过程在本地完成。
          </p>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-fg-secondary">
            <li>
              打开 <Link href="/" className="text-brand hover:underline">pdfmergenext.shop</Link>。页面会加载 pdf.js 与
              pdf-lib 到你的浏览器，之后所有处理都在本地进行。
            </li>
            <li>点击“添加文件”或直接把多个 PDF 拖进页面。</li>
            <li>在文件列表里拖拽调整顺序，或用方向按钮微调。</li>
            <li>（可选）切换到挑页模式，只合并每个文件的指定页——见后文“进阶”一节。</li>
            <li>点击“合并”。几秒内生成结果。</li>
            <li>下载——文件从你的内存直接写回硬盘，全程不经过任何服务器。</li>
          </ol>
          <p className="mt-3 text-fg-secondary">
            Open PDFMergeNext, drop in your PDFs, drag to reorder, hit Merge, and download. The whole thing runs on pdf.js +
            pdf-lib inside your browser — no install, no account, no upload.
          </p>
        </section>

        {/* 验证零上传：外链磁铁 + E-E-A-T */}
        <section id="verify" className="rounded-xl border border-line bg-surface p-6">
          <h2 className="text-title font-semibold text-fg">如何验证“真的零上传”</h2>
          <p className="mt-2 text-fg-secondary">
            任何工具都可以宣称“不上传”，但你不必盲信。浏览器自带开发者工具，能让你亲眼看合并过程中有没有数据外传。
            这也是这篇指南区别于大多数“免费合并”文章的地方——我们把验证方法写出来，欢迎用在任何工具上。
          </p>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-fg-secondary">
            <li>在工具页面按 <code className="rounded bg-subtle px-1.5 py-0.5 text-sm">F12</code> 打开开发者工具。</li>
            <li>切到 <strong>Network</strong>（网络）面板。</li>
            <li>勾选 <strong>Disable cache</strong>（禁用缓存），再点清除按钮清空已有请求记录。</li>
            <li>回到页面，执行添加文件 → 合并的操作。</li>
            <li>
              观察合并期间的 Network 面板:如果工具是真正的客户端处理，<strong>不应出现任何携带文件数据的上传请求</strong>
              (POST/PUT 且 body 含 PDF 字节)。你只会看到页面首次加载时的 JS/CSS/字体请求。
            </li>
          </ol>
          <p className="mt-3 text-fg-secondary">
            想要更彻底的证明?在 DevTools 的 Network 面板勾选 <strong>Offline</strong>(离线)模式，再合并——
            如果依然能成功，就说明处理逻辑完全不依赖网络，上传更是无从谈起。
          </p>
          <p className="mt-3 text-caption text-fg-muted">
            Pro tip: Toggle DevTools → Network → Offline, then merge. If it still works, the tool is provably server-free.
          </p>
        </section>

        {/* 挑页合并：差异化 */}
        <section id="pick-pages">
          <h2 className="text-title font-semibold text-fg">进阶:只合并指定页</h2>
          <p className="mt-2 text-fg-secondary">
            多数合并工具只能“整份文件合并”，而 PDFMergeNext 支持从每个 PDF 里抽取指定页再合并——比如
            <code className="mx-1 rounded bg-subtle px-1.5 py-0.5 text-sm">1-3, 5</code> 表示取第 1 到 3 页和第 5 页。
            这一能力在以下场景特别有用:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-fg-secondary">
            <li>多份报告各取摘要页，合成一份执行摘要。</li>
            <li>合同里只取签字页与附件封面，剔除冗长的正文。</li>
            <li>把分散扫描的证件(正反面各一页)合并成单页文档。</li>
          </ul>
          <p className="mt-2 text-fg-secondary">
            Need only specific pages? PDFMergeNext lets you pick ranges like 1–3, 5 from each file before merging — something
            most browser mergers don&apos;t offer.
          </p>
        </section>

        {/* 合规视角 */}
        <section id="compliance">
          <h2 className="text-title font-semibold text-fg">合规视角:数据不出境</h2>
          <p className="mt-2 text-fg-secondary">
            上传型工具的文件可能落在美国、欧盟或其他地区的服务器上，这对受 GDPR、HIPAA 或中国《个人信息保护法》
            约束的文档构成跨境数据问题。客户端处理天然规避数据出境:文件从未离开你的设备，
            也就不存在“传输到第三国服务器”这一环节。对法务、财务、医疗等敏感行业，这是从机制上而非承诺上的合规。
          </p>
          <p className="mt-2 text-fg-secondary">
            Upload-based tools may land your files on servers in the US, EU, or elsewhere — a cross-border data problem under
            GDPR, HIPAA, or PIPL. Client-side merging avoids it by definition: the file never leaves your device.
          </p>
        </section>

        {/* 移动端 */}
        <section id="mobile">
          <h2 className="text-title font-semibold text-fg">手机上怎么合并</h2>
          <p className="mt-2 text-fg-secondary">
            浏览器工具天然支持手机:在 Chrome(Android)或 Safari(iOS)里打开页面，从相册或文件 App 选 PDF，
            排序后合并，结果直接存到下载目录。无需安装 App，也不上传。桌面软件(下文方法二、三)则不支持手机。
          </p>
        </section>

        {/* 方法二：macOS Preview */}
        <section id="method-mac">
          <h2 className="text-title font-semibold text-fg">方法二:macOS Preview</h2>
          <p className="mt-2 text-fg-secondary">
            Mac 自带 Preview，能本地合并，适合不想装额外软件的 macOS 用户。
          </p>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-fg-secondary">
            <li>双击打开第一个 PDF，按 <code className="rounded bg-subtle px-1.5 py-0.5 text-sm">⌘</code>+<code className="rounded bg-subtle px-1.5 py-0.5 text-sm">Option</code>+<code className="rounded bg-subtle px-1.5 py-0.5 text-sm">2</code> 显示缩略图侧边栏。</li>
            <li>从访达把第二个 PDF 拖进侧边栏的目标位置。</li>
            <li>拖动缩略图调整页面顺序。</li>
            <li>菜单“文件 → 导出为 PDF”保存合并结果(注意不要用“存储”，那会覆盖原文件)。</li>
          </ol>
          <p className="mt-2 text-caption text-fg-muted">
            限制:仅限 Mac，不能跨平台;挑页能力有限(需先拆分再合并)。
          </p>
        </section>

        {/* 方法三：PDFsam */}
        <section id="method-desktop">
          <h2 className="text-title font-semibold text-fg">方法三:桌面软件(PDFsam Basic)</h2>
          <p className="mt-2 text-fg-secondary">
            PDFsam Basic 是开源免费的桌面应用(Windows/Mac/Linux)，本地处理、无水印，适合经常合并大量文件、且偏好
            独立软件的用户。
          </p>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-fg-secondary">
            <li>从 pdfsam.org 下载 Basic 版(注意是免费的 Basic，不是付费的 Enhanced)。</li>
            <li>安装后选择“Merge”模块，添加 PDF 或拖入。</li>
            <li>拖动行调整顺序，展开行可设置页码范围实现挑页。</li>
            <li>设置输出路径，点“Run”生成合并文件。</li>
          </ol>
          <p className="mt-2 text-caption text-fg-muted">
            限制:需安装、不支持手机;界面比网页工具略重。
          </p>
        </section>

        <section className="rounded-xl border border-line bg-subtle p-6">
          <h2 className="text-title font-semibold text-fg">马上试试</h2>
          <p className="mt-2 text-fg-secondary">
            打开 PDFMergeNext，拖入你的 PDF，几秒内在本机完成合并——文件从不上传，你可以用上面的 DevTools 方法亲自验证。
          </p>
          <Link
            href="/"
            className="mt-4 inline-block rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-on-primary transition-colors duration-fast hover:bg-brand-hover"
          >
            开始合并 →
          </Link>
          <p className="mt-3 text-caption text-fg-muted">
            想了解“为什么”要选本地合并？读我们的{' '}
            <Link href="/blog/why-local-offline-pdf-merge" className="text-brand hover:underline">
              隐私优先分析
            </Link>
            。
          </p>
        </section>

        {/* 可见 FAQ 段：抢 PAA + FAQPage schema */}
        <section id="faq" className="rounded-xl border border-line p-6">
          <h2 className="text-title font-semibold text-fg">常见问题</h2>
          <div className="mt-4 space-y-4">
            {ARTICLE_FAQ.map((it) => (
              <div key={it.q}>
                <h3 className="text-base font-semibold text-fg">{it.q}</h3>
                <p className="mt-1 text-fg-secondary">{it.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 相关文章 */}
      <section className="mx-auto mt-12 max-w-content px-4 sm:px-6">
        <h2 className="text-title font-semibold text-fg">相关阅读 / Related</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <a
            href="/blog/why-local-offline-pdf-merge"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">为什么选择本地离线 PDF 合并</p>
            <p className="mt-1 text-xs text-fg-secondary">隐私优先才是正解 / Privacy-First PDF Merge</p>
          </a>
          <a
            href="/blog/pdfmergenext-vs-smallpdf-vs-ilovepdf"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">PDFMergeNext vs Smallpdf vs iLovePDF</p>
            <p className="mt-1 text-xs text-fg-secondary">2026 隐私与限制全对比 / Honest 2026 Comparison</p>
          </a>
          <Link
            href="/blog/merge-pdf-no-upload"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">合并PDF不上传：安全免费的本地离线解决方案</p>
            <p className="mt-1 text-xs text-fg-secondary">Merge PDF Without Uploading — Free &amp; Secure</p>
          </Link>
          <Link
            href="/blog/how-zero-upload-pdf-tools-work"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">零上传PDF工具：工作原理全解析</p>
            <p className="mt-1 text-xs text-fg-secondary">How Zero-Upload PDF Tools Work — WebAssembly</p>
          </Link>
        </div>
      </section>
    </article>
  );
}
