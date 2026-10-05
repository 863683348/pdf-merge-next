import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';

export const metadata: Metadata = {
  title: 'PDF 书签合并：怎样保住导航结构 | PDF Bookmark Merge: Keep the Outline | PDFMergeNext',
  description:
    '合并带书签的 PDF，常见结果是目录层级塌成一堆同名条目、页码全部错位。这篇讲清 PDF 书签合并为什么会丢导航，哪些做法能保住层级，并给出可复用的本地流程。',
  keywords: [
    'pdf bookmark merge',
    'merge pdf keep bookmarks',
    'pdf outline merge',
    'bookmarks lost after merging pdf',
    'pdf bookmark navigation',
    'pdf 书签合并',
    '合并 pdf 保留书签',
    'pdf 目录合并',
    '书签层级错乱',
    'PDFMergeNext 书签合并',
  ],
  alternates: {
    canonical: '/blog/pdf-bookmark-merge-keep-outline',
    languages: {
      'zh-CN': '/blog/pdf-bookmark-merge-keep-outline',
      'en-US': '/blog/pdf-bookmark-merge-keep-outline',
      'x-default': '/blog/pdf-bookmark-merge-keep-outline',
    },
  },
  openGraph: {
    title: 'PDF 书签合并：怎样保住导航结构 · PDFMergeNext',
    description:
      '合并带书签的 PDF，常见结果是目录层级塌成一堆同名条目、页码全部错位。这篇讲清为什么会丢导航，以及哪些做法能保住层级。',
    type: 'article',
    url: `${SITE_URL}/blog/pdf-bookmark-merge-keep-outline`,
    siteName: 'PDFMergeNext',
    publishedTime: '2026-10-06T00:00:00.000Z',
    images: [{ url: `${SITE_URL}/og`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PDF 书签合并：怎样保住导航结构 · PDFMergeNext',
    description: '目标页码、父级引用、合并顺序，三个原因逐个拆开，给出能保住书签层级的本地流程。',
    images: [`${SITE_URL}/og`],
  },
};

const FAQ = [
  {
    q: 'PDF 合并之后书签还在吗？',
    a: '多数情况还在，前提是源文件本身带书签、合并过程没有重建页面对象。合并后打开书签面板逐条点一遍，比看一眼目录是否存在更可靠，因为条目在但页码错位的情况很常见。',
  },
  {
    q: '为什么书签点下去跳到了错误的页面？',
    a: '书签指向的是页面对象，不是页码数字。合并时页面被重新编号，如果条目还按旧顺序拼接，跳转就会偏。按最终顺序重新合并一次通常就能对齐。',
  },
  {
    q: '能不能把两个文件的书签合成一个统一目录？',
    a: '可以。合并时在两份书签之间插入一个顶层分类条目，再把两边的章节挂到各自分类下，读起来就是一份完整目录。这一步在本地阅读器的书签编辑模式里做最省事。',
  },
  {
    q: '扫描版 PDF 有办法生成书签吗？',
    a: '扫描件本身没有文字层，也就没有书签可合并。先做文字识别，再按章节标题手动建立条目，或者用识别结果里的标题样式自动生成。',
  },
  {
    q: 'Do bookmarks survive a PDF merge?',
    a: 'Usually yes, as long as both sources carry an outline and the merge does not rebuild page objects. Click through every entry afterwards, because an outline can be present and still point at the wrong pages.',
  },
  {
    q: 'Why did my outline collapse into one flat list?',
    a: 'The parent reference was dropped while repacking the document tree. Without it every entry becomes a top-level item. Re-merge with a path that preserves the outline tree, or rebuild the nesting once in an editor.',
  },
];

const TOC = [
  { id: 'lead', label: '一句话结论 / TL;DR' },
  { id: 'why', label: '为什么合并后书签会乱' },
  { id: 'methods', label: '不同做法对书签的影响' },
  { id: 'workflow', label: '本地操作流程' },
  { id: 'checklist', label: '排查清单' },
  { id: 'faq', label: '常见问题' },
];

const OUTLINE_TABLE = [
  { part: '书签条目 / Outline item', role: '标题文字与层级位置', risk: '两个文件的顶层标题同名，合并后分不清' },
  { part: '目标页码 / Destination', role: '指向具体的页面对象', risk: '页面重排后仍指向旧位置，跳转错位' },
  { part: '父级引用 / Parent', role: '决定缩进与层级归属', risk: '父级丢失，全部条目塌成一级' },
  { part: '展开状态 / Open state', role: '控制打开时是否展开', risk: '一般能保留，个别工具会重置为收起' },
];

const METHOD_TABLE = [
  { way: '直接合并两个带书签的 PDF', keep: '多数保留', note: '条目按文件顺序拼接，需检查页码' },
  { way: '合并后再手动补书签', keep: '原有加新增都保留', note: '适合加统一的封面或附录条目' },
  { way: '先打印成 PDF 再合并', keep: '全部丢失', note: '打印重建页面对象，书签无处挂载' },
  { way: '合并扫描件或图片型 PDF', keep: '本来就没有', note: '需先识别文字再手动建立条目' },
  { way: '只合并选中的部分页面', keep: '保留选中范围内的条目', note: '未选中页面对应的条目会被丢掉' },
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
            name: 'PDF 书签合并：怎样保住导航结构',
            item: `${SITE_URL}/blog/pdf-bookmark-merge-keep-outline`,
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
        headline: 'PDF 书签合并：怎样保住导航结构 / PDF Bookmark Merge: How to Keep the Navigation Outline',
        description:
          '合并带书签的 PDF，常见结果是目录层级塌成一堆同名条目、页码全部错位。这篇讲清 PDF 书签合并为什么会丢导航，哪些做法能保住层级，并给出可复用的本地流程。',
        author: {
          '@type': 'Person',
          name: 'PDFMergeNext',
          url: 'https://pdfmergenext.shop',
          '@id': 'https://pdfmergenext.shop/#organization',
        },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-10-06',
        dateModified: '2026-10-06',
        image: `${SITE_URL}/og`,
        url: `${SITE_URL}/blog/pdf-bookmark-merge-keep-outline`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/pdf-bookmark-merge-keep-outline` },
      },
    ],
  };

  return (
    <article className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-16">
      <header>
        <p className="text-caption font-semibold uppercase tracking-wide text-brand">
          书签导航 · Bookmarks
        </p>
        <h1 className="mt-2 text-h1 font-bold tracking-tight text-fg">
          PDF 书签合并：怎样保住导航结构 / PDF Bookmark Merge: How to Keep the Navigation Outline
        </h1>
        <p className="mt-3 text-body text-fg-secondary">
          做 PDF 书签合并时，最常遇到的情况是页面合成了一份，左边的目录却塌成一堆同名条目，点下去还跳错页。这篇讲清导航为什么会坏，以及哪些流程能保住它。
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
            <strong>PDF 书签合并可以保住导航结构</strong>，但要满足三个条件：两个源文件本身都带书签、合并过程不重建页面对象、合并顺序与最终阅读顺序一致。中间只要经过一次打印成 PDF 或导出为图片，书签就没有挂载点，没有回头路。
          </p>
          <p className="mt-2 text-fg-secondary">
            A PDF bookmark merge keeps the navigation outline when both sources carry one, the merge leaves page objects intact, and the file order matches the final reading order. One print-to-PDF step removes the anchors the outline points at, and that cannot be reversed.
          </p>
        </section>

        {/* 原因 */}
        <section id="why">
          <h2 className="text-title font-semibold text-fg">为什么合并后书签会乱 / Why the outline breaks on merge</h2>
          <p className="mt-2 text-fg-secondary">
            书签不是写在页面上的文字，它是挂在文档树上的一层结构。每个条目带着三样东西：显示用的标题、指向某个页面对象的跳转目标、以及决定缩进层级的父级引用。合并要做的事是把两个文件的页面对象读出来、重新编号、写进一个新文件。页面变了编号，条目却还按原来的顺序挂着。
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-line">
            <table className="w-full text-left text-sm">
              <thead className="bg-subtle text-fg-muted">
                <tr>
                  <th className="px-4 py-2 font-semibold">组成部分</th>
                  <th className="px-4 py-2 font-semibold">作用</th>
                  <th className="px-4 py-2 font-semibold">合并时最容易出的问题</th>
                </tr>
              </thead>
              <tbody className="text-fg-secondary">
                {OUTLINE_TABLE.map((r) => (
                  <tr key={r.part} className="border-t border-line">
                    <td className="px-4 py-2">{r.part}</td>
                    <td className="px-4 py-2">{r.role}</td>
                    <td className="px-4 py-2">{r.risk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-fg-secondary">
            两个文件各有一个叫「第一章」的顶层条目时，合并后的面板里就出现两个一模一样的名字，你没法判断该点哪个。这类冲突在合并前完全看不出来。另一类问题更隐蔽：条目都在、层级也对，但点下去跳到了中间某页，因为合并顺序和当初预期的页码排布不一样。
          </p>
          <p className="mt-3 text-fg-secondary">
            An outline entry carries three things: a display title, a destination pointing at a page object, and a parent reference that sets its nesting level. Merging renumbers page objects, so destinations written against the old order drift. Two files that each have a chapter one produce two identical top-level labels, and duplicates stay invisible until the panel is open.
          </p>
        </section>

        {/* 做法 */}
        <section id="methods">
          <h2 className="text-title font-semibold text-fg">不同合并做法对书签的影响 / What each merge path does to bookmarks</h2>
          <div className="mt-4 overflow-x-auto rounded-lg border border-line">
            <table className="w-full text-left text-sm">
              <thead className="bg-subtle text-fg-muted">
                <tr>
                  <th className="px-4 py-2 font-semibold">做法</th>
                  <th className="px-4 py-2 font-semibold">书签结果</th>
                  <th className="px-4 py-2 font-semibold">说明</th>
                </tr>
              </thead>
              <tbody className="text-fg-secondary">
                {METHOD_TABLE.map((r) => (
                  <tr key={r.way} className="border-t border-line">
                    <td className="px-4 py-2">{r.way}</td>
                    <td className="px-4 py-2">{r.keep}</td>
                    <td className="px-4 py-2">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-fg-secondary">
            <li>合并前先各打开一次源文件，确认书签面板能看到完整层级。源文件已经是扫描件或图片型 PDF，后面怎么操作都变不出书签。</li>
            <li>避开任何中间转换：虚拟打印、截图、导出为图片，这三条路都会重建页面对象。</li>
            <li>只用部分页面时，先想清楚被跳过的页面上有几个书签条目，这些条目会一起消失。</li>
            <li>想要一份统一目录，就在合并后插入顶层分类条目，再把两边章节挂进去，比逐条改层级快得多。</li>
          </ul>
          <p className="mt-3 text-fg-secondary">
            Open each source first and confirm the outline panel shows the full tree. Skip virtual printing, screenshots, and image exports, since all three rebuild page objects. When merging a page range, count how many entries sit on the skipped pages, because those go too. For one unified table of contents, add a top-level category after merging and nest both sides under it instead of fixing levels one by one.
          </p>
        </section>

        {/* 本地流程 */}
        <section id="workflow">
          <h2 className="text-title font-semibold text-fg">保留导航结构的本地流程 / A local workflow that keeps the outline</h2>
          <p className="mt-2 text-fg-secondary">
            带书签的文件往往是合同、标书、论文、产品手册这类长文档，内容本身就不适合传到第三方服务器。全程在浏览器本地处理，文件不出本机，导航结构也更容易保住。
          </p>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-fg-secondary">
            <li>逐个打开源文件，确认书签面板里能看到完整层级，并记录每个文件的页数</li>
            <li>比对两份顶层标题，同名的先加区分前缀，第一章改成上册-第一章与下册-第一章</li>
            <li>按最终阅读顺序排列文件，确认页码连续，顺序一次定好</li>
            <li>在本地执行合并，输出新文件</li>
            <li>打开新文件的书签面板，逐条点击验证跳转位置</li>
            <li>需要统一目录时，插入顶层分类条目并把两边章节挂进去</li>
            <li>确认层级与跳转都无误后删除临时副本</li>
          </ol>
          <p className="mt-3 text-fg-secondary">
            第 5 步别省。条目存在和条目能跳对是两回事，只扫一眼面板很容易漏掉整段偏移。想要更细的页码与顺序控制，可以先看 /blog/pdf-page-selection-1-3-5-syntax 里讲的选择语法。
          </p>
          <Link
            href="/"
            className="mt-4 inline-block rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-on-primary transition-colors duration-fast hover:bg-brand-hover"
          >
            在 pdfmergenext.shop 本地合并并保留书签 →
          </Link>
        </section>

        {/* 排查清单 */}
        <section id="checklist" className="rounded-xl border border-line p-6">
          <h2 className="text-title font-semibold text-fg">排查清单 / Troubleshooting checklist</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-fg-secondary">
            <li>书签整列消失：中间经过了打印或图片导出，回到源文件重新合并</li>
            <li>层级塌平：父级引用在重排文档树时丢失，改用保留大纲的合并路径</li>
            <li>跳转页码错位：合并顺序与最终顺序不一致，按顺序重做一次</li>
            <li>同名条目分不清：合并前给两个文件的顶层标题加前缀</li>
            <li>点击跳到空白页：目标页面被删除或替换，重新指定跳转位置</li>
            <li>条目在但打不开：部分阅读器对嵌套过深的层级支持有限，收敛到三层以内</li>
          </ul>
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
            href="/blog/pdf-naming-conventions-merge"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">PDF 合并前的命名规范</p>
            <p className="mt-1 text-xs text-fg-secondary">Naming Conventions / 顺序与排序</p>
          </Link>
          <Link
            href="/blog/pdf-batch-merge-100-files"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">PDF 批量合并 100 个文件</p>
            <p className="mt-1 text-xs text-fg-secondary">Batch Merge / 命名与排序</p>
          </Link>
          <Link
            href="/blog/pdf-page-selection-1-3-5-syntax"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">PDF 页面选择语法：1,3-5 怎么用</p>
            <p className="mt-1 text-xs text-fg-secondary">Page Selection / 页码控制</p>
          </Link>
          <Link
            href="/blog/pdf-form-merge-keep-fields"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">PDF 表单合并：怎样保住可填写字段</p>
            <p className="mt-1 text-xs text-fg-secondary">Form Merge / 字段与对象</p>
          </Link>
        </div>
      </section>
    </article>
  );
}
