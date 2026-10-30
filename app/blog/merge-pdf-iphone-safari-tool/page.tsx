import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';
const SLUG = 'merge-pdf-iphone-safari-tool';
const TITLE = "iPhone 合并 PDF：Safari 工具 / iPhone PDF Merge: Safari Tool";
const DESC = "iPhone 上合并 PDF 不装 App 有两条路：系统「文件」应用和 Safari 里的本地工具。这篇给出两者的页数上限、能否重排、挑页支持对照表，以及发出去之前的三项核对。";

const BODY_ZH = "<p>在 iPhone 上合并 PDF，现在不用装 App 了。多数人搜「iPhone 合并 PDF」时的处境很具体：手上有三张合同照片，只有十分钟，而且不想把扫好的护照传给一个从没听说过的服务器。最后这点最该当回事，因为免费 PDF 网站的默认动作就是上传，文件上去、合完下来，然后在别人的硬盘上按对方的保留策略躺一阵子。</p><p>有两条路能绕开上传。iOS 自带的「文件」应用就能合并，Safari 也能在标签页里用 WebAssembly 完成同样的事，和桌面浏览器用的是同一套机制。两种方式文件都留在手机上，所以隐私不是分界线。真正把两者分开的是，活儿一旦不那么简单，各自的表现就开始不一样了。</p><h2>方法一：用 iPhone「文件」应用合并</h2><p>把 PDF 放进同一个文件夹，点「选择」，逐个点选，再从分享菜单里选「创建 PDF」，合并结果就落在同一个文件夹里。不用注册，不用上传，也不用花钱。</p><p>两个限制来得很快。一是结果大约卡在 15 页，二是选中之后顺序就定了，事后没法再调整。iOS 还按文本而不是按数字排文件名，所以 page-2.pdf 会排到 page-19.pdf 后面，除非你动手之前先改了名。改名花半分钟，能省掉一次完整返工。</p><p>两三个短文件，这仍然是手机上最快的做法。超过这个量，它就不省时间了。</p><h2>方法二：用 Safari 当 iPhone 的 PDF 合并工具</h2><p>打开 Safari，进一个在本地处理文件的工具，加文件、排序、存回「文件」。<a href=\"/\">PDFMergeNext</a> 用标签页里的 WebAssembly 完成合并，文件全程不出 iPhone，断网之后标签页照样能跑。</p><p>超过 15 页、顺序需要调整、或者只要其中一部分页面时，就该走这条路。用 <a href=\"/blog/pdf-page-selection-1-3-5-syntax\">1-3,5</a> 这样的语法挑页，能直接跳过封面页和末尾那张空白扫描，不用再跑一遍。如果合并的是手机翻拍件而不是正式扫描件，先看看<a href=\"/blog/compressed-pdf-merge-quality-loss\">压缩过的 PDF 合并会掉多少质量</a>，画质问题出在扫描那一步，不在合并这一步。</p><p>屏幕就那么大，挑工具要看控件是不是按拇指排的。一根手指宽的拖拽把手，比要点两下才会动的小箭头好用得多。</p><p>只为一两次的活儿，我不再推荐 App Store 里的合并应用。这类应用多数在免费档只给两三个文件，然后就把周订阅摆到你面前，而这件事 iOS 本来就能做，这笔账不划算。</p><h2>iPhone 合并 PDF 的几种方式对比</h2><table><tr><th>方式</th><th>页数上限</th><th>能否重排</th><th>挑页</th><th>文件去哪</th><th>离线</th></tr><tr><td>「文件」应用</td><td>约 15 页</td><td>不能</td><td>不支持</td><td>留在 iPhone</td><td>可以</td></tr><tr><td>Safari 本地工具</td><td>无上限</td><td>能</td><td>支持，如 1-3,5</td><td>留在 iPhone</td><td>页面加载完后可以</td></tr><tr><td>要上传的网站</td><td>各家不同</td><td>通常能</td><td>部分支持</td><td>到你控制不了的服务器</td><td>不行</td></tr><tr><td>App Store 合并应用</td><td>常限制页数，需付费解锁</td><td>能</td><td>各家不同</td><td>取决于应用本身</td><td>部分可以</td></tr></table><p>免费和有代价不是一回事。上传那一行只是不收钱，代价是文件多了一份副本。合的是租房合同、体检表，或者任何带证件号的材料时，这份副本不算小事。</p><h2>发出去之前的三项核对</h2><ul><li>数页数。打开合并结果，把总数和预期对一下。默默少两页的失败，通常三天后才在需要它的人面前暴露。</li><li>看交界不看文件名。滑到两个源文件的衔接处，确认上下页接得上。</li><li>比体积。输出比输入之和大很多，说明中间重新编码过；小很多，说明图片又被压了一次。两种都不算错，但你要知道发生了哪一种。</li></ul><p>在 iPhone 上合并 PDF 现在已经够好用了，选工具其实只看两个数：多少页，以及顺序有多重要。剩下的都是偏好。</p>";

