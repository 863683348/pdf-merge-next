import type { Metadata } from 'next';

const SITE_URL = 'https://pdfmergenext.shop';
const SLUG = 'pdf-batch-merge-100-files';

export const metadata: Metadata = {
  title: 'PDF 批量合并：100+ 文件最佳实践 | PDFMergeNext',
  description:
    '一次要合并 100 多个 PDF？先分批、再排序、最后一次成稿。本文讲清浏览器内批量合并的内存上限、命名排序陷阱和实测可行的分批策略。Merge 100+ PDFs in the browser without hitting memory limits.',
  keywords: [
    'PDF 批量合并',
    'PDF batch merge',
    '100 个 PDF 合并',
    'merge 100 pdf files',
    '大批量 PDF 处理',
    'bulk pdf merge browser',
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
    title: 'PDF 批量合并：100+ 文件最佳实践 · PDFMergeNext',
    description:
      '一次要合并 100 多个 PDF？先分批、再排序、最后一次成稿。浏览器内批量合并的内存上限与分批策略实测。',
    type: 'article',
    url: `${SITE_URL}/blog/${SLUG}`,
    siteName: 'PDFMergeNext',
    publishedTime: '2026-08-30T00:00:00.000Z',
    images: [{ url: `${SITE_URL}/og`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PDF 批量合并：100+ 文件最佳实践 · PDFMergeNext',
    description: '浏览器内合并 100+ PDF 的分批策略、内存上限与命名排序陷阱。',
    images: [`${SITE_URL}/og`],
  },
};

const FAQ = [
  {
    q: '浏览器一次最多能合并多少个 PDF？',
    a: '没有写死的数字，真正的天花板是标签页可用内存。经验值：单个文件 1-3MB、总量控制在 300MB 以内时，桌面浏览器合并 100 个文件通常一次能过；一旦总量超过 500MB，Chrome 大概率在写出阶段崩掉。所以判断标准不是"几个文件"，而是"总共多少 MB"。',
  },
  {
    q: '分批合并会不会掉页或者顺序错乱？',
    a: '只要每一批的顺序是你确认过的，分批就是安全的——PDF 合并是纯拼接，不会重新编排页面。风险出在第二步：把 10 个中间产物再合成终稿时，如果中间文件叫 part1、part2 ... part10，字典序会把 part10 排到 part2 前面。命名用 part01 这种补零写法就不会出错。',
  },
  {
    q: '100 个文件靠手动拖拽太慢，有更快的办法吗？',
    a: '不用一个一个拖。在文件管理器里全选（Ctrl+A / Cmd+A）然后整批拖进拖放区，浏览器会一次性接收全部文件。排序建议先在文件管理器里按名称或修改时间排好，再全选拖入——进来的顺序就是你看到的顺序。',
  },
  {
    q: '批量合并时文件真的没有上传吗？',
    a: '可以自己验证：按 F12 打开 DevTools → Network 面板 → 勾选 Preserve log，然后拖入 100 个文件并执行合并。如果整个过程一条 POST/PUT 请求都没有，说明处理确实发生在本地。PDFMergeNext 走的是 WebAssembly + pdf-lib 的浏览器内路径，文件不出设备。',
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
            name: 'PDF 批量合并 / PDF Batch Merge',
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
        headline: 'PDF 批量合并：100+ 文件最佳实践 / PDF Batch Merge: 100+ Files Best Practices',
        description:
          '一次要合并 100 多个 PDF？先分批、再排序、最后一次成稿。浏览器内批量合并的内存上限与分批策略。',
        author: {
          '@type': 'Organization',
          name: 'PDFMergeNext',
          url: SITE_URL,
          '@id': `${SITE_URL}/#organization`,
        },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-08-30',
        dateModified: '2026-08-30',
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
        <span>PDF 批量合并 / PDF Batch Merge</span>
      </nav>

      <h1 className="text-3xl font-bold leading-tight">
        PDF 批量合并：100+ 文件最佳实践 / PDF Batch Merge: 100+ Files Best Practices
      </h1>
      <p className="mt-2 text-sm text-fg-muted">更新于 2026-08-30 · 阅读约 6 分钟 / 6 min read</p>

      <div className="my-6 rounded-lg bg-subtle p-4 text-sm leading-relaxed">
        <strong className="block mb-1">📋 快速结论 / TL;DR</strong>
        <strong>PDF 批量合并</strong>卡住的原因基本不是文件数量，而是总体积。把 100 个文件拆成每批 10-15 个、
        每批总量压在 100MB 以内，先各自合成中间产物，最后再合一次——这条路在浏览器里最稳。
        中间文件命名一定补零（part01 而不是 part1），否则字典序会把顺序打乱。
      </div>

      <nav className="mb-8 rounded-lg border border-line p-4 text-sm">
        <strong className="block mb-2">📑 目录 / Contents</strong>
        <ul className="list-inside space-y-1">
          <li><a href="#limit" className="text-primary hover:underline">1. 真正的上限是内存，不是文件数</a></li>
          <li><a href="#batch" className="text-primary hover:underline">2. 分批策略：10-15 个一组</a></li>
          <li><a href="#order" className="text-primary hover:underline">3. 排序陷阱：补零命名</a></li>
          <li><a href="#checklist" className="text-primary hover:underline">4. 一次过的检查清单</a></li>
          <li><a href="#faq" className="text-primary hover:underline">5. 常见问题 / FAQ</a></li>
        </ul>
      </nav>

      <h2 id="limit" className="text-2xl font-semibold mt-10">1. 真正的上限是内存，不是文件数</h2>
      <p className="mt-3">
        很多人第一次做 <strong>PDF 批量合并</strong>时会问"最多能合几个"。这个问题问错了方向。
        浏览器内合并的做法是把每份 PDF 读进内存、解析页面对象、再写出一份新文档，
        所以决定成败的是<strong>总字节数</strong>，跟你手上有 40 个还是 120 个文件关系不大。
      </p>
      <p className="mt-2">
        40 份扫描件（每份 20MB）加起来 800MB，很容易在写出阶段直接把标签页顶爆；
        120 份文本型合同（每份 300KB）总共才 36MB，一次跑完毫无压力。判断前先看体积，别看数量。
      </p>
      <div className="my-5 overflow-x-auto">
        <table className="w-full text-sm border border-line">
          <thead className="bg-subtle">
            <tr>
              <th className="border border-line px-3 py-2 text-left">总体积 / Total size</th>
              <th className="border border-line px-3 py-2 text-left">建议做法 / Approach</th>
              <th className="border border-line px-3 py-2 text-left">风险 / Risk</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-line px-3 py-2">&lt; 100 MB</td>
              <td className="border border-line px-3 py-2">一次全拖进去</td>
              <td className="border border-line px-3 py-2">几乎无</td>
            </tr>
            <tr>
              <td className="border border-line px-3 py-2">100–300 MB</td>
              <td className="border border-line px-3 py-2">桌面浏览器可一次过，移动端建议分批</td>
              <td className="border border-line px-3 py-2">移动端易被系统回收标签页</td>
            </tr>
            <tr>
              <td className="border border-line px-3 py-2">300–500 MB</td>
              <td className="border border-line px-3 py-2">分 3-5 批 + 终稿合并</td>
              <td className="border border-line px-3 py-2">写出阶段可能卡顿数十秒</td>
            </tr>
            <tr>
              <td className="border border-line px-3 py-2">&gt; 500 MB</td>
              <td className="border border-line px-3 py-2">必须分批，先压缩再合并</td>
              <td className="border border-line px-3 py-2">单次合并大概率失败</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="batch" className="text-2xl font-semibold mt-10">2. 分批策略：10-15 个一组</h2>
      <p className="mt-3">
        实测比较省心的做法是<strong>两级合并</strong>：第一级把 100 个文件分成 8-10 组，每组 10-15 个、
        总量不超过 100MB，各自合出一个中间产物；第二级再把这 8-10 个中间产物合成终稿。
      </p>
      <p className="mt-2">
        为什么不是 50 个一组？因为出错时的返工成本。一组 12 个文件如果发现漏了一份，重做只要几十秒；
        一组 50 个文件重做就得重新确认顺序，痛苦得多。小批次也让你有机会中途抽查页码对不对。
      </p>
      <ul className="mt-3 space-y-1">
        <li>· 第一级：8-10 组 × 10-15 个 → part01.pdf ... part10.pdf</li>
        <li>· 中途抽查：随机打开 2 个中间产物，看首页末页是否是预期文件</li>
        <li>· 第二级：把 part01 ... part10 按顺序拖入 → final.pdf</li>
      </ul>

      <h2 id="order" className="text-2xl font-semibold mt-10">3. 排序陷阱：补零命名</h2>
      <p className="mt-3">
        这是批量合并里最常见、也最容易忽略的坑。文件管理器和拖放区多数按<strong>字典序</strong>排列，
        所以 <code>part10.pdf</code> 会排在 <code>part2.pdf</code> 前面——终稿顺序直接错乱，而且很难一眼看出来。
      </p>
      <p className="mt-2">
        解决方式很朴素：命名一律补零。<code>part01</code>、<code>part02</code> ... <code>part10</code>，
        位数对齐就没有歧义。原始文件如果是 <code>发票1.pdf</code> 这类，合并前先批量重命名成 <code>发票001.pdf</code>。
        Windows 可以用 PowerToys PowerRename，macOS 用 Finder 自带的批量重命名，都是一分钟的事。
      </p>

      <h2 id="checklist" className="text-2xl font-semibold mt-10">4. 一次过的检查清单</h2>
      <ul className="mt-3 space-y-1">
        <li>☑ 先在文件管理器里排好序，再全选整批拖入（不要一个一个拖）</li>
        <li>☑ 文件名补零对齐位数</li>
        <li>☑ 单批总量控制在 100MB 内</li>
        <li>☑ 合并前关掉其他吃内存的标签页</li>
        <li>☑ 中间产物随机抽查 2 份</li>
        <li>☑ 终稿检查总页数 = 各批页数之和</li>
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
          PDFMergeNext（pdfmergenext.shop）是一个零上传的浏览器内 PDF 合并工具：文件不离开你的设备，
          免费、无水印、不需要注册，支持 1-3,5 这样的挑页语法。批量合并可以直接从
          <a href="/" className="text-primary hover:underline">首页</a> 开始，
          更多用法和隐私说明见 <a href="/blog" className="text-primary hover:underline">博客</a>。
        </p>
        <p className="mt-2">
          PDFMergeNext (pdfmergenext.shop) merges PDFs entirely in your browser — nothing is uploaded,
          no watermark, no account. Start from the <a href="/" className="text-primary hover:underline">home page</a>,
          or read more on the <a href="/blog" className="text-primary hover:underline">blog</a>.
        </p>
      </div>
    </article>
  );
}
