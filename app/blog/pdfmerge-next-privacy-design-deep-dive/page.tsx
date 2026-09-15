import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';
const SLUG = 'pdfmerge-next-privacy-design-deep-dive';
const TITLE = "PDFMergeNext 隐私设计白皮书 / PDFMergeNext Privacy Design Deep Dive";
const DESC = "把文件留在浏览器里不等于自动安全。这篇拆解 PDFMergeNext 的实际数据处理路径：文件去哪、内存里发生什么、哪些环节仍然是风险点。";

const BODY_ZH = "把文件留在浏览器里处理，是隐私优先工具最常见的说法。但「没有上传」只是隐私设计的一部分，不是全部。这篇把 PDFMergeNext 的实际数据处理路径完整拆开。<h2>文件去哪了</h2>选择文件之后，文件不会离开你的设备。浏览器通过文件选择器读取本地文件，把它作为一个可读对象交给页面。合并过程用 WebAssembly 在同一个标签页里完成。全程没有上传接口，页面加载完成后即使断网也能正常工作。<h2>内存里发生了什么</h2>合并不是把整个文件复制一遍再改写，而是按页读取、按顺序写入一个新的 PDF 对象。这意味着峰值内存大致等于输出文件的大小，而不是输入文件总和。合并 20 个 10MB 的文件，峰值内存接近输出体积，而不是 200MB。<h2>剩下哪些风险点</h2><ul><li>浏览器扩展。扩展可以读取页面内容，这是本地处理工具最大的暴露面。</li><li>设备本身。共享电脑上的临时文件和浏览器缓存仍然可能存在。</li><li>下载目录。输出文件落盘之后，它就回到了普通文件的保护水平。</li><li>远程字体和统计分析脚本。任何外部资源都是潜在的数据出口。</li></ul><h2>怎么自己验证</h2>打开浏览器开发者工具，切到 Network 面板，然后合并一个文件。观察是否有请求携带了文档内容。这是最直接的方法，也不需要相信任何一方的说法。<h2>为什么这样设计</h2>上传式工具的问题不在于厂商是否可信，而在于一旦文件离开设备，你就失去了对它的控制。本地处理把这个问题从「信任」变成「不需要信任」。代价是更高的设备要求，以及页面必须保持打开。<p>想看具体的合并步骤，回到<a href=\"/\">首页</a>，或者读<a href=\"/blog\">博客</a>里关于离线限制的那一篇。</p>";

export const metadata: Metadata = {
  title: TITLE + ' | PDFMergeNext',
  description: DESC,
  keywords: ['PDFMergeNext privacy', 'privacy-first PDF tool', 'client-side PDF merge', 'browser PDF privacy', 'local PDF processing', 'PDFMergeNext'],
  alternates: {
    canonical: '/blog/' + SLUG,
    languages: {
      'zh-CN': '/blog/' + SLUG,
      'en-US': '/blog/' + SLUG,
      'x-default': '/blog/' + SLUG,
    },
  },
  openGraph: {
    title: TITLE,
    description: DESC,
    type: 'article',
    url: `${SITE_URL}/blog/${SLUG}`,
    siteName: 'PDFMergeNext',
    publishedTime: '2026-09-15T00:00:00.000Z',
    images: [{ url: `${SITE_URL}/og`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
    images: [`${SITE_URL}/og`],
  },
};

const FAQ = [
  { q: "Do files ever leave my device?", a: "No. Merging runs inside the browser tab using WebAssembly. There is no upload step, and the page works with the network disconnected after it loads." },
  { q: "Is browser memory safer than a server?", a: "It removes the server as a risk. It does not remove your own device as a risk, which is why the browser sandbox and local disk permissions still matter." },
  { q: "Why does the page need to stay open while merging?", a: "Because the work happens locally. Closing the tab ends the process, and nothing has been saved anywhere to resume from." },
  { q: "Can I verify the claim myself?", a: "Yes. Open the browser developer tools, switch to the Network tab, and merge a file. No request carries your document." },
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
          { '@type': 'ListItem', position: 3, name: TITLE, item: `${SITE_URL}/blog/${SLUG}` },
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
        headline: TITLE,
        description: DESC,
        author: { '@type': 'Person', name: 'PDFMergeNext', url: SITE_URL },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-09-15',
        dateModified: '2026-09-15',
        image: `${SITE_URL}/og`,
        url: `${SITE_URL}/blog/${SLUG}`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${SLUG}` },
      },
    ],
  };

  return (
    <article className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-16">
      <header>
        <p className="text-caption font-semibold uppercase tracking-wide text-brand">法律实务 · Legal</p>
        <h1 className="mt-2 text-h1 font-bold tracking-tight text-fg">{TITLE}</h1>
        <p className="mt-3 text-body text-fg-secondary">{DESC}</p>
        <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-subtle px-3 py-1 text-caption font-medium text-fg-muted">
          阅读约 6 分钟 · 6 min read
        </p>
      </header>

      <div className="mt-8 space-y-6 text-body text-fg">
        <div
          className="space-y-4 text-fg-secondary [&_h2]:mt-6 [&_h2]:text-title [&_h2]:font-semibold [&_h2]:text-fg [&_ul]:list-disc [&_ul]:pl-5 [&_table]:w-full [&_table]:text-sm [&_td]:py-2 [&_th]:py-2 [&_th]:text-left [&_a]:text-brand [&_a]:underline"
          dangerouslySetInnerHTML={{ __html: BODY_ZH }}
        />

        <section className="rounded-xl border border-line bg-subtle p-6">
          <h2 className="text-title font-semibold text-fg">立即合并</h2>
          <p className="mt-2 text-fg-secondary">在浏览器本地完成合并，文件不离开你的设备。</p>
          <Link
            href="/"
            className="mt-4 inline-block rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-on-primary transition-colors duration-fast hover:bg-brand-hover"
          >
            打开 PDFMergeNext →
          </Link>
        </section>

        <section id="faq" className="rounded-xl border border-line p-6">
          <h2 className="text-title font-semibold text-fg">常见问题</h2>
          <div className="mt-4 space-y-4">
            {FAQ.map((it) => (
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

      <section className="mx-auto mt-12 max-w-content px-4 sm:px-6">
        <h2 className="text-title font-semibold text-fg">相关阅读 / Related</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Link href="/blog/privacy-first-pdf-workflow" className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle">
            <p className="text-sm font-semibold text-fg">隐私优先的 PDF 工作流</p>
            <p className="mt-1 text-xs text-fg-secondary">Privacy-first PDF workflow</p>
          </Link>
          <Link href="/blog/client-side-vs-server-side-pdf-tools" className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle">
            <p className="text-sm font-semibold text-fg">客户端 vs 服务端 PDF 工具</p>
            <p className="mt-1 text-xs text-fg-secondary">Architecture compared</p>
          </Link>
        </div>
      </section>
    </article>
  );
}
