import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';
const SLUG = 'merge-pdf-ipad-touch-optimized';
const TITLE = "iPad 合并 PDF：触控优化 / iPad PDF Merge: Touch Optimized";
const DESC = "iPad 上合并 PDF 真正的难点不在合并，而在用指头给十几个文件排序。这篇给出两条可行路径、一条 15 页硬限制、一张场景对照表，以及发出去之前的三项核对。";

const BODY_ZH = "在 iPad 上合并 PDF，前两分钟和在电脑上没区别，区别出现在你要用指头给十二个文件排序的时候。触控改了两件事：点小目标不如鼠标准，长列表里拖动一项很慢。iPadOS 上的合并本身只要几秒，时间全花在把页码排对，所以挑路径的标准是「留下最少的重排工作」。<h2>iPad 合并 PDF 时，触控到底改了什么</h2><p>电脑上的文件对话框是一张能排序的列表，iPadOS 给你的是一网格的方块，顺序就是文件当前的排列顺序。扫描件如果叫 scan-1、scan-10、scan-2，网格就按这个顺序显示，因为 iPadOS 按文本而不是按数字排序。开工前先把文件改名，比事后调整顺序快得多。</p><p>第二个差别是点击目标的大小。需要精确点击的操作，比如从五十页里挑出其中一页，用 Apple Pencil 比用手指舒服，而如果工具本身就是按触屏排版的，就更好办。</p><h2>方法一：用 iPad「文件」应用合并，不用装任何东西</h2><p>系统自带的「文件」应用就能完成合并，不需要下载任何东西。把 PDF 存进同一个文件夹，点右上角「选择」，逐个点选，再点「⋯」→「创建 PDF」，结果会落在同一个文件夹里。</p><p>两个限制要记住。一是合并结果大约卡在 15 页，二是选中之后没法再调整顺序，点下「创建 PDF」的那一刻顺序就定了。两三个短文件这么干没问题，再长就不合适。iPadOS 上用「文件」应用合并也不会重新编码页面，画质不变。</p><h2>方法二：iPad 上不装 App 的 Safari 合并方案</h2><p>打开 Safari，进入一个在设备本地处理文件的工具，选文件、排序、下载。<a href=\"/\">PDFMergeNext</a> 用浏览器标签页里的 WebAssembly 完成合并，文件不出 iPad，断网之后标签页照样能跑。上一条方法的两个限制这里都没有：没有页数上限，也能在合并之前重排，或者用 1-3,5 这样的语法挑页。</p><p>触屏上真正要挑的是排序这一步。选那种有大号拖拽把手、而不是要点两下才会动的工具，还要有能显示每个文件首页的预览。靠文件名排序基本等于猜。</p><h2>iPadOS 合并 PDF 的三种场景对照</h2><table><tr><th>场景</th><th>文件应用</th><th>浏览器本地工具</th></tr><tr><td>两三个短 PDF</td><td>最快</td><td>能用，点击偏多</td></tr><tr><td>超过 15 页</td><td>卡在上限</td><td>无上限</td></tr><tr><td>选中后重排</td><td>不支持</td><td>拖拽把手</td></tr><tr><td>挑页，如 1-3,5</td><td>不支持</td><td>支持</td></tr><tr><td>合同或带人名的材料</td><td>留在设备上</td><td>留在设备上</td></tr><tr><td>断网环境</td><td>可用</td><td>页面加载完后可用</td></tr></table><p>两种方式文件都留在 iPad 上，差别在于你能对顺序和页码有多少控制权。页数少、顺序确定，就用系统自带的；页数多或者要挑页，剩下的那条路更省时间。</p><h2>触屏下的三项核对：iPad PDF 合并最容易漏的地方</h2><ul><li>数页数。打开合并结果把总数和预期对一下。默默少几页的失败，通常三天后才会被发现。</li><li>按页而不是按文件名核对顺序。滑到两个源文件的交界处，确认衔接是对的。</li><li>看体积。输出比输入之和大很多，说明中间重新编码过；小很多，说明图片被重新压缩了。两种都不算错，但你要知道发生了哪一种。</li></ul><p>如果合并的是手机翻拍出来的扫描件，先看<a href=\"/blog/compressed-pdf-merge-quality-loss\">压缩过的 PDF 合并会掉多少质量</a>。合并这一步不损伤画质，扫描件本身才会。要挑页的话，语法说明在<a href=\"/blog/pdf-page-selection-1-3-5-syntax\">1-3,5 挑页合并</a>。</p>";

