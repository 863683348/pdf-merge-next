import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';
const SLUG = 'merge-pdf-mac-3-free-methods';
const TITLE = "Mac 合并 PDF：3 个免费方法 / Mac PDF Merge: 3 Free Methods";
const DESC = "Mac 上合并 PDF 不用装付费软件。Automator 快速操作、终端里的 qpdf、浏览器本地工具，三条路各自适合什么量级的活，以及哪三种情况免费方案就该换掉。";

const BODY_ZH = "Mac 上合并 PDF 要付费软件这件事，基本是 Adobe 留下的印象。macOS 自带的 Automator 就能搭一个可复用的快速操作，Homebrew 里的 qpdf 一条命令处理整个目录，浏览器本地工具则不设页数上限。三个都不花钱，也都不上传文件。差别在量级：偶尔两三个文件、每月一次的批量、以及一次几百页还带挑页的活，各自有该走的那条路。<h2>Mac 免费合并 PDF 之前，先把边界说清</h2><p>「免费」在这里指的是不付费、不上传。这三个方案里没有一个需要账号，也没有一个把文件送到别人的服务器上。Adobe Acrobat Pro 的订阅能买到的是 OCR、批量表单处理和签名工作流，单纯的拼接它并不比下面三条路强。</p><p>真正会卡住的通常是三件事：页数、顺序要不要调整、以及要不要挑页。先想清楚这三点，再挑方法，比装完工具发现不顺手再换要省时间。</p><h2>方法一：Automator 快速操作，做一次用很久</h2><p>Automator 是 macOS 自带的，做好的快速操作会长期留在访达的右键菜单里。适合每月固定要合几份材料的人。</p><ul><li>打开 Automator，新建文稿，选「快速操作」。</li><li>上方设为：工作流程收到「PDF 文件」，位于「访达」。</li><li>左侧搜「合并 PDF 页面」，拖进右侧工作区。</li><li>需要的话勾上「在合并后重新排列页面」，然后保存，起个名字比如「合并 PDF」。</li><li>之后在访达里选中多个 PDF，右键 → 快速操作 → 选中你刚存的名字。</li></ul><p>它的短板是顺序：合并顺序取决于选中文件的顺序，访达按文本排序，scan-2 会排在 scan-10 后面。要改顺序就先改名。它对超大文件也不友好，几百页的时候容易卡住。</p><h2>方法二：终端里用 qpdf，批量才是它的主场</h2><p>装一次：<code>brew install qpdf</code>。合并一条命令：<code>qpdf --empty --pages a.pdf b.pdf c.pdf -- out.pdf</code>。</p><p><code>--empty</code> 的意思是不要起始文件，只从后面列的文件里取页。要挑页就写成 <code>qpdf --empty --pages report.pdf 1-5 appendix.pdf 1-z -- out.pdf</code>。qpdf 不重新编码页面内容，输出体积基本等于输入之和，书签也会跟着过去。</p><p>批量的写法是 <code>qpdf --empty --pages *.pdf -- out.pdf</code>，配合 <code>ls</code> 或一段 for 循环就能固定住顺序。这条路的门槛是命令行，回报是可重复：写进脚本之后，下个月同样的十二份月报不用再手动拖一遍。</p><h2>方法三：浏览器本地工具，处理大文件和挑页</h2><p>用 Safari 或 Chrome 打开 <a href=\"/\">PDFMergeNext</a>，选文件、拖拽排序、合并、下载。合并跑在浏览器标签页里的 WebAssembly 上，文件不出 Mac。这条路补上了前两种的空缺：没有页数上限，排序用大号拖拽把手而不是靠文件名猜，还能直接用 1-3,5 这样的语法挑页。</p><h2>三种免费方法对比</h2><table><tr><th>方法</th><th>安装成本</th><th>页数上限</th><th>调整顺序</th><th>挑页</th><th>批量脚本</th></tr><tr><td>Automator 快速操作</td><td>零，系统自带</td><td>几百页会卡</td><td>靠改名</td><td>不支持</td><td>不支持</td></tr><tr><td>qpdf 终端命令</td><td>brew 一次</td><td>无</td><td>命令里指定</td><td>支持 1-5</td><td>支持</td></tr><tr><td>浏览器本地工具</td><td>零</td><td>无</td><td>拖拽把手</td><td>支持 1-3,5</td><td>不支持</td></tr><tr><td>在线上传网站</td><td>零</td><td>通常有</td><td>支持</td><td>部分支持</td><td>不支持</td></tr></table><p>最后一行只是为了对照：在线网站同样免费，但文件要过别人的服务器。合同、病历、带人名的材料不建议走这条路。</p><h2>三种情况下，Mac 上的免费方案就该换掉了</h2><ul><li>需要 OCR。扫描件是图片，要让文字可搜索，免费方案里只有部分命令行工具能做，Automator 和浏览器工具都不行。</li><li>需要批量处理表单字段。合并带可填写字段的 PDF 并保证字段不重名，是付费工具真正的强项。</li><li>需要审计留痕。谁在什么时候合并了哪几份文件，免费工具不记录，合规场景要另配流程。</li></ul><p>除此之外，拼接这件事本身没有付费的必要。合并前如果文件顺序总是搞错，先看<a href=\"/blog/pdf-naming-conventions-merge\">合并 PDF 的命名约定</a>；要挑页的话，语法说明在<a href=\"/blog/pdf-page-selection-1-3-5-syntax\">1-3,5 挑页合并</a>。</p>";

