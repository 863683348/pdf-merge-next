import type { Metadata } from 'next';
import Link from 'next/link';
import type { ToolId } from './ToolClient';
import { ToolClientLoader } from './ToolClientLoader';

const SITE_URL = 'https://pdfmergenext.shop';

export type ToolPageId =
  | 'split'
  | 'compress'
  | 'rotate'
  | 'pdf-to-image'
  | 'encrypt';

interface ToolContent {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  h1: string;
  intro: string[];
  steps: { h: string; body: string }[];
  faqs: { q: string; a: string }[];
  related: { href: string; label: string }[];
  feature: string;
  functional: boolean;
}

export const TOOLS: Record<ToolPageId, ToolContent> = {
  split: {
    slug: '/split-pdf',
    title: 'Split PDF Online Free — Extract Pages, No Upload | PDFMergeNext',
    description:
      'Split or extract PDF pages in your browser. Use 1-3,5 syntax, files never leave your device. Free, no sign-up, no watermark.',
    keywords: ['split pdf', 'extract pdf pages', '拆分 PDF', 'PDF 提取页面', 'split pdf no upload', 'local pdf split'],
    h1: 'Split PDF Online — Extract Pages Locally, No Upload',
    intro: [
      'PDFMergeNext 的拆分工具在浏览器本地运行：用 1-3,5 这样的语法挑出需要的页面，生成一个干净的新 PDF。文件不会上传到任何服务器。Split PDF pages right in your browser: type a range like 1-3,5 to pull out exactly the pages you need into a clean new file. Your file never leaves your device.',
      '适合「一份 50 页合同只要签字页和附件」「把双面扫描的正反面拆开」这类场景。Great for "I only need the signature page and appendix" or "separate the front and back of a duplex scan".',
    ],
    steps: [
      { h: '1. 选择文件 / Choose file', body: '拖入或选择 PDF。解析全部在本地完成，不上传。Drop or pick a PDF. Parsing is fully local.' },
      { h: '2. 输入页面范围 / Enter a range', body: '例如 1-3,5 提取第 1–3 页和第 5 页；-3 取前三页；5- 取第五页到最后。E.g. 1-3,5 grabs pages 1–3 and 5.' },
      { h: '3. 生成并下载 / Generate & download', body: '点击运行，浏览器本地生成新 PDF 并直接下载，无水印。Click run; the new PDF is built locally and downloaded, watermark-free.' },
    ],
    faqs: [
      { q: '拆分 PDF 需要上传吗？', a: '不需要。所有解析与拆分都在你的浏览器本地完成，文件不会离开设备。No upload. Everything runs locally in your browser.' },
      { q: '能只提取某几页吗？', a: '可以。用 1-3,5 这样的语法精确挑页；留空或填 all 则提取全部。Yes — use 1-3,5 to extract exactly the pages you want.' },
      { q: '拆分后会保留超链接和书签吗？', a: '会尽量保留原文件的内部链接与书签；个别复杂 PDF 可能部分丢失。Internal links and bookmarks are preserved where possible.' },
      { q: '文件有大小限制吗？', a: '免费、无水印，不硬性限制大小；超大文件取决于本机内存。Free, no watermark, no hard size limit; very large files depend on your device memory.' },
    ],
    related: [
      { href: '/compress-pdf', label: '压缩 PDF / Compress PDF' },
      { href: '/rotate-pdf', label: '旋转 PDF / Rotate PDF' },
      { href: '/blog/privacy-first-pdf-workflow', label: '隐私工作流 / Privacy Workflow' },
      { href: '/', label: '合并 PDF / Merge PDF' },
    ],
    feature: 'PDF 拆分（本地）',
    functional: true,
  },

  compress: {
    slug: '/compress-pdf',
    title: 'Compress PDF Online Free — Smaller File, No Upload | PDFMergeNext',
    description:
      'Compress PDF files in your browser to reduce size. No upload, no sign-up, no watermark. Private and free.',
    keywords: ['compress pdf', 'reduce pdf size', '压缩 PDF', 'PDF 减小体积', 'compress pdf no upload', 'local pdf compress'],
    h1: 'Compress PDF Online — Shrink Files Locally, No Upload',
    intro: [
      'PDFMergeNext 的压缩工具在浏览器内对 PDF 重新序列化以减小体积——文件不上传，服务器无从获取你的内容。Compress PDFs right in your browser by re-serializing the file to shrink it. Nothing is uploaded; the server never sees your content.',
      '适合邮件附件超限、网盘空间紧张时先瘦身再发送。Handy when an email attachment is too large or cloud storage is tight — shrink before you send.',
    ],
    steps: [
      { h: '1. 选择 PDF / Choose a PDF', body: '拖入或选择文件，本地解析。Drop or pick a PDF; parsed locally.' },
      { h: '2. 点击压缩 / Click compress', body: '浏览器在本地重新序列化 PDF，去除冗余对象、压缩交叉引用流。We re-serialize the PDF locally, trimming redundant objects.' },
      { h: '3. 下载 / Download', body: '生成体积更小的 PDF 并直接下载，无水印。Get a smaller PDF, downloaded locally, watermark-free.' },
    ],
    faqs: [
      { q: '压缩 PDF 需要上传吗？', a: '不需要。压缩在你的浏览器本地完成，文件不出设备。No. Compression runs locally in your browser.' },
      { q: '能压小多少？', a: '对文本型、含重复对象的 PDF 效果明显；对已经高度压缩的图片型扫描件提升有限——这是浏览器内本地处理的真实边界。Text-heavy and redundant PDFs shrink noticeably; already-compressed image scans have less headroom — an honest limit of in-browser processing.' },
      { q: '会损失内容或清晰度吗？', a: '不会。我们做的是重新打包而非重编码图像，页面内容与原分辨率都保留。No. We repackage, not re-encode; content and resolution are preserved.' },
      { q: '压缩后还能再合并吗？', a: '可以。压缩结果是标准 PDF，能用本工具继续合并或拆分。Yes — the result is a standard PDF you can merge or split again.' },
    ],
    related: [
      { href: '/split-pdf', label: '拆分 PDF / Split PDF' },
      { href: '/pdf-to-image', label: '转图片 / To Image' },
      { href: '/blog/privacy-first-pdf-workflow', label: '隐私工作流 / Privacy Workflow' },
      { href: '/', label: '合并 PDF / Merge PDF' },
    ],
    feature: 'PDF 压缩（本地）',
    functional: true,
  },

  rotate: {
    slug: '/rotate-pdf',
    title: 'Rotate PDF Online Free — Turn Pages, No Upload | PDFMergeNext',
    description:
      'Rotate PDF pages 90/180/270 degrees in your browser. No upload, no sign-up, no watermark. Free and private.',
    keywords: ['rotate pdf', 'turn pdf pages', '旋转 PDF', 'PDF 转正', 'rotate pdf no upload', 'local pdf rotate'],
    h1: 'Rotate PDF Online — Flip Pages Locally, No Upload',
    intro: [
      '扫描件歪了、导出的页面方向不对？PDFMergeNext 的旋转工具在浏览器本地把每一页统一转正，文件不上传。Scanned pages sideways? Exported pages the wrong way up? Rotate every page locally in your browser — no upload.',
      '支持 90°/180°/270°，在原角度上累加，不会破坏内容。Supports 90/180/270 degrees, added to the current rotation, without altering content.',
    ],
    steps: [
      { h: '1. 选择 PDF / Choose a PDF', body: '拖入或选择文件，本地解析。Drop or pick a PDF; parsed locally.' },
      { h: '2. 选角度 / Pick an angle', body: '90°、180° 或 270°，会累加到页面当前角度。90, 180, or 270 degrees, added to the page’s current angle.' },
      { h: '3. 旋转并下载 / Rotate & download', body: '点击运行，本地生成旋转后的 PDF 并下载，无水印。Click run; the rotated PDF is built locally and downloaded.' },
    ],
    faqs: [
      { q: '旋转 PDF 需要上传吗？', a: '不需要。旋转在浏览器本地完成，文件不出设备。No upload — rotation runs locally.' },
      { q: '能只旋转某一页吗？', a: '当前版本对全部页面统一旋转；如需单页处理，可先用拆分工具取出该页再旋转。This version rotates all pages uniformly; for a single page, split it out first, then rotate.' },
      { q: '旋转会损失清晰度吗？', a: '不会。旋转只改页面方向元数据，不改图像内容。No — rotation only changes orientation metadata, not image data.' },
    ],
    related: [
      { href: '/split-pdf', label: '拆分 PDF / Split PDF' },
      { href: '/compress-pdf', label: '压缩 PDF / Compress PDF' },
      { href: '/', label: '合并 PDF / Merge PDF' },
    ],
    feature: 'PDF 旋转（本地）',
    functional: true,
  },

  'pdf-to-image': {
    slug: '/pdf-to-image',
    title: 'PDF to Image — Convert Pages to PNG/JPEG, No Upload | PDFMergeNext',
    description:
      'Convert PDF pages to PNG or JPEG images in your browser. No upload, no sign-up. Free and private.',
    keywords: ['pdf to image', 'pdf to png', 'pdf to jpg', 'PDF 转图片', 'PDF 转 PNG', 'pdf to image no upload'],
    h1: 'PDF to Image — Render Pages to PNG/JPEG Locally, No Upload',
    intro: [
      '把 PDF 的每一页渲染成图片，方便插入文档、做缩略图或分享到不支持 PDF 的地方。全部在浏览器本地完成，文件不上传。Turn every PDF page into an image for slides, thumbnails, or sharing where PDFs aren’t supported. Everything runs locally — no upload.',
      '可选清晰度（1×/2×/3×）与格式（PNG/JPEG）。Choose scale (1×/2×/3×) and format (PNG/JPEG).',
    ],
    steps: [
      { h: '1. 选择 PDF / Choose a PDF', body: '拖入或选择文件，本地解析。Drop or pick a PDF; parsed locally.' },
      { h: '2. 设清晰度与格式 / Set scale & format', body: '清晰度越高图片越清晰但体积越大；PNG 无损、JPEG 更小。Higher scale = sharper but bigger; PNG is lossless, JPEG smaller.' },
      { h: '3. 渲染并下载 / Render & download', body: '每页生成一张图片并自动下载，无水印。Each page becomes an image, downloaded automatically, watermark-free.' },
    ],
    faqs: [
      { q: 'PDF 转图片需要上传吗？', a: '不需要。渲染在你的浏览器本地完成，文件不出设备。No — rendering runs locally in your browser.' },
      { q: '转出来的图清晰度如何？', a: '由你选的清晰度决定：2× 适合大多数场景，3× 适合印刷或放大。Controlled by the scale you pick: 2× fits most uses, 3× for print or zoom.' },
      { q: '文字还能复制吗？', a: '不能。转成图片后文字变为像素，不再可选中；如需可搜索文本请保留原 PDF。No — images are not selectable; keep the original PDF for searchable text.' },
    ],
    related: [
      { href: '/split-pdf', label: '拆分 PDF / Split PDF' },
      { href: '/compress-pdf', label: '压缩 PDF / Compress PDF' },
      { href: '/rotate-pdf', label: '旋转 PDF / Rotate PDF' },
    ],
    feature: 'PDF 转图片（本地）',
    functional: true,
  },

  encrypt: {
    slug: '/encrypt-pdf',
    title: 'Password-Protect a PDF — Local & Private Guide | PDFMergeNext',
    description:
      'How to password-protect a PDF locally and privately. Understand encryption, and how PDFMergeNext handles encrypted files — no upload.',
    keywords: ['password protect pdf', 'encrypt pdf', 'PDF 加密', 'PDF 设密码', 'protect pdf locally', 'pdf encryption guide'],
    h1: 'Password-Protect a PDF — A Local, Private Guide',
    intro: [
      'PDFMergeNext 目前专注于「合并、拆分、压缩、旋转、转图」这几件本地就能做好的事。加密/设置打开密码是另一类操作：浏览器纯前端目前难以在不引入重型依赖的情况下可靠地写入 PDF 加密。PDFMergeNext focuses on merge, split, compress, rotate, and PDF-to-image — all things the browser does well locally. Encryption (setting an open password) is a different job; doing it reliably in pure front-end code without heavy dependencies is still impractical.',
      '但「隐私优先」的工作流里，密码保护很重要。下面讲清楚本地场景下你能怎么做，以及本工具已经帮到你哪里。But password protection still matters in a privacy-first workflow. Here is what you can do locally today, and where this tool already helps.',
    ],
    steps: [
      { h: '1. 先用本地工具处理，最后再加密 / Process locally first, encrypt last', body: '先用 PDFMergeNext 在本地完成合并/拆分/压缩，避免在多个在线工具间反复上传。Do your merge/split/compress locally here, so the file never travels to a server before it is locked.' },
      { h: '2. 用你信任的本地软件设密码 / Set the password in software you trust', body: '桌面端 PDF 阅读器（如本机安装的离线工具）可在本地给文件设打开密码；过程不联网更稳妥。A desktop PDF app you trust can set an open password entirely offline.' },
      { h: '3. 带密码的 PDF 也能继续合并 / Encrypted PDFs still merge here', body: '如果你有密码、用正确密码解密，PDFMergeNext 的合并流程可继续处理——解密也在本地。If you supply the correct password, our merge flow decrypts and processes it locally.' },
    ],
    faqs: [
      { q: 'PDFMergeNext 能直接给 PDF 设密码吗？', a: '目前不能。浏览器纯前端可靠地写入 PDF 加密还不现实；我们把精力放在本地能做到极致的合并/拆分/压缩/旋转/转图上。Not yet — reliable in-browser PDF encryption isn’t practical today. We focus on what the browser does best locally.' },
      { q: '那我的文件怎么保护？', a: '先在本地完成所有处理（用本工具），最后用你信任的离线桌面软件设打开密码，全程不联网最稳妥。Process everything locally first, then set the open password in a trusted offline desktop app.' },
      { q: '带密码的 PDF 能用本工具合并吗？', a: '可以，前提是你知道密码并在本地正确解密；我们不会尝试破解任何密码。Yes, if you know the password and decrypt it locally — we never attempt to crack passwords.' },
    ],
    related: [
      { href: '/', label: '合并 PDF / Merge PDF' },
      { href: '/split-pdf', label: '拆分 PDF / Split PDF' },
      { href: '/compress-pdf', label: '压缩 PDF / Compress PDF' },
      { href: '/rotate-pdf', label: '旋转 PDF / Rotate PDF' },
    ],
    feature: 'PDF 加密指南（本地）',
    functional: false,
  },
};

