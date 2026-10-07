import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';
const SLUG = 'pdf-merge-quality-before-after-test';

export const metadata: Metadata = {
  title: 'PDF 合并前后：质量对比测试怎么做 | PDF Quality Before and After Merge | PDFMergeNext',
  description:
    'PDF 质量对比要做得有意义，得先固定住变量：同一份源文件、同一页、同一缩放比例。这篇讲清对比测试怎么搭、该看哪六个指标，以及三种会把结论带偏的测法。',
  keywords: [
    'pdf merge quality test',
    'pdf quality before after merge',
    'merge pdf without losing quality',
    'before after pdf merge comparison',
    'pdf merge resolution comparison',
    'PDF 质量对比',
    'pdf 合并画质测试',
    '合并前后画质对比',
    'pdf 合并分辨率对比',
    'PDFMergeNext 画质对比',
  ],
  alternates: {
    canonical: '/blog/pdf-merge-quality-before-after-test',
    languages: {
      'zh-CN': '/blog/pdf-merge-quality-before-after-test',
      'en-US': '/blog/pdf-merge-quality-before-after-test',
      'x-default': '/blog/pdf-merge-quality-before-after-test',
    },
  },
  openGraph: {
    title: 'PDF 合并前后：质量对比测试怎么做 · PDFMergeNext',
    description:
      '合并本身不重新编码图像，正确的对比结果应该几乎看不出差别。这篇给出可复现的对比方法和六个核对指标。',
    type: 'article',
    url: SITE_URL + '/blog/' + SLUG,
    siteName: 'PDFMergeNext',
    publishedTime: '2026-10-08T00:00:00.000Z',
    images: [{ url: SITE_URL + '/og', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PDF 合并前后：质量对比测试怎么做 · PDFMergeNext',
    description: '把变量固定住再比，否则测出来的是截图工具和阅读器的差异。',
    images: [SITE_URL + '/og'],
  },
};

const FAQ = [
  {
    q: '合并后的 PDF 画质为什么会变差？',
    a: '多数情况不是合并造成的。合并把已编码的图像流搬进新容器，不动像素。变差通常是因为合并前或合并后又跑了一次有损压缩。要验证就全程不压，比一次纯合并。',
  },
  {
    q: '为什么同一页在两个阅读器里清晰度不一样？',
    a: '各家渲染器对细线和抗锯齿的处理不同。做 PDF 质量对比时固定在同一个阅读器、同一缩放比例下看，否则测到的是阅读器差异，不是文件差异。',
  },
  {
    q: '400% 下看文字边缘有毛刺，是不是合并的问题？',
    a: '先看源文件本身在 400% 下是什么样。扫描件放大后本来就会显出毛刺，那是扫描分辨率的边界。把 before 和 after 并排放，两边一样就说明合并没有额外损失。',
  },
  {
    q: 'Does merging PDFs reduce image quality?',
    a: 'Not by itself. A merge copies encoded image streams into a new document. Softening appears when lossy compression runs before or after the merge, so test with compression out of the picture first.',
  },
  {
    q: 'What zoom level should I use when comparing?',
    a: '100% for overall sharpness and 400% for edges and thin strokes. Skipping fit-to-window matters more than people expect, since that mode resamples to whatever window size you happen to have open.',
  },
  {
    q: 'Why is my merged file larger than the two sources combined?',
    a: 'Usually duplicated font subsets or repeated image objects. Check the DPI first. If the resolution is unchanged, the extra bytes are structural rather than a quality problem.',
  },
];

const TOC = [
  { id: 'lead', label: '一句话结论 / TL;DR' },
  { id: 'setup', label: '对比测试怎么搭' },
  { id: 'metrics', label: '该看哪六个指标' },
  { id: 'traps', label: '三种会带偏结论的测法' },
  { id: 'workflow', label: '一次成型的本地流程' },
  { id: 'faq', label: '常见问题 / FAQ' },
];

const METRICS = [
  { name: '图像分辨率 / DPI', before: '300', after: '完全一致', warn: '下降说明图像被重新编码过' },
  { name: '页面尺寸与旋转', before: 'A4 / 0°', after: '一致', warn: '出现旋转说明页面树被重建' },
  { name: '文件大小', before: '12.4 MB', after: '约等于两份之和', warn: '暴增说明字体或图像被重复嵌入' },
  { name: '文字可选性', before: '可选可搜', after: '仍然可选', warn: '变成图片说明页面被栅格化' },
  { name: '色彩空间', before: 'sRGB', after: '一致', warn: '改变说明发生了色彩转换' },
  { name: '书签与内部链接', before: '3 层', after: '保留', warn: '丢失说明结构信息被丢弃' },
];

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '首页', item: SITE_URL + '/' },
          { '@type': 'ListItem', position: 2, name: '博客', item: SITE_URL + '/blog' },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'PDF 合并前后：质量对比测试怎么做',
            item: SITE_URL + '/blog/' + SLUG,
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
        headline: 'PDF 合并前后：质量对比测试怎么做 / PDF Quality Before and After Merge: How to Test It',
        description:
          'PDF 质量对比要做得有意义，得先固定住变量：同一份源文件、同一页、同一缩放比例。这篇讲清对比测试怎么搭、该看哪六个指标，以及三种会把结论带偏的测法。',
        author: {
          '@type': 'Person',
          name: 'PDFMergeNext',
          url: 'https://pdfmergenext.shop',
          '@id': 'https://pdfmergenext.shop/#organization',
        },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-10-08',
        dateModified: '2026-10-08',
        image: SITE_URL + '/og',
        url: SITE_URL + '/blog/' + SLUG,
        mainEntityOfPage: { '@type': 'WebPage', '@id': SITE_URL + '/blog/' + SLUG },
      },
    ],
  };

  return (
    <article className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-16">
      <header>
        <p className="text-caption font-semibold uppercase tracking-wide text-brand">
          质量对比 · Quality Comparison
        </p>
        <h1 className="mt-2 text-h1 font-bold tracking-tight text-fg">
          PDF 合并前后：质量对比测试怎么做 / PDF Quality Before and After Merge: How to Test It
        </h1>
        <p className="mt-3 text-body text-fg-secondary">
          做 PDF 质量对比，先把变量固定住：同一份源文件，合并前存一页基准图，合并后再导出同一页，在同样的缩放比例下并排看。合并本身不重新编码图像，正确的对比结果应该几乎看不出差别。
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
              <a href={'#' + t.id} className="text-sm text-brand hover:underline">
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
            做 PDF 质量对比，先把变量固定住：同一份源文件，合并前存一页基准图，合并后再导出同一页，在同样的缩放比例下并排看。合并本身不重新编码图像，所以正确的对比结果应该几乎看不出差别。如果你测出了明显掉画质，问题多半出在合并前后多跑的那一次压缩，而不是合并这一步。
          </p>
          <p className="mt-2 text-fg-secondary">
            A useful PDF quality comparison holds every variable still. Save a reference page from the source, export the same page from the merged file, and look at both at the same zoom level. A merge copies encoded image streams rather than re-encoding them, so the two should look the same. If they do not, the loss came from an extra compression pass, not from the merge.
          </p>
        </section>

        {/* 测试怎么搭 */}
        <section id="setup">
          <h2 className="text-title font-semibold text-fg">对比测试怎么搭 / Setting up a comparison you can trust</h2>
          <p className="mt-2 text-fg-secondary">
            多数人做的对比是无效对比：拿手机上截的图跟电脑上的原件比，缩放比例还不一样。这样比出来的差异全部来自观察和截图过程，跟合并没关系。
          </p>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-fg-secondary">
            <li>合并前先把源文件的目标页导出一张基准图，命名带 before</li>
            <li>合并完成后，从成品里导出同一页，命名带 after</li>
            <li>缩放固定在 100% 和 400% 两档，不要用「适应窗口」，它会按窗口大小重采样</li>
            <li>用同一个阅读器、同一台机器看，换渲染器引入的差异比合并本身大得多</li>
            <li>关掉「平滑图像」「增强细线」这类显示选项，它们专门用来掩盖画质问题</li>
            <li>比图片本身，不要比整页截图，整页截图等于又重采样了一次</li>
          </ul>
          <p className="mt-3 text-fg-secondary">
            Most comparisons people run are not valid. One screenshot comes from a phone, the other from a desktop viewer, at different zoom levels. Every difference you see comes from the viewing and the screenshot step, not from the merge. Export a reference image of the target page before merging, name it before, export the same page after the merge and name it after. View both at 100% and 400%, never at fit-to-window, which resamples to the window size.
          </p>
        </section>

        {/* 指标 */}
        <section id="metrics">
          <h2 className="text-title font-semibold text-fg">该看哪六个指标 / Six numbers worth checking</h2>
          <p className="mt-2 text-fg-secondary">
            肉眼并排看只能发现明显问题。下面这几项能读出数字，每一项都对应一种具体的失败模式。
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-line">
            <table className="w-full text-left text-sm">
              <thead className="bg-subtle text-fg-muted">
                <tr>
                  <th className="px-4 py-2 font-semibold">指标</th>
                  <th className="px-4 py-2 font-semibold">合并前</th>
                  <th className="px-4 py-2 font-semibold">合并后预期</th>
                  <th className="px-4 py-2 font-semibold">异常说明</th>
                </tr>
              </thead>
              <tbody className="text-fg-secondary">
                {METRICS.map((r) => (
                  <tr key={r.name} className="border-t border-line">
                    <td className="px-4 py-2">{r.name}</td>
                    <td className="px-4 py-2">{r.before}</td>
                    <td className="px-4 py-2">{r.after}</td>
                    <td className="px-4 py-2">{r.warn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-fg-secondary">
            DPI 这一项最该盯。数值下降就意味着图像流在链条上被解码又重新编码过，后面几项多半也会跟着出问题。
          </p>
          <p className="mt-3 text-fg-secondary">
            DPI should come out identical. A drop means the image stream was decoded and re-encoded somewhere in the chain. File size should land near the sum of the two sources, and a big jump usually means fonts or images got embedded twice.
          </p>
        </section>

        {/* 陷阱 */}
        <section id="traps">
          <h2 className="text-title font-semibold text-fg">三种会带偏结论的测法 / Three ways the test misleads you</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-fg-secondary">
            <li>
              <strong>拿压缩后的成品比合并前的原件。</strong>这样比出来的是压缩的损失，合并替压缩背了锅。要比就全程不压，或者两边各压一次。
            </li>
            <li>
              <strong>用截图工具取图。</strong>截图工具按屏幕分辨率重新采样，300 DPI 的页面截下来只剩 96 DPI，你在比的是截图器。
            </li>
            <li>
              <strong>在不同阅读器之间比。</strong>各家渲染器对细线和渐近色的处理不一样，同一份文件在两个阅读器里的差异，往往比合并带来的差异大一个量级。
            </li>
          </ul>
          <p className="mt-3 text-fg-secondary">
            Comparing a compressed result against an uncompressed original measures the compression, not the merge. Screenshot tools resample to screen resolution, so a 300 DPI page comes out at 96 DPI and you end up comparing the screenshot utility. Different viewers also render thin lines and gradients differently, often by a wider margin than anything a merge produces.
          </p>
        </section>

        {/* 本地流程 */}
        <section id="workflow">
          <h2 className="text-title font-semibold text-fg">一次成型的本地流程 / A local workflow that tests cleanly</h2>
          <p className="mt-2 text-fg-secondary">
            把对比放进流程里，而不是等出问题再回头查。文件全程不出本机，也不用为了验证画质去在线工具上反复上传。
          </p>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-fg-secondary">
            <li>合并前导出基准页，存好 before 版本</li>
            <li>按最终阅读顺序排列源文件，一次排好，避免事后返工</li>
            <li>在本地完成合并，先输出全分辨率版本</li>
            <li>导出同一页的 after 版本，与 before 并排比对</li>
            <li>逐项核对上表的六个指标，不只看肉眼</li>
            <li>确认无误后再决定要不要压缩，压缩只做一次</li>
            <li>成品与母版分名存两份，别互相覆盖</li>
          </ol>
          <p className="mt-3 text-fg-secondary">
            压缩与合并的先后顺序见 /blog/compressed-pdf-merge-quality-loss 里的说明；涉及几百 MB 的材料，先读 /blog/large-pdf-merge-500mb 会省不少时间。
          </p>
          <Link
            href="/"
            className="mt-4 inline-block rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-on-primary transition-colors duration-fast hover:bg-brand-hover"
          >
            在 pdfmergenext.shop 合并 PDF，合并前后自己验一遍 →
          </Link>
          <p className="mt-2 text-sm text-fg-secondary">
            更多 PDF 质量对比的做法见{' '}
            <Link href="/blog" className="text-brand hover:underline">
              /blog
            </Link>
            。
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="rounded-xl border border-line p-6">
          <h2 className="text-title font-semibold text-fg">常见问题 / FAQ</h2>
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
            href="/blog/compressed-pdf-merge-quality-loss"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">PDF 压缩后合并：质量损失有多大</p>
            <p className="mt-1 text-xs text-fg-secondary">Compression Quality / 压缩与顺序</p>
          </Link>
          <Link
            href="/blog/large-pdf-merge-500mb"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">大文件 PDF 合并：500MB 以上怎么办</p>
            <p className="mt-1 text-xs text-fg-secondary">Large Files / 内存与体积</p>
          </Link>
          <Link
            href="/blog/compress-pdf-local-no-upload"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">本地压缩 PDF：不外传的做法</p>
            <p className="mt-1 text-xs text-fg-secondary">Local Compression / 体积与画质</p>
          </Link>
          <Link
            href="/blog/pdf-memory-optimization-browser-merge"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">PDF 内存优化：浏览器合并技巧</p>
            <p className="mt-1 text-xs text-fg-secondary">Memory Optimization / 大文件处理</p>
          </Link>
        </div>
      </section>
    </article>
  );
}
