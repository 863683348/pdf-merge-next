import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';

export const metadata: Metadata = {
  title: 'PDF 合并的 5 种方法对比：哪个最省心 / 5 PDF Merge Methods Compared | PDFMergeNext',
  description:
    'PDF 合并有 5 种常见方法：在线工具、桌面软件、命令行、浏览器插件、编程库。本文对比它们在隐私、成本、功能、易用性上的差异，帮你一次选对。',
  keywords: [
    'pdf合并 方法',
    'pdf merge methods',
    '合并pdf 在线',
    '合并pdf 命令行',
    '合并pdf 桌面软件',
    'pdf merge command line',
    'merge pdf online vs desktop',
    'pdf merger 对比',
    'pdf 合并 工具 推荐',
  ],
  alternates: {
    canonical: '/blog/5-pdf-merge-methods-compared',
    languages: {
      'zh-CN': '/blog/5-pdf-merge-methods-compared',
      'en-US': '/blog/5-pdf-merge-methods-compared',
      'x-default': '/blog/5-pdf-merge-methods-compared',
    },
  },
  openGraph: {
    title: 'PDF 合并的 5 种方法对比 · PDFMergeNext',
    description: '在线工具、桌面软件、命令行、浏览器插件、编程库——5 种 PDF 合并方法在隐私、成本、功能上的真实差异。',
    url: `${SITE_URL}/blog/5-pdf-merge-methods-compared`,
    type: 'article',
    publishedTime: '2026-08-20T00:00:00.000Z',
    authors: ['PDFMergeNext'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PDF 合并的 5 种方法对比 · PDFMergeNext',
    description: '5 种 PDF 合并方法对比：隐私、成本、功能、易用性一次说清。',
  },
};

// 文章级 FAQ：覆盖本文 PAA 长尾词，配 FAQPage schema 抢精选摘要。
const ARTICLE_FAQ: { q: string; a: string }[] = [
  {
    q: '哪种 PDF 合并方法最安全？',
    a: '看文件是否离开设备。浏览器本地工具（WebAssembly）和命令行本地工具都完全在设备上处理，不上传任何数据；在线网站把文件传到服务器，安全性取决于对方的数据策略。敏感文件优先选本地方案。',
  },
  {
    q: 'Is a browser tool safer than desktop software?',
    a: 'Not by itself — what matters is whether files are uploaded. A browser tool built on WebAssembly processes files locally with zero upload, which is as private as desktop software and far more convenient. Check the privacy policy and the network tab to confirm.',
  },
  {
    q: '免费和付费的 PDF 合并工具有什么区别？',
    a: '免费工具通常有文件数量、页数或水印限制；付费工具去掉限制并可能提供批量处理、OCR 等高级功能。但本地处理的免费工具（如 PDFMergeNext）没有水印、不限页数，日常使用足够。',
  },
  {
    q: '命令行合并 PDF 适合什么人？',
    a: '适合开发者、运维和需要批量/脚本化处理的人。命令行工具（如 qpdf、pdfunite）一次能处理几百个文件，但需要会使用终端，对普通用户门槛偏高。',
  },
];

const TOC = [
  { id: 'lead', label: '一句话结论 / TL;DR' },
  { id: 'overview', label: '5 种方法总览' },
  { id: 'online', label: '在线工具' },
  { id: 'desktop', label: '桌面软件' },
  { id: 'cli', label: '命令行工具' },
  { id: 'extension', label: '浏览器插件' },
  { id: 'library', label: '编程语言库' },
  { id: 'compare', label: '横向对比表' },
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
            name: 'PDF 合并的 5 种方法对比',
            item: `${SITE_URL}/blog/5-pdf-merge-methods-compared`,
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
        headline: 'PDF 合并的 5 种方法对比：哪个最省心 / 5 PDF Merge Methods Compared',
        description:
          'PDF 合并有 5 种常见方法：在线工具、桌面软件、命令行、浏览器插件、编程库。本文对比它们在隐私、成本、功能、易用性上的差异。',
        author: { '@type': 'Person', name: 'PDFMergeNext', url: 'https://pdfmergenext.shop', '@id': 'https://pdfmergenext.shop/#organization' },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-08-20',
        dateModified: '2026-08-20',
        image: `${SITE_URL}/og`,
        url: `${SITE_URL}/blog/5-pdf-merge-methods-compared`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/5-pdf-merge-methods-compared` },
      },
    ],
  };

  return (
    <article className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-16">
      <header>
        <p className="text-caption font-semibold uppercase tracking-wide text-brand">PDF 合并 · 对比</p>
        <h1 className="mt-2 text-h1 font-bold tracking-tight text-fg">
          PDF 合并的 5 种方法对比 / 5 PDF Merge Methods Compared
        </h1>
        <p className="mt-3 text-body text-fg-secondary">
          合并 PDF 有五条路：在线网站、桌面软件、命令行、浏览器插件、编程库。它们不是非此即彼，而是适合不同的人和场景。下面按隐私、成本、功能、易用性四个维度拆开讲。
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
        {/* 导语 */}
        <section id="lead" className="rounded-xl border border-brand/30 bg-brand/5 p-6">
          <h2 className="text-title font-semibold text-fg">一句话结论</h2>
          <p className="mt-2 text-fg-secondary">
            <strong>普通用户</strong>：浏览器本地工具最省心——不上传、免安装、跨平台。<strong>开发者/批量场景</strong>：命令行（qpdf、pdfunite）效率最高。<strong>敏感文件</strong>：一律选本地处理，别选会把文件传上服务器的在线网站。
          </p>
          <p className="mt-2 text-fg-secondary">
            For everyday use, a browser-based local tool is the sweet spot: no upload, no install, works everywhere. For batch or scripted jobs, the command line wins. And for sensitive documents, always pick a local-first option.
          </p>
        </section>

        {/* 总览 */}
        <section id="overview">
          <h2 className="text-title font-semibold text-fg">5 种方法总览 / The five options at a glance</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-subtle text-left text-fg">
                  <th className="border border-line px-3 py-2">方法</th>
                  <th className="border border-line px-3 py-2">是否需要安装</th>
                  <th className="border border-line px-3 py-2">是否上传文件</th>
                  <th className="border border-line px-3 py-2">适合人群</th>
                </tr>
              </thead>
              <tbody className="text-fg-secondary">
                <tr>
                  <td className="border border-line px-3 py-2 font-medium text-fg">在线工具（本地处理）</td>
                  <td className="border border-line px-3 py-2">否</td>
                  <td className="border border-line px-3 py-2">否</td>
                  <td className="border border-line px-3 py-2">所有人</td>
                </tr>
                <tr>
                  <td className="border border-line px-3 py-2 font-medium text-fg">在线网站（云端处理）</td>
                  <td className="border border-line px-3 py-2">否</td>
                  <td className="border border-line px-3 py-2">是</td>
                  <td className="border border-line px-3 py-2">非敏感文件、临时使用</td>
                </tr>
                <tr>
                  <td className="border border-line px-3 py-2 font-medium text-fg">桌面软件</td>
                  <td className="border border-line px-3 py-2">是</td>
                  <td className="border border-line px-3 py-2">否</td>
                  <td className="border border-line px-3 py-2">重度使用、离线办公</td>
                </tr>
                <tr>
                  <td className="border border-line px-3 py-2 font-medium text-fg">命令行工具</td>
                  <td className="border border-line px-3 py-2">是</td>
                  <td className="border border-line px-3 py-2">否</td>
                  <td className="border border-line px-3 py-2">开发者、批量处理</td>
                </tr>
                <tr>
                  <td className="border border-line px-3 py-2 font-medium text-fg">浏览器插件 / 编程库</td>
                  <td className="border border-line px-3 py-2">视情况</td>
                  <td className="border border-line px-3 py-2">看实现</td>
                  <td className="border border-line px-3 py-2">特定场景、开发者</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 在线工具 */}
        <section id="online">
          <h2 className="text-title font-semibold text-fg">1. 在线工具：最省心 / Online tools</h2>
          <p className="mt-2 text-fg-secondary">
            打开网页就用，不装任何东西，这是绝大多数人的第一选择。但要分清两类：一类像 <Link href="/" className="text-brand hover:underline">PDFMergeNext</Link> 在浏览器本地处理、文件不上传；另一类把文件传到你并不了解的服务器上。对合同、证件这类文件，前者才安全。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-fg-secondary">
            <li><strong>优点</strong>：零安装、跨平台（电脑/手机）、无需更新。</li>
            <li><strong>缺点</strong>：功能取决于网页；超大文件受浏览器内存限制。</li>
            <li><strong>判断是否上传</strong>：断网再试一次，还能用就是本地处理；或打开 DevTools 看 Network 面板。</li>
          </ul>
          <p className="mt-2 text-fg-secondary">
            Online tools are the lowest-friction option. The catch is privacy: some run entirely in your browser (zero upload), others push files to a server. For anything sensitive, pick the local-processing kind.
          </p>
        </section>

        {/* 桌面软件 */}
        <section id="desktop">
          <h2 className="text-title font-semibold text-fg">2. 桌面软件：稳定但重 / Desktop software</h2>
          <p className="mt-2 text-fg-secondary">
            Adobe Acrobat、Foxit 等桌面软件功能最全：合并、拆分、压缩、OCR、签名一站式。处理超大文件时性能最稳，完全离线。代价是要安装、占用空间、且专业版收费不低。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-fg-secondary">
            <li><strong>优点</strong>：功能全、性能稳、可离线、适合重度和企业场景。</li>
            <li><strong>缺点</strong>：要安装、跨设备麻烦、专业功能收费。</li>
          </ul>
        </section>

        {/* 命令行 */}
        <section id="cli">
          <h2 className="text-title font-semibold text-fg">3. 命令行：批量之王 / Command line</h2>
          <p className="mt-2 text-fg-secondary">
            用 qpdf、pdfunite（poppler）等工具，一条命令合并几百个文件，还能写进脚本定时处理。完全本地、完全免费、可复制可审计，开发者首选。
          </p>
          <pre className="mt-3 overflow-x-auto rounded-lg bg-subtle p-4 text-sm">
            <code>{`# 合并 a.pdf b.pdf -> merged.pdf
qpdf --empty --pages a.pdf b.pdf -- merged.pdf

# 或 poppler 全家桶
pdfunite a.pdf b.pdf merged.pdf`}</code>
          </pre>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-fg-secondary">
            <li><strong>优点</strong>：批量、可脚本化、完全本地、免费。</li>
            <li><strong>缺点</strong>：有终端门槛，图形化预览弱。</li>
          </ul>
        </section>

        {/* 浏览器插件 */}
        <section id="extension">
          <h2 className="text-title font-semibold text-fg">4. 浏览器插件：顺手但需甄别 / Browser extensions</h2>
          <p className="mt-2 text-fg-secondary">
            装个扩展，右键就能合并 PDF。方便是真方便，但要注意：有些插件只是把文件转发到远程 API 的壳，隐私风险和在线网站一样。装之前看权限清单和隐私政策，优先选明确声明本地处理的。
          </p>
        </section>

        {/* 编程库 */}
        <section id="library">
          <h2 className="text-title font-semibold text-fg">5. 编程语言库：最灵活 / Programming libraries</h2>
          <p className="mt-2 text-fg-secondary">
            Python 的 pypdf、Node 的 pdf-lib、Java 的 PDFBox……如果你的产品需要合并 PDF，直接用库最灵活，完全掌控数据流向。PDFMergeNext 的合并逻辑就是基于 pdf.js + pdf-lib 实现的。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-fg-secondary">
            <li><strong>优点</strong>：完全可控、可定制、可嵌入任何应用。</li>
            <li><strong>缺点</strong>：需要写代码，普通用户用不上。</li>
          </ul>
        </section>

        {/* 对比表 */}
        <section id="compare">
          <h2 className="text-title font-semibold text-fg">横向对比 / Side-by-side</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-subtle text-left text-fg">
                  <th className="border border-line px-3 py-2">维度</th>
                  <th className="border border-line px-3 py-2">在线（本地）</th>
                  <th className="border border-line px-3 py-2">在线（云端）</th>
                  <th className="border border-line px-3 py-2">桌面</th>
                  <th className="border border-line px-3 py-2">命令行</th>
                </tr>
              </thead>
              <tbody className="text-fg-secondary">
                <tr>
                  <td className="border border-line px-3 py-2 font-medium text-fg">隐私</td>
                  <td className="border border-line px-3 py-2">高（不上传）</td>
                  <td className="border border-line px-3 py-2">低（上传服务器）</td>
                  <td className="border border-line px-3 py-2">高</td>
                  <td className="border border-line px-3 py-2">高</td>
                </tr>
                <tr>
                  <td className="border border-line px-3 py-2 font-medium text-fg">成本</td>
                  <td className="border border-line px-3 py-2">免费</td>
                  <td className="border border-line px-3 py-2">免费/付费</td>
                  <td className="border border-line px-3 py-2">付费居多</td>
                  <td className="border border-line px-3 py-2">免费</td>
                </tr>
                <tr>
                  <td className="border border-line px-3 py-2 font-medium text-fg">易用性</td>
                  <td className="border border-line px-3 py-2">★★★★★</td>
                  <td className="border border-line px-3 py-2">★★★★★</td>
                  <td className="border border-line px-3 py-2">★★★★</td>
                  <td className="border border-line px-3 py-2">★★</td>
                </tr>
                <tr>
                  <td className="border border-line px-3 py-2 font-medium text-fg">批量能力</td>
                  <td className="border border-line px-3 py-2">★★★</td>
                  <td className="border border-line px-3 py-2">★★★</td>
                  <td className="border border-line px-3 py-2">★★★★</td>
                  <td className="border border-line px-3 py-2">★★★★★</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-line bg-subtle p-6">
          <h2 className="text-title font-semibold text-fg">不想折腾？直接用本地在线工具</h2>
          <p className="mt-2 text-fg-secondary">
            <Link href="/" className="text-brand hover:underline">PDFMergeNext</Link> 在浏览器里本地合并，不上传、免注册、无水印。想了解隐私机制可以读{' '}
            <Link href="/blog/why-local-offline-pdf-merge" className="text-brand hover:underline">本地离线合并的优势</Link>
            ，或对比{' '}
            <Link href="/blog/pdfmergenext-vs-smallpdf-vs-ilovepdf" className="text-brand hover:underline">PDFMergeNext vs Smallpdf vs iLovePDF</Link>
            。
          </p>
          <Link
            href="/"
            className="mt-4 inline-block rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-on-primary transition-colors duration-fast hover:bg-brand-hover"
          >
            开始合并 →
          </Link>
        </section>

        {/* 可见 FAQ 段 */}
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
          <Link
            href="/blog/privacy-first-pdf-workflow"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">隐私友好的 PDF 工作流设计</p>
            <p className="mt-1 text-xs text-fg-secondary">4 Stages, Zero Upload</p>
          </Link>
          <Link
            href="/blog/how-to-merge-pdf-without-uploading"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">如何不上传合并 PDF</p>
            <p className="mt-1 text-xs text-fg-secondary">可验证的完整指南 / Verifiable Guide</p>
          </Link>
          <Link
            href="/blog/merge-pdf-no-upload"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">合并PDF不上传：本地离线的安全方案</p>
            <p className="mt-1 text-xs text-fg-secondary">Merge PDF Without Uploading</p>
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
    </article>
  );
}
