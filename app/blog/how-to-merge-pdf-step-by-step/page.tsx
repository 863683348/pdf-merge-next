import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';

export const metadata: Metadata = {
  title: '怎么合并PDF：完整步骤图解 / How to Merge PDF: Step-by-Step | PDFMergeNext',
  description:
    '怎么合并PDF？一份完整步骤图解：用浏览器本地工具(PDFMergeNext)合并，文件不上传、可断网、免注册无水印。含方法对比、挑页合并与手机端操作。',
  keywords: [
    '怎么合并pdf',
    '合并pdf 步骤',
    'pdf合并教程',
    '如何合并pdf文件',
    '浏览器合并pdf',
    '本地合并pdf',
    'how to merge pdf',
    'merge pdf step by step',
    'merge pdf in browser',
    'pdf merge guide',
  ],
  alternates: {
    canonical: '/blog/how-to-merge-pdf-step-by-step',
    languages: {
      'zh-CN': '/blog/how-to-merge-pdf-step-by-step',
      'en-US': '/blog/how-to-merge-pdf-step-by-step',
      'x-default': '/blog/how-to-merge-pdf-step-by-step',
    },
  },
  openGraph: {
    title: '怎么合并PDF：完整步骤图解 · PDFMergeNext',
    description: '用浏览器本地工具合并 PDF，文件不上传、可断网、免注册无水印。含方法对比与挑页合并。',
    url: `${SITE_URL}/blog/how-to-merge-pdf-step-by-step`,
    type: 'article',
    publishedTime: '2026-08-18T00:00:00.000Z',
    authors: ['PDFMergeNext'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '怎么合并PDF：完整步骤图解 · PDFMergeNext',
    description: '用浏览器本地工具合并 PDF，文件不上传、可断网、免注册无水印。',
  },
};

// 文章级 FAQ：覆盖本文 PAA 长尾词，配 FAQPage schema 抢精选摘要。
const ARTICLE_FAQ: { q: string; a: string }[] = [
  {
    q: '合并后的文件会和原来一样清晰吗？',
    a: '会。本地合并只是把现有页面重新封装进一个新 PDF，不重新压缩图像，所以清晰度不变。PDFMergeNext 在浏览器里用 pdf.js 解析、pdf-lib 重组，整个过程不产生上传请求。',
  },
  {
    q: 'Will merging change the original files?',
    a: 'No. PDFMergeNext reads your files and writes a new merged file; your originals stay untouched on disk. The merge runs locally, so nothing is sent anywhere.',
  },
  {
    q: '合并加密或有密码的 PDF 怎么办？',
    a: '先输入正确密码解锁再合并。本地工具在你的设备上验证密码，密码本身也不上传。合并后的文件默认不带密码，需要的话可在合并后单独设置。',
  },
  {
    q: 'Can I merge password-protected PDFs?',
    a: 'Unlock them with the correct password first. The password is checked locally on your device and never uploaded. The merged file comes out without a password unless you add one afterward.',
  },
];

const TOC = [
  { id: 'lead', label: '一句话结论 / TL;DR' },
  { id: 'why-local', label: '为什么用本地工具合并' },
  { id: 'compare', label: '三种合并方法对比' },
  { id: 'method-browser', label: '方法一:PDFMergeNext 步骤' },
  { id: 'method-mac', label: '方法二:macOS 预览' },
  { id: 'method-desktop', label: '方法三:桌面软件 PDFsam' },
  { id: 'pick-pages', label: '进阶:只合并指定页' },
  { id: 'mobile', label: '手机上怎么合并' },
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
            name: '怎么合并PDF：完整步骤图解',
            item: `${SITE_URL}/blog/how-to-merge-pdf-step-by-step`,
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
        headline: '怎么合并PDF：完整步骤图解 / How to Merge PDF: Step-by-Step',
        description:
          '怎么合并PDF？一份完整步骤图解：用浏览器本地工具合并，文件不上传、可断网、免注册无水印。含方法对比、挑页合并与手机端操作。',
        author: { '@type': 'Person', name: 'PDFMergeNext', url: 'https://pdfmergenext.shop', '@id': 'https://pdfmergenext.shop/#organization' },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-08-18',
        dateModified: '2026-08-18',
        image: `${SITE_URL}/og`,
        url: `${SITE_URL}/blog/how-to-merge-pdf-step-by-step`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/how-to-merge-pdf-step-by-step` },
      },
    ],
  };

  return (
    <article className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-16">
      <header>
        <p className="text-caption font-semibold uppercase tracking-wide text-brand">
          PDF 合并 · 操作教程
        </p>
        <h1 className="mt-2 text-h1 font-bold tracking-tight text-fg">
          怎么合并PDF：完整步骤图解 / How to Merge PDF: Step-by-Step
        </h1>
        <p className="mt-3 text-body text-fg-secondary">
          怎么合并PDF？下面用浏览器本地工具演示完整流程——文件全程不上传，顺手教你怎么挑页、怎么在手机上合并。
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
        {/* 导语：直接回答，抢精选摘要 */}
        <section id="lead" className="rounded-xl border border-brand/30 bg-brand/5 p-6">
          <h2 className="text-title font-semibold text-fg">一句话结论</h2>
          <p className="mt-2 text-fg-secondary">
            <strong>怎么合并PDF</strong> 最简单：打开 <Link href="/" className="text-brand hover:underline">PDFMergeNext</Link> → 拖入文件 → 拖拽排序 → 点合并 → 下载。整个过程在浏览器本地完成，文件不会离开你的设备，断网也能跑。
          </p>
          <p className="mt-2 text-fg-secondary">
            The simplest way to merge a PDF: open PDFMergeNext, drop in your files, reorder, hit Merge, download. Everything runs locally in your browser — nothing leaves your device, and it works offline.
          </p>
        </section>

        {/* 为什么本地 */}
        <section id="why-local">
          <h2 className="text-title font-semibold text-fg">为什么我更推荐本地合并 / Why merge locally</h2>
          <p className="mt-2 text-fg-secondary">
            在线合并工具大多先把文件传到服务器，处理完再发回来。你没法确认对方会不会留存、会不会拿去训练模型。本地工具直接在浏览器里用 pdf.js 解析、pdf-lib 重组，没有上传这一步，自然也就没有这些顾虑。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-fg-secondary">
            <li>文件不出设备，没有服务器日志，也没有跨境传输。</li>
            <li>不挑网络，地铁里、飞机上都能用。</li>
            <li>免注册、无水印，合并完直接下载。</li>
          </ul>
        </section>

        {/* 方法对比表 */}
        <section id="compare">
          <h2 className="text-title font-semibold text-fg">三种合并方法对比 / Three methods compared</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-subtle text-left text-fg">
                  <th className="border border-line px-3 py-2">方法</th>
                  <th className="border border-line px-3 py-2">上传到服务器</th>
                  <th className="border border-line px-3 py-2">需安装</th>
                  <th className="border border-line px-3 py-2">水印</th>
                  <th className="border border-line px-3 py-2">挑页合并</th>
                  <th className="border border-line px-3 py-2">手机端</th>
                </tr>
              </thead>
              <tbody className="text-fg-secondary">
                <tr>
                  <td className="border border-line px-3 py-2 font-medium text-fg">浏览器工具（PDFMergeNext）</td>
                  <td className="border border-line px-3 py-2">否</td>
                  <td className="border border-line px-3 py-2">否</td>
                  <td className="border border-line px-3 py-2">否</td>
                  <td className="border border-line px-3 py-2">是</td>
                  <td className="border border-line px-3 py-2">是</td>
                </tr>
                <tr>
                  <td className="border border-line px-3 py-2 font-medium text-fg">macOS 预览（Preview）</td>
                  <td className="border border-line px-3 py-2">否</td>
                  <td className="border border-line px-3 py-2">内置</td>
                  <td className="border border-line px-3 py-2">否</td>
                  <td className="border border-line px-3 py-2">部分</td>
                  <td className="border border-line px-3 py-2">否</td>
                </tr>
                <tr>
                  <td className="border border-line px-3 py-2 font-medium text-fg">桌面软件（PDFsam Basic）</td>
                  <td className="border border-line px-3 py-2">否</td>
                  <td className="border border-line px-3 py-2">是</td>
                  <td className="border border-line px-3 py-2">否</td>
                  <td className="border border-line px-3 py-2">是</td>
                  <td className="border border-line px-3 py-2">否</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-caption text-fg-muted">
            三者都不上传文件，差别在平台、易用性和能不能挑页。对多数人来说，浏览器工具门槛最低，也是唯一同时支持手机和挑页的选项。
          </p>
        </section>

        {/* 方法一 */}
        <section id="method-browser">
          <h2 className="text-title font-semibold text-fg">方法一:用 PDFMergeNext 合并 / Browser tool steps</h2>
          <p className="mt-2 text-fg-secondary">这是最快的一条路，打开网页就能用。</p>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-fg-secondary">
            <li>
              打开 <Link href="/" className="text-brand hover:underline">pdfmergenext.shop</Link>，页面会先把 pdf.js 和 pdf-lib 加载进浏览器。
            </li>
            <li>点“添加文件”，或直接把多个 PDF 拖进页面。</li>
            <li>在文件列表里拖拽，调整先后顺序。</li>
            <li>（可选）切到挑页模式，只合并每个文件的指定页。</li>
            <li>点“合并”，几秒内出结果。</li>
            <li>下载——文件从内存直接写回硬盘，全程不经任何服务器。</li>
          </ol>
          <p className="mt-3 text-fg-secondary">
            Open PDFMergeNext, drop in your PDFs, drag to reorder, hit Merge, and download. The whole pipeline runs on pdf.js + pdf-lib inside your browser — no install, no account, no upload.
          </p>
        </section>

        {/* 方法二 */}
        <section id="method-mac">
          <h2 className="text-title font-semibold text-fg">方法二:macOS 预览合并 / macOS Preview</h2>
          <p className="mt-2 text-fg-secondary">Mac 自带预览就能本地合并，适合不想装额外软件的人。</p>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-fg-secondary">
            <li>双击打开第一个 PDF，按 <code className="rounded bg-subtle px-1.5 py-0.5 text-sm">⌘</code>+<code className="rounded bg-subtle px-1.5 py-0.5 text-sm">Option</code>+<code className="rounded bg-subtle px-1.5 py-0.5 text-sm">2</code> 打开缩略图侧边栏。</li>
            <li>从访达把第二个 PDF 拖进侧边栏的目标位置。</li>
            <li>拖动缩略图调整页面顺序。</li>
            <li>选“文件 → 导出为 PDF”保存（别用“存储”，会覆盖原文件）。</li>
          </ol>
          <p className="mt-2 text-caption text-fg-muted">限制：只限 Mac，不能跨平台，挑页能力也有限。</p>
        </section>

        {/* 方法三 */}
        <section id="method-desktop">
          <h2 className="text-title font-semibold text-fg">方法三:桌面软件 PDFsam Basic / Desktop app</h2>
          <p className="mt-2 text-fg-secondary">
            PDFsam Basic 是开源免费的桌面应用（Win/Mac/Linux），本地处理、无水印，适合经常合并大批量文件的人。
          </p>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-fg-secondary">
            <li>从 pdfsam.org 下载 Basic 版（注意选免费的 Basic，不是付费 Enhanced）。</li>
            <li>装好后选 Merge 模块，添加或拖入 PDF。</li>
            <li>拖动行排序，展开行可设页码范围挑页。</li>
            <li>设好输出路径，点 Run 生成。</li>
          </ol>
        </section>

        {/* 挑页合并 */}
        <section id="pick-pages">
          <h2 className="text-title font-semibold text-fg">进阶:只合并指定页 / Pick specific pages</h2>
          <p className="mt-2 text-fg-secondary">
            多数工具只能整份合并，PDFMergeNext 支持从每个文件里抽指定页再合。比如
            <code className="mx-1 rounded bg-subtle px-1.5 py-0.5 text-sm">1-3, 5</code> 表示取第 1 到 3 页和第 5 页。几个好用的场景：
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-fg-secondary">
            <li>多份报告各取摘要页，拼成一份执行摘要。</li>
            <li>合同只留签字页和附件封面，删掉冗长正文。</li>
            <li>把扫描的证件正反面（各一页）并成单页文档。</li>
          </ul>
          <p className="mt-2 text-fg-secondary">
            Need just a few pages from each file? Pick ranges like 1–3, 5 before merging — most browser mergers don&apos;t offer this.
          </p>
        </section>

        {/* 手机端 */}
        <section id="mobile">
          <h2 className="text-title font-semibold text-fg">手机上怎么合并 / Merge on your phone</h2>
          <p className="mt-2 text-fg-secondary">
            浏览器工具天然支持手机：在 Chrome（Android）或 Safari（iOS）里打开页面，从相册或文件 App 选 PDF，排好序合并，结果直接进下载目录。不用装 App，也不上传。桌面那两招在手机上用不了。
          </p>
        </section>

        <section className="rounded-xl border border-line bg-subtle p-6">
          <h2 className="text-title font-semibold text-fg">马上试试</h2>
          <p className="mt-2 text-fg-secondary">
            打开 PDFMergeNext，拖入你的 PDF，几秒内在本机完成合并——文件从不上传。想了解背后的隐私机制，可以读我们的{' '}
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
            href="/blog/how-to-merge-pdf-without-uploading"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">如何不上传合并 PDF</p>
            <p className="mt-1 text-xs text-fg-secondary">可验证的完整指南 / Verifiable Guide</p>
          </Link>
          <Link
            href="/blog/pdfmergenext-vs-smallpdf-vs-ilovepdf"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">PDFMergeNext vs Smallpdf vs iLovePDF</p>
            <p className="mt-1 text-xs text-fg-secondary">2026 隐私与限制全对比 / Honest 2026 Comparison</p>
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
