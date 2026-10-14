import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';
const SLUG = "china-pipl-pdf-tools-requirements";

export const metadata: Metadata = {
  title:
    "个保法下的 PDF 工具要求：八个能当场核对的点 | China PIPL PDF Tools: Eight Requirements to Check | PDFMergeNext",
  description:
    "按《个人信息保护法》挑 PDF 工具，判断依据能拆成八个当场可核对的事实：文件里有没有个人信息、有没有敏感个人信息、处理目的是否写明、需不需要单独同意、有没有委托处理协议、能不能转委托、有没有数据出境、保存多久和怎么证明删除。这篇给出清单和一套当天能跑的本地流程。",
  keywords: [
    "china pipl pdf tools",
    "pipl compliant pdf merger",
    "personal information protection law pdf",
    "pipl separate consent pdf",
    "pipl cross border pdf transfer",
    "个保法 PDF 工具",
    "个人信息保护法 PDF 合并",
    "PDF 数据出境合规",
    "敏感个人信息 PDF 处理",
    "PDFMergeNext 个保法",
  ],
  alternates: {
    canonical: "/blog/china-pipl-pdf-tools-requirements",
    languages: {
      "zh-CN": "/blog/china-pipl-pdf-tools-requirements",
      "en-US": "/blog/china-pipl-pdf-tools-requirements",
      "x-default": "/blog/china-pipl-pdf-tools-requirements",
    },
  },
  openGraph: {
    title: "个保法下的 PDF 工具要求：八个能当场核对的点 · PDFMergeNext",
    description:
      "八项检查：个人信息识别、敏感个人信息、目的与最小范围、单独同意、委托处理协议、转委托、数据出境、留存与删除。问完这八项，结论就有了。",
    type: 'article',
    url: SITE_URL + "/blog/" + SLUG,
    siteName: 'PDFMergeNext',
    publishedTime: "2026-10-15T00:00:00.000Z",
    images: [{ url: SITE_URL + "/og", width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "个保法下的 PDF 工具要求：八个能当场核对的点 · PDFMergeNext",
    description:
      "敏感个人信息、单独同意、转委托、数据出境、留存期限。八项问完，这份清单就该有结论了。",
    images: [SITE_URL + "/og"],
  },
};

const FAQ = [
  {
    q: "用浏览器本地工具合并身份证扫描件，还算在处理个人信息吗？",
    a: "算。工具形态不改变个人信息处理者的身份，识别义务、告知义务和安全措施一样都在。变轻的是另外两件事：没有第三方受托处理，也不需要论证数据出境。跨不跨境这件事可以直接自查，方法见 /blog/devtools-network-tab-privacy-guide。",
  },
  {
    q: "匿名化和去标识化，哪一步能让这份 PDF 脱离个保法范围？",
    a: "匿名化。标准是既无法识别特定自然人，也不能复原，做到这一步的信息不再属于个人信息，这部分规定不适用。去标识化只是降低了关联强度，仍然在个人信息范围内，全流程义务不变。在 PDF 上做到真匿名很难：隐藏图层、元数据、文件名和原始扫描件都可能把身份带回来。",
  },
  {
    q: "同事把含客户名单的 PDF 传到境外在线工具，责任由谁承担？",
    a: "由作为个人信息处理者的单位承担，员工个人通常不是第一责任人。这也是为什么规则要写进操作手册而不是聊天群里的一句提醒：明确列出哪些文件类型必须本地处理，覆盖面比事后追责大得多。",
  },
  {
    q: "对方承诺处理完就删，怎么验证真删了？",
    a: "看合同里的保存期限和删除条款，不要看聊天窗口里的一句话。要求的是可出示的记录：删除时间、覆盖的数据范围、备份轮转是否同样处理。更省事的做法是压根不产生远端副本。",
  },
  {
    q: "Is a browser-local merge still processing personal information?",
    a: "Yes. The form of the tool does not change who the processor is, so identification duties, notice and security measures all apply unchanged. What gets lighter is different: there is no entrusted third party and no cross-border transfer to justify.",
  },
  {
    q: "Which one takes a PDF out of scope, anonymisation or de-identification?",
    a: "Anonymisation. The threshold is that a specific person can no longer be identified and the data cannot be restored, at which point it stops being personal information. De-identification only weakens the link, so every obligation stays. True anonymisation is hard on a PDF: hidden layers, metadata, the file name and the original scan can all bring the identity back.",
  },
  {
    q: "Who answers for staff uploading client lists to an overseas tool?",
    a: "The organisation acting as processor, not the individual employee. That is why the rule belongs in a written procedure rather than a reminder in chat: naming which file types must be handled locally covers far more ground than any retroactive conversation.",
  },
  {
    q: "How do I check that the far side really deleted the file?",
    a: "Through the contract, not through a message. Ask for records that can be produced: when deletion happened, which data it covered, whether backup rotation is included. The simpler route is to make sure no remote copy exists in the first place.",
  },
];

const TOC = [
  { id: "lead", label: "一句话结论 / Short answer" },
  { id: "scope", label: "哪些 PDF 落在范围内 / What falls in scope" },
  { id: "gates", label: "八项要求检查清单 / Eight requirements" },
  { id: "consent", label: "同意与单独同意 / Consent and separate consent" },
  { id: "crossborder", label: "数据出境：三条路径 / Leaving the country" },
  { id: "workflow", label: "当天能跑的本地流程 / A workflow for today" },
  { id: "faq", label: "常见问题 / FAQ" },
];

const GATES = [
  { dim: "个人信息识别", pass: "合并前先分级：哪几页含个人信息，写进清单或文件名", fail: "默认整份都是，事后才发现混进了身份证扫描件" },
  { dim: "敏感个人信息", pass: "单独列清单，适用单独同意和更高的保护措施", fail: "和普通个人信息放在一张表里用同一套流程" },
  { dim: "目的与最小范围", pass: "写明为了什么处理，只动达成目的必需的页", fail: "写成“为改进服务”之类的宽泛口径" },
  { dim: "同意与单独同意", pass: "敏感信息、对外提供、公开、出境四类场景拿到单独同意", fail: "一次性勾选的概括授权顶替了单独同意" },
  { dim: "委托处理协议", pass: "书面约定处理目的、期限、方式、信息种类、保护措施", fail: "只有隐私政策页，或者服务条款里一句话带过" },
  { dim: "转委托限制", pass: "合同写明不得擅自转由他人处理，变更需书面同意", fail: "子承包商名单随时变，且没有通知义务" },
  { dim: "数据出境路径", pass: "安全评估、标准合同、保护认证三条里定一条并完成手续", fail: "默认服务器在哪都一样，没有任何路径凭证" },
  { dim: "留存与删除", pass: "写明保存期限，到期删除，且能出示删除记录", fail: "留多久没写，删没删没有证据" },
];

const CROSS = [
  { route: "安全评估", who: "向国家网信部门申报并通过评估", use: "关键信息基础设施运营者、达到规定数量的处理者" },
  { route: "标准合同", who: "与境外接收方订立标准合同并备案", use: "数量未达到评估门槛的常规出境" },
  { route: "保护认证", who: "经专业机构进行个人信息保护认证", use: "有持续出境需求、希望一次性建立机制的组织" },
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
            name: "个保法下的 PDF 工具要求：八个能当场核对的点",
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
          "个保法下的 PDF 工具要求：八个能当场核对的点 / China PIPL PDF Tools: Eight Requirements to Check",
        description:
          "按《个人信息保护法》挑 PDF 工具，判断依据能拆成八个当场可核对的事实：文件里有没有个人信息、有没有敏感个人信息、处理目的是否写明、需不需要单独同意、有没有委托处理协议、能不能转委托、有没有数据出境、保存多久和怎么证明删除。",
        author: {
          '@type': 'Person',
          name: 'PDFMergeNext',
          url: 'https://pdfmergenext.shop',
          '@id': 'https://pdfmergenext.shop/#organization',
        },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: "2026-10-15",
        dateModified: "2026-10-15",
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
          合规清单 · PIPL Compliance
        </p>
        <h1 className="mt-2 text-h1 font-bold tracking-tight text-fg">
          个保法下的 PDF 工具要求：八个能当场核对的点 / China PIPL PDF Tools: Eight Requirements to Check
        </h1>
        <p className="mt-3 text-body text-fg-secondary">
          八项要求把个保法 PDF 工具的选型标准拆成能当场核对的事实：文件里有没有个人信息、需不需要单独同意、有没有出境。
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
            判断一套 PDF 处理流程是否符合《个人信息保护法》，不需要通读全文，只要把八个问题答完，而且每份答案都要能落到纸面上：文件里有没有个人信息、有没有敏感个人信息、处理目的和方式是否写明、该拿同意的场景有没有拿到单独同意、有没有委托处理协议、受托方能不能再转委托、个人信息有没有出境、以及保存多久与怎么证明删除。八项都有书面答案，这套流程可以通过内部评审；少一项，评审意见里就得写一句证据不足。
          </p>
          <p className="mt-2 text-fg-secondary">
            Judging a PDF workflow against the Personal Information Protection Law does not mean reading the whole text. It means eight answers on paper: does the file hold personal information, is any of it sensitive, are purpose and method stated, was separate consent obtained where the law requires it, is there an entrustment agreement, can the processor pass the work on, does anything cross the border, how long is it kept and how is deletion proven. Eight written answers clear an internal review. One gap and the note says the evidence falls short.
          </p>
          <p className="mt-2 text-fg-secondary">
            最省力的一步是把第七项直接变成不存在。文件在浏览器里从头处理到尾、不产生上传，就不存在向境外提供个人信息的环节，安全评估、标准合同、保护认证三条路径一条都不用走，第五、六项的论证也一并消失。剩下的工作从论证降级为记录，这也是为什么很多合规岗现在先问"能不能在本机跑完"，再问别的。第七项为空的情况下，/blog/merge-pdf-no-upload 这类本地流程天然少一整章要写的材料。
          </p>
          <p className="mt-2 text-fg-secondary">
            The cheapest move is to make question seven moot. Process the file in the browser from start to finish and nothing is provided overseas, so none of the three transfer routes apply and the arguments in items five and six disappear with them. What remains is documentation rather than justification, which is why reviewers now ask whether a job can run on the device before asking anything else. Local workflows such as /blog/merge-pdf-no-upload simply have less to write up.
          </p>
          <p className="mt-3 text-sm text-fg-muted">
            说明：下面是给工具选型和内部流程用的核对口径，不是法律意见。落到具体责任判断时，以本单位法务或外部律师的意见为准。
          </p>
        </section>

        <section id="scope">
          <h2 className="text-title font-semibold text-fg">
            哪些 PDF 落在范围内 / What falls in scope
          </h2>
          <p className="mt-2 text-fg-secondary">
            先划范围。个人信息指的是以电子或者其他方式记录的、与已识别或者可识别的自然人有关的各种信息，匿名化处理后的信息不算。落到 PDF 上，典型的几类是身份证或护照复印件扫描件、银行流水与征信报告、体检报告和化验单、含人脸的员工证照片、劳动合同与薪酬文件，以及把姓名和身份证号放在同一张表上的名单。判定标准不看文件格式，看内容里有没有能指向某个人的字段。
          </p>
          <p className="mt-2 text-fg-secondary">
            Scope first. Personal information means any information recorded electronically or otherwise that relates to an identified or identifiable natural person, excluding anonymised data. In PDF terms the usual suspects are scans of ID cards or passports, bank statements and credit reports, medical checkups and lab results, staff badge photos containing faces, employment contracts and payroll documents, and any roster pairing a name with an ID number. The test is not the file format, it is whether the content points at a specific person.
          </p>
          <p className="mt-2 text-fg-secondary">
            敏感个人信息是更高的一档：生物识别、宗教信仰、特定身份、医疗健康、金融账户、行踪轨迹，以及不满十四周岁未成年人的个人信息。这类信息在《个人信息保护法》下要单独同意，还要有更严格的保护措施，因此不能用和普通个人信息同一份清单糊过去。
          </p>
          <p className="mt-2 text-fg-secondary">
            Sensitive personal information sits one tier higher: biometrics, religious beliefs, specific identities, medical health, financial accounts, whereabouts, and the personal information of children under fourteen. It needs separate consent and stricter safeguards, so it cannot ride along on the same list as ordinary personal information.
          </p>
          <p className="mt-3 font-semibold text-fg">敏感个人信息在 PDF 里的常见形态</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-fg-secondary">
            <li>医疗健康：病历、诊断书、检验单、影像报告导出的 PDF</li>
            <li>金融账户：含账号的银行流水、信用卡账单、支付凭证截图转成的 PDF</li>
            <li>生物识别：含人脸或指纹信息的门禁照、考勤表、身份核验截图</li>
            <li>特定身份：少数民族成分、残障证明、工会会员信息一类的登记材料</li>
            <li>未成年人：学生名册、儿童报名表、含出生日期的家庭关系证明</li>
          </ul>
          <p className="mt-3 font-semibold text-fg">Four places a PDF hides identifiers</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-fg-secondary">
            <li>Metadata: author, title and edit timestamps often still carry a name or the employer</li>
            <li>Attachments and layers: hidden layers, revision history and default values inside form fields</li>
            <li>File names and folder paths: a record number or a full name sitting in the file name</li>
            <li>Scanned pixels: letterheads, seals and signatures that no text search will find</li>
          </ul>
          <p className="mt-3 text-fg-secondary">
            合并会让范围判断变麻烦：两份单独看都只是普通信息的 PDF，合成一份后可能凑出完整的识别组合。这也是为什么第一步要在合并之前做，而不是导出之后补救。各层元数据在一次合并里的实际表现见 /blog/pdf-metadata-preservation-merge。
          </p>
        </section>

        <section id="gates">
          <h2 className="text-title font-semibold text-fg">
            八项要求检查清单 / Eight requirements
          </h2>
          <p className="mt-2 text-fg-secondary">
            下面这张表按顺序列出检查项、通过的样子和一眼能看出来的不合格信号。第三列最有价值，供应商的回答在这些地方通常含糊，而含糊本身就是答案。
          </p>
          <p className="mt-2 text-fg-secondary">
            The table lists each item, what passing looks like, and the signal that fails it at a glance. The third column earns its keep, because vague answers cluster there and vagueness is itself an answer.
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-line">
            <table className="w-full text-left text-sm">
              <thead className="bg-subtle text-fg-muted">
                <tr>
                  <th className="px-4 py-2 font-semibold">要求</th>
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
            第七行决定了其余七行的难度。从来没有文件离境，这一整块从论证变成一句陈述。第五、六行连同出境一起塌下去后，八项里实际需要写材料的只剩前四项。
          </p>
          <p className="mt-3 text-fg-secondary">
            Row seven sets the difficulty of the other seven. When nothing crosses a border the section collapses into a single statement, rows five and six go down with it, and only the first four lines still need writing.
          </p>
        </section>

        <section id="consent">
          <h2 className="text-title font-semibold text-fg">
            同意与单独同意 / Consent and separate consent
          </h2>
          <p className="mt-2 text-fg-secondary">
            一般的同意可以由多项处理活动列出后一次性取得，单独同意不行，它要求针对具体那一项单独告知并取得同意。落到 PDF 工具这个场景，需要单独同意的一共四类：处理敏感个人信息、向他人提供、公开、以及向境外提供。用一揽子授权覆盖这四类，等于没同意。
          </p>
          <p className="mt-2 text-fg-secondary">
            General consent can cover several listed processing activities at once. Separate consent cannot: it requires the specific item to be disclosed on its own and agreed to on its own. Four scenarios need it here: processing sensitive personal information, providing information to another party, making it public, and transferring it overseas. A blanket checkbox across all four is not consent.
          </p>
          <p className="mt-3 font-semibold text-fg">四类单独同意场景在 PDF 处理里的对应关系</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-fg-secondary">
            <li>敏感个人信息：合并体检报告、门禁照、银行流水前单独告知用途并取得同意</li>
            <li>向他人提供：把合并后的文件发给外部机构前，告知接收方名称、联系方式、处理目的与信息种类</li>
            <li>公开：把招标公告、获奖名单这类含姓名的 PDF 挂到公网上之前</li>
            <li>向境外提供：使用境外服务器处理前，除单独同意还要完成出境路径手续</li>
          </ul>
          <p className="mt-3 font-semibold text-fg">Four separate consent scenarios mapped to PDF work</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-fg-secondary">
            <li>Sensitive data: disclose the purpose and collect consent before merging checkups, badge photos or bank statements</li>
            <li>Providing to others: before sending the merged file out, name the recipient, contact details, purpose and data categories</li>
            <li>Making public: before posting files with names, such as tender notices or award lists, on the open web</li>
            <li>Transferring overseas: before using an offshore server, obtain separate consent and complete the transfer route as well</li>
          </ul>
          <p className="mt-3 text-fg-secondary">
            顺序上这里能省掉一半工作：先合并，再对着合成后的那一份做告知和收同意，比对每个源文件分别处理少一次遗漏的机会。
          </p>
          <p className="mt-3 text-fg-secondary">
            Order saves work here: merge first, then give one notice and take one consent for the combined file. Doing it per file doubles the effort and doubles the chance one gets missed.
          </p>
        </section>

        <section id="crossborder">
          <h2 className="text-title font-semibold text-fg">
            数据出境：三条路径 / Leaving the country
          </h2>
          <p className="mt-2 text-fg-secondary">
            只要文件被传到境外服务器处理，就属于向境外提供个人信息，需要在三条路径里走完一条。三条不是随便挑，门槛由处理者的类型和规模决定。
          </p>
          <p className="mt-2 text-fg-secondary">
            Once a file reaches an offshore server for processing, providing personal information overseas has happened and one of three routes must be completed. The route is not a free choice; the threshold depends on who the processor is and how much data they handle.
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-line">
            <table className="w-full text-left text-sm">
              <thead className="bg-subtle text-fg-muted">
                <tr>
                  <th className="px-4 py-2 font-semibold">路径</th>
                  <th className="px-4 py-2 font-semibold">要做什么</th>
                  <th className="px-4 py-2 font-semibold">通常用于</th>
                </tr>
              </thead>
              <tbody className="text-fg-secondary">
                {CROSS.map((r) => (
                  <tr key={r.route} className="border-t border-line">
                    <td className="px-4 py-2">{r.route}</td>
                    <td className="px-4 py-2">{r.who}</td>
                    <td className="px-4 py-2">{r.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-fg-secondary">
            对 PDF 工具选型来说，这张表真正的用法是反过来读：先看能不能让第一列变成空白。浏览器本地处理的工具不产生出境环节，三条路径一条都不触发，出境对个人信息安全的影响这一类顾虑随之消失（背景见 /blog/pdf-data-export-impact）。能避开就避开，走流程的时间和材料成本都不低。
          </p>
          <p className="mt-3 text-fg-secondary">
            Read that table backwards when choosing a PDF tool: first ask whether the first column can be left empty. A browser-local tool never triggers any of the three routes, and the whole class of concern about exporting goes away, background in /blog/pdf-data-export-impact. Avoid it where you can, because the paperwork is not cheap.
          </p>
          <p className="mt-3 text-fg-secondary">
            三条路径的门槛和适用情形会随配套规定调整，落地前以主管部门最新发布的口径为准，不要用一两年前的理解做判断。
          </p>
        </section>

        <section id="workflow">
          <h2 className="text-title font-semibold text-fg">
            当天能跑的本地流程 / A workflow you can run today
          </h2>
          <p className="mt-2 text-fg-secondary">
            把下面七步固定下来，一次做完，最后那页记录可以直接进供应商清单和个人信息保护影响评估档案。前三步解决范围判定，后四步解决能不能拿出证据。
          </p>
          <p className="mt-2 text-fg-secondary">
            Fix these seven steps once and the last page becomes the record that goes into the vendor list and the impact assessment file. The first three settle scope, the last four settle whether you can produce evidence.
          </p>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-fg-secondary">
            <li>给待合并的文件分级：普通个人信息、敏感个人信息、已匿名化，结果写进清单或文件名</li>
            <li>确认处理方式：能在浏览器里跑完的工具，最先钝掉的第五到第七项直接变成零风险项</li>
            <li>需要单独同意的场景先补齐告知与同意，别在导出前临时拉取</li>
            <li>若确认有受托方或出境，向对方索取协议全文与接收方清单，拿不到就换下一家</li>
            <li>本地完成合并与页序调整，过程和结果都不经过第三方服务器</li>
            <li>导出前清一遍元数据：标题、作者、关键词、修改时间与隐藏图层</li>
            <li>把以上六条连同工具名、用途、保存期限和负责人签在同一页纸上归档</li>
          </ol>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-fg-secondary">
            <li>Classify the files: ordinary personal information, sensitive, or already anonymised, and record it in the manifest or file name</li>
            <li>Decide how it gets processed; a browser-local tool turns items five through seven into non-issues first</li>
            <li>Complete notice and separate consent where it applies, rather than collecting it at export time</li>
            <li>If a processor or a transfer is involved, request the full agreement and the recipient list; move on if refused</li>
            <li>Merge and reorder locally, with neither the process nor the result passing through anyone else's server</li>
            <li>Before exporting, clear metadata: title, author, keywords, timestamps and hidden layers</li>
            <li>Sign all six items with tool name, purpose, retention period and the responsible person, then file the page</li>
          </ol>
          <p className="mt-3 text-fg-secondary">
            合并这一步在 pdfmergenext.shop 全程本地完成，挑页码和调页序都不需要把含个人信息的文件交出去。这也是为什么本地工具和需要上传的工具不该放在同一张表上逐项比：前者在第五到第七行直接空着。架构上的差别见 /blog/client-side-vs-server-side-pdf-tools，零上传怎么实现见 /blog/how-zero-upload-pdf-tools-work，上一轮 GDPR 的同款清单见 /blog/gdpr-compliant-pdf-tools。
          </p>
          <p className="mt-3 text-fg-secondary">
            Merging on pdfmergenext.shop happens entirely on your device, so selecting pages and reordering never means handing files with personal information to anyone. That is why local and upload-required tools do not belong in the same comparison grid: rows five to seven are simply blank for the local route. The architectural difference is set out in /blog/client-side-vs-server-side-pdf-tools, the mechanics of zero upload in /blog/how-zero-upload-pdf-tools-work, and the GDPR version of this checklist in /blog/gdpr-compliant-pdf-tools.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-on-primary transition-colors duration-fast hover:bg-brand-hover"
          >
            在 pdfmergenext.shop 本地合并，个人信息不出本机 →
          </Link>
          <p className="mt-2 text-sm text-fg-secondary">
            更多 PDF 工具合规与隐私的判断细节见{" "}
            <Link href="/blog" className="text-brand hover:underline">
              /blog
            </Link>
            ，医疗场景同時要对齐的要求见{" "}
            <Link href="/blog/hipaa-compliant-pdf-merge" className="text-brand hover:underline">
              HIPAA 合规 PDF 合并
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
            href="/blog/hipaa-compliant-pdf-merge"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">HIPAA 合规 PDF 合并：六道关口</p>
            <p className="mt-1 text-xs text-fg-secondary">Compliance / 医疗场景的另一套口径</p>
          </Link>
          <Link
            href="/blog/pdf-data-export-impact"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">PDF 数据出境：影响与对策</p>
            <p className="mt-1 text-xs text-fg-secondary">Data Residency / 出境环节的取舍</p>
          </Link>
          <Link
            href="/blog/personal-pdf-privacy-vs-enterprise-saas"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">个人隐私 PDF 工具 vs 企业 SaaS</p>
            <p className="mt-1 text-xs text-fg-secondary">Vendor Comparison / 责任边界与合同条款</p>
          </Link>
        </div>
      </section>
    </article>
  );
}
