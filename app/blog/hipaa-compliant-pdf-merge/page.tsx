import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';
const SLUG = "hipaa-compliant-pdf-merge";

export const metadata: Metadata = {
  title:
    "HIPAA 合规 PDF 合并：医疗文件要过的六道关口 | HIPAA Compliant PDF Merge: Six Gates for Medical Documents | PDFMergeNext",
  description:
    "病历、检验报告、理赔附件要合成一份 PDF 时，HIPAA 看的是六件能写成书面答案的事：有没有 BAA、PHI 是否离机、去标识化做到哪一步、访问有没有留痕、副本什么时候删、以及工具方算不算商业伙伴。这篇给出可当场核对的清单和一套当天能跑的本地流程。",
  keywords: [
    "hipaa compliant pdf merge",
    "hipaa compliant pdf merger",
    "merge phi pdf files",
    "hipaa pdf tool BAA",
    "de-identify pdf hipaa safe harbor",
    "HIPAA 合规 PDF 合并",
    "病历 PDF 合并",
    "PDF 合并 BAA",
    "医疗文件 PDF 工具",
    "PDFMergeNext HIPAA",
  ],
  alternates: {
    canonical: "/blog/hipaa-compliant-pdf-merge",
    languages: {
      "zh-CN": "/blog/hipaa-compliant-pdf-merge",
      "en-US": "/blog/hipaa-compliant-pdf-merge",
      "x-default": "/blog/hipaa-compliant-pdf-merge",
    },
  },
  openGraph: {
    title: "HIPAA 合规 PDF 合并：医疗文件要过的六道关口 · PDFMergeNext",
    description:
      "六道关口：PHI 识别、商业伙伴判定、BAA、文件是否离机、删除窗口、访问留痕。问完这六项，结论就有了。",
    type: 'article',
    url: SITE_URL + "/blog/" + SLUG,
    siteName: 'PDFMergeNext',
    publishedTime: "2026-10-14T00:00:00.000Z",
    images: [{ url: SITE_URL + "/og", width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "HIPAA 合规 PDF 合并：医疗文件要过的六道关口 · PDFMergeNext",
    description:
      "PHI 识别、BAA、文件是否离机、删除窗口、访问留痕。六项问完，这份清单就该有结论了。",
    images: [SITE_URL + "/og"],
  },
};

const FAQ = [
  {
    q: "用浏览器本地工具合并病历，还需要签 BAA 吗？",
    a: "文件不离开本机，供应商接触不到 PHI，通常就不构成商业伙伴关系，这一步不需要 BAA。剩下要交代的是网站自身的统计与 Cookie，工作量比论证服务器端处理小得多。判断依据要能验证，实测方法见 /blog/devtools-network-tab-privacy-guide。",
  },
  {
    q: "把姓名和日期抹掉，这份 PDF 就不算 PHI 了吗？",
    a: "只抹姓名和日期不够。安全港路径要求 18 类标识符全部清除，而且你还要不知道剩余信息单独或组合起来能识别到个人。另一条路径是专家判定，由具备统计与科学知识的人出具意见，说明重识别风险极小。两条路都要留档。",
  },
  {
    q: "同事用同一台电脑上的在线工具合并理赔件，算谁的违规？",
    a: "责任落在覆盖实体（医疗机构、保险方或其商业伙伴）头上，而不是员工个人。这也是为什么规范要写成流程而不是口头提醒：把\"哪类文件必须本地处理\"写进操作手册，比事后追责有用。",
  },
  {
    q: "合并完的副本留在对方服务器上，怎么确认删掉了？",
    a: "看合同里的删除窗口和删除证明条款，不看聊天窗口里一句\"已删除\"。典型写法是临时对象在处理后 24 小时内清除、审计日志只记条数不记内容，并约定备份轮转时同样覆盖。",
  },
  {
    q: "Is a no-upload PDF merge tool automatically HIPAA compliant?",
    a: "It removes the part that usually requires a BAA, because the vendor never receives PHI and no business associate relationship forms over the document itself. What remains is the website: analytics, advertising cookies and any contact form still need handling. That is far smaller than documenting server-side processing of charts.",
  },
  {
    q: "Does removing names and dates make a PDF non-PHI?",
    a: "Not by itself. The Safe Harbor route requires all 18 identifiers to go, plus an actual lack of knowledge that the remainder could identify someone. The alternative is expert determination, where a qualified statistician documents that re-identification risk is very small. Either way the decision has to be written down.",
  },
  {
    q: "Who is liable if a staff member merges claim files in an online tool?",
    a: "The covered entity, not the individual. That is why the rule belongs in a written procedure rather than a reminder in chat: naming which document types must be processed locally does more than any retroactive conversation.",
  },
  {
    q: "How do I prove the remote copy was deleted?",
    a: "Through the contract, not through an email. Look for a deletion window such as 24 hours for temporary objects, a statement that audit logs hold counts rather than content, and an undertaking that backup rotation is covered as well.",
  },
];

const TOC = [
  { id: "lead", label: "一句话结论 / Short answer" },
  { id: "scope", label: "哪些 PDF 算 PHI 载体 / What counts as PHI" },
  { id: "gates", label: "六道关口检查清单 / The six gates" },
  { id: "baa", label: "BAA：决定能不能用的那张纸 / The BAA" },
  { id: "deident", label: "去标识化：两条合法路径 / De-identification" },
  { id: "workflow", label: "当天能跑的本地流程 / A workflow for today" },
  { id: "faq", label: "常见问题 / FAQ" },
];

const GATES = [
  { dim: "PHI 识别", pass: "合并前先扫一遍 18 类标识符，标出哪些页含 PHI", fail: "默认整份都是，也不分层，去标识化无从下手" },
  { dim: "商业伙伴判定", pass: "文件离机即视为商业伙伴，先签 BAA 再用", fail: "供应商自称不是商业伙伴，却拿不出判定依据" },
  { dim: "BAA 文本", pass: "可签署的协议，写明允许用途、 safeguards、子承包商、违约通知", fail: "只有隐私政策，或者服务条款里一句话带过" },
  { dim: "文件是否离机", pass: "浏览器本地处理，DevTools 实测零上传", fail: "先上传再处理，附带一句\"处理后自动删除\"" },
  { dim: "删除窗口", pass: "合同写明时限（常见 24 小时）并可出具删除证明", fail: "口头承诺会删除，没有时限也没有证明方式" },
  { dim: "访问留痕", pass: "谁在何时打开、导出、合并都有记录，日志不含内容", fail: "完全没有审计日志，出事后无法回溯" },
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
            name: "HIPAA 合规 PDF 合并：医疗文件要过的六道关口",
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
          "HIPAA 合规 PDF 合并：医疗文件要过的六道关口 / HIPAA Compliant PDF Merge: Six Gates for Medical Documents",
        description:
          "病历、检验报告、理赔附件要合成一份 PDF 时，HIPAA 看的是六件能写成书面答案的事：有没有 BAA、PHI 是否离机、去标识化做到哪一步、访问有没有留痕、副本什么时候删、以及工具方算不算商业伙伴。这篇给出可当场核对的清单和一套当天能跑的本地流程。",
        author: {
          '@type': 'Person',
          name: 'PDFMergeNext',
          url: 'https://pdfmergenext.shop',
          '@id': 'https://pdfmergenext.shop/#organization',
        },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: "2026-10-14",
        dateModified: "2026-10-14",
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
          合规清单 · HIPAA Compliance
        </p>
        <h1 className="mt-2 text-h1 font-bold tracking-tight text-fg">
          HIPAA 合规 PDF 合并：医疗文件要过的六道关口 / HIPAA Compliant PDF Merge: Six Gates for Medical Documents
        </h1>
        <p className="mt-3 text-body text-fg-secondary">
          六道关口把"符不符合 HIPAA"拆成能当场核对的事实：PHI 在哪一页、有没有 BAA、文件离没离机。
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
            判断一套 PDF 合并流程在 HIPAA 下站不站得住，不需要通读法规，只要回答六个问题，而且每个问题都有能落到纸面上的答案：文件里有没有 PHI（受保护健康信息）、工具方算不算商业伙伴、有没有签 BAA（商业伙伴协议）、处理过程中文件有没有离开你的掌控、留在别处的副本什么时候删、谁打开过有没有留痕。六项全部有书面答案，这套流程就能进风险评估报告；少一项，那份报告里就得留一句"暂无法证明"。
          </p>
          <p className="mt-2 text-fg-secondary">
            A HIPAA compliant PDF merge is not a certificate you buy. It is six facts you can put in writing: does the file hold PHI, is the vendor a business associate, is a BAA signed, does the document ever leave your control, when the remote copy gets deleted, and is access logged. Answer all six and the workflow survives a risk analysis. Miss one and the report carries a gap no marketing page can close.
          </p>
          <p className="mt-2 text-fg-secondary">
            最省力的做法是把第四项直接做成零风险：用浏览器本地处理的工具，合并从头到尾不发生文件上传 /blog/merge-pdf-no-upload，服务器端那条链上就没有需要论证的内容，BAA 这一层通常也不成立。剩下的工作从论证降级为记录，这也是合规岗越来越把"能不能在本机跑完"当成第一道筛子的原因。
          </p>
          <p className="mt-2 text-fg-secondary">
            The cheapest move is to make gate four a non-issue. With a tool that processes inside the browser, nothing is uploaded at any point, so there is no server-side processing to justify and usually no business associate relationship over the document either. What is left is documentation rather than argument, which is why compliance teams now ask whether a job can run locally before they ask anything else.
          </p>
        </section>

        <section id="scope">
          <h2 className="text-title font-semibold text-fg">
            哪些 PDF 算 PHI 载体 / What counts as PHI
          </h2>
          <p className="mt-2 text-fg-secondary">
            先划范围，否则后面五道关口都判不准。门诊病历、检验报告、影像导出的 PDF、转诊单、理赔附件、把姓名和诊断放在同一张表上的清单，全部在范围内。判断标准是 18 类标识符：姓名、细到门牌的地址、精确到年月日（年份除外）的日期、电话、传真、邮箱、社保号、病历号、保险受益人号、账号、证书与执照号、车牌与设备序列号、URL、IP、生物识别、面部照片，以及任何其他唯一识别特征。健康信息加上其中任一项，这份 PDF 就是 PHI。
          </p>
          <p className="mt-2 text-fg-secondary">
            Scope first, because the other five gates depend on it. Clinic notes, lab reports, imaging exports, referral forms, claim attachments and any list pairing a name with a diagnosis all qualify. The test is the set of 18 identifiers: names, street-level addresses, dates more precise than a year, phone and fax numbers, email addresses, Social Security numbers, medical record numbers, health plan beneficiary numbers, account numbers, certificate and licence numbers, vehicle and device identifiers, URLs, IP addresses, biometric identifiers, face photographs, and any other unique identifying characteristic. Health information plus any one of them makes the file PHI.
          </p>
          <p className="mt-2 text-fg-secondary">
            边界情况集中在两个地方。一是纯内部统计表：如果只有计数、没有标识符，通常不构成 PHI，但一旦附了科室排班表上的姓名就回到范围内。二是患者自己提交的材料：患者把自己的检查报告合并后发给医生，这一份不在覆盖实体手里时不受 HIPAA 约束，但落到机构系统里的那一刻就算。
          </p>
          <p className="mt-2 text-fg-secondary">
            Two edge cases come up repeatedly. Aggregate internal tables without identifiers usually fall outside, but attaching a staff roster reintroduces PHI. Documents a patient assembles and sends on their own are not covered while they sit with the patient; the moment they land in the provider system, they are.
          </p>
        </section>

        <section id="gates">
          <h2 className="text-title font-semibold text-fg">
            六道关口检查清单 / The six gates
          </h2>
          <p className="mt-2 text-fg-secondary">
            下面这张表按顺序列出检查项、通过的样子和一眼能看出来的不合格信号。第三列最有价值，因为供应商在这些地方的回答通常含糊，而含糊本身就是答案。
          </p>
          <p className="mt-2 text-fg-secondary">
            The table below lists each gate, what passing looks like, and the signal that fails it instantly. The third column matters most, because vague answers cluster there and vagueness is itself the answer.
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-line">
            <table className="w-full text-left text-sm">
              <thead className="bg-subtle text-fg-muted">
                <tr>
                  <th className="px-4 py-2 font-semibold">关口</th>
                  <th className="px-4 py-2 font-semibold">通过的样子</th>
                  <th className="px-4 py-2 font-semibold">不合格的信号</th>
                </tr>
              </thead>
              <tbody className="text-fg-secondary">
                {GATES.map((r) => (
                  <tr key={r.dim} className="border-t border-line">
                    <td className="px-4 py-2">{r.dim}</td>
                    <td className="px-4 py-2">{r.pass}</td>
                    <td className="px-4 py-2">{r.fail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-fg-secondary">
            第四行决定了其余五行的难度。文件从未离开本机，这条链上就不存在替你处理病历的第三方，BAA、删除窗口、跨境存储这些条目从论证降级为记录。
          </p>
          <p className="mt-3 text-fg-secondary">
            Row four sets the difficulty of the other five. When nothing leaves the device there is no third party processing charts on your behalf, so BAA, deletion windows and storage location drop from arguments to records.
          </p>
        </section>

        <section id="baa">
          <h2 className="text-title font-semibold text-fg">
            BAA：决定能不能用的那张纸 / The BAA that decides it
          </h2>
          <p className="mt-2 text-fg-secondary">
            只要工具方替你接触了 PHI，它就是商业伙伴，需要一份商业伙伴协议。这份协议不是形式：它要写明允许和禁止的用途、要求对方采取适当 safeguards、约束子承包商承担同等义务、并约定安全事件发生后多快通知你。拿不到文本，这项就不通过，换名录里的下一家。
          </p>
          <p className="mt-2 text-fg-secondary">
            Any vendor that touches PHI on your behalf is a business associate and needs a business associate agreement in place. The document is not a formality. It has to state permitted and prohibited uses, require appropriate safeguards, bind subcontractors to the same terms, and set a deadline for breach notification. No text, no pass: move to the next vendor on the list.
          </p>
          <p className="mt-3 font-semibold text-fg">签 BAA 前要逐条对齐的五项</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-fg-secondary">
            <li>允许用途：只限于你书面指令范围内的处理，不写"为改进服务而使用"</li>
            <li>safeguards：管理、物理、技术三类措施都要落到具体做法，而不是一句"符合行业标准"</li>
            <li>子承包商：给出名单，并承诺变更时提前通知、可提出异议</li>
            <li>违约通知：写明发现后多少天内告知，以及告知包含哪些内容</li>
            <li>终止后处理：合同结束时 PHI 返还还是销毁，同样要写清</li>
          </ul>
          <p className="mt-3 font-semibold text-fg">Five clauses to line up before signing</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-fg-secondary">
            <li>Permitted use: limited to your written instructions, with no clause about improving the service</li>
            <li>Safeguards: administrative, physical and technical measures named as concrete practices, not as "industry standard"</li>
            <li>Subcontractors: a named list, advance notice of changes, and a right to object</li>
            <li>Breach notification: how many days after discovery, and what the notice contains</li>
            <li>End of contract: whether PHI is returned or destroyed, written down either way</li>
          </ul>
          <p className="mt-3 text-fg-secondary">
            角色漂移同样出现在这里。工具方如果把上传的文件拿去训练模型或做统计，它就在为自己的目的处理，那一部分需要独立的法律依据，通常还要单独告知。合同里出现这类措辞时，把它列成待核实项。
          </p>
          <p className="mt-3 text-fg-secondary">
            Role drift shows up here too. A vendor that trains models or builds statistics on uploaded files is pursuing its own purpose for that part, which needs its own legal basis and usually its own notice. Flag that wording as an open item instead of assuming it is fine.
          </p>
        </section>

        <section id="deident">
          <h2 className="text-title font-semibold text-fg">
            去标识化：两条合法路径 / De-identification, two routes
          </h2>
          <p className="mt-2 text-fg-secondary">
            合并完要外发、要存档、要给第三方做统计时，去标识化是常用的一步。HIPAA 给了两条路：安全港要求 18 类标识符全部清除，并且你实际上不知道剩余信息能识别到个人；专家判定则由具备统计与科学知识的人出具意见，说明重识别风险非常小，方法、结果和出具人都要留档。
          </p>
          <p className="mt-2 text-fg-secondary">
            When the merged file goes out to a third party or into a research archive, de-identification is the usual step. HIPAA offers two routes. Safe Harbor removes all 18 identifiers and requires that you have no actual knowledge the remainder could identify someone. Expert determination relies on a written opinion from someone with appropriate statistical and scientific knowledge that re-identification risk is very small, with the method, the result and the author on file.
          </p>
          <p className="mt-3 font-semibold text-fg">安全港路径容易漏掉的四处</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-fg-secondary">
            <li>PDF 元数据：作者、标题、修改时间常残留姓名和机构名，页面清干净不等于文件清干净</li>
            <li>页眉页脚与水印：扫描件里的医院抬头、科室名、技师缩写</li>
            <li>图层与批注：隐藏图层、修订记录、表单字段里的默认值</li>
            <li>文件名与内嵌附件：文件名本身带病历号，附件里还有原始影像</li>
          </ul>
          <p className="mt-3 font-semibold text-fg">Four places Safe Harbor cleanup misses</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-fg-secondary">
            <li>PDF metadata: author, title and edit timestamps often still carry names and the organisation, so a clean page is not a clean file</li>
            <li>Headers, footers and watermarks: hospital letterheads, department names and technician initials baked into scans</li>
            <li>Layers and annotations: hidden layers, revision history and default values inside form fields</li>
            <li>File names and embedded attachments: a record number in the file name, an original image still attached</li>
          </ul>
          <p className="mt-3 text-fg-secondary">
            顺序上，先合并再去标识化更省事：一次处理一个文件，元数据也只需要清一遍。反过来做，中间那份带 PHI 的合并件就多了一次暴露。PDF 各层元数据在合并时的表现见 /blog/pdf-metadata-preservation-merge。
          </p>
          <p className="mt-3 text-fg-secondary">
            Merge first, then de-identify. One file to process, one metadata pass, and no intermediate copy of the full PHI set sitting around. Doing it the other way adds an extra exposure window. How the metadata layers behave through a merge is covered in /blog/pdf-metadata-preservation-merge.
          </p>
        </section>

        <section id="workflow">
          <h2 className="text-title font-semibold text-fg">
            当天能跑的本地流程 / A workflow you can run today
          </h2>
          <p className="mt-2 text-fg-secondary">
            把下面七步固定下来，一次做完，最后那页记录可以直接进供应商清单和风险评估档案。前三步解决"要不要签 BAA"，后四步解决"做完怎么证明"。
          </p>
          <p className="mt-2 text-fg-secondary">
            Fix these seven steps once and the last line becomes the record that goes into your vendor list and risk analysis. The first three settle the BAA question, the last four settle the evidence question.
          </p>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-fg-secondary">
            <li>给待合并的文件分类：含 PHI 的还是已去标识化的，分类结果写进文件名或清单</li>
            <li>确认文件是否离机：能在浏览器里跑完的工具，后面几步大部分变成零风险项</li>
            <li>若确认离机，向供应商索取 BAA 全文与子承包商名单；拿不到就换下一家</li>
            <li>本地完成合并，挑页码、调页序都在本机进行</li>
            <li>导出前清一遍元数据：标题、作者、关键词、修改时间与隐藏图层</li>
            <li>记录删除窗口与证明方式（临时对象 24 小时内清除，日志只记条数）</li>
            <li>把以上六条连同工具名、用途、负责人签在同一页纸上归档</li>
          </ol>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-fg-secondary">
            <li>Sort the files: PHI or already de-identified, and put the result in the file name or the manifest</li>
            <li>Decide whether anything leaves the device; a browser-local tool turns most later steps into non-issues</li>
            <li>If it does leave, request the full BAA and the subcontractor list; move on if either is refused</li>
            <li>Merge locally, including page selection and reordering</li>
            <li>Before exporting, clear metadata: title, author, keywords, timestamps and hidden layers</li>
            <li>Record the deletion window and how proof is issued, with temporary objects purged within 24 hours and logs holding counts only</li>
            <li>Sign all six items together with tool name, purpose and the responsible person, then file the page</li>
          </ol>
          <p className="mt-3 text-fg-secondary">
            合并这一步在 pdfmergenext.shop 全程本地完成，挑页码和调页序都不需要把病历交出去。这也是为什么在第一道关口上，本地工具和需要上传的工具不放在同一张表里比较：前者少了一整章论证。架构层面的差别见 /blog/client-side-vs-server-side-pdf-tools，零上传工具怎么实现见 /blog/how-zero-upload-pdf-tools-work，上一轮 GDPR 侧的同款清单见 /blog/gdpr-compliant-pdf-tools。
          </p>
          <p className="mt-3 text-fg-secondary">
            Merging on pdfmergenext.shop happens entirely on your device, so selecting pages and reordering them never involves handing charts to anyone. That is why local tools and upload-required tools do not belong in the same comparison table on gate one: the local route removes a whole chapter of justification. The architectural difference is set out in /blog/client-side-vs-server-side-pdf-tools, the mechanics of zero upload in /blog/how-zero-upload-pdf-tools-work, and the GDPR equivalent of this checklist in /blog/gdpr-compliant-pdf-tools.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-on-primary transition-colors duration-fast hover:bg-brand-hover"
          >
            在 pdfmergenext.shop 本地合并，文件不出本机 →
          </Link>
          <p className="mt-2 text-sm text-fg-secondary">
            更多 PDF 工具合规与隐私的判断细节见{" "}
            <Link href="/blog" className="text-brand hover:underline">
              /blog
            </Link>
            ，企业与个人用工具的取舍见{" "}
            <Link href="/blog/personal-pdf-privacy-vs-enterprise-saas" className="text-brand hover:underline">
              PDF 工具的个人隐私与企业 SaaS 之别
            </Link>
            ，本地方案的能力边界见{" "}
            <Link href="/blog/offline-pdf-merge-limits" className="text-brand hover:underline">
              离线 PDF 合并的边界
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
            href="/blog/gdpr-compliant-pdf-tools"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">GDPR 合规 PDF 工具检查清单</p>
            <p className="mt-1 text-xs text-fg-secondary">Compliance / 七项检查的同款骨架</p>
          </Link>
          <Link
            href="/blog/personal-pdf-privacy-vs-enterprise-saas"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">个人隐私 PDF 工具 vs 企业 SaaS</p>
            <p className="mt-1 text-xs text-fg-secondary">Vendor Comparison / 责任边界与合同条款</p>
          </Link>
          <Link
            href="/blog/client-side-vs-server-side-pdf-tools"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">客户端 PDF 工具 vs 服务器端：架构对比</p>
            <p className="mt-1 text-xs text-fg-secondary">Architecture / 数据是否过别人服务器</p>
          </Link>
          <Link
            href="/blog/how-zero-upload-pdf-tools-work"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">零上传 PDF 工具：工作原理全解析</p>
            <p className="mt-1 text-xs text-fg-secondary">Zero Upload / 零上传的实现与验证</p>
          </Link>
        </div>
      </section>
    </article>
  );
}