const BODY_EN = "<p>An iPhone PDF merge sounds like a job for an app, and for years it was. It no longer has to be. Most people looking up how to merge PDFs on iPhone have three photos of a signed contract, ten minutes, and no wish to hand a scanned passport to a server they have never heard of. That last part deserves some weight, because uploading is the default behaviour of nearly every free PDF website: the file goes up, gets merged, comes back down, and sits on someone else's disk for as long as their retention policy allows.</p><p>Two routes skip the upload entirely. iOS merges PDFs on its own through the Files app, and Safari can run the merge inside a tab using WebAssembly, the same mechanism desktop browsers rely on. Both keep the document on the phone, so privacy is not what separates them. What separates them is how each one behaves once the job stops being trivial.</p><h2>Method 1: merge PDFs with the Files app on iPhone</h2><p>Put the PDFs into one folder, tap Select, tap each file, then use the share menu and choose Create PDF. The combined document appears in the same folder. No account, no upload, nothing to pay.</p><p>Two limits show up fast. The result stops at roughly 15 pages, and the order is locked the moment you select the files, so rearranging afterwards is not possible. iOS also sorts filenames as text rather than as numbers, which puts page-2.pdf after page-19.pdf unless you renamed things first. Renaming costs half a minute and saves a complete redo.</p><p>For two or three short documents this is still the quickest option on the phone. Past that point it stops saving you time.</p><h2>Method 2: Safari as your iPhone PDF merge tool</h2><p>Open Safari, load a tool that processes files locally, add your PDFs, put them in order, and save the result back to Files. <a href=\"/\">PDFMergeNext</a> runs the merge through WebAssembly inside the tab, so the document never leaves the iPhone, and the tab keeps working after you lose signal.</p><p>This is the route to take past 15 pages, when the sequence needs fixing, or when you only want part of a file. Page selection with a syntax like <a href=\"/blog/pdf-page-selection-1-3-5-syntax\">1-3,5</a> lets you drop a cover sheet and the blank scan at the end without a second pass. If you are merging phone snapshots rather than proper scans, check <a href=\"/blog/compressed-pdf-merge-quality-loss\">how much quality a compressed PDF merge costs</a> before you start, because the merge is not what degrades the image.</p><p>The screen is small, so judge a tool by whether its controls were laid out for a thumb. A drag handle the width of a finger beats a tiny arrow you have to hit twice.</p><p>I stopped recommending App Store merge utilities for one-off jobs. Most of them give you two or three files on the free tier and then put a weekly subscription in front of you, which is a bad trade for something iOS already does.</p><h2>iPhone PDF merge options, compared</h2><table><tr><th>Option</th><th>Page limit</th><th>Reorder</th><th>Page selection</th><th>Where the file goes</th><th>Offline</th></tr><tr><td>Files app</td><td>About 15 pages</td><td>No</td><td>No</td><td>Stays on the iPhone</td><td>Yes</td></tr><tr><td>Safari local tool</td><td>None</td><td>Yes</td><td>Yes, such as 1-3,5</td><td>Stays on the iPhone</td><td>After the page loads</td></tr><tr><td>Upload-based website</td><td>Varies</td><td>Usually</td><td>Sometimes</td><td>A server you do not control</td><td>No</td></tr><tr><td>App Store merge app</td><td>Often capped behind a paywall</td><td>Yes</td><td>Varies</td><td>Depends on the app</td><td>Sometimes</td></tr></table><p>Free and harmless are not the same thing. The upload row costs no money and leaves a copy of your document somewhere else, which matters when the file is a lease, a medical form, or anything carrying an ID number.</p><h2>Three checks before the file goes anywhere</h2><ul><li>Count the pages. Open the merged file and compare the total against what you expected. A merge that quietly drops two pages tends to surface three days later, in front of whoever needed it.</li><li>Check the joins instead of the filenames. Scroll to where one source document ends and the next begins, and confirm the transition reads correctly.</li><li>Compare file size. Output much larger than the sum of the inputs means something re-encoded the pages. Output much smaller means images were compressed again. Neither is automatically wrong, but you want to know which one happened.</li></ul><p>An iPhone PDF merge works well enough these days that the choice comes down to two numbers: how many pages, and how much the order matters. Everything past that is preference.</p>";

export const metadata: Metadata = {
  title: TITLE + ' | PDFMergeNext',
  description: DESC,
  keywords: [
    'iPhone 合并 PDF',
    'iphone pdf merge',
    'merge pdf on iphone',
    'iphone pdf merge safari',
    'merge pdf on iphone without app',
    'merge pdf iphone files app',
    'iphone pdf merge free',
    'ios 合并 pdf',
    'iphone 合并 pdf 无 app',
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
    publishedTime: '2026-10-31T00:00:00.000Z',
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
        datePublished: '2026-10-31',
        dateModified: '2026-10-31',
        image: `${SITE_URL}/og`,
        url: `${SITE_URL}/blog/${SLUG}`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${SLUG}` },
      },
    ],
  };

  return (
    <article className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-16">
      <header>
        <p className="text-caption font-semibold uppercase tracking-wide text-brand">iPhone 技巧 · iOS Tips</p>
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
          <p className="mt-2 text-fg-secondary">pdfmergenext.shop 在 Safari 标签页里用 WebAssembly 完成合并，文件全程留在你的 iPhone 上，不上传、不注册。打开 <Link href="/" className="text-brand hover:underline">PDFMergeNext</Link>，选文件、排序、下载，一步都不离开本机。</p>
          <p className="mt-2 text-sm text-fg-muted">About PDFMergeNext: pdfmergenext.shop runs the merge inside your Safari tab with WebAssembly, so documents never leave the iPhone and nothing is uploaded.</p>
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
          <Link href="/blog/compressed-pdf-merge-quality-loss" className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle">
            <p className="text-sm font-semibold text-fg">压缩过的 PDF 合并会掉多少质量</p>
            <p className="mt-1 text-xs text-fg-secondary">Compressed PDF Merge Quality</p>
          </Link>
          <Link href="/blog/merge-pdf-ipad-touch-optimized" className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle">
            <p className="text-sm font-semibold text-fg">iPad 合并 PDF：触控优化</p>
            <p className="mt-1 text-xs text-fg-secondary">iPad PDF Merge: Touch Optimized</p>
          </Link>
        </div>
      </section>
    </article>
  );
}
