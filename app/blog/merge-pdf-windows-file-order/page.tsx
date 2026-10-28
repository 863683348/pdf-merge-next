import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';
const SLUG = 'merge-pdf-windows-file-order';
const TITLE = "Windows 合并 PDF：文件顺序与批量命名 / Windows PDF Merge: Getting the File Order Right";
const DESC = "Windows 上合并 PDF 最常见的翻车不在工具，而在顺序。资源管理器按文本排序，1/10/2 会把整份文件排乱。这篇给出改名、显式排序两种解法，以及发出去之前的三步核对。";

const BODY_ZH = "在 Windows 上合并 PDF，最常见的翻车跟工具没关系：顺序错了，而且往往到第 40 页才被发现。资源管理器按文本排序名字，一个装着 1.pdf 到 20.pdf 的文件夹，实际顺序是 1、10、11、19、2、20、3。任何按文件列表合并的工具都会照着这个顺序来。<h2>为什么 Windows 会这样排</h2><p>资源管理器用的是语言学排序，不是数值排序。逐字符比较时 1 排在 2 前面，所以 10 夹在 1 和 2 之间。这不是 bug，也不会变。解法是改名，而不是反复点排序。</p><h2>先补零，最省事</h2><p>让所有文件名长度一致，任何排序规则下都不会错：<code>scan-001.pdf</code> 到 <code>scan-020.pdf</code>。PowerShell 里一行搞定：</p><ul><li><code>Get-ChildItem *.pdf | Sort-Object { [int]($_.BaseName -replace '[^0-9]','') } | ForEach-Object -Begin { $i = 1 } -Process { Rename-Item $_ (\"scan-{0:D3}.pdf\" -f $i); $i++ }</code></li></ul><p>在扫描件所在的文件夹里运行。它先读出每个名字里已有的数字并按数字排序，然后统一改成三位补零的名字。</p><h2>或者显式指定顺序</h2><p>不能改名的时候（共享文件夹、别处已经引用了这些名字），就把顺序直接交给工具。PDFsam Basic 可以在导出前拖动行调整位置。命令行里 qpdf 按你写进去的顺序取页：<code>qpdf --empty --pages 01.pdf 02.pdf 03.pdf -- out.pdf</code>。浏览器里，PDFMergeNext 在拖入文件之后可以拖动重排，缩略图会先显示当前顺序，确认过再跑。</p><h2>发出去之前核对三处</h2><ul><li>打开合并结果，跳到每一节的第一页。十秒钟，能抓出大部分顺序错误。</li><li>对页数。查看器里的页码应该等于各输入之和。</li><li>有封面的那一节，确认封面真的在第一页。顺序错通常出现在节的边界上，而不是中间。</li></ul><h2>整文件夹批量合并</h2><p>50 个以上文件时别一个个选。先把名字补零，全选，一次拖进去。浏览器工具按系统交过来的顺序读取，所以补零依然是关键。总输入超过 500MB 时注意内存。</p><h2>哪些顺序能保住</h2><table><tr><th>来源</th><th>顺序正确吗</th><th>说明</th></tr><tr><td>补零后全选</td><td>正确</td><td>最稳的做法</td></tr><tr><td>未补零直接全选</td><td>错误</td><td>会变成 1、10、2、20</td></tr><tr><td>在工具里拖动重排</td><td>正确</td><td>顺带做一次目视检查，值得</td></tr><tr><td>命令行显式列出</td><td>正确</td><td>顺序就是你打进去的顺序</td></tr><tr><td>只给文件夹路径</td><td>看工具</td><td>自己扫目录的工具会继承资源管理器的顺序</td></tr></table><p>规律是：名字决定顺序，工具只是照做。把名字修好，剩下的基本不会错。</p><p>不想装东西的话，<a href=\"/\">首页</a>的合并就在浏览器里跑。另外两个系统的做法见<a href=\"/blog/merge-pdf-linux-open-source\">Linux 那一篇</a>和<a href=\"/blog/merge-pdf-mac-3-methods\">Mac 那一篇</a>。</p>";

