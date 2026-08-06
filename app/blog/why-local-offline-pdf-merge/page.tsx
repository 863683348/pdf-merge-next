import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';

export const metadata: Metadata = {
  title: 'Why Local, Offline PDF Merging Wins on Privacy',
  description:
    'Online PDF mergers upload your files to a third-party server. A local, offline merger runs entirely in your browser — zero uploads, zero watermarks, and no sign-up required. Learn why privacy-first is the right default.',
  keywords: [
    'offline PDF merge',
    'local PDF merge',
    'private PDF merge',
    'no upload PDF merger',
    'watermark-free PDF merge',
    'merge pdf locally',
    'offline pdf merger',
    'private pdf merge',
    '本地 PDF 合并',
    '离线 PDF 合并',
  ],
  alternates: {
    canonical: '/blog/why-local-offline-pdf-merge',
    languages: {
      'zh-CN': '/blog/why-local-offline-pdf-merge',
      'en-US': '/blog/why-local-offline-pdf-merge',
      'x-default': '/blog/why-local-offline-pdf-merge',
    },
  },
  openGraph: {
    title: 'Why Local, Offline PDF Merging Wins on Privacy · PDFMergeNext',
    description: 'No upload, no server, no watermark. Keep contracts, IDs, and statements on your device.',
    url: `${SITE_URL}/blog/why-local-offline-pdf-merge`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Local, Offline PDF Merging Wins on Privacy · PDFMergeNext',
    description: 'No upload, no server, no watermark. Keep contracts, IDs, and statements on your device.',
  },
};

// 文章级 FAQ（与全局 FAQ 不重复），专门覆盖本文 PAA 长尾词，并配 FAQPage schema 抢精选摘要。
const ARTICLE_FAQ: { q: string; a: string }[] = [
  {
    q: '如何在不上传文件的情况下合并 PDF？',
    a: '使用纯浏览器端工具（如 PDFMergeNext）：文件在本地用 pdf.js 解析、用 pdf-lib 重组，全程不发起任何上传请求。服务器看不到内容，因此无需上传即可完成合并与下载。',
  },
  {
    q: '本地离线合并真的安全吗？',
    a: '是的。因为文件从不离开你的设备，不存在服务器被攻破、内部人员越权或数据被用于训练的风险。断网也能工作，进一步证明没有数据外传。',
  },
  {
    q: '免费版有什么限制？',
    a: '免费版即可日常合并、免注册、无水印；Pro 版提供更高的批量额度与优先支持。具体见定价页，但隐私与本地处理对所有版本一致。',
  },
  {
    q: '支持手机吗？',
    a: '支持。工具为响应式网页应用，在手机浏览器中即可拖入 PDF、排序并合并，无需安装 App，同样不上传文件。',
  },
];

