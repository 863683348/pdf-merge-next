import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';
const SLUG = "privacy-impact-assessment-pdf-tools";

export const metadata: Metadata = {
  title:
    "隐私影响评估：引入 PDF 工具前要回答的八个问题 | Privacy Impact Assessment for PDF Tools: Eight Questions to Answer First | PDFMergeNext",
  description:
    "隐私影响评估（PIA）在 PDF 工具上不需要写成几十页的报告。这篇把评估拆成八个当天能答完的问题：文件里有什么信息、副本有没有离开本机、谁能读到、保存多久，以及结论怎么写才在事后拿得出证据。",
  keywords: [
    "privacy impact assessment pdf tools",
    "pia pdf tool checklist",
    "dpia document tool",
    "pdf merge privacy assessment",
    "privacy impact assessment template",
    "pdf tool data flow assessment",
    "隐私影响评估 PDF 工具",
    "PIA PDF 合并",
    "PDF 工具引入评估清单",
    "隐私影响评估八问",
    "PDFMergeNext 隐私影响评估",
  ],
  alternates: {
    canonical: "/blog/privacy-impact-assessment-pdf-tools",
    languages: {
      "zh-CN": "/blog/privacy-impact-assessment-pdf-tools",
      "en-US": "/blog/privacy-impact-assessment-pdf-tools",
      "x-default": "/blog/privacy-impact-assessment-pdf-tools",
    },
  },
  openGraph: {
    title: "隐私影响评估：引入 PDF 工具前要回答的八个问题 · PDFMergeNext",
    description:
      "一份能用的隐私影响评估不长，八步就够：信息清单、处理目的、副本去向、可访问角色、留存期限、留痕能力、降险措施、签字复核。",
    type: 'article',
    url: SITE_URL + "/blog/" + SLUG,
    siteName: 'PDFMergeNext',
    publishedTime: "2026-10-25T00:00:00.000Z",
    images: [{ url: SITE_URL + "/og", width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "隐私影响评估：引入 PDF 工具前要回答的八个问题 · PDFMergeNext",
    description:
      "评估不是走过场的文件，是八个能当场填完的空格。填不满的那一格，就是这次引入要先停下来的地方。",
    images: [SITE_URL + "/og"],
  },
};

const FAQ = [
  {
    q: "隐私影响评估和 DPIA 是一回事吗？",
    a: "口径接近，适用范围不同。GDPR 第 35 条用 DPIA 这个词并对触发条件有明确要求，其他法域和多数的内部制度用 PIA 这个更宽的说法。做 PDF 工具评估时两者不必区分：同一张表，先填信息清单和流向，再看适用法规对报告形式有没有额外要求。我们怎么评估隐私优先工具的口径见 /blog/how-we-evaluate-privacy-first-pdf-tools。",
  },
  {
    q: "工具本身很轻量，也要做评估吗？",
    a: "看的是处理了什么信息，不是工具大小。合并三份对外财报几乎不涉及个人信息，可以一句话结案；合并三份员工体检报告，同一款工具要走的流程完全不同。判断放在第一步，也正是这一步决定后面七步要不要展开。",
  },
  {
    q: "本地工具是不是可以跳过大部分步骤？",
    a: "第三步到第五步会变短，其余步骤照旧。文件没有离开本机，副本去向、留存期限、跨境传输这几格基本填一句不适用就够了；但信息清单、处理目的、谁是负责人这三格与架构无关，仍然要填。本地方案的硬边界见 /blog/offline-pdf-merge-limits。",
  },
  {
    q: "评估做完发现不合格，通常卡在哪一步？",
    a: "多数卡在第三步和第五步，也就是拿不出副本清单和留存天数。这两格答不上来不是工具本身有问题，而是供应商没公开，此时把没有公开答案这件事写进结论，比留空有用。要继续用，就在第七步写明替代做法：换成不出本机的工具，或把要处理的文件先做去标识化。CSV 之外的实践参考见 /blog/pdf-data-export-impact。",
  },
  {
    q: "Is a privacy impact assessment the same thing as a DPIA?",
    a: "They overlap and the scope differs. Article 35 of the GDPR uses DPIA and sets out when one is required, while other jurisdictions and most internal policies use the broader term PIA. For a PDF tool you do not need to pick one: use the same table, fill in the data inventory and the flow first, then check whether the applicable regulation adds reporting requirements. Our evaluation method is in /blog/how-we-evaluate-privacy-first-pdf-tools.",
  },
  {
    q: "The tool is tiny. Does it still need an assessment?",
    a: "Judge it by what the file carries, not by the size of the tool. Merging three public financial reports involves almost no personal data and closes in one sentence. Merging three employee health reports is a different job with the same tool. That call happens in step one, and step one decides whether the other seven need to be opened at all.",
  },
  {
    q: "Can a browser-local tool skip most of the steps?",
    a: "Steps three to five get shorter and the rest stay. When the file never leaves the device, the rows for copies, retention and transfer mostly read not applicable. Data inventory, purpose and named owner are independent of architecture and still need an answer. The hard limits of the local route are in /blog/offline-pdf-merge-limits.",
  },
  {
    q: "When an assessment fails, which step is usually the one?",
    a: "Usually steps three and five, where nobody can produce a list of copies or a retention window. Unanswered there is not a defect in the tool, it means the vendor has not published it, and writing that fact into the conclusion beats leaving the cell blank. If you still need the tool, put the workaround in step seven: switch to a route that keeps the file local, or strip identifiers before processing. Related background is in /blog/pdf-data-export-impact.",
  },
];

const TOC = [
  { id: "lead", label: "一句话结论 / Short answer" },
  { id: "scope", label: "评估边界划在哪里 / Where the assessment stops" },
  { id: "flow", label: "数据流向的四个落脚点 / Four places data lands" },
  { id: "eight", label: "八个问题的核对表 / Eight questions, with answers" },
  { id: "write", label: "结论怎么写才有用 / Writing a conclusion that holds up" },
  { id: "faq", label: "常见问题 / FAQ" },
];

const EIGHT = [
  { item: "一、文件里有什么", good: "把字段写实：姓名、证件号、诊断结论、银行账号", trap: "只写个人信息和敏感个人信息这两组抽象词" },
  { item: "二、为什么要处理", good: "一句能判断必要性的话：把三份材料合成一份后提交", trap: "提升效率、改善体验这类无法验证的表述" },
  { item: "三、副本是否离机", good: "写明接收方与所在国家，或写明不存在这条路径", trap: "跳过这一步，直接讨论对方保留几小时" },
  { item: "四、谁能读到", good: "列出可访问副本的角色，含运维与第三方依赖", trap: "只写只有用户本人可见，不覆盖管线上的角色" },
  { item: "五、保存多久", good: "给出天数和起算点，并说明备份是否同样处理", trap: "写尽快删除，没有数字也没有备份口径" },
  { item: "六、有没有留痕能力", good: "给出可自测的方法：断网仍可用，面板无上传请求", trap: "缺少任何记录，事后只能听供应商说明" },
  { item: "七、风险怎么降", good: "对应第三到第五步各给一条当天能执行的动作", trap: "写加强管理、提高意识这类没有动作的措施" },
  { item: "八、谁签字何时复核", good: "写明工具版本、核对日期、负责人和下次复核时间", trap: "只有口头结论，工具升级后没人再看第二遍" },
];

const FLOW = [
  { stop: "导入", offline: "从磁盘读入浏览器进程的内存", online: "上传到接收端点，通常经过一层 CDN" },
  { stop: "处理", offline: "在本机内存中拼接页面并重建目录", online: "在服务端完成拼接，队列可能落盘" },
  { stop: "导出", offline: "写回本地下载目录", online: "返回一个临时下载链接" },
  { stop: "事后", offline: "除目标文件外不产生其他结果", online: "日志、缓存与备份可能各自留下副本" },
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
            name: "隐私影响评估：引入 PDF 工具前要回答的八个问题",
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
          "隐私影响评估：引入 PDF 工具前要回答的八个问题 / Privacy Impact Assessment for PDF Tools: Eight Questions to Answer First",
        description:
          "隐私影响评估在 PDF 工具上也不需要写成几十页的报告。八个问题：文件里有什么、为什么处理、副本去哪、谁能读到、留多久、怎么留痕、怎么降险、谁签字。",
        author: {
          '@type': 'Person',
          name: 'PDFMergeNext',
          url: 'https://pdfmergenext.shop',
          '@id': 'https://pdfmergenext.shop/#organization',
        },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: "2026-10-25",
        dateModified: "2026-10-25",
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
          合规清单 · Privacy Impact Assessment
        </p>
        <h1 className="mt-2 text-h1 font-bold tracking-tight text-fg">
          隐私影响评估：引入 PDF 工具前要回答的八个问题 / Privacy Impact Assessment for PDF Tools: Eight Questions to Answer First
        </h1>
        <p className="mt-3 text-body text-fg-secondary">
          引入一个 PDF 工具之前，隐私影响评估只需要做一件事：把「这个工具安不安全」换成八个能当场填完的空格。这篇给出表格化的填法、跳过某格会在哪里出问题，以及最后一页怎么写的版本在一年的审计里也能拿出来用。
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
            隐私影响评估（Privacy Impact Assessment，简称 PIA）回答的是一个问题：把文件交给这个工具之后，里面的个人信息会走到哪里去。对 PDF 合并工具来说，这个问题的答案通常很短，因为输入往往是合同、体检报告或报税材料，而合并这一步要么带走一份副本，要么不带。这篇把评估拆成八个能在一个下午填完的空格，给出填对了和填错了的对照，最后附一页可以直接归档的结论模板。
          </p>
          <p className="mt-2 text-fg-secondary">
            A privacy impact assessment answers one question before you adopt a tool: once a file is handed over, where does the personal data inside it go. For a PDF merge tool the answer tends to be short, because the input is usually a contract, a medical record or a tax return, and the processing step either takes a copy off the device or it does not. This article turns the assessment into eight questions you can fill in during one afternoon, gives a table of answers that hold up and answers that do not, and ends with a conclusion page you can file.
          </p>
          <p className="mt-2 text-fg-secondary">
            常见的失手方式有两种。第一种是把评估写成政策摘要，通篇是重视隐私、符合法规这类表述，没有一处能验证；第二种相反，把评估写成满分升级标，最后只有结论没有人签字，工具升级之后再没人看过第二遍。能用的评估落在两者之间：每条都能核到一个动作，整份东西一页 A4 装得下。
          </p>
          <p className="mt-2 text-fg-secondary">
            There are two common ways this goes wrong. One writes the assessment as a policy summary, full of statements about taking privacy seriously, with nothing in it that anybody can check. The other turns it into a procurement scorecard that ends in a conclusion nobody signed, reopened only after an incident. A usable assessment sits between them: every line maps to an action someone can run, and the whole thing fits on one page.
          </p>
          <p className="mt-3 text-sm text-fg-muted">
            说明：下面是给工具选型和内部制度用的核对口径，不是法律意见。具体义务以适用的法规和本单位法务的判断为准。
          </p>
        </section>

        <section id="scope">
          <h2 className="text-title font-semibold text-fg">
            评估边界划在哪里 / Where the assessment stops
          </h2>
          <p className="mt-2 text-fg-secondary">
            边界要先划，否则八个空格会一路扩展成三十个。这里只评估「文件处理」这一件事：文件从被选中到得出结果中间经过的步骤。账号体系、支付流程、客服工单属于另一份评估，不要混进来。
          </p>
          <p className="mt-2 text-fg-secondary">
            Draw the boundary first, or the eight cells grow into thirty. This assessment covers file processing and nothing else: the steps between selecting a file and getting a result. Account systems, payment flows and support tickets belong to a separate document and should not be folded in here.
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-fg-secondary">
            <li>纳入范围：导入、处理、导出、事后残留四个环节上的所有写入动作</li>
            <li>不纳入：官网本身的 Cookie、邮件推送、广告投放这些与文件无关的链路</li>
            <li>时间边界：以工具的当前版本号为准，版本变更即触发复核，而不是等年度检查</li>
            <li>责任边界：谁填谁签，第三方依赖由引入方一起担责，不由供应商代填</li>
          </ul>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-fg-secondary">
            <li>In scope: every write action across ingress, processing, export and residue</li>
            <li>Out of scope: site cookies, newsletter delivery and advertising pixels, none of which touch the file</li>
            <li>Version boundary: assess the current release number, and let a version change trigger a recheck rather than waiting for the annual review</li>
            <li>Ownership: whoever fills it in signs it, and third-party dependencies sit with the adopting team rather than the vendor</li>
          </ul>
          <p className="mt-3 text-fg-secondary">
            第三条最常被漏掉。工具改一次前端打包，数据路径可能跟着改，而年度复核周期通常比版本节奏慢得多。把版本号写进表头，比写一句「本评估长期有效」有用。
          </p>
          <p className="mt-3 text-fg-secondary">
            Row three is the one that gets missed. A single front-end rebuild can move the data path, and annual reviews run slower than release cycles. Putting the version number in the header does more work than declaring the assessment valid indefinitely.
          </p>
        </section>

        <section id="flow">
          <h2 className="text-title font-semibold text-fg">
            数据流向的四个落脚点 / Four places data lands
          </h2>
          <p className="mt-2 text-fg-secondary">
            八个空格里有五个其实在问同一件事：文件到底停在了哪里。先把四个环节列出来，再回答具体格子，填错的次数会少很多。
          </p>
          <p className="mt-2 text-fg-secondary">
            Five of the eight cells ask the same thing in different words: where does the file actually come to rest. Listing the four stages first and answering the cells afterwards cuts most of the guesswork.
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-line">
            <table className="w-full text-left text-sm">
              <thead className="bg-subtle text-fg-muted">
                <tr>
                  <th className="px-4 py-2 font-semibold">环节</th>
                  <th className="px-4 py-2 font-semibold">不出本机的做法</th>
                  <th className="px-4 py-2 font-semibold">需要上传的做法</th>
                </tr>
              </thead>
              <tbody className="text-fg-secondary">
                {FLOW.map((r) => (
                  <tr key={r.stop} className="border-t border-line">
                    <td className="px-4 py-2">{r.stop}</td>
                    <td className="px-4 py-2">{r.offline}</td>
                    <td className="px-4 py-2">{r.online}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-fg-secondary">
            最后一行的差别决定了后面几格的难度。文件不出本机时，「保存多久」这一格直接写不适用；一旦有服务端，同一格就要问 CDN 缓存、访问日志、队列落盘和备份四件事，而这四处的保留策略往往不是同一个团队在管。
          </p>
          <p className="mt-3 text-fg-secondary">
            The last row decides how hard the remaining cells get. When nothing leaves the device, retention reads not applicable and stops there. Add a server and the same cell has to cover CDN caches, access logs, queued writes and backups, which four teams usually own separately.
          </p>
          <p className="mt-3 text-fg-secondary">
            服务端架构那一条分支的差别见 /blog/client-side-vs-server-side-pdf-tools，自己动手验证面板请求的做法见 /blog/devtools-network-tab-privacy-guide。
          </p>
        </section>

        <section id="eight">
          <h2 className="text-title font-semibold text-fg">
            八个问题的核对表 / Eight questions, with answers
          </h2>
          <p className="mt-2 text-fg-secondary">
            这张表就是评估本体。打印出来填完，再签上名字和日期，一份能用的隐私影响评估就成型了。第二列和第三列要一起看：出现第三列里任何一种写法，第一列那一格就算没答。
          </p>
          <p className="mt-2 text-fg-secondary">
            This table is the assessment. Print it, fill it in, sign it with a date, and you have something usable. Read columns two and three together: any wording from column three means the cell counts as unanswered.
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-line">
            <table className="w-full text-left text-sm">
              <thead className="bg-subtle text-fg-muted">
                <tr>
                  <th className="px-4 py-2 font-semibold">检查项</th>
                  <th className="px-4 py-2 font-semibold">合格的答案</th>
                  <th className="px-4 py-2 font-semibold">常见的假答案</th>
                </tr>
              </thead>
              <tbody className="text-fg-secondary">
                {EIGHT.map((r) => (
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
            第一格和第二格承担最多重量，也最常被敷衍。把个人信息四个字换成具体的字段名之后，第五格里的留存天数才有意义：一张只印着姓名的名片三十天，和一份带着诊断结论的病历三十天，不是同一件事。
          </p>
          <p className="mt-3 text-fg-secondary">
            Cells one and two carry most of the weight and get the least attention. Once the phrase personal data is replaced by actual field names, the retention number in cell five means something: thirty days for a business card carrying only a name is not the same as thirty days for a record carrying a diagnosis.
          </p>
          <p className="mt-3 text-fg-secondary">
            第六格常被当作可选项，而它决定了前面五格能不能被验证。没有自测方法时，第三格到第五格只能听供应商说，评估也就退化成对方营销文案的摘录。验证方法本身见 /blog/devtools-network-tab-privacy-guide，七条原则与这张表的对应关系见 /blog/privacy-by-design-pdf-tools。
          </p>
          <p className="mt-3 text-fg-secondary">
            Cell six gets treated as optional, and it is the one that decides whether cells three to five can be checked at all. With no published method, everything from cell three onwards rests on the vendor telling you, and the assessment becomes a summary of their marketing copy. The verification method itself is in /blog/devtools-network-tab-privacy-guide, and how the seven principles map onto this table is in /blog/privacy-by-design-pdf-tools.
          </p>
        </section>

        <section id="write">
          <h2 className="text-title font-semibold text-fg">
            结论怎么写才有用 / Writing a conclusion that holds up
          </h2>
          <p className="mt-2 text-fg-secondary">
            结论页只需要四段，每段都能独立被检查。写出来之后交给法务或外部审计，对方不需要回来追问任何一句。
          </p>
          <p className="mt-2 text-fg-secondary">
            The conclusion page needs four paragraphs, each checkable on its own. Hand it to legal or to an external auditor and nobody should need to come back with questions.
          </p>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-fg-secondary">
            <li>这次处理了什么：字段清单加上一份代表性文件名，不用贴文件内容</li>
            <li>依据哪一条：写明适用法规或内部制度的条款编号，以及为什么触发这次评估</li>
            <li>哪一格没答上：空缺的一格写清楚原因，是供应商没公开还是功能不存在</li>
            <li>降级动作与责任人：每一条动作配一个名字和一个日期，复核日期一并写下</li>
          </ol>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-fg-secondary">
            <li>What was processed: the field list plus one representative file name, with no need to paste contents</li>
            <li>Under which provision: the clause number in the applicable regulation or internal policy, and why this assessment was triggered</li>
            <li>Which cell stayed empty: name it, and say whether the vendor has not published it or the capability does not exist</li>
            <li>Mitigation and owner: one name and one date per action, plus the recheck date</li>
          </ol>
          <p className="mt-3 text-fg-secondary">
            第三段是这份东西的价值所在。填得满满当当、看起来没有风险的评估通常说明没人认真查；承认有一格填不上来，反而证明整份表过了一遍。GDPR 那一侧的条款对照见 /blog/gdpr-compliant-pdf-tools，个保法下八个可核对的点见 /blog/china-pipl-pdf-tools-requirements，操作记录这块见 /blog/pdf-file-audit-trail-requirements。
          </p>
          <p className="mt-3 text-fg-secondary">
            Paragraph three is where the value sits. A fully answered assessment showing no risk at all usually means nobody looked hard, while admitting one open cell is evidence that the table was worked through. The clause-by-clause view for GDPR is in /blog/gdpr-compliant-pdf-tools, the eight checkable points under the PIPL are in /blog/china-pipl-pdf-tools-requirements, and the operational record side is in /blog/pdf-file-audit-trail-requirements.
          </p>
          <p className="mt-3 text-fg-secondary">
            合并这一步在 pdfmergenext.shop 全程在本机完成，第三格到第五格基本可以一句带过：没有接收方，因此没有留存期限、没有跨境路径、也没有备份口径要谈。想把这一句写进内部制度时，配上下游疏散的例子会更好用，零上传的实现方式见 /blog/how-zero-upload-pdf-tools-work。
          </p>
          <p className="mt-3 text-fg-secondary">
            Merging on pdfmergenext.shop runs entirely on your device, so cells three to five mostly close in one line: there is no receiving party, and therefore no retention window, no transfer path and no backup policy to negotiate. Writing that into an internal policy works better with an example of what the other route looks like, and how zero-upload is implemented is in /blog/how-zero-upload-pdf-tools-work.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-on-primary transition-colors duration-fast hover:bg-brand-hover"
          >
            在 pdfmergenext.shop 本地合并 PDF，评估第三格直接写不适用 →
          </Link>
          <p className="mt-2 text-sm text-fg-secondary">
            七条原则的逐条口径见{" "}
            <Link href="/blog/privacy-by-design-pdf-tools" className="text-brand hover:underline">
              隐私设计：七条原则怎么逐条核对
            </Link>
            ，数据出境那一格怎么填见{" "}
            <Link href="/blog/pdf-data-export-impact" className="text-brand hover:underline">
              PDF 工具的数据出境影响
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
            href="/blog/privacy-by-design-pdf-tools"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">隐私设计 PDF 工具：七条原则怎么逐条核对</p>
            <p className="mt-1 text-xs text-fg-secondary">Principles / 这张表的上一层口径</p>
          </Link>
          <Link
            href="/blog/client-side-vs-server-side-pdf-tools"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">客户端 PDF 工具 vs 服务器端</p>
            <p className="mt-1 text-xs text-fg-secondary">Architecture / 第三格怎么答</p>
          </Link>
          <Link
            href="/blog/gdpr-compliant-pdf-tools"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">GDPR 合规 PDF 工具：选型前能逐条打勾的清单</p>
            <p className="mt-1 text-xs text-fg-secondary">GDPR / 条款那一层</p>
          </Link>
          <Link
            href="/blog/china-pipl-pdf-tools-requirements"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">个保法下的 PDF 工具要求</p>
            <p className="mt-1 text-xs text-fg-secondary">PIPL / 八个当场可核对的点</p>
          </Link>
        </div>
      </section>
    </article>
  );
}
