import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';
const SLUG = "strip-pdf-metadata-before-sharing";

export const metadata: Metadata = {
  title:
    "分享前清除 PDF 元数据：一份 PDF 里藏着什么 | How to Remove PDF Metadata Before Sharing | PDFMergeNext",
  description:
    "作者名、公司名、时间戳、原始文件名，手机扫描件还带坐标。清除 PDF 元数据是发出文件前的最后一步。这篇列出八个字段的外泄风险、三类清理方式各自停在什么地方，以及一套当天能跑完的流程。",
  keywords: [
    "remove pdf metadata",
    "pdf metadata privacy",
    "how to clean pdf metadata",
    "pdf author name removal",
    "strip metadata from pdf before sharing",
    "pdf hidden data removal",
    "清除 PDF 元数据",
    "PDF 作者名清除",
    "PDF 元数据隐私",
    "PDF 隐藏信息清理",
    "PDFMergeNext 元数据",
  ],
  alternates: {
    canonical: "/blog/strip-pdf-metadata-before-sharing",
    languages: {
      "zh-CN": "/blog/strip-pdf-metadata-before-sharing",
      "en-US": "/blog/strip-pdf-metadata-before-sharing",
      "x-default": "/blog/strip-pdf-metadata-before-sharing",
    },
  },
  openGraph: {
    title: "分享前清除 PDF 元数据：一份 PDF 里藏着什么 · PDFMergeNext",
    description:
      "八个字段各自外泄什么、三类清理方式停在哪里、七步流程当天能跑完。清除是发出文件前的一步，不是设置里勾一次的开关。",
    type: 'article',
    url: SITE_URL + "/blog/" + SLUG,
    siteName: 'PDFMergeNext',
    publishedTime: "2026-10-22T00:00:00.000Z",
    images: [{ url: SITE_URL + "/og", width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "分享前清除 PDF 元数据 · PDFMergeNext",
    description:
      "作者名、时间戳、原始文件名、坐标。八个字段的外泄风险，三类清理方式的边界，七步可当天跑完的流程。",
    images: [SITE_URL + "/og"],
  },
};

const FAQ = [
  {
    q: "清除元数据会让 PDF 打不开或者内容变形吗？",
    a: "不会。元数据写在文件的信息字典和 XMP 包里，跟页面内容流是分开的两块。清掉它只影响属性面板里显示的那部分，页面文字、图片和版式都不动。真正会动到版式的是重新压缩或重新编码，那是另一回事。",
  },
  {
    q: "为什么清了作者名，文件里还能搜出旧用户名？",
    a: "因为作者名不止写在一处。信息字典里有一份，XMP 包里可能还有一份，批注的作者字段又是独立的。只清第一处的工具会留下另外两处。清完之后用文本搜索在文件里搜一次旧用户名，能搜到就说明还有地方没清。",
  },
  {
    q: "合并前清还是合并后清？",
    a: "合并后清。合并会重建文档信息字典，先清的几个文件各自的字段会被合并工具按自己的规则覆盖，白做一遍。合并成一份之后再清这一份，顺序与字段去留的差别见 /blog/pdf-metadata-preservation-merge。",
  },
  {
    q: "扫描件也会带元数据吗？",
    a: "会，而且内容更多。手机扫描 App 生成的 PDF 常带拍摄时间、设备型号，部分还带 GPS 坐标；扫描仪生成的可能带序列号。这类文件要单独看一遍坐标字段，普通另存为清不掉它。",
  },
  {
    q: "Does removing metadata break the file or change how it looks?",
    a: "No. Metadata lives in the info dictionary and the XMP packet, which are separate from the page content stream. Clearing it only changes what the properties panel shows, and the page text, images and layout are untouched. What does change layout is recompressing or re-encoding, which is a different job.",
  },
  {
    q: "I cleared the author name, so why can the old username still be found?",
    a: "Because the author is written in more than one place. One copy sits in the info dictionary, another may sit in the XMP packet, and the author of a comment is its own field. A tool that clears only the first leaves the other two. After clearing, search the file for the old username once; if it turns up, something was missed.",
  },
  {
    q: "Should I strip before merging or after?",
    a: "After. Merging rebuilds the info dictionary, so fields cleaned in the source files get overwritten by the merge tool's own rules and the work is wasted. Clean the one file that comes out, and the per-field behaviour of a merge is set out in /blog/pdf-metadata-preservation-merge.",
  },
  {
    q: "Do scanned files carry metadata too?",
    a: "They do, and often more of it. A PDF from a phone scanner usually carries capture time and device model, and some carry GPS coordinates. Scanner output may carry a serial number. Those files need a separate look at the location field, which an ordinary save-as will not remove.",
  },
];

const TOC = [
  { id: "lead", label: "一句话结论 / Short answer" },
  { id: "fields", label: "一份 PDF 里记了什么 / What a PDF records" },
  { id: "clean", label: "三类清理方式停在哪里 / Where each method stops" },
  { id: "missed", label: "作者名与常漏的四个字段 / Author name and four others" },
  { id: "workflow", label: "发出去之前的七步 / Seven steps before sending" },
  { id: "faq", label: "常见问题 / FAQ" },
];

const FIELDS = [
  { field: "作者 Author", content: "系统用户名，或首次安装时填的姓名", risk: "外发文件上挂着离职同事或外包方的名字" },
  { field: "公司 Company", content: "生成工具所属组织名", risk: "暴露内部在用哪家软件" },
  { field: "创建时间 CreationDate", content: "首次生成的时间", risk: "时间与对外说法对不上" },
  { field: "修改时间 ModDate", content: "最后一次保存的时间", risk: "与文档落款日期冲突" },
  { field: "生成工具 Producer", content: "Word、LibreOffice、扫描 App 及版本", risk: "暴露未打补丁的旧版本" },
  { field: "原始文件名", content: "财务预测v3-最终版真的最终.pdf", risk: "文件名里的内部代号全部外露" },
  { field: "XMP 扩展字段", content: "自定义属性、修订记录、协作信息", risk: "单条无害，合起来能拼出协作链" },
  { field: "地理位置", content: "手机扫描件与部分相机 PDF 的坐标", risk: "直接暴露拍摄地点" },
];

const CLEANERS = [
  { method: "办公软件另存为改属性", clears: "作者、标题、主题、关键词", leaves: "XMP 扩展字段、修订记录", where: "本机" },
  { method: "桌面编辑器属性面板", clears: "信息字典与多数 XMP 字段", leaves: "批注层、附件、隐藏文字层", where: "本机" },
  { method: "在线元数据清理服务", clears: "同上", leaves: "同上，另加服务方留有副本", where: "上传至对方服务器" },
  { method: "浏览器本地处理", clears: "信息字典与常见 XMP 字段", leaves: "需单独处理的批注与附件层", where: "全程本机" },
];

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: "首页", item: SITE_URL + "/" },
          { '@type': 'ListItem', position: 2, name: "博客", item: SITE_URL + "/blog" },
          {
            '@type': 'ListItem',
            position: 3,
            name: "分享前清除 PDF 元数据：一份 PDF 里藏着什么",
            item: SITE_URL + "/blog/" + SLUG,
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
          "分享前清除 PDF 元数据：一份 PDF 里藏着什么 / How to Remove PDF Metadata Before Sharing",
        description:
          "作者名、公司名、时间戳、原始文件名，手机扫描件还带坐标。八个字段的外泄风险、三类清理方式各自的边界，以及一套当天能跑完的流程。",
        author: {
          '@type': 'Person',
          name: 'PDFMergeNext',
          url: 'https://pdfmergenext.shop',
          '@id': 'https://pdfmergenext.shop/#organization',
        },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: "2026-10-22",
        dateModified: "2026-10-22",
        image: SITE_URL + "/og",
        url: SITE_URL + "/blog/" + SLUG,
        mainEntityOfPage: { '@type': 'WebPage', '@id': SITE_URL + "/blog/" + SLUG },
      },
    ],
  };

  return (
    <article className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-16">
      <header>
        <p className="text-caption font-semibold uppercase tracking-wide text-brand">
          元数据 · Metadata Privacy
        </p>
        <h1 className="mt-2 text-h1 font-bold tracking-tight text-fg">
          分享前清除 PDF 元数据：一份 PDF 里藏着什么 / How to Remove PDF Metadata Before Sharing
        </h1>
        <p className="mt-3 text-body text-fg-secondary">
          作者名、公司名、时间戳、原始文件名，手机扫描件还带坐标。清除 PDF 元数据是发出文件前的最后一步，多数人从不做。
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
              <a href={"#" + t.id} className="text-sm text-brand hover:underline">
                {t.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-8 space-y-8 text-body text-fg">
        <section id="lead">
          <h2 className="text-title font-semibold text-fg">
            一句话结论 / Short answer
          </h2>
          <p className="mt-2 text-fg-secondary">
            清除 PDF 元数据是发出文件前的最后一步，不是设置里勾一次的开关。你用来生成 PDF 的每个程序都会往里盖点东西：作者名、公司名、创建时间、修改时间、原始文件名，手机扫描件有时候还带坐标。这些信息不跟着页面内容显示，只跟着文件走，收件人打开属性面板就能看到，而多数人从不打开。
          </p>
          <p className="mt-2 text-fg-secondary">
            Removing PDF metadata before you send a file takes under a minute, and most people never do it. The cost shows up later: a proposal that still carries a former colleague's name as author, a contract draft whose timestamps put the drafting four months before it went out, a phone scan whose coordinates survive the export. Every application that writes a PDF stamps something into it, and almost nobody opens the properties panel afterwards.
          </p>
          <p className="mt-2 text-fg-secondary">
            判断顺序很短：先看这份 PDF 交给谁，再决定清到哪一档。交给外部的外发文件清到只剩必要字段；内部传的草稿可以留着协作信息；要走合规流程的，清除动作本身也要记一行，因为清掉的东西同样属于留痕范围。
          </p>
          <p className="mt-2 text-fg-secondary">
            The order of decisions is short. Look at who receives the file, then decide how far to strip it. A file going outside gets reduced to the fields it needs. A draft circulating inside can keep its collaboration details. Anything moving through a compliance process needs the stripping recorded too, since what you removed belongs to the same record. That last point is the one written up in /blog/pdf-file-audit-trail-requirements.
          </p>
          <p className="mt-2 text-fg-secondary">
            下面把元数据拆成八个字段，讲清每类清理方式停在什么地方，最后给一套当天能跑完的七步流程。
          </p>
        </section>

        <section id="fields">
          <h2 className="text-title font-semibold text-fg">
            一份 PDF 里记了什么 / What a PDF records
          </h2>
          <p className="mt-2 text-fg-secondary">
            八个字段按外泄后的麻烦程度排列，前面四个最常见，后面四个最容易被忽略。
          </p>
          <p className="mt-2 text-fg-secondary">
            Eight fields, ordered by how much trouble they cause once they leave. The first four are the common ones, and the last four are the ones people overlook.
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-line">
            <table className="w-full text-left text-sm">
              <thead className="bg-subtle text-fg-muted">
                <tr>
                  <th className="px-4 py-2 font-semibold">字段</th>
                  <th className="px-4 py-2 font-semibold">常见内容</th>
                  <th className="px-4 py-2 font-semibold">外泄后的麻烦</th>
                </tr>
              </thead>
              <tbody className="text-fg-secondary">
                {FIELDS.map((r) => (
                  <tr key={r.field} className="border-t border-line">
                    <td className="px-4 py-2">{r.field}</td>
                    <td className="px-4 py-2">{r.content}</td>
                    <td className="px-4 py-2">{r.risk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-fg-secondary">
            最后两行值得单独说。XMP 扩展字段单看一条没什么，合起来能拼出一份完整的协作名单和修改节奏；地理位置字段是唯一一条无法用常识推断出来的信息，它直接把拍摄地点交出去。
          </p>
          <p className="mt-3 text-fg-secondary">
            Those last two rows deserve a note. An XMP field means little on its own, and a set of them reconstructs the collaboration list and the revision rhythm. The location field is the one piece nobody could guess, and it hands over where the picture was taken.
          </p>
        </section>

        <section id="clean">
          <h2 className="text-title font-semibold text-fg">
            三类清理方式停在哪里 / Where each method stops
          </h2>
          <p className="mt-2 text-fg-secondary">
            清理 PDF 元数据的路子不多，差别集中在两件事上：清到哪一层停手，以及文件在这个过程中去了哪里。
          </p>
          <p className="mt-2 text-fg-secondary">
            There are few ways to clean PDF metadata, and they differ on two things: how deep they go before stopping, and where the file travels while it happens.
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-line">
            <table className="w-full text-left text-sm">
              <thead className="bg-subtle text-fg-muted">
                <tr>
                  <th className="px-4 py-2 font-semibold">方式</th>
                  <th className="px-4 py-2 font-semibold">能清掉</th>
                  <th className="px-4 py-2 font-semibold">留下什么</th>
                  <th className="px-4 py-2 font-semibold">文件去哪</th>
                </tr>
              </thead>
              <tbody className="text-fg-secondary">
                {CLEANERS.map((r) => (
                  <tr key={r.method} className="border-t border-line">
                    <td className="px-4 py-2">{r.method}</td>
                    <td className="px-4 py-2">{r.clears}</td>
                    <td className="px-4 py-2">{r.leaves}</td>
                    <td className="px-4 py-2">{r.where}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-fg-secondary">
            第三行的代价写在第四列。为了让别人帮你清一份文件里的名字，你先把整份文件交了出去，而那些名字里带着的信息本来就是你想守住的东西。这类取舍在 /blog/privacy-first-pdf-workflow 里按场景拆过一遍。
          </p>
          <p className="mt-3 text-fg-secondary">
            The cost of row three sits in column four. To have someone else remove the names from a file, you hand over the whole file first, and the names are exactly what you were protecting. That trade is broken down by scenario in /blog/privacy-first-pdf-workflow.
          </p>
          <p className="mt-3 text-fg-secondary">
            第四行也不是万能的。浏览器本地处理守住了文件去向，代价是批注层、附件层和隐藏文字层要单独动手，多数工具不会替你一并清掉。怎么自己验证文件没有外传，见 /blog/devtools-network-tab-privacy-guide。
          </p>
        </section>

        <section id="missed">
          <h2 className="text-title font-semibold text-fg">
            作者名与常漏的四个字段 / Author name and four others
          </h2>
          <p className="mt-2 text-fg-secondary">
            作者名清除是最常被做对一半的那件事。清完信息字典就以为结束了，剩下的四处还留着。
          </p>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-fg-secondary">
            <li>作者名：把系统用户名改成对外姓名，比事后逐个清更省事，新文件从生成时就带对的值</li>
            <li>原始文件名：另存为之前先定名，内部代号不要进档</li>
            <li>批注与修订：批注作者是独立字段，删掉批注内容不等于删掉作者名</li>
            <li>嵌入附件：嵌在 PDF 里的 docx 自带一套元数据，主文件清干净它也还在</li>
            <li>隐藏文字层：OCR 层与白字层不显示在页面上，全选复制就出来</li>
          </ol>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-fg-secondary">
            <li>Author: changing the system username to the name you use outside beats clearing files one by one, and every new file then carries the right value from creation</li>
            <li>Original file name: settle the name before save-as, and keep internal codenames out of it</li>
            <li>Comments and revisions: a comment author is its own field, so deleting the comment text does not delete the name attached to it</li>
            <li>Embedded attachments: a docx sitting inside the PDF carries its own metadata, and it survives a clean main file</li>
            <li>Hidden text layers: the OCR layer and white-on-white text do not show on the page, and select-all plus copy brings them straight out</li>
          </ol>
          <p className="mt-3 text-fg-secondary">
            第一条改的是源头，其余四条只能逐个处理。改用户名的收益在时间上后置：下次重装系统或换机器时要记得再改一次。
          </p>
        </section>

        <section id="workflow">
          <h2 className="text-title font-semibold text-fg">
            发出去之前的七步 / Seven steps before sending
          </h2>
          <p className="mt-2 text-fg-secondary">
            按顺序走完，第七步那行记录可以直接进外发清单。前三步解决清到什么程度，后四步解决清没清干净。
          </p>
          <p className="mt-2 text-fg-secondary">
            Run them in this order, and the line from step seven goes straight into the outbound checklist. The first three settle how far to strip; the last four settle whether the stripping worked.
          </p>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-fg-secondary">
            <li>先定接收方：外部、内部还是合规流程，这一档决定后面清到什么程度</li>
            <li>另存一份副本，在副本上清理，原文件保留</li>
            <li>清信息字典：作者、公司、标题、关键词、创建与修改时间</li>
            <li>清 XMP 扩展字段与自定义属性</li>
            <li>单独处理批注层、附件层和隐藏文字层</li>
            <li>打开属性面板复查一遍，确认剩下的字段是有意留的</li>
            <li>需要留痕的，把清理前后的字段清单连同时间记一行</li>
          </ol>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-fg-secondary">
            <li>Fix the recipient first: outside, internal, or a compliance process, since that decides how far to strip</li>
            <li>Save a copy and clean the copy, keeping the original</li>
            <li>Clear the info dictionary: author, company, title, keywords, creation and modification dates</li>
            <li>Clear the XMP packet and any custom properties</li>
            <li>Handle the comment layer, attachments and hidden text separately</li>
            <li>Open the properties panel once more and confirm what remains is there on purpose</li>
            <li>Where a record is required, write one line with the before and after fields and the time</li>
          </ol>
          <p className="mt-3 text-fg-secondary">
            合并这一步在 pdfmergenext.shop 全程本地完成，挑页码、调页序、清元数据都不需要把文件交出去。第七步那行记录由你自己写，谁也替不了。挑页语法见 /blog/pdf-page-selection-1-3-5-syntax，加密文件的处理顺序见 /blog/encrypted-pdf-can-you-merge。
          </p>
          <p className="mt-3 text-fg-secondary">
            Merging on pdfmergenext.shop runs on your device, so selecting pages, reordering and clearing metadata never means handing the file over. The line from step seven is yours to write. Page selection syntax is in /blog/pdf-page-selection-1-3-5-syntax, and the order for encrypted files in /blog/encrypted-pdf-can-you-merge.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-on-primary transition-colors duration-fast hover:bg-brand-hover"
          >
            在 pdfmergenext.shop 本地合并并清掉元数据，文件不出本机 →
          </Link>
          <p className="mt-2 text-sm text-fg-secondary">
            更多 PDF 隐私与合规的判断细节见{" "}
            <Link href="/blog" className="text-brand hover:underline">
              /blog
            </Link>
            ，合并时元数据的去留规律见{" "}
            <Link href="/blog/pdf-metadata-preservation-merge" className="text-brand hover:underline">
              PDF 元数据保留
            </Link>
            ，外发前商业机密的那份清单见{" "}
            <Link href="/blog/trade-secret-protection-pdf-merge" className="text-brand hover:underline">
              商业机密保护
            </Link>
            ，GDPR 选型前的检查项见{" "}
            <Link href="/blog/gdpr-compliant-pdf-tools" className="text-brand hover:underline">
              GDPR 合规 PDF 工具
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
            href="/blog/pdf-metadata-preservation-merge"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">PDF 元数据保留：合并时该注意什么</p>
            <p className="mt-1 text-xs text-fg-secondary">Metadata / 合并前后字段的去留</p>
          </Link>
          <Link
            href="/blog/trade-secret-protection-pdf-merge"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">商业机密保护：合并 PDF 前该先确认的五件事</p>
            <p className="mt-1 text-xs text-fg-secondary">Compliance / 外发前的另一半清单</p>
          </Link>
          <Link
            href="/blog/pdf-file-audit-trail-requirements"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">文件审计追踪：PDF 工具该留下哪些记录</p>
            <p className="mt-1 text-xs text-fg-secondary">Compliance / 清除动作本身也要留痕</p>
          </Link>
          <Link
            href="/blog/privacy-first-pdf-workflow"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">隐私优先 PDF 工作流</p>
            <p className="mt-1 text-xs text-fg-secondary">Workflow / 按场景选本地还是上传</p>
          </Link>
        </div>
      </section>
    </article>
  );
}
