import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';

export const metadata: Metadata = {
  title: 'Browser Extensions: PDF Tools — Permissions, Risks, and When to Skip Them | PDFMergeNext',
  description:
    '一个浏览器 PDF 扩展能拿到哪些权限、三类值得认真对待的隐私风险、扩展与网页版工具的逐项对照，以及四种不该装扩展的场景。What a browser pdf extension can access, the privacy risks that come with it, how it compares with a web tool, and when you are better off skipping the install.',
  keywords: [
    '浏览器 PDF 扩展',
    'browser pdf extension',
    'pdf extension permissions',
    'chrome extension privacy risk',
    'pdf extension vs online tool',
    'when not to use browser extension',
    'MV3 host permissions',
    'PDFMergeNext',
  ],
  alternates: {
    canonical: '/blog/browser-extensions-pdf-tools',
    languages: {
      'zh-CN': '/blog/browser-extensions-pdf-tools',
      'en-US': '/blog/browser-extensions-pdf-tools',
      'x-default': '/blog/browser-extensions-pdf-tools',
    },
  },
  openGraph: {
    title: 'Browser Extensions: PDF Tools · PDFMergeNext',
    description:
      'What a browser pdf extension can access, the privacy risks that come with an install, and the four situations where a web tool is the better pick.',
    type: 'article',
    url: `${SITE_URL}/blog/browser-extensions-pdf-tools`,
    siteName: 'PDFMergeNext',
    publishedTime: '2026-11-07T00:00:00.000Z',
    images: [{ url: `${SITE_URL}/og`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Browser Extensions: PDF Tools · PDFMergeNext',
    description:
      'The permission model behind PDF extensions, the privacy risks, and when to skip the install and open a web tool instead.',
    images: [`${SITE_URL}/og`],
  },
};

const FAQ_EN = [
  {
    q: 'Does a PDF extension see the content of every page I open?',
    a: 'It depends on the host permissions it requests, not on what the store description says. An extension with access to all sites can read any tab you are on, including your banking session. A tool scoped to one domain, or built with activeTab, only touches what you explicitly run it on. Read the permission line before installing; it is written on the store listing and it is the honest part of the page.',
  },
  {
    q: 'What is the difference between permissions and host permissions?',
    a: 'Permissions cover browser APIs: storage, downloads, notifications. Host permissions cover websites: which domains the extension can read or modify. A PDF converter that posts your file to a processing server needs a host permission for that server, so the permission list doubles as a map of where your documents travel.',
  },
  {
    q: 'Is Manifest V3 making PDF extensions safer?',
    a: 'Partly. MV3 removes remotely hosted code, so the reviewed bundle is the code that runs. It also pushed background pages into shorter-lived service workers. What it did not change is the all-sites host permission, which is still the broadest and most commonly granted flag among PDF tools.',
  },
  {
    q: 'When is a web tool better than an extension?',
    a: 'For one-off jobs, for sensitive documents, and for anything over roughly a hundred megabytes. A web tool runs only when you open it, holds no standing permission on your tabs, and a browser-local one processes the file in the page without sending it anywhere. An extension earns its install only when you run the same job several times a week.',
  },
];

const FAQ_ZH = [
  {
    q: '装了 PDF 扩展，它能看到我打开的每个页面吗？',
    a: '取决于它申请的 host 权限，而不是商店简介写了什么。申请了「所有网站」访问权的扩展可以读取你当前任何标签页的内容，包括网银页面。只限定单个域名或使用 activeTab 的扩展，只能碰你主动点过的那一次。装之前读权限行，那是商店页面里最诚实的一段。',
  },
  {
    q: 'permissions 和 host permissions 有什么区别？',
    a: 'permissions 管浏览器接口：存储、下载、通知。host permissions 管网站：扩展能读取或修改哪些域名。一个要把文件发到处理服务器的转换扩展，必须申请那台服务器的 host 权限，所以权限列表本身就是一张「你的文件会去哪」的地图。',
  },
  {
    q: 'Manifest V3 让 PDF 扩展更安全了吗？',
    a: '部分如此。MV3 禁止远程托管代码，商店审核的包就是实际运行的代码；后台页面也换成了更短生命周期的 service worker。但「所有网站」的 host 权限没有被收紧，而它恰恰是 PDF 类工具最常申请、范围最大的一条。',
  },
  {
    q: '什么时候网页版工具比扩展更合适？',
    a: '一次性任务、敏感文件、以及超过大约一百 MB 的活。网页工具只在你打开时运行，不常驻权限；浏览器本地的网页工具在页面内处理文件，不外发。只有当你每周都要跑同一种任务，扩展才值得装。',
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
            name: 'Browser Extensions: PDF Tools / 浏览器 PDF 扩展：权限、风险与什么时候别装',
            item: `${SITE_URL}/blog/browser-extensions-pdf-tools`,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          ...FAQ_EN.map((it) => ({
            '@type': 'Question',
            name: it.q,
            acceptedAnswer: { '@type': 'Answer', text: it.a },
          })),
          ...FAQ_ZH.map((it) => ({
            '@type': 'Question',
            name: it.q,
            acceptedAnswer: { '@type': 'Answer', text: it.a },
          })),
        ],
      },
      {
        '@type': 'Article',
        headline: 'Browser Extensions: PDF Tools / 浏览器 PDF 扩展：权限、风险与什么时候别装',
        description:
          'The permission model behind browser PDF extensions, the privacy risks that come with an install, and the situations where a web tool is the better pick.',
        author: { '@type': 'Person', name: 'PDFMergeNext', url: 'https://pdfmergenext.shop', '@id': 'https://pdfmergenext.shop/#organization' },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-11-07',
        dateModified: '2026-11-07',
        image: `${SITE_URL}/og`,
        url: `${SITE_URL}/blog/browser-extensions-pdf-tools`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/browser-extensions-pdf-tools` },
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
        <span>Browser Extensions: PDF Tools</span>
      </nav>

      <h1 className="text-3xl font-bold leading-tight">
        Browser Extensions: PDF Tools — Permissions, Risks, and When to Skip Them / 浏览器 PDF 扩展：权限、风险与什么时候别装
      </h1>
      <p className="mt-2 text-sm text-fg-muted">
        更新于 2026-11-07 · 阅读约 9 分钟 / 9 min read
      </p>

      <div className="my-6 rounded-lg bg-subtle p-4 text-sm leading-relaxed">
        <strong className="block mb-1">快速结论 / TL;DR</strong>
        装一个浏览器 PDF 扩展，本质上是用常驻权限换便利：它申请的 host 权限决定了它能读哪些标签页，处理路径决定了你的文件去没去别人的服务器。这篇拆开扩展的权限模型、三类隐私风险，把扩展和网页版工具逐项对照，最后列出四种不该装扩展的场景。每周跑同一种任务才值得装；一年用三次的活，开一个网页工具更划算。A browser pdf extension trades standing permissions for convenience. This piece walks through the permission model, three privacy risks worth taking seriously, a side-by-side comparison with web tools, and the four situations where you should skip the install.
      </div>

      <nav className="mb-8 rounded-lg border border-line p-4 text-sm">
        <strong className="block mb-2">目录 / Contents</strong>
        <ul className="list-inside space-y-1">
          <li><a href="#power" className="text-primary hover:underline">1. What a browser PDF extension can actually do</a></li>
          <li><a href="#permissions" className="text-primary hover:underline">2. The permission model, explained without jargon</a></li>
          <li><a href="#risks" className="text-primary hover:underline">3. Three privacy risks worth taking seriously</a></li>
          <li><a href="#compare" className="text-primary hover:underline">4. Extension or web tool: a side-by-side look</a></li>
          <li><a href="#skip" className="text-primary hover:underline">5. Four situations where you should skip the extension</a></li>
          <li><a href="#faq" className="text-primary hover:underline">6. FAQ</a></li>
        </ul>
      </nav>

      <h2 id="power" className="text-2xl font-semibold mt-10">1. What a Browser PDF Extension Can Actually Do</h2>
      <p className="mt-3">
        A browser pdf extension is a small program that lives inside the browser and runs whenever its trigger fires. Depending on the tool, it can annotate a document you are viewing, fill a form, convert a file to another format, or merge several PDFs into one. Unlike a website, it does not need you to navigate anywhere: it sits next to the address bar and waits. That convenience is the whole pitch, and it is also where the risk comes from, because the same access that lets a tool annotate the page you are reading lets it read the page.
      </p>
      <p className="mt-2">
        It helps to separate the two questions people usually mix up. What can the extension do to PDFs is a feature question, and the store page answers it. What can the extension see while it does that is a permission question, and the store page answers that too, just in smaller type. If you have not settled the feature question yet, the <a href="/blog/best-chrome-extensions-for-pdf" className="text-primary hover:underline">list of Chrome PDF extensions</a> sorts the common tools by how they process files; the rest of this piece stays on the permission question.
      </p>

      <h2 id="permissions" className="text-2xl font-semibold mt-10">2. The Permission Model, Explained Without Jargon</h2>
      <p className="mt-3">
        Chrome splits what an extension may touch into two lists, and the distinction matters more for PDF tools than for almost any other category.
      </p>
      <ul className="mt-3 list-inside space-y-1">
        <li><strong>Permissions</strong> cover browser APIs: saving files to your downloads folder, showing notifications, storing settings. A merge tool needs the downloads permission to hand you the result, and that one is reasonable.</li>
        <li><strong>Host permissions</strong> cover websites: which domains the extension can read or change. This is the list to read before installing. If a converter lists a host permission for a server you have never heard of, your document is travelling to that server.</li>
        <li><strong>activeTab</strong> is the narrow alternative: the extension only gets access to the current tab at the moment you click it. Tools built this way cannot watch your browsing when they are idle.</li>
      </ul>
      <p className="mt-2">
        Manifest V3 tightened some of this. Remote code is gone, so the package the store reviewed is the code that runs, and background pages became short-lived service workers. One thing MV3 did not change: the all-sites host permission is still available and still common among PDF tools. It is the single flag that turns a document helper into something that can read every page you open.
      </p>

      <h2 id="risks" className="text-2xl font-semibold mt-10">3. Three Privacy Risks Worth Taking Seriously</h2>
      <p className="mt-3">
        None of these risks are hypothetical. Each one has a concrete mechanism you can check yourself.
      </p>
      <ul className="mt-3 list-inside space-y-1">
        <li><strong>Standing access to every tab.</strong> An extension with all-sites host permission can read the content of any page you are on, at any time, whether or not a PDF is involved. Merged into your daily browsing, that covers mail, banking, and internal wikis.</li>
        <li><strong>Silent updates and ownership changes.</strong> Extensions update themselves. A tool that behaved well when you installed it can be sold, rewritten, or handed to new owners, and the store review will not ask you first. The permission list you approved months ago is not a guarantee about the code running today.</li>
        <li><strong>An opaque processing path.</strong> Many extensions claim local processing while posting the document to a server. You can catch this in two minutes: open DevTools, switch to the Network tab, run one job, and look for a request that carries your file. The same test works on web tools, as the <a href="/blog/client-side-vs-server-side-pdf-tools" className="text-primary hover:underline">client-side versus server-side comparison</a> shows.</li>
      </ul>
      <p className="mt-2">
        The second risk is the one people underestimate. Permissions are granted once and remembered; the code behind them changes quietly.
      </p>

      <h2 id="compare" className="text-2xl font-semibold mt-10">4. Extension or Web Tool: A Side-by-Side Look</h2>
      <p className="mt-3">
        The fair comparison is not extension versus desktop software; it is extension versus a web tool that also runs in your browser. The differences line up cleanly:
      </p>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-line text-left">
              <th className="py-2 pr-4 font-semibold">Dimension</th>
              <th className="py-2 pr-4 font-semibold">Extension</th>
              <th className="py-2 font-semibold">Web tool (browser-local)</th>
            </tr>
          </thead>
          <tbody className="text-fg-secondary">
            <tr className="border-b border-line"><td className="py-2 pr-4">Install required</td><td className="py-2 pr-4">Yes, with permissions</td><td className="py-2">No, open a URL</td></tr>
            <tr className="border-b border-line"><td className="py-2 pr-4">Access when idle</td><td className="py-2 pr-4">Per its host permissions</td><td className="py-2">None; the page is closed</td></tr>
            <tr className="border-b border-line"><td className="py-2 pr-4">Works on any site you visit</td><td className="py-2 pr-4">Yes, if all-sites granted</td><td className="py-2">Only on its own page</td></tr>
            <tr className="border-b border-line"><td className="py-2 pr-4">Where the file is processed</td><td className="py-2 pr-4">Varies; check the Network tab</td><td className="py-2">In the tab, no upload if local</td></tr>
            <tr className="border-b border-line"><td className="py-2 pr-4">Updates</td><td className="py-2 pr-4">Automatic, silent</td><td className="py-2">You get what the page serves</td></tr>
            <tr className="border-b border-line"><td className="py-2 pr-4">Size ceiling</td><td className="py-2 pr-4">Tab memory cap</td><td className="py-2">Same cap, but no duplicate runtime</td></tr>
          </tbody>
        </table>
      </div>
      <p className="mt-2">
        The rows that decide most cases are the second and the third. A web tool has no life outside the tab you opened it in; an extension may keep permissions long after you have stopped thinking about it. Tools built to process files in the page rather than upload them sidestep the fourth row entirely, and the mechanics are described in <a href="/blog/how-zero-upload-pdf-tools-work" className="text-primary hover:underline">how zero-upload PDF tools work</a>.
      </p>

      <h2 id="skip" className="text-2xl font-semibold mt-10">5. Four Situations Where You Should Skip the Extension</h2>
      <ul className="mt-3 list-inside space-y-1">
        <li><strong>One-off jobs.</strong> Merging two files once a quarter does not justify standing permissions. Open a web tool, do the job, close the tab, and nothing stays behind.</li>
        <li><strong>Sensitive documents.</strong> Contracts, tax scans, medical records, anything under NDA. For these, every hop the file makes should be one you can name. An extension whose processing path you have not verified fails that test; a page that processes locally in the tab passes it.</li>
        <li><strong>Shared or managed machines.</strong> A work laptop, a family computer, a library terminal. Whatever permissions you grant here apply to everyone who uses the machine after you, and uninstalling requires settings most people do not walk their colleagues through.</li>
        <li><strong>Large files.</strong> Browser tabs hit a memory ceiling well below what desktop software allocates, and an extension adds its own runtime on top of your tab. Jobs over a few hundred megabytes belong in a native app regardless of which browser route you pick.</li>
      </ul>
      <p className="mt-2">
        If none of these apply and you run the same PDF job weekly, a well-scoped extension is a fine choice. The point is not that extensions are bad; it is that the install should be earned by frequency.
      </p>

      <h2 id="faq" className="text-2xl font-semibold mt-10">6. FAQ</h2>
      <p className="mt-3"><strong>Does a PDF extension see the content of every page I open?</strong> It depends on the host permissions it requests, not on what the store description says. An extension with access to all sites can read any tab you are on, including your banking session. A tool scoped to one domain, or built with activeTab, only touches what you explicitly run it on.</p>
      <p className="mt-2"><strong>What is the difference between permissions and host permissions?</strong> Permissions cover browser APIs: storage, downloads, notifications. Host permissions cover websites: which domains the extension can read or modify. A PDF converter that posts your file to a processing server needs a host permission for that server, so the permission list doubles as a map of where your documents travel.</p>
      <p className="mt-2"><strong>Is Manifest V3 making PDF extensions safer?</strong> Partly. MV3 removes remotely hosted code, so the reviewed bundle is the code that runs. What it did not change is the all-sites host permission, which is still the broadest and most commonly granted flag among PDF tools.</p>
      <p className="mt-2"><strong>When is a web tool better than an extension?</strong> For one-off jobs, for sensitive documents, and for anything over roughly a hundred megabytes. A web tool runs only when you open it and holds no standing permission on your tabs. An extension earns its install only when you run the same job several times a week.</p>

      <div className="mt-10 rounded-lg bg-subtle p-5 text-sm leading-relaxed">
        <strong className="block mb-1">中文版摘要</strong>
        浏览器 PDF 扩展的本质是用常驻权限换便利。权限模型分两层：permissions 管下载、通知这类浏览器接口；host permissions 管它能读哪些网站，「所有网站」这条是 PDF 类工具里范围最大、也最常被随手点掉的。三类值得认真对待的风险：全标签页的常驻读取权；扩展会静默更新、可能换主人，几个月前批准的权限管不住今天的代码；以及不透明的处理路径——很多自称本地处理的扩展实际把文件发到了服务器，用 DevTools 的 Network 面板跑一次任务就能当场验证。和网页版工具逐项对照：网页工具不装东西、不常驻权限、只在自己的页面上工作，本地处理的网页工具连「文件去哪」这个问题都不存在。四种不该装扩展的场景：一季度才用一次的活、合同病历税务扫描件这类敏感文件、公用或公司管理的电脑、以及几百 MB 以上的大文件。扩展不是不能装，而是要让使用频率配得上它拿走的权限；不够频繁的话，浏览器里开一个零上传的合并页面就够了。
      </div>

      <section className="mt-10 rounded-lg border border-line bg-subtle p-6">
        <h2 className="text-lg font-semibold">关于 pdfmergenext.shop</h2>
        <p className="mt-2 text-sm leading-relaxed text-fg-muted">
          pdfmergenext.shop 是一个<strong>零上传</strong>的 PDF 合并工具：文件在你的浏览器本地用 WebAssembly 处理，绝不传到任何服务器，免费、无水印、无文件大小限制。
          不想为偶尔的合并任务装扩展，直接打开 <a href="/" className="text-primary hover:underline">PDFMergeNext 在线合并</a>；
          想继续研究这个方向，可以读 <a href="/blog/browser-pdf-merge-privacy" className="text-primary hover:underline">浏览器 PDF 合并的隐私边界</a>，
          以及 <a href="/blog/best-chrome-extensions-for-pdf" className="text-primary hover:underline">Chrome PDF 扩展清单</a>里的逐条权限说明。
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-title font-semibold text-fg">相关阅读 / Related</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Link href="/blog/best-chrome-extensions-for-pdf" className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle">
            <p className="text-sm font-semibold text-fg">Chrome 扩展推荐：最佳 PDF 工具</p>
            <p className="mt-1 text-xs text-fg-secondary">Best Chrome Extensions for PDF</p>
          </Link>
          <Link href="/blog/client-side-vs-server-side-pdf-tools" className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle">
            <p className="text-sm font-semibold text-fg">客户端与服务端 PDF 工具：架构对比</p>
            <p className="mt-1 text-xs text-fg-secondary">Client-side vs Server-side PDF Tools</p>
          </Link>
          <Link href="/blog/how-zero-upload-pdf-tools-work" className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle">
            <p className="text-sm font-semibold text-fg">零上传工具的工作原理</p>
            <p className="mt-1 text-xs text-fg-secondary">How Zero-Upload PDF Tools Work</p>
          </Link>
          <Link href="/blog/browser-pdf-merge-privacy" className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle">
            <p className="text-sm font-semibold text-fg">浏览器 PDF 合并的隐私边界</p>
            <p className="mt-1 text-xs text-fg-secondary">Browser PDF Merge Privacy</p>
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
