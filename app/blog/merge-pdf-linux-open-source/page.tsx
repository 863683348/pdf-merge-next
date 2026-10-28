import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';
const SLUG = 'merge-pdf-linux-open-source';
const TITLE = "Linux 合并 PDF：四个开源工具怎么选 / Linux PDF Merge: Open Source Tools";
const DESC = "Linux 上合并 PDF 基本是命令行的事。qpdf、pdftk、Ghostscript、pdfunite 各自的边界在哪，哪几个会悄悄丢书签和表单字段，以及一份合并前该跑的三项检查。";

const BODY_ZH = "在 Linux 上合并 PDF，通常落在四个命令行工具里：qpdf、pdftk、Ghostscript，还有 poppler-utils 里的 pdfunite。四个都在 Debian、Fedora、Arch 的默认仓库里，也都不往任何服务器传文件。处理合同、病历、带人名材料的时候，这才是选它们的理由。<h2>为什么命令行更合适</h2><p>Linux 合并 PDF 是一条命令的事，而一条命令可以重复用。写进 shell 脚本之后，每个月同样的十二份月报不用再手动拖一遍。图形工具适合一次性操作，会反复出现的活交给命令行更省事。</p><p>第二个理由是批量。<code>for f in *.pdf; do ...</code> 扫完一个目录里 200 个文件的时间，大概只够图形界面把窗口画出来。</p><h2>qpdf：先装这个</h2><p>qpdf 是第一个该装的。主流发行版都带，它不重新编码页面内容，输出体积基本等于输入之和。</p><ul><li>安装：<code>sudo apt install qpdf</code>（Fedora 用 dnf，Arch 用 pacman）</li><li>合并：<code>qpdf --empty --pages a.pdf b.pdf c.pdf -- out.pdf</code></li><li>页码范围：<code>qpdf --empty --pages report.pdf 1-5 appendix.pdf 1-z -- out.pdf</code></li></ul><p><code>--empty</code> 的意思是不要起始文件，只从后面列出的文件里取页。另外两件事容易被忽略：源文件有书签时 qpdf 会把它们一起带过去；加 <code>--linearize</code> 得到的文件在慢网络上打开更快。输入文件损坏时，qpdf 一般会指出是哪个对象坏了，而不是默默少给你几页。</p><h2>pdftk 和 Ghostscript 分别什么时候用</h2><p>pdftk-java（原版 pdftk 已经从很多仓库里下架，这个 fork 还在维护）适合需要重排页面而不只是拼接的场景：<code>pdftk A=a.pdf B=b.pdf cat A1-3 B1 A4-end output out.pdf</code>。它还能盖章、加水印、把表单压平，这几项 qpdf 不做。</p><p>Ghostscript 是另一类东西。它会重新渲染每一页，所以 qpdf 读不进去的文件它常常能合并，代价是图片会被重新压缩，表单字段可能丢。把它当救急工具，别当默认选项：<code>gs -q -dNOPAUSE -dBATCH -sDEVICE=pdfwrite -sOutputFile=out.pdf a.pdf b.pdf</code>。</p><p>poppler 的 <code>pdfunite</code> 最小，只做一件事：<code>pdfunite a.pdf b.pdf out.pdf</code>。不涉及页码范围的时候够用。</p><h2>想要图形界面的话</h2><p>PDFArranger 和 PDFsam Basic 都能在 Linux 上跑，也都是开源。PDFArranger 更适合可视化调整：拖动页面排序、拆分、旋转，然后导出。PDFsam Basic 界面朴素一些，覆盖拆分、合并、旋转、提取。两者都不上传。</p><h2>真正会出问题的地方</h2><table><tr><th>情况</th><th>qpdf</th><th>pdftk-java</th><th>pdfunite</th><th>Ghostscript</th></tr><tr><td>输入带密码</td><td>报错，需 --password</td><td>报错，需 input_pw</td><td>报错</td><td>报错</td></tr><tr><td>可填写表单字段</td><td>保留</td><td>保留，可压平</td><td>保留</td><td>通常丢失</td></tr><tr><td>书签与目录</td><td>跨文件保留</td><td>保留</td><td>丢失</td><td>丢失</td></tr><tr><td>图像质量</td><td>不动</td><td>不动</td><td>不动</td><td>重新压缩</td></tr><tr><td>大文件（500MB 以上）</td><td>快，内存低</td><td>偏慢</td><td>快</td><td>慢，内存高</td></tr></table><p>规律很简单：输入文件本身没问题，就用 qpdf 或 pdfunite；只有遇到打不开的文件才动 Ghostscript。</p><h2>发出去之前的三项检查</h2><ul><li>对页数。<code>pdfinfo out.pdf | grep Pages</code> 的结果应该等于各输入之和。</li><li>翻到最后一页。合并失败常常是中途断掉，而文件从头看没问题。</li><li>PDF 上带签名的，合并会让签名失效。先合并，后签名。</li></ul><p>不想装东西的话，<a href=\"/\">首页</a>的合并同样在你自己机器上跑完。同事用别的系统时，可以看<a href=\"/blog/merge-pdf-windows-free-tools\">Windows 那一篇</a>和<a href=\"/blog/merge-pdf-mac-3-methods\">Mac 那一篇</a>。</p>";

