import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';
const SLUG = 'legal-contract-pdf-merge-guide';
const TITLE = "法律合同合并：律师的 PDF 工具指南 / Legal Contract Merge: A Guide for Lawyers";
const DESC = "合同、附件、签署页要合成一份时，律师真正该关心的不是速度，而是可追溯性、页码连续和文件不外流。这篇讲清具体做法。";

const BODY_ZH = "<h2>法律合同合并：律师的 PDF 工具指南</h2><p>把主协议、附件和签署页合成一份 PDF，看起来是个五分钟的操作。但在法律实务里，这件事的风险点不在速度，而在三件容易被忽略的事：页码是否连续、文件去了哪里、以及合并之后能不能追溯改了什么。</p><h2>页码顺序比合并顺序重要</h2><p>最常见的错误是先合并再统一编页码。结果是签署页的页码和它实际所在位置对不上，一旦有人引用「第 12 页」，指向的可能是附件而不是正文。</p><p>正确顺序是：每一段单独编页，再做合并。这样每部分的页码在合并前就已经固定，合并只是把段落按顺序摆好。</p><h2>文件不要离开你的设备</h2><p>保密义务不会因为你用了哪个工具而改变。把客户文件上传到第三方服务器，意味着你要能解释那台服务器在哪里、日志保留多久、谁有访问权限。多数在线 PDF 工具的隐私政策回答不了这些问题。</p><ul><li>本地处理：文件在浏览器里完成合并，不上传</li><li>可解释：没有传输就没有服务器日志</li><li>可复核：整个操作在你的机器上留下记录</li></ul><h2>合并前的检查清单</h2><table><tr><th>检查项</th><th>为什么</th></tr><tr><td>每段页码已固定</td><td>避免合并后引用错页</td></tr><tr><td>附件顺序与目录一致</td><td>目录是读者的导航，顺序错等于目录作废</td></tr><tr><td>签署页放在要求的位置</td><td>按对方要求或内部模板</td></tr><tr><td>扫描件可读</td><td>不可检索的扫描件合并不解决问题</td></tr><tr><td>文件名规范</td><td>便于归档和检索</td></tr></table><h2>关于电子签名的顺序</h2><p>如果合同要走电子签名平台，先合并再签通常更省事，因为签署位置固定在最终文件上。反过来先签再合并，签署页和正文的关联会在合并时断开。</p><h2>常见问题</h2><ul><li><strong>合并合同和附件会不会破坏页码？</strong> 会，如果先合并再编页码。正确顺序是先按段编页，再合并。</li><li><strong>客户文件上传到在线工具合规吗？</strong> 通常有风险。保密义务要求你把文件控制在可解释的范围内，第三方服务器很难解释。</li><li><strong>签署页必须在最后吗？</strong> 不一定。按对方要求或内部模板定，关键是签署页上的页码要和其他部分连续。</li><li><strong>扫描件能直接合并吗？</strong> 可以，但先确认可读。低质量扫描件合并后仍然不可检索，问题不会消失。</li></ul><p>在浏览器本地完成合并，文件不离开你的设备。打开<a href=\"/\">PDFMergeNext</a>拖入文件即可，或到<a href=\"/blog\">博客</a>读更多实务流程。</p>";

export const metadata: Metadata = {
  title: TITLE + ' | PDFMergeNext',
  description: DESC,
  keywords: ['legal pdf merge', '法律合同合并', 'lawyer pdf tools', 'contract pdf merge', 'pdf merge no upload', 'PDFMergeNext'],
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
  { q: "合并合同和附件会不会破坏页码？", a: "会，如果先合并再编页码。正确顺序是先按段编页，再合并。" },
  { q: "客户文件上传到在线工具合规吗？", a: "通常有风险。保密义务要求你把文件控制在可解释的范围内，第三方服务器很难解释。" },
  { q: "签署页必须在最后吗？", a: "不一定。按对方要求或内部模板定，关键是签署页上的页码要和其他部分连续。" },
  { q: "扫描件能直接合并吗？", a: "可以，但先确认可读。低质量扫描件合并后仍然不可检索，问题不会消失。" },
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