const BODY_EN = "A Mac PDF merge does not require paid software, though Adobe has done a good job of leaving that impression. Automator ships with macOS and builds a reusable Quick Action, qpdf from Homebrew handles a whole directory in one line, and a browser-based local tool works without a page cap. All three are free and none of them uploads anything. They differ by scale: a couple of files now and then, a batch that comes back every month, and a several-hundred-page job needing page selection each have a route that fits.<h2>What free covers when you merge PDFs on a Mac</h2><p>Free here means no payment and no upload. Not one of these three needs an account, and not one sends your files to somebody else's server. What an Acrobat Pro subscription actually buys is OCR, batch form handling and signature workflows. For plain concatenation it is not better than the three options below.</p><p>Three things decide which one to use: page count, whether the order needs adjusting, and whether you need to pick pages. Answer those first and you avoid installing a tool, finding it awkward, then starting over.</p><h2>Method 1: an Automator Quick Action you build once</h2><p>Automator comes with macOS, and a Quick Action you save stays in the Finder right-click menu. It suits anyone who merges the same set of documents every month.</p><ul><li>Open Automator, create a new document, and choose Quick Action.</li><li>Set the header to: workflow receives PDF files in Finder.</li><li>Search for Combine PDF Pages and drag it into the workflow area.</li><li>Tick the reorder option if you need it, then save under a name such as Merge PDFs.</li><li>From then on, select several PDFs in Finder, right-click, choose Quick Actions, then your saved action.</li></ul><p>Its weak point is ordering. The sequence follows the selection order, and Finder sorts names as text, so scan-2 lands after scan-10. Rename first if the order matters. It also struggles with very large files; a few hundred pages can stall it.</p><h2>Method 2: qpdf in Terminal, built for batches</h2><p>Install once with <code>brew install qpdf</code>. Merge with one line: <code>qpdf --empty --pages a.pdf b.pdf c.pdf -- out.pdf</code>.</p><p><code>--empty</code> tells qpdf to start from nothing and take pages only from the files listed after it. For page ranges, write <code>qpdf --empty --pages report.pdf 1-5 appendix.pdf 1-z -- out.pdf</code>. qpdf does not re-encode page content, so the output stays close to the sum of the inputs, and bookmarks carry across.</p><p>For a batch, <code>qpdf --empty --pages *.pdf -- out.pdf</code> combined with a short for loop pins the order down. The entry cost is the command line; the payoff is repeatability. Put it in a script and next month's twelve reports take no effort.</p><h2>Method 3: a browser-based local tool for big files and page picking</h2><p>Open <a href=\"/\">PDFMergeNext</a> in Safari or Chrome, choose your files, drag them into order, merge, download. The merge runs on WebAssembly inside the browser tab, so nothing leaves the Mac. This route fills the gaps left by the other two: no page cap, large drag handles instead of guessing from filenames, and page selection written directly as 1-3,5.</p><h2>The three free methods side by side</h2><table><tr><th>Method</th><th>Setup</th><th>Page cap</th><th>Reorder</th><th>Page picking</th><th>Scriptable</th></tr><tr><td>Automator Quick Action</td><td>None, built in</td><td>Stalls at a few hundred</td><td>By renaming</td><td>No</td><td>No</td></tr><tr><td>qpdf in Terminal</td><td>One brew install</td><td>None</td><td>Specified in the command</td><td>Yes, 1-5</td><td>Yes</td></tr><tr><td>Browser local tool</td><td>None</td><td>None</td><td>Drag handles</td><td>Yes, 1-3,5</td><td>No</td></tr><tr><td>Upload website</td><td>None</td><td>Usually capped</td><td>Yes</td><td>Partly</td><td>No</td></tr></table><p>The last row is there for comparison only. Upload sites are free too, but the files cross somebody else's server. Contracts, medical records and anything carrying names should not take that route.</p><h2>When to stop merging PDFs on Mac without Acrobat</h2><ul><li>You need OCR. A scan is an image, and making the text searchable is outside what Automator and browser tools do.</li><li>You need batch work on form fields. Merging fillable PDFs without colliding field names is where paid tools genuinely earn their price.</li><li>You need an audit trail. Free tools do not record who merged which files and when, so regulated work needs a separate process.</li></ul><p>Outside those three, concatenation is not worth paying for. If the order keeps going wrong, read <a href=\"/blog/pdf-naming-conventions-merge\">naming conventions for merging PDFs</a> first. For page selection syntax, see <a href=\"/blog/pdf-page-selection-1-3-5-syntax\">picking pages with 1-3,5</a>.</p>";

