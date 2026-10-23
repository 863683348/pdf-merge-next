import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';
const SLUG = "privacy-by-design-pdf-tools";

export const metadata: Metadata = {
  title:
    "隐私设计 PDF 工具：七条原则怎么逐条核对 | Privacy by Design for PDF Tools: How to Check the Seven Principles | PDFMergeNext",
  description:
    "隐私设计（Privacy by Design）的七条原则不是口号，是可以逐条核对的清单。这篇把它们翻成 PDF 工具上能当场验证的动作：默认不上传、默认不留副本、默认最小范围，以及供应商回答含糊时怎么判断。",
  keywords: [
    "privacy by design pdf tools",
    "privacy by design principles",
    "pdf tool privacy checklist",
    "privacy by default pdf merge",
    "data minimization pdf tools",
    "privacy by design seven principles pdf",
    "隐私设计 PDF",
    "隐私设计七原则",
    "PDF 工具隐私核对清单",
    "默认不上传 PDF",
    "PDFMergeNext 隐私设计",
  ],
  alternates: {
    canonical: "/blog/privacy-by-design-pdf-tools",
    languages: {
      "zh-CN": "/blog/privacy-by-design-pdf-tools",
      "en-US": "/blog/privacy-by-design-pdf-tools",
      "x-default": "/blog/privacy-by-design-pdf-tools",
    },
  },
  openGraph: {
    title: "隐私设计 PDF 工具：七条原则怎么逐条核对 · PDFMergeNext",
    description:
      "七条原则逐条翻成 PDF 工具上的动作：默认不上传、默认无副本、范围最小化，配一张核对表和一套五分钟自测。",
    type: 'article',
    url: SITE_URL + "/blog/" + SLUG,
    siteName: 'PDFMergeNext',
    publishedTime: "2026-10-24T00:00:00.000Z",
    images: [{ url: SITE_URL + "/og", width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "隐私设计 PDF 工具：七条原则怎么逐条核对 · PDFMergeNext",
    description:
      "隐私设计不是认证，也没有证书可查。它是七个能当场验证的问题，这篇给出每个问题在 PDF 工具上的答案长什么样。",
    images: [SITE_URL + "/og"],
  },
};

const FAQ = [
  {
    q: "隐私设计是认证吗？有没有证书可以查？",
    a: "不是，也没有发证机构。七条原则是框架，没有对应的官方证书。页面上挂着「通过隐私设计认证」的，多半是咨询机构按自己的口径做的评估，看评估范围比看那句结论有用：范围里写不写上传路径和留存期限，基本能判断评估的成色。我们自己的评估口径在 /blog/how-we-evaluate-privacy-first-pdf-tools。",
  },
  {
    q: "工具说「文件 24 小时后自动删除」，算不算隐私设计？",
    a: "只覆盖第五条的一部分，而且是最弱的那部分。原则要的是预防，删除属于补救。真正要看的是那 24 小时里文件经过几个系统，CDN 缓存、访问日志、备份和第三方依赖通常都不在删除承诺的覆盖范围内。架构上的差别见 /blog/client-side-vs-server-side-pdf-tools。",
  },
  {
    q: "浏览器本地工具是不是自动满足七条原则？",
    a: "满足二、三、五这三条的核心部分，其余四条与架构无关。第六条要看有没有给出可自测的方法，第四条要看本地路径的功能是不是完整，大文件合并的内存边界见 /blog/large-pdf-merge-browser-memory，本地方案的硬限制见 /blog/offline-pdf-merge-limits。",
  },
  {
    q: "内部制度里怎么写，才不算抄了七句话？",
    a: "每条换成一句可判定的要求，配一个当天能跑的验证动作。第六条写成「断网后核心功能仍可用，验证方式见 DevTools 那一篇」，比写「要求供应商保持透明」有用得多。能把动作写进制度的条款，审计时也是唯一拿得出证据的那部分。",
  },
  {
    q: "Is Privacy by Design a certification I can look up?",
    a: "No. There is no issuing body and no official certificate for the seven principles. A badge on a pricing page usually means a consultancy ran its own assessment, and the scope of that assessment tells you more than the conclusion does. Whether the scope covers the upload path and the retention window tells you most of what you need. Our own evaluation method is in /blog/how-we-evaluate-privacy-first-pdf-tools.",
  },
  {
    q: "A tool says files are deleted after 24 hours. Does that count?",
    a: "It covers part of principle five, and the weakest part of it. The principles ask for prevention, and deletion is remediation. What matters is how many systems the file passes through during those 24 hours, since CDN caches, access logs, backups and third-party libraries tend to sit outside the deletion promise. The architectural difference is set out in /blog/client-side-vs-server-side-pdf-tools.",
  },
  {
    q: "Does a browser-local tool satisfy all seven principles automatically?",
    a: "It covers the core of two, three and five. The other four are independent of architecture. Principle six depends on whether a verification method is published, and principle four depends on whether the local route has the full feature set. Memory limits on large merges are in /blog/large-pdf-merge-browser-memory and the hard limits of the local route in /blog/offline-pdf-merge-limits.",
  },
  {
    q: "How do we put this into an internal policy without copying seven sentences?",
    a: "Turn each principle into one testable requirement plus a check someone can run that day. Principle six becomes: core functions still work with the network off, verified by the DevTools method. That line does more work than asking a vendor to be transparent, and it is also the only part that produces evidence during an audit.",
  },
];

const TOC = [
  { id: "lead", label: "一句话结论 / Short answer" },
  { id: "seven", label: "七条原则在 PDF 工具上长什么样 / The seven principles" },
  { id: "default", label: "「默认」这个词约束什么 / What default constrains" },
  { id: "check", label: "当天能跑完的核对表 / A check you can finish today" },
  { id: "verify", label: "五分钟自己验证 / Verify it yourself" },
  { id: "faq", label: "常见问题 / FAQ" },
];

const PRINCIPLES = [
  { p: "主动预防 · Proactive", pass: "架构上没有接收文件的路径，风险不发生，也就不需要事后补救", fail: "出事之后发公告说已经删除，并把删除承诺写进更新日志" },
  { p: "默认保护 · Default", pass: "打开页面直接合并，不上传、不登录、不需要先关掉某个开关", fail: "默认勾选保存到云端或改进服务，开关藏在设置第三层" },
  { p: "嵌入设计 · Embedded", pass: "处理发生在浏览器进程里，代码里不存在上传分支", fail: "服务端处理，配一句重视隐私，两者之间没有结构上的联系" },
  { p: "正和取舍 · Positive-sum", pass: "挑页码、调页序、压缩在本地一样能做，功能不需要用文件换", fail: "想要挑页码就得注册，把功能和隐私摆成二选一" },
  { p: "全周期保护 · Lifecycle", pass: "从导入到导出全程在本机，导出前还能清一遍元数据", fail: "处理完留远端副本，删除依赖对方按承诺执行" },
  { p: "可见透明 · Transparent", pass: "给出可自测的方法：断网仍可用，Network 面板无上传请求", fail: "只有白皮书，验证要联系销售走流程" },
  { p: "以用户为本 · User-centric", pass: "免注册就能用完整功能，默认不收集使用行为", fail: "强制注册，把文件处理与账号体系和行为数据绑在一起" },
];

const DEFAULTS = [
  { item: "上传路径", good: "默认没有上传路径，文件不离开设备", trap: "默认上传，需要手动切到本地模式或离线模式" },
  { item: "留存期限", good: "默认不产生远端副本，也就没有留存期限可谈", trap: "默认保留 24 小时，条款里保留单方延长的权利" },
  { item: "账号要求", good: "默认免注册，全套功能直接可用", trap: "默认必须登录，不登录只能试一页或加水印" },
  { item: "数据回收", good: "默认不用于训练，也没有这个开关", trap: "默认勾选帮助改进服务，取消入口在账号设置里" },
  { item: "元数据写入", good: "默认保持原样，并提供一键清理", trap: "默认写入工具名和处理时间，导出时不提示" },
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
            name: "隐私设计 PDF 工具：七条原则怎么逐条核对",
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
          "隐私设计 PDF 工具：七条原则怎么逐条核对 / Privacy by Design for PDF Tools: How to Check the Seven Principles",
        description:
          "隐私设计（Privacy by Design）的七条原则不是口号，是可以逐条核对的清单。这篇把它们翻成 PDF 工具上能当场验证的动作：默认不上传、默认不留副本、默认最小范围。",
        author: {
          '@type': 'Person',
          name: 'PDFMergeNext',
          url: 'https://pdfmergenext.shop',
          '@id': 'https://pdfmergenext.shop/#organization',
        },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: "2026-10-24",
        dateModified: "2026-10-24",
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
          产品设计 · Privacy by Design
        </p>
        <h1 className="mt-2 text-h1 font-bold tracking-tight text-fg">
          隐私设计 PDF 工具：七条原则怎么逐条核对 / Privacy by Design for PDF Tools: How to Check the Seven Principles
        </h1>
        <p className="mt-3 text-body text-fg-secondary">
          隐私设计的七条原则不是口号，是可以逐条核对的清单。这篇把它们翻成 PDF 工具上能当场验证的动作，并列出供应商回答含糊时该怎么判。
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
            隐私设计（Privacy by Design）是 Ann Cavoukian 在 1990 年代提出的七原则框架，它至今仍是判断一个 PDF 工具最顺手的清单，原因很简单：它把「这家公司值不值得信任」换成七个当天就能验证的问题。PDF 合并正好是合适的测试对象，因为要合并的文件通常是合同、病历或报税材料，而工具要么拿走一份副本，要么不拿。这篇把每条原则翻成在真实工具上的样子，给出通过与不合格的对照表，最后附一套不用问供应商就能跑完的验证。
          </p>
          <p className="mt-2 text-fg-secondary">
            Privacy by Design is a framework of seven principles that Ann Cavoukian published in the 1990s, and it is still the handiest checklist for judging a PDF tool, for a simple reason: it turns a vague question about trust into seven things you can verify in an afternoon. A PDF merge makes a good test case, since the file is usually a contract, a medical record or a tax return, and the tool either takes a copy or it does not. This article translates each principle into what it looks like on a real tool, gives a table of pass and fail signals, and ends with a verification you can run without asking the vendor anything.
          </p>
          <p className="mt-2 text-fg-secondary">
            七条里有两条承担了大部分工作。第二条「隐私作为默认设置」决定用户什么都不改就能拿到什么；第三条「隐私嵌入设计」决定这个默认是架构事实还是一段政策文字。落到 PDF 工具上，两者的差别非常具体：本地合并的代码里没有上传分支，默认保护不是承诺而是缺项；需要上传的工具可以承诺 24 小时删除，而文件在这段时间里已经经过了 CDN、日志管线和备份。
          </p>
          <p className="mt-2 text-fg-secondary">
            Two of the seven carry most of the weight. Principle two, privacy as the default setting, decides what a user gets without changing anything. Principle three, privacy embedded into design, decides whether that default is a fact about the architecture or a paragraph in a policy. On a PDF tool the difference is concrete. A browser-local merge has no upload branch in the code, so the default protection is an absence rather than a promise. A tool that requires an upload can promise deletion within 24 hours while the file has already passed through a CDN, a logging pipeline and a backup.
          </p>
          <p className="mt-3 text-sm text-fg-muted">
            说明：下面是给工具选型和内部制度用的核对口径，不是法律意见。具体义务以适用的法规和本单位法务的判断为准。
          </p>
        </section>

        <section id="seven">
          <h2 className="text-title font-semibold text-fg">
            七条原则在 PDF 工具上长什么样 / The seven principles, on a PDF tool
          </h2>
          <p className="mt-2 text-fg-secondary">
            原则本身是抽象的，判断价值全在第三列。第二列写得再漂亮，第三列出现其中任何一条，前两列就不用看了。
          </p>
          <p className="mt-2 text-fg-secondary">
            The principles are abstract on their own, and the third column is where the judgment lives. However good column two reads, any hit in column three makes the first two irrelevant.
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-line">
            <table className="w-full text-left text-sm">
              <thead className="bg-subtle text-fg-muted">
                <tr>
                  <th className="px-4 py-2 font-semibold">原则</th>
                  <th className="px-4 py-2 font-semibold">通过的样子</th>
                  <th className="px-4 py-2 font-semibold">不合格的信号</th>
                </tr>
              </thead>
              <tbody className="text-fg-secondary">
                {PRINCIPLES.map((r) => (
                  <tr key={r.p} className="border-t border-line">
                    <td className="px-4 py-2">{r.p}</td>
                    <td className="px-4 py-2">{r.pass}</td>
                    <td className="px-4 py-2">{r.fail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-fg-secondary">
            第一行和第四行最容易被一起忽略。供应商常把「我们从未发生过泄露」当作第一行的证据，但没出过事只说明运气或规模，不说明结构。第四行的问题更隐蔽：如果本地版少了挑页码或批量合并这类功能，用户就会被推回上传路径，隐私退化成一道收费门槛。
          </p>
          <p className="mt-3 text-fg-secondary">
            Rows one and four tend to be missed together. Vendors often offer the absence of past incidents as evidence for row one, but never having had a breach says something about luck or scale and nothing about structure. Row four is subtler: when the local version is missing page selection or batch merging, users get pushed back onto the upload path and privacy turns into a pricing tier.
          </p>
          <p className="mt-3 text-fg-secondary">
            第六行决定了这张表能不能被验证。一个不提供自测方法的工具，七条里的每一条都只能听它自己说，核对也就退化成阅读它的营销文案。
          </p>
        </section>

        <section id="default">
          <h2 className="text-title font-semibold text-fg">
            「默认」这个词约束什么 / What default actually constrains
          </h2>
          <p className="mt-2 text-fg-secondary">
            默认指的是用户什么都不设置、什么都不勾选时，系统给出的那一份结果。它约束的不是能力上限，而是大多数真实用户最终拿到的东西，因为绝大多数人不会去翻设置页。
          </p>
          <p className="mt-2 text-fg-secondary">
            Default means what the system delivers when the user sets nothing and ticks nothing. It constrains not the ceiling of what is possible but what most real users end up with, and most people never open the settings page.
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-line">
            <table className="w-full text-left text-sm">
              <thead className="bg-subtle text-fg-muted">
                <tr>
                  <th className="px-4 py-2 font-semibold">默认项</th>
                  <th className="px-4 py-2 font-semibold">合格的样子</th>
                  <th className="px-4 py-2 font-semibold">常见的默认陷阱</th>
                </tr>
              </thead>
              <tbody className="text-fg-secondary">
                {DEFAULTS.map((r) => (
                  <tr key={r.item} className="border-t border-line">
                    <td className="px-4 py-2">{r.item}</td>
                    <td className="px-4 py-2">{r.good}</td>
                    <td className="px-4 py-2">{r.trap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-fg-secondary">
            第一行决定了后面几行的难度。文件从来没有离境，留存期限、删除记录、跨境传输这些条款就整段失效，第二行到第五行从要谈判的事项变成一句陈述。这一点和元数据那条线是分开的：元数据是本地工具也要处理的收尾步骤，写进默认项只是因为它同样该在导出前被提醒一次。
          </p>
          <p className="mt-3 text-fg-secondary">
            Row one sets the difficulty of everything below it. When a file never leaves the device, retention windows, deletion records and cross-border transfer clauses stop applying as a block, and rows two to five collapse from matters you negotiate into a single statement. That is separate from the metadata line, which every tool has to deal with at the end. It appears here only because it deserves the same reminder before export.
          </p>
          <p className="mt-3 text-fg-secondary">
            还要区分「默认」和「可选」。一个工具提供本地模式但默认走上传，它满足的是能力，不满足第二条原则。判断时看首次使用的路径，不看设置里有没有那个选项。
          </p>
          <p className="mt-3 text-fg-secondary">
            Default and optional are different things. A tool that offers a local mode but uploads by default satisfies capability and fails principle two. Judge it by the path a first-time user takes, not by whether the option exists somewhere in the settings.
          </p>
        </section>

        <section id="check">
          <h2 className="text-title font-semibold text-fg">
            当天能跑完的核对表 / A check you can finish today
          </h2>
          <p className="mt-2 text-fg-secondary">
            把下面七步固定成一次流程，最后那页记录可以直接进供应商清单和内部制度档案。前三步判定结构，第四步判定取舍，后三步判定证据。
          </p>
          <p className="mt-2 text-fg-secondary">
            Fix these seven steps once and the last page becomes the record that goes into the vendor list and the internal policy file. The first three judge structure, the fourth judges trade-offs, and the last three judge evidence.
          </p>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-fg-secondary">
            <li>确认上传路径：断网状态下跑一次完整合并，能跑完就说明核心功能不依赖服务端</li>
            <li>确认默认设置：用一个全新的浏览器配置打开，全程不改任何选项，记录实际发生的行为</li>
            <li>确认留存条款：在隐私政策里搜保留期限、日志、备份、第三方四个词，看有没有明确写出天数</li>
            <li>确认功能对等：挑页码、调页序、批量处理在本地版是否齐全，缺一项就记一项</li>
            <li>确认元数据行为：导出前后对比文档信息字典，看工具名与处理时间是否被写入</li>
            <li>确认可验证性：有没有给出自测方法，没有就把这一步的验证动作写进自己的文档</li>
            <li>把以上六条连同工具名、版本、核对日期和核对人签在同一页纸上归档</li>
          </ol>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-fg-secondary">
            <li>Settle the upload path: run one full merge with the network off, and if it completes, the core function does not depend on a server</li>
            <li>Settle the defaults: open the tool in a clean browser profile, change no setting at all, and record what actually happens</li>
            <li>Settle retention: search the privacy policy for retention, logs, backups and third parties, and look for an actual number of days</li>
            <li>Settle feature parity: check whether page selection, reordering and batch processing exist in the local version, and log each gap</li>
            <li>Settle metadata behaviour: compare the document information dictionary before and after export to see whether a tool name or timestamp was written in</li>
            <li>Settle verifiability: if no self-test method is published, write the verification step into your own document</li>
            <li>Sign all six items with tool name, version, date and reviewer on one page, then file it</li>
          </ol>
          <p className="mt-3 text-fg-secondary">
            合并这一步在 pdfmergenext.shop 全程本地完成，挑页码和调页序都不需要交出文件，默认项那一栏因此直接空着。挑页语法见 /blog/pdf-page-selection-1-3-5-syntax，元数据各层的实际表现见 /blog/pdf-metadata-preservation-merge，分享前该清哪些字段见 /blog/strip-pdf-metadata-before-sharing。
          </p>
          <p className="mt-3 text-fg-secondary">
            Merging on pdfmergenext.shop happens entirely on your device, so selecting pages and reordering never means handing the file over, which leaves the default column blank. Page selection syntax is in /blog/pdf-page-selection-1-3-5-syntax, how each metadata layer behaves in /blog/pdf-metadata-preservation-merge, and which fields to clear before sharing in /blog/strip-pdf-metadata-before-sharing.
          </p>
        </section>

        <section id="verify">
          <h2 className="text-title font-semibold text-fg">
            五分钟自己验证 / Verify it yourself in five minutes
          </h2>
          <p className="mt-2 text-fg-secondary">
            下面四步不需要账号、不需要联系销售，也不需要读完整份隐私政策。做完这四步，前六条原则基本都有结论了，剩下的只有条款层面的核对。
          </p>
          <p className="mt-2 text-fg-secondary">
            None of the four steps below needs an account, a conversation with sales, or a full read of the privacy policy. After them, six of the seven principles have an answer, and only the contractual part is left.
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-fg-secondary">
            <li>断网跑一次：拔掉网线或开飞行模式，再合并一次。仍然能出结果，说明处理在本机完成</li>
            <li>看 Network 面板：合并期间筛选请求，观察有没有指向外部域名的上传请求和文件大小</li>
            <li>导出前后比元数据：用任意 PDF 阅读器看文档属性，工具名、公司、处理时间是否被写入</li>
            <li>换一个干净浏览器配置：不登录、不改设置，走一遍首次使用的路径，记录默认行为</li>
          </ul>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-fg-secondary">
            <li>Run it offline: unplug the network or switch on airplane mode, then merge again. A result means the processing happened on the device</li>
            <li>Watch the Network panel: filter requests during the merge and look for uploads to an external domain, along with their size</li>
            <li>Compare metadata before and after export: open document properties in any PDF reader and see whether a tool name, company or timestamp was added</li>
            <li>Use a clean browser profile: no sign-in, no setting changes, walk the first-time path once and write down the default behaviour</li>
          </ul>
          <p className="mt-3 text-fg-secondary">
            第一步的判据最硬，因为它不依赖任何说明。第二步的逐项操作见 /blog/devtools-network-tab-privacy-guide，本地方案的能力边界见 /blog/offline-pdf-merge-limits，服务端架构的差别见 /blog/client-side-vs-server-side-pdf-tools。
          </p>
          <p className="mt-3 text-fg-secondary">
            Step one is the hardest evidence, because it depends on no statement at all. The step-by-step version of step two is in /blog/devtools-network-tab-privacy-guide, the limits of the local route in /blog/offline-pdf-merge-limits, and the architectural difference in /blog/client-side-vs-server-side-pdf-tools.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-on-primary transition-colors duration-fast hover:bg-brand-hover"
          >
            在 pdfmergenext.shop 本地合并 PDF，默认不出本机 →
          </Link>
          <p className="mt-2 text-sm text-fg-secondary">
            我们的评估口径见{" "}
            <Link href="/blog/how-we-evaluate-privacy-first-pdf-tools" className="text-brand hover:underline">
              我们怎么评估隐私优先的 PDF 工具
            </Link>
            ，零上传的实现方式见{" "}
            <Link href="/blog/how-zero-upload-pdf-tools-work" className="text-brand hover:underline">
              零上传 PDF 工具是怎么做到的
            </Link>
            ，全部文章在{" "}
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
            href="/blog/how-we-evaluate-privacy-first-pdf-tools"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">我们怎么评估隐私优先的 PDF 工具</p>
            <p className="mt-1 text-xs text-fg-secondary">Evaluation / 评估口径本身</p>
          </Link>
          <Link
            href="/blog/devtools-network-tab-privacy-guide"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">用 DevTools Network 面板验证有没有上传</p>
            <p className="mt-1 text-xs text-fg-secondary">Verification / 自己动手那一套</p>
          </Link>
          <Link
            href="/blog/client-side-vs-server-side-pdf-tools"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">客户端 PDF 工具 vs 服务器端</p>
            <p className="mt-1 text-xs text-fg-secondary">Architecture / 副本从哪来</p>
          </Link>
          <Link
            href="/blog/how-zero-upload-pdf-tools-work"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">零上传 PDF 工具是怎么做到的</p>
            <p className="mt-1 text-xs text-fg-secondary">Privacy Tech / 原理那一层</p>
          </Link>
        </div>
      </section>
    </article>
  );
}