const BODY_EN = "An iPad PDF merge looks like the same job you do on a laptop, right up to the moment you try to reorder twelve files with a fingertip. Touch changes two things: tapping a small target is less precise than clicking one, and dragging an item through a long list is slow. The merge itself takes seconds on iPadOS. The time goes into getting the pages in the right order, so pick the path that leaves you with the least reordering to do. Below are two working methods, the page cap that trips people up, a table for choosing between them, and three checks that catch the mistakes a finger makes.<h2>What touch changes about an iPad PDF merge</h2><p>A desktop file dialog gives you a sortable list. iPadOS gives you a grid of tiles, and the order is whatever order the files happen to sit in. If your scans are named scan-1, scan-10 and scan-2, the grid shows them in that order too, because iPadOS sorts filenames as text rather than as numbers. Renaming the files before you start is faster than fixing the sequence afterwards.</p><p>The second difference is target size. Anything needing a precise tap, such as pulling one page out of a fifty page document, is easier with an Apple Pencil than a fingertip, and easier still if the tool was laid out for a screen you touch.</p><h2>Method 1: merge PDFs with the Files app on iPad, no install needed</h2><p>The built-in Files app does the whole job. Put the PDFs in one folder, tap Select, tap each file, then tap the more menu and choose Create PDF. The result lands in the same folder.</p><p>Two limits matter. The combined document stops at roughly 15 pages, and you cannot reorder files after selecting them, so the sequence is fixed the moment you tap Create PDF. For two or three short documents that is fine. For anything longer it is not. Merging through Files on iPadOS also leaves the pages untouched, with no recompression.</p><h2>Method 2: merge PDF on iPad without an app, in Safari</h2><p>Open Safari, go to a tool that processes files on the device, choose your PDFs, arrange them, and download. <a href=\"/\">PDFMergeNext</a> runs the merge through WebAssembly inside the browser tab, so nothing leaves the iPad and the tab keeps working after the network drops. Both limits from the method above disappear: no page cap, and you can reorder or pick page ranges such as 1-3,5 before committing.</p><p>On a touch screen the ordering step is the part worth judging. Look for large drag handles rather than a list you have to tap twice, and for a preview showing the first page of each file. Reordering by filename is guesswork.</p><h2>Which iPadOS PDF merge path fits which job</h2><table><tr><th>Job</th><th>Files app</th><th>Browser local tool</th></tr><tr><td>Two or three short PDFs</td><td>Fastest</td><td>Works, more taps</td></tr><tr><td>More than 15 pages</td><td>Hits the cap</td><td>No cap</td></tr><tr><td>Reordering after selecting</td><td>Not supported</td><td>Drag handles</td></tr><tr><td>Page selection, such as 1-3,5</td><td>Not supported</td><td>Supported</td></tr><tr><td>Contracts or files carrying names</td><td>Stays on the device</td><td>Stays on the device</td></tr><tr><td>Offline</td><td>Works</td><td>Works once the page has loaded</td></tr></table><p>Both routes keep the file on the iPad. The difference is how much control you get over the sequence and the page range. Short job with a known order, use the built-in one. Long job or anything needing page selection, the other one saves time.</p><h2>Three touch screen checks before the file goes out</h2><ul><li>Count the pages. Open the merged file and check the total against what you expected. A merge that quietly drops pages is the failure you notice three days later.</li><li>Check the order at page level, not filename level. Scroll to the boundary between two source files and confirm the transition reads correctly.</li><li>Check the size. Output much larger than the inputs combined means something was re-encoded; much smaller means images were recompressed. Neither is wrong, but you want to know which one happened.</li></ul><p>If you are merging scans taken with a phone, read <a href=\"/blog/compressed-pdf-merge-quality-loss\">how much quality a compressed PDF merge costs</a> first. The merge step does not degrade anything, a bad scan does. For page selection syntax, see <a href=\"/blog/pdf-page-selection-1-3-5-syntax\">picking pages with 1-3,5</a>.</p>";

