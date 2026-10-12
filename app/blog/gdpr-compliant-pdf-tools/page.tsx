import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';
const SLUG = 'gdpr-compliant-pdf-tools';

export const metadata: Metadata = {
  title:
    'GDPR 合规 PDF 工具：选型前能逐条打勾的检查清单 | GDPR Compliant PDF Tools | PDFMergeNext',
  description:
    '选 PDF 合并工具时，"符不符合 GDPR"可以拆成十几个能当场验证的点：文件是否真的不上传、对方算控制者还是处理者、有没有数据处理协议 DPA、服务器日志留多久。这篇给出一份可以打印下来打勾的检查清单。',
  keywords: [
    'gdpr compliant pdf tools',
    'gdpr compliant pdf merger',
    'pdf tool data processing agreement',
    'gdpr pdf checklist',
    'no upload pdf tool gdpr',
    'GDPR 合规 PDF 工具',
    'GDPR PDF 合并工具',
    'PDF工具数据处理协议 DPA',
    'GDPR PDF 合规检查清单',
    'PDFMergeNext GDPR',
  ],
  alternates: {
    canonical: '/blog/gdpr-compliant-pdf-tools',
    languages: {
      'zh-CN': '/blog/gdpr-compliant-pdf-tools',
      'en-US': '/blog/gdpr-compliant-pdf-tools',
      'x-default': '/blog/gdpr-compliant-pdf-tools',
    },
  },
  openGraph: {
    title: 'GDPR 合规 PDF 工具：选型前能逐条打勾的检查清单 · PDFMergeNext',
    description:
      '合规不是一句口号。把文件上传与否、角色定位、DPA、存储地、日志留存这七项问清楚，答案就出来了。',
    type: 'article',
    url: SITE_URL + '/blog/' + SLUG,
    siteName: 'PDFMergeNext',
    publishedTime: '2026-10-13T00:00:00.000Z',
    images: [{ url: SITE_URL + '/og', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GDPR 合规 PDF 工具：选型前能逐条打勾的检查清单 · PDFMergeNext',
    description:
      '文件上传与否、角色定位、DPA、跨境传输、日志留存。七项问完，这份清单就该有结论了。',
    images: [SITE_URL + '/og'],
  },
};

const FAQ = [
  {
    q: '在本地浏览器里合并 PDF，还算不算 GDPR 约束下的数据处理？',
    a: '文件留在设备上、供应商看不到内容时，就不存在 PDF 文件本身的处理环节，只剩下匿名的页面访问统计需要向访客交代。这也是各家公司做数据保护影响评估时最省事的一条：把原本要论证的一整段关于服务器端处理的内容直接删掉。验证办法见 /blog/devtools-network-tab-privacy-guide。',
  },
  {
    q: '供应商只肯给隐私政策，不肯签 DPA，怎么办？',
    a: '这一个回答就够否掉了。GDPR 第 28 条第 3 款要求控制者与处理者之间有书面合同，列明处理目的、期限、子处理者、删除或返还义务。隐私政策是单方声明，不具备这组条款。拿不到 DPA，点请把处理地点搬回本地或者换成愿意签的那一家。',
  },
  {
    q: '工具方说服务器在欧洲，是不是就没有跨境传输问题了？',
    a: '地理位置只是第一步。还要看远程运维从哪里接入、客服能否调取文件、有没有 CDN 把静态资源放到欧洲之外、备份落在哪个可用区。要求对方把存储地、运维接入地和备份可用区三个地点都写进附件，这一项才算核实完。',
  },
  {
    q: '合并完 PDF 之后，留在对方服务器上的那份怎么确认删掉了？',
    a: '看删除时限的书面承诺，不看邮箱里一句"我们已删除"。合同里要写明删除窗口（例如处理后 24 小时内清除临时对象）、临时存储的加密方式、以及需要时可出具的删除证明。没有这个条款，审计时你拿不出证据。',
  },
  {
    q: 'Is a no-upload PDF merge tool automatically GDPR compliant?',
    a: 'It removes the biggest obligation, since no file reaches the vendor and there is nothing to justify under Article 28 for the document content. What remains is the website itself: analytics, advertising cookies and any contact form still need a lawful basis and a notice, which is a much smaller job than defending server-side processing of client contracts.',
  },
  {
    q: 'The vendor offers a privacy policy but no DPA. Is that enough?',
    a: 'No. Article 28(3) requires a written contract covering subject matter, duration, sub-processors and deletion or return of the data. A privacy policy is a unilateral notice and carries none of those clauses. Without a DPA you cannot demonstrate compliance, so either move the work into the browser or pick a vendor that signs.',
  },
  {
    q: 'Servers inside the EU settle the transfer question, right?',
    a: 'Only partly. Storage location is one of three questions. The others are where support staff and administrators connect from, and whether backups or CDN edges sit outside the region. Ask for all three locations in the annex, including maintenance access, and then the item can be ticked off.',
  },
  {
    q: 'How long may a tool keep the merged file?',
    a: 'Long enough to hand it back and no longer, and the retention window belongs in the contract rather than in a chat reply. Typical wording is that temporary objects are purged within 24 hours and that audit logs hold no content, only counts. Ask what happens on the backup rotation too.',
  },
];

const TOC = [
  { id: 'lead', label: '一句话结论 / TL;DR' },
  { id: 'checklist', label: '七项检查清单 / The seven checks' },
  { id: 'roles', label: '你在链条上算什么角色 / Controller or processor' },
  { id: 'transfer', label: '存储地与跨境传输 / Storage and transfers' },
  { id: 'routine', label: '交给法务的一页纸 / The page you hand a DPO' },
  { id: 'faq', label: '常见问题 / FAQ' },
];

const CHECKLIST = [
  { dim: '文件是否上传', pass: '处理全程在本机，或用 DevTools 实测零上传', fail: '页面要求先传上去才能处理' },
  { dim: '法律角色', pass: '合同写明对方是处理者，用途限于你的指令', fail: '条款把对方写成控制者，或保留自行使用的权利' },
  { dim: 'DPA（数据处理协议）', pass: '有一份可签署的处理者协议并附子处理者名单', fail: '只有隐私政策，拿不到 DPA 文本' },
  { dim: '存储地', pass: '写明国家、可用区、运维接入地三处位置', fail: '只写"全球 CDN"或"多区域托管"' },
  { dim: '日志留存', pass: '约定留存期限，并且日志不含文件内容', fail: '没有留存期的书面承诺' },
  { dim: '子处理者', pass: '给出名单并承诺变更提前通知', fail: '名单藏在嵌套条款页，变更不另行告知' },
  { dim: '跨境传输', pass: '指明 SCC 或充分性认定作为转移依据', fail: '对转移工具没有任何说明' },
];

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '首页', item: SITE_URL + '/' },
          { '@type': 'ListItem', position: 2, name: '博客', item: SITE_URL + '/blog' },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'GDPR 合规 PDF 工具：选型前能逐条打勾的检查清单',
            item: SITE_URL + '/blog/' + SLUG,
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
          'GDPR 合规 PDF 工具：选型前能逐条打勾的检查清单 / GDPR Compliant PDF Tools: A Checklist',
        description:
          '把"符不符合 GDPR"拆成文件上传、角色定位、DPA、存储地、日志留存等十几个能当场验证的点，给出一份可以打印下来打勾的检查清单。',
        author: {
          '@type': 'Person',
          name: 'PDFMergeNext',
          url: 'https://pdfmergenext.shop',
          '@id': 'https://pdfmergenext.shop/#organization',
        },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-10-13',
        dateModified: '2026-10-13',
        image: SITE_URL + '/og',
        url: SITE_URL + '/blog/' + SLUG,
        mainEntityOfPage: { '@type': 'WebPage', '@id': SITE_URL + '/blog/' + SLUG },
      },
    ],
  };

  return (
    <article className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-16">
      <header>
        <p className="text-caption font-semibold uppercase tracking-wide text-brand">
          合规清单 · GDPR Compliance
        </p>
        <h1 className="mt-2 text-h1 font-bold tracking-tight text-fg">
          GDPR 合规 PDF 工具：选型前能逐条打勾的检查清单 / GDPR Compliant PDF Tools: A Checklist
        </h1>
        <p className="mt-3 text-body text-fg-secondary">
          "符合 GDPR"在供应商页面上是句口号，落到自己公司头上是一串能当场验证的事实。这份清单把七项检查拆到能打勾的粒度。
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
              <a href={'#' + t.id} className="text-sm text-brand hover:underline">
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
            判断一款 PDF 工具在 GDPR 下能不能用，不必读完整套法律文本，只需要问七个问题，而且每个问题都有可以由供应商签字确认的物证：文件会不会离开本机、离开之后落在哪个国家、对方算控制者还是处理者、有没有 DPA（数据处理协议）可签、日志留多久、子处理者是谁、跨境传输依据哪一条。七项全部落地打勾，这份工具才算可用。少一项，那份 DPIA（数据保护影响评估）就写不完。
          </p>
          <p className="mt-2 text-fg-secondary">
            最省事的路线是把第一项直接改成零分风险：用浏览器本地处理的工具，合并这件事从头到尾不发生文件上传 /blog/merge-pdf-no-upload，服务器端那条链就没有需要论证的内容了，剩下的只是网站自身的统计和 Cookie 那一小块。这也解释了为什么越来越多合规岗把"能不能在本机跑完"当成第一道筛子，而不是收尾时才想起来的一项加分。
          </p>
          <p className="mt-2 text-fg-secondary">
            Deciding whether a PDF merge tool survives GDPR does not require reading the regulation cover to cover. It comes down to seven questions, each with evidence the vendor can countersign: does the file leave the device, which country does it land in, controller or processor, is there a DPA to sign, how long logs are kept, who the sub-processors are, and which transfer mechanism applies. Tick all seven and the tool is usable. Miss one and the data protection impact assessment stalls.
          </p>
        </section>

        {/* 清单 */}
        <section id="checklist">
          <h2 className="text-title font-semibold text-fg">七项 GDPR 合规检查清单 / The seven checks</h2>
          <p className="mt-2 text-fg-secondary">
            下面这张表按顺序列出检查项、通过的样子和一眼就能看出来的不合格信号。第三列最有价值，因为供应商在这些地方的回答通常是含糊的，而含糊就是答案。
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
                {CHECKLIST.map((r) => (
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
            第一行决定了后面六行的难度。文件从未上传到对方服务器，这条链条上就不存在替你处理合同内容的第三方，余下的工作从论证降到了记录。
          </p>
        </section>

        {/* 角色 */}
        <section id="roles">
          <h2 className="text-title font-semibold text-fg">你在链条上算什么角色 / Controller or processor</h2>
          <p className="mt-2 text-fg-secondary">
            多数人卡在这一步：以为"我们不碰数据"就能站在 GDPR 定义之外。用 PDF 工具处理客户的合同、员工的身份证明或患者的病历，贵司决定处理目的，就是控制者；工具方替你处理，是处理者。这两层角色一旦写清楚，合同义务就清楚了：控制者要给指令，处理者要在第 28 条第 3 款要求的那份书面协议里承诺只按指令办、不擅自转托他人、事后删除或返还。
          </p>
          <p className="mt-3 text-fg-secondary">
            需要警惕的是角色漂移。工具方如果把上传的文件也拿去训练模型、做统计或"改进服务"，它就不再是单纯的处理者，而是为自己的目的而处理的控制者，这条必须另有法律依据，很多时候就是另行告知加单独同意。合同里出现"为改进服务而使用"这类措辞时，把它作为一项待核实事项列进清单，不要默认它没问题。
          </p>
          <p className="mt-3 text-fg-secondary">
            角色判定的另一个实际后果落在文档量上。处理自己的文件属于小规模场景，负担很轻；一旦处理的是客户或员工的数据，第三十条要求的那份处理活动记录（ROPA）就要能拿出来。选型阶段填好的这份检查清单，正好就是 ROPA 条目和供应商清单的草稿。
          </p>
          <p className="mt-3 text-fg-secondary">
            In practice the roles run like this. Whoever decides why the documents are processed is the controller, and whoever acts on those instructions is the processor. Handling client contracts, employee identity papers or patient records puts your company in the first seat, and the tool sits in the second. Once written down, Article 28(3) does the rest: a written agreement in which the processor promises to act only on instructions, to control its own sub-processors, and to delete or return the data afterwards. Watch for role drift too. A vendor that also trains models on uploaded files is pursuing its own purpose and becomes a controller for that part, which needs its own legal basis and usually its own notice.
          </p>
        </section>

        {/* 存储地与跨境 */}
        <section id="transfer">
          <h2 className="text-title font-semibold text-fg">存储地与跨境传输 / Storage and transfers</h2>
          <p className="mt-2 text-fg-secondary">
            服务器在欧洲不等于没有跨境问题。完整的答案包含三个地点：挂在哪个可用区、备份复制到哪里、以及远程运维从哪个国家接入。第三个最容易被漏掉，而它恰好是最实在的一条，因为能登录就有读取的可能。要求对方把这三处写进附件，这项才算核完。
          </p>
          <p className="mt-3 text-fg-secondary">
            只要有一处在欧洲经济区之外，就需要一个转移工具：通常用的是标准合同条款（SCC），配合转移影响评估，或者看目标国是否有欧盟委员会的充分性认定。2023 年欧盟与美国之间的数据传输框架落地之后，向经过认证的美国接收方转移有了可行路径，但文档仍然要能指出具体依据，而不是留一段"我们采取了适当措施"。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-fg-secondary">
            <li><strong>存储地：</strong>要求写明国家和可用区，不接受"多区域托管"这类说法。</li>
            <li><strong>备份：</strong>问清楚备份保留多少个周期、跨不跨境，以及删除请求是否覆盖备份。</li>
            <li><strong>运维接入：</strong>确认支持人员所属国家，以及是否可以按需关闭远程调取。</li>
            <li><strong>转移依据：</strong>SCC 编号或充分性认定，写在合同而非营销页上。</li>
            <li><strong>替代方案：</strong>传输链路这一步也可以用"不传输"来解决，文件不出本机就没有转移可谈。</li>
          </ul>
          <p className="mt-3 text-fg-secondary">
            数据出境的影响不只停留在纸面罚款，更常见的是在客户招投标时被要求补交这一段说明。出境评估的更多业务背景见 /blog/pdf-data-export-impact。
          </p>
          <p className="mt-3 text-fg-secondary">
            Storage inside the EEA answers one of three questions. Backups and maintenance access answer the other two, and the third is the one most often forgotten because access from another jurisdiction still means someone outside can read the file. Ask for all three in the annex. If any location sits outside the EEA you need a transfer mechanism: standard contractual clauses plus a transfer impact assessment, or an adequacy decision covering that country. Since the EU-US Data Privacy Framework took effect in 2023 there is a workable route to certified US recipients, but the paperwork still has to name the mechanism.
          </p>
        </section>

        {/* 一页纸 */}
        <section id="routine">
          <h2 className="text-title font-semibold text-fg">交给法务的一页纸 / The page you hand a DPO</h2>
          <p className="mt-2 text-fg-secondary">
            合规工作最大的成本是来回问。把下面这条流程固定下来，一次问完，第七步出来的那一页纸可以直接进采购档案。
          </p>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-fg-secondary">
            <li>先确认文件是否离机：能在浏览器里跑完的工具，后面六步大部分都变成了零风险项</li>
            <li>向供应商索取 DPA 全文与子处理者名单，拿不到就换名录里的下一家</li>
            <li>确认合同的角色条款：对方是处理者，处理目的限于你的书面指令</li>
            <li>记录存储国家、备份区域与运维接入地三处位置</li>
            <li>写明删除窗口（建议 24 小时内清除临时对象）与删除证明的出具方式</li>
            <li>标注跨境传输依据：SCC 编号或充分性认定</li>
            <li>把以上六条连同工具名、用途、负责人签在同一页纸上，进供应商清单与 ROPA</li>
          </ol>
          <p className="mt-3 text-fg-secondary">
            合并这一步在 pdfmergenext.shop 全程本地完成，调整页序或挑页码都不需要把文件交出去。这也是为什么在第一项检查上，本地处理的工具和需要上传的工具根本不在同一张表上比较：前者少了一整个论证章节。服务器端与浏览器端的架构差别见 /blog/client-side-vs-server-side-pdf-tools，零上传工具的实现方式见 /blog/how-zero-upload-pdf-tools-work。
          </p>
          <Link
            href="/"
            className="mt-4 inline-block rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-on-primary transition-colors duration-fast hover:bg-brand-hover"
          >
            在 pdfmergenext.shop 本地合并，文件不出本机 →
          </Link>
          <p className="mt-2 text-sm text-fg-secondary">
            更多 PDF 工具合规与隐私的判断细节见{' '}
            <Link href="/blog" className="text-brand hover:underline">
              /blog
            </Link>
            ，企业与个人用工具的取舍见{' '}
            <Link href="/blog/personal-pdf-privacy-vs-enterprise-saas" className="text-brand hover:underline">
              PDF 工具的个人隐私与企业 SaaS 之别
            </Link>
            ，本地方案的能力边界见{' '}
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
            href="/blog/personal-pdf-privacy-vs-enterprise-saas"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">个人隐私 PDF 工具 vs 企业 SaaS</p>
            <p className="mt-1 text-xs text-fg-secondary">Vendor Comparison / 责任边界与合同条款</p>
          </Link>
          <Link
            href="/blog/pdf-data-export-impact"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">PDF 工具的数据出境影响</p>
            <p className="mt-1 text-xs text-fg-secondary">Cross-border / 传输路径与实际影响</p>
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
