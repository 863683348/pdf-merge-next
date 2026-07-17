// 常见问题内容（中英双语）。单一数据源：
// - 可见的 FaqSection 组件读取此处渲染手风琴
// - layout.tsx 的 JSON-LD（FAQPage 结构化数据）也从此处生成，确保 DOM 与结构化数据一致
// 问题设计刻意覆盖 2026 年上升的 PDF 合并长尾趋势词：
// 不上传 / 隐私 / 本地离线 / 免注册 / 无水印 / 手机 / 免费 / 按页抽取 / 排序

export interface FaqItem {
  id: string;
  q: { zh: string; en: string };
  a: { zh: string; en: string };
}

export const faqContent: {
  title: { zh: string; en: string };
  subtitle: { zh: string; en: string };
  items: FaqItem[];
} = {
  title: {
    zh: '常见问题',
    en: 'Frequently Asked Questions',
  },
  subtitle: {
    zh: '关于隐私、收费与功能，你可能想知道的这些。',
    en: 'Privacy, pricing, and capabilities — the things you probably want to know.',
  },
  items: [
    {
      id: 'privacy',
      q: {
        zh: '合并 PDF 时我的文件会被上传吗？',
        en: 'Are my files uploaded when I merge PDFs?',
      },
      a: {
        zh: '不会。MergeLocal 完全在您的浏览器本地运行，所有解析与合并都在您的设备（端侧）完成，文件不会上传到任何服务器，我们也无法看到您的内容。非常适合合同、财务报表、身份证件等敏感文档。',
        en: 'No. MergeLocal runs entirely in your browser. All parsing and merging happen on your device (on-device / client-side). Files are never uploaded to any server, and we cannot see your content. Ideal for contracts, financial statements, and ID documents.',
      },
    },
    {
      id: 'no-install',
      q: {
        zh: '合并 PDF 需要注册账号或下载软件吗？',
        en: 'Do I need to register or install software to merge PDFs?',
      },
      a: {
        zh: '都不需要。这是一个网页版工具，打开即用，免注册、免安装、零配置。它也不依赖任何云端 AI 服务，文件全程留在本地。',
        en: 'Neither. It is a web-based tool — open and use it instantly, no sign-up, no install, no configuration. It also does not rely on any cloud AI service; your files stay local.',
      },
    },
    {
      id: 'watermark',
      q: {
        zh: '合并后的 PDF 会带水印或质量下降吗？',
        en: 'Will the merged PDF have a watermark or lose quality?',
      },
      a: {
        zh: '不会。合并是原样拼接各 PDF 的页面，不重新压缩、不添加水印，最大程度保留原始版式与清晰度。',
        en: 'No. Merging concatenates pages as-is — no re-compression, no watermark — preserving the original layout and clarity.',
      },
    },
    {
      id: 'mobile',
      q: {
        zh: '可以在手机上合并 PDF 吗？',
        en: 'Can I merge PDFs on my phone?',
      },
      a: {
        zh: '可以。页面已做移动端适配，直接在手机浏览器打开即可拖拽排序、按页抽取并合并，无需安装 App。',
        en: 'Yes. The page is mobile-responsive — open it in your phone browser to reorder, select pages, and merge, no app needed.',
      },
    },
    {
      id: 'free',
      q: {
        zh: '合并 PDF 免费吗？',
        en: 'Is merging PDFs free?',
      },
      a: {
        zh: '免费版即可使用核心合并功能，不收费、无水印。免费版单次最多 5 个文件、总计不超过 200 MB；更大批量可在本地分批处理。',
        en: 'The core merge is free — no charge, no watermark. The free tier allows up to 5 files and 200 MB total per merge; larger batches can be processed locally in several passes.',
      },
    },
    {
      id: 'reorder-extract',
      q: {
        zh: '支持调整顺序和只合并部分页面吗？',
        en: 'Can I reorder files and merge only some pages?',
      },
      a: {
        zh: '支持。可拖拽或点上移 / 下移按钮调整文件顺序，也能展开任意文件、用页码范围（如 1-3, 5）只抽取需要的页面再合并。',
        en: 'Yes. Reorder files by dragging or using the up / down buttons, and expand any file to merge only a page range (e.g. 1-3, 5).',
      },
    },
    {
      id: 'large',
      q: {
        zh: '大文件或多页 PDF 能合并吗？',
        en: 'Can large or multi-page PDFs be merged?',
      },
      a: {
        zh: '可以。由于处理全程在本地浏览器进行，速度取决于您的设备性能与内存。免费版有文件数与体积上限，超出时可分批合并。',
        en: 'Yes. Since processing happens locally in your browser, speed depends on your device performance and memory. The free tier has file-count and size limits; merge in batches if you exceed them.',
      },
    },
    {
      id: 'why-local',
      q: {
        zh: '为什么选本地 / 离线合并而不是在线工具？',
        en: 'Why choose local / offline merging over online tools?',
      },
      a: {
        zh: '在线工具需要把文件传到对方服务器，涉密合同、财务报表、证件扫描件存在泄露风险。本地合并让文件始终留在您的设备上，隐私更有保障，也不受网络速度影响。',
        en: 'Online tools upload your files to their servers, risking leaks for confidential contracts, financials, or IDs. Local merging keeps files on your device — better privacy, and no dependence on network speed.',
      },
    },
  ],
};