export const metadata: Metadata = {
  title: TITLE + ' | PDFMergeNext',
  description: DESC,
  keywords: [
    'iPad PDF 合并',
    'ipad pdf merge',
    'merge pdf on ipad',
    'merge pdf ipad files app',
    'merge pdf on ipad without app',
    'ipados 合并 pdf',
    'ipad pdf merge touch',
    'ipad 合并 pdf 触控',
    'apple pencil 合并 pdf',
    'PDFMergeNext',
  ],
  alternates: {
    canonical: '/blog/' + SLUG,
    languages: {
      'zh-CN': '/blog/' + SLUG,
      'en-US': '/blog/' + SLUG,
      'x-default': '/blog/' + SLUG,
    },
  },
  openGraph: {
    title: TITLE,
    description: DESC,
    type: 'article',
    url: `${SITE_URL}/blog/${SLUG}`,
    siteName: 'PDFMergeNext',
    publishedTime: '2026-10-30T00:00:00.000Z',
    images: [{ url: `${SITE_URL}/og`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
    images: [`${SITE_URL}/og`],
  },
};

const FAQ = [
  { q: "How do I merge PDFs on iPad without installing an app?", a: "Use the built-in Files app for short jobs: put the PDFs in one folder, tap Select, choose them, then tap the more menu and Create PDF. For more than 15 pages or page selection, open a browser-based local tool in Safari." },
  { q: "Is there a page limit for merging PDFs on iPadOS?", a: "The Files app route stops at roughly 15 pages. A browser-based local tool has no cap, because the merge runs inside the tab rather than through the system shortcut." },
  { q: "Can I reorder files after selecting them?", a: "Not in the Files app, where the order is fixed the moment you tap Create PDF. Browser tools with drag handles let you rearrange and preview each file before you merge." },
  { q: "Does merging on iPad reduce PDF quality?", a: "No. Merging copies page objects from the source files without re-encoding them. Quality loss comes from a coarse scan, or from a compression step applied before the merge." },
];

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '首页', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: '博客', item: `${SITE_URL}/blog` },
          { '@type': 'ListItem', position: 3, name: TITLE, item: `${SITE_URL}/blog/${SLUG}` },
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
        headline: TITLE,
        description: DESC,
        author: { '@type': 'Person', name: 'PDFMergeNext', url: SITE_URL },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-10-30',
        dateModified: '2026-10-30',
        image: `${SITE_URL}/og`,
        url: `${SITE_URL}/blog/${SLUG}`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${SLUG}` },
      },
    ],
  };

  return (
    <article className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-16">
      <header>
        <p className="text-caption font-semibold uppercase tracking-wide text-brand">iPad 技巧 · iPad Tips</p>
        <h1 className="mt-2 text-h1 font-bold tracking-tight text-fg">{TITLE}</h1>
        <p className="mt-3 text-body text-fg-secondary">{DESC}</p>
        <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-subtle px-3 py-1 text-caption font-medium text-fg-muted">
          阅读约 6 分钟 · 6 min read
        </p>
      </header>

      <div className="mt-8 space-y-6 text-body text-fg">
        <div
          className="space-y-4 text-fg-secondary [&_h2]:mt-6 [&_h2]:text-title [&_h2]:font-semibold [&_h2]:text-fg [&_ul]:list-disc [&_ul]:pl-5 [&_table]:w-full [&_table]:text-sm [&_td]:py-2 [&_th]:py-2 [&_th]:text-left [&_a]:text-brand [&_a]:underline"
          dangerouslySetInnerHTML={{ __html: BODY_ZH }}
        />

        <section className="rounded-xl border border-line p-6">
          <h2 className="text-title font-semibold text-fg">English version</h2>
          <div
            className="mt-4 space-y-4 text-fg-secondary [&_h2]:mt-6 [&_h2]:text-title [&_h2]:font-semibold [&_h2]:text-fg [&_ul]:list-disc [&_ul]:pl-5 [&_table]:w-full [&_table]:text-sm [&_td]:py-2 [&_th]:py-2 [&_th]:text-left [&_a]:text-brand [&_a]:underline"
            dangerouslySetInnerHTML={{ __html: BODY_EN }}
          />
        </section>

        <section className="rounded-xl border border-line bg-subtle p-6">
          <h2 className="text-title font-semibold text-fg">在 iPad 上合并</h2>
          <p className="mt-2 text-fg-secondary">打开 <Link href="/" className="text-brand hover:underline">PDFMergeNext</Link>，在 Safari 里完成合并，文件全程留在你的 iPad 上。</p>
          <Link
            href="/"
            className="mt-4 inline-block rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-on-primary transition-colors duration-fast hover:bg-brand-hover"
          >
            打开 PDFMergeNext →
          </Link>
        </section>

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

      <section className="mx-auto mt-12 max-w-content px-4 sm:px-6">
        <h2 className="text-title font-semibold text-fg">相关阅读 / Related</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Link href="/blog/merge-pdf-iphone-safari" className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle">
            <p className="text-sm font-semibold text-fg">iPhone 合并 PDF：Safari 完整教程</p>
            <p className="mt-1 text-xs text-fg-secondary">Merge PDF on iPhone: Safari Guide</p>
          </Link>
          <Link href="/blog/merge-pdf-on-mobile" className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle">
            <p className="text-sm font-semibold text-fg">手机合并 PDF：iOS / Android 教程</p>
            <p className="mt-1 text-xs text-fg-secondary">Merge PDF on Mobile</p>
          </Link>
          <Link href="/blog/pdf-page-selection-1-3-5-syntax" className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle">
            <p className="text-sm font-semibold text-fg">PDF 挑页合并：1-3,5 语法详解</p>
            <p className="mt-1 text-xs text-fg-secondary">Page Selection Syntax</p>
          </Link>
          <Link href="/blog/drag-sort-pdf-pro-tips" className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle">
            <p className="text-sm font-semibold text-fg">拖拽排序 PDF：进阶技巧</p>
            <p className="mt-1 text-xs text-fg-secondary">Drag to Sort: Pro Tips</p>
          </Link>
        </div>
      </section>
    </article>
  );
}
