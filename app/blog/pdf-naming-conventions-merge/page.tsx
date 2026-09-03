import type { Metadata } from 'next';

const SITE_URL = 'https://pdfmergenext.shop';
const SLUG = 'pdf-naming-conventions-merge';

export const metadata: Metadata = {
  title: 'PDF 文件命名规范：合并后如何命名 | PDFMergeNext',
  description:
    '合并完的 PDF 该叫什么名字？日期在前还是项目在前、要不要补零、中文名会不会出问题——一套用得住的 PDF 命名规范，三个月后你还能搜到它。A naming convention for merged PDFs that still works months later.',
  keywords: [
    'PDF 命名规范',
    'PDF naming conventions',
    '合并 PDF 命名',
    'merged pdf file naming',
    '文件命名最佳实践',
    'document naming scheme',
  ],
  alternates: {
    canonical: `/blog/${SLUG}`,
    languages: {
      'zh-CN': `/blog/${SLUG}`,
      'en-US': `/blog/${SLUG}`,
      'x-default': `/blog/${SLUG}`,
    },
  },
  openGraph: {
    title: 'PDF 文件命名规范：合并后如何命名 · PDFMergeNext',
    description:
      '日期在前还是项目在前、要不要补零、中文名会不会出问题——一套三个月后还能搜到的 PDF 命名规范。',
    type: 'article',
    url: `${SITE_URL}/blog/${SLUG}`,
    siteName: 'PDFMergeNext',
    publishedTime: '2026-08-31T00:00:00.000Z',
    images: [{ url: `${SITE_URL}/og`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PDF 文件命名规范：合并后如何命名 · PDFMergeNext',
    description: '一套用得住的合并 PDF 命名规范：日期前置、补零、避坑字符。',
    images: [`${SITE_URL}/og`],
  },
};

const FAQ = [
  {
    q: '日期应该放在文件名前面还是后面？',
    a: '放前面，而且用 YYYY-MM-DD 格式。这样文件管理器按名称排序时自动就是时间顺序，不需要依赖"修改时间"这个会被复制、同步、解压弄乱的字段。放后面的话排序会先按项目名分组，找"上个月的所有东西"就得一个个翻。',
  },
  {
    q: '文件名里能用中文吗？',
    a: '本地用完全没问题，现代系统都是 UTF-8。但如果这份 PDF 要走邮件附件、上传到老系统、或者被 CI 脚本处理，中文名有一定概率变成乱码或被截断。折中做法：中文名留给本地归档，对外交付时另存一份纯 ASCII 名（如 2026-09-03_invoice_acme_v1.pdf）。',
  },
  {
    q: '版本号该怎么写？v1、final 还是 rev2？',
    a: '不要用 final。final、final2、final-真正最终版 这条路每个人都走过一次。用 v01、v02 这种补零递增，改动多了也不会乱序；需要区分对外版本时加后缀 v03-signed、v03-client。判断标准很简单：三个月后你光看名字能不能说出哪份最新。',
  },
  {
    q: '合并之后要不要保留原始文件的名字信息？',
    a: '看用途。如果终稿是给别人看的成品（比如整本标书），原始文件名没有意义，用统一的项目名即可。如果终稿是内部归档、日后可能要拆回去，建议在合并前把原始文件名写进各自的首页页眉，或者单独存一份 manifest.txt 记录拼接顺序——文件名装不下这些信息。',
  },
];

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '首页 / Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: '博客 / Blog', item: `${SITE_URL}/blog` },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'PDF 命名规范 / PDF Naming Conventions',
            item: `${SITE_URL}/blog/${SLUG}`,
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
          'PDF 文件命名规范：合并后如何命名 / PDF Naming Conventions for Merged Files',
        description:
          '日期在前还是项目在前、要不要补零、中文名会不会出问题——一套用得住的 PDF 命名规范。',
        author: {
          '@type': 'Organization',
          name: 'PDFMergeNext',
          url: SITE_URL,
          '@id': `${SITE_URL}/#organization`,
        },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-08-31',
        dateModified: '2026-08-31',
        image: `${SITE_URL}/og`,
        url: `${SITE_URL}/blog/${SLUG}`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${SLUG}` },
      },
    ],
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav className="mb-6 text-sm text-fg-muted" aria-label="Breadcrumb">
        <a href="/" className="hover:underline">首页 / Home</a>
        {' › '}
        <a href="/blog" className="hover:underline">博客 / Blog</a>
        {' › '}
        <span>PDF 命名规范 / PDF Naming Conventions</span>
      </nav>

      <h1 className="text-3xl font-bold leading-tight">
        PDF 文件命名规范：合并后如何命名 / PDF Naming Conventions for Merged Files
      </h1>
      <p className="mt-2 text-sm text-fg-muted">更新于 2026-08-31 · 阅读约 5 分钟 / 5 min read</p>

      <div className="my-6 rounded-lg bg-subtle p-4 text-sm leading-relaxed">
        <strong className="block mb-1">📋 快速结论 / TL;DR</strong>
        一套够用的 <strong>PDF 命名规范</strong>只有一个公式：
        <code>YYYY-MM-DD_项目_内容_v01.pdf</code>。日期前置保证排序即时间序，补零保证版本不乱，
        下划线分段保证跨系统不出事。别再用 final —— 三个月后你会恨那个文件名。
      </div>

      <nav className="mb-8 rounded-lg border border-line p-4 text-sm">
        <strong className="block mb-2">📑 目录 / Contents</strong>
        <ul className="list-inside space-y-1">
          <li><a href="#why" className="text-primary hover:underline">1. 为什么合并后的文件更需要规范</a></li>
          <li><a href="#formula" className="text-primary hover:underline">2. 一个公式解决 90% 场景</a></li>
          <li><a href="#traps" className="text-primary hover:underline">3. 会出事的字符和写法</a></li>
          <li><a href="#examples" className="text-primary hover:underline">4. 四类常见场景怎么命名</a></li>
          <li><a href="#faq" className="text-primary hover:underline">5. 常见问题 / FAQ</a></li>
        </ul>
      </nav>

      <h2 id="why" className="text-2xl font-semibold mt-10">1. 为什么合并后的文件更需要规范</h2>
      <p className="mt-3">
        原始文件通常自带线索——发票带编号、合同带甲方名、扫描件带日期。
        但一合并，这些线索全被吞进 PDF 内部，外面只剩一个你随手敲的名字。
        所以<strong>合并 PDF 命名</strong>是整条链路上信息最容易丢失的一步。
      </p>
      <p className="mt-2">
        我见过太多 <code>合并.pdf</code>、<code>新建 PDF 文档 (2).pdf</code>、<code>111.pdf</code>。
        当时都认得，三周后打开文件夹全是谜题，只能一个个点开预览。命名的成本是敲 20 个字符，
        不命名的成本是以后每次找它都要花两分钟。
      </p>

      <h2 id="formula" className="text-2xl font-semibold mt-10">2. 一个公式解决 90% 场景</h2>
      <p className="mt-3">
        <code>YYYY-MM-DD_项目_内容_v01.pdf</code>
      </p>
      <div className="my-5 overflow-x-auto">
        <table className="w-full text-sm border border-line">
          <thead className="bg-subtle">
            <tr>
              <th className="border border-line px-3 py-2 text-left">字段 / Field</th>
              <th className="border border-line px-3 py-2 text-left">为什么这么写 / Why</th>
              <th className="border border-line px-3 py-2 text-left">示例 / Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-line px-3 py-2">日期前置 YYYY-MM-DD</td>
              <td className="border border-line px-3 py-2">按名称排序 = 按时间排序，不依赖易变的修改时间</td>
              <td className="border border-line px-3 py-2">2026-09-03</td>
            </tr>
            <tr>
              <td className="border border-line px-3 py-2">项目/主体</td>
              <td className="border border-line px-3 py-2">搜索时最常用的关键词，放第二段最好找</td>
              <td className="border border-line px-3 py-2">acme</td>
            </tr>
            <tr>
              <td className="border border-line px-3 py-2">内容说明</td>
              <td className="border border-line px-3 py-2">说清这份是什么，别写"合并"这种废话</td>
              <td className="border border-line px-3 py-2">invoice-q3</td>
            </tr>
            <tr>
              <td className="border border-line px-3 py-2">版本 v01</td>
              <td className="border border-line px-3 py-2">补零递增，永不出现"final2"</td>
              <td className="border border-line px-3 py-2">v01 / v02</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-2">
        完整例子：<code>2026-09-03_acme_invoice-q3_v01.pdf</code>。
        段与段之间用下划线、段内部用连字符，这样一眼能看出层级，也不怕命令行和 URL。
      </p>

      <h2 id="traps" className="text-2xl font-semibold mt-10">3. 会出事的字符和写法</h2>
      <ul className="mt-3 space-y-1">
        <li>· <strong>空格</strong>：命令行、URL、老系统都可能截断 → 用下划线或连字符</li>
        <li>· <strong>斜杠 / 反斜杠 / 冒号</strong>：多数系统直接不允许，写日期别用 2026/09/03</li>
        <li>· <strong>#、%、&amp;、?</strong>：走链接分享时会被当成 URL 语法</li>
        <li>· <strong>final / 最终版 / 真的最终版</strong>：语义不可比较，无法排序</li>
        <li>· <strong>不补零的数字</strong>：v10 会排到 v2 前面，批量合并时尤其致命</li>
        <li>· <strong>超长文件名</strong>：Windows 完整路径有 260 字符历史限制，深层目录里容易踩到</li>
      </ul>

      <h2 id="examples" className="text-2xl font-semibold mt-10">4. 四类常见场景怎么命名</h2>
      <ul className="mt-3 space-y-2">
        <li>
          <strong>财务归档</strong>：<code>2026-09-03_finance_invoices-2026-08_v01.pdf</code><br />
          按月归集，一个月一份终稿，日期取归档日而非票据日。
        </li>
        <li>
          <strong>投标/标书</strong>：<code>2026-09-03_projectX_bid-technical_v03-signed.pdf</code><br />
          版本后缀区分 signed / client / internal，别新建 final。
        </li>
        <li>
          <strong>扫描件批量</strong>：<code>2026-09-03_hr_contracts-batch01_v01.pdf</code><br />
          batch 补零，方便后续拆分和对账。
        </li>
        <li>
          <strong>个人资料</strong>：<code>2026-09-03_visa_supporting-docs_v01.pdf</code><br />
          按用途而不是按内容命名——你找的时候想的是"签证材料"，不是"银行流水加护照页"。
        </li>
      </ul>

      <h2 id="faq" className="text-2xl font-semibold mt-10">5. 常见问题 / FAQ</h2>
      <div className="mt-4 space-y-5">
        {FAQ.map((it) => (
          <div key={it.q}>
            <h3 className="font-semibold">{it.q}</h3>
            <p className="mt-1 text-sm leading-relaxed">{it.a}</p>
          </div>
        ))}
      </div>

      <div className="my-10 rounded-lg border border-line bg-subtle p-5 text-sm leading-relaxed">
        <strong className="block mb-2">关于 PDFMergeNext / About PDFMergeNext</strong>
        <p>
          PDFMergeNext（pdfmergenext.shop）在浏览器本地合并 PDF，文件全程不上传，免费无水印、无需注册。
          合并完直接用本文的公式命名再保存即可。从 <a href="/" className="text-primary hover:underline">首页</a> 开始，
          更多实操见 <a href="/blog" className="text-primary hover:underline">博客</a>。
        </p>
        <p className="mt-2">
          PDFMergeNext (pdfmergenext.shop) merges PDFs locally in your browser — no upload, no watermark,
          no sign-up. Start on the <a href="/" className="text-primary hover:underline">home page</a> or
          browse the <a href="/blog" className="text-primary hover:underline">blog</a> for more workflows.
        </p>
      </div>
    </article>
  );
}
