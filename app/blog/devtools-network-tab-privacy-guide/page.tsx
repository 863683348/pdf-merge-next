import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';

export const metadata: Metadata = {
  title: '用 DevTools 验证 PDF 工具是否真的不上传 | PDFMergeNext',
  description:
    '别信宣传，自己验证：打开浏览器 DevTools 的 Net 面板，五分钟看清一个 PDF 工具到底有没有把文件传上服务器。带步骤的实操指南。DevTools Network Tab Privacy Guide.',
  keywords: [
    'DevTools 验证 PDF',
    'DevTools network tab',
    'PDF 工具不上传验证',
    '如何验证 PDF 上传',
    'no-upload pdf verification',
    '浏览器开发者工具 隐私',
    'PDFMergeNext 本地处理',
  ],
  alternates: {
    canonical: '/blog/devtools-network-tab-privacy-guide',
    languages: {
      'zh-CN': '/blog/devtools-network-tab-privacy-guide',
      'en-US': '/blog/devtools-network-tab-privacy-guide',
      'x-default': '/blog/devtools-network-tab-privacy-guide',
    },
  },
  openGraph: {
    title: '用 DevTools 验证 PDF 工具是否真的不上传 · PDFMergeNext',
    description:
      '别信宣传，自己验证：打开浏览器 DevTools 的 Net 面板，五分钟看清一个 PDF 工具到底有没有把文件传上服务器。带步骤的实操指南。DevTools Network Tab Privacy Guide.',
    type: 'article',
    url: `${SITE_URL}/blog/devtools-network-tab-privacy-guide`,
    siteName: 'PDFMergeNext',
    publishedTime: '2026-08-13T00:00:00.000Z',
    images: [{ url: `${SITE_URL}/og`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '用 DevTools 验证 PDF 工具是否真的不上传 · PDFMergeNext',
    description:
      '别信宣传，自己验证：打开浏览器 DevTools 的 Net 面板，五分钟看清一个 PDF 工具到底有没有把文件传上服务器。带步骤的实操指南。DevTools Network Tab Privacy Guide.',
    images: [`${SITE_URL}/og`],
  },
};

const FAQ = [
  {
    q: 'DevTools 验证会不会漏掉某些上传方式？',
    a: '会，所以要看的不是 Network 面板本身，而是看有没有 multipart/form-data 或二进制 PUT/POST。有些工具会用 WebSocket 或 Service Worker 做传输，所以除了 Net 面板，还要看浏览器任务管理器里该标签页的网络占用。两个一起看，基本不会漏。',
  },
  {
    q: '断网测试是最可靠的验证吗？',
    a: '是，而且是最直观的。刷新页面后断开网络，再执行一次合并。能完成，说明处理逻辑全在本地。这个测试 30 秒做完，比读十页隐私政策都管用。',
  },
  {
    q: '看到请求就说明文件上传了吗？',
    a: '不一定。静态资源、字体、脚本都有请求，关键是看请求体里有没有文件内容。把请求详情点开，看 Payload 或 Request 标签，找 multipart/form-data 或二进制数据。',
  },
  {
    q: 'PDFMergeNext 经得起这套验证吗？',
    a: '经得起。我们在浏览器本地用 WebAssembly 和 pdf-lib 处理文件，没有上传接口。你随时可以按这篇的步骤自己验证，或者直接断网试，合并照常完成。',
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
            name: '用 DevTools 验证 PDF 工具是否真的不上传 / DevTools Network Tab Privacy Guide',
            item: `${SITE_URL}/blog/devtools-network-tab-privacy-guide`,
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
        headline: '用 DevTools 验证 PDF 工具是否真的不上传 / DevTools Network Tab Privacy Guide',
        description:
          '打开浏览器 DevTools 的 Net 面板，五分钟看清一个 PDF 工具到底有没有把文件传上服务器。带步骤的实操指南。',
        author: { '@type': 'Person', name: 'PDFMergeNext', url: 'https://pdfmergenext.shop', '@id': 'https://pdfmergenext.shop/#organization' },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-08-13',
        dateModified: '2026-08-13',
        image: `${SITE_URL}/og`,
        url: `${SITE_URL}/blog/devtools-network-tab-privacy-guide`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/devtools-network-tab-privacy-guide` },
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
        <span>DevTools 验证 PDF 隐私</span>
      </nav>

      <h1 className="text-3xl font-bold leading-tight">
        用 DevTools 验证 PDF 工具是否真的不上传 / DevTools Network Tab Privacy Guide
      </h1>
      <p className="mt-2 text-sm text-fg-muted">
        更新于 2026-08-13 · 阅读约 6 分钟 / 6 min read
      </p>

      <div className="my-6 rounded-lg bg-subtle p-4 text-sm leading-relaxed">
        <strong className="block mb-1">快速结论 / TL;DR</strong>
        打开 DevTools → Network 面板 → 清空记录 → 操作一次合并 → 看有没有文件上传请求。
        加上断网测试，五分钟内就能判断一个 PDF 工具是否真的本地处理。
      </div>

      <nav className="mb-8 rounded-lg border border-line p-4 text-sm">
        <strong className="block mb-2">目录 / Contents</strong>
        <ul className="list-inside space-y-1">
          <li><a href="#open" className="hover:underline">1. 打开 Network 面板</a></li>
          <li><a href="#look" className="hover:underline">2. 操作一次，看请求体</a></li>
          <li><a href="#verify" className="hover:underline">3. 辅助验证：断网测试</a></li>
          <li><a href="#misread" className="hover:underline">4. 常见误读与坑</a></li>
          <li><a href="#checklist" className="hover:underline">5. 对照清单</a></li>
        </ul>
      </nav>

      <h2 id="open" className="mt-8 text-xl font-bold">1. 打开 Network 面板</h2>
      <p className="mt-3 leading-relaxed">
        任何主流浏览器都行：Chrome / Edge 按 F12 或右键 → 检查 → Network 标签页。
        打开后先点一下左上角的清除按钮（🚫 图标），把历史请求清空，这样接下来的记录
        只包含你接下来的操作。这一步是很多人漏掉的，不清空的话，页面加载时的
        一堆静态资源请求会干扰判断。
      </p>
      <p className="mt-3 leading-relaxed">
        顺手打开面板上方的 Preserve log 选项旁边的过滤框，输入 "multipart" 或 "form-data"
        也可以，但最靠谱的还是全程盯着看。
      </p>

      <h2 id="look" className="mt-8 text-xl font-bold">2. 操作一次，看请求体</h2>
      <p className="mt-3 leading-relaxed">
        现在去页面上执行一次真实的合并操作，选一个几 MB 的 PDF。操作完成后回到 Network
        面板，从下往上扫一遍新出现的请求。重点看两样东西：
      </p>
      <div className="mt-4 overflow-x-auto rounded-lg border border-line">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-subtle text-left">
              <th className="px-4 py-2 font-semibold">请求特征</th>
              <th className="px-4 py-2 font-semibold">含义</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            <tr>
              <td className="px-4 py-2">multipart/form-data 请求</td>
              <td className="px-4 py-2">文件作为表单数据上传，红牌</td>
            </tr>
            <tr>
              <td className="px-4 py-2">二进制 PUT/POST（几十 KB 以上）</td>
              <td className="px-4 py-2">文件内容传输，红牌</td>
            </tr>
            <tr>
              <td className="px-4 py-2">只有静态资源（js/css/png）</td>
              <td className="px-4 py-2">正常，文件没走网络</td>
            </tr>
            <tr>
              <td className="px-4 py-2">请求体为空的小请求</td>
              <td className="px-4 py-2">可能是埋点，点开看 Payload</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 leading-relaxed">
        点开可疑请求的详情，切到 Payload 或 Request 标签，确认请求体里到底有什么。
        判断标准很简单：请求体里出现你文件名或二进制数据，就是上传了。
      </p>

      <h2 id="verify" className="mt-8 text-xl font-bold">3. 辅助验证：断网测试</h2>
      <p className="mt-3 leading-relaxed">
        Network 面板是"有没有发请求"，断网测试是"离了网络还能不能用"。
        两个一起做，基本不会误判。步骤：刷新页面等它加载完 → 断开网络（Wi-Fi 关掉
        或 DevTools Network 面板勾选 Offline）→ 再合并一次。能完成，说明处理逻辑
        全在本地，服务器只是个静态文件分发点。这个测试 30 秒，是"不上传"最硬的证明。
      </p>

      <h2 id="misread" className="mt-8 text-xl font-bold">4. 常见误读与坑</h2>
      <p className="mt-3 leading-relaxed">
        第一坑：看到请求就喊"上传了"。页面上的字体、脚本、图标都是请求，关键是
        请求体里有没有文件内容。第二坑：只盯 Network 面板。个别工具用 WebSocket 传输，
        看 Network 里的 WS 标签页，或者打开浏览器任务管理器看标签页的网络占用。
        第三坑：用 0 字节文件测试。文件太小可能被工具直接缓存跳过处理，用几 MB
        的真实 PDF。
      </p>

      <h2 id="checklist" className="mt-8 text-xl font-bold">5. 对照清单</h2>
      <div className="mt-4 overflow-x-auto rounded-lg border border-line">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-subtle text-left">
              <th className="px-4 py-2 font-semibold">验证项 / Check</th>
              <th className="px-4 py-2 font-semibold">通过标准</th>
              <th className="px-4 py-2 font-semibold">PDFMergeNext</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            <tr>
              <td className="px-4 py-2">Network 面板 / Net tab</td>
              <td className="px-4 py-2">无 multipart / 二进制上传</td>
              <td className="px-4 py-2 font-semibold text-green-700">🟢 无上传请求</td>
            </tr>
            <tr>
              <td className="px-4 py-2">请求体 / Payload</td>
              <td className="px-4 py-2">无文件内容</td>
              <td className="px-4 py-2 font-semibold text-green-700">🟢 纯静态资源</td>
            </tr>
            <tr>
              <td className="px-4 py-2">断网合并 / Offline merge</td>
              <td className="px-4 py-2">断网可完成</td>
              <td className="px-4 py-2 font-semibold text-green-700">🟢 支持</td>
            </tr>
            <tr>
              <td className="px-4 py-2">WebSocket 传输 / WS check</td>
              <td className="px-4 py-2">无文件相关 WS 消息</td>
              <td className="px-4 py-2 font-semibold text-green-700">🟢 无 WS 传输</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed">
        拿这份清单去测你常用的任何工具。大多数"隐私优先"的宣传，在第一关
        Network 面板就过不去。测完之后，用
        <Link href="/blog/privacy-first-pdf-workflow" className="text-primary hover:underline">
          隐私友好的 PDF 工作流设计
        </Link>
        把本地处理落实成整套流程。
      </p>

      <div className="mt-10 rounded-lg bg-subtle p-4 text-sm leading-relaxed">
        <strong className="block mb-1">我们的立场 / Our stance</strong>
        PDFMergeNext 在浏览器本地完成合并，文件从不上传服务器。想验证，随时按这篇的步骤
        打开 DevTools，或者直接断网试。合并免费、无上传限制、无水印、不用注册。
      </div>

      <div className="mt-8">
        <Link href="/" className="font-semibold text-brand hover:underline">
          回到合并工具首页 / Back to the merge tool →
        </Link>
      </div>
      <div className="mt-4">
        <Link href="/blog" className="text-sm text-fg-muted hover:underline">
          ← 更多博客文章 / More blog posts
        </Link>
      </div>
    </article>
  );
}
