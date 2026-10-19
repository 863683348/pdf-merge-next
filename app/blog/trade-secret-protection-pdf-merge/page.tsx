import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';
const SLUG = "trade-secret-protection-pdf-merge";

export const metadata: Metadata = {
  title:
    "商业机密保护：合并 PDF 前该先确认的五件事 | Trade Secret Protection: Five Things to Check Before Merging a PDF | PDFMergeNext",
  description:
    "商业机密 PDF 合并的判断标准不在工具页面上写了什么保密承诺，而在三件事有没有同时成立：信息本身是不是商业秘密、有没有采取相应保密措施、合并这一步有没有把副本交到别人手上。这篇给出五件事检查清单、泄密最容易发生的三个环节，以及当天能跑的本地流程。",
  keywords: [
    "trade secret protection pdf",
    "pdf merge trade secrets",
    "confidential document merge",
    "trade secret pdf merger",
    "merge pdf without upload confidential",
    "商业机密 PDF 合并",
    "商业秘密 PDF 工具",
    "机密文件合并",
    "PDF 合并保密措施",
    "PDFMergeNext 商业机密",
  ],
  alternates: {
    canonical: "/blog/trade-secret-protection-pdf-merge",
    languages: {
      "zh-CN": "/blog/trade-secret-protection-pdf-merge",
      "en-US": "/blog/trade-secret-protection-pdf-merge",
      "x-default": "/blog/trade-secret-protection-pdf-merge",
    },
  },
  openGraph: {
    title: "商业机密保护：合并 PDF 前该先确认的五件事 · PDFMergeNext",
    description:
      "秘密性、价值性、保密措施、处理路径、交付留痕。五项检查加三个最容易出问题的环节，配一套当天能跑的本地流程。",
    type: 'article',
    url: SITE_URL + "/blog/" + SLUG,
    siteName: 'PDFMergeNext',
    publishedTime: "2026-10-20T00:00:00.000Z",
    images: [{ url: SITE_URL + "/og", width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "商业机密保护：合并 PDF 前该先确认的五件事 · PDFMergeNext",
    description:
      "秘密性、价值性、保密措施、处理路径、交付留痕。五项问完，这份文件的处理方式就该有结论了。",
    images: [SITE_URL + "/og"],
  },
};

const FAQ = [
  {
    q: "用浏览器本地工具合并报价表，还算“采取相应保密措施”吗？",
    a: "算，而且是能出示的那种。保密措施要求的是合理，不是绝对；不产生第三方副本这条可以直接写进制度文本，也能用 DevTools 现场验证，方法见 /blog/devtools-network-tab-privacy-guide。",
  },
  {
    q: "文件标了“机密”两个字，是不是就自动构成商业秘密？",
    a: "不是。标识只是保密措施的一部分，秘密性和价值性还要分别证明。一份全员可下载、内容能在行业手册里查到的文件，标了机密也还是普通内部资料。",
  },
  {
    q: "同事把客户名单传到在线工具，责任怎么分？",
    a: "对外通常由作为权利人的单位承担，员工按内部制度和劳动合同处理。这也是为什么规则要写进操作手册而不是聊天群里的一句话：明确列出哪些文件类型必须本地处理，覆盖面比事后追责大得多。",
  },
  {
    q: "合并后元数据里留着公司名和作者，会影响主张权利吗？",
    a: "本身不否定商业秘密的成立，但会削弱保密措施这一环的说服力。导出前清一遍标题、作者、公司、修改时间是最省事的一步，各层元数据的实际表现见 /blog/pdf-metadata-preservation-merge。",
  },
  {
    q: "已经用在线工具处理过一次，现在补救还来得及吗？",
    a: "来得及，但要按顺序做：先向对方索取保存期限与删除记录，拿不到就书面催告并留档；然后把这份文件的后续处理全部切到本地路径；最后把这次事件记进留痕清单。补救的价值在于把“没采取措施”变成“措施曾经失效过一次并已纠正”。",
  },
  {
    q: "Is a browser-local merge enough to count as reasonable secrecy measures?",
    a: "Yes, and it is the kind you can demonstrate. The standard is reasonableness, not perfection, and the absence of a third-party copy is something you can write into a policy and verify on the spot with DevTools.",
  },
  {
    q: "Does marking a file confidential make it a trade secret by itself?",
    a: "No. The marking is part of the measures; secrecy and value still need their own evidence. A file anyone can download, whose contents appear in an industry handbook, stays ordinary internal material with the label on it.",
  },
  {
    q: "Company name and author left in the metadata after a merge, does that hurt a claim?",
    a: "It does not defeat the trade secret, but it weakens the measures limb. Clearing title, author, company and timestamps before export is the cheapest available step.",
  },
];

const TOC = [
  { id: "lead", label: "一句话结论 / Short answer" },
  { id: "scope", label: "哪些 PDF 真的算商业秘密 / What counts" },
  { id: "leak", label: "泄密发生在哪三个环节 / Where it leaks" },
  { id: "checks", label: "五件事检查清单 / Five checks" },
  { id: "workflow", label: "当天能跑的本地流程 / A workflow for today" },
  { id: "faq", label: "常见问题 / FAQ" },
];

const CHECKS = [
  { dim: "秘密性", pass: "没有从公开渠道可获得的记录，能说明来源与形成过程", fail: "参数能在行业手册或公开专利里查到" },
  { dim: "价值性", pass: "能说明它带来或可能带来的竞争优势，哪怕是定性的", fail: "说不出它为什么值钱，只说“这是我们内部的”" },
  { dim: "保密措施", pass: "有分级标识、访问范围、签署的保密义务，且能出示记录", fail: "全员可见的共享盘，没有任何访问限制" },
  { dim: "处理路径", pass: "合并全程不上传，或上传前已完成对方尽调与书面约定", fail: "用的是随手搜到的在线工具，没人问过服务器在哪" },
  { dim: "交付与留痕", pass: "合并后清元数据、限制分发范围、记录谁在什么时间经手", fail: "用聊天工具群发，事后无法还原经手人" },
];

const LEAK = [
  { stage: "文件上传", online: "文件在传输与服务端留下副本，保留多久取决于对方条款", local: "无上传环节，不产生服务端副本" },
  { stage: "处理过程", online: "服务端日志、临时文件、第三方依赖都可能出现副本", local: "全程在本机内存与磁盘内完成" },
  { stage: "结果与残留", online: "需按对方承诺删远端副本，且要能出示删除记录", local: "关掉页面就没有远端残留，本地临时文件自行清理" },
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
            name: "商业机密保护：合并 PDF 前该先确认的五件事",
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
          "商业机密保护：合并 PDF 前该先确认的五件事 / Trade Secret Protection: Five Things to Check Before Merging a PDF",
        description:
          "商业机密 PDF 合并的判断标准不在工具页面上写了什么保密承诺，而在三件事有没有同时成立：信息本身是不是商业秘密、有没有采取相应保密措施、合并这一步有没有把副本交到别人手上。",
        author: {
          '@type': 'Person',
          name: 'PDFMergeNext',
          url: 'https://pdfmergenext.shop',
          '@id': 'https://pdfmergenext.shop/#organization',
        },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: "2026-10-20",
        dateModified: "2026-10-20",
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
          合规清单 · Trade Secrets
        </p>
        <h1 className="mt-2 text-h1 font-bold tracking-tight text-fg">
          商业机密保护：合并 PDF 前该先确认的五件事 / Trade Secret Protection: Five Things to Check Before Merging a PDF
        </h1>
        <p className="mt-3 text-body text-fg-secondary">
          商业机密 PDF 合并的判断标准不在工具页面上写了什么，而在三件事：信息是不是商业秘密、有没有保密措施、合并有没有把副本交出去。
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
            商业机密 PDF 合并这件事，判断标准不在工具页面上写了什么保密承诺，而在三件事有没有同时成立：信息本身是不是商业秘密、有没有采取相应保密措施、合并这一步有没有把副本交到别人手上。第一条决定这份文件受不受保护，第二条决定将来能不能主张权利，第三条决定风险是不是还在你自己手里。三条都成立，这份 PDF 才算按商业秘密的规格处理过；少一条，出事时最常听到的那句“我们以为是内部资料”就派不上用场。
          </p>
          <p className="mt-2 text-fg-secondary">
            Trade secret protection for a PDF merge does not turn on what a vendor page promises about confidentiality. It turns on three things holding at once: whether the information is actually a trade secret, whether reasonable secrecy measures are in place, and whether the merge itself handed a copy to somebody else. The first decides if the file is protected at all, the second decides whether you can assert anything later, and the third decides whether the risk stays on your own machine. All three and the file has been handled to a trade secret standard. Miss one and the sentence that usually comes out in hindsight, that everyone assumed it was internal material, does no work.
          </p>
          <p className="mt-2 text-fg-secondary">
            第三条是三条里最容易一次性解决的。文件在浏览器里从头处理到尾、不产生上传，就没有第三方拿到副本这件事，也就没有“能不能主张对方违约”这类要论证的问题。剩下的工作从谈判和取证降级成记录，这也是为什么法务在评估 PDF 工具时，现在往往先问一句“能不能在本机跑完”，再问别的。本地流程的能力边界见 /blog/offline-pdf-merge-limits，零上传是怎么实现的见 /blog/how-zero-upload-pdf-tools-work。
          </p>
          <p className="mt-2 text-fg-secondary">
            The third one is the easiest to settle in a single move. Process the file in the browser from start to finish and nobody receives a copy, so the question of whether you can claim a breach of contract never arises. What remains is documentation rather than negotiation and forensics, which is why reviewers now ask whether a job can run on the device before asking anything else. The limits of the local route are in /blog/offline-pdf-merge-limits, the mechanics of zero upload in /blog/how-zero-upload-pdf-tools-work.
          </p>
          <p className="mt-3 text-sm text-fg-muted">
            说明：下面是给工具选型和内部流程用的核对口径，不是法律意见。落到具体责任判断时，以本单位法务或外部律师的意见为准。
          </p>
        </section>

        <section id="scope">
          <h2 className="text-title font-semibold text-fg">
            哪些 PDF 真的算商业秘密 / What actually counts
          </h2>
          <p className="mt-2 text-fg-secondary">
            商业秘密指的是不为公众所知悉、具有商业价值、并经权利人采取相应保密措施的技术信息、经营信息等商业信息。三个要件缺一个都不算。落到日常文件上，常见的几类是配方与工艺参数、客户名单与报价体系、未公开的财务模型与定价表、正在申请专利前的技术方案、以及带有成本结构的供应商条款。判断标准不看文件名里有没有“机密”两个字，看三件事能否同时证明。
          </p>
          <p className="mt-2 text-fg-secondary">
            A trade secret is technical or business information that is not generally known, carries commercial value, and is protected by measures its owner actually takes. Drop any one of the three and it is not a trade secret. In day-to-day files the usual candidates are formulations and process parameters, customer lists and pricing structures, unpublished financial models and rate cards, technical solutions before a patent filing, and supplier terms with cost breakdowns. The test is not whether the file name says confidential, it is whether all three elements can be evidenced.
          </p>
          <p className="mt-2 text-fg-secondary">
            中文语境里还有一条容易被忽略的口径差别。“商业秘密”是《反不正当竞争法》下的概念，保护的是经营信息和技术信息；含个人隐私的个人信息走的是《个人信息保护法》那一套，两套规则的义务主体和举证方式都不一样。同一份员工名册可能同时落进两边：姓名与身份证号按个人信息处理，附着在上面的薪酬结构按商业秘密处理。上一轮 GDPR 的同款骨架见 /blog/gdpr-compliant-pdf-tools，个保法那八项见 /blog/china-pipl-pdf-tools-requirements。
          </p>
          <p className="mt-2 text-fg-secondary">
            One distinction gets missed in Chinese practice. Trade secrets sit under the Anti-Unfair Competition Law and cover business and technical information, while personal information runs under the Personal Information Protection Law with different duty holders and different burdens of proof. The same staff roster can fall into both: names and ID numbers are handled as personal information, the salary structure attached to them as a trade secret. The GDPR version of this checklist is in /blog/gdpr-compliant-pdf-tools and the eight PIPL items in /blog/china-pipl-pdf-tools-requirements.
          </p>
          <p className="mt-3 font-semibold text-fg">常见的商业秘密形态，按举证难度从低到高排</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-fg-secondary">
            <li>技术类：工艺参数表、配方、图纸、未公开的测试结果报告</li>
            <li>经营类：客户名单（含成交价与联系人）、渠道政策、投标底价表</li>
            <li>财务类：未审计的合并报表草稿、成本模型、定价策略文件</li>
            <li>法务类：并购尽调材料、未公开的合同条款、诉讼策略备忘录</li>
            <li>人事类：薪酬带宽表、股权激励池分配方案</li>
          </ul>
          <p className="mt-3 font-semibold text-fg">Four places a PDF hides the origin of a secret</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-fg-secondary">
            <li>Metadata: author, company and edit history often reveal who worked on it and when</li>
            <li>Comments and layers: review notes that never made it into the final text</li>
            <li>File names and folder paths: a customer code or a project codename sitting in the path</li>
            <li>Scanned pixels: letterheads, seals and handwritten margins that no text search finds</li>
          </ul>
          <p className="mt-3 text-fg-secondary">
            合并会让范围判断变麻烦，这一点和元数据的问题叠在一起。两份单独看都只是普通技术参数的 PDF，合成一份后可能凑出完整的工艺窗口；而合并后的文档信息字典只留一套值，原来那份“谁在什么时候改的”痕迹可能被覆盖，也可能被留下。各层元数据在一次合并里的实际表现见 /blog/pdf-metadata-preservation-merge。
          </p>
        </section>

        <section id="leak">
          <h2 className="text-title font-semibold text-fg">
            泄密发生在哪三个环节 / Where it actually leaks
          </h2>
          <p className="mt-2 text-fg-secondary">
            多数人把注意力放在“对方会不会偷看”，实际出问题的位置通常在别处。把一次合并拆成三个环节，各自的风险点不一样。
          </p>
          <p className="mt-2 text-fg-secondary">
            Most attention goes to whether the far side will read the file. Where things actually go wrong tends to be elsewhere. Split one merge into three stages and each has its own risk.
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-line">
            <table className="w-full text-left text-sm">
              <thead className="bg-subtle text-fg-muted">
                <tr>
                  <th className="px-4 py-2 font-semibold">环节</th>
                  <th className="px-4 py-2 font-semibold">在线上传工具</th>
                  <th className="px-4 py-2 font-semibold">浏览器本地工具</th>
                </tr>
              </thead>
              <tbody className="text-fg-secondary">
                {LEAK.map((r) => (
                  <tr key={r.stage} className="border-t border-line">
                    <td className="px-4 py-2">{r.stage}</td>
                    <td className="px-4 py-2">{r.online}</td>
                    <td className="px-4 py-2">{r.local}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-fg-secondary">
            第一行决定了后两行的难度。从来没有文件离境，第二、三行从“要对方承诺并取证”变成一句陈述。日志和临时文件这类细节，架构上的差别见 /blog/client-side-vs-server-side-pdf-tools，怎么自己验证见 /blog/devtools-network-tab-privacy-guide。
          </p>
          <p className="mt-3 text-fg-secondary">
            Row one sets the difficulty of the other two. When nothing leaves the device, rows two and three collapse from something you have to extract a promise and evidence for into a single statement. The architectural difference on logs and temp files is in /blog/client-side-vs-server-side-pdf-tools, and how to verify it yourself in /blog/devtools-network-tab-privacy-guide.
          </p>
          <p className="mt-3 text-fg-secondary">
            第三个环节最容易被忽略，因为它是唯一一个本地工具也需要自己处理的。合并完导出前，元数据、批注层、隐藏图层和文件名都还带着原来的信息。这一步和上传与否无关，属于谁都要做的收尾。
          </p>
        </section>

        <section id="checks">
          <h2 className="text-title font-semibold text-fg">
            五件事检查清单 / Five checks
          </h2>
          <p className="mt-2 text-fg-secondary">
            下面这张表按顺序列出检查项、通过的样子和一眼能看出来的不合格信号。第三列最有价值，因为供应商和内部流程的回答在这些地方通常含糊，而含糊本身就是答案。
          </p>
          <p className="mt-2 text-fg-secondary">
            The table lists each check, what passing looks like, and the signal that fails it at a glance. The third column earns its keep, because vague answers cluster there and vagueness is itself an answer.
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-line">
            <table className="w-full text-left text-sm">
              <thead className="bg-subtle text-fg-muted">
                <tr>
                  <th className="px-4 py-2 font-semibold">检查项</th>
                  <th className="px-4 py-2 font-semibold">通过的样子</th>
                  <th className="px-4 py-2 font-semibold">不合格的信号</th>
                </tr>
              </thead>
              <tbody className="text-fg-secondary">
                {CHECKS.map((r) => (
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
            第五行在实务中最常出问题，也最好补。把分级、路径和留痕写进一页纸的操作规范，成本很低，覆盖面却比事后追责大得多。责任边界怎么划见 /blog/personal-pdf-privacy-vs-enterprise-saas。
          </p>
          <p className="mt-3 text-fg-secondary">
            Row five is where practice most often fails and where the fix is cheapest. One page of procedure covering classification, routing and logging costs very little and reaches further than any retroactive conversation. Where the responsibility boundary sits is in /blog/personal-pdf-privacy-vs-enterprise-saas.
          </p>
        </section>

        <section id="workflow">
          <h2 className="text-title font-semibold text-fg">
            当天能跑的本地流程 / A workflow you can run today
          </h2>
          <p className="mt-2 text-fg-secondary">
            把下面七步固定下来，一次做完，最后那页记录可以直接进供应商清单和内部保密制度档案。前三步解决“是不是”和“怎么保”，后四步解决“能不能拿出证据”。
          </p>
          <p className="mt-2 text-fg-secondary">
            Fix these seven steps once and the last page becomes the record that goes into the vendor list and the internal secrecy policy file. The first three settle whether the material qualifies and how it is protected; the last four settle whether evidence exists.
          </p>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-fg-secondary">
            <li>给待合并的文件定性：商业秘密、个人信息、普通内部资料，结果写进清单或文件名</li>
            <li>确认保密措施到位：分级标识、访问范围、保密义务签署记录三项都能出示</li>
            <li>选处理方式：能在浏览器里跑完的工具，最先钝掉的上传、日志、残留三项直接变成零风险项</li>
            <li>需要外部协作时先补书面约定，别在导出前临时联系对方</li>
            <li>本地完成合并与页序调整，过程和结果都不经过第三方服务器</li>
            <li>导出前清一遍元数据、批注层和隐藏图层，文件名去掉客户代号与项目代号</li>
            <li>把以上六条连同文件用途、经手人和保存期限签在同一页纸上归档</li>
          </ol>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-fg-secondary">
            <li>Classify the files: trade secret, personal information, or ordinary internal material, and write it into the manifest or file name</li>
            <li>Confirm the measures exist and can be produced: classification marking, access scope, signed confidentiality undertakings</li>
            <li>Decide how it gets processed; a browser-local tool turns upload, logging and residue into non-issues first</li>
            <li>Put any written agreement in place before external collaboration, not at export time</li>
            <li>Merge and reorder locally, with neither the process nor the result passing through another server</li>
            <li>Before exporting, clear metadata, comment layers and hidden layers, and strip customer or project codes from the file name</li>
            <li>Sign all six items with purpose, handler and retention period on one page, then file it</li>
          </ol>
          <p className="mt-3 text-fg-secondary">
            合并这一步在 pdfmergenext.shop 全程本地完成，挑页码和调页序都不需要把含商业秘密的文件交出去。这也是为什么本地工具和需要上传的工具不该放在同一张表上逐项比：前者在上传、日志、残留三行直接空着。挑页语法见 /blog/pdf-page-selection-1-3-5-syntax，上一轮 HIPAA 的同款清单见 /blog/hipaa-compliant-pdf-merge。
          </p>
          <p className="mt-3 text-fg-secondary">
            Merging on pdfmergenext.shop happens entirely on your device, so selecting pages and reordering never means handing a file containing trade secrets to anyone. That is why local and upload-required tools do not belong in the same comparison grid: the upload, logging and residue rows are simply blank for the local route. Page selection syntax is in /blog/pdf-page-selection-1-3-5-syntax and the HIPAA version of this checklist in /blog/hipaa-compliant-pdf-merge.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-on-primary transition-colors duration-fast hover:bg-brand-hover"
          >
            在 pdfmergenext.shop 本地合并，含商业秘密的文件不出本机 →
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
            href="/blog/china-pipl-pdf-tools-requirements"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">个保法下的 PDF 工具要求</p>
            <p className="mt-1 text-xs text-fg-secondary">Compliance / 八个当场可核对的点</p>
          </Link>
          <Link
            href="/blog/client-side-vs-server-side-pdf-tools"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">客户端 PDF 工具 vs 服务器端</p>
            <p className="mt-1 text-xs text-fg-secondary">Architecture / 副本从哪来</p>
          </Link>
        </div>
      </section>
    </article>
  );
}
