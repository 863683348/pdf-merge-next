import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';

export const metadata: Metadata = {
  title: 'Compress PDF Without Uploading — Local Shrink Guide',
  description:
    'Email attachment too big? Compress PDFs locally in your browser — no upload, no sign-up, no watermark. Tips: shrink before merging, trim pages first.',
  keywords: [
    'compress pdf',
    '压缩 PDF',
    'reduce pdf size',
    'PDF 减小体积',
    'compress pdf no upload',
    'local pdf compress',
    'PDFMergeNext 压缩',
  ],
  alternates: {
    canonical: '/blog/compress-pdf-local-no-upload',
    languages: {
      'zh-CN': '/blog/compress-pdf-local-no-upload',
      'en-US': '/blog/compress-pdf-local-no-upload',
      'x-default': '/blog/compress-pdf-local-no-upload',
    },
  },
  openGraph: {
    title: 'Compress PDF Without Uploading — Local Shrink Guide',
    description:
      'Compress PDFs locally in your browser — no upload, no sign-up, no watermark. Tips inside.',
    type: 'article',
    url: `${SITE_URL}/blog/compress-pdf-local-no-upload`,
    siteName: 'PDFMergeNext',
    publishedTime: '2026-09-02T00:00:00.000Z',
    images: [{ url: `${SITE_URL}/og`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress PDF Without Uploading — Local Shrink Guide',
    description: 'Compress PDFs locally in your browser — no upload, no sign-up, no watermark.',
    images: [`${SITE_URL}/og`],
  },
};

const FAQ_EN = [
  {
    q: 'Is local compression as good as online tools?',
    a: 'For text-heavy and redundant PDFs, in-browser re-serialization shrinks them noticeably. Image-only scans that are already compressed have less headroom — an honest limit of doing it locally.',
  },
  {
    q: 'Does compression lose quality?',
    a: 'No. We repackage the PDF rather than re-encode images, so page content and resolution are preserved.',
  },
];
const FAQ_ZH = [
  {
    q: '本地压缩比得上在线工具吗？',
    a: '对文本型、含重复对象的 PDF，浏览器内重新序列化能明显减小体积；已经是高压缩的图片型扫描件提升有限——这是本地处理的真实边界。',
  },
  {
    q: '压缩会损失质量吗？',
    a: '不会。我们是重新打包而非重编码图像，页面内容与分辨率都保留。',
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
            name: 'Compress PDF Without Uploading / 压缩 PDF 不上传',
            item: `${SITE_URL}/blog/compress-pdf-local-no-upload`,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          ...FAQ_EN.map((it) => ({ '@type': 'Question', name: it.q, acceptedAnswer: { '@type': 'Answer', text: it.a } })),
          ...FAQ_ZH.map((it) => ({ '@type': 'Question', name: it.q, acceptedAnswer: { '@type': 'Answer', text: it.a } })),
        ],
      },
      {
        '@type': 'Article',
        headline: 'Compress PDF Without Uploading / 压缩 PDF 不上传',
        description:
          'How to compress PDFs locally in your browser: no upload, no sign-up, no watermark. Plus practical shrink-before-you-merge tips. 在浏览器本地压缩 PDF 的指南：文件不上传、免注册、无水印，附合并前先压的小技巧。',
        author: { '@type': 'Person', name: 'PDFMergeNext', url: 'https://pdfmergenext.shop', '@id': 'https://pdfmergenext.shop/#organization' },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-09-02',
        dateModified: '2026-09-02',
        image: `${SITE_URL}/og`,
        url: `${SITE_URL}/blog/compress-pdf-local-no-upload`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/compress-pdf-local-no-upload` },
      },
    ],
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="mb-6 text-sm text-fg-muted" aria-label="Breadcrumb">
        <a href="/" className="hover:underline">首页 / Home</a>
        {' › '}
        <a href="/blog" className="hover:underline">博客 / Blog</a>
        {' › '}
        <span>Compress PDF Without Uploading</span>
      </nav>

      <h1 className="text-3xl font-bold leading-tight">
        Compress PDF Without Uploading / 压缩 PDF 不上传
      </h1>
      <p className="mt-2 text-sm text-fg-muted">更新于 2026-09-02 · 阅读约 5 分钟 / 5 min read</p>

      <div className="my-6 rounded-lg bg-subtle p-4 text-sm leading-relaxed">
        <strong className="block mb-1">快速结论 / TL;DR</strong>
        邮件附件太大？在浏览器里本地压缩 PDF，文件不上传服务器、免注册、无水印。先挑页再压、合并前先压，效果最好。Email attachment too big? Compress the PDF locally in your browser — no upload, no sign-up, no watermark. Trim pages first and shrink before merging for the best results.
      </div>

      <div className="my-6 rounded-lg border border-primary/30 bg-primary/5 p-4 text-sm">
        <strong className="block mb-1 text-primary">直接上手 / Try it →</strong>
        <Link href="/compress-pdf" className="font-semibold text-primary underline">在浏览器里压缩 PDF</Link>
        —— 文件不上传、免注册、无水印。Compress PDFs right in your browser: no upload, no sign-up, no watermark.
      </div>

      <h2 className="text-2xl font-semibold mt-10">为什么要在本地压缩 / Why compress locally</h2>
      <p className="mt-3">
        在线压缩工具大多先把手件传到它们的服务器再处理——对合同、证件、报表这类敏感文件，这意味着内容先离开你的设备。本地压缩让文件始终待在浏览器里，服务器无从获取。Online compressors usually upload your file to their server first. For contracts, IDs, and financial scans, that means the content leaves your device. Local compression keeps the file in the browser; the server never sees it.
      </p>

      <h2 className="text-2xl font-semibold mt-10">两个让压缩更有效的习惯 / Two habits that help</h2>
      <ul className="mt-3 list-inside space-y-1">
        <li><strong>先挑页再压：</strong> 一份 50 页合同你只需发签字页和附件？用 <Link href="/split-pdf" className="text-primary hover:underline">拆分工具</Link> 取出需要的几页，体积自然大幅缩小。Trim first: only need the signature page? Use the <Link href="/split-pdf" className="text-primary hover:underline">split tool</Link> to extract just what you need.</li>
        <li><strong>合并前先压：</strong> 多个大 PDF 要合并？先各自本地压缩，再合并，最终文件比「先合并再压」更可控。Shrink before merging: compress each large PDF locally, then merge — cleaner than merging first.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10">本地压缩的真实边界 / The honest limit</h2>
      <p className="mt-3">
        浏览器内的压缩做的是「重新序列化」：去除冗余对象、压缩交叉引用流。对文本型、含重复资源的 PDF 效果明显；对已经高度压缩的图片型扫描件，能减小的空间有限。这和在线工具的物理限制一致，但本地处理不会把你的内容交给任何第三方。In-browser compression re-serializes the file — trimming redundant objects, compressing cross-reference streams. Text-heavy PDFs shrink a lot; already-compressed image scans have less room. The limit is the same as online tools, but local processing never hands your content to a third party.
      </p>

      <h2 className="text-2xl font-semibold mt-10">常见问题 / FAQ</h2>
      <div className="mt-4 space-y-4">
        <div>
          <p className="font-semibold">本地压缩比得上在线工具吗？</p>
          <p>对文本型、含重复对象的 PDF，浏览器内重新序列化能明显减小体积；已经是高压缩的图片型扫描件提升有限——这是本地处理的真实边界。For text-heavy and redundant PDFs, in-browser re-serialization shrinks them noticeably. Image-only scans that are already compressed have less headroom — an honest limit of doing it locally.</p>
        </div>
        <div>
          <p className="font-semibold">压缩会损失质量吗？</p>
          <p>不会。我们是重新打包而非重编码图像，页面内容与分辨率都保留。No. We repackage the PDF rather than re-encode images, so page content and resolution are preserved.</p>
        </div>
      </div>

      <div className="mt-8 rounded-lg bg-subtle p-4 text-sm leading-relaxed">
        <strong className="block mb-1">相关工具 / Related tools</strong>
        <ul className="space-y-1">
          <li><Link href="/compress-pdf" className="text-primary hover:underline">压缩 PDF / Compress PDF</Link> — 浏览器本地瘦身</li>
          <li><Link href="/split-pdf" className="text-primary hover:underline">拆分 PDF / Split PDF</Link> — 先挑页再压更小</li>
          <li><Link href="/" className="text-primary hover:underline">合并 PDF / Merge PDF</Link> — 合并前先压更可控</li>
          <li><Link href="/blog/privacy-first-pdf-workflow" className="text-primary hover:underline">隐私工作流 / Privacy Workflow</Link> — 文件不出本机的完整思路</li>
        </ul>
      </div>
    </article>
  );
}