export const metadata: Metadata = {
  title: TITLE + ' | PDFMergeNext',
  description: DESC,
  keywords: [
    'Mac 合并 PDF',
    'mac pdf merge',
    'mac 免费合并 pdf',
    'mac pdf merge free',
    'merge pdf mac automator',
    'merge pdf mac terminal',
    'qpdf mac 合并 pdf',
    'merge pdf mac without acrobat',
    'macos 合并 pdf 免费',
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
    publishedTime: '2026-10-27T00:00:00.000Z',
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
  { q: "What is the free way to merge PDFs on a Mac?", a: "Three options, all free and all offline: an Automator Quick Action for recurring small jobs, qpdf in Terminal for batches and scripts, or a browser-based local tool for large files and page selection." },
  { q: "Can I merge PDFs on a Mac without Acrobat?", a: "Yes. Plain concatenation needs nothing paid. Acrobat earns its subscription on OCR, batch form field handling and signature workflows, not on merging." },
  { q: "How do I merge PDFs in Terminal on macOS?", a: "Install qpdf with brew install qpdf, then run qpdf --empty --pages a.pdf b.pdf -- out.pdf. Add page ranges such as 1-5 after a filename to pick pages." },
  { q: "Why does my merged PDF come out in the wrong order?", a: "Finder sorts filenames as text, so scan-10 comes before scan-2. Rename the files with zero padding, or specify the order explicitly in the qpdf command." },
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
        datePublished: '2026-10-27',
        dateModified: '2026-10-27',
        image: `${SITE_URL}/og`,
        url: `${SITE_URL}/blog/${SLUG}`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${SLUG}` },
      },
    ],
  };

  return (
    <article className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-16">
      <header>
        <p className="text-caption font-semibold uppercase tracking-wide text-brand">Mac 技巧 · Mac Tips</p>
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
          <h2 className="text-title font-semibold text-fg">在 Mac 上合并</h2>
          <p className="mt-2 text-fg-secondary">打开 <Link href="/" className="text-brand hover:underline">PDFMergeNext</Link>，在浏览器里完成合并，文件全程留在你的 Mac 上。</p>
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
          <Link href="/blog/merge-pdf-mac-3-methods" className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle">
            <p className="text-sm font-semibold text-fg">Mac 合并 PDF：预览与访达的三个方法</p>
            <p className="mt-1 text-xs text-fg-secondary">Merge PDF on Mac: Preview and Finder</p>
          </Link>
          <Link href="/blog/merge-pdf-linux-open-source" className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle">
            <p className="text-sm font-semibold text-fg">Linux 合并 PDF：四个开源工具怎么选</p>
            <p className="mt-1 text-xs text-fg-secondary">Linux PDF Merge: Open Source Tools</p>
          </Link>
          <Link href="/blog/pdf-naming-conventions-merge" className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle">
            <p className="text-sm font-semibold text-fg">合并 PDF 的命名约定</p>
            <p className="mt-1 text-xs text-fg-secondary">Naming Conventions for Merging</p>
          </Link>
          <Link href="/blog/pdf-page-selection-1-3-5-syntax" className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle">
            <p className="text-sm font-semibold text-fg">PDF 挑页合并：1-3,5 语法详解</p>
            <p className="mt-1 text-xs text-fg-secondary">Page Selection Syntax</p>
          </Link>
        </div>
      </section>
    </article>
  );
}
