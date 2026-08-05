import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';

export const metadata: Metadata = {
  title: 'How Zero-Upload PDF Tools Work (pdf.js, Web Workers, Local Merge) | PDFMergeNext',
  description:
    'How do zero-upload PDF tools actually work? pdf.js parses, pdf-lib reassembles, Web Workers keep the UI fast — all in your browser. The 5-step data flow explained, with honest limits.',
  keywords: [
    'how zero upload pdf tools work',
    'zero upload pdf tool',
    'client-side pdf processing',
    'pdf.js merge pdf',
    'pdf-lib merge',
    'web worker pdf',
    'local pdf merge how it works',
    '零上传pdf工具原理',
    '浏览器本地合并pdf原理',
    'pdf.js 解析 pdf',
    '客户端pdf处理',
  ],
  alternates: {
    canonical: '/blog/how-zero-upload-pdf-tools-work',
    languages: {
      'zh-CN': '/blog/how-zero-upload-pdf-tools-work',
      'en-US': '/blog/how-zero-upload-pdf-tools-work',
      'x-default': '/blog/how-zero-upload-pdf-tools-work',
    },
  },
  openGraph: {
    title: 'How Zero-Upload PDF Tools Work · PDFMergeNext',
    description: 'pdf.js + pdf-lib + Web Workers: the 5-step data flow behind true client-side PDF merging.',
    url: `${SITE_URL}/blog/how-zero-upload-pdf-tools-work`,
    type: 'article',
    publishedTime: '2026-08-06T00:00:00.000Z',
    authors: ['PDFMergeNext'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Zero-Upload PDF Tools Work · PDFMergeNext',
    description: 'The 5-step data flow behind true client-side PDF merging — pdf.js, pdf-lib, Web Workers.',
  },
};

// 文章级 FAQ：覆盖 PAA 长尾词，配 FAQPage schema 抢精选摘要。
const ARTICLE_FAQ: { q: string; a: string }[] = [
  {
    q: '零上传 PDF 工具到底是怎么"不上传"的？',
    a: '工具把处理代码（pdf.js 负责解析、pdf-lib 负责重组）在页面加载时下载到你的浏览器，之后你选中的文件被读取进浏览器内存，由本地代码解析与合并，最后用 Blob 直接生成下载文件。整个过程没有把文件字节发送到任何服务器——服务器从头到尾只提供过静态的网页和脚本。',
  },
  {
    q: '零上传和"浏览器本地处理"是同一个意思吗？',
    a: '基本是。零上传强调的是数据链路：文件不离开设备；浏览器本地处理强调的是执行位置：计算发生在本机。两者描述的是同一件事——客户端处理（client-side processing）。注意区分"页面在本地上传工具"和"文件本身不上传"：只要脚本在浏览器里运行、文件不 POST 出去，就是零上传。',
  },
  {
    q: 'pdf.js 和 pdf-lib 是什么？安全吗？',
    a: 'pdf.js 是 Mozilla 开源的 PDF 解析器（Firefox 内置 PDF 阅读器就是它），pdf-lib 是纯 JavaScript 的 PDF 创建/编辑库，同样开源。它们都在你的浏览器里运行，代码开源可审计，不会把你的文件发给任何服务器。',
  },
  {
    q: '零上传工具为什么合并大文件不卡？',
    a: '因为合并逻辑跑在 Web Worker 里——一个与主线程（页面 UI）并行的后台线程。解析和重组这种重计算在 Worker 中进行，主线程只负责渲染进度，所以界面不会卡死。性能上限取决于你的设备内存与 CPU，而不是服务器。',
  },
  {
    q: '零上传就等于绝对安全吗？',
    a: '不等于。零上传解决的是"文件不被服务器留存/泄露"这一环节，但浏览器环境本身仍有边界：页面可能加载第三方脚本（如统计、广告）并发送匿名数据，公共电脑上文件可能被其他进程读取。选择工具时仍要看它的隐私政策、是否开源、脚本加载了什么。',
  },
];

const TOC = [
  { id: 'lead', label: '一句话结论 / TL;DR' },
  { id: 'why-possible', label: '为什么浏览器能"零上传"处理 PDF' },
  { id: 'dataflow', label: '一次合并背后的 5 步数据流' },
  { id: 'worker', label: 'Web Worker：为什么不卡' },
  { id: 'limits', label: '零上传 ≠ 绝对安全：边界与诚实声明' },
  { id: 'verify', label: '如何验证你用的工具是真的零上传' },
  { id: 'compliance', label: '合规视角：机制而非承诺' },
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
            name: '零上传 PDF 工具的工作原理',
            item: `${SITE_URL}/blog/how-zero-upload-pdf-tools-work`,
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
        headline: 'How Zero-Upload PDF Tools Work (pdf.js, Web Workers, Local Merge)',
        description:
          'pdf.js parses, pdf-lib reassembles, Web Workers keep the UI fast — the 5-step data flow behind true client-side PDF merging, with honest limits.',
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
    <article className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-16">
      <header>
        <p className="text-caption font-semibold uppercase tracking-wide text-brand">
          PDF 合并 · 技术原理
        </p>
        <h1 className="mt-2 text-h1 font-bold tracking-tight text-fg">
          零上传 PDF 工具是如何工作的：原理全解析 / How Zero-Upload PDF Tools Work
        </h1>
        <p className="mt-3 text-body text-fg-secondary">
          How do zero-upload PDF tools work? pdf.js parses, pdf-lib reassembles, Web Workers keep the UI fast — the whole
          pipeline runs in your browser. Here is the 5-step data flow, plus the honest limits.
        </p>
        <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-subtle px-3 py-1 text-caption font-medium text-fg-muted">
          阅读约 6 分钟 · 6 min read
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
            <strong>零上传 PDF 工具的原理</strong>是"代码下载、数据留本地"：页面加载时，浏览器把 pdf.js（Mozilla 开源解析器）
            和 pdf-lib（纯 JS 编辑库）下载到本机；你选中的文件通过 File API 读进内存，由这些库在本地完成解析与合并，
            最后用 Blob 生成新文件直接下载。服务器从头到尾只提供过静态脚本——你的文件字节从未离开设备。
          </p>
          <p className="mt-2 text-fg-secondary">
            A zero-upload PDF tool works by shipping code to you and keeping your data at home: the page loads pdf.js (Mozilla&apos;s
            open-source parser) and pdf-lib (a pure-JS editing library) into your browser; your files are read into memory via the
            File API, parsed and merged locally, then delivered as a Blob download. The server only ever served static scripts —
            your file bytes never leave the device.
          </p>
        </section>

        {/* 为什么能实现 */}
        <section id="why-possible">
          <h2 className="text-title font-semibold text-fg">为什么浏览器能"零上传"处理 PDF</h2>
          <p className="mt-2 text-fg-secondary">
            十年前这还不可行——浏览器没有能力在本地解析复杂的 PDF。今天四项技术让客户端处理成为现实：
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-fg-secondary">
            <li>
              <strong>pdf.js</strong>：Mozilla 出品的 PDF 解析器，用 JavaScript/WASM 把 PDF 文件结构（对象、流、字体、页面）完整读入内存。
              Firefox 内置的 PDF 阅读器就是它——这意味着解析逻辑已经过十亿级用户的检验。
            </li>
            <li>
              <strong>pdf-lib</strong>：纯 JavaScript 的 PDF 创建与编辑库。合并的本质是"把多份 PDF 的页面对象复制进一个新文档"，
              pdf-lib 在内存里完成这份拷贝，不需要任何服务端。
            </li>
            <li>
              <strong>Web Worker</strong>：把解析与合并这种重计算放到独立的后台线程，UI 线程不阻塞，所以处理几百页也不会卡死页面。
            </li>
            <li>
              <strong>File API + Blob</strong>：浏览器读取本地文件的官方入口——文件以只读方式进入内存；合并结果以 Blob 形式
              触发下载，全程零网络请求。
            </li>
          </ul>
          <p className="mt-3 text-fg-secondary">
            Four browser capabilities make client-side PDF processing possible: pdf.js (Mozilla&apos;s parser), pdf-lib (pure-JS
            editing), Web Workers (off-main-thread compute), and the File API + Blob download (local I/O with zero network).
          </p>
        </section>

        {/* 5 步数据流 */}
        <section id="dataflow">
          <h2 className="text-title font-semibold text-fg">一次合并背后的 5 步数据流</h2>
          <p className="mt-2 text-fg-secondary">
            以 PDFMergeNext 为例，一次"拖入 → 合并 → 下载"实际发生的事：
          </p>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-fg-secondary">
            <li>
              <strong>加载应用壳</strong>：浏览器请求 HTML、JS、WASM 等静态资源。之后这些资源会被缓存，断网也能再次使用。
            </li>
            <li>
              <strong>读取文件</strong>：你拖入的 PDF 通过 File API 以 ArrayBuffer 形式读入浏览器内存——注意是"读入"，不是"上传"。
            </li>
            <li>
              <strong>解析</strong>：pdf.js 在 Web Worker 中解析每个文件的页面结构，得到可操作的页面对象列表。
            </li>
            <li>
              <strong>合并</strong>：pdf-lib 新建一个空文档，把各文件的指定页面（支持挑页语法如 1-3,5）按顺序复制进去。
            </li>
            <li>
              <strong>下载</strong>：合并结果在内存中序列化为新 PDF 字节，通过 Blob URL 触发浏览器下载，文件直接写回你的硬盘。
            </li>
          </ol>
          <p className="mt-3 text-fg-secondary">
            The flow: load the app shell → read files into memory via the File API → parse with pdf.js in a Web Worker → reassemble
            with pdf-lib → serialize and download via Blob. Every step runs locally; the network is only used for the initial script download.
          </p>
        </section>

        {/* Web Worker */}
        <section id="worker">
          <h2 className="text-title font-semibold text-fg">Web Worker：为什么大文件不卡</h2>
          <p className="mt-2 text-fg-secondary">
            浏览器主线程同时负责渲染页面和响应点击。如果把 PDF 解析这种重计算放在主线程，几百页的文件会让页面"假死"。
            Web Worker 是一个与主线程并行的后台线程：合并逻辑在 Worker 里跑，主线程只接收进度消息并更新界面——
            这就是为什么本地工具处理几十上百页依然流畅，性能上限取决于你的设备内存，而不是服务器带宽。
          </p>
          <p className="mt-2 text-fg-secondary">
            Web Workers run the heavy parsing off the main thread, so the UI stays responsive even for large files. Performance
            scales with your device, not with a remote server&apos;s capacity.
          </p>
        </section>

        {/* 边界与诚实声明 */}
        <section id="limits" className="rounded-xl border border-line bg-surface p-6">
          <h2 className="text-title font-semibold text-fg">零上传 ≠ 绝对安全：边界与诚实声明</h2>
          <p className="mt-2 text-fg-secondary">
            把话说透：零上传解决的是"文件不被服务器留存、不被第三方服务器泄露"这一核心问题，但它不是魔法。仍有几层边界需要你知道：
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-fg-secondary">
            <li>
              <strong>页面里的第三方脚本</strong>：统计、广告脚本可能发送匿名浏览数据（不含你的文件内容）。选择工具时看一下它加载了哪些外部资源。
            </li>
            <li>
              <strong>设备环境</strong>：公共电脑上，其他进程或浏览器扩展理论上可能读取内存中的文件数据。
            </li>
            <li>
              <strong>浏览器自身</strong>：本地工具依赖浏览器 API 的沙箱边界——浏览器本身不联网不做事，但它仍是你运行时的信任根。
            </li>
          </ul>
          <p className="mt-3 text-fg-secondary">
            Honest limits: zero-upload eliminates server-side file storage and leakage, but third-party scripts may still send
            anonymized telemetry, and a shared device is never fully private. Check what a tool loads and how open its code is.
          </p>
        </section>

        {/* 验证 */}
        <section id="verify">
          <h2 className="text-title font-semibold text-fg">如何验证你用的工具是真的零上传</h2>
          <p className="mt-2 text-fg-secondary">
            不必盲信任何"不上传"声明。用浏览器自带的开发者工具，两分钟就能亲眼验证：
          </p>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-fg-secondary">
            <li>按 <code className="rounded bg-subtle px-1.5 py-0.5 text-sm">F12</code> 打开开发者工具，切到 Network（网络）面板并清空记录。</li>
            <li>执行一次完整的合并操作。</li>
            <li>观察网络请求：真正的零上传工具在合并期间<strong>不应出现任何携带文件数据的 POST/PUT 请求</strong>。</li>
            <li>更彻底：在 Network 面板勾选 <strong>Offline</strong>（离线）后再次合并——依然成功，就说明处理完全不依赖网络。</li>
          </ol>
          <p className="mt-3 text-fg-secondary">
            完整教程见{' '}
            <Link href="/blog/how-to-merge-pdf-without-uploading" className="text-brand hover:underline">
              如何不上传合并 PDF：可验证的完整指南
            </Link>
            。
          </p>
        </section>

        {/* 合规视角 */}
        <section id="compliance">
          <h2 className="text-title font-semibold text-fg">合规视角：机制而非承诺</h2>
          <p className="mt-2 text-fg-secondary">
            对受 GDPR、HIPAA 或中国《个人信息保护法》约束的文档，上传型工具意味着你的文件可能被处理、留存甚至转发到第三方服务器。
            客户端处理的价值在于<strong>从机制上</strong>排除这条数据链路：文件从未离开设备，自然不存在"传输到第三国服务器"、
            "服务器日志记录文件名"等合规问题。这不是一句承诺，而是架构本身的性质。
          </p>
          <p className="mt-2 text-fg-secondary">
            For GDPR, HIPAA, or PIPL-sensitive documents, client-side processing removes the cross-border data path by design —
            compliance by architecture, not by promise.
          </p>
        </section>

        <section className="rounded-xl border border-line bg-subtle p-6">
          <h2 className="text-title font-semibold text-fg">亲自体验一下</h2>
          <p className="mt-2 text-fg-secondary">
            打开 PDFMergeNext，拖入你的 PDF 合并一次——然后用上面的 Offline 验证法，亲眼确认它真的不依赖网络。
          </p>
          <Link
            href="/"
            className="mt-4 inline-block rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-on-primary transition-colors duration-fast hover:bg-brand-hover"
          >
            开始合并 →
          </Link>
          <p className="mt-3 text-caption text-fg-muted">
            想比较不同工具？读我们的{' '}
            <Link href="/blog/pdfmergenext-vs-smallpdf-vs-ilovepdf" className="text-brand hover:underline">
              PDFMergeNext vs Smallpdf vs iLovePDF 对比
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
            href="/blog/how-to-merge-pdf-without-uploading"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">如何不上传合并 PDF</p>
            <p className="mt-1 text-xs text-fg-secondary">三步方法 + DevTools 验证 / Step-by-Step + Verification</p>
          </a>
          <a
            href="/blog/why-local-pdf-merge-beats-online"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">为什么本地 PDF 合并比在线更安全</p>
            <p className="mt-1 text-xs text-fg-secondary">7 个理由逐层拆解 / 7 Reasons, Layer by Layer</p>
          </a>
        </div>
      </section>
    </article>
  );
}
