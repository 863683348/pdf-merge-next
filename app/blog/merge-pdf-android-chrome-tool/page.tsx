import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';
const SLUG = 'merge-pdf-android-chrome-tool';
const TITLE = "Android PDF 合并：Chrome 教程 / Android PDF Merge: Chrome Tutorial";
const DESC = "Android 上合并 PDF 用 Chrome 就够了。这篇给出 Chrome 本地工具与厂商文件应用两条路、各自的页数上限与能否重排对照表、挑页与排序这两步最省时间的做法，以及发出去之前的三项核对。";

const BODY_ZH = "<p>在 Android 上做 Android PDF 合并，最省事的路径其实已经装在手机里了：Chrome。多数人搜「Android PDF 合并」时的处境很相似，手上有几张合同照片或者一份今天要交的报销件，只有几分钟，而且不想把带身份证号的材料传到一个从没听说过的服务器。最后这点值得当回事，因为免费 PDF 网站的默认动作就是上传，文件上去、合完下来，然后在别人的硬盘上按对方的保留策略躺一阵子。</p><p>两条路都不上传，隐私这一项打平。活儿一旦不那么简单，两者的表现就开始分叉：页数、合并之后还能不能改顺序、能不能只挑其中几页，才是真正决定你选哪个的因素。</p><h2>方法一：用 Chrome 在 Android 上合并 PDF</h2><p>打开 Chrome，进一个在本地处理文件的工具，点选择文件，从「下载」或文件管理里挑，排成想要的顺序，合并，再存回手机。不用注册，不用上传，也不用花钱。<a href=\"/\">PDFMergeNext</a> 就是在 Chrome 标签页里用 WebAssembly 完成合并，文件全程不出设备，页面加载完之后断网也能跑完。</p><p>Android 上最容易出错的一步是选文件。系统选择器按最近使用排序，不是按文件名，所以你以为排在第一的那个文件往往不是第一个。花十秒在列表里把顺序过一遍，比重跑一次合并划算。</p><p>合并结果会落进「下载」目录，Android 14 之后部分机型会先弹一次权限确认。第一次用别点太快，否则会花上好一阵子找输出文件。</p><h2>方法二：系统自带方式与 Google Drive</h2><p>Google Drive 本身没有合并 PDF 的功能，别在这上面耗时间。部分厂商的文件应用带了合并入口，小米、三星、OPPO 的新版本里能找到，位置一般在「工具」里，或者长按多选之后的菜单里。</p><p>这类自带入口有两个共同边界：页数通常卡在十几页，选中之后顺序就定了，事后没法调整。两三个短文件的话它仍然是手机上最快的办法，超过这个量它就不省时间了。</p><h2>Android 合并 PDF 的几种方式对比</h2><table><tr><th>方式</th><th>页数上限</th><th>能否重排</th><th>挑页</th><th>文件去哪</th><th>离线</th></tr><tr><td>Chrome 本地工具</td><td>无上限</td><td>能</td><td>支持，如 1-3,5</td><td>留在手机</td><td>页面加载完后可以</td></tr><tr><td>厂商文件应用</td><td>约十几页</td><td>不能</td><td>不支持</td><td>留在手机</td><td>可以</td></tr><tr><td>要上传的网站</td><td>各家不同</td><td>通常能</td><td>部分支持</td><td>到你控制不了的服务器</td><td>不行</td></tr><tr><td>Play 商店合并应用</td><td>常限制页数，需付费解锁</td><td>能</td><td>各家不同</td><td>取决于应用本身</td><td>部分可以</td></tr></table><p>免费和有代价是两件事。上传那一行只是不收钱，代价是文件多了一份副本。合的是租房合同、体检表，或者任何带证件号的材料时，这份副本不算小事。</p><h2>挑页与排序：Android 上最省时间的两步</h2><p>在手机上给十几个文件重排是件难受的事，能跳过的部分就跳过。用<a href=\"/blog/pdf-page-selection-1-3-5-syntax\">1-3,5</a> 这样的语法挑页，一次就略过封面页和末尾那张空白扫描，比合完再删快得多。</p><p>顺序有要求的话，先动手之前把名字改好。Android 的文件选择器按文本排序，page-2.pdf 会排到 page-19.pdf 后面，除非你按<a href=\"/blog/pdf-naming-conventions-merge\">补零的命名规则</a>改过名。改名花半分钟，能省掉一次完整返工。</p><h2>发出去之前的三项核对</h2><ul><li>数页数。打开合并结果，把总数和预期对一下。默默少两页的失败，通常三天后才在需要它的人面前暴露。</li><li>看交界不看文件名。滑到两个源文件的衔接处，确认上下页接得上。</li><li>比体积。输出比输入之和大很多，说明中间重新编码过；小很多，说明图片又被压了一次。两种都不算错，但你要知道发生了哪一种。</li></ul><p>在 Android 上合并 PDF 现在只看两个数：多少页，以及顺序有多重要。剩下的都是偏好。pdfmergenext.shop 在 Chrome 标签页里跑完整个过程，不上传也不注册，具体选项见<a href=\"/pricing\">定价页</a>，其余思路见<a href=\"/blog\">博客</a>。</p>";

