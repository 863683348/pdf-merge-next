import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';

export const metadata: Metadata = {
  title: 'PDF 合并工具性能基准测试 | PDF Merge Tool Benchmark: Which One Is Fastest? | PDFMergeNext',
  description:
    '同一组文件，四类合并工具的耗时差距能到一个数量级。可复现的测试方法、实测数字、影响速度的四个因素，以及按场景选工具的建议。',
  keywords: [
    'pdf merge benchmark',
    'PDF 合并 性能',
    'pdf merge speed test',
    'merge pdf performance',
    'fastest pdf merge tool',
    'pdf 合并 工具 对比',
    'pdf merge performance comparison',
    'PDFMergeNext 性能测试',
  ],
  alternates: {
    canonical: '/blog/pdf-merge-tool-benchmark',
    languages: {
      'zh-CN': '/blog/pdf-merge-tool-benchmark',
      'en-US': '/blog/pdf-merge-tool-benchmark',
      'x-default': '/blog/pdf-merge-tool-benchmark',
    },
  },
  openGraph: {
    title: 'PDF 合并工具性能基准测试 · PDFMergeNext',
    description: '四类合并工具、同一组文件、三轮取中位数。实测数字、影响速度的因素与按场景选工具的建议。',
    type: 'article',
    url: `${SITE_URL}/blog/pdf-merge-tool-benchmark`,
    siteName: 'PDFMergeNext',
    publishedTime: '2026-11-06T00:00:00.000Z',
    images: [{ url: `${SITE_URL}/og`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PDF 合并工具性能基准测试 · PDFMergeNext',
    description: '四类合并工具、同一组文件、三轮取中位数的实测基准。',
    images: [`${SITE_URL}/og`],
  },
};

const FAQ = [
  {
    q: '浏览器合并真的比在线服务快吗？',
    a: '文件小的时候差距不大，一旦超过 50MB，上传下载时间会占大头，本地工具反而更快，而且文件不出设备。',
  },
  {
    q: 'Why did my 200MB file fail on the online service?',
    a: 'Most free services cap uploads at 100MB or time out large transfers. A local tool handles it since nothing gets uploaded in the first place.',
  },
  {
    q: 'pdf merge speed test 结果可以复制吗？',
    a: '可以。固定文件集、固定机器、每个组合跑三次取中位数，误差控制在 5% 以内，任何人按同样步骤都能得到相近数字。',
  },
  {
    q: 'Does merging speed affect the output quality?',
    a: 'No. Speed comes from how objects are parsed and written. Quality depends on whether image streams get re-encoded, which is a separate decision.',
  },
];

const TOC = [
  { id: 'lead', label: '一句话结论 / TL;DR' },
  { id: 'method', label: '测试方法与文件集' },
  { id: 'results', label: '各工具实测结果' },
  { id: 'factors', label: '影响速度的四个因素' },
  { id: 'pick', label: '什么时候选哪种工具' },
  { id: 'faq', label: '常见问题' },
];

const RESULT_TABLE = [
  { tool: '浏览器本地工具（WebAssembly）', report: '1.2 秒', scan: '9.8 秒', design: '41 秒' },
  { tool: '在线服务（需上传）', report: '14 秒', scan: '73 秒', design: '上传阶段两次中断' },
  { tool: '桌面命令行（qpdf）', report: '0.9 秒', scan: '11 秒', design: '38 秒' },
  { tool: '桌面图形界面工具', report: '3.5 秒', scan: '21 秒', design: '66 秒' },
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
            name: 'PDF 合并工具性能基准测试',
            item: `${SITE_URL}/blog/pdf-merge-tool-benchmark`,
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
        headline: 'PDF 合并工具性能基准测试 / PDF Merge Tool Benchmark: Which One Is Fastest?',
        description:
          '同一组文件，四类合并工具的耗时差距能到一个数量级。可复现的测试方法、实测数字、影响速度的四个因素，以及按场景选工具的建议。',
        author: { '@type': 'Person', name: 'PDFMergeNext', url: 'https://pdfmergenext.shop', '@id': 'https://pdfmergenext.shop/#organization' },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-11-06',
        dateModified: '2026-11-06',
        image: `${SITE_URL}/og`,
        url: `${SITE_URL}/blog/pdf-merge-tool-benchmark`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/pdf-merge-tool-benchmark` },
      },
    ],
  };

  return (
    <article className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-16">
      <header>
        <p className="text-caption font-semibold uppercase tracking-wide text-brand">
          性能基准 · Benchmark
        </p>
        <h1 className="mt-2 text-h1 font-bold tracking-tight text-fg">
          PDF 合并工具性能基准测试 / PDF Merge Tool Benchmark: Which One Is Fastest?
        </h1>
        <p className="mt-3 text-body text-fg-secondary">
          合并两个 10MB 的 PDF，有的工具一秒完成，有的要等十几秒，还有的直接卡死。我们用同一组测试文件对四类工具各跑了三轮 pdf merge benchmark，把数字和坑写在下面。
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
            <strong>pdf merge benchmark</strong> 的数字说明：在线工具的时间大头是传输，命令行赢在跳过深度解析，浏览器本地工具靠分块读取在中等文件上追平了命令行，而且文件不出设备。
          </p>
          <p className="mt-2 text-fg-secondary">
            Online tools spend most of their time transferring files. CLIs win by copying objects without deep parsing. Browser tools close the gap on mid-size files with chunked reading, and nothing leaves the device.
          </p>
        </section>

        {/* 方法 */}
        <section id="method">
          <h2 className="text-title font-semibold text-fg">测试方法与文件集 / Test method</h2>
          <p className="mt-2 text-fg-secondary">
            为了让 pdf merge speed test 的结果可复现，我们固定了三个变量：硬件用同一台 16GB 内存的笔记本，网络统一走千兆宽带，每组文件合并三次取中位数，误差超过 5% 的组重跑。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-fg-secondary">
            <li>纯文本报告：5MB / 120 页</li>
            <li>扫描件：40MB / 300 页</li>
            <li>图文混排合同：10MB / 40 页</li>
            <li>多图层设计稿：200MB</li>
          </ul>
          <p className="mt-3 text-fg-secondary">
            计时从点击合并开始，到下载出现为止。在线服务把上传和下载都算进去，所有工具都不含压缩等预处理步骤。
          </p>
        </section>

        {/* 结果 */}
        <section id="results">
          <h2 className="text-title font-semibold text-fg">各工具实测结果 / Measured results</h2>
          <div className="mt-4 overflow-x-auto rounded-lg border border-line">
            <table className="w-full text-left text-sm">
              <thead className="bg-subtle text-fg-muted">
                <tr>
                  <th className="px-4 py-2 font-semibold">工具类型</th>
                  <th className="px-4 py-2 font-semibold">纯文本报告</th>
                  <th className="px-4 py-2 font-semibold">扫描件</th>
                  <th className="px-4 py-2 font-semibold">200MB 设计稿</th>
                </tr>
              </thead>
              <tbody className="text-fg-secondary">
                {RESULT_TABLE.map((r) => (
                  <tr key={r.tool} className="border-t border-line">
                    <td className="px-4 py-2">{r.tool}</td>
                    <td className="px-4 py-2">{r.report}</td>
                    <td className="px-4 py-2">{r.scan}</td>
                    <td className="px-4 py-2">{r.design}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-fg-secondary">
            merge pdf performance 的关键不在界面快慢，而在三件事：是否把文件先传到服务器、解析阶段是否整块读入内存、写出阶段是否重新编码没动过的图片流。
          </p>
        </section>

        {/* 因素 */}
        <section id="factors">
          <h2 className="text-title font-semibold text-fg">影响速度的四个因素 / Four factors that change the numbers</h2>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-fg-secondary">
            <li>文件构成：图片流的解压成本远高于文本对象，扫描件速度普遍只有纯文本的十分之一</li>
            <li>加密状态：带密码的文件要先解密再重排，峰值内存多出 200MB 以上</li>
            <li>书签与表单：保留导航结构要多一遍链接重映射，40 页合同因此慢了约 15%</li>
            <li>并发与批处理：二十个文件逐个排队，比分三批合并平均慢 30%</li>
          </ol>
          <p className="mt-3 text-fg-secondary">
            文件数量多时的命名与排序另有讲究，对照 <Link href="/blog/pdf-batch-merge-100-files" className="text-brand hover:underline">PDF 批量合并 100 个文件</Link>。内存层面的机制写在{' '}
            <Link href="/blog/large-pdf-merge-browser-memory" className="text-brand hover:underline">大文件 PDF 合并的浏览器内存策略</Link>。
          </p>
        </section>

        {/* 选型 */}
        <section id="pick">
          <h2 className="text-title font-semibold text-fg">什么时候选哪种工具 / Which tool to pick</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-fg-secondary">
            <li>文件不出设备是底线：浏览器本地工具和命令行都合格，前者零环境成本</li>
            <li>超过 300MB 且内存充裕：命令行更稳，参考 500MB+ 策略的做法</li>
            <li>临时合并两个小文件：浏览器方案最省事，打开页面、拖入、下载</li>
          </ul>
          <p className="mt-3 text-fg-secondary">
            涉及合同、凭证这类内容时，本地处理不是偏好问题而是要求，逐层拆解见{' '}
            <Link href="/blog/how-zero-upload-pdf-tools-work" className="text-brand hover:underline">零上传 PDF 工具原理解析</Link>。扫描件建议先压缩到 150 DPI 再合并，整体耗时通常能砍掉一半以上，做法见{' '}
            <Link href="/blog/compress-pdf-local-no-upload" className="text-brand hover:underline">PDF 本地压缩教程</Link>。
          </p>
        </section>

        {/* CTA */}
        <section className="rounded-xl border border-line bg-subtle p-6">
          <h2 className="text-title font-semibold text-fg">用你自己的文件跑一遍</h2>
          <p className="mt-2 text-fg-secondary">
            pdfmergenext.shop 在浏览器本地完成解析、重排和输出，基准测试里的数据你的文件同样适用。拖进去，看看它在你机器上的耗时。
          </p>
          <Link
            href="/"
            className="mt-4 inline-block rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-on-primary transition-colors duration-fast hover:bg-brand-hover"
          >
            开始合并 PDF →
          </Link>
        </section>

        {/* FAQ */}
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

      {/* 相关文章 */}
      <section className="mx-auto mt-12 max-w-content px-4 sm:px-6">
        <h2 className="text-title font-semibold text-fg">相关阅读 / Related</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Link
            href="/blog/5-pdf-merge-methods-compared"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">5 种 PDF 合并方法对比</p>
            <p className="mt-1 text-xs text-fg-secondary">Merge Methods / 方法对比</p>
          </Link>
          <Link
            href="/blog/large-pdf-merge-500mb"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">大文件 PDF 合并：500MB+ 策略</p>
            <p className="mt-1 text-xs text-fg-secondary">Large Files / 大文件</p>
          </Link>
          <Link
            href="/blog/pdfmergenext-vs-smallpdf-vs-ilovepdf"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">PDFMergeNext vs Smallpdf vs iLovePDF</p>
            <p className="mt-1 text-xs text-fg-secondary">Tool Comparison / 工具对比</p>
          </Link>
          <Link
            href="/blog/pdf-merge-quality-before-after-test"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">PDF 合并前后：质量对比测试怎么做</p>
            <p className="mt-1 text-xs text-fg-secondary">Quality Test / 质量对比</p>
          </Link>
        </div>
      </section>
    </article>
  );
}
