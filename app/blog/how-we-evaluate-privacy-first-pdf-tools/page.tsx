import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';

export const metadata: Metadata = {
  title: '隐私优先 PDF 工具评测标准：我们怎么打分 | PDFMergeNext',
  description:
    '评测隐私优先 PDF 工具时我们看什么：数据链路、服务器日志、上传时机、删除承诺的可验证性、离线能力。一套可以自己复用的评测清单。How we evaluate privacy-first PDF tools.',
  keywords: [
    '隐私优先 PDF 工具',
    'privacy first pdf tools',
    'PDF 工具评测',
    'no-upload pdf evaluation',
    '本地 PDF 工具',
    '隐私评测标准',
    'pdf tool privacy review',
    'PDFMergeNext 评测',
  ],
  alternates: {
    canonical: '/blog/how-we-evaluate-privacy-first-pdf-tools',
    languages: {
      'zh-CN': '/blog/how-we-evaluate-privacy-first-pdf-tools',
      'en-US': '/blog/how-we-evaluate-privacy-first-pdf-tools',
      'x-default': '/blog/how-we-evaluate-privacy-first-pdf-tools',
    },
  },
  openGraph: {
    title: '隐私优先 PDF 工具评测标准：我们怎么打分 · PDFMergeNext',
    description:
      '评测隐私优先 PDF 工具时我们看什么：数据链路、服务器日志、上传时机、删除承诺的可验证性、离线能力。一套可以自己复用的评测清单。How we evaluate privacy-first PDF tools.',
    type: 'article',
    url: `${SITE_URL}/blog/how-we-evaluate-privacy-first-pdf-tools`,
    siteName: 'PDFMergeNext',
    publishedTime: '2026-08-12T00:00:00.000Z',
    images: [{ url: `${SITE_URL}/og`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '隐私优先 PDF 工具评测标准：我们怎么打分 · PDFMergeNext',
    description:
      '评测隐私优先 PDF 工具时我们看什么：数据链路、服务器日志、上传时机、删除承诺的可验证性、离线能力。一套可以自己复用的评测清单。How we evaluate privacy-first PDF tools.',
    images: [`${SITE_URL}/og`],
  },
};

const FAQ = [
  {
    q: '为什么"不上传"比"处理完删除"更可靠？',
    a: '不上传是架构事实：文件从物理上没有网络路径离开设备，你可以用 DevTools 验证。处理完删除是服务商承诺，你无法验证它是否真的删、是否被复制或用于训练。评测时两者权重完全不同。',
  },
  {
    q: '隐私评测最重要的指标是什么？',
    a: '数据链路。文件是否离开设备、经不经过服务器、有没有日志记录，这三件事决定了其他所有指标的意义。链路干净的工具有些问题根本不会出现。',
  },
  {
    q: '离线能力算隐私指标吗？',
    a: '算，而且是强指标。一个断网后还能正常合并 PDF 的工具，从架构上就证明文件处理不依赖服务器。这是"不上传"最直观的验证手段。',
  },
  {
    q: 'PDFMergeNext 在这些标准下得分如何？',
    a: '数据链路全绿：WebAssembly + pdf-lib 在浏览器本地运行，文件不出设备，断网可用。没有上传接口，也就没有服务器日志、没有第三方接触。免费计划无上传限制。',
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
            name: '隐私优先 PDF 工具评测标准 / How We Evaluate Privacy-First PDF Tools',
            item: `${SITE_URL}/blog/how-we-evaluate-privacy-first-pdf-tools`,
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
        headline: '隐私优先 PDF 工具评测标准：我们怎么打分 / How We Evaluate Privacy-First PDF Tools',
        description:
          '评测隐私优先 PDF 工具时我们看什么：数据链路、服务器日志、上传时机、删除承诺的可验证性、以及离线能力。一套可以自己复用的评测清单。',
        author: { '@type': 'Person', name: 'PDFMergeNext', url: 'https://pdfmergenext.shop', '@id': 'https://pdfmergenext.shop/#organization' },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-08-12',
        dateModified: '2026-08-12',
        image: `${SITE_URL}/og`,
        url: `${SITE_URL}/blog/how-we-evaluate-privacy-first-pdf-tools`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/how-we-evaluate-privacy-first-pdf-tools` },
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
        <span>隐私优先 PDF 工具评测标准</span>
      </nav>

      <h1 className="text-3xl font-bold leading-tight">
        隐私优先 PDF 工具评测标准：我们怎么打分 / How We Evaluate Privacy-First PDF Tools
      </h1>
      <p className="mt-2 text-sm text-fg-muted">
        更新于 2026-08-12 · 阅读约 6 分钟 / 6 min read
      </p>

      <div className="my-6 rounded-lg bg-subtle p-4 text-sm leading-relaxed">
        <strong className="block mb-1">快速结论 / TL;DR</strong>
        评测隐私优先 PDF 工具，先看数据链路，再看日志与上传时机，最后才看删除承诺。
        链路干净的工具有些问题根本不会出现。这套清单你也可以拿去自己验证任何工具。
      </div>

      <nav className="mb-8 rounded-lg border border-line p-4 text-sm">
        <strong className="block mb-2">目录 / Contents</strong>
        <ul className="list-inside space-y-1">
          <li><a href="#chain" className="hover:underline">1. 数据链路：一切的地基</a></li>
          <li><a href="#logs" className="hover:underline">2. 服务器日志与上传时机</a></li>
          <li><a href="#promise" className="hover:underline">3. 删除承诺：只能当参考</a></li>
          <li><a href="#offline" className="hover:underline">4. 离线能力：最硬的验证</a></li>
          <li><a href="#checklist" className="hover:underline">5. 可复用的评测清单</a></li>
        </ul>
      </nav>

      <h2 id="chain" className="mt-8 text-xl font-bold">1. 数据链路：一切的地基</h2>
      <p className="mt-3 leading-relaxed">
        评测第一问不是"加密了吗"，而是"文件到底走不走网络"。打开 DevTools 的 Network 面板，
        操作一次合并，看有没有上传请求。没有 multipart/form-data、没有二进制 PUT，
        文件就留在设备上。这一步决定了后面所有问题的意义：文件不出设备，
        服务器日志、中间人攻击、第三方接触这些问题压根不会出现。
      </p>

      <h2 id="logs" className="mt-8 text-xl font-bold">2. 服务器日志与上传时机</h2>
      <p className="mt-3 leading-relaxed">
        如果文件确实上传，接下来看两件事：日志策略和上传时机。日志策略看服务商是否声明
        "不记录文件内容"，但更可靠的是看它的隐私政策是否经得起审计。上传时机看它是
        边传边处理（文件整体离开设备）还是分块处理（仅必要片段离开）。这两个维度
        决定"上传"的实际风险等级，而不是"上传"这个词本身。
      </p>

      <h2 id="promise" className="mt-8 text-xl font-bold">3. 删除承诺：只能当参考</h2>
      <p className="mt-3 leading-relaxed">
        "处理完立即删除""30 天后自动清除"——这类承诺在评测表里权重很低。原因很简单：
        你无法验证。没有审计日志、没有第三方监管，删除承诺本质上是信任声明。
        评测时我们把它记为"待验证项"，而不是安全保证。真正加分的是架构上
        根本不需要删除的——文件从没离开过设备。
      </p>

      <h2 id="offline" className="mt-8 text-xl font-bold">4. 离线能力：最硬的验证</h2>
      <p className="mt-3 leading-relaxed">
        一个简单到粗暴的测试：断网，刷新页面，再合并一次 PDF。能完成，说明处理逻辑
        全部在本地，服务器只是静态资源分发。这个测试任何人 30 秒就能做，
        比读十页隐私政策都管用。这也是我们把离线能力列为强指标的原因——
        它是"不上传"最直观、最不可造假的证明。
      </p>

      <h2 id="checklist" className="mt-8 text-xl font-bold">5. 可复用的评测清单</h2>
      <div className="mt-4 overflow-x-auto rounded-lg border border-line">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-subtle text-left">
              <th className="px-4 py-2 font-semibold">指标 / Metric</th>
              <th className="px-4 py-2 font-semibold">判断标准</th>
              <th className="px-4 py-2 font-semibold">PDFMergeNext</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            <tr>
              <td className="px-4 py-2">数据链路 / Data path</td>
              <td className="px-4 py-2">文件不出设备（DevTools 验证）</td>
              <td className="px-4 py-2 font-semibold text-green-700">🟢 本地处理</td>
            </tr>
            <tr>
              <td className="px-4 py-2">服务器日志 / Server logs</td>
              <td className="px-4 py-2">无上传接口 → 无文件日志</td>
              <td className="px-4 py-2 font-semibold text-green-700">🟢 无</td>
            </tr>
            <tr>
              <td className="px-4 py-2">上传时机 / Upload timing</td>
              <td className="px-4 py-2">无上传行为</td>
              <td className="px-4 py-2 font-semibold text-green-700">🟢 不适用</td>
            </tr>
            <tr>
              <td className="px-4 py-2">删除承诺 / Deletion promise</td>
              <td className="px-4 py-2">架构上无需删除</td>
              <td className="px-4 py-2 font-semibold text-green-700">🟢 无需删除</td>
            </tr>
            <tr>
              <td className="px-4 py-2">离线能力 / Offline</td>
              <td className="px-4 py-2">断网可合并</td>
              <td className="px-4 py-2 font-semibold text-green-700">🟢 支持</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed">
        拿这套清单去测任何工具：先看链路，再断网试试，最后才读隐私政策。
        你会惊讶地发现，大多数"隐私优先"宣传在第一关就过不去。
      </p>

      <div className="mt-10 rounded-lg bg-subtle p-4 text-sm leading-relaxed">
        <strong className="block mb-1">我们的立场 / Our stance</strong>
        PDFMergeNext 在本地完成合并，文件从不上传服务器。想验证，随时打开 DevTools 或断网试。
        合并是免费的，没有上传限制、没有水印、不用注册。这也是我们敢把自己的工具放进
        这套评测标准的原因。
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
