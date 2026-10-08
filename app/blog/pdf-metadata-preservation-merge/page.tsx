import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';
const SLUG = 'pdf-metadata-preservation-merge';

export const metadata: Metadata = {
  title:
    'PDF 元数据保留：合并时该注意什么 | PDF Metadata Preservation | PDFMergeNext',
  description:
    '合并 PDF 时元数据不会自动跟着走：文档信息字典一个文件只有一份，合并后标题、作者、关键词只能留下其中一套值。这篇讲清元数据有哪几层、哪些会留下、哪些会被覆盖，以及合并前后怎么回填。',
  keywords: [
    'pdf metadata preservation',
    'merge pdf keep metadata',
    'pdf metadata lost after merge',
    'preserve pdf title author metadata',
    'pdf metadata merge tool',
    'PDF 元数据保留',
    '合并PDF保留元数据',
    'pdf 合并后元数据丢失',
    'PDF 元数据被覆盖',
    'PDFMergeNext 元数据',
  ],
  alternates: {
    canonical: '/blog/pdf-metadata-preservation-merge',
    languages: {
      'zh-CN': '/blog/pdf-metadata-preservation-merge',
      'en-US': '/blog/pdf-metadata-preservation-merge',
      'x-default': '/blog/pdf-metadata-preservation-merge',
    },
  },
  openGraph: {
    title: 'PDF 元数据保留：合并时该注意什么 · PDFMergeNext',
    description:
      '文档信息字典只有一份，合并后标题、作者、关键词只能留下其中一套值。这篇讲清哪些会留下、哪些会被覆盖，以及合并前后怎么回填。',
    type: 'article',
    url: SITE_URL + '/blog/' + SLUG,
    siteName: 'PDFMergeNext',
    publishedTime: '2026-10-09T00:00:00.000Z',
    images: [{ url: SITE_URL + '/og', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PDF 元数据保留：合并时该注意什么 · PDFMergeNext',
    description:
      '合并前先抄下每份文件的元数据，合并后再回填。指望合并自动汇总是不行的。',
    images: [SITE_URL + '/og'],
  },
};

const FAQ = [
  {
    q: '合并后标题和作者怎么只剩一个？',
    a: '因为文档信息字典在一个文件里只有一份。合并工具会挑一份写进成品，通常是第一个源文件的那一份。要保住两份的内容，就在合并后手动回填，作者可以写成两个人，关键词合并去重后一次填入。',
  },
  {
    q: '修改时间变了要紧吗？',
    a: '不要紧。修改时间记录的是成品最后一次被写盘的时间，它就该是合并那天。真正需要回填的是标题、作者、关键词这类描述性字段，它们描述的是文件内容而不是操作时间。',
  },
  {
    q: 'XMP 和文档信息字典要同时改吗？',
    a: '要。两套并存且不会自动同步，只改一边会让不同工具读到不同结果。改完一边就重新生成另一边，或者直接用能同时写两边的工具处理一次。',
  },
  {
    q: 'Why does the merged file only keep one title and one author?',
    a: 'The document information dictionary holds one set of values per file. A merge tool picks one and writes it into the output, usually the first source. Write the values back by hand if you need both, combining the author names and de-duplicating the keywords.',
  },
  {
    q: 'Does it matter that the modification date changed?',
    a: 'No. That field records the last write to the finished file, and the merge day is the correct value for it. Title, author and keywords are the fields worth restoring, since those describe the content rather than the operation.',
  },
  {
    q: 'Do I have to update XMP and the info dictionary together?',
    a: 'Yes. Both exist side by side and neither syncs automatically, so editing only one leaves different tools reading different values. Regenerate the other side after each edit, or use a tool that writes both in one pass.',
  },
];

const TOC = [
  { id: 'lead', label: '一句话结论 / TL;DR' },
  { id: 'layers', label: '元数据有哪几层' },
  { id: 'survives', label: '哪些留下、哪些被覆盖' },
  { id: 'traps', label: '三个最容易丢的场合' },
  { id: 'workflow', label: '合并前后怎么回填' },
  { id: 'faq', label: '常见问题 / FAQ' },
];

const FIELDS = [
  { name: '标题 / Title', before: '两份不同', after: '只留一份', note: '合并后手动回填' },
  { name: '作者 / Author', before: '两份不同', after: '被覆盖', note: '可写成两个人' },
  { name: '关键词 / Keywords', before: '两份不同', after: '被覆盖', note: '合并去重后回填' },
  { name: '创建时间 / CreationDate', before: '各不相同', after: '取其一', note: '以最早那份为准' },
  { name: '修改时间 / ModDate', before: '各不相同', after: '变成合并当天', note: '正常，不用改' },
  { name: '创建程序 / Producer', before: '可能不同', after: '变成合并工具', note: '正常，不用改' },
  { name: '页面尺寸与旋转', before: '各不相同', after: '逐页保留', note: '绑在页面上，不用管' },
  { name: 'XMP 扩展字段', before: '两份不同', after: '留一份或整包丢弃', note: '改完信息字典后重新生成' },
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
            name: 'PDF 元数据保留：合并时该注意什么',
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
          'PDF 元数据保留：合并时该注意什么 / PDF Metadata Preservation: What Survives a Merge',
        description:
          '合并 PDF 时元数据不会自动跟着走：文档信息字典一个文件只有一份，合并后标题、作者、关键词只能留下其中一套值。这篇讲清元数据有哪几层、哪些会留下、哪些会被覆盖，以及合并前后怎么回填。',
        author: {
          '@type': 'Person',
          name: 'PDFMergeNext',
          url: 'https://pdfmergenext.shop',
          '@id': 'https://pdfmergenext.shop/#organization',
        },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-10-09',
        dateModified: '2026-10-09',
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
          元数据 · Metadata
        </p>
        <h1 className="mt-2 text-h1 font-bold tracking-tight text-fg">
          PDF 元数据保留：合并时该注意什么 / PDF Metadata Preservation: What Survives a Merge
        </h1>
        <p className="mt-3 text-body text-fg-secondary">
          合并 PDF 时，元数据不会自动跟着走。文档信息字典在一个文件里只有一份，两份合成一份之后，标题、作者、主题、关键词只能留下其中一套值。动手之前先把每份文件的元数据抄下来，合并之后再回填你要的那一份。
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
            PDF 元数据保留这件事，指望合并工具自动汇总是不行的。描述整个文档的字段在一个文件里只有一份，合并后只能留下其中一套值，多数工具取第一个源文件的那套。能完整保住的是绑在页面上的信息，页面尺寸、旋转角度这些跟着页面走。做法很简单：合并前把每份文件的标题、作者、关键词抄下来，合并后打开成品的属性面板逐项回填。
          </p>
          <p className="mt-2 text-fg-secondary">
            A merge does not carry metadata across on its own. The fields that describe a whole document exist once per file, so after two files become one only one set of values can stay, and most tools keep the first source. What does carry over intact is page level information, since media box and rotation travel with the page. Copy the title, author and keywords down before you merge, then write them back into the finished file.
          </p>
        </section>

        {/* 层次 */}
        <section id="layers">
          <h2 className="text-title font-semibold text-fg">元数据有哪几层 / Where metadata actually lives</h2>
          <p className="mt-2 text-fg-secondary">
            PDF 的元数据不是一整块。它散在几个地方，合并时各自的下场也不一样，先分清位置再谈保留。
          </p>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-fg-secondary">
            <li>文档信息字典：标题、作者、主题、关键词、创建程序、创建与修改时间。一个文件只有一份</li>
            <li>XMP 包：XML 形式的一套扩展字段，版权状态、来源、标签常放在这里</li>
            <li>页面级信息：页面尺寸、旋转角度、缩略图设置，跟着页面走</li>
            <li>结构信息：书签、内部链接、表单字段，属于文档树的一部分</li>
            <li>嵌入附件与输出意图：跟着具体对象走，合并时通常一起搬过去</li>
          </ul>
          <p className="mt-3 text-fg-secondary">
            PDF metadata is not a single block. It sits in several places and each one behaves differently during a merge, so it helps to know where a field lives before arguing about whether it should survive. The document information dictionary is the one people notice, because that is what the properties panel shows. XMP is the one that quietly disagrees with it.
          </p>
        </section>

        {/* 哪些留下 */}
        <section id="survives">
          <h2 className="text-title font-semibold text-fg">哪些留下、哪些被覆盖 / What survives and what gets overwritten</h2>
          <p className="mt-2 text-fg-secondary">
            下面用两份各带完整元数据的文件举例。合并前的取值、合并后的常见结果、以及该不该处理，都在表里。
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-line">
            <table className="w-full text-left text-sm">
              <thead className="bg-subtle text-fg-muted">
                <tr>
                  <th className="px-4 py-2 font-semibold">字段</th>
                  <th className="px-4 py-2 font-semibold">合并前</th>
                  <th className="px-4 py-2 font-semibold">合并后常见结果</th>
                  <th className="px-4 py-2 font-semibold">怎么处理</th>
                </tr>
              </thead>
              <tbody className="text-fg-secondary">
                {FIELDS.map((r) => (
                  <tr key={r.name} className="border-t border-line">
                    <td className="px-4 py-2">{r.name}</td>
                    <td className="px-4 py-2">{r.before}</td>
                    <td className="px-4 py-2">{r.after}</td>
                    <td className="px-4 py-2">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-fg-secondary">
            表里最该盯的是前三项加 XMP。修改时间和创建程序变化属于正常记录，不用去改；标题、作者、关键词变了才是真的丢了东西。
          </p>
          <p className="mt-3 text-fg-secondary">
            The rows that matter are the first three plus XMP. A changed modification date or producer is just the record of what happened, and there is nothing to restore. A changed title, author or keyword list means information is genuinely gone from the finished file.
          </p>
        </section>

        {/* 陷阱 */}
        <section id="traps">
          <h2 className="text-title font-semibold text-fg">三个最容易丢的场合 / Three ways metadata goes missing</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-fg-secondary">
            <li>
              <strong>指望元数据自动汇总。</strong>不会。合并工具只挑一份写进成品，通常取第一个源文件，剩下的那套直接丢掉。
            </li>
            <li>
              <strong>先压缩再合并。</strong>不少压缩工具会顺手清掉元数据字段。顺序换成先合并再压缩，压缩只做一次。
            </li>
            <li>
              <strong>只改信息字典不改 XMP。</strong>两套并存且不同步，只改一边会让不同工具读到不同结果，检索系统往往读到旧的那一套。
            </li>
          </ul>
          <p className="mt-3 text-fg-secondary">
            Expecting metadata to combine automatically is the common one, and it never works: the merge tool picks one set and the rest is dropped. Compressing before merging is the sneaky one, since plenty of compression tools strip fields as a side effect, so merge first and compress once. Editing the info dictionary while leaving XMP alone leaves the two disagreeing, and search systems tend to read whichever one you did not touch.
          </p>
        </section>

        {/* 回填流程 */}
        <section id="workflow">
          <h2 className="text-title font-semibold text-fg">合并前后怎么回填 / A workflow that keeps the fields you care about</h2>
          <p className="mt-2 text-fg-secondary">
            把抄和回填两步放进流程里，成本只有一两分钟，比事后从源文件里翻回原值省事得多。文件全程不出本机。
          </p>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-fg-secondary">
            <li>合并前逐份打开属性面板，把标题、作者、关键词抄下来</li>
            <li>判断哪一份的元数据描述的是成品，作为回填的底稿</li>
            <li>按最终阅读顺序排好源文件，一次合并，避免事后返工</li>
            <li>合并后打开成品属性面板，逐项对照抄下来的值</li>
            <li>回填标题、作者、关键词，作者可以两份合一，关键词去重后一次填入</li>
            <li>创建时间取最早那份，修改时间保持为合并当天</li>
            <li>检查 XMP 与信息字典是否一致，不一致就重新生成一份</li>
            <li>成品与母版分开存，母版不动</li>
          </ol>
          <p className="mt-3 text-fg-secondary">
            书签和表单字段的保留方式见 /blog/pdf-bookmark-merge-keep-outline 与 /blog/pdf-form-merge-keep-fields；压缩与合并的先后顺序在 /blog/compressed-pdf-merge-quality-loss 里有说明。
          </p>
          <Link
            href="/"
            className="mt-4 inline-block rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-on-primary transition-colors duration-fast hover:bg-brand-hover"
          >
            在 pdfmergenext.shop 合并 PDF，合并前先抄下元数据 →
          </Link>
          <p className="mt-2 text-sm text-fg-secondary">
            更多 PDF 元数据保留的做法见{' '}
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
            href="/blog/pdf-bookmark-merge-keep-outline"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">PDF 书签合并：怎样保住导航结构</p>
            <p className="mt-1 text-xs text-fg-secondary">Bookmarks / 结构与导航</p>
          </Link>
          <Link
            href="/blog/pdf-form-merge-keep-fields"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">PDF 表单合并：怎样保住可填写字段</p>
            <p className="mt-1 text-xs text-fg-secondary">PDF Forms / 字段与交互</p>
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
