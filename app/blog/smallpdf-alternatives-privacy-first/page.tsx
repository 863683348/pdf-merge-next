import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';

export const metadata: Metadata = {
  title: 'Smallpdf 替代方案：隐私优先的 PDF 工具 | PDFMergeNext',
  description:
    'Smallpdf 会把文件上传到服务器。如果你在意隐私，这里列出最好的本地优先替代品，含对比表。Smallpdf uploads your files to its servers. Here are the best local-first alternatives, with a comparison table.',
  keywords: [
    'smallpdf alternative',
    'smallpdf 替代',
    '隐私优先 pdf 工具',
    'privacy-first pdf tools',
    'pdf merge without upload',
    '本地 pdf 工具',
    '零上传 pdf 合并',
  ],
  alternates: {
    canonical: '/blog/smallpdf-alternatives-privacy-first',
    languages: {
      'zh-CN': '/blog/smallpdf-alternatives-privacy-first',
      'en-US': '/blog/smallpdf-alternatives-privacy-first',
      'x-default': '/blog/smallpdf-alternatives-privacy-first',
    },
  },
  openGraph: {
    title: 'Smallpdf 替代方案：隐私优先的 PDF 工具 · PDFMergeNext',
    description:
      'Smallpdf 上传文件到服务器。如果你在意隐私，这里是五款本地优先的替代品，含对比表。',
    type: 'article',
    url: `${SITE_URL}/blog/smallpdf-alternatives-privacy-first`,
    siteName: 'PDFMergeNext',
    publishedTime: '2026-09-10T00:00:00.000Z',
    images: [{ url: `${SITE_URL}/og`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smallpdf 替代方案：隐私优先的 PDF 工具 · PDFMergeNext',
    description: '五款本地优先的 PDF 替代品，文件不上传。附对比表。',
    images: [`${SITE_URL}/og`],
  },
};

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
            name: 'Smallpdf 替代方案：隐私优先',
            item: `${SITE_URL}/blog/smallpdf-alternatives-privacy-first`,
          },
        ],
      },
      {
        '@type': 'Article',
        headline: 'Smallpdf 替代方案：隐私优先的 PDF 工具 / Smallpdf Alternatives: Privacy-First PDF Tools',
        description:
          'Smallpdf 把文件上传到服务器。这里列出五款本地优先的 PDF 替代品，附隐私、平台、用途对比表。',
        author: { '@type': 'Person', name: 'PDFMergeNext', url: 'https://pdfmergenext.shop', '@id': 'https://pdfmergenext.shop/#organization' },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-09-10',
        dateModified: '2026-09-10',
        image: `${SITE_URL}/og`,
        url: `${SITE_URL}/blog/smallpdf-alternatives-privacy-first`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/smallpdf-alternatives-privacy-first` },
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
        <span>Smallpdf 替代方案：隐私优先</span>
      </nav>

      <h1 className="text-3xl font-bold leading-tight">
        Smallpdf 替代方案：隐私优先的 PDF 工具 / Smallpdf Alternatives: Privacy-First PDF Tools
      </h1>
      <p className="mt-2 text-sm text-fg-muted">
        更新于 2026-09-10 · 阅读约 6 分钟 / 6 min read
      </p>

      <div className="my-6 rounded-lg bg-subtle p-4 text-sm leading-relaxed">
        <strong className="block mb-1">📋 快速结论 / TL;DR</strong>
        Smallpdf 方便，但会把文件上传到服务器。如果你处理的是合同、身份证件或财务记录，改用本地工具。最省事的浏览器端选项是 PDFMergeNext，打开网页拖文件即可，无需安装、无需账户，文件永不出设备。
      </div>

      <nav className="mb-8 rounded-lg border border-line p-4 text-sm">
        <strong className="block mb-2">📑 目录 / Contents</strong>
        <ul className="list-inside space-y-1">
          <li><a href="#why" className="text-primary hover:underline">1. 为什么避开云端工具</a></li>
          <li><a href="#tools" className="text-primary hover:underline">2. 隐私优先的替代方案</a></li>
          <li><a href="#compare" className="text-primary hover:underline">3. 对比表</a></li>
          <li><a href="#bottom" className="text-primary hover:underline">4. 结论</a></li>
        </ul>
      </nav>

      <h2 id="why" className="text-2xl font-semibold mt-10">
        1. 为什么避开云端 PDF 工具
      </h2>
      <p className="mt-3">
        每次使用 Smallpdf、PDF.io 这类服务，流程都是同一套：文件先被上传到它们的服务器，然后处理（可能同时被存储），你下载结果，而它们的日志可能继续保留你的数据。
      </p>
      <p className="mt-2">
        对合同、身份证件、财务记录这类敏感文档，这就是一个隐私风险。你可以打开 DevTools（F12）→ Network，拖入一个文件，看有没有上传请求。真正的本地工具应该是零请求。
      </p>

      <h2 id="tools" className="text-2xl font-semibold mt-10">
        2. 隐私优先的替代方案
      </h2>
      <ul className="mt-3 space-y-3">
        <li>
          <strong>1. PDF Merge Next（本站）</strong>：100% 浏览器端，文件永不离开你的设备；无上传、无服务器、无追踪；基础功能免费。
        </li>
        <li>
          <strong>2. PDF24（Windows / Mac）</strong>：桌面应用，完全离线；一个套件里 40+ PDF 工具；免费，无需账户（pdf24.org）。
        </li>
        <li>
          <strong>3. LibreOffice Draw</strong>：开源、跨平台；可直接编辑 PDF；完全离线；适合表单填写和基础编辑。
        </li>
        <li>
          <strong>4. macOS 预览</strong>：系统内置，无需安装；可合并、拆分、注释 PDF；100% 本地处理，但仅限 Mac。
        </li>
        <li>
          <strong>5. PDFsam</strong>：开源桌面应用；拆分、合并、旋转、提取页面；离线且不收集数据（pdfsam.org）。
        </li>
      </ul>

      <h2 id="compare" className="text-2xl font-semibold mt-10">
        3. 对比表
      </h2>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-line">
              <th className="py-2 pr-4 text-left font-semibold">工具</th>
              <th className="py-2 pr-4 text-left font-semibold">隐私</th>
              <th className="py-2 pr-4 text-left font-semibold">费用</th>
              <th className="py-2 pr-4 text-left font-semibold">平台</th>
              <th className="py-2 text-left font-semibold">最佳用途</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-line"><td className="py-2 pr-4">PDF Merge Next</td><td className="py-2 pr-4">100% 本地</td><td className="py-2 pr-4">免费</td><td className="py-2 pr-4">浏览器</td><td className="py-2">快速合并</td></tr>
            <tr className="border-b border-line"><td className="py-2 pr-4">PDF24</td><td className="py-2 pr-4">100% 本地</td><td className="py-2 pr-4">免费</td><td className="py-2 pr-4">Win / Mac</td><td className="py-2">完整 PDF 套件</td></tr>
            <tr className="border-b border-line"><td className="py-2 pr-4">LibreOffice</td><td className="py-2 pr-4">100% 本地</td><td className="py-2 pr-4">免费</td><td className="py-2 pr-4">跨平台</td><td className="py-2">PDF 编辑</td></tr>
            <tr className="border-b border-line"><td className="py-2 pr-4">macOS 预览</td><td className="py-2 pr-4">100% 本地</td><td className="py-2 pr-4">免费</td><td className="py-2 pr-4">仅 Mac</td><td className="py-2">Mac 用户</td></tr>
            <tr className="border-b border-line"><td className="py-2 pr-4">PDFsam</td><td className="py-2 pr-4">100% 本地</td><td className="py-2 pr-4">免费 / 开源</td><td className="py-2 pr-4">跨平台</td><td className="py-2">拆分 / 合并</td></tr>
            <tr><td className="py-2 pr-4">Smallpdf</td><td className="py-2 pr-4">服务端</td><td className="py-2 pr-4">免费增值</td><td className="py-2 pr-4">浏览器</td><td className="py-2">便利</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="bottom" className="text-2xl font-semibold mt-10">
        4. 结论
      </h2>
      <p className="mt-3">
        如果你的文档敏感，先停止上传它们，改用本地工具。PDF Merge Next 是最省事的浏览器端选项：无需安装、无需账户，直接拖放即可，文件全程留在你的设备上。
      </p>

      <section className="mt-10 rounded-lg border border-line bg-subtle p-6">
        <h2 className="text-lg font-semibold">关于 pdfmergenext.shop</h2>
        <p className="mt-2 text-sm leading-relaxed text-fg-muted">
          我们相信 PDF 工具应该尊重你的隐私。试试我们的<strong>免费 PDF 合并器</strong>，文件永不离开你的设备。
          想看得更细，可以读<a href="/blog/pdfmergenext-vs-smallpdf-vs-ilovepdf" className="text-primary hover:underline">PDFMergeNext vs Smallpdf vs iLovePDF</a>、
          <a href="/blog/how-zero-upload-pdf-tools-work" className="text-primary hover:underline">零上传 PDF 工具如何工作</a>，
          以及<a href="/blog/client-side-vs-server-side-pdf-tools" className="text-primary hover:underline">客户端 vs 服务端 PDF 工具</a>。
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-title font-semibold text-fg">相关阅读 / Related</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Link href="/blog/pdf-merge-paid-vs-free" className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle">
            <p className="text-sm font-semibold text-fg">付费 vs 免费 PDF 合并工具</p>
            <p className="mt-1 text-xs text-fg-secondary">四个维度逐项对比</p>
          </Link>
          <Link href="/blog/ilovepdf-alternatives-no-upload" className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle">
            <p className="text-sm font-semibold text-fg">iLovePDF 替代方案</p>
            <p className="mt-1 text-xs text-fg-secondary">5 个零上传的本地工具</p>
          </Link>
          <Link href="/blog/how-zero-upload-pdf-tools-work" className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle">
            <p className="text-sm font-semibold text-fg">零上传 PDF 工具如何工作</p>
            <p className="mt-1 text-xs text-fg-secondary">WebAssembly 本地处理</p>
          </Link>
          <Link href="/blog/browser-pdf-merge-privacy" className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle">
            <p className="text-sm font-semibold text-fg">浏览器合并的隐私</p>
            <p className="mt-1 text-xs text-fg-secondary">文件到底去了哪</p>
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