const TOC = [
  { id: 'lead', label: '一句话结论 / TL;DR' },
  { id: 'privacy-risks', label: '在线合并工具的隐私隐患' },
  { id: 'how-it-works', label: '本地离线合并如何工作' },
  { id: 'who-should-use', label: '谁最应该用本地离线合并' },
  { id: 'beyond-privacy', label: '不止隐私：免注册、无水印、免费' },
  { id: 'myths', label: '常见误区' },
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
            name: '为什么选择本地离线 PDF 合并',
            item: `${SITE_URL}/blog/why-local-offline-pdf-merge`,
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
        headline: '为什么选择本地离线 PDF 合并？隐私优先才是正解',
        description:
          '为什么客户端 PDF 合并是唯一真正隐私安全的方案。涵盖 GDPR、HIPAA、中国个保法合规分析。',
        author: { '@type': 'Person', name: 'PDFMergeNext', url: 'https://pdfmergenext.shop', '@id': 'https://pdfmergenext.shop/#organization' },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-07-22',
        dateModified: '2026-07-27',
        image: `${SITE_URL}/og`,
        url: `${SITE_URL}/blog/why-local-offline-pdf-merge`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/why-local-offline-pdf-merge` },
      },
    ],
  };

  return (
    <article className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-16">
      <header>
        <p className="text-caption font-semibold uppercase tracking-wide text-brand">
          PDF 合并 · 隐私优先
        </p>
        <h1 className="mt-2 text-h1 font-bold tracking-tight text-fg">
          为什么选择本地离线 PDF 合并？隐私优先才是正解
        </h1>
        <p className="mt-3 text-body text-fg-secondary">
          Why choose a local, offline PDF merger? Because privacy-first is the right answer.
        </p>
        <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-subtle px-3 py-1 text-caption font-medium text-fg-muted">
          阅读约 5 分钟 · 5 min read
        </p>
      </header>

      {/* 目录锚点（降低跳出率 + 提升长文可读性） */}
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
        <section id="lead" className="rounded-xl border border-brand/30 bg-brand/5 p-6">
          <h2 className="text-title font-semibold text-fg">一句话结论</h2>
          <p className="mt-2 text-fg-secondary">
            本地离线 PDF 合并，指文件全程在你的浏览器内处理、<strong>不上传到任何服务器</strong>——合同、证件、财务报表等敏感文档不会被第三方看到。
            它通常同时做到<strong>免注册、无水印、可免费使用</strong>。如果你在意隐私，这是更稳妥的默认选项。
          </p>
          <p className="mt-2 text-fg-secondary">
            A local, offline PDF merger processes files entirely in your browser and never uploads them to any server —
            so contracts, IDs, and statements stay on your device. It’s usually also sign-up-free, watermark-free, and free to use.
          </p>
        </section>

        <section id="privacy-risks">
          <h2 className="text-title font-semibold text-fg">在线合并工具的隐私隐患</h2>
          <p className="mt-2 text-fg-secondary">
            大多数“免费在线 PDF 合并”会先把你的文件上传到服务商服务器，合并完成后再让你下载。
            这听起来方便，却意味着合同、身份证复印件、财务报表、病历等敏感文档，在一段时间内停留在别人的硬盘上。
            一旦服务器被攻破、内部人员越权访问或出于训练目的留存数据，后果难以挽回。
          </p>
          <p className="mt-2 text-fg-secondary">
            Online merge tools usually upload your files to a third-party server first. That means contracts,
            ID copies, and financial statements briefly live on someone else&apos;s disk — a risk no free feature is worth.
          </p>
        </section>

        <section id="how-it-works">
          <h2 className="text-title font-semibold text-fg">本地离线合并如何工作</h2>
          <p className="mt-2 text-fg-secondary">
            本地离线（local / offline）合并直接在你的浏览器里完成：解析用 pdf.js，重组用 pdf-lib，整个过程不发起任何上传请求。
            文件从你的硬盘读入内存，合并后立刻下载回本机，服务器全程“看不见”内容。这也是为什么它能在断网环境下工作。
          </p>
          <p className="mt-2 text-fg-secondary">
            A local offline merger runs entirely in your browser — parsing with pdf.js, re-assembly with pdf-lib,
            zero upload requests. The server never sees your content, which is also why it works fully offline.
          </p>
        </section>

        <section id="who-should-use">
          <h2 className="text-title font-semibold text-fg">谁最应该用本地离线合并</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-fg-secondary">
            <li>HR 与行政：合并员工合同、入职材料，避免敏感人事数据外泄。</li>
            <li>财务：月度报销单、对账单合并，涉及金额与账户信息。</li>
            <li>法务与律师：卷宗、证据页合并，受保密义务约束。</li>
            <li>个人：身份证、签证、房产证等证件扫描件整理。</li>
            <li>HR &amp; finance teams handling contracts, statements, and payroll packs.</li>
            <li>Legal professionals bound by confidentiality obligations.</li>
          </ul>
        </section>

        <section id="beyond-privacy">
          <h2 className="text-title font-semibold text-fg">不止隐私：免注册、无水印、免费</h2>
          <p className="mt-2 text-fg-secondary">
            很多人以为“安全”就要牺牲体验。其实本地工具往往同时做到了：免注册（不用填邮箱密码）、无水印（输出干净专业）、
            免费版即够日常使用。PDFMergeNext 在此基础上还支持拖拽排序、按页抽取、中英双语与手机端。
          </p>
          <p className="mt-2 text-fg-secondary">
            Local tools are often also the most frictionless: no sign-up, no watermark, and a free tier that covers daily use.
            PDFMergeNext adds drag-to-reorder, per-page extraction, bilingual UI, and mobile support.
          </p>
        </section>

        <section id="myths">
          <h2 className="text-title font-semibold text-fg">常见误区</h2>
          <p className="mt-2 text-fg-secondary">
            误区一：“本地工具更复杂。” 实际上现代网页工具打开即用，拖入文件、调整顺序、点击合并即可。
            误区二：“只有大文件才需要担心。” 哪怕一份普通合同，也可能包含姓名、电话、地址等可识别信息。
            只要涉及隐私，离线合并就是更稳妥的默认选项。
          </p>
        </section>

        <section className="rounded-xl border border-line bg-subtle p-6">
          <h2 className="text-title font-semibold text-fg">马上试试</h2>
          <p className="mt-2 text-fg-secondary">
            打开 PDFMergeNext，添加你的 PDF，几秒内在本机完成合并与下载——文件从不上传。
          </p>
          <Link
            href="/"
            className="mt-4 inline-block rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-on-primary transition-colors duration-fast hover:bg-brand-hover"
          >
            开始合并 →
          </Link>
        </section>

        {/* 可见 FAQ 段：抢 People Also Ask + 配 FAQPage schema */}
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
            <p className="mt-1 text-xs text-fg-secondary">How to Merge PDF Without Uploading (Step-by-Step)</p>
          </a>
          <a
            href="/blog/pdfmergenext-vs-smallpdf-vs-ilovepdf"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">PDFMergeNext vs Smallpdf vs iLovePDF</p>
            <p className="mt-1 text-xs text-fg-secondary">2026 隐私与限制全对比 / Honest 2026 Comparison</p>
          </a>
          <a
            href="/blog/why-local-pdf-merge-beats-online"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">为什么本地PDF合并比在线更安全</p>
            <p className="mt-1 text-xs text-fg-secondary">Why Local PDF Merge Beats Online — 7 Reasons</p>
          </a>
        </div>
      </section>
    </article>
  );
}
