import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';

export const metadata: Metadata = {
  title: 'PDF 压缩后合并：质量损失有多大 | Compressed PDF Merge: Quality Loss | PDFMergeNext',
  description:
    '压缩过的 PDF 合并不会自动掉画质，真正糊掉画质的是同一张图被压了两次。这篇讲清 PDF 压缩后合并的质量损失从哪里来，先压还是先合，以及一次成型的本地流程。',
  keywords: [
    'compressed pdf merge',
    'merge pdf after compression',
    'pdf quality loss after merge',
    'compress pdf before or after merging',
    'pdf merge without losing quality',
    'pdf 压缩后合并',
    'pdf 压缩后再合并会糊吗',
    '先压缩还是先合并 pdf',
    'pdf 合并质量损失',
    'PDFMergeNext 压缩合并',
  ],
  alternates: {
    canonical: '/blog/compressed-pdf-merge-quality-loss',
    languages: {
      'zh-CN': '/blog/compressed-pdf-merge-quality-loss',
      'en-US': '/blog/compressed-pdf-merge-quality-loss',
      'x-default': '/blog/compressed-pdf-merge-quality-loss',
    },
  },
  openGraph: {
    title: 'PDF 压缩后合并：质量损失有多大 · PDFMergeNext',
    description:
      '合并本身不重新编码图像，画质损失几乎都来自二次压缩。这篇给出压缩与合并的正确顺序，以及一份一次成型的本地流程。',
    type: 'article',
    url: `${SITE_URL}/blog/compressed-pdf-merge-quality-loss`,
    siteName: 'PDFMergeNext',
    publishedTime: '2026-10-07T00:00:00.000Z',
    images: [{ url: `${SITE_URL}/og`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PDF 压缩后合并：质量损失有多大 · PDFMergeNext',
    description: '同一张图压两次才是画质杀手。把这个顺序改对，合并后的 PDF 就不用再压了。',
    images: [`${SITE_URL}/og`],
  },
};

const FAQ = [
  {
    q: '压缩过的 PDF 合并之后还需要再压一次吗？',
    a: '多数情况不需要。合并只是把已有页面对象搬到一个新容器，体积基本等于两份源文件相加。真要压，就在合并后压这一次，不要每个源文件各压一遍再合。',
  },
  {
    q: '为什么二次压缩之后文字边缘发毛？',
    a: '有损编码按块丢弃高频细节，字边和线条正好是高频部分。第一遍已经丢过一次，第二遍在丢过的基础上再丢，边缘就会出现毛刺和锯齿。',
  },
  {
    q: '合并后文件太大，怎么压最不容易掉画质？',
    a: '优先降 raster 图像的分辨率而不是提高压缩比。把 300 DPI 的扫描页降到 200 DPI，文字通常还能看清，画质损失比再压一轮 JPEG 小得多。',
  },
  {
    q: 'PDF 里的透明图层会被压缩弄没吗？',
    a: '有可能。部分压缩路径会把透明元素扁平化成一张位图，背景就没法保持透明了。合成之前先把这类文件看一眼，确认拼的是最终稿。',
  },
  {
    q: 'Does merging PDFs reduce image quality?',
    a: 'Not on its own. A merge copies already encoded image streams into a new document and does not re-encode them. Visible softening comes from running lossy compression a second time, either before or after the merge.',
  },
  {
    q: 'Should I compress each file first, or merge first and then compress?',
    a: 'Merge first, then compress once. Compressing every source separately and merging afterwards means every image goes through two lossy passes, which costs more detail than one pass on the combined file.',
  },
];

const TOC = [
  { id: 'lead', label: '一句话结论 / TL;DR' },
  { id: 'how', label: '合并到底动了画质没有' },
  { id: 'order', label: '先合并还是先压缩' },
  { id: 'why', label: '二次压缩为什么会糊' },
  { id: 'content', label: '哪些内容经不起压缩' },
  { id: 'workflow', label: '一次成型的本地流程' },
  { id: 'faq', label: '常见问题' },
];

const CONTENT_TABLE = [
  { kind: '矢量文字层 / Vector text', after: '几乎看不出变化', tip: '放心压，压缩对矢量不产生块效应' },
  { kind: '照片渐变（天空、灯光）', after: '容易出现色带', tip: '降分辨率优于提高压缩比' },
  { kind: '图表细线 / Thin strokes', after: '线条断裂、边缘发毛', tip: '保留原始 PDF，别用截图代替' },
  { kind: '扫描页面 / Scanned pages', after: '每压一次字迹更糊', tip: '先降到 200 DPI，或改用二值化' },
  { kind: '已压过的 JPEG 图', after: '画质掉得最快，体积几乎不减', tip: '直接合并，跳过第二次压缩' },
  { kind: '透明图层 / Transparency', after: '可能被扁平化', tip: '压缩前确认已是最终版' },
];

const ORDER_TABLE = [
  { plan: '每个源文件先压，再合并', passes: '两次', quality: '画质损失最明显', note: '不推荐' },
  { plan: '直接合并，之后不再压', passes: '零次', quality: '画质完全保留', note: '源文件已压缩时的首选' },
  { plan: '先合并，最后统一压一次', passes: '一次', quality: '可接受，体积能降', note: '推荐路径' },
  { plan: '合并后压，之后又改并重压', passes: '多次', quality: '逐次劣化', note: '务必避免' },
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
            name: 'PDF 压缩后合并：质量损失有多大',
            item: `${SITE_URL}/blog/compressed-pdf-merge-quality-loss`,
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
        headline: 'PDF 压缩后合并：质量损失有多大 / Compressed PDF Merge: How Much Quality Do You Lose',
        description:
          '压缩过的 PDF 合并不会自动掉画质，真正糊掉画质的是同一张图被压了两次。这篇讲清 PDF 压缩后合并的质量损失从哪里来，先压还是先合，以及一次成型的本地流程。',
        author: {
          '@type': 'Person',
          name: 'PDFMergeNext',
          url: 'https://pdfmergenext.shop',
          '@id': 'https://pdfmergenext.shop/#organization',
        },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-10-07',
        dateModified: '2026-10-07',
        image: `${SITE_URL}/og`,
        url: `${SITE_URL}/blog/compressed-pdf-merge-quality-loss`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/compressed-pdf-merge-quality-loss` },
      },
    ],
  };

  return (
    <article className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-16">
      <header>
        <p className="text-caption font-semibold uppercase tracking-wide text-brand">
          压缩质量 · Compression Quality
        </p>
        <h1 className="mt-2 text-h1 font-bold tracking-tight text-fg">
          PDF 压缩后合并：质量损失有多大 / Compressed PDF Merge: How Much Quality Do You Lose
        </h1>
        <p className="mt-3 text-body text-fg-secondary">
          做 PDF 压缩后合并时，大家担心的是再压缩一次会不会把图压糊。答案是合并这一步基本不动画质，问题出在同一份图像走的两次有损压缩。这篇把顺序讲清楚。
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
            压缩过的 PDF 可以直接合并，合并本身不会带来 PDF 压缩后合并的额外质量损失。画质保不住是因为同一张图经历了两次有损压缩：源文件压过一次，合并后再压一次。把顺序改成先合并、最后统一压一次，损失就只剩一轮。
          </p>
          <p className="mt-2 text-fg-secondary">
            A merge copies page objects into one container and leaves image streams as they are, so quality does not drop on the way in. What hurts is running lossy compression twice. Merge first, then compress the combined file once, and you spend a single pass instead of several.
          </p>
        </section>

        {/* 合并做了什么 */}
        <section id="how">
          <h2 className="text-title font-semibold text-fg">合并到底动了画质没有 / What a merge does to image quality</h2>
          <p className="mt-2 text-fg-secondary">
            PDF 里的照片大多是一段已经编码好的字节流，JPEG 或 JPEG2000 居多。合并工具读的是这串字节，把它连同页面描述一起搬进新文件，中间没有解码再编码的环节。既然没有重新编码，也就不会因为合并而丢像素。
          </p>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-fg-secondary">
            <li>页面尺寸、旋转角度、书签层级这类结构信息按原样复制，不参与重新计算</li>
            <li>字体子集保持完整，文字继续可选可搜</li>
            <li>输出体积约等于两份源文件之和，多一点的部分是交叉引用表与页面树</li>
            <li>只有「打印成 PDF」「导出为图片」这类路径才会重新生成像素，画质这时候才开始掉</li>
          </ul>
          <p className="mt-3 text-fg-secondary">
            Most photos in a PDF are already encoded byte streams, usually JPEG or JPEG2000. A merge reads those bytes, copies them with the page description into a new file, and never decodes them, which is why no pixels are lost. Page geometry, rotation, outline nesting and font subsets all travel across intact. The size of the result is roughly the two sources added together, plus a little for the page tree. Reprinting or exporting to an image is what regenerates pixels, and that is where sharpness starts to go.
          </p>
        </section>

        {/* 顺序 */}
        <section id="order">
          <h2 className="text-title font-semibold text-fg">先压缩还是先合并：顺序决定最终画质 / Compress before or after the merge</h2>
          <div className="mt-4 overflow-x-auto rounded-lg border border-line">
            <table className="w-full text-left text-sm">
              <thead className="bg-subtle text-fg-muted">
                <tr>
                  <th className="px-4 py-2 font-semibold">做法</th>
                  <th className="px-4 py-2 font-semibold">有损压缩次数</th>
                  <th className="px-4 py-2 font-semibold">画质结果</th>
                  <th className="px-4 py-2 font-semibold">建议</th>
                </tr>
              </thead>
              <tbody className="text-fg-secondary">
                {ORDER_TABLE.map((r) => (
                  <tr key={r.plan} className="border-t border-line">
                    <td className="px-4 py-2">{r.plan}</td>
                    <td className="px-4 py-2">{r.passes}</td>
                    <td className="px-4 py-2">{r.quality}</td>
                    <td className="px-4 py-2">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-fg-secondary">
            <li>源文件已经压过一轮，且体积在可接受范围内：直接合并，不再压缩</li>
            <li>合并后体积超标（邮件附件、系统上传限制）：先合并，最后统一压一次</li>
            <li>源文件清晰度参差不齐：先把扫描页统一到同一分辨率，再合并</li>
            <li>文件还要反复修改：留着合并前的原件，每次从原件重新出稿，不要在成品上反复压</li>
          </ul>
          <p className="mt-3 text-fg-secondary">
            When the sources already went through compression once and the size is acceptable, merge them and stop. If the combined file is over a limit, compress once at the end. Match scan resolutions before merging so the pages look even, and keep the pre-merge originals around, because re-compressing an already compressed result is what stacks the damage.
          </p>
        </section>

        {/* 二次压缩 */}
        <section id="why">
          <h2 className="text-title font-semibold text-fg">二次压缩为什么会糊：误差第一次 / Why the second pass is the expensive one</h2>
          <p className="mt-2 text-fg-secondary">
            有损压缩的做法是按小块丢弃人眼不太敏感的高频细节。第一轮结束时图像已经不是原始数据，第二轮在这个已经有偏差的版本上再判断哪些细节可以丢，丢出来的东西和原始画面的偏离就被放大了。文字边缘、细线、笔划拐角最先显出来。
          </p>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-fg-secondary">
            <li>第一遍写字边变软，第二遍开始出现毛刺，第三遍直接结块</li>
            <li>渐变区域从平滑变成一段一段的色带，天空和灯光背景最明显</li>
            <li>体积收益递减：第二轮压缩通常只能再省几个百分点，画质的代价远大于这点体积</li>
            <li>扫描件尤其吃亏，字迹在第二遍之后开始发灰，识别率也跟着降</li>
          </ul>
          <p className="mt-3 text-fg-secondary">
            Lossy coding discards high-frequency blocks that are easy to miss. After the first pass the file no longer holds the original data, so the second pass decides what to throw away from an already degraded copy and pushes the result further from the source. Edges soften first, then rot into visible fringing, and gradients break into bands. The size savings shrink with each pass while the visual cost grows, which is why a second round is rarely worth it.
          </p>
        </section>

        {/* 内容类型 */}
        <section id="content">
          <h2 className="text-title font-semibold text-fg">哪些内容经得起压缩，哪些经不起 / What survives compression</h2>
          <div className="mt-4 overflow-x-auto rounded-lg border border-line">
            <table className="w-full text-left text-sm">
              <thead className="bg-subtle text-fg-muted">
                <tr>
                  <th className="px-4 py-2 font-semibold">内容类型</th>
                  <th className="px-4 py-2 font-semibold">压缩后的表现</th>
                  <th className="px-4 py-2 font-semibold">怎么处理</th>
                </tr>
              </thead>
              <tbody className="text-fg-secondary">
                {CONTENT_TABLE.map((r) => (
                  <tr key={r.kind} className="border-t border-line">
                    <td className="px-4 py-2">{r.kind}</td>
                    <td className="px-4 py-2">{r.after}</td>
                    <td className="px-4 py-2">{r.tip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-fg-secondary">
            矢量文字层基本免疫，因为压缩动的是 raster 图像，轮廓是算出来的。真正需要盯住的是照片、扫描页和细线图，这三类占据了大部分「压缩后看不清」的投诉。
          </p>
          <p className="mt-3 text-fg-secondary">
            Vector text is largely immune, since compression targets raster images while outlines are drawn from math. Photos, scanned pages and thin-line charts account for most complaints about unreadable output, and they deserve a look before you hit the button.
          </p>
        </section>

        {/* 本地流程 */}
        <section id="workflow">
          <h2 className="text-title font-semibold text-fg">一次成型的本地流程 / A local workflow that compresses once</h2>
          <p className="mt-2 text-fg-secondary">
            要先拼一版草稿给别人看，就先把原分辨率的文件合并出来。确认内容定稿之后，再对这个成品做唯一一次压缩。文件全程不出本机，也不用在多个在线工具之间来回上传。
          </p>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-fg-secondary">
            <li>检查每份源文件的分辨率，把扫描页统一到同一数值</li>
            <li>按最终阅读顺序排列文件，一次排好，避免后续调整后重新压缩</li>
            <li>在本地完成合并，先输出全分辨率版本存好</li>
            <li>用阅读器翻一遍，确认页面顺序、矢量文字和图片清晰度没问题</li>
            <li>内容定稿后，只对这版成品执行一次压缩</li>
            <li>存压缩版用于发送，全分辨率版留着当作下一次修改的母版</li>
            <li>压缩结果与母版各留一份单独命名的副本，别覆盖</li>
          </ol>
          <p className="mt-3 text-fg-secondary">
            要看本地压缩的取舍，可以看 /blog/compress-pdf-local-no-upload 里的说明；涉及几百 MB 的材料，先读 /blog/large-pdf-merge-500mb 会省不少时间。
          </p>
          <Link
            href="/"
            className="mt-4 inline-block rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-on-primary transition-colors duration-fast hover:bg-brand-hover"
          >
            在 pdfmergenext.shop 合并 PDF，压缩只做一次 →
          </Link>
          <p className="mt-2 text-sm text-fg-secondary">
            更多 PDF 压缩后合并的做法见 <Link href="/blog" className="text-brand hover:underline">/blog</Link>。
          </p>
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
            href="/blog/compress-pdf-local-no-upload"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">本地压缩 PDF：不外传的做法</p>
            <p className="mt-1 text-xs text-fg-secondary">Local Compression / 体积与画质</p>
          </Link>
          <Link
            href="/blog/large-pdf-merge-500mb"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">大文件 PDF 合并：500MB 以上怎么办</p>
            <p className="mt-1 text-xs text-fg-secondary">Large Files / 内存与体积</p>
          </Link>
          <Link
            href="/blog/pdf-merge-best-practices-file-organization"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">PDF 合并前的文件整理规范</p>
            <p className="mt-1 text-xs text-fg-secondary">File Organization / 合并前准备</p>
          </Link>
          <Link
            href="/blog/pdf-bookmark-merge-keep-outline"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">PDF 书签合并：怎样保住导航结构</p>
            <p className="mt-1 text-xs text-fg-secondary">Bookmarks / 导航层级</p>
          </Link>
        </div>
      </section>
    </article>
  );
}
