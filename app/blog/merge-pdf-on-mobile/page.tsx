import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';

export const metadata: Metadata = {
  title: '手机合并PDF：iOS/Android 完整教程 / Merge PDF on Mobile: iOS/Android | PDFMergeNext',
  description:
    '手机上怎么合并PDF？iOS（Safari）和 Android（Chrome）都能用浏览器本地工具完成——文件不上传、不装 App、不挑网络。含分步教程、方案对比与手机端限制。',
  keywords: [
    '手机合并pdf',
    'ios 合并pdf',
    'android 合并pdf',
    '手机 pdf 合并',
    'iphone 合并pdf',
    'merge pdf on mobile',
    'merge pdf iphone',
    'merge pdf android',
    'pdf merge mobile',
  ],
  alternates: {
    canonical: '/blog/merge-pdf-on-mobile',
    languages: {
      'zh-CN': '/blog/merge-pdf-on-mobile',
      'en-US': '/blog/merge-pdf-on-mobile',
      'x-default': '/blog/merge-pdf-on-mobile',
    },
  },
  openGraph: {
    title: '手机合并PDF：iOS/Android 完整教程 · PDFMergeNext',
    description: '用手机浏览器本地合并 PDF，文件不上传、不装 App、可断网。含 iOS/Android 分步教程与方案对比。',
    url: `${SITE_URL}/blog/merge-pdf-on-mobile`,
    type: 'article',
    publishedTime: '2026-08-19T00:00:00.000Z',
    authors: ['PDFMergeNext'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '手机合并PDF：iOS/Android 完整教程 · PDFMergeNext',
    description: '用手机浏览器本地合并 PDF，文件不上传、不装 App、可断网。',
  },
};

// 文章级 FAQ：覆盖本文 PAA 长尾词，配 FAQPage schema 抢精选摘要。
const ARTICLE_FAQ: { q: string; a: string }[] = [
  {
    q: '手机浏览器合并 PDF 安全吗？',
    a: '用本地工具就安全。PDFMergeNext 在浏览器里用 pdf.js 解析、pdf-lib 重组，整个过程不发起任何上传请求，文件始终留在你的设备上。iOS 的 Safari 和 Android 的 Chrome 都支持。',
  },
  {
    q: 'Is it safe to merge PDFs in a mobile browser?',
    a: 'Yes, if the tool runs locally. PDFMergeNext parses with pdf.js and rebuilds with pdf-lib entirely in the browser, so no upload request is ever made and your files stay on your device. Both iOS Safari and Android Chrome are supported.',
  },
  {
    q: 'iOS 和 Android 上的操作步骤一样吗？',
    a: '基本一样：打开网页、选 PDF、拖拽排序、点合并、下载。差别主要在"从哪选文件"——iOS 多从"文件"App 或隔空投送进入，Android 多从相册或文件管理器进入。合并逻辑完全一致。',
  },
  {
    q: 'Do iOS and Android work the same way?',
    a: 'Almost exactly the same: open the page, pick your PDFs, drag to reorder, hit Merge, download. The only real difference is where you pick files from — iOS pulls from the Files app or AirDrop, Android from the gallery or file manager. The merge step is identical.',
  },
];

const TOC = [
  { id: 'lead', label: '一句话结论 / TL;DR' },
  { id: 'why-mobile', label: '为什么在手机上合并' },
  { id: 'ios', label: 'iOS（Safari）步骤' },
  { id: 'android', label: 'Android（Chrome）步骤' },
  { id: 'compare', label: '三种手机方案对比' },
  { id: 'limits', label: '手机端的限制' },
  { id: 'tips', label: '几个实用小技巧' },
  { id: 'faq', label: '常见问题' },
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
          {
            '@type': 'ListItem',
            position: 3,
            name: '手机合并PDF：iOS/Android 完整教程',
            item: `${SITE_URL}/blog/merge-pdf-on-mobile`,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: ARTICLE_FAQ.map((it) => ({
          '@type': 'Question',
          name: it.q,
          acceptedAnswer: { '@type': 'Answer', text: it.a },
        })),
      },
      {
        '@type': 'Article',
        headline: '手机合并PDF：iOS/Android 完整教程 / Merge PDF on Mobile: iOS/Android',
        description:
          '手机上怎么合并PDF？iOS（Safari）和 Android（Chrome）都能用浏览器本地工具完成——文件不上传、不装 App、不挑网络。含分步教程、方案对比与手机端限制。',
        author: { '@type': 'Person', name: 'PDFMergeNext', url: 'https://pdfmergenext.shop', '@id': 'https://pdfmergenext.shop/#organization' },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-08-19',
        dateModified: '2026-08-19',
        image: `${SITE_URL}/og`,
        url: `${SITE_URL}/blog/merge-pdf-on-mobile`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/merge-pdf-on-mobile` },
      },
    ],
  };

  return (
    <article className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-16">
      <header>
        <p className="text-caption font-semibold uppercase tracking-wide text-brand">
          PDF 合并 · 移动端
        </p>
        <h1 className="mt-2 text-h1 font-bold tracking-tight text-fg">
          手机合并PDF：iOS/Android 完整教程 / Merge PDF on Mobile: iOS/Android
        </h1>
        <p className="mt-3 text-body text-fg-secondary">
          手机上怎么合并PDF？下面用浏览器本地工具演示 iOS 和 Android 两套步骤——文件全程不上传，不装 App，地铁里、飞机上都能用。
        </p>
        <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-subtle px-3 py-1 text-caption font-medium text-fg-muted">
          阅读约 6 分钟 · 6 min read
        </p>
      </header>

      {/* 目录锚点 */}
      <nav aria-label="文章目录" className="mt-8 rounded-xl border border-line bg-subtle p-5">
        <p className="text-caption font-semibold uppercase tracking-wide text-fg-muted">目录 / Contents</p>
        <ul className="mt-2 grid gap-1 sm:grid-cols-2">
          {TOC.map((t) => (
            <li key={t.id}>
              <a href={`#${t.id}`} className="text-sm text-brand hover:underline">
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
            <strong>手机合并PDF</strong> 最简单：在手机浏览器打开 <Link href="/" className="text-brand hover:underline">PDFMergeNext</Link> → 选文件 → 拖拽排序 → 点合并 → 下载。整个过程在浏览器本地完成，文件不会离开你的设备，断网也能跑。
          </p>
          <p className="mt-2 text-fg-secondary">
            The fastest way to merge PDFs on a phone: open PDFMergeNext in your mobile browser, pick your files, reorder, hit Merge, download. Everything runs locally — nothing leaves your device, and it works offline.
          </p>
        </section>

        {/* 为什么手机端 */}
        <section id="why-mobile">
          <h2 className="text-title font-semibold text-fg">为什么要在手机上合并 / Why merge on your phone</h2>
          <p className="mt-2 text-fg-secondary">
            很多 PDF 是在手机上产生的：扫描件、聊天里收到的合同、相册里的证件照。等你回到电脑前再合并，往往已经耽误了事。手机浏览器工具的好处是即开即用，不需要先传文件到某个云端，也不挑操作系统。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-fg-secondary">
            <li>文件全程在本地，没有服务器日志，也不跨境传输。</li>
            <li>不装 App，不占存储空间，也不弹广告。</li>
            <li>通勤路上、没带电脑时也能立刻处理。</li>
          </ul>
          <p className="mt-2 text-fg-secondary">
            A lot of PDFs are born on the phone: scans, contracts sent in chat, ID photos in the gallery. By the time you sit at a laptop, the moment has often passed. A browser tool is instant and OS-agnostic, and because it never uploads, there is no cloud account to worry about.
          </p>
        </section>

        {/* iOS */}
        <section id="ios">
          <h2 className="text-title font-semibold text-fg">iOS（Safari）步骤 / On iOS (Safari)</h2>
          <p className="mt-2 text-fg-secondary">iPhone 和 iPad 用 Safari 即可，不需要任何额外软件。</p>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-fg-secondary">
            <li>打开 Safari，访问 <Link href="/" className="text-brand hover:underline">pdfmergenext.shop</Link>。页面会把 pdf.js 和 pdf-lib 加载进浏览器。</li>
            <li>点"添加文件"，在弹出的菜单里选"文件"App、隔空投送，或直接选保存的 PDF。</li>
            <li>多选时，把要合并的 PDF 依次加入列表。</li>
            <li>在文件列表里拖动排序，调整先后顺序。</li>
            <li>点"合并"，几秒后结果进入下载。</li>
            <li>在 Safari 的下载里找到合并好的文件，用"文件"App 或隔空投送转存。</li>
          </ol>
          <p className="mt-2 text-fg-secondary">
            On iPhone or iPad, Safari is all you need. Open the page, tap Add Files, pick from the Files app or AirDrop, reorder with a drag, hit Merge, and the result lands in your Downloads — no app required.
          </p>
        </section>

        {/* Android */}
        <section id="android">
          <h2 className="text-title font-semibold text-fg">Android（Chrome）步骤 / On Android (Chrome)</h2>
          <p className="mt-2 text-fg-secondary">Android 上的流程和 iOS 几乎一致，区别只在文件来源。</p>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-fg-secondary">
            <li>用 Chrome 打开 <Link href="/" className="text-brand hover:underline">pdfmergenext.shop</Link>。</li>
            <li>点"添加文件"，从相册、文件管理器或下载目录选 PDF（部分机型支持多选）。</li>
            <li>托动卡片排序，把顺序调成你想要的导出顺序。</li>
            <li>（可选）切到挑页模式，只合并每个文件的指定页。</li>
            <li>点"合并"，结果直接进下载目录。</li>
            <li>用系统分享把文件发到微信、邮件或云盘。</li>
          </ol>
          <p className="mt-2 text-fg-secondary">
            Android is nearly identical; the only difference is the file picker. Choose from the gallery or file manager, drag to reorder, hit Merge, then share the result through the system share sheet.
          </p>
        </section>

        {/* 对比表 */}
        <section id="compare">
          <h2 className="text-title font-semibold text-fg">三种手机方案对比 / Three mobile options compared</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-subtle text-left text-fg">
                  <th className="border border-line px-3 py-2">方案</th>
                  <th className="border border-line px-3 py-2">上传到服务器</th>
                  <th className="border border-line px-3 py-2">需装 App</th>
                  <th className="border border-line px-3 py-2">水印</th>
                  <th className="border border-line px-3 py-2">挑页合并</th>
                </tr>
              </thead>
              <tbody className="text-fg-secondary">
                <tr>
                  <td className="border border-line px-3 py-2 font-medium text-fg">浏览器工具（PDFMergeNext）</td>
                  <td className="border border-line px-3 py-2">否</td>
                  <td className="border border-line px-3 py-2">否</td>
                  <td className="border border-line px-3 py-2">否</td>
                  <td className="border border-line px-3 py-2">是</td>
                </tr>
                <tr>
                  <td className="border border-line px-3 py-2 font-medium text-fg">手机 App（各类合并工具）</td>
                  <td className="border border-line px-3 py-2">多数会</td>
                  <td className="border border-line px-3 py-2">是</td>
                  <td className="border border-line px-3 py-2">常带</td>
                  <td className="border border-line px-3 py-2">部分</td>
                </tr>
                <tr>
                  <td className="border border-line px-3 py-2 font-medium text-fg">系统打印另存（iPhone）</td>
                  <td className="border border-line px-3 py-2">否</td>
                  <td className="border border-line px-3 py-2">否</td>
                  <td className="border border-line px-3 py-2">否</td>
                  <td className="border border-line px-3 py-2">否</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-caption text-fg-muted">
            三者都不上传文件的情况只有浏览器工具和 iPhone 的打印另存；但打印另存无法挑页、也不能跨多份自由排序。对手机用户来说，浏览器工具门槛最低，也是唯一同时支持挑页和 Android 的选项。
          </p>
        </section>

        {/* 限制 */}
        <section id="limits">
          <h2 className="text-title font-semibold text-fg">手机端的限制 / Limits on mobile</h2>
          <p className="mt-2 text-fg-secondary">
            手机屏幕小，处理几十页以上的大文件时，排序和预览不如电脑顺手。另外：
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-fg-secondary">
            <li>超大文件（几百页）在手机上更容易内存吃紧，建议分批合并。</li>
            <li>加密或带密码的 PDF 仍需先解锁再合并。</li>
            <li>挑页模式在窄屏上能用，但多文件时不如桌面直观。</li>
          </ul>
          <p className="mt-2 text-fg-secondary">
            Small screens make reordering huge files awkward, and very large PDFs can strain phone memory. For anything over a few dozen pages, batch the merge or switch to a desktop browser.
          </p>
        </section>

        {/* 小技巧 */}
        <section id="tips">
          <h2 className="text-title font-semibold text-fg">几个实用小技巧 / Practical tips</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-fg-secondary">
            <li>把常用 PDF 先放进"文件"App 或相册的一个文件夹，合并时一次选完。</li>
            <li>只想取部分页？合并前用挑页模式输入 <code className="mx-1 rounded bg-subtle px-1.5 py-0.5 text-sm">1-3, 5</code> 这类范围。</li>
            <li>合并完顺手用系统分享备份到云盘，避免只存在本机下载目录。</li>
          </ul>
        </section>

        <section className="rounded-xl border border-line bg-subtle p-6">
          <h2 className="text-title font-semibold text-fg">马上在手机上试试</h2>
          <p className="mt-2 text-fg-secondary">
            打开 PDFMergeNext，选入你的 PDF，几秒内在本机完成合并——文件从不上传。想了解背后的隐私机制，可以读我们的{' '}
            <Link href="/blog/why-local-offline-pdf-merge" className="text-brand hover:underline">
              隐私优先分析
            </Link>
            ，或看看{' '}
            <Link href="/blog/pdfmergenext-vs-smallpdf-vs-ilovepdf" className="text-brand hover:underline">
              PDFMergeNext vs Smallpdf vs iLovePDF 对比
            </Link>
            。
          </p>
          <Link
            href="/"
            className="mt-4 inline-block rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-on-primary transition-colors duration-fast hover:bg-brand-hover"
          >
            开始合并 →
          </Link>
        </section>

        {/* 可见 FAQ 段 */}
        <section id="faq" className="rounded-xl border border-line p-6">
          <h2 className="text-title font-semibold text-fg">常见问题</h2>
          <div className="mt-4 space-y-4">
            {ARTICLE_FAQ.map((it) => (
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
            href="/blog/why-local-offline-pdf-merge"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">为什么选择本地离线 PDF 合并</p>
            <p className="mt-1 text-xs text-fg-secondary">隐私优先才是正解 / Privacy-First PDF Merge</p>
          </Link>
          <Link
            href="/blog/how-to-merge-pdf-step-by-step"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">怎么合并PDF：完整步骤图解</p>
            <p className="mt-1 text-xs text-fg-secondary">桌面到手机全覆盖 / Step-by-Step</p>
          </Link>
          <Link
            href="/blog/how-to-merge-pdf-without-uploading"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">如何不上传合并 PDF</p>
            <p className="mt-1 text-xs text-fg-secondary">可验证的完整指南 / Verifiable Guide</p>
          </Link>
          <Link
            href="/blog/how-zero-upload-pdf-tools-work"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">零上传PDF工具：工作原理全解析</p>
            <p className="mt-1 text-xs text-fg-secondary">How Zero-Upload PDF Tools Work — WebAssembly</p>
          </Link>
        </div>
      </section>
    </article>
  );
}
