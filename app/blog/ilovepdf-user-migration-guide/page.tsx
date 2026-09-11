import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';

export const metadata: Metadata = {
  title: 'iLovePDF User Migration Guide | PDFMergeNext',
  description:
    'Which PDF tasks move cleanly to a local tool, which still need an online service, and the one migration step people always skip. 习惯用 iLovePDF 却在意文件隐私？这份迁移指南讲清哪些任务能搬到本地，以及迁移时最容易忽略的一步。',
  keywords: [
    'ilovepdf alternative',
    'ilovepdf migration',
    'iLovePDF 替代',
    'local pdf tool',
    'privacy first pdf',
    'PDFMergeNext',
  ],
  alternates: {
    canonical: '/blog/ilovepdf-user-migration-guide',
    languages: {
      'zh-CN': '/blog/ilovepdf-user-migration-guide',
      'en-US': '/blog/ilovepdf-user-migration-guide',
      'x-default': '/blog/ilovepdf-user-migration-guide',
    },
  },
  openGraph: {
    title: 'iLovePDF User Migration Guide · PDFMergeNext',
    description:
      'Moving everyday PDF work back to your own machine — what to migrate, what to keep online, and the step everyone skips.',
    type: 'article',
    url: `${SITE_URL}/blog/ilovepdf-user-migration-guide`,
    siteName: 'PDFMergeNext',
    publishedTime: '2026-09-11T00:00:00.000Z',
    images: [{ url: `${SITE_URL}/og`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iLovePDF User Migration Guide · PDFMergeNext',
    description:
      'What to migrate locally, what to keep online, and the step everyone skips.',
    images: [`${SITE_URL}/og`],
  },
};

const FAQ = [
  {
    q: 'Will a local PDF tool choke on large files?',
    a: 'Merge and compress are mostly memory-bound. Anything under about 1GB runs smoothly on a normal laptop; split larger files into batches.',
  },
  {
    q: 'Can a local tool do OCR?',
    a: 'Yes, but quality varies. It is fine for everyday use; for important documents a mature online service is still the safer call.',
  },
  {
    q: 'Do I have to stop using iLovePDF?',
    a: 'No. Migration is not either/or — keep low-frequency tasks online and move the high-frequency ones somewhere safer.',
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
            name: 'iLovePDF User Migration Guide / iLovePDF 用户迁移指南',
            item: `${SITE_URL}/blog/ilovepdf-user-migration-guide`,
          },
        ],
      },
      {
        '@type': 'Article',
        headline: 'iLovePDF User Migration Guide: Moving PDF Work Back to Your Machine',
        description:
          'Which PDF tasks move cleanly to a local tool, which still need an online service, and the one migration step people always skip.',
        datePublished: '2026-09-11',
        dateModified: '2026-09-11',
        inLanguage: ['en', 'zh-CN'],
        mainEntityOfPage: `${SITE_URL}/blog/ilovepdf-user-migration-guide`,
        author: { '@type': 'Organization', name: 'PDFMergeNext' },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
      },
      {
        '@type': 'FAQPage',
        mainEntity: FAQ.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:underline">首页 / Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:underline">博客 / Blog</Link>
      </nav>

      <h1 className="text-3xl font-bold mb-2">iLovePDF 用户迁移指南：把 PDF 处理搬回本地</h1>
      <p className="text-xl text-gray-600 mb-6">
        iLovePDF User Migration Guide: Moving PDF Work Back to Your Machine
      </p>
      <p className="text-sm text-gray-400 mb-8">2026-09-11 · PDFMergeNext</p>

      <article className="space-y-6 leading-relaxed">
        <section dangerouslySetInnerHTML={{ __html: `<p>iLovePDF 是很多人接触在线 PDF 工具的第一个入口：界面干净、功能全、免费额度够用。但当你要处理合同、发票、身份证扫描件这类文件时，「上传到别人的服务器」这件事就开始硌人了。这份指南讲的是怎么把日常的 PDF 处理逐步搬回本地。</p>

<h2>哪些任务可以立刻搬到本地</h2>
<p>合并、拆分、压缩、旋转、加水印，这几项是完全确定的，本地工具做得一样好甚至更快。原因很简单：这些操作靠的是算法，不需要大规模的算力或模型。</p>
<ul>
<li><strong>合并与拆分</strong>：纯结构操作，本地秒级完成。</li>
<li><strong>压缩</strong>：把图片重采样并调整质量，本地跑得动。</li>
<li><strong>旋转、重排、删页</strong>：不涉及内容识别，本地没有任何劣势。</li>
<li><strong>加水印与页码</strong>：模板化操作，本地更可控。</li>
</ul>

<h2>哪些任务在线服务仍然更强</h2>
<p>OCR 识别、PDF 转 Office、复杂的电子签名流程，这几项目前在线服务仍有优势。OCR 依赖模型质量和算力，浏览器里跑完整版 OCR 体验还不到位；转 Office 对排版还原度要求高，在线服务打磨得更久。</p>
<p>判断标准可以很简单：如果任务需要「理解内容」，在线更强；如果只是「搬运内容」，本地就够了。</p>

<h2>迁移的正确顺序</h2>
<ol>
<li><strong>先统计</strong>：翻一下最近的下载记录，看你 80% 的操作是哪两三件。</li>
<li><strong>先搬高频的</strong>：通常就是合并和压缩。这两项搬完，你的日常已经少了大半上传。</li>
<li><strong>留下低频的在线</strong>：OCR 这类一个月才用一次的任务，继续用在线服务并不矛盾。</li>
<li><strong>改收藏夹</strong>：把书签里的在线工具换成本地工具，习惯靠入口养成。</li>
</ol>

<h2>最容易忽略的一步</h2>
<p>很多人只是换了工具，却忘了清理已经在云端的文件。iLovePDF 这类服务通常会在几小时后自动删除文件，但如果你用过需要登录的账号，历史记录里可能还留着文件名列表。迁移时顺手检查一下账户的「历史文件」，并把它清空。</p>

<h2>常见问题</h2>
<p><strong>本地工具处理大文件会不会卡？</strong>合并和压缩主要吃内存，1GB 以内的文件在普通笔记本上都流畅。超大文件建议分批。</p>
<p><strong>本地工具能做 OCR 吗？</strong>能，但识别质量参差不齐。日常够用，处理重要文件时仍建议用成熟的在线服务。</p>
<p><strong>迁移后还能用 iLovePDF 吗？</strong>当然可以。迁移不是二选一，而是把高频操作放到更安全的地方。</p>

<h2>关于 PDFMergeNext</h2>
<p>在浏览器里本地合并、拆分、压缩 PDF。访问我们的<a href="/">首页</a>直接开始，或看<a href="/blog">博客</a>了解更多隐私优先的工作流。</p>` }} />
        <hr className="my-10" />
        <section dangerouslySetInnerHTML={{ __html: `<p>iLovePDF is where a lot of people meet online PDF tools for the first time: clean interface, broad feature set, a free tier that actually works. But the moment you are handling contracts, invoices, or a scan of your ID, "upload it to someone else's server" starts to itch. This guide is about moving your everyday PDF work back to your own machine, step by step.</p>

<h2>Tasks you can move today</h2>
<p>Merge, split, compress, rotate, watermark. These are settled: a local tool does them just as well, often faster. The reason is simple — they are algorithm work, not compute or model work.</p>
<ul>
<li><strong>Merge and split</strong>: pure structure operations, done in seconds locally.</li>
<li><strong>Compress</strong>: resample images and adjust quality; a local machine handles it fine.</li>
<li><strong>Rotate, reorder, delete pages</strong>: no content understanding involved, so local has no downside.</li>
<li><strong>Watermarks and page numbers</strong>: template operations, and local gives you more control.</li>
</ul>

<h2>Tasks where online still wins</h2>
<p>OCR, PDF-to-Office conversion, and complex e-signature flows. OCR depends on model quality and compute, and full OCR in the browser is not there yet. Conversion to Office lives or dies on layout fidelity, and online services have had longer to polish it.</p>
<p>A simple rule of thumb: if the task needs to <em>understand</em> the content, online is stronger. If it just <em>moves</em> the content, local is enough.</p>

<h2>The right migration order</h2>
<ol>
<li><strong>Count first</strong>: look at your recent downloads and find the two or three operations that make up 80% of your usage.</li>
<li><strong>Move the high-frequency ones first</strong>: usually merge and compress. Once those are local, most of your uploading is gone.</li>
<li><strong>Leave low-frequency work online</strong>: if you OCR something once a month, keeping that online is not a contradiction.</li>
<li><strong>Update your bookmarks</strong>: replace the online tool with the local one. Habits follow entry points.</li>
</ol>

<h2>The step everyone skips</h2>
<p>Most people swap the tool and forget the files already in the cloud. Services like iLovePDF typically delete files after a few hours, but if you ever used a logged-in account, a list of filenames may still sit in your history. While you migrate, check the account's file history and clear it.</p>

<h2>FAQ</h2>
<p><strong>Will a local tool choke on large files?</strong> Merge and compress are mostly memory-bound. Anything under 1GB runs smoothly on a normal laptop; split larger files into batches.</p>
<p><strong>Can a local tool do OCR?</strong> Yes, but quality varies. Fine for everyday use; for important documents, a mature online service is still the safer call.</p>
<p><strong>Do I have to stop using iLovePDF?</strong> Not at all. Migration is not either/or — it is about putting your high-frequency work somewhere safer.</p>

<h2>About PDFMergeNext</h2>
<p>Merge, split, and compress PDFs locally in your browser. Start on our <a href="/">homepage</a>, or read the <a href="/blog">blog</a> for more privacy-first workflows.</p>` }} />
      </article>

      <section className="mt-12 border-t pt-8">
        <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
        <dl className="space-y-4">
          {FAQ.map((f) => (
            <div key={f.q}>
              <dt className="font-medium">{f.q}</dt>
              <dd className="text-gray-600">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-12 rounded-xl bg-gray-50 p-6">
        <p className="mb-3">合并、拆分、压缩 PDF，全部在浏览器本地完成。</p>
        <Link href="/" className="inline-block rounded-lg bg-black px-5 py-2.5 text-white">
          开始本地处理 PDF →
        </Link>
      </section>
    </main>
  );
}
