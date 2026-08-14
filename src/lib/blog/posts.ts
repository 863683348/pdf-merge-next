/**
 * 博客文章元数据（列表页数据驱动，2026-08-10 由手工卡片改造而来）
 *
 * ⚠️ SEO 每日发布流程：新增文章 = 在此数组追加一条（date 用发布日期 YYYY-MM-DD），
 * 列表页自动按日期倒序渲染（无需再手动改 app/blog/page.tsx）。
 */
export interface BlogPostMeta {
  slug: string;
  tag: string;
  date: string; // YYYY-MM-DD
  zhTitle: string;
  enTitle: string;
  zhDesc: string;
}

export const BLOG_POSTS: BlogPostMeta[] = [
  {
    slug: "pdf-merge-no-upload-privacy-facts",
    tag: "隐私事实 · Privacy Facts",
    date: "2026-08-11",
    zhTitle: "文件不上传：7 个你必须清楚的隐私事实",
    enTitle: "7 Privacy Facts About No-Upload File",
    zhDesc:
      "合并 PDF 时\"文件不上传\"意味着什么？7 个隐私事实：没有上传就没有服务器日志、没有传输链路、没有第三方接触。以及哪些承诺其实说了等于没说。",
  },
  {
    slug: "client-side-vs-server-side-pdf-tools",
    tag: "架构对比 · Architecture",
    date: "2026-08-10",
    zhTitle: "客户端 PDF 工具 vs 服务器端：架构对比",
    enTitle: "Client-side vs Server-side PDF Tools: Architecture Compared",
    zhDesc:
      "同样叫合并 PDF，架构可能完全不同。客户端工具在浏览器本地处理、文件不出设备；服务器端工具把文件上传云端。隐私、速度、离线能力的差异全讲透。",
  },
  {
    slug: "pdfmergenext-privacy-design",
    tag: "产品设计 · Privacy Design",
    date: "2026-08-09",
    zhTitle: "PDFMergeNext 隐私设计白皮书",
    enTitle: "PDFMergeNext Privacy Design Deep Dive",
    zhDesc:
      "PDFMergeNext 的隐私设计是怎么落地的：文件为什么不上传、本地处理的技术架构、日志策略与安全边界。",
  },
  {
    slug: "offline-pdf-merge-limits",
    tag: "技术边界 · Offline Limits",
    date: "2026-08-08",
    zhTitle: "100% 离线PDF合并：理论可行性的边界",
    enTitle: "100% Offline PDF Merge: Limits of What's Possible",
    zhDesc:
      "离线PDF合并到底能走多远？浏览器本地处理的理论边界、实际瓶颈（内存/性能/加密 PDF/扫描件），以及哪些场景确实做不到 100% 离线。",
  },
  {
    slug: "browser-pdf-merge-privacy",
    tag: "隐私技术 · Privacy Tech",
    date: "2026-08-07",
    zhTitle: "浏览器合并PDF：WebAssembly 时代的隐私革命",
    enTitle: "Browser PDF Merge: Privacy Revolution",
    zhDesc:
      "浏览器合并PDF 为什么是隐私革命：文件不离开设备、没有服务器日志、没有传输链路。WebAssembly + pdf-lib 让本地合并足够流畅。",
  },
  {
    slug: "how-zero-upload-pdf-tools-work",
    tag: "隐私技术 · 原理剖析",
    date: "2026-08-06",
    zhTitle: "零上传PDF工具：工作原理全解析",
    enTitle: "How Zero-Upload PDF Tools Work — WebAssembly & Local Processing",
    zhDesc:
      "WebAssembly + pdf-lib 本地架构拆解：零网络请求如何实现、如何用 DevTools 自己验证、限制与边界。",
  },
  {
    slug: "why-local-pdf-merge-beats-online",
    tag: "PDF 合并 · 隐私优先",
    date: "2026-08-05",
    zhTitle: "为什么本地PDF合并比在线更安全",
    enTitle: "Why Local PDF Merge Beats Online — 7 Reasons",
    zhDesc:
      "从数据链路、服务器日志到中间人攻击逐层拆解本地 vs 在线合并的安全性差异，附本地方案对比与验证方法。",
  },
  {
    slug: "merge-pdf-no-upload",
    tag: "PDF 合并 · 中文指南",
    date: "2026-07-30",
    zhTitle: "合并PDF不上传：安全免费的本地离线解决方案",
    enTitle: "Merge PDF Without Uploading — Free & Secure Local Solution",
    zhDesc:
      "3 种不上传合并方案对比（浏览器/桌面/系统工具）、PDFMergeNext 完整使用步骤、隐私合规指南。",
  },
  {
    slug: "how-to-merge-pdf-without-uploading",
    tag: "PDF 合并 · 操作教程",
    date: "2026-07-27",
    zhTitle: "如何不上传合并 PDF:可验证的完整指南",
    enTitle: "How to Merge PDF Without Uploading (Step-by-Step, Verifiable)",
    zhDesc:
      "三种不上传合并方法对比，附 DevTools 验证零上传教程与挑页合并技巧。Three no-upload methods compared, plus a DevTools trick to verify it yourself.",
  },
  {
    slug: "pdfmergenext-vs-smallpdf-vs-ilovepdf",
    tag: "PDF 工具 · 对比测评",
    date: "2026-07-27",
    zhTitle: "PDFMergeNext vs Smallpdf vs iLovePDF：2026 隐私与限制全对比",
    enTitle: "PDFMergeNext vs Smallpdf vs iLovePDF: Honest 2026 Comparison",
    zhDesc:
      "全面的三工具对比——隐私、免费限制、挑页合并、水印、价格，附第三方实测数据。Honest comparison across privacy, free limits, page selection, watermarks, and pricing with third-party test data.",
  },
  {
    slug: "why-local-offline-pdf-merge",
    tag: "精选 · Featured",
    date: "2026-07-22",
    zhTitle: "为什么本地离线 PDF 合并才是隐私正解",
    enTitle: "Why Local, Offline PDF Merging Wins on Privacy",
    zhDesc:
      "文件不上传服务器，合同、证件、财务报表更安全。免注册、无水印、免费。",
  },
  {
    slug: "how-we-evaluate-privacy-first-pdf-tools",
    tag: "评测方法 · Evaluation",
    date: "2026-08-12",
    zhTitle: "隐私优先 PDF 工具评测标准：我们怎么打分",
    enTitle: "How We Evaluate Privacy-First PDF Tools",
    zhDesc:
      "评测隐私优先 PDF 工具时我们看什么：数据链路、服务器日志、上传时机、删除承诺的可验证性、以及离线能力。一套可以自己复用的评测清单。",
  },
  {
    slug: "devtools-network-tab-privacy-guide",
    tag: "隐私验证 · Privacy Verification",
    date: "2026-08-13",
    zhTitle: "用 DevTools 验证 PDF 工具是否真的不上传",
    enTitle: "DevTools Network Tab Privacy Guide",
    zhDesc:
      "别信宣传，自己验证：打开浏览器 DevTools 的 Net 面板，五分钟看清一个 PDF 工具到底有没有把文件传上服务器。带步骤的实操指南。",
  },
  {
    slug: "personal-pdf-privacy-vs-enterprise-saas",
    tag: "个人隐私 · Privacy",
    date: "2026-08-14",
    zhTitle: "个人隐私 PDF 工具 vs 企业 SaaS",
    enTitle: "Personal PDF Privacy vs Enterprise SaaS",
    zhDesc:
      "个人隐私 PDF 工具和企业级 SaaS 差在哪？从文件到底在谁手里、本地隐私保什么、到自托管中间路线，一篇讲清两者在隐私维度上的真实取舍。",
  },
  {
    slug: "pdf-data-export-impact",
    tag: "隐私事实 · Privacy Facts",
    date: "2026-08-15",
    zhTitle: "PDF 工具的数据出境影响",
    enTitle: "Data Export Impact of PDF Tools",
    zhDesc:
      "把 PDF 传上网之前，先想想数据出境这四个字。PDF 里藏着哪些敏感信息、在线工具的数据流向、GDPR 的约束，以及怎么判断一个工具是否真的本地处理。",
  },
];

/** 按发布日期倒序（最新在前） */
export function getBlogPosts(): BlogPostMeta[] {
  return [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date));
}