const BODY_EN = "<p>An Android PDF merge does not need an app from Play Store. The browser already on the phone handles it. Most people looking up how to merge PDFs on Android are in the same spot: a few photos of a signed contract, or an expense report due today, a couple of minutes, and no wish to hand a document carrying an ID number to a server they have never heard of. That last part deserves some weight, because uploading is the default behaviour of nearly every free PDF website. The file goes up, gets merged, comes back down, and then sits on someone else's disk for as long as their retention policy allows.</p><p>Neither route uploads anything, so privacy is a tie between them. What separates them is how each behaves once the job stops being trivial: page count, whether the order can still be changed afterwards, and whether you can merge only some of the pages.</p><h2>Method 1: merge PDFs in Chrome on Android</h2><p>Open Chrome, load a tool that processes files locally, tap to choose files, pick them from Downloads or from the file manager, put them in the order you want, merge, and save the result back to the phone. No account and no upload, and it costs nothing. <a href=\"/\">PDFMergeNext</a> runs the merge through WebAssembly inside the tab, so the document never leaves the device, and the tab keeps working after you lose signal.</p><p>The step that trips people up on Android is choosing files. The system picker lists them by recent use rather than by name, so the file you assume is first usually is not. Ten seconds spent checking the order in the list is cheaper than running the merge twice.</p><p>Output lands in the Downloads folder, and on some Android 14 builds a permission prompt shows up first. Do not tap through it on your first run, or you will spend a while hunting for the result.</p><h2>Method 2: built-in file managers and Google Drive</h2><p>Google Drive has no PDF merge of its own, so do not spend time hunting for one. Some manufacturer file managers include it. Recent versions from Xiaomi, Samsung and OPPO have an entry under tools, or in the menu that appears after a long-press multi-select.</p><p>Those built-in options share two limits. The result stops at roughly a dozen pages, and the order is locked once you confirm the selection. For two or three short documents it is still the quickest thing on the phone. Past that it stops saving time.</p><h2>Ways to merge PDFs on Android, compared</h2><table><tr><th>Method</th><th>Page limit</th><th>Reorder</th><th>Page selection</th><th>Where the file goes</th><th>Offline</th></tr><tr><td>Local tool in Chrome</td><td>No cap</td><td>Yes</td><td>Yes, as 1-3,5</td><td>Stays on the phone</td><td>Yes, once loaded</td></tr><tr><td>Manufacturer file manager</td><td>Roughly a dozen</td><td>No</td><td>No</td><td>Stays on the phone</td><td>Yes</td></tr><tr><td>Sites that upload</td><td>Varies</td><td>Usually</td><td>Partly</td><td>To a server you do not control</td><td>No</td></tr><tr><td>Play Store merge apps</td><td>Often capped behind a paywall</td><td>Yes</td><td>Varies</td><td>Depends on the app</td><td>Sometimes</td></tr></table><p>Free and harmless are two different things. The upload row costs no money and leaves a copy of your document somewhere else, which matters when the file is a lease, a medical form, or anything carrying an ID number.</p><h2>Page selection and ordering: the two steps that save the most time on Android</h2><p>Reordering a dozen files on a phone is unpleasant, so skip whatever can be skipped. Selecting pages with a syntax like <a href=\"/blog/pdf-page-selection-1-3-5-syntax\">1-3,5</a> drops the cover sheet and the blank scan at the end in one pass, which beats merging everything and deleting pages afterwards.</p><p>If the order matters, rename the files first. Android file pickers sort names as text, so page-2.pdf lands after page-19.pdf unless you renamed things using <a href=\"/blog/pdf-naming-conventions-merge\">the zero-padded naming convention</a>. Renaming takes half a minute and saves a complete redo.</p><h2>Three checks before the file goes anywhere</h2><ul><li>Count the pages. Open the merged file and compare the total against what you expected. A merge that quietly drops two pages tends to surface three days later, in front of whoever needed it.</li><li>Check the joins instead of the filenames. Scroll to where one source document ends and the next begins, and confirm the transition reads correctly.</li><li>Compare file size. Output much larger than the sum of the inputs means something re-encoded the pages. Output much smaller means images were compressed again. Neither is automatically wrong, but you want to know which one happened.</li></ul><p>An Android PDF merge comes down to two numbers: how many pages, and how much the order matters. Everything past that is preference. pdfmergenext.shop runs the whole thing inside a Chrome tab with no upload and no signup. The options are on <a href=\"/pricing\">the pricing page</a> and the rest of the write-ups are in <a href=\"/blog\">the blog</a>.</p>";