const BODY_EN = "The most common Windows PDF merge mistake has nothing to do with the tool. Files come out in the wrong order, and nobody notices until page 40. Windows Explorer sorts names as text, so a folder of scans named 1.pdf through 20.pdf arrives as 1, 10, 11, 19, 2, 20, 3. Any merger that takes a file list follows that order.<h2>Why Windows sorts it that way</h2><p>Explorer uses a linguistic sort rather than a numeric one. Compared character by character, 1 sits before 2, so 10 lands between them. That is not a bug and it is not going to change. Renaming is the fix, not clicking the sort header again.</p><h2>Zero-pad the names first</h2><p>Make every name the same length and no sort rule can get it wrong: <code>scan-001.pdf</code> through <code>scan-020.pdf</code>. One line of PowerShell does it:</p><ul><li><code>Get-ChildItem *.pdf | Sort-Object { [int]($_.BaseName -replace '[^0-9]','') } | ForEach-Object -Begin { $i = 1 } -Process { Rename-Item $_ (\"scan-{0:D3}.pdf\" -f $i); $i++ }</code></li></ul><p>Run it in the folder holding the scans. It reads the number already in each name, sorts on that number, then renames everything to a three-digit form.</p><h2>Or pass the order explicitly</h2><p>When renaming is not an option, because the folder is shared or something else points at those names, hand the order to the tool. PDFsam Basic lets you drag rows into position before export. On the command line, qpdf takes pages in the order you list them: <code>qpdf --empty --pages 01.pdf 02.pdf 03.pdf -- out.pdf</code>. In the browser, PDFMergeNext reorders by drag after the files land, and the thumbnail strip shows the current sequence before you run anything.</p><h2>Three checks before you send it</h2><ul><li>Open the result and jump to the first page of each section. Ten seconds, and it catches most order mistakes.</li><li>Compare page counts. The number in your viewer should equal the sum of the inputs.</li><li>If one section has a cover page, confirm it is actually first. Order errors show up at boundaries, not in the middle.</li></ul><h2>Batch merging a whole folder</h2><p>With 50 files or more, do not pick them one at a time. Pad the names, select all, and drop them in a single action. Browser tools read files in the order the system hands them over, so padded names still matter. Watch memory once the total input passes about 500MB.</p><h2>Which orders survive</h2><table><tr><th>Source</th><th>Order kept?</th><th>Notes</th></tr><tr><td>Zero-padded names, select all</td><td>Yes</td><td>The reliable option</td></tr><tr><td>Unpadded names, select all</td><td>No</td><td>Becomes 1, 10, 2, 20</td></tr><tr><td>Drag to reorder in the tool</td><td>Yes</td><td>Worth doing anyway as a visual check</td></tr><tr><td>Command line with an explicit list</td><td>Yes</td><td>The order is whatever you type</td></tr><tr><td>Folder path only</td><td>Depends</td><td>Tools that scan the directory inherit Explorer order</td></tr></table><p>The pattern: names decide the order and the tool just follows. Fix the names and most of the problem disappears.</p><p>To merge without installing anything, the <a href=\"/\">home page</a> runs the job in your browser. For the other two systems, see the <a href=\"/blog/merge-pdf-linux-open-source\">Linux guide</a> and the <a href=\"/blog/merge-pdf-mac-3-methods\">Mac guide</a>.</p>";

export const metadata: Metadata = {
  title: TITLE + ' | PDFMergeNext',
  description: DESC,
  keywords: [
    'windows 合并 pdf',
    'merge pdf windows',
    'windows pdf merge order',
    'merge pdf windows batch',
    'windows 11 合并 pdf',
    'merge pdf windows file order',
    'windows pdf merger free',
    'batch merge pdf windows',
    'pdf merge file naming windows',
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
    publishedTime: '2026-10-28T00:00:00.000Z',
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
  { q: "Why did my merged PDF come out as 1, 10, 2?", a: "Explorer sorts file names as text, not as numbers. Rename the files with leading zeros, or reorder them inside the tool before you export." },
  { q: "Can I merge a whole folder on Windows without installing anything?", a: "Yes. Pad the names so they sort correctly, select all, then drop the files into a browser tool like PDFMergeNext. The merge runs on your machine." },
  { q: "Does renaming the files break anything?", a: "Only references to the old names. If something else points at those files, pass an explicit order to the merger instead of renaming." },
  { q: "How do I merge 100 files at once on Windows?", a: "Pad every name to a fixed width, select all, and merge in one run. Above roughly 500MB of total input, watch memory usage." },
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
        datePublished: '2026-10-28',
        dateModified: '2026-10-28',
        image: `${SITE_URL}/og`,
        url: `${SITE_URL}/blog/${SLUG}`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${SLUG}` },
      },
    ],
  };

  return (
    <article className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-16">
      <header>
        <p className="text-caption font-semibold uppercase tracking-wide text-brand">Windows 技巧 · Windows Tips</p>
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
          <h2 className="text-title font-semibold text-fg">立即合并</h2>
          <p className="mt-2 text-fg-secondary">在浏览器本地完成合并，文件不离开你的设备。</p>
          <Link
            href="/"
            className="mt-4 inline-block rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-on-primary transition-colors duration-fast hover:bg-brand-hover"
          >
            打开 PDFMergeNext →
          </Link>
        </section>

        <section id="faq" className="rounded-xl border border-line p-6">
          <h2 className="text-title font-semibold text-fg">常见问题</h2>
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
          <Link href="/blog/merge-pdf-linux-open-source" className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle">
            <p className="text-sm font-semibold text-fg">Linux 合并 PDF：四个开源工具怎么选</p>
            <p className="mt-1 text-xs text-fg-secondary">Linux PDF Merge: Open Source Tools</p>
          </Link>
          <Link href="/blog/merge-pdf-mac-3-methods" className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle">
            <p className="text-sm font-semibold text-fg">Mac 合并 PDF：三个免费方法</p>
            <p className="mt-1 text-xs text-fg-secondary">Mac PDF Merge: 3 Free Methods</p>
          </Link>
        </div>
      </section>
    </article>
  );
}