const BODY_EN = "A Linux PDF merge usually lands on one of four command-line tools: qpdf, pdftk, Ghostscript, or pdfunite from poppler-utils. All four sit in the default repositories of Debian, Fedora and Arch, and none of them uploads anything. When the files are contracts, medical records or anything carrying names, that is the reason to pick them.<h2>Why the command line fits better here</h2><p>A merge on Linux is one line, and one line is repeatable. Put it in a shell script and the same twelve monthly reports take no effort next month. Desktop tools suit a one-off job; work that comes back belongs on the command line.</p><p>Batch is the second reason. A <code>for f in *.pdf; do ...</code> loop finishes a directory of 200 files in roughly the time a GUI needs to draw its window.</p><h2>qpdf: install this one first</h2><p>qpdf ships with every major distribution, does not re-encode page content, and keeps the output close to the sum of the inputs.</p><ul><li>Install: <code>sudo apt install qpdf</code> (dnf on Fedora, pacman on Arch)</li><li>Merge: <code>qpdf --empty --pages a.pdf b.pdf c.pdf -- out.pdf</code></li><li>Page ranges: <code>qpdf --empty --pages report.pdf 1-5 appendix.pdf 1-z -- out.pdf</code></li></ul><p><code>--empty</code> tells qpdf to start from nothing and take pages only from the files listed after it. Two more things get missed: qpdf carries bookmarks across when the sources have them, and <code>--linearize</code> produces a file that opens faster on a slow connection. On a damaged input it normally names the broken object rather than quietly handing you fewer pages.</p><h2>When pdftk and Ghostscript earn their place</h2><p>pdftk-java, the maintained fork now that the original left many repositories, is the one for shuffling rather than concatenating: <code>pdftk A=a.pdf B=b.pdf cat A1-3 B1 A4-end output out.pdf</code>. It also does stamps, watermarks and form flattening, none of which qpdf covers.</p><p>Ghostscript works differently. It re-renders every page, so it will merge a file qpdf refuses to read, at the cost of recompressing images and sometimes dropping form fields. Keep it for rescue work: <code>gs -q -dNOPAUSE -dBATCH -sDEVICE=pdfwrite -sOutputFile=out.pdf a.pdf b.pdf</code>.</p><p>poppler's <code>pdfunite</code> is the smallest of the four and does one job: <code>pdfunite a.pdf b.pdf out.pdf</code>. Enough until you need page ranges.</p><h2>If you want a window</h2><p>PDFArranger and PDFsam Basic both run on Linux and both are open source. PDFArranger suits visual work: drag pages into order, split, rotate, export. PDFsam Basic is plainer and covers split, merge, rotate and extract. Neither uploads.</p><h2>Where things actually break</h2><table><tr><th>Case</th><th>qpdf</th><th>pdftk-java</th><th>pdfunite</th><th>Ghostscript</th></tr><tr><td>Encrypted input</td><td>Fails, needs --password</td><td>Fails, needs input_pw</td><td>Fails</td><td>Fails</td></tr><tr><td>Fillable form fields</td><td>Kept</td><td>Kept, can flatten</td><td>Kept</td><td>Usually dropped</td></tr><tr><td>Bookmarks and outline</td><td>Kept across files</td><td>Kept</td><td>Dropped</td><td>Dropped</td></tr><tr><td>Image quality</td><td>Untouched</td><td>Untouched</td><td>Untouched</td><td>Recompressed</td></tr><tr><td>Large files (500MB+)</td><td>Fast, low memory</td><td>Slower</td><td>Fast</td><td>Slow, high memory</td></tr></table><p>The rule is short: with a healthy input, stay on qpdf or pdfunite. Open Ghostscript only when something refuses to load.</p><h2>Three checks before you send it</h2><ul><li>Count pages. <code>pdfinfo out.pdf | grep Pages</code> should equal the sum of the inputs.</li><li>Open the last page. A failed merge often stops partway while the front of the file still looks fine.</li><li>Merging invalidates an existing signature. Sign after the merge, not before.</li></ul><p>To merge without installing anything, the <a href=\"/\">home page</a> runs the same job inside your browser. For other systems, there is the <a href=\"/blog/merge-pdf-windows-free-tools\">Windows guide</a> and the <a href=\"/blog/merge-pdf-mac-3-methods\">Mac guide</a>.</p>";

