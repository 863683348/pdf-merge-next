import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';
const SLUG = "cross-border-data-transfer-pdf-tools";

export const metadata: Metadata = {
  title:
    "跨境数据传输：PDF 工具合规要点怎么逐条核对 | Cross-Border Data Transfer for PDF Tools | PDFMergeNext",
  description:
    "跨境数据传输不是大公司才要管的事。合并一份带个人信息的 PDF，点下去的那一刻出境就已经发生。这篇给出四个能当场填完的判定位、GDPR 第 5 章与个保法第 38 条各自的口径、四条出境路径的成本对照，以及本地处理为什么能把整节写成不适用。",
  keywords: [
    "cross-border data transfer pdf tools",
    "pdf tool cross-border compliance",
    "gdpr chapter v pdf transfer",
    "pipl article 38 cross border pdf",
    "standard contractual clauses pdf tool",
    "pdf tool data localization",
    "跨境数据传输 PDF 工具",
    "PDF 工具出境合规",
    "GDPR 第 5 章 PDF 传输",
    "个保法第三十八条 PDF",
    "PDFMergeNext 跨境合规",
  ],
  alternates: {
    canonical: "/blog/cross-border-data-transfer-pdf-tools",
    languages: {
      "zh-CN": "/blog/cross-border-data-transfer-pdf-tools",
      "en-US": "/blog/cross-border-data-transfer-pdf-tools",
      "x-default": "/blog/cross-border-data-transfer-pdf-tools",
    },
  },
  openGraph: {
    title: "跨境数据传输：PDF 工具合规要点怎么逐条核对 · PDFMergeNext",
    description:
      "四个判定位：有没有离开本机、接收方在哪个国家、有没有个人信息、适用哪个法域。第一格答否，后面三格都不用填。",
    type: 'article',
    url: SITE_URL + "/blog/" + SLUG,
    siteName: 'PDFMergeNext',
    publishedTime: "2026-10-26T00:00:00.000Z",
    images: [{ url: SITE_URL + "/og", width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "跨境数据传输：PDF 工具合规要点怎么逐条核对 · PDFMergeNext",
    description:
      "三种法域对着同一份文件给出的答案并不一样，四条出境路径的成本差得更多。核完之后你会发现本地处理最省钱。",
    images: [SITE_URL + "/og"],
  },
};

const FAQ = [
  {
    q: "工具在欧洲，人在亚洲，这算跨境吗？",
    a: "算，而且可能是两段。文件从中国出境提供给欧盟一侧的处理者，是第一段；该处理者把请求再转给它的子处理方或 CDN 节点，是第二段。同一个批次里把接收方按国家分行列出，比写一个欧盟两个字有用。判断依据见 /blog/pdf-data-export-impact。",
  },
  {
    q: "签了标准合同条款（SCC）是不是就够了？",
    a: "不够。SCC 解决的是合同层面的义务，之后还要做一次传输影响评估（TIA），确认接收国本身的公权力法律不会让这些条款落空。两份文件缺一份，多数欧盟监管机构会认定这条链不完整。GDPR 那一侧的条款对照见 /blog/gdpr-compliant-pdf-tools。",
  },
  {
    q: "小团队也需要管这件事吗？",
    a: "看数据不看人数。五个处理出入境证件的扫描件，比处理五千份公开年报触发更多义务。判断是否跳过只看一个点：文件里有没有个人信息。天天处理不涉及个人的内部工程图纸的人，这一节大概率可以先写不适用。边界怎么划见 /blog/privacy-by-design-pdf-tools。",
  },
  {
    q: "本地处理的含义是零风险吗？",
    a: "不是零风险，是换了风险类型。本地做法没有出境路径可谈，剩下的是设备本身：硬盘加密、离职时的文件清理、屏幕共享时的误暴露。这些属于访问控制而不是跨境协议，写进内部制度时是另一章节。本地方案的能力边界见 /blog/offline-pdf-merge-limits。",
  },
  {
    q: "The tool sits in Europe and I am in Asia. Does that count as cross-border?",
    a: "It does, and there may be two legs rather than one. The file leaving China for a processor in the EU is the first leg, and that processor forwarding the work to a sub-processor or a CDN edge is the second. Listing recipients by country, one row each, does more work than writing EU into a single cell. The reasoning is set out in /blog/pdf-data-export-impact.",
  },
  {
    q: "Signing standard contractual clauses settles it, right?",
    a: "Not on their own. SCCs fix the contractual side, and then a transfer impact assessment checks whether public authority law at the destination would hollow those clauses out. Missing either document, most EU regulators treat the route as incomplete. The clause-by-clause GDPR view is in /blog/gdpr-compliant-pdf-tools.",
  },
  {
    q: "Does a small team really have to deal with this?",
    a: "Judge it by the data, not the headcount. Five scans of a travel document trigger more obligations than five thousand annual reports already published. One thing decides whether you can stop: does the file carry personal data. Somebody processing internal drawings with no people in them can usually close this section early. Where the boundary goes is in /blog/privacy-by-design-pdf-tools.",
  },
  {
    q: "Does going local mean zero risk?",
    a: "It means different risk rather than none. There is no transfer path to argue about, and what remains sits with the device: disk encryption, cleanup when somebody leaves, accidental exposure on a shared screen. That belongs to access control rather than transfer paperwork, so it lands in a different chapter of the policy. What the local route cannot do is in /blog/offline-pdf-merge-limits.",
  },
];

const TOC = [
  { id: "lead", label: "一句话结论 / Short answer" },
  { id: "trigger", label: "什么动作算一次传输 / What counts as a transfer" },
  { id: "rules", label: "三个法域对着同一份文件 / Three regimes, same file" },
  { id: "routes", label: "四条出境路径的成本 / Four routes and what each costs" },
  { id: "local", label: "本地处理为什么能结案 / Why local processing closes it" },
  { id: "faq", label: "常见问题 / FAQ" },
];

const CHECKS = [
  {
    step: "一、有没有离开本机",
    yes: "浏览器本地处理，文件一直在内存里",
    no: "上传到接口，通常还要过一层 CDN",
  },
  {
    step: "二、接收方在哪个国家",
    yes: "注册地、处理机房、CDN 节点三个国家分行写",
    no: "只写服务商注册国，默认三处是同一个",
  },
  {
    step: "三、有没有个人信息",
    yes: "列出字段：姓名、证件号、诊断结论",
    no: "写公司文件四个字，不看实际内容",
  },
  {
    step: "四、适用哪个法域",
    yes: "按数据主体所在地确定，可能两套同时适用",
    no: "按自己公司所在地确定",
  },
];

const RULES = [
  {
    check: "适用对象",
    gdpr: "欧盟境内设立的主体处理欧盟居民个人数据",
    uk: "同 GDPR 思路，范围限于英国情形",
    pipl: "境内处理自然人个人信息，含向境外提供",
  },
  {
    check: "合法出境条件",
    gdpr: "充分性认定 / SCC / BCR / 第 49 条例外",
    uk: "IDTA 或 GDPR 附录（Addendum）",
    pipl: "安全评估 / 标准合同备案 / 个人信息保护认证",
  },
  {
    check: "额外要做的事",
    gdpr: "第 30 条处理记录，加一份传输影响评估（TIA）",
    uk: "传输风险评估（TRA）",
    pipl: "个人信息出境自评估报告，留存三年",
  },
  {
    check: "本地化要求",
    gdpr: "无普遍强制本地化",
    uk: "无",
    pipl: "关键信息基础设施运营者与达量处理者须境内存储",
  },
  {
    check: "数量门槛",
    gdpr: "无",
    uk: "无",
    pipl: "有明确分档（十万人 / 一百万人）",
  },
];

const ROUTES = [
  {
    route: "充分性认定 adequacy",
    fits: "接收国已被认定达到同等保护水平",
    cost: "零文本成本，但要盯住认定是否变动",
  },
  {
    route: "标准合同条款 SCC",
    fits: "一对一的商业关系",
    cost: "法务时间，按批次签署，新增子处理方要重签",
  },
  {
    route: "约束性公司规则 BCR",
    fits: "同一集团内部跨境",
    cost: "审批周期以年计，只有跨成员体集团划算",
  },
  {
    route: "本地处理",
    fits: "任意规模",
    cost: "换一次工具的迁移成本，之后接近零",
  },
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
            name: "跨境数据传输：PDF 工具合规要点怎么逐条核对",
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
          "跨境数据传输：PDF 工具合规要点怎么逐条核对 / Cross-Border Data Transfer for PDF Tools",
        description:
          "四个判定位：有没有离开本机、接收方在哪个国家、有没有个人信息、适用哪个法域。GDPR 第 5 章与个保法第 38 条的对照，四条出境路径的成本表，以及本地处理为什么能把整节写成不适用。",
        author: {
          '@type': 'Person',
          name: 'PDFMergeNext',
          url: 'https://pdfmergenext.shop',
          '@id': 'https://pdfmergenext.shop/#organization',
        },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: "2026-10-26",
        dateModified: "2026-10-26",
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
          合规清单 · Cross-Border Transfer
        </p>
        <h1 className="mt-2 text-h1 font-bold tracking-tight text-fg">
          跨境数据传输：PDF 工具合规要点怎么逐条核对 / Cross-Border Data Transfer for PDF Tools
        </h1>
        <p className="mt-3 text-body text-fg-secondary">
          多数团队是在工具用了半年之后，才意识到每一次点合并都产生了跨境数据传输。这篇给出一个下午能填完的核对表：四个判定位、三个法域的对照表、四条出境路径的成本，以及把工具换成本地处理后这一节为什么能直接结案。
        </p>
        <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-subtle px-3 py-1 text-caption font-medium text-fg-muted">
          阅读约 9 分钟 · 9 min read
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
            只要文件离开了你所在的辖区、落到另一国家的服务端，跨境数据传输就已经发生，不需要等到有人提醒。对 PDF 合并工具来说这条判断很短：三份带个人信息的文件拖进在线工具，按下合并，副本就在另一个辖区了。这篇把这件事拆成四个能当场填完的判定位，给出 GDPR 第 5 章与个保法第 38 条对着同一份文件各自怎么说，再把四条出境路径按实际成本排一次。
          </p>
          <p className="mt-2 text-fg-secondary">
            Once a file leaves your jurisdiction and lands on a server in another one, a cross-border data transfer has happened, whether or not anybody flagged it. For a PDF merge tool the test is short: three files carrying personal details dropped into an online merger, one click, and copies exist under another set of laws. This article turns that into four checks you can answer today, sets out how Chapter V of the GDPR and Article 38 of the PIPL read the same file differently, and prices the four legal routes against each other.
          </p>
          <p className="mt-2 text-fg-secondary">
            两种常见的错档方式。一种是把它归到大公司头上，团队不到二十人就直接跳过；另一种是反向过度，为每个工具都拉法务谈一轮标准合同条款，却没人算过更换成本。中间那一条路最实用：先确认有没有出境，没有就一行结案；有，再查哪个法域、走哪条路。
          </p>
          <p className="mt-2 text-fg-secondary">
            Two ways this usually goes sideways. One files it under something only large companies deal with and skips it below twenty people. The other overcorrects, pulling legal into standard contractual clause talks for every tool while nobody prices the alternative. The usable path sits between them: establish whether a transfer happens, close it in one line if not, and check the regime and the route if it does.
          </p>
          <p className="mt-3 text-sm text-fg-muted">
            说明：下面是给工具选型和内部制度用的核对口径，不是法律意见。具体义务以适用法规和本单位法务的判断为准。
          </p>
        </section>

        <section id="trigger">
          <h2 className="text-title font-semibold text-fg">
            什么动作算一次传输 / What counts as a transfer
          </h2>
          <p className="mt-2 text-fg-secondary">
            四个判定位按次序过。第一格答否，后面三格都不用填，这也是多数本地工具能在这节收工的原因。
          </p>
          <p className="mt-2 text-fg-secondary">
            Four checks, in order. Answer no to the first and the remaining three stay empty, which is why browser-local tools mostly finish this section in one line.
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-fg-secondary">
            <li>有没有离开本机：文件没被上传就没有传输，这条链路停在这一台设备上</li>
            <li>接收方在哪个国家：注册地、处理机房所在国、CDN 节点所在国，三处经常不是同一个答案</li>
            <li>有没有个人信息：公司之间的合同通常不涉及，加上姓名、证件号或诊断结论就涉及了</li>
            <li>适用哪个法域：欧盟居民的数据看 GDPR，境内处理看个保法，两者也可能同时适用</li>
          </ul>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-fg-secondary">
            <li>Leaves the device: no upload means no transfer, and the pipeline stops on this machine</li>
            <li>Where the recipient sits: registration country, processing region and CDN edge often give three answers</li>
            <li>Carries personal data: business-to-business contracts usually do not, adding a name, an ID number or a diagnosis changes that</li>
            <li>Which regime applies: GDPR for data about people in the EU, PIPL for processing inside mainland China, sometimes both</li>
          </ul>
          <div className="mt-4 overflow-x-auto rounded-lg border border-line">
            <table className="w-full text-left text-sm">
              <thead className="bg-subtle text-fg-muted">
                <tr>
                  <th className="px-4 py-2 font-semibold">判定位</th>
                  <th className="px-4 py-2 font-semibold">填实的写法</th>
                  <th className="px-4 py-2 font-semibold">常见的假写法</th>
                </tr>
              </thead>
              <tbody className="text-fg-secondary">
                {CHECKS.map((r) => (
                  <tr key={r.step} className="border-t border-line">
                    <td className="px-4 py-2">{r.step}</td>
                    <td className="px-4 py-2">{r.yes}</td>
                    <td className="px-4 py-2">{r.no}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-fg-secondary">
            第二格最容易被想当然。一家在欧洲注册的公司，处理放在法兰克福，CDN 节点却可能落在北美或者东南亚的某个 PoP。用 ping 或 traceroute 看 IP 归属只能拿到一个大概，真正能写进表的是服务商自己的书面答复，对方不答就把「未公开」写进表格，这一格同样算填完了。
          </p>
          <p className="mt-3 text-fg-secondary">
            Row two gets assumed more than any other. A company registered in Europe may process in Frankfurt while its CDN edges sit in North America or Southeast Asia. Ping and traceroute give you an IP address and nothing beyond a guess, so what belongs in the table is a written answer from the vendor, and if they decline, writing not disclosed counts as answered too.
          </p>
          <p className="mt-3 text-fg-secondary">
            自己动手看请求面板的做法见 /blog/devtools-network-tab-privacy-guide，服务端与浏览器端这两条路的差别见 /blog/client-side-vs-server-side-pdf-tools。
          </p>
        </section>

        <section id="rules">
          <h2 className="text-title font-semibold text-fg">
            三个法域对着同一份文件 / Three regimes, same file
          </h2>
          <p className="mt-2 text-fg-secondary">
            拿同一个事实来比：用一个德国公司运营的在线 PDF 工具，合并三份包含中国员工体检信息的扫描件。三套规则给出的答案有一部分重叠，有一部分完全不一样。
          </p>
          <p className="mt-2 text-fg-secondary">
            Take one fact pattern and hold it up to three regimes: an online PDF tool run by a German company, merging three scans that contain health information about staff in China. Part of the answer overlaps, part of it does not.
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-line">
            <table className="w-full text-left text-sm">
              <thead className="bg-subtle text-fg-muted">
                <tr>
                  <th className="px-4 py-2 font-semibold">判定项</th>
                  <th className="px-4 py-2 font-semibold">GDPR（欧盟）</th>
                  <th className="px-4 py-2 font-semibold">UK GDPR</th>
                  <th className="px-4 py-2 font-semibold">个保法（中国大陆）</th>
                </tr>
              </thead>
              <tbody className="text-fg-secondary">
                {RULES.map((r) => (
                  <tr key={r.check} className="border-t border-line">
                    <td className="px-4 py-2">{r.check}</td>
                    <td className="px-4 py-2">{r.gdpr}</td>
                    <td className="px-4 py-2">{r.uk}</td>
                    <td className="px-4 py-2">{r.pipl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-fg-secondary">
            最后一行是这两年最容易漏的一条变化：触发义务的方式分了档，不到十万人的路径和超过一百万人的路径，材料清单和办理周期差得很多。人数算不清的时候按更严的一档准备，因为退回重做的成本比一次多交材料高。
          </p>
          <p className="mt-3 text-fg-secondary">
            The last row is the change most people missed: obligations are tiered, and the route below one hundred thousand people looks nothing like the one above a million, neither in paperwork nor in processing time. When the headcount is unclear, prepare against the stricter tier, since refiling costs more than filing once extra.
          </p>
          <p className="mt-3 text-fg-secondary">
            GDPR 那一侧的逐条款清单见 /blog/gdpr-compliant-pdf-tools，个保法下八个能当场核对的点见 /blog/china-pipl-pdf-tools-requirements，医疗文件的额外要求见 /blog/hipaa-compliant-pdf-merge。
          </p>
        </section>

        <section id="routes">
          <h2 className="text-title font-semibold text-fg">
            四条出境路径的成本 / Four routes and what each costs
          </h2>
          <p className="mt-2 text-fg-secondary">
            确认确实有出境之后，剩下的是选一条合法路径。四条都成立，差别全在时间与人。
          </p>
          <p className="mt-2 text-fg-secondary">
            Once a transfer is real, what remains is choosing a lawful route. All four work, and the difference between them is measured in time and people.
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-line">
            <table className="w-full text-left text-sm">
              <thead className="bg-subtle text-fg-muted">
                <tr>
                  <th className="px-4 py-2 font-semibold">路径</th>
                  <th className="px-4 py-2 font-semibold">适合谁</th>
                  <th className="px-4 py-2 font-semibold">实际成本</th>
                </tr>
              </thead>
              <tbody className="text-fg-secondary">
                {ROUTES.map((r) => (
                  <tr key={r.route} className="border-t border-line">
                    <td className="px-4 py-2">{r.route}</td>
                    <td className="px-4 py-2">{r.fits}</td>
                    <td className="px-4 py-2">{r.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-fg-secondary">
            第一条最省文件，也最脆：认定可以被推翻，去年可用不代表今年还能用。第四条看起来最贵，实际上常常只需要一个下午把流程换掉，之后每年省的正是前三条的复核工时。两者的差别类似于房贷和一次性付款。
          </p>
          <p className="mt-3 text-fg-secondary">
            Route one costs the least paperwork and breaks the easiest, since an adequacy finding can be withdrawn and last year answer may not hold this year. Route four looks the most expensive and usually costs one afternoon of migration, after which every year saved is review time you no longer spend on the other three. The gap resembles a mortgage next to a single payment.
          </p>
        </section>

        <section id="local">
          <h2 className="text-title font-semibold text-fg">
            本地处理为什么能结案 / Why local processing closes it
          </h2>
          <p className="mt-2 text-fg-secondary">
            文件不出本机时，第二节的第二格没有接收方可填，第三、第四节跟着一起收敛，最后剩下的只有一句：无出境行为，不适用 transfer rules。这句话的效力比一份写得很完整的合同附录更强，因为它消掉的是整类问题，而不是降低其中一部分的风险。
          </p>
          <p className="mt-2 text-fg-secondary">
            When nothing leaves the device, the recipient cell in section two has no answer to give, sections three and four collapse with it, and what remains is one sentence: no transfer, transfer rules not applicable. That sentence carries more weight than a well drafted contract annex, because it removes a category of problem rather than reducing one part of it.
          </p>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-fg-secondary">
            <li>把第二节第一格连同版本号一起写进表头，版本变更即触发复核</li>
            <li>附一句当天做过的验证方法：断网仍可用，请求面板无上传记录</li>
            <li>第三节和第四节写一句不适用，注明判断日期与核对人</li>
            <li>残余风险转写到设备那一章：磁盘加密、离职清理、屏幕共享的边界</li>
          </ol>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-fg-secondary">
            <li>Put the section two first cell into the header along with the tool version, so a version bump triggers a recheck</li>
            <li>Attach the verification method you ran that day: works offline, no upload in the request panel</li>
            <li>Close sections three and four as not applicable, with the assessment date and the person who checked</li>
            <li>Move residual risk into the device chapter: disk encryption, offboarding cleanup, screen sharing limits</li>
          </ol>
          <p className="mt-3 text-fg-secondary">
            合并这一步在 pdfmergenext.shop 全程在本机完成，因此这一节通常只需要第一条和第二条：写上版本号，附上验证方法，结案。这套流程留痕的部分见 /blog/pdf-file-audit-trail-requirements，上一层的隐私影响评估写法见 /blog/privacy-impact-assessment-pdf-tools，零上传是怎么做到的见 /blog/how-zero-upload-pdf-tools-work。
          </p>
          <p className="mt-3 text-fg-secondary">
            Merging on pdfmergenext.shop runs entirely on your own device, so this section usually needs only rows one and two: note the version, attach the verification method, close it. The logging side of that workflow is in /blog/pdf-file-audit-trail-requirements, the assessment layer above it in /blog/privacy-impact-assessment-pdf-tools, and how zero upload is built in /blog/how-zero-upload-pdf-tools-work.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-on-primary transition-colors duration-fast hover:bg-brand-hover"
          >
            在 pdfmergenext.shop 本机合并 PDF，第二节第一格直接答否 →
          </Link>
          <p className="mt-2 text-sm text-fg-secondary">
            GDPR 的条款清单见{" "}
            <Link href="/blog/gdpr-compliant-pdf-tools" className="text-brand hover:underline">
              GDPR 合规 PDF 工具检查清单
            </Link>
            ，个保法的八个核对点见{" "}
            <Link href="/blog/china-pipl-pdf-tools-requirements" className="text-brand hover:underline">
              个保法下的 PDF 工具要求
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
            href="/blog/gdpr-compliant-pdf-tools"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">GDPR 合规 PDF 工具：选型前能逐条打勾的检查清单</p>
            <p className="mt-1 text-xs text-fg-secondary">GDPR / 出境路径那一层</p>
          </Link>
          <Link
            href="/blog/china-pipl-pdf-tools-requirements"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">个保法下的 PDF 工具要求：八个能当场核对的点</p>
            <p className="mt-1 text-xs text-fg-secondary">PIPL / 第 38 条那一侧</p>
          </Link>
          <Link
            href="/blog/client-side-vs-server-side-pdf-tools"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">客户端 PDF 工具 vs 服务器端：架构对比</p>
            <p className="mt-1 text-xs text-fg-secondary">Architecture / 第一格怎么答</p>
          </Link>
          <Link
            href="/blog/pdf-data-export-impact"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">PDF 工具的数据出境影响</p>
            <p className="mt-1 text-xs text-fg-secondary">出境 / 两次链路的拆解</p>
          </Link>
        </div>
      </section>
    </article>
  );
}
