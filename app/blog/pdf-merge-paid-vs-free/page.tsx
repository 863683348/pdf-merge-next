import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';

export const metadata: Metadata = {
  title: 'PDF 合并工具：付费 vs 免费对比 | PDFMergeNext',
  description:
    '免费 PDF 工具够用吗，还是该上付费？从文件大小、水印、隐私、批量处理四个维度逐项对比，帮你想清楚免费与付费合并工具的差别。Is a free PDF merger enough? File limits, watermarks, privacy and batch processing compared.',
  keywords: [
    'pdf merge paid vs free',
    '免费 pdf 合并',
    '付费 pdf 工具',
    'pdf 合并工具对比',
    'best pdf merge 2026',
    'free pdf merger',
    'paid pdf tools',
    '本地 pdf 合并',
  ],
  alternates: {
    canonical: '/blog/pdf-merge-paid-vs-free',
    languages: {
      'zh-CN': '/blog/pdf-merge-paid-vs-free',
      'en-US': '/blog/pdf-merge-paid-vs-free',
      'x-default': '/blog/pdf-merge-paid-vs-free',
    },
  },
  openGraph: {
    title: 'PDF 合并工具：付费 vs 免费对比 · PDFMergeNext',
    description:
      '免费 PDF 工具够用吗，还是该上付费？四个维度逐项对比：大小限制、水印、隐私、批量处理。',
    type: 'article',
    url: `${SITE_URL}/blog/pdf-merge-paid-vs-free`,
    siteName: 'PDFMergeNext',
    publishedTime: '2026-09-09T00:00:00.000Z',
    images: [{ url: `${SITE_URL}/og`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PDF 合并工具：付费 vs 免费对比 · PDFMergeNext',
    description: '大小限制、水印、隐私、批量处理四个维度，逐项对比免费与付费 PDF 合并工具。',
    images: [`${SITE_URL}/og`],
  },
};

const FAQ = [
  {
    q: '免费 PDF 合并工具安全吗？',
    a: '看情况。浏览器端工具（比如 PDFMergeNext）在本地处理，文件不出设备，是安全的。云端免费工具可能把你的文件上传到它们的服务器，处理敏感文件要避开。',
  },
  {
    q: 'What is the best free PDF merge tool?',
    a: 'For privacy, PDFMergeNext. It runs entirely in the browser with WebAssembly, so your files never leave your device: no upload, no account, no watermark.',
  },
  {
    q: '我真的需要付费工具吗？',
    a: '只有当你经常合并、需要批量处理，或者长期处理大文件时才需要。偶尔合并一两份，免费工具足够。',
  },
  {
    q: 'Do paid tools do anything free ones cannot?',
    a: 'Batch processing and very large files, mostly. Some add OCR or format conversion. If you merge occasionally, a free local tool covers the job.',
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
            name: 'PDF 合并工具：付费 vs 免费',
            item: `${SITE_URL}/blog/pdf-merge-paid-vs-free`,
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
        headline: 'PDF 合并工具：付费 vs 免费对比 / PDF Merge Tools: Paid vs Free',
        description:
          '免费与付费 PDF 合并工具逐项对比：文件大小限制、水印、隐私、批量处理。',
        author: { '@type': 'Person', name: 'PDFMergeNext', url: 'https://pdfmergenext.shop', '@id': 'https://pdfmergenext.shop/#organization' },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-09-09',
        dateModified: '2026-09-09',
        image: `${SITE_URL}/og`,
        url: `${SITE_URL}/blog/pdf-merge-paid-vs-free`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/pdf-merge-paid-vs-free` },
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
        <span>PDF 合并工具：付费 vs 免费</span>
      </nav>

      <h1 className="text-3xl font-bold leading-tight">
        PDF 合并工具：付费 vs 免费对比 / PDF Merge Tools: Paid vs Free
      </h1>
      <p className="mt-2 text-sm text-fg-muted">
        更新于 2026-09-09 · 阅读约 6 分钟 / 6 min read
      </p>

      <div className="my-6 rounded-lg bg-subtle p-4 text-sm leading-relaxed">
        <strong className="block mb-1">📋 快速结论 / TL;DR</strong>
        偶尔合并一两份 PDF，免费工具就够，优先选浏览器端本地处理的（如 PDFMergeNext），文件不上传、无水印。只有在需要批量处理、长期处理大文件，或者要 OCR、格式转换时，付费工具才划算。
      </div>

      <nav className="mb-8 rounded-lg border border-line p-4 text-sm">
        <strong className="block mb-2">📑 目录 / Contents</strong>
        <ul className="list-inside space-y-1">
          <li><a href="#free" className="text-primary hover:underline">1. 免费工具能做什么</a></li>
          <li><a href="#paid" className="text-primary hover:underline">2. 付费工具买的是什么</a></li>
          <li><a href="#compare" className="text-primary hover:underline">3. 逐项对比</a></li>
          <li><a href="#verdict" className="text-primary hover:underline">4. 结论</a></li>
          <li><a href="#faq" className="text-primary hover:underline">5. 常见问题</a></li>
        </ul>
      </nav>

      <h2 id="free" className="text-2xl font-semibold mt-10">
        1. 免费工具能做什么
      </h2>
      <p className="mt-3">
        免费 PDF 合并工具的优点是显而易见：零成本、适合偶尔使用、大多基于浏览器、无需安装。缺点也很固定：文件大小限制（常见 50MB）、输出带水印、云端处理带来隐私问题、批量处理能力有限。
      </p>
      <p className="mt-2">
        常见免费选项里，PDFMergeNext 基于浏览器本地处理，文件不出设备；iLovePDF 是在线工具，有 50MB 限制；Smallpdf 走免费增值路线。
      </p>

      <h2 id="paid" className="text-2xl font-semibold mt-10">
        2. 付费工具买的是什么
      </h2>
      <p className="mt-3">
        付费 PDF 工具卖的是没有限制的体验：无文件大小上限、支持批量处理、输出无水印、本地处理带来的更好隐私，以及优先支持。代价是成本，通常每月 $5 到 $30，对只是偶尔合并的人来说，功能明显过剩。
      </p>
      <p className="mt-2">
        常见付费选项包括 Adobe Acrobat Pro、PDFelement、PDFMaster。它们更适合把 PDF 当生产资料的人。
      </p>

      <h2 id="compare" className="text-2xl font-semibold mt-10">
        3. 逐项对比
      </h2>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-line">
              <th className="py-2 pr-4 text-left font-semibold">维度 / Aspect</th>
              <th className="py-2 pr-4 text-left font-semibold">免费工具</th>
              <th className="py-2 text-left font-semibold">付费工具</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-line"><td className="py-2 pr-4">费用</td><td className="py-2 pr-4">$0</td><td className="py-2">$5-30 / 月</td></tr>
            <tr className="border-b border-line"><td className="py-2 pr-4">文件大小</td><td className="py-2 pr-4">常有限制（约 50MB）</td><td className="py-2">无限制</td></tr>
            <tr className="border-b border-line"><td className="py-2 pr-4">水印</td><td className="py-2 pr-4">部分带水印</td><td className="py-2">无水印</td></tr>
            <tr className="border-b border-line"><td className="py-2 pr-4">隐私</td><td className="py-2 pr-4">本地工具安全，云端有风险</td><td className="py-2">本地处理，更可控</td></tr>
            <tr className="border-b border-line"><td className="py-2 pr-4">批量处理</td><td className="py-2 pr-4">有限</td><td className="py-2">支持</td></tr>
            <tr><td className="py-2 pr-4">适合</td><td className="py-2 pr-4">偶尔合并</td><td className="py-2">高频、大文件、团队</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="verdict" className="text-2xl font-semibold mt-10">
        4. 结论
      </h2>
      <ul className="mt-3 space-y-2">
        <li><strong>偶尔用户</strong>：从免费工具起步，优先选本地处理的 PDFMergeNext。</li>
        <li><strong>高频用户</strong>：需要无限合并和批量处理时，再考虑付费选项。</li>
        <li><strong>敏感文件</strong>：无论免费还是付费，都先确认文件没有上传到服务器。</li>
      </ul>

      <h2 id="faq" className="text-2xl font-semibold mt-10">
        5. 常见问题 / FAQ
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

      <section className="mt-10 rounded-lg border border-line bg-subtle p-6">
        <h2 className="text-lg font-semibold">关于 pdfmergenext.shop</h2>
        <p className="mt-2 text-sm leading-relaxed text-fg-muted">
          pdfmergenext.shop 是一个<strong>零上传</strong>的 PDF 合并工具：文件在你的浏览器本地用 WebAssembly 处理，绝不传到任何服务器，免费、无水印、无文件大小限制。
          想进一步比较在线工具，可以读我们对比 Smallpdf 与 iLovePDF 的<a href="/blog/pdfmergenext-vs-smallpdf-vs-ilovepdf" className="text-primary hover:underline">三方对比</a>，
          以及<a href="/blog/ilovepdf-alternatives-no-upload" className="text-primary hover:underline">iLovePDF 零上传替代</a>。
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-title font-semibold text-fg">相关阅读 / Related</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Link href="/blog/smallpdf-alternatives-privacy-first" className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle">
            <p className="text-sm font-semibold text-fg">Smallpdf 替代方案</p>
            <p className="mt-1 text-xs text-fg-secondary">五款隐私优先的本地工具</p>
          </Link>
          <Link href="/blog/pdfsam-vs-pdfmergenext" className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle">
            <p className="text-sm font-semibold text-fg">PDFsam vs PDFMergeNext</p>
            <p className="mt-1 text-xs text-fg-secondary">哪款更适合你</p>
          </Link>
          <Link href="/blog/ilovepdf-alternatives-no-upload" className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle">
            <p className="text-sm font-semibold text-fg">iLovePDF 替代方案</p>
            <p className="mt-1 text-xs text-fg-secondary">5 个零上传的本地工具</p>
          </Link>
          <Link href="/blog/compress-pdf-local-no-upload" className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle">
            <p className="text-sm font-semibold text-fg">压缩 PDF 不上传</p>
            <p className="mt-1 text-xs text-fg-secondary">浏览器本地瘦身指南</p>
          </Link>
        </div>
      </section>

      <div className="mt-10 rounded-lg bg-primary/5 p-6 text-center">
        <p className="text-lg font-semibold">👉 试试 PDFMergeNext</p>
        <p className="mt-1 text-sm text-fg-muted">
          零上传、无水印、无限制。合并任意数量 PDF，免费。
        </p>
        <a href="/" className="mt-3 inline-block rounded-lg bg-primary px-6 py-2 text-sm font-medium text-white hover:bg-primary/90">
          立即合并 / Merge Now
        </a>
      </div>
    </article>
  );
}
