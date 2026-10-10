import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';
const SLUG = 'pdf-merge-vs-split-when-to-use';

export const metadata: Metadata = {
  title:
    'PDF 合并 vs PDF 拆分：什么情况该用哪个 | PDF Merge vs Split | PDFMergeNext',
  description:
    'PDF 合并拆分先看改的是文件数量还是页码范围：合并适合交付一份正本、连续页码、归档，拆分适合上传上限、分人发放、只要其中几页。这篇讲清判断依据、先后顺序，以及四种容易踩的坑。',
  keywords: [
    'pdf merge vs split',
    'when to merge pdf vs split',
    'combine vs separate pdf files',
    'split large pdf into smaller files',
    'merge multiple pdf into one file',
    'PDF 合并拆分',
    'pdf 先合并还是先拆分',
    'pdf 拆分成多个文件',
    'pdf 合并成一个',
    'PDFMergeNext 合并拆分',
  ],
  alternates: {
    canonical: '/blog/pdf-merge-vs-split-when-to-use',
    languages: {
      'zh-CN': '/blog/pdf-merge-vs-split-when-to-use',
      'en-US': '/blog/pdf-merge-vs-split-when-to-use',
      'x-default': '/blog/pdf-merge-vs-split-when-to-use',
    },
  },
  openGraph: {
    title: 'PDF 合并 vs PDF 拆分：什么情况该用哪个 · PDFMergeNext',
    description:
      '合并改的是文件数量，拆分改的是页码边界。先看交付终点，再决定第一步。',
    type: 'article',
    url: SITE_URL + '/blog/' + SLUG,
    siteName: 'PDFMergeNext',
    publishedTime: '2026-10-11T00:00:00.000Z',
    images: [{ url: SITE_URL + '/og', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PDF 合并 vs PDF 拆分：什么情况该用哪个 · PDFMergeNext',
    description:
      '要一份正本就合并，有上传上限或只要几页就拆分。顺序很关键：先合并定版，再按需拆。',
    images: [SITE_URL + '/og'],
  },
};

const FAQ = [
  {
    q: '合并后再拆，画质会掉吗？',
    a: '不会。合并搬的是页面对象，拆分复制的也是同一批页面对象，字体和矢量图形都不重新编码。真正伤画质的是中间的压缩环节，所以对的做法是把压缩放到最后一步，只做一次。',
  },
  {
    q: '60MB 的文件该先合并还是先拆分？',
    a: '先看交付要求。收件方要一份完整文件，就先合并再处理整体体积；只要其中几页，就先按页码把那部分取出来，整份不用动。先确定终点长什么样，第一步自然就定了。',
  },
  {
    q: '拆分后的文件会丢书签吗？',
    a: '看工具。有的把整份书签原样复制给每个分片，有的直接丢掉。拆完随便开一个分片看看导航面板，缺了就按那一版的章节重建，比重新拆一遍省事。',
  },
  {
    q: '页码范围可以一直复用吗？',
    a: '不能。它指向的是当时那一份文件的页码，源文件中间插入或删掉页面之后，原来的范围就错位了。源文件每变动一次，重新确认一遍页码。',
  },
  {
    q: 'Does splitting a merged file hurt image quality?',
    a: 'No. Merging copies page objects and splitting copies the same objects again, so fonts and graphics stay un-reencoded. Compression is what costs quality, so keep it last and run it once.',
  },
  {
    q: 'Should I merge or split a 60MB file first?',
    a: 'Start from what has to be delivered. One complete file means merge, then deal with the total size. A few pages means pull those out with a range and leave the rest alone.',
  },
  {
    q: 'Do the split pieces keep their bookmarks?',
    a: 'It depends on the tool. Some copy the full outline into every piece and some drop it. Open one piece, check the navigation panel, and rebuild the tree for that piece if it is empty.',
  },
  {
    q: 'Can I reuse a page range?',
    a: 'Not safely. A range refers to positions in the file as it was at that moment, so inserting or deleting pages upstream shifts every number after it.',
  },
];

const TOC = [
  { id: 'lead', label: '一句话结论 / TL;DR' },
  { id: 'diff', label: '两者改的东西不一样' },
  { id: 'compare', label: '判断对照表 / Side-by-side' },
  { id: 'scenarios', label: '五种场合怎么选' },
  { id: 'order', label: '先后顺序 / Order' },
  { id: 'faq', label: '常见问题 / FAQ' },
];

const COMPARE = [
  { dim: '改的是', merge: '文件数量，多变一', split: '页码边界，一变多' },
  { dim: '页面内容', merge: '原样搬运', split: '原样复制，不重绘' },
  { dim: '文件体积', merge: '累加，通常变大', split: '按段切，每段变小' },
  { dim: '典型触发条件', merge: '交付一份正本、连续页码、归档', split: '上传上限、分人发放、只要某几页' },
  { dim: '常见后遗症', merge: '体积过大发不出去', split: '分片缺封面和目录、文件名乱' },
  { dim: '可逆性', merge: '可，按原顺序拆回去', split: '重拼容易错序，最好一次做对' },
  { dim: '掉画质的原因', merge: '中间夹了压缩，不是合并本身', split: '同上，压缩放在最后做一次' },
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
            name: 'PDF 合并 vs PDF 拆分：什么情况该用哪个',
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
          'PDF 合并 vs PDF 拆分：什么情况该用哪个 / PDF Merge vs Split: When to Use Each One',
        description:
          'PDF 合并拆分先看改的是文件数量还是页码范围：合并适合交付一份正本、连续页码、归档，拆分适合上传上限、分人发放、只要其中几页。这篇讲清判断依据、先后顺序，以及四种容易踩的坑。',
        author: {
          '@type': 'Person',
          name: 'PDFMergeNext',
          url: 'https://pdfmergenext.shop',
          '@id': 'https://pdfmergenext.shop/#organization',
        },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-10-11',
        dateModified: '2026-10-11',
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
          操作选择 · Merge or Split
        </p>
        <h1 className="mt-2 text-h1 font-bold tracking-tight text-fg">
          PDF 合并 vs PDF 拆分：什么情况该用哪个 / PDF Merge vs Split: When to Use Each One
        </h1>
        <p className="mt-3 text-body text-fg-secondary">
          合并改的是文件数量，拆分改的是页码边界。确定交付终点是"一份"还是"几份"，第一步的选择就清楚了。
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
            PDF 合并拆分这个问题，看一条就能定：你要改的是文件数量，还是页码范围。合并把多份合成一份，解决的是交付、归档、页码连续；拆分把一份按页码切成几份，解决的是体积上限、分发对象不同、只要其中几页。两件事都不重新绘制页面内容，所以“用完之后画质变差”多半是压缩那一步造成的，合并和拆分本身不背这个锅。
          </p>
          <p className="mt-2 text-fg-secondary">
            顺序同样有讲究：先合并定版，再按需拆分。反过来做，容易在拆完之后才发现漏了几页，再回头去源文件里翻。
          </p>
          <p className="mt-2 text-fg-secondary">
            Choosing between merging and splitting comes down to one question: are you changing the number of files, or the range of pages? Merging collapses several files into one and solves delivery, archiving and continuous page numbering. Splitting cuts one file at page boundaries and solves size caps, recipients who should not see everything, and requests for a handful of pages. Neither operation redraws the pages themselves, so when the output looks worse, the step that did the damage is usually compression sitting in between.
          </p>
        </section>

        {/* 差异 */}
        <section id="diff">
          <h2 className="text-title font-semibold text-fg">两者改的东西不一样 / What each one actually changes</h2>
          <p className="mt-2 text-fg-secondary">
            合并改的是容器。你按最终阅读顺序排好 A、B、C 三份文件，工具按这个顺序把页面对象依次搬进一个新文件，页面一页不多一页不少，字体、矢量图形、已经压过的位图都原样带走。真正被改动的是文件级别的字段：标题只能留一份，书签要么重新排要么塌成一堆同名条目，具体取舍见 /blog/pdf-bookmark-merge-keep-outline。
          </p>
          <p className="mt-3 text-fg-secondary">
            拆分改的是页码边界。源文件不动，你给出一组页码范围，工具把落在每段里的页面复制成新文件。复制过去的还是原来那批页面对象，所以拆出来的第三份里的第十四页，和母版的第十四页是同一份数据。容易出问题的是跟着“整份文件”存在的东西：书签、封面、目录页、跨页的表格，最后只落在其中一个分片里。
          </p>
          <p className="mt-3 text-fg-secondary">
            Merging changes the container. You put files A, B and C into final reading order and the tool copies their page objects into a new file in that sequence. Nothing is added or dropped, and the fonts, vector graphics and already-compressed bitmaps come along unchanged. Splitting changes the page boundary instead: the source stays intact, you supply ranges, and each range becomes its own file holding copies of the original page objects. The awkward part is everything scoped to the whole document, since bookmarks, the cover, the contents page and tables spanning a spread end up living in one piece only.
          </p>
        </section>

        {/* 对照表 */}
        <section id="compare">
          <h2 className="text-title font-semibold text-fg">判断对照表 / Side-by-side</h2>
          <p className="mt-2 text-fg-secondary">
            七个维度摆在一起看，多数场合的答案在表的前三行就已经出现了。
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-line">
            <table className="w-full text-left text-sm">
              <thead className="bg-subtle text-fg-muted">
                <tr>
                  <th className="px-4 py-2 font-semibold">判断维度</th>
                  <th className="px-4 py-2 font-semibold">合并</th>
                  <th className="px-4 py-2 font-semibold">拆分</th>
                </tr>
              </thead>
              <tbody className="text-fg-secondary">
                {COMPARE.map((r) => (
                  <tr key={r.dim} className="border-t border-line">
                    <td className="px-4 py-2">{r.dim}</td>
                    <td className="px-4 py-2">{r.merge}</td>
                    <td className="px-4 py-2">{r.split}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-fg-secondary">
            最后一行最常被忽略：合并和拆分都不压缩页面内容，体积变化来自页面的重新组合，画质受损几乎总是中间那次压缩造成的。
          </p>
        </section>

        {/* 场合 */}
        <section id="scenarios">
          <h2 className="text-title font-semibold text-fg">五种场合怎么选 / Which one fits the job</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-fg-secondary">
            <li>
              <strong>合同正文加附件加签署页，对方要一份连续编号的正本。</strong>合并。收件方需要的是一个文件、一套页码，这是最典型的场景。
            </li>
            <li>
              <strong>扫描仪一次吐出六十页双面稿，中间还漏扫了一页。</strong>合并，但先用 Page Selection 把补扫那页插到正确位置，语法见 /blog/pdf-page-selection-1-3-5-syntax。
            </li>
            <li>
              <strong>企业邮箱附件上限 10MB，成品 42MB。</strong>拆分，按章节切开分几封发，或者顺便整份压一次；压缩与合并的先后问题见 /blog/compressed-pdf-merge-quality-loss。
            </li>
            <li>
              <strong>政府门户只收单个文件且不超过 5MB。</strong>两步都要：先合并确认内容齐全、页码连续，再拆到限制以下，别直接把没合过的原件扔上去。
            </li>
            <li>
              <strong>报销只要发票那两页，其余不用交。</strong>拆分。用页码范围把需要的部分取出来，比整份上传后让对方自己找干净得多。
            </li>
          </ul>
        </section>

        {/* 顺序 */}
        <section id="order">
          <h2 className="text-title font-semibold text-fg">先后顺序 / The order to work in</h2>
          <p className="mt-2 text-fg-secondary">
            两个动作的组合顺序，比单独选哪个更容易出错。下面这条路线适用于绝大多数场合，全程不超过五分钟。
          </p>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-fg-secondary">
            <li>先定终点：交付形态是一份还是多份，收件方有没有硬性大小限制</li>
            <li>需要合一就先合并，一次成型，中间不要夹压缩</li>
            <li>合并成品检查一遍页码和顺序，确认没有缺页也没有重复页，这一步就算定版</li>
            <li>定版之后再拆，按章节或页码范围切</li>
            <li>拆之前把书签和层级设好，页码范围才不会因为插入新页错位</li>
            <li>拆分成品立刻按规则命名，别留一堆重名的下载名，规则见 /blog/pdf-naming-conventions-merge</li>
            <li>母版单独存一份不动，成品放另一个文件夹</li>
          </ol>
          <p className="mt-3 text-fg-secondary">
            整个过程文件都留在本机，合并、拆分、检查都在浏览器里跑完，不需要先把合同传到别人的服务器上。大文件的内存策略见 /blog/large-pdf-merge-500mb，批量处理的做法见 /blog/pdf-batch-merge-100-files。
          </p>
          <Link
            href="/"
            className="mt-4 inline-block rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-on-primary transition-colors duration-fast hover:bg-brand-hover"
          >
            在 pdfmergenext.shop 先合并定版，再按页码范围拆分 →
          </Link>
          <p className="mt-2 text-sm text-fg-secondary">
            更多 PDF 合并拆分的判断细节见{' '}
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
            href="/blog/pdf-page-selection-1-3-5-syntax"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">PDF 页面选择：1-3,5 语法详解</p>
            <p className="mt-1 text-xs text-fg-secondary">Page Selection / 挑页与补页</p>
          </Link>
          <Link
            href="/blog/pdf-bookmark-merge-keep-outline"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">PDF 书签合并：怎样保住导航结构</p>
            <p className="mt-1 text-xs text-fg-secondary">Bookmarks / 结构与导航</p>
          </Link>
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
        </div>
      </section>
    </article>
  );
}