export function makeToolMetadata(id: ToolPageId): Metadata {
  const t = TOOLS[id];
  const url = `${SITE_URL}${t.slug}`;
  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    alternates: {
      canonical: t.slug,
      languages: {
        'zh-CN': t.slug,
        'en-US': t.slug,
        'x-default': t.slug,
      },
    },
    openGraph: {
      type: 'website',
      url,
      siteName: 'PDFMergeNext',
      title: t.title,
      description: t.description,
      locale: 'en_US',
      alternateLocale: ['zh_CN'],
      images: [{ url: '/og', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.description,
      images: ['/og'],
    },
  };
}

export default function ToolPage({ tool }: { tool: ToolPageId }) {
  const t = TOOLS[tool];
  const url = `${SITE_URL}${t.slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '首页 / Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: '工具箱 / Tools', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 3, name: t.h1, item: url },
        ],
      },
      {
        '@type': 'WebApplication',
        name: `PDFMergeNext ${t.h1}`,
        url,
        description: t.description,
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Any (browser)',
        inLanguage: ['zh-CN', 'en'],
        offers: [
          { '@type': 'Offer', name: 'Free', price: '0', priceCurrency: 'USD' },
        ],
        featureList: [t.feature, '本地处理', '文件不上传', '免注册', '无水印', '手机可用'],
      },
      {
        '@type': 'FAQPage',
        mainEntity: t.faqs.map((it) => ({
          '@type': 'Question',
          name: it.q,
          acceptedAnswer: { '@type': 'Answer', text: it.a },
        })),
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
        <span>{t.h1}</span>
      </nav>

      <h1 className="text-3xl font-bold leading-tight">{t.h1}</h1>

      {t.intro.map((p, i) => (
        <p key={i} className="mt-3 text-fg-secondary">
          {p}
        </p>
      ))}

      {t.functional ? (
        <ToolClientLoader tool={tool as ToolId} />
      ) : (
        <div className="my-6 rounded-lg border border-primary/30 bg-primary/5 p-4 text-sm">
          <strong className="block mb-1 text-primary">提示 / Note</strong>
          本页是本地隐私指南，工具的下一项能力正在规划中。先体验已上线的本地工具：
          <Link href="/" className="font-semibold text-primary underline">合并 PDF</Link>
          。This page is a local-privacy guide; the next tool capability is on our roadmap. Try the live local tool:
          <Link href="/" className="font-semibold text-primary underline"> Merge PDF</Link>.
        </div>
      )}

      <h2 className="text-2xl font-semibold mt-10">操作步骤 / How it works</h2>
      <div className="mt-3 space-y-3">
        {t.steps.map((s, i) => (
          <div key={i}>
            <p className="font-semibold text-fg">{s.h}</p>
            <p className="mt-1 text-fg-secondary">{s.body}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-10">常见问题 / FAQ</h2>
      <div className="mt-4 space-y-4">
        {t.faqs.map((f, i) => (
          <div key={i}>
            <p className="font-semibold text-fg">{f.q}</p>
            <p className="mt-1 text-fg-secondary">{f.a}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-lg bg-subtle p-4 text-sm">
        <strong className="block mb-2">相关工具 / Related tools</strong>
        <ul className="space-y-1">
          {t.related.map((r) => (
            <li key={r.href}>
              <Link href={r.href} className="text-primary hover:underline">
                {r.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
