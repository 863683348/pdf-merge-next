import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';

export const metadata: Metadata = {
  title: 'PDFsam Basic vs PDFMergeNext：哪款更适合你 | PDFMergeNext',
  description:
    'PDFsam Basic vs PDFMergeNext：一个要装桌面软件，一个在浏览器里跑。离线能力、合并体验、隐私与上手成本逐项对比，帮你判断 pdfsam basic alternative 到底该选谁。An honest comparison of PDFsam Basic vs PDFMergeNext for anyone weighing a desktop install against a browser-based offline PDF merge tool.',
  keywords: [
    'pdfsam vs pdfmergenext',
    'pdfsam basic alternative',
    'offline pdf merge tool',
    'PDFsam Basic 对比',
    'PDFsam 替代品',
    '本地 PDF 合并工具',
    'desktop vs browser pdf merge',
  ],
  alternates: {
    canonical: '/blog/pdfsam-vs-pdfmergenext',
    languages: {
      'zh-CN': '/blog/pdfsam-vs-pdfmergenext',
      'en-US': '/blog/pdfsam-vs-pdfmergenext',
      'x-default': '/blog/pdfsam-vs-pdfmergenext',
    },
  },
  openGraph: {
    title: 'PDFsam Basic vs PDFMergeNext：哪款更适合你 · PDFMergeNext',
    description:
      '要装桌面软件，还是在浏览器里合并？两份免费本地工具的逐项对比。Desktop install or in-browser merge? A side-by-side look at two free local PDF tools.',
    type: 'article',
    url: `${SITE_URL}/blog/pdfsam-vs-pdfmergenext`,
    siteName: 'PDFMergeNext',
    publishedTime: '2026-09-12T00:00:00.000Z',
    images: [{ url: `${SITE_URL}/og`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PDFsam Basic vs PDFMergeNext：哪款更适合你 · PDFMergeNext',
    description:
      '免费本地 PDF 工具的两条路线：桌面软件 vs 浏览器内处理。Desktop software or in-browser processing? Two free local paths compared.',
    images: [`${SITE_URL}/og`],
  },
};

const FAQ = [
  {
    q: 'PDFsam Basic vs PDFMergeNext：哪个不用安装？',
    a: 'PDFMergeNext 完全不用装。打开 pdfmergenext.shop 就能拖文件合并，文件在浏览器本地用 WebAssembly 处理。PDFsam Basic 是桌面程序，得先下载安装包、装完再打开。',
  },
  {
    q: 'Is PDFsam Basic a good free alternative if I merge PDFs every day?',
    a: 'Yes if you also split, rotate or mix page order often. PDFsam Basic is genuinely free and runs offline once installed. For plain merging a few times a month, downloading a desktop app is more setup than the task deserves.',
  },
  {
    q: '两者都会把文件上传到服务器吗？',
    a: '都不会。PDFsam Basic 在你的电脑里运行，PDFMergeNext 在你的浏览器里运行，两者都不会把 PDF 传到远端。想自己确认，可以用浏览器开发者工具的 Network 面板看有没有上传请求。',
  },
  {
    q: 'Does PDFMergeNext need an internet connection to merge?',
    a: 'No. After the page has loaded once, merging happens on your machine, so a dropped connection does not interrupt anything. It is an offline PDF merge tool that happens to live in a browser tab.',
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
            name: 'PDFsam Basic vs PDFMergeNext',
            item: `${SITE_URL}/blog/pdfsam-vs-pdfmergenext`,
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
        headline: 'PDFsam Basic vs PDFMergeNext：哪款更适合你 / PDFsam Basic vs PDFMergeNext',
        description:
          '免费本地 PDF 工具的两条路线对比：PDFsam Basic 的桌面套件与 PDFMergeNext 的浏览器内合并。An honest comparison of two free local PDF tools.',
        author: {
          '@type': 'Person',
          name: 'PDFMergeNext',
          url: 'https://pdfmergenext.shop',
          '@id': 'https://pdfmergenext.shop/#organization',
        },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-09-12',
        dateModified: '2026-09-12',
        image: `${SITE_URL}/og`,
        url: `${SITE_URL}/blog/pdfsam-vs-pdfmergenext`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/pdfsam-vs-pdfmergenext` },
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
        <span>PDFsam Basic vs PDFMergeNext</span>
      </nav>

      <h1 className="text-3xl font-bold leading-tight">
        PDFsam Basic vs PDFMergeNext：哪款更适合你 / PDFsam Basic vs PDFMergeNext
      </h1>
      <p className="mt-2 text-sm text-fg-muted">
        更新于 2026-09-12 · 阅读约 8 分钟 / 8 min read
      </p>

      <div className="my-6 rounded-lg bg-subtle p-4 text-sm leading-relaxed">
        <strong className="block mb-1">📋 快速结论 / TL;DR</strong>
        搜 <strong>pdfsam vs pdfmergenext</strong> 的人通常在纠结同一个问题：要不要为了合并 PDF 装一个桌面软件。
        <strong>PDFsam Basic</strong> 免费、离线、功能多，代价是安装与一套偏工程化的界面；
        <strong>PDFMergeNext</strong> 不装、开网页就能合并，只做合并这一件事。
        每周都要拆分、旋转、重排页面 → PDFsam Basic；偶尔合并几份 PDF → PDFMergeNext 更省事。
      </div>

      <nav className="mb-8 rounded-lg border border-line p-4 text-sm">
        <strong className="block mb-2">📑 目录 / Contents</strong>
        <ul className="list-inside space-y-1">
          <li><a href="#what" className="text-primary hover:underline">1. 两个工具各自是什么 / What each tool is</a></li>
          <li><a href="#features" className="text-primary hover:underline">2. 功能逐项对比 / Feature comparison</a></li>
          <li><a href="#privacy" className="text-primary hover:underline">3. 隐私与离线 / Privacy and offline</a></li>
          <li><a href="#setup" className="text-primary hover:underline">4. 上手成本 / Setup cost</a></li>
          <li><a href="#alternative" className="text-primary hover:underline">5. 什么时候该换替代品 / When to switch</a></li>
          <li><a href="#faq" className="text-primary hover:underline">6. 常见问题 / FAQ</a></li>
        </ul>
      </nav>

      <h2 id="what" className="text-2xl font-semibold mt-10">
        1. 两个工具各自是什么 / What each tool is
      </h2>
      <p className="mt-3">
        <strong>PDFsam Basic</strong> 是一款开源桌面程序，装到 Windows、macOS 或 Linux 上使用。它按「模块」组织功能：合并、拆分、按书签拆分、旋转、混排页面、提取页面各占一个入口。处理过程完全在本机完成，不需要联网，也没有上传步骤。代价是必须先下载安装，界面偏工程化，第一次打开得花点时间找入口。
      </p>
      <p className="mt-2">
        <strong>PDFMergeNext</strong> 是浏览器里的合并工具，用 WebAssembly 加 pdf-lib 在你本地解包、拼接 PDF。它的范围很窄：只做合并，但把这件事做干净——零上传、免注册、无水印、不限文件数量，支持 <a href="/blog/pdf-page-selection-1-3-5-syntax" className="text-primary hover:underline">1-3,5 挑页语法</a>。想了解它为什么能做到零上传，可以看 <a href="/blog/how-zero-upload-pdf-tools-work" className="text-primary hover:underline">零上传 PDF 工具的原理</a>。
      </p>
      <p className="mt-2">
        <strong>PDFsam Basic</strong> is an open-source desktop application for Windows, macOS and Linux. It groups work into modules: merge, split, split by bookmarks, rotate, mix pages and extract. Everything runs on your machine, with no upload step anywhere. The trade-off is an install first and an interface built around file operations rather than a single obvious task.
      </p>
      <p className="mt-2">
        <strong>PDFMergeNext</strong> runs in your browser and merges files locally with WebAssembly and pdf-lib. It does one job. Drop your PDFs, set the order, download the result. No account, no watermark and no file count cap.
      </p>

      <h2 id="features" className="text-2xl font-semibold mt-10">
        2. 功能逐项对比 / Feature comparison
      </h2>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-line">
              <th className="py-2 pr-4 text-left font-semibold">维度 / Aspect</th>
              <th className="py-2 pr-4 text-left font-semibold">PDFsam Basic</th>
              <th className="py-2 text-left font-semibold">PDFMergeNext</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-line"><td className="py-2 pr-4">合并 PDF / Merge</td><td className="py-2 pr-4">✅ 支持</td><td className="py-2">✅ 支持，含挑页语法</td></tr>
            <tr className="border-b border-line"><td className="py-2 pr-4">拆分、旋转、混排 / Split, rotate, mix</td><td className="py-2 pr-4">✅ 模块齐全</td><td className="py-2">❌ 只做合并</td></tr>
            <tr className="border-b border-line"><td className="py-2 pr-4">安装 / Install</td><td className="py-2 pr-4">需下载安装包</td><td className="py-2">零安装，打开网页即用</td></tr>
            <tr className="border-b border-line"><td className="py-2 pr-4">离线 / Offline</td><td className="py-2 pr-4">✅ 装好后完全离线</td><td className="py-2">✅ 页面加载后本地处理</td></tr>
            <tr className="border-b border-line"><td className="py-2 pr-4">上传文件 / Upload</td><td className="py-2 pr-4">不上传</td><td className="py-2">零上传</td></tr>
            <tr className="border-b border-line"><td className="py-2 pr-4">文件数量上限 / File cap</td><td className="py-2 pr-4">无</td><td className="py-2">无</td></tr>
            <tr className="border-b border-line"><td className="py-2 pr-4">费用 / Price</td><td className="py-2 pr-4">免费开源</td><td className="py-2">免费，无水印</td></tr>
            <tr className="border-b border-line"><td className="py-2 pr-4">注册 / Sign-up</td><td className="py-2 pr-4">不需要</td><td className="py-2">不需要</td></tr>
            <tr><td className="py-2 pr-4">系统 / Platform</td><td className="py-2 pr-4">Windows、macOS、Linux</td><td className="py-2">任意现代浏览器</td></tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3">
        表格里最值得看的其实是「安装」那一行。功能清单 PDFsam Basic 更长的部分，都是合并之外的事；如果你从来不拆页、不旋转、不混排，那些模块就只是菜单里多出来的选项。
      </p>
      <p className="mt-2">
        The row that decides most people is the install row. PDFsam Basic wins on breadth, and the extra breadth covers tasks beyond merging. If you never split or rotate pages, those modules are menu items you will not open.
      </p>

      <h2 id="privacy" className="text-2xl font-semibold mt-10">
        3. 隐私与离线 / Privacy and offline
      </h2>
      <p className="mt-3">
        两者在隐私上属于同一档：文件都不到服务器上跑。区别在于落点。PDFsam Basic 把数据交给本机进程，适合整天在电脑前、经常处理合同或财务报表的人；PDFMergeNext 把数据留在浏览器沙箱里，适合用别人的电脑、临时设备或者不想装任何软件的场合。
      </p>
      <p className="mt-2">
        自己验证的方法一样：按 F12 打开开发者工具，切到 Network 面板，拖入文件后观察有没有上传请求。真正的本地工具在这类操作里应该是安静的。更细的步骤写在 <a href="/blog/devtools-network-tab-privacy-guide" className="text-primary hover:underline">DevTools 验证指南</a> 里。
      </p>
      <p className="mt-2">
        Both keep your files off remote servers, which puts them in the same privacy bracket. The difference is where the file lands. PDFsam Basic hands it to a local process you installed. PDFMergeNext keeps it inside a browser sandbox, which matters on a borrowed machine or a device you do not control.
      </p>
      <p className="mt-2">
        To check either claim, open developer tools, switch to the Network panel and drag a file in. A local tool stays quiet.
      </p>

      <h2 id="setup" className="text-2xl font-semibold mt-10">
        4. 上手成本 / Setup cost
      </h2>
      <p className="mt-3">
        这里差距最大。PDFsam Basic 的第一次使用包含下载安装包、完成安装、打开程序、在模块列表里找到合并。对天天用 PDF 的人是划算的一次性投入；对三个月才合并一次的人是纯负担。
      </p>
      <p className="mt-2">
        PDFMergeNext 的第一次使用就是打开网页、把文件拖进去。它没有账号体系，没有试用期，也没有「免费版导出带水印」这类设置。
      </p>
      <ul className="mt-3 space-y-2">
        <li><strong>每天处理 PDF，且任务不止合并</strong>：装 PDFsam Basic，一次投入长期省事。</li>
        <li><strong>偶尔合并，或者用的是临时设备</strong>：用 PDFMergeNext，不留下任何安装痕迹。</li>
        <li><strong>在手机或平板上合并</strong>：桌面软件帮不上忙，浏览器方案可以。</li>
      </ul>
      <p className="mt-2">
        Setup cost is where the two pull apart. Installing PDFsam Basic is a one-time investment that pays off if you touch PDFs daily. If you merge a few files twice a year, it is overhead for a task that takes ten seconds. The browser route has no account, no trial clock and no watermark logic to read carefully.
      </p>

      <h2 id="alternative" className="text-2xl font-semibold mt-10">
        5. 什么时候该换替代品 / When to switch
      </h2>
      <p className="mt-3">
        「pdfsam basic alternative」这个说法通常在三种情况下出现：公司电脑不给装软件、你在别人的设备上临时要合并、或者你只是嫌桌面套件太重。这三种情况指向同一个形态：一个不需要安装的本地合并工具。
      </p>
      <p className="mt-2">
        反过来，如果你需要按书签拆分、批量旋转、把几十个文件重新混排，那 PDFsam Basic 这类桌面套件反而更合适。合并只是它的一部分能力，替换掉它意味着你要为其余任务再找一个工具。选工具的顺序应该是先看任务清单，再看安装成本，而不是反过来。
      </p>
      <p className="mt-2">
        People search for a PDFsam Basic alternative for three reasons: an IT policy that blocks installs, a borrowed device, or a feeling that a full desktop suite is heavier than the job needs. All three point to the same shape of tool, one that merges locally with nothing to install.
      </p>
      <p className="mt-2">
        The reverse is also true. If your work includes splitting by bookmarks, rotating batches or rebuilding page order across dozens of files, the desktop suite earns its install. Merging is one capability inside it, so replacing it means finding a second tool for everything else.
      </p>

      <h2 id="faq" className="text-2xl font-semibold mt-10">
        6. 常见问题 / FAQ
      </h2>
      <div className="mt-4 space-y-4">
        {FAQ.map((item, i) => (
          <details key={i} className="group rounded-lg border border-line p-4">
            <summary className="cursor-pointer font-medium group-open:text-primary">
              {item.q}
            </summary>
            <p className="mt-2 text-sm text-fg-muted">
              {item.a}
            </p>
          </details>
        ))}
      </div>

      <section className="mt-10 rounded-lg border border-line bg-subtle p-6">
        <h2 className="text-lg font-semibold">关于 pdfmergenext.shop</h2>
        <p className="mt-2 text-sm leading-relaxed text-fg-muted">
          pdfmergenext.shop 是一个<strong>零上传</strong>的 PDF 合并工具：文件在你的浏览器本地处理，绝不传到任何服务器，免费、无水印、不限文件数量，也不需要注册。
          如果你只想把几份 PDF 合在一起，不必为此下载一整套桌面软件。可以直接
          <a href="/" className="text-primary hover:underline">打开 PDFMergeNext 合并</a>，
          也可以接着读 <a href="/blog/pdf24-vs-pdfmergenext" className="text-primary hover:underline">PDF24 与 PDFMergeNext 的对比</a>，
          或者看 <a href="/blog/ilovepdf-alternatives-no-upload" className="text-primary hover:underline">iLovePDF 的零上传替代方案</a>。
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-title font-semibold text-fg">相关阅读 / Related</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Link href="/blog/pdf24-vs-pdfmergenext" className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle">
            <p className="text-sm font-semibold text-fg">PDF24 vs PDFMergeNext</p>
            <p className="mt-1 text-xs text-fg-secondary">功能逐项对比</p>
          </Link>
          <Link href="/blog/ilovepdf-alternatives-no-upload" className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle">
            <p className="text-sm font-semibold text-fg">iLovePDF 替代方案</p>
            <p className="mt-1 text-xs text-fg-secondary">5 个零上传的本地工具</p>
          </Link>
          <Link href="/blog/best-desktop-pdf-tools-2026" className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle">
            <p className="text-sm font-semibold text-fg">2026 年最佳桌面 PDF 工具</p>
            <p className="mt-1 text-xs text-fg-secondary">8 款本地处理的应用</p>
          </Link>
          <Link href="/blog/devtools-network-tab-privacy-guide" className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle">
            <p className="text-sm font-semibold text-fg">用 DevTools 验证是否上传</p>
            <p className="mt-1 text-xs text-fg-secondary">五分钟自查方法</p>
          </Link>
        </div>
      </section>

      <div className="mt-10 rounded-lg bg-primary/5 p-6 text-center">
        <p className="text-lg font-semibold">👉 试试 PDFMergeNext</p>
        <p className="mt-1 text-sm text-fg-muted">
          零上传、无水印、无限制。合并任意数量 PDF，免费。
        </p>
        <a href="/" className="mt-3 inline-block rounded-lg bg-primary px-6 py-2 text-sm font-medium text-white hover:bg-primary/90">
          立即合并 / Merge Now
        </a>
      </div>
    </article>
  );
}