export const metadata: Metadata = {
  title: TITLE + ' | PDFMergeNext',
  description: DESC,
  keywords: [
    'linux 合并 pdf',
    'merge pdf linux',
    'linux pdf merge',
    'merge pdf linux command line',
    'qpdf merge pdf',
    'pdftk linux',
    'ghostscript pdf merge',
    'pdfunite merge pdf',
    'open source pdf merger linux',
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
    publishedTime: '2026-10-29T00:00:00.000Z',
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
  { q: "What is the simplest way to merge PDFs on Linux?", a: "qpdf --empty --pages a.pdf b.pdf -- out.pdf. qpdf is in the default repositories of Debian, Ubuntu, Fedora and Arch, and it does not re-encode your pages." },
  { q: "Does a command-line merge keep bookmarks?", a: "qpdf and pdftk-java keep the outline from each source file. pdfunite and Ghostscript drop it. If navigation matters, use qpdf." },
  { q: "Can I merge encrypted PDFs on Linux?", a: "Only with the password, passed as --password= for qpdf or input_pw for pdftk. A file that is permission-restricted but has no open password can usually be read directly." },
  { q: "Is there an offline GUI for merging PDFs on Linux?", a: "PDFArranger and PDFsam Basic. Both are open source, both run locally, and both let you reorder pages by dragging before export." },
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
        datePublished: '2026-10-29',
        dateModified: '2026-10-29',
        image: `${SITE_URL}/og`,
        url: `${SITE_URL}/blog/${SLUG}`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${SLUG}` },
      },
    ],
  };

  return (
    <article className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-16">
      <header>
        <p className="text-caption font-semibold uppercase tracking-wide text-brand">Linux 技巧 · Linux Tips</p>
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
          <Link href="/blog/merge-pdf-windows-free-tools" className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle">
            <p className="text-sm font-semibold text-fg">Windows 合并 PDF：免费工具指南</p>
            <p className="mt-1 text-xs text-fg-secondary">Merge PDF on Windows: Free Tools</p>
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
