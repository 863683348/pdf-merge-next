import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';

export const metadata: Metadata = {
  title: 'PDF 表单合并：怎样保住可填写字段 | PDF Form Merge: Keep Fillable Fields | PDFMergeNext',
  description:
    '合并带表单的 PDF 后字段变灰、填不了、提交报错，多半是字段重名或页面对象被重建。这篇讲清哪些做法能保住字段、哪些一定丢，并给出可复用的本地流程。',
  keywords: [
    'pdf form merge',
    'merge fillable pdf',
    'pdf 表单合并',
    'keep fillable fields when merging pdf',
    'pdf form fields lost after merge',
    'acroform pdf merge',
    'xfa form merge',
    '合并后表单字段失效',
    'pdf 表单 字段丢失',
    'PDFMergeNext 表单合并',
  ],
  alternates: {
    canonical: '/blog/pdf-form-merge-keep-fields',
    languages: {
      'zh-CN': '/blog/pdf-form-merge-keep-fields',
      'en-US': '/blog/pdf-form-merge-keep-fields',
      'x-default': '/blog/pdf-form-merge-keep-fields',
    },
  },
  openGraph: {
    title: 'PDF 表单合并：怎样保住可填写字段 · PDFMergeNext',
    description:
      '合并带表单的 PDF 后字段变灰、填不了、提交报错，多半是字段重名或页面对象被重建。这篇讲清哪些做法能保住字段、哪些一定丢。',
    type: 'article',
    url: `${SITE_URL}/blog/pdf-form-merge-keep-fields`,
    siteName: 'PDFMergeNext',
    publishedTime: '2026-10-05T00:00:00.000Z',
    images: [{ url: `${SITE_URL}/og`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PDF 表单合并：怎样保住可填写字段 · PDFMergeNext',
    description: '字段重名、XFA 结构、扁平化打印，三个原因逐个拆开，给出能保住可填写字段的本地流程。',
    images: [`${SITE_URL}/og`],
  },
};

const FAQ = [
  {
    q: 'PDF 表单合并后还能填写吗？',
    a: '多数情况可以，前提是源文件是 AcroForm 表单、字段名不冲突，且合并过程没有经过打印或图片化转换。合并后逐个字段测一遍是最稳的验证方式。',
  },
  {
    q: '为什么两个文件里都有 name 字段，合并后填一个另一个跟着变？',
    a: '因为字段名就是字段的身份标识。同名字段会被视为同一个字段的多个显示实例，共享同一个值。把其中一个改名就能分开。',
  },
  {
    q: 'XFA 表单能不能合并？',
    a: '基本不能。XFA 的表单结构存在 XML 里，多数合并工具只处理页面树，会直接丢弃 XFA 内容。先用桌面阅读器转成 AcroForm，再走合并流程。',
  },
  {
    q: '合并后字段保留，但下拉选项没了，怎么补？',
    a: '打开表单编辑模式，选中该字段，重新录入选项列表。选项挂在字段对象上，重排页面时容易被丢掉，补一次即可，不影响已填的值。',
  },
  {
    q: 'Can I merge two fillable PDFs and still submit the result?',
    a: 'Yes, if both sources are AcroForm, field names are unique, and no flattening step runs in between. Retest the submit action afterwards, because it references field paths from the original file.',
  },
  {
    q: 'Why did my fields disappear after printing to PDF?',
    a: 'Printing rasterizes or repackages the page, so form widgets become static content and the field objects are dropped. Nothing later can restore them, so go back to the original file.',
  },
];

const TOC = [
  { id: 'lead', label: '一句话结论 / TL;DR' },
  { id: 'why', label: '为什么合并后字段会失效' },
  { id: 'collision', label: '字段重名：第一大原因' },
  { id: 'keep', label: '哪些做法能保住字段' },
  { id: 'workflow', label: '本地操作流程' },
  { id: 'checklist', label: '排查清单' },
  { id: 'faq', label: '常见问题' },
];

const FAIL_TABLE = [
  { sym: '字段变灰、点不动', cause: '字段被扁平化成静态内容', fix: '不能恢复，回到源文件重做' },
  { sym: '填一处，另一处跟着变', cause: '合并后字段重名', fix: '能恢复，重命名即可' },
  { sym: '能填但提交报缺少字段', cause: '提交动作绑定的是旧文件', fix: '能恢复，重新绑定按钮' },
  { sym: '金额或合计算错', cause: '计算顺序依赖字段索引', fix: '能恢复，重排计算顺序' },
  { sym: '下拉选项消失', cause: '选项列表挂在被丢弃的对象上', fix: '多数能恢复，重设选项' },
];

const METHOD_TABLE = [
  { way: '直接合并两个 AcroForm 文件', keep: '通常保留', note: '需检查字段名是否重复' },
  { way: '先打印成 PDF 再合并', keep: '全部丢失', note: '字段被扁平化成图像' },
  { way: '用导出为 PDF 另存', keep: '多数保留', note: '少数阅读器会顺手扁平化' },
  { way: '合并 XFA 表单', keep: '基本丢失', note: '先转成 AcroForm 再合并' },
  { way: '合并后再补字段', keep: '原有加新增都保留', note: '适合加署名栏或日期栏' },
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
            name: 'PDF 表单合并：怎样保住可填写字段',
            item: `${SITE_URL}/blog/pdf-form-merge-keep-fields`,
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
        headline: 'PDF 表单合并：怎样保住可填写字段 / PDF Form Merge: How to Keep Fillable Fields',
        description:
          '合并带表单的 PDF 后字段变灰、填不了、提交报错，多半是字段重名或页面对象被重建。这篇讲清哪些做法能保住字段、哪些一定丢，并给出可复用的本地流程。',
        author: {
          '@type': 'Person',
          name: 'PDFMergeNext',
          url: 'https://pdfmergenext.shop',
          '@id': 'https://pdfmergenext.shop/#organization',
        },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-10-05',
        dateModified: '2026-10-05',
        image: `${SITE_URL}/og`,
        url: `${SITE_URL}/blog/pdf-form-merge-keep-fields`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/pdf-form-merge-keep-fields` },
      },
    ],
  };

  return (
    <article className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-16">
      <header>
        <p className="text-caption font-semibold uppercase tracking-wide text-brand">
          表单处理 · PDF Forms
        </p>
        <h1 className="mt-2 text-h1 font-bold tracking-tight text-fg">
          PDF 表单合并：怎样保住可填写字段 / PDF Form Merge: How to Keep Fillable Fields
        </h1>
        <p className="mt-3 text-body text-fg-secondary">
          合并带表单的 PDF，最常见的结局是页面合成了一份，原来的输入框却点不动、填不进、提交报错。这篇讲清楚字段为什么会失效，以及哪些流程能保住它们。
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
            <strong>PDF 表单合并可以保住可填写字段</strong>，但要满足三个条件：源文件都是 AcroForm 表单、字段全名不冲突、合并过程保留原始页面对象。中间只要经过一次打印成 PDF 或导出为图片，字段就变成像素，没有回头路。
          </p>
          <p className="mt-2 text-fg-secondary">
            PDF form merge keeps fillable fields when both sources are AcroForm, no two fields share a fully qualified name, and the merge preserves the original page objects. One flattening step turns fields into pixels, and that cannot be undone.
          </p>
        </section>

        {/* 原因 */}
        <section id="why">
          <h2 className="text-title font-semibold text-fg">为什么合并后表单字段会失效 / Why fields break when you merge</h2>
          <p className="mt-2 text-fg-secondary">
            表单字段不是画在页面上的图形。它是挂在页面对象下的一层注释，带着字段名、类型、默认值、校验规则和计算脚本。合并时工具要把两个文件的页面对象读出来、重新编号、写进一个新文件。字段的父页面变了，字段名却没变。
          </p>
          <p className="mt-3 text-fg-secondary">
            如果两个文件各有一个 signature 字段，合并后的文件里就有两个同名字段。按 PDF 规范，字段名是唯一标识，同名的一批字段会被当成同一个字段的多个 widget。你在一处输入，另一处跟着变，看起来像文件坏了，其实是规范就是这样工作的。
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-line">
            <table className="w-full text-left text-sm">
              <thead className="bg-subtle text-fg-muted">
                <tr>
                  <th className="px-4 py-2 font-semibold">失效表现</th>
                  <th className="px-4 py-2 font-semibold">直接原因</th>
                  <th className="px-4 py-2 font-semibold">能否恢复</th>
                </tr>
              </thead>
              <tbody className="text-fg-secondary">
                {FAIL_TABLE.map((r) => (
                  <tr key={r.sym} className="border-t border-line">
                    <td className="px-4 py-2">{r.sym}</td>
                    <td className="px-4 py-2">{r.cause}</td>
                    <td className="px-4 py-2">{r.fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-fg-secondary">
            A form field is an annotation attached to a page object, carrying a name, type, default value, validation rule, and sometimes a calculation script. Merging renumbers page objects, so the parent reference changes while the name does not. Two fields named the same in the merged file are treated as widgets of one field, sharing a single value.
          </p>
        </section>

        {/* 重名 */}
        <section id="collision">
          <h2 className="text-title font-semibold text-fg">字段重名：合并失败的第一大原因 / Field name collisions</h2>
          <p className="mt-2 text-fg-secondary">
            重名在单文件里看不出来，合并后才暴露。两个部门各自做的报销单都叫 amount，两份学校表格都有 student_name，这类冲突非常常见。
          </p>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-fg-secondary">
            <li>合并后在阅读器的表单编辑模式里打开字段列表，找重复项</li>
            <li>给重名字段加前缀，改成 formA.amount 与 formB.amount</li>
            <li>重新合并，再在两个字段里分别输入不同内容做验证</li>
            <li>值互不覆盖才算分开，仍然同步说明前缀没生效</li>
          </ol>
          <p className="mt-3 text-fg-secondary">
            Collisions stay invisible inside one file and surface only after merging. Check the field list for duplicates, rename with a qualified prefix, then retest by typing different values into the two fields. If neither overwrites the other, they are separate.
          </p>
        </section>

        {/* 保住字段 */}
        <section id="keep">
          <h2 className="text-title font-semibold text-fg">哪些做法能保住字段 / What preserves fillable fields</h2>
          <div className="mt-4 overflow-x-auto rounded-lg border border-line">
            <table className="w-full text-left text-sm">
              <thead className="bg-subtle text-fg-muted">
                <tr>
                  <th className="px-4 py-2 font-semibold">做法</th>
                  <th className="px-4 py-2 font-semibold">字段是否保留</th>
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
            <li>合并前先各打开一次源文件，确认输入框还能点。源文件本身已扁平化，后面怎么操作都救不回来。</li>
            <li>避免任何中间转换：截图、扫描、虚拟打印机，这三条路都会把字段变成像素。</li>
            <li>合并顺序先定好再操作，合并完再拖动页面会再动一次字段的父级引用。</li>
            <li>带签名或金额计算的表单，合并后要重测提交，不能只看能不能填。</li>
          </ul>
        </section>

        {/* 本地流程 */}
        <section id="workflow">
          <h2 className="text-title font-semibold text-fg">本地合规操作流程 / A local workflow</h2>
          <p className="mt-2 text-fg-secondary">
            表单里填的是姓名、证件号、银行账号、薪资这类内容。上传到第三方服务器，意味着解密后的明文留在别人的机器上。全程在本地处理更稳妥。
          </p>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-fg-secondary">
            <li>逐个打开源文件，确认每个都是可填写的 AcroForm 表单</li>
            <li>导出字段清单，比对重名项，先在源文件里改字段名</li>
            <li>按目标顺序排列文件，确认页码连续</li>
            <li>在本地合并，输出新文件</li>
            <li>打开新文件，逐个测试输入、下拉、复选框和计算</li>
            <li>测提交动作，确认提交地址和目标字段都在</li>
            <li>确认无误后删除临时副本</li>
          </ol>
          <Link
            href="/"
            className="mt-4 inline-block rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-on-primary transition-colors duration-fast hover:bg-brand-hover"
          >
            本地合并带表单的 PDF →
          </Link>
        </section>

        {/* 排查清单 */}
        <section id="checklist" className="rounded-xl border border-line p-6">
          <h2 className="text-title font-semibold text-fg">排查清单 / Troubleshooting checklist</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-fg-secondary">
            <li>字段全灰：源文件已被扁平化，回到原始版本重新合并</li>
            <li>输入值互相覆盖：字段重名，加前缀后重做</li>
            <li>提交按钮失效：提交动作引用的是旧文件的字段路径，重新绑定</li>
            <li>合并后体积暴涨：嵌入字体被重复打包，可用本地压缩收敛</li>
            <li>手机上填不了：部分移动阅读器对 JavaScript 计算支持有限，改用桌面端</li>
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
            href="/blog/encrypted-pdf-can-you-merge"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">PDF 加密文件能合并吗？</p>
            <p className="mt-1 text-xs text-fg-secondary">Encrypted PDF Merge / 密码与签名</p>
          </Link>
          <Link
            href="/blog/pdf-batch-merge-100-files"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">PDF 批量合并 100 个文件</p>
            <p className="mt-1 text-xs text-fg-secondary">Batch Merge / 命名与排序</p>
          </Link>
          <Link
            href="/blog/large-pdf-merge-500mb"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">大文件 PDF 合并：500MB+ 策略</p>
            <p className="mt-1 text-xs text-fg-secondary">Large PDF Merge / 内存与分批</p>
          </Link>
          <Link
            href="/blog/compress-pdf-local-no-upload"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">PDF 本地压缩：不上传的做法</p>
            <p className="mt-1 text-xs text-fg-secondary">Compress PDF Locally / 预处理</p>
          </Link>
        </div>
      </section>
    </article>
  );
}
