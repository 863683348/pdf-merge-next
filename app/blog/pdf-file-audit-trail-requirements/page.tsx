import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';
const SLUG = "pdf-file-audit-trail-requirements";

export const metadata: Metadata = {
  title:
    "文件审计追踪：PDF 工具该留下哪些记录 | File Audit Trail: What a PDF Tool Should Record | PDFMergeNext",
  description:
    "审计追踪要回答四件事：谁、什么时间、对哪份文件、做了什么操作。在线服务能给出账号级日志但文件已离机，桌面软件只留文件不留操作，浏览器本地工具两样都不给。这篇给出七条记录线的检查清单和当天能补上的留痕流程。",
  keywords: [
    "pdf audit trail",
    "file audit trail pdf tools",
    "pdf merge audit log",
    "document audit trail requirements",
    "pdf tool activity logging",
    "文件审计追踪 PDF",
    "PDF 审计日志",
    "合并 PDF 留痕",
    "PDF 工具操作记录",
    "PDFMergeNext 审计追踪",
  ],
  alternates: {
    canonical: "/blog/pdf-file-audit-trail-requirements",
    languages: {
      "zh-CN": "/blog/pdf-file-audit-trail-requirements",
      "en-US": "/blog/pdf-file-audit-trail-requirements",
      "x-default": "/blog/pdf-file-audit-trail-requirements",
    },
  },
  openGraph: {
    title: "文件审计追踪：PDF 工具该留下哪些记录 · PDFMergeNext",
    description:
      "谁、什么时间、哪份文件、做了什么。四类工具记录能力的实际差别，七条记录线检查清单，以及当天能补上的留痕流程。",
    type: 'article',
    url: SITE_URL + "/blog/" + SLUG,
    siteName: 'PDFMergeNext',
    publishedTime: "2026-10-21T00:00:00.000Z",
    images: [{ url: SITE_URL + "/og", width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "文件审计追踪：PDF 工具该留下哪些记录 · PDFMergeNext",
    description:
      "四类工具的记录能力差别、七条记录线、一套当天能跑的留痕流程。义务先定，工具后挑。",
    images: [SITE_URL + "/og"],
  },
};

const FAQ = [
  {
    q: "没有监管要求的普通文件也要留痕吗？",
    a: "看它在业务流程里的位置。多数内部资料不需要，但一旦这份文件会作为凭证交给外部，比如合同附件、审计报告、投标材料，留痕就从合规问题变成举证问题。判断是否属于凭证，比判断是否涉密更快。",
  },
  {
    q: "浏览器本地工具没有日志，是不是不满足审计要求？",
    a: "要看要求的是「有日志」还是「能说明谁在什么时候做了什么」。后者可以用操作前后各一行记录满足，代价是人工。前者必须靠服务端日志，而那意味着文件离机。两种满足方式对应两种不同的风险取舍，架构差别见 /blog/client-side-vs-server-side-pdf-tools。",
  },
  {
    q: "在线服务导出的日志能直接当证据用吗？",
    a: "先确认三件事：导出的是完整日志还是摘要，时间戳来源是否可核验，以及对方有没有单方面修改或删除的能力。服务方既是记录者又是被审计对象时，这份日志的说服力要打折。",
  },
  {
    q: "日志该存多久？",
    a: "跟着义务走，没有统一答案。合同审计权条款通常写明期限，行业监管各有规定，内部制度里若没写就先定一个并执行。定错期限比没有期限好处理，因为后者在争议发生时无法解释。",
  },
  {
    q: "共享账号做的操作，日志算有效吗？",
    a: "基本算无效。审计要求的是定位到具体的人或具体的系统账号，三个人都能登的账号在调查时等于没记。至少要补一层操作登记，把账号背后的经手人写清楚。",
  },
  {
    q: "Does a file with no regulatory obligation need a trail at all?",
    a: "It depends on where the file sits in the workflow. Most internal material does not. Once a file goes outside as evidence, a contract exhibit, an audit pack or a tender submission, logging stops being a compliance question and becomes an evidence question.",
  },
  {
    q: "If a browser-local tool logs nothing, does that fail an audit requirement?",
    a: "It depends on whether the requirement says a log must exist or says you must be able to show who did what and when. The second can be met with a line written before and after each job, at the cost of doing it by hand. The first needs server-side logs, and that means the file leaves your control.",
  },
  {
    q: "Can an exported log from an online service be used as evidence?",
    a: "Check three things first: whether the export is the full log or a summary, whether the timestamps come from a verifiable clock, and whether the provider can alter or delete entries on its own. When the recorder is also the party being audited, the log carries less weight.",
  },
  {
    q: "How long should logs be kept?",
    a: "Follow the obligation, since there is no single answer. Audit clauses in contracts usually state a period, regulators set their own, and where internal policy is silent, set one and apply it. A wrong period is easier to deal with than no period, because the second cannot be explained once a dispute starts.",
  },
];

const TOC = [
  { id: "lead", label: "一句话结论 / Short answer" },
  { id: "what", label: "审计追踪要记的四件事 / What has to be captured" },
  { id: "tools", label: "三类工具各留下什么 / What each kind logs" },
  { id: "lines", label: "七条记录线 / Seven lines" },
  { id: "workflow", label: "当天能补上的留痕流程 / A workflow for today" },
  { id: "faq", label: "常见问题 / FAQ" },
];

const TOOLLOGS = [
  { dim: "操作日志", online: "服务端有，账号级，通常可导出", desktop: "多数没有，个别有本地历史文件", local: "默认没有" },
  { dim: "文件去向", online: "副本在对方服务器，删除靠对方承诺", desktop: "在本机磁盘", local: "全程不出本机" },
  { dim: "时间戳来源", online: "服务器时钟", desktop: "操作系统时钟", local: "操作系统时钟" },
  { dim: "能导出成证据", online: "取决于套餐，免费档常常不给", desktop: "几乎没有", local: "需要自己记" },
  { dim: "第三方能否看到", online: "服务方及其依赖方能看到", desktop: "不会", local: "不会" },
];

const LINES = [
  { line: "操作人", want: "唯一账号或具名个人，非共享账号", miss: "日志里出现部门名或角色名" },
  { line: "时间戳", want: "带时区的时间，来源为可信时钟", miss: "只有本地时间，且能随意改" },
  { line: "文件标识", want: "哈希或稳定 ID，文件名作辅助", miss: "只记文件名，改名即断链" },
  { line: "操作类型", want: "合并、挑页、导出、删除分别记", miss: "只有「已处理」一个状态" },
  { line: "结果状态", want: "成功与失败都记，含失败原因", miss: "只有成功记录" },
  { line: "副本流向", want: "是否产生第三方副本，保存多久", miss: "说不清对方保留了什么" },
  { line: "保存期限", want: "存多久、谁批的、到期怎么删", miss: "没有期限，日志无限增长" },
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
            name: "文件审计追踪：PDF 工具该留下哪些记录",
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
          "文件审计追踪：PDF 工具该留下哪些记录 / File Audit Trail: What a PDF Tool Should Record",
        description:
          "审计追踪要回答四件事：谁、什么时间、对哪份文件、做了什么操作。在线服务能给出账号级日志但文件已离机，桌面软件只留文件不留操作，浏览器本地工具两样都不给。",
        author: {
          '@type': 'Person',
          name: 'PDFMergeNext',
          url: 'https://pdfmergenext.shop',
          '@id': 'https://pdfmergenext.shop/#organization',
        },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: "2026-10-21",
        dateModified: "2026-10-21",
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
          合规清单 · Audit Trail
        </p>
        <h1 className="mt-2 text-h1 font-bold tracking-tight text-fg">
          文件审计追踪：PDF 工具该留下哪些记录 / File Audit Trail: What a PDF Tool Should Record
        </h1>
        <p className="mt-3 text-body text-fg-secondary">
          审计追踪要回答四件事：谁、什么时间、对哪份文件、做了什么操作。四类工具的记录能力差别很具体，义务先定，工具后挑。
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
            审计追踪要回答四件事：谁、什么时间、对哪份文件、做了什么操作。PDF 工具在这件事上的差别可以讲得很具体：在线服务能给出账号级日志，但文件已经离机；桌面软件只在本地留文件，操作记录要靠操作系统；浏览器本地工具两样都不给，除非自己补。这三种里没有哪个天然正确，要看这份文件的记录义务落在哪里。
          </p>
          <p className="mt-2 text-fg-secondary">
            An audit trail answers four questions: who, when, which file, and what was done. PDF tools differ on this in a way you can state precisely. An online service produces account level logs, and the file has already left your machine. Desktop software leaves files on disk and no record of the operations, so whatever exists comes from the operating system. A browser-local tool gives you neither, unless you add the logging yourself. None of the three is automatically right, because the question is where the record obligation for this particular file sits.
          </p>
          <p className="mt-2 text-fg-secondary">
            判断顺序是：先确定这份文件有没有留痕义务，再看义务要求记到哪一层，最后才轮到挑工具。跳过第一步直接比工具的日志功能，是最常见的浪费时间的方式。义务不存在时，记下来的东西没人看；义务存在时，工具自带的日志往往记不到要求的粒度。
          </p>
          <p className="mt-2 text-fg-secondary">
            The order matters. Establish whether the file carries a logging obligation at all, then find out how deep that obligation goes, and only then pick a tool. Comparing log features before the first step is the usual way to waste an afternoon. With no obligation, nobody reads what you recorded. With an obligation, the built-in log usually stops short of the granularity required.
          </p>
          <p className="mt-2 text-fg-secondary">
            留痕义务的来源大致有监管、合同、内部制度和诉讼保全四处。医疗与金融走行业监管，供应商协议里常带审计权条款，单位内部的保密与分级制度会规定谁经手什么，而律师在保全阶段要的那份操作说明同样是留痕。来源不同，要求记录的字段和保存期限也不同。
          </p>
          <p className="mt-3 text-sm text-fg-muted">
            说明：下面是给工具选型和内部流程用的核对口径，不是法律意见。落到具体责任判断时，以本单位法务或外部律师的意见为准。
          </p>
        </section>

        <section id="what">
          <h2 className="text-title font-semibold text-fg">
            审计追踪要记的四件事 / What has to be captured
          </h2>
          <p className="mt-2 text-fg-secondary">
            四个字段能覆盖多数框架的要求，它们也对应着四个问题。
          </p>
          <p className="mt-2 text-fg-secondary">
            Four fields cover most of what any framework asks for, and they map onto four questions.
          </p>
          <p className="mt-3 font-semibold text-fg">谁 / Who</p>
          <p className="mt-1 text-fg-secondary">
            要能定位到一个具体的人或一个具体的系统账号。共享账号是最常见的失效点：日志里写着某个部门账号做过什么，而三个人都能登。审计时这等于没记。
          </p>
          <p className="mt-3 font-semibold text-fg">什么时间 / When</p>
          <p className="mt-1 text-fg-secondary">
            时间戳要带时区，来源还得可信。系统本地时间可以改，改完之后整条链的可信度就没了。跨时区团队用 UTC 存、用时区渲染，是最省事的做法。
          </p>
          <p className="mt-3 font-semibold text-fg">哪份文件 / Which file</p>
          <p className="mt-1 text-fg-secondary">
            标识要稳定。文件名会改，路径会挪，文件夹会重命名。用哈希或生成时就定下来的文件 ID 更稳，文件名作为辅助字段保留。
          </p>
          <p className="mt-3 font-semibold text-fg">做了什么 / What</p>
          <p className="mt-1 text-fg-secondary">
            记录操作类型和结果：合并、挑页、导出、删除，成功还是失败。只记成功不记失败的日志，在调查时价值有限。
          </p>
          <p className="mt-3 text-fg-secondary">
            第四项是多数工具悄悄停下的地方。一个不写日志的合并工具根本不产生任何一行，这次操作到底有没有跑过，只能靠文件修改时间和当事人的记忆去还原。
          </p>
          <p className="mt-3 text-fg-secondary">
            That fourth field is where most tooling quietly stops. A merge tool that records nothing writes no line at all, and whether the job ran at all has to be reconstructed from file modification times and whatever the person remembers.
          </p>
        </section>

        <section id="tools">
          <h2 className="text-title font-semibold text-fg">
            三类工具各留下什么 / What each kind logs
          </h2>
          <p className="mt-2 text-fg-secondary">
            把一次合并拆到记录这层，在线上传服务、桌面软件和浏览器本地工具给出的东西差别很大。
          </p>
          <p className="mt-2 text-fg-secondary">
            Take one merge down to the logging layer and the three routes produce very different things.
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-line">
            <table className="w-full text-left text-sm">
              <thead className="bg-subtle text-fg-muted">
                <tr>
                  <th className="px-4 py-2 font-semibold">记录位置</th>
                  <th className="px-4 py-2 font-semibold">在线上传服务</th>
                  <th className="px-4 py-2 font-semibold">桌面软件</th>
                  <th className="px-4 py-2 font-semibold">浏览器本地工具</th>
                </tr>
              </thead>
              <tbody className="text-fg-secondary">
                {TOOLLOGS.map((r) => (
                  <tr key={r.dim} className="border-t border-line">
                    <td className="px-4 py-2">{r.dim}</td>
                    <td className="px-4 py-2">{r.online}</td>
                    <td className="px-4 py-2">{r.desktop}</td>
                    <td className="px-4 py-2">{r.local}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-fg-secondary">
            第一列看着最完整，代价写在第二行。文件一旦上传，日志的完整性是用副本的外流换来的，两者不能同时拿到。这也是为什么合规评估里常听到的第一个问题是能不能在本机跑完，本地路径的能力边界见 /blog/offline-pdf-merge-limits。
          </p>
          <p className="mt-3 text-fg-secondary">
            The first column looks the most complete, and the cost sits in row two. Once the file is uploaded, log completeness has been bought with a copy leaving your control, and you do not get both. That is why reviewers so often start by asking whether the job can finish on the device, a question whose boundaries are set out in /blog/offline-pdf-merge-limits.
          </p>
          <p className="mt-3 text-fg-secondary">
            第三列不是没有答案，而是答案需要自己补一行。浏览器本地处理的好处是文件不出设备，代价是没有现成的操作日志。补法写在下一节。日志与临时文件在架构上的差别见 /blog/client-side-vs-server-side-pdf-tools，怎么自己验证零上传见 /blog/devtools-network-tab-privacy-guide。
          </p>
        </section>

        <section id="lines">
          <h2 className="text-title font-semibold text-fg">
            七条记录线 / Seven lines to check
          </h2>
          <p className="mt-2 text-fg-secondary">
            下面这张表按顺序列出每条记录线该有什么，以及一眼能看出来的缺失信号。
          </p>
          <p className="mt-2 text-fg-secondary">
            The table lists what each line should contain and the signal that tells you it is missing.
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-line">
            <table className="w-full text-left text-sm">
              <thead className="bg-subtle text-fg-muted">
                <tr>
                  <th className="px-4 py-2 font-semibold">记录线</th>
                  <th className="px-4 py-2 font-semibold">应包含的内容</th>
                  <th className="px-4 py-2 font-semibold">缺失时的信号</th>
                </tr>
              </thead>
              <tbody className="text-fg-secondary">
                {LINES.map((r) => (
                  <tr key={r.line} className="border-t border-line">
                    <td className="px-4 py-2">{r.line}</td>
                    <td className="px-4 py-2">{r.want}</td>
                    <td className="px-4 py-2">{r.miss}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-fg-secondary">
            最后两行在实务里最常空着，而正是这两行决定了审计时能不能给出完整答案。第五行反过来也常见：只记成功的日志看起来干净，实际掩盖了重试和失败的那部分过程。
          </p>
          <p className="mt-3 text-fg-secondary">
            Those last two rows are the ones most often blank in practice, and they are the ones that decide whether an audit can be answered in full. Row five fails in the opposite direction: a log of successes only looks tidy and hides every retry and failure in between.
          </p>
        </section>

        <section id="workflow">
          <h2 className="text-title font-semibold text-fg">
            当天能补上的留痕流程 / A workflow you can put in place today
          </h2>
          <p className="mt-2 text-fg-secondary">
            七步按顺序做，最后那页记录可以直接进供应商清单和内部制度档案。前三步解决要不要记和记到哪层，后四步解决能不能拿得出。
          </p>
          <p className="mt-2 text-fg-secondary">
            Seven steps in this order, and the last page becomes the record that goes into the vendor list and the internal policy file. The first three settle whether to log and how deep; the last four settle whether you can produce it.
          </p>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-fg-secondary">
            <li>给待处理的文件定性：有没有留痕义务，义务来自监管、合同还是内部制度，结果写进文件名或清单</li>
            <li>确定记录粒度：只要「处理过」还是要到操作类型和结果，这一步决定后面要不要自建日志</li>
            <li>给每份文件定一个稳定标识，哈希或生成时的 ID，别只靠文件名</li>
            <li>选处理方式：需要第三方留证的场景才考虑上传，其余在浏览器本地跑完</li>
            <li>本地工具没有日志，就在操作前后各记一行：谁、时间、文件哈希、做了什么、结果如何</li>
            <li>导出前清一遍元数据、批注层和隐藏图层，元数据里的作者与修改时间同样属于留痕范围，各层表现见 /blog/pdf-metadata-preservation-merge</li>
            <li>把这六步连同文件用途、经手人、保存期限签在同一页纸上归档，期限到期时按约定删</li>
          </ol>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-fg-secondary">
            <li>Classify the file: does a logging obligation exist, and does it come from a regulator, a contract, or an internal policy, written into the file name or a manifest</li>
            <li>Fix the granularity: whether processed is enough or whether operation type and outcome are required, which decides whether you build a log at all</li>
            <li>Give each file a stable identifier, a hash or an ID assigned at creation, not just a name</li>
            <li>Choose the processing route: upload only where a third party has to hold the evidence, browser-local for everything else</li>
            <li>A local tool logs nothing, so write a line before and after: who, when, file hash, what was done, what came out</li>
            <li>Clear metadata, comment layers and hidden layers before export, since author and modification timestamps are part of the same record, with per-layer behaviour in /blog/pdf-metadata-preservation-merge</li>
            <li>Sign all six with purpose, handler and retention period on one page, then delete on schedule</li>
          </ol>
          <p className="mt-3 text-fg-secondary">
            合并这一步在 pdfmergenext.shop 全程本地完成，挑页码和调页序都不需要把文件交出去，第五步那两行记录由你自己写。挑页语法见 /blog/pdf-page-selection-1-3-5-syntax，上一轮商业机密的同款清单见 /blog/trade-secret-protection-pdf-merge。
          </p>
          <p className="mt-3 text-fg-secondary">
            Merging on pdfmergenext.shop runs entirely on your device, so selecting pages and reordering never means handing the file over, and the two log lines in step five are yours to write. Page selection syntax is in /blog/pdf-page-selection-1-3-5-syntax and the trade secret version of this checklist in /blog/trade-secret-protection-pdf-merge.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-on-primary transition-colors duration-fast hover:bg-brand-hover"
          >
            在 pdfmergenext.shop 本地合并，文件不出本机，留痕由你自己掌握 →
          </Link>
          <p className="mt-2 text-sm text-fg-secondary">
            更多 PDF 工具合规与隐私的判断细节见{" "}
            <Link href="/blog" className="text-brand hover:underline">
              /blog
            </Link>
            ，医疗场景同时要对齐的要求见{" "}
            <Link href="/blog/hipaa-compliant-pdf-merge" className="text-brand hover:underline">
              HIPAA 合规 PDF 合并
            </Link>
            ，个保法的八个核对点见{" "}
            <Link href="/blog/china-pipl-pdf-tools-requirements" className="text-brand hover:underline">
              个保法下的 PDF 工具要求
            </Link>
            ，GDPR 的同款骨架见{" "}
            <Link href="/blog/gdpr-compliant-pdf-tools" className="text-brand hover:underline">
              GDPR 合规 PDF 工具检查清单
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
            href="/blog/trade-secret-protection-pdf-merge"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">商业机密保护：合并 PDF 前该先确认的五件事</p>
            <p className="mt-1 text-xs text-fg-secondary">Compliance / 同一套清单的另一半</p>
          </Link>
          <Link
            href="/blog/gdpr-compliant-pdf-tools"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">GDPR 合规 PDF 工具检查清单</p>
            <p className="mt-1 text-xs text-fg-secondary">Compliance / 七项检查的同款骨架</p>
          </Link>
          <Link
            href="/blog/hipaa-compliant-pdf-merge"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">HIPAA 合规 PDF 合并：六道关口</p>
            <p className="mt-1 text-xs text-fg-secondary">Compliance / 医疗场景的另一套口径</p>
          </Link>
          <Link
            href="/blog/client-side-vs-server-side-pdf-tools"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">客户端 PDF 工具 vs 服务器端</p>
            <p className="mt-1 text-xs text-fg-secondary">Architecture / 记录从哪来</p>
          </Link>
        </div>
      </section>
    </article>
  );
}
