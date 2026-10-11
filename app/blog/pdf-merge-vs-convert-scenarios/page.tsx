import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';
const SLUG = 'pdf-merge-vs-convert-scenarios';

export const metadata: Metadata = {
  title:
    'PDF 合并 vs PDF 转换：六种场景该怎么选 | PDF Merge vs Convert | PDFMergeNext',
  description:
    'PDF 合并转换不用二选一：终点是一份 PDF 就合并，终点是另一种格式就转换。这篇讲清两者到底改了什么、什么时候该先合并定版再转换，以及转换最容易出错的四个地方。',
  keywords: [
    'pdf merge vs convert',
    'when to convert pdf vs merge',
    'merge pdf or convert pdf first',
    'combine pdf files vs convert to word',
    'convert pdf to word or merge',
    'PDF 合并转换',
    'pdf 先合并还是先转换',
    'pdf 转换 word 还是合并',
    'pdf 合并和转换的区别',
    'PDFMergeNext 合并转换',
  ],
  alternates: {
    canonical: '/blog/pdf-merge-vs-convert-scenarios',
    languages: {
      'zh-CN': '/blog/pdf-merge-vs-convert-scenarios',
      'en-US': '/blog/pdf-merge-vs-convert-scenarios',
      'x-default': '/blog/pdf-merge-vs-convert-scenarios',
    },
  },
  openGraph: {
    title: 'PDF 合并 vs PDF 转换：六种场景该怎么选 · PDFMergeNext',
    description:
      '合并不改文件格式，转换要重建版式。先看交付终点是 PDF 还是别的格式，再决定顺序。',
    type: 'article',
    url: SITE_URL + '/blog/' + SLUG,
    siteName: 'PDFMergeNext',
    publishedTime: '2026-10-12T00:00:00.000Z',
    images: [{ url: SITE_URL + '/og', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PDF 合并 vs PDF 转换：六种场景该怎么选 · PDFMergeNext',
    description:
      '要一份 PDF 就合并，要能编辑就转换。正确顺序是先合并定版，再按转换目标导出一次。',
    images: [SITE_URL + '/og'],
  },
};

const FAQ = [
  {
    q: '先合并再转换，还是先逐个转换再合？',
    a: '先合并。转换必须来回印证原文，尤其转表格和 Word 的时候。先把多份 PDF 合成一份定版 PDF，再只转这一次，比转三份再拼回去省事，也少两遍版式漂移。',
  },
  {
    q: '合并会改文件格式吗？',
    a: '不会。合并只是把多个 PDF 的页面对象按你排的顺序搬进一个新 PDF，字体、矢量图形、已经压过的位图都原样带走。真正被动到的是文件级字段：标题只能留一份，书签会被重排。',
  },
  {
    q: 'PDF 转成 Word 之后，版式和原来不一样怎么办？',
    a: '这是常态，PDF 的页面是按坐标画的，Word 是段落流，两边描述的不是一回事。表格一页放不下时会被拆开，字体缺了就替换。要么接受 Drift 后手动整理，要么改用注释或页眉页脚表达修改意见，别把原件重写一遍。',
  },
  {
    q: '扫描件要转 Word，是不是也算转换？',
    a: '那是两步：先 OCR 读出文字，再落进目标格式。顺序同样是把扫描页先合并定好页序再识别，识别结果校对之后再决定存成可搜索 PDF 还是 Word。',
  },
  {
    q: 'Should I merge first or convert first?',
    a: 'Merge first. You want one settled master before anything gets re-encoded, since a later edit means the whole route has to be walked again. One merge and one conversion reintroduce far fewer problems than three conversions stitched together.',
  },
  {
    q: 'Does merging change the file format?',
    a: 'No. Merging copies page objects from several PDFs into a new PDF in the order you set. Fonts, vector shapes and already compressed bitmaps arrive unchanged, while document level fields such as the title and the bookmark tree are what get rewritten.',
  },
  {
    q: 'The Word file does not look like the PDF. Can that be fixed?',
    a: 'Not fully. A PDF describes a page by coordinates and Word describes it as a stream of paragraphs, so the two are not describing the same thing. Tables that cross a page boundary break apart and missing fonts get substituted. Accept some drift, tidy the rest by hand, and keep the PDF as the reference copy.',
  },
  {
    q: 'Is turning a scan into Word the same task?',
    a: 'It is two tasks. Recognition reads the glyphs, and then the result lands in the target format. Merge the scans into the right page order first, recognise, read the output against the original, and only then decide between a searchable PDF and a Word file.',
  },
];

const TOC = [
  { id: 'lead', label: '一句话结论 / TL;DR' },
  { id: 'diff', label: '两者动的东西不一样' },
  { id: 'compare', label: '场景对照表 / Side-by-side' },
  { id: 'scenarios', label: '六种常见场合怎么选' },
  { id: 'order', label: '先后顺序 / Order' },
  { id: 'faq', label: '常见问题 / FAQ' },
];

const COMPARE = [
  { dim: '改的是', merge: '文件数量，多变一', convert: '文件结构，这一种换成那一种' },
  { dim: '页面内容', merge: '页面对象原样搬运', convert: '内容重排，矢量可能被栅格化' },
  { dim: '版式风险', merge: '极低，页码和顺序是全部变量', convert: '中到高，字体替换与换行漂移常见' },
  { dim: '文件体积', merge: '累加', convert: '看目标格式，到 Word 常变大，到图片可能变小' },
  { dim: '可逆性', merge: '可，按原顺序拆回去', convert: '单向，转出来的版式回不到原来的 PDF' },
  { dim: '典型触发条件', merge: '交付一份正本、连续页码、归档', convert: '对方要可编辑稿件、要表格数据、要图片序列' },
  { dim: '典型的坑', merge: '以为合并会顺手压缩压缩体积', convert: '以为转出来的文本会和原件一模一样' },
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
            name: 'PDF 合并 vs PDF 转换：六种场景该怎么选',
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
        headline:
          'PDF 合并 vs PDF 转换：六种场景该怎么选 / PDF Merge vs Convert: How to Pick',
        description:
          'PDF 合并转换不用二选一：终点是一份 PDF 就合并，终点是另一种格式就转换。这篇讲清两者到底改了什么、什么时候该先合并定版再转换，以及转换最容易出错的四个地方。',
        author: {
          '@type': 'Person',
          name: 'PDFMergeNext',
          url: 'https://pdfmergenext.shop',
          '@id': 'https://pdfmergenext.shop/#organization',
        },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-10-12',
        dateModified: '2026-10-12',
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
          操作选择 · Merge or Convert
        </p>
        <h1 className="mt-2 text-h1 font-bold tracking-tight text-fg">
          PDF 合并 vs PDF 转换：六种场景该怎么选 / PDF Merge vs Convert: How to Pick
        </h1>
        <p className="mt-3 text-body text-fg-secondary">
          合并不动文件格式，转换要重建版式。先看交付终点是"一份 PDF"还是"另一种格式"，第一步的选择就清楚了。
        </p>
        <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-subtle px-3 py-1 text-caption font-medium text-fg-muted">
          阅读约 8 分钟 · 8 min read
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
            PDF 合并和转换常被当成二选一，其实它们回答的是两个问题：这一票货物的终点是什么格式，以及手上有几份文件。终点是"一份 PDF"，就用合并；终点是"另一种格式"，比如 Word、Excel、PPT 或者图片，才轮到转换。合并不改文件格式，只把多个 PDF 的页面对象按顺序搬进一个新 PDF；转换要把 PDF 的内容翻译成另一种文件的结构，这一步会重建版式，风险比合并高一个量级。
          </p>
          <p className="mt-2 text-fg-secondary">
            所以两个动作经常是串起来的，不冲突：先把多份 PDF 合成一份定版母版，检查过页码和顺序，再按需要导出成别的格式。反过来先转再合，等于把同一个兼容问题处理三遍。
          </p>
          <p className="mt-2 text-fg-secondary">
            Merging answers how many files you end up with, and converting answers which format that file is in. When the deliverable is one PDF, merge. When it has to be a Word file, a spreadsheet, slides or a set of images, convert. Merging leaves the format alone and just copies page objects into one container in your chosen order. Converting translates those pages into a different structure, which means the layout gets rebuilt, and that is where most of the risk sits. Sequencing the two is normal: merge into a settled master first, check the page order, then export once into whatever format the other side needs.
          </p>
        </section>

        {/* 差异 */}
        <section id="diff">
          <h2 className="text-title font-semibold text-fg">两者动的东西不一样 / What each one touches</h2>
          <p className="mt-2 text-fg-secondary">
            从数据结构上看，合并是容器操作。你把 A、B、C 三份按最终阅读顺序排好，工具照这个顺序把页面对象依次搬进新文件，页面一页不多一页不少，字体、矢量图形、已经压过的位图都原样带走。被改动的只有文件级字段：标题只能留一份，书签会被重排，元数据会被覆盖。书签怎么处理见 /blog/pdf-bookmark-merge-keep-outline，元数据见 /blog/pdf-metadata-preservation-merge。
          </p>
          <p className="mt-3 text-fg-secondary">
            转换是结构翻译。PDF 的页面是按坐标画的：一段文字、一条路径、一张图，各自带着位置和尺寸。目标格式往往不是这套逻辑，Word 是段落流，Excel 是单元格，图片是整齐的像素栅格。转换要把"这个位置有一行字"翻译成"这是一个段落"，版面一定重排。三类常见结果值得先记住：
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-fg-secondary">
            <li><strong>PDF 转 Word：</strong>字体缺失时被替换，换行位置漂移，跨页表格在中间断开。</li>
            <li><strong>PDF 转 Excel：</strong>把版线识别成单元格边界，列名容易认错，合并单元格会散开。</li>
            <li><strong>PDF 转图片：</strong>最稳，但矢量会被栅格化。渲染时的分辨率就是它的全部清晰度，之后放大只会糊。</li>
          </ul>
          <p className="mt-3 text-fg-secondary">
            Merging works at the container level. You order files A, B and C into their final reading sequence and the tool copies their page objects into a new file exactly in that sequence. Nothing is added or dropped, and fonts, vector shapes and already compressed bitmaps travel unchanged. Only document level fields move: one title survives, the bookmark tree gets rebuilt, metadata gets overwritten. Conversion translates structure instead. A PDF page is drawn by coordinates, while Word is a paragraph stream, Excel is a grid and an image is a raster, so the output has to be laid out again. Know the three usual outcomes before you start: Word output swaps missing fonts and drifts line breaks, spreadsheet output mistakes rules for cell borders, and image output rasterises vector content at whatever resolution was chosen.
          </p>
        </section>

        {/* 对照表 */}
        <section id="compare">
          <h2 className="text-title font-semibold text-fg">场景对照表 / Side-by-side</h2>
          <p className="mt-2 text-fg-secondary">
            七个维度摆在一起看，绝大多数场合的答案在前三行就已经出现。
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-line">
            <table className="w-full text-left text-sm">
              <thead className="bg-subtle text-fg-muted">
                <tr>
                  <th className="px-4 py-2 font-semibold">判断维度</th>
                  <th className="px-4 py-2 font-semibold">合并</th>
                  <th className="px-4 py-2 font-semibold">转换</th>
                </tr>
              </thead>
              <tbody className="text-fg-secondary">
                {COMPARE.map((r) => (
                  <tr key={r.dim} className="border-t border-line">
                    <td className="px-4 py-2">{r.dim}</td>
                    <td className="px-4 py-2">{r.merge}</td>
                    <td className="px-4 py-2">{r.convert}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-fg-secondary">
            第一行最容易被跳过：只要交付对象还是 PDF，就轮不到转换出场，先把份数收拢就够了。
          </p>
        </section>

        {/* 场合 */}
        <section id="scenarios">
          <h2 className="text-title font-semibold text-fg">六种常见场合怎么选 / Which one fits the job</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-fg-secondary">
            <li>
              <strong>合同正文加附件加签署页，对方要一份连续编号的正本。</strong>合并。这时候千万别转 Word，签字区域和页码连续性都经不起重排。
            </li>
            <li>
              <strong>对方回一句"发我 Word 我再改改"。</strong>转换，但先把几份 PDF 合成一份再转。你能少处理两遍版式漂移，校对时也只需要对一份。
            </li>
            <li>
              <strong>供应商发票要进财务表格。</strong>转换到表格格式，导出后把金额和日期对着原始 PDF 核一遍，数字位数是这类转换最容易错的地方。批量文件的整理顺序见 /blog/pdf-batch-merge-100-files。
            </li>
            <li>
              <strong>投标文件的图纸要贴进 PPT。</strong>转成 PNG 保留线条，渲染分辨率别低于 300 DPI。贴进去之后演示软件多半还会再压一轮，所以导出时把像素尺寸给足一点。
            </li>
            <li>
              <strong>扫描件要变成能改字的文档。</strong>这是 OCR 加转换两步，不是单纯转换。先把扫描页合成一份、定好页序再识别，结果校对过之后再决定存成可搜索的 PDF 还是 Word。
            </li>
            <li>
              <strong>政府门户只收一个附件，且必须是 Word。</strong>两步都要：先合并确认内容齐全、页码连续，再一次性转换成 Word。直接把没合过的原件挨个转成 docx 拼回去，章节顺序十有八九要返工。
            </li>
          </ul>
        </section>

        {/* 顺序 */}
        <section id="order">
          <h2 className="text-title font-semibold text-fg">先后顺序 / The order to work in</h2>
          <p className="mt-2 text-fg-secondary">
            顺序比单个动作的选择更容易出错。下面这条路线适用于绝大多数场合，全程在浏览器里跑完，文件不离开本机。
          </p>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-fg-secondary">
            <li>先问终点格式：对方要的是 PDF，还是别的什么东西</li>
            <li>需要多份合一就先合并，一次成型，中间不要夹压缩</li>
            <li>合并成品检查页码和顺序，缺页补漏之后就算定版，存一份母版不动</li>
            <li>再决定要不要转换，并且只转这一次</li>
            <li>转换成表格或文档后，把金额、日期、编号对着母版核一遍</li>
            <li>转换出来的文件不要再当母版用，下一轮修改从那份 PDF 重新开始</li>
          </ol>
          <p className="mt-3 text-fg-secondary">
            合并这一步在 pdfmergenext.shop 里全程本地完成，文件不上传服务器，适合合同、病历、投标文件这类不能外发的内容。转换之前若要判断画质损耗，可以对照 /blog/pdf-merge-quality-before-after-test 的测法。
          </p>
          <Link
            href="/"
            className="mt-4 inline-block rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-on-primary transition-colors duration-fast hover:bg-brand-hover"
          >
            在 pdfmergenext.shop 先合并出定版 PDF，本地不出网 →
          </Link>
          <p className="mt-2 text-sm text-fg-secondary">
            更多 PDF 合并转换的判断细节见{' '}
            <Link href="/blog" className="text-brand hover:underline">
              /blog
            </Link>
            ，同类的选择问题还有{' '}
            <Link href="/blog/pdf-merge-vs-split-when-to-use" className="text-brand hover:underline">
              PDF 合并 vs PDF 拆分
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
            href="/blog/pdf-merge-vs-split-when-to-use"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">PDF 合并 vs PDF 拆分：什么情况该用哪个</p>
            <p className="mt-1 text-xs text-fg-secondary">Merge or Split / 份数与页码边界</p>
          </Link>
          <Link
            href="/blog/pdf-batch-merge-100-files"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">PDF 批量合并：100+ 文件的最佳实践</p>
            <p className="mt-1 text-xs text-fg-secondary">Batch Merge / 大批量文件整理</p>
          </Link>
          <Link
            href="/blog/pdf-metadata-preservation-merge"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">PDF 元数据保留：合并时该注意什么</p>
            <p className="mt-1 text-xs text-fg-secondary">Metadata / 文件级字段</p>
          </Link>
          <Link
            href="/blog/pdf-merge-quality-before-after-test"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">PDF 合并前后：质量对比测试怎么做</p>
            <p className="mt-1 text-xs text-fg-secondary">Quality Test / 画质与对比方法</p>
          </Link>
        </div>
      </section>
    </article>
  );
}