export const metadata: Metadata = {
  title: TITLE + ' | PDFMergeNext',
  description: DESC,
  keywords: [
    "Android PDF 合并",
    "android pdf merge",
    "merge pdf on android",
    "merge pdf android chrome",
    "android pdf merge without app",
    "merge pdf android free",
    "android 合并 pdf chrome",
    "chrome 合并 pdf",
    "android pdf merge offline",
    "PDFMergeNext",
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
    publishedTime: '2026-11-01T00:00:00.000Z',
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
  { q: "How do I merge PDFs on Android without installing an app?", a: "Open Chrome and load a tool that processes files locally. Choose the PDFs, sort them, merge, and save the result to Downloads. Nothing is uploaded, and the tab keeps working after the page has loaded." },
  { q: "Is there a page limit when merging PDFs on Android?", a: "Built-in manufacturer tools stop at roughly a dozen pages. A local tool running in Chrome has no cap, because the merge happens inside the tab rather than through a system shortcut." },
  { q: "Can I reorder the files after selecting them?", a: "Not in the built-in file manager, where the order is set the moment you confirm the selection. A browser tool with drag handles lets you rearrange and preview each file before merging." },
  { q: "Does merging PDFs on Android reduce quality?", a: "No. Merging copies page objects from the source files without re-encoding them. Quality loss comes from a coarse scan, or from a compression step applied before the merge." },
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
        datePublished: '2026-11-01',
        dateModified: '2026-11-01',
        image: `${SITE_URL}/og`,
        url: `${SITE_URL}/blog/${SLUG}`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${SLUG}` },
      },
    ],
  };

  return (
    <article className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-16">
      <header>
        <p className="text-caption font-semibold uppercase tracking-wide text-brand">Android 技巧 · Chrome Tips</p>
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
          <h2 className="text-title font-semibold text-fg">关于 PDFMergeNext</h2>
          <p className="mt-2 text-fg-secondary">pdfmergenext.shop 在 Chrome 标签页里用 WebAssembly 完成合并，文件全程留在你的 Android 设备上，不上传、不注册。打开 <Link href="/" className="text-brand hover:underline">PDFMergeNext</Link>，选文件、排序、下载，一步都不离开本机。浏览器 PDF 工具的整体取舍见 <Link href="/blog/browser-pdf-merge-privacy" className="text-brand hover:underline">浏览器合并 PDF 的隐私边界</Link>。</p>
          <p className="mt-2 text-sm text-fg-muted">About PDFMergeNext: pdfmergenext.shop runs the merge inside your Chrome tab with WebAssembly, so documents never leave the Android device and nothing is uploaded.</p>
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
          <Link href="/blog/merge-pdf-on-mobile" className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle">
            <p className="text-sm font-semibold text-fg">手机合并 PDF：iOS / Android 教程</p>
            <p className="mt-1 text-xs text-fg-secondary">Merge PDF on Mobile</p>
          </Link>
          <Link href="/blog/pdf-page-selection-1-3-5-syntax" className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle">
            <p className="text-sm font-semibold text-fg">PDF 挑页合并：1-3,5 语法详解</p>
            <p className="mt-1 text-xs text-fg-secondary">Page Selection Syntax</p>
          </Link>
          <Link href="/blog/pdf-naming-conventions-merge" className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle">
            <p className="text-sm font-semibold text-fg">PDF 合并前的命名规则：按数字排序</p>
            <p className="mt-1 text-xs text-fg-secondary">Naming Conventions for Merge</p>
          </Link>
          <Link href="/blog/merge-pdf-iphone-safari-tool" className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle">
            <p className="text-sm font-semibold text-fg">iPhone 合并 PDF：Safari 工具</p>
            <p className="mt-1 text-xs text-fg-secondary">iPhone PDF Merge: Safari Tool</p>
          </Link>
        </div>
      </section>
    </article>
  );
}
