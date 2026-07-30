export default function Page() {
  const isZh = true;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '首页 / Home', item: 'https://pdfmergenext.shop/' },
          { '@type': 'ListItem', position: 2, name: '博客 / Blog', item: 'https://pdfmergenext.shop/blog' },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'PDFMergeNext vs Smallpdf vs iLovePDF 对比 / PDFMergeNext vs Smallpdf vs iLovePDF Comparison',
            item: 'https://pdfmergenext.shop/blog/pdfmergenext-vs-smallpdf-vs-ilovepdf',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'PDFMergeNext 和 Smallpdf、iLovePDF 最大的区别是什么？ / What is the biggest difference between PDFMergeNext and Smallpdf / iLovePDF?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: isZh
                ? '最大的区别是隐私策略。PDFMergeNext 完全在浏览器客户端运行，文件永不离开你的设备（零上传）。Smallpdf 和 iLovePDF 都需要将文件上传到服务器处理，即使他们声称 1-2 小时后删除，你的数据仍会经过第三方服务器。'
                : 'Privacy. PDFMergeNext runs entirely in your browser — files never leave your device (zero upload). Smallpdf and iLovePDF both require uploading files to their servers, where your data transits through third-party infrastructure even if they delete it after 1-2 hours.',
            },
          },
          {
            '@type': 'Question',
            name: 'PDFMergeNext 免费版有使用限制吗？ / Does PDFMergeNext have free usage limits?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: isZh
                ? '没有。PDFMergeNext 目前完全免费：无水印、无每日操作次数限制、无文件大小限制、无文件数量限制。你可以在浏览器中合并任意数量和任意大小的 PDF 文件。'
                : 'No. PDFMergeNext is completely free: no watermarks, no daily task limits, no file size limits, and no file count restrictions. You can merge any number of PDFs of any size in your browser.',
            },
          },
          {
            '@type': 'Question',
            name: 'Smallpdf 免费版可以合并几页 PDF？ / How many PDF pages can Smallpdf free merge?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: isZh
                ? 'Smallpdf 免费版每天限制 2 次操作（所有工具共用配额），文件最大 15 MB，批量合并在免费版不可用。要无限制使用需付费 $9/月。据 fileconvertlab.com 2026 年实测，每次可合并最多 20 个文件。'
                : 'Smallpdf free tier allows 2 operations per day (shared across all tools), files up to 15 MB, and no batch merging. Unlimited use requires Pro at $9/month. Per fileconvertlab.com 2026 testing, up to 20 files per merge.',
            },
          },
          {
            '@type': 'Question',
            name: 'iLovePDF 免费版有水印吗？ / Does iLovePDF free add watermarks?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: isZh
                ? '某些操作下会加水印。iLovePDF 的免费版对部分操作（如大文件合并）需要注册账号才能避免水印。免费版文件大小约 3-100 MB，批处理每次限 1 个文件。'
                : 'Under certain operations. iLovePDF free may add watermarks or require account creation for some features (e.g., large-file merge). Free tier file size ~3-100 MB, batch limited to 1 file per task.',
            },
          },
          {
            '@type': 'Question',
            name: '有没有完全离线的 PDF 合并工具？ / Is there a fully offline PDF merge tool?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: isZh
                ? '有。PDFMergeNext 虽然是在线网页，但完全在浏览器客户端运行（使用 WebAssembly 和 pdf-lib），上传操作实际发生在本地——没有任何数据发送到服务器。如果你需要断开网络也能使用，可以使用 PDFsam Basic（开源桌面程序）或 macOS 预览应用的合并功能。'
                : 'Yes. PDFMergeNext is a web page but runs entirely client-side (using WebAssembly and pdf-lib) — what appears as "upload" happens locally; no data is sent to any server. For fully offline desktop use, try PDFsam Basic (open-source) or macOS Preview\'s merge feature.',
            },
          },
        ],
      },
      {
        '@type': 'Article',
        headline: 'PDFMergeNext vs Smallpdf vs iLovePDF：2026 隐私与限制全对比 / Honest 2026 Comparison',
        description:
          '全面的三工具对比——隐私、免费限制、挑页合并、水印、价格，附第三方实测数据。Honest comparison across privacy, free limits, page selection, watermarks, and pricing with third-party test data.',
        author: { '@type': 'Person', name: 'PDFMergeNext' },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-07-27',
        dateModified: '2026-07-27',
        image: 'https://pdfmergenext.shop/og',
        url: 'https://pdfmergenext.shop/blog/pdfmergenext-vs-smallpdf-vs-ilovepdf',
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://pdfmergenext.shop/blog/pdfmergenext-vs-smallpdf-vs-ilovepdf' },
      },
    ],
  };

  return (
    <article className="prose prose-lg dark:prose-invert mx-auto max-w-3xl px-4 py-12">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumb (visible) */}
      <nav className="mb-6 text-sm text-fg-muted" aria-label="Breadcrumb">
        <a href="/" className="hover:underline">{'首页 / Home'}</a>
        {' › '}
        <a href="/blog" className="hover:underline">{'博客 / Blog'}</a>
        {' › '}
        <span>{'PDFMergeNext vs Smallpdf vs iLovePDF / PDFMergeNext vs Smallpdf vs iLovePDF'}</span>
      </nav>

      {/* Header */}
      <h1 className="text-3xl font-bold leading-tight">
        {'PDFMergeNext vs Smallpdf vs iLovePDF：2026 隐私与限制全对比 / PDFMergeNext vs Smallpdf vs iLovePDF: Honest 2026 Comparison'}
      </h1>
      <p className="mt-2 text-sm text-fg-muted">
        {'更新于 2026-07-27 · 阅读约 5 分钟 / Updated Jul 27, 2026 · 5 min read'}
      </p>

      {/* TL;DR — Featured Snippet target */}
      <div className="my-6 rounded-lg bg-subtle p-4 text-sm leading-relaxed">
        <strong className="block mb-1">{'📋 快速结论（TL;DR） / 📋 TL;DR'}</strong>
        {isZh
          ? '在 2026 年，主流 PDF 合并工具（Smallpdf、iLovePDF）免费版都有限制：每日操作次数、文件大小、水印、或需要注册。'
          : 'In 2026, mainstream PDF merge tools (Smallpdf, iLovePDF) impose free-tier limits: daily operation caps, file size restrictions, watermarks, or mandatory signup.'}
        {' '}
        {isZh
          ? 'PDFMergeNext 在所有免费限制维度上完胜——零上传、无水印、无日限制、支持挑页合并（1-3,5）。如果你重视隐私或需要频繁合并，PDFMergeNext 是明显更好的选择。'
          : 'PDFMergeNext wins on every free-tier dimension — zero upload, no watermarks, no daily caps, and supports selective page merging (1-3,5). If you value privacy or merge PDFs frequently, PDFMergeNext is the clear winner.'}
      </div>

      {/* TOC */}
      <nav className="mb-8 rounded-lg border border-line p-4 text-sm" aria-label="Table of Contents">
        <strong className="block mb-2">{'📑 目录 / 📑 Table of Contents'}</strong>
        <ul className="list-inside space-y-1">
          <li><a href="#comparison-table" className="text-primary hover:underline">{'1. 核心功能对比表 / 1. Feature Comparison Table'}</a></li>
          <li><a href="#smallpdf" className="text-primary hover:underline">2. Smallpdf {'分析 / Review'}</a></li>
          <li><a href="#ilovepdf" className="text-primary hover:underline">3. iLovePDF {'分析 / Review'}</a></li>
          <li><a href="#pdfmergenext" className="text-primary hover:underline">4. PDFMergeNext {'差异化优势 / Differentiation'}</a></li>
          <li><a href="#recommendation" className="text-primary hover:underline">{'5. 场景推荐 / 5. Use Case Recommendation'}</a></li>
          <li><a href="#faq" className="text-primary hover:underline">{'6. 常见问题 / 6. FAQ'}</a></li>
        </ul>
      </nav>

      {/* Section 1: Comparison Table */}
      <h2 id="comparison-table" className="text-2xl font-semibold mt-10">
        {'📊 核心功能对比表 / 📊 Feature Comparison Table'}
      </h2>
      <p className="text-sm text-fg-muted mt-1">
        {isZh
          ? '基于 fileconvertlab.com、scoutmytool.com 等第三方 2026 年实测数据'
          : 'Based on 2026 real-world testing by fileconvertlab.com, scoutmytool.com, and others'}
      </p>
      <div className="overflow-x-auto mt-4">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-subtle border-b border-line">
              <th className="p-3 text-left font-semibold">{'对比维度 / Dimension'}</th>
              <th className="p-3 text-left font-semibold">Smallpdf</th>
              <th className="p-3 text-left font-semibold">iLovePDF</th>
              <th className="p-3 text-left font-semibold text-primary">PDFMergeNext</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-line">
              <td className="p-3 font-medium">{'隐私模型 / Privacy Model'}</td>
              <td className="p-3 text-red-600 dark:text-red-400">{'❌ 上传至服务器 / ❌ Server upload'}</td>
              <td className="p-3 text-red-600 dark:text-red-400">{'❌ 上传至服务器 / ❌ Server upload'}</td>
              <td className="p-3 text-green-600 dark:text-green-400 font-medium">{'✅ 零上传（客户端） / ✅ Zero upload (client-side)'}</td>
            </tr>
            <tr className="border-b border-line">
              <td className="p-3 font-medium">{'文件保存期限 / File Retention'}</td>
              <td className="p-3">{'1 小时后删除 / Deleted after 1h'}</td>
              <td className="p-3">{'2 小时后删除 / Deleted after 2h'}</td>
              <td className="p-3 text-green-600 dark:text-green-400 font-medium">{'✅ 永不离开设备 / ✅ Never leaves device'}</td>
            </tr>
            <tr className="border-b border-line">
              <td className="p-3 font-medium">{'免费日限制 / Free Daily Limit'}</td>
              <td className="p-3 text-red-600 dark:text-red-400">{'❌ 2 次/天 / ❌ 2 ops/day'}</td>
              <td className="p-3">{'⚠️ 无硬限制（但大文件受限） / ⚠️ No hard cap (but large files restricted)'}</td>
              <td className="p-3 text-green-600 dark:text-green-400 font-medium">{'✅ 无限制 / ✅ Unlimited'}</td>
            </tr>
            <tr className="border-b border-line">
              <td className="p-3 font-medium">{'文件大小限制 / File Size Limit'}</td>
              <td className="p-3">{'~15 MB（免费） / ~15 MB (free)'}</td>
              <td className="p-3">{'~3–100 MB（免费） / ~3–100 MB (free)'}</td>
              <td className="p-3 text-green-600 dark:text-green-400 font-medium">{'✅ 无限制 / ✅ Unlimited'}</td>
            </tr>
            <tr className="border-b border-line">
              <td className="p-3 font-medium">{'批量合并 / Batch Merge'}</td>
              <td className="p-3 text-red-600 dark:text-red-400">{'❌ 仅 Pro（$9/月） / ❌ Pro only ($9/mo)'}</td>
              <td className="p-3 text-red-600 dark:text-red-400">{'❌ 1 个文件/次 / ❌ 1 file/task'}</td>
              <td className="p-3 text-green-600 dark:text-green-400 font-medium">{'✅ 不限数量 / ✅ Unlimited'}</td>
            </tr>
            <tr className="border-b border-line">
              <td className="p-3 font-medium">{'挑页合并 / Page Selection'}</td>
              <td className="p-3">{'⚠️ 仅 Pro（Organize PDF） / ⚠️ Pro only (Organize PDF)'}</td>
              <td className="p-3">{'⚠️ 仅 Premium / ⚠️ Premium only'}</td>
              <td className="p-3 text-green-600 dark:text-green-400 font-medium">{'✅ 免费（1-3,5 语法） / ✅ Free (1-3,5 syntax)'}</td>
            </tr>
            <tr className="border-b border-line">
              <td className="p-3 font-medium">{'水印 / Watermark'}</td>
              <td className="p-3">{'✅ 无水印（免费） / ✅ No watermark (free)'}</td>
              <td className="p-3 text-red-600 dark:text-red-400">{'⚠️ 部分操作需注册免水印 / ⚠️ May require signup to remove'}</td>
              <td className="p-3 text-green-600 dark:text-green-400 font-medium">{'✅ 无水印，永远 / ✅ No watermark, ever'}</td>
            </tr>
            <tr className="border-b border-line">
              <td className="p-3 font-medium">{'需注册 / Registration'}</td>
              <td className="p-3">❌ {'不用（但有限制） / Not required (but limited)'}</td>
              <td className="p-3">❌ {'不用（但有限制） / Not required (but limited)'}</td>
              <td className="p-3 text-green-600 dark:text-green-400 font-medium">✅ {'无需注册 / No signup'}</td>
            </tr>
            <tr className="border-b border-line">
              <td className="p-3 font-medium">{'付费价 / Paid Price'}</td>
              <td className="p-3">~$9/月</td>
              <td className="p-3">~€6/月</td>
              <td className="p-3 text-green-600 dark:text-green-400 font-medium">{'✅ 当前完全免费 / ✅ Currently free'}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-fg-muted">
        {isZh
          ? '数据来源：fileconvertlab.com 2026 年 7 工具实测、scoutmytool.com 2026 对比、各自官网。价格可能变动。'
          : 'Sources: fileconvertlab.com 2026 7-tool test, scoutmytool.com 2026 comparison, official websites. Prices may vary.'}
      </p>

      {/* Section 2: Smallpdf */}
      <h2 id="smallpdf" className="text-2xl font-semibold mt-12">
        {'2. Smallpdf — 界面最精致，但免费限制最严 / 2. Smallpdf — Polished UI, Strictest Free Limits'}
      </h2>
      <p>
        {isZh
          ? 'Smallpdf（瑞士公司）的界面设计在 PDF 工具中确实是顶尖水平——拖放流畅、页面预览即时、重排自然。根据 scoutmytool.com 的测评，"Smallpdf 的界面异常干净，PDF 转 Word/Excel 的准确度仅次于 Adobe Acrobat"。'
          : 'Smallpdf (Switzerland) has one of the best-designed interfaces in the category — drag-and-drop is smooth, page preview is instant, and reordering feels natural. Per scoutmytool.com: "Smallpdf\'s UI is unusually clean, and PDF-to-Word/Excel conversion accuracy rivals Adobe Acrobat."'}
      </p>
      <p className="mt-2">
        <strong>{'✅ 优点 / ✅ Pros'}</strong>
      </p>
      <ul>
        <li>{'设计最好的操作界面，拖放体验流畅 / Best-in-class UI, smooth drag-and-drop experience'}</li>
        <li>{'桌面应用支持离线工作（Pro） / Desktop app supports offline work (Pro)'}</li>
        <li>{'SOC 2 Type II 审计认证，对 B2B 有吸引力 / SOC 2 Type II audited, attractive for B2B compliance'}</li>
        <li>{'PDF 转换（转 Word/Excel）准确度极高 / High-accuracy PDF-to-Word/Excel conversion'}</li>
      </ul>
      <p className="mt-2">
        <strong>{'❌ 缺点 / ❌ Cons'}</strong>
      </p>
      <ul>
        <li>{'**免费版每天仅 2 次操作**，日常使用几乎不够 / **Free tier: only 2 ops/day** — barely enough for daily use'}</li>
        <li>{'文件上传至瑞士服务器——虽然 1 小时后删除，对敏感文档仍存在隐私风险 / Files uploaded to Switzerland servers — deleted after 1h, but privacy risk for sensitive docs'}</li>
        <li>{'批量合并和高级功能（OCR、签名）锁定在 Pro（$9/月） / Batch merge and advanced features (OCR, e-sign) locked behind Pro ($9/mo)'}</li>
        <li>{'文件最大 15 MB（免费版） / Max 15 MB per file (free tier)'}</li>
      </ul>

      {/* Section 3: iLovePDF */}
      <h2 id="ilovepdf" className="text-2xl font-semibold mt-12">
        {'3. iLovePDF — 免费更宽松，但处处有"墙" / 3. iLovePDF — More Generous Free, But Everywhere a "Wall"'}
      </h2>
      <p>
        {isZh
          ? 'iLovePDF（西班牙公司）提供了比 Smallpdf 更宽松的免费策略——没有每日硬性操作次数上限。但实际上，"免费"的体验因水印和文件大小限制而大打折扣。fileconvertlab.com 的测试发现，**大于 3 MB 的文件在免费版可能被拒绝**，页数限制在 800-1600 页之间。'
          : 'iLovePDF (Spain) offers a more generous free tier than Smallpdf — no hard daily cap. In practice, the "free" experience is undermined by watermarks and file size restrictions. fileconvertlab.com found that **files >3 MB may be rejected** on the free tier, with page limits between 800–1600 pages.'}
      </p>
      <p className="mt-2">
        <strong>{'✅ 优点 / ✅ Pros'}</strong>
      </p>
      <ul>
        <li>{'无每日操作次数硬上限 / No hard daily operation cap'}</li>
        <li>{'支持 20+ 种 PDF 操作，包括修复 PDF / Supports 20+ PDF operations, including PDF repair'}</li>
        <li>{'基于欧盟（GDPR 适用）、多语言支持好 / EU-based (GDPR applicable), good multilingual support'}</li>
        <li>{'有移动应用（iOS/Android） / Mobile apps available (iOS/Android)'}</li>
      </ul>
      <p className="mt-2">
        <strong>{'❌ 缺点 / ❌ Cons'}</strong>
      </p>
      <ul>
        <li>{'**部分操作加水印**，需注册 Premium（~€6/月）才能移除 / **Watermarks on some outputs**, requiring Premium (~€6/mo) to remove'}</li>
        <li>{'大文件（>3 MB）免费版可能被拒，实测不稳定 / Large files (>3 MB) may be rejected on free tier per real testing'}</li>
        <li>{'批量处理每次仅 1 个文件 / Batch limited to 1 file per task'}</li>
        <li>{'文件上传至欧盟服务器，2 小时后删除——仍有隐私风险 / Files uploaded to EU servers, deleted after 2h — still a privacy risk'}</li>
      </ul>

      {/* Section 4: PDFMergeNext */}
      <h2 id="pdfmergenext" className="text-2xl font-semibold mt-12">
        {isZh ? '4. PDFMergeNext — 为什么它不一样' : '4. PDFMergeNext — Why It\'s Different'}
      </h2>
      <p>
        {isZh
          ? 'PDFMergeNext 与其他工具最根本的区别不在于功能多少，而在于**架构选择**。Smallpdf 和 iLovePDF 都采用"上传到服务器处理"的模型——即使在 2026 年，这意味着你的机密 PDF 文件经过他们的基础设施。PDFMergeNext 使用 WebAssembly + pdf-lib 在浏览器本地执行 PDF 合并，**没有任何数据离开你的设备**——你可以用浏览器开发者工具的 Network 面板验证这一点（教程见我们的前一篇博客）。'
          : 'PDFMergeNext\'s fundamental difference from other tools is not feature count but **architecture**. Smallpdf and iLovePDF both use a "upload-to-server" model — your confidential PDF files transit through their infrastructure even in 2026. PDFMergeNext uses WebAssembly + pdf-lib to execute PDF merging locally in the browser — **no data ever leaves your device** (verify this with browser DevTools Network tab as shown in our previous blog post).'}
      </p>
      <p className="mt-4">
        <strong>{'核心差异化 / Key Differentiators'}</strong>
      </p>
      <ul>
        <li><strong>{'🔒 零上传 / 🔒 Zero Upload'}</strong> — {'文件永不离开设备，可通过 DevTools 验证。适用于 GDPR、HIPAA、中国个保法等合规场景。 / Files never leave your device; verifiable via DevTools. Suitable for GDPR, HIPAA, China PIPL compliance.'}</li>
        <li><strong>{'🎯 挑页合并 / 🎯 Selective Page Merge'}</strong> — {'支持语法如 `1-3,5` 从每个 PDF 中提取指定页面合并。竞品均需付费版才能做到。 / Supports syntax like `1-3,5` to extract specific pages from each PDF. Competitors require paid plans for this.'}</li>
        <li><strong>{'⚡ 无任何免费限制 / ⚡ No Free-Tier Limits'}</strong> — {'无水印、无每日次数限制、无文件大小限制、无文件数量限制。当前完全免费。 / No watermarks, no daily limits, no file size caps, no file count limits. Currently free.'}</li>
        <li><strong>{'📱 响应式设计 / 📱 Responsive Design'}</strong> — {'桌面和移动端都能用，无需安装应用 / Works on desktop and mobile browsers, no app install needed'}</li>
      </ul>

      {/* Section 5: Recommendation */}
      <h2 id="recommendation" className="text-2xl font-semibold mt-12">
        {'5. 场景推荐：什么时候选哪个？ / 5. Use Case: Which Tool When?'}
      </h2>
      <div className="overflow-x-auto mt-2">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-subtle border-b border-line">
              <th className="p-3 text-left font-semibold">{'使用场景 / Scenario'}</th>
              <th className="p-3 text-left font-semibold">{'推荐 / Recommend'}</th>
              <th className="p-3 text-left font-semibold">{'原因 / Why'}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-line">
              <td className="p-3">{'📄 日常 PDF 合并（隐私重要） / Regular PDF merging (privacy matters)'}</td>
              <td className="p-3 font-medium text-primary">PDFMergeNext</td>
              <td className="p-3">{'零上传，无限制，无需注册 / Zero upload, no limits, no signup'}</td>
            </tr>
            <tr className="border-b border-line">
              <td className="p-3">{'📂 批量合并大量文件（10+） / Batch merge many files (10+)'}</td>
              <td className="p-3 font-medium text-primary">PDFMergeNext / PDF24</td>
              <td className="p-3">{'两者均无限制；PDFMergeNext 更隐私 / Both unlimited; PDFMergeNext more private'}</td>
            </tr>
            <tr className="border-b border-line">
              <td className="p-3">{'🔐 法律/医疗/财务敏感文档 / Legal/medical/financial docs'}</td>
              <td className="p-3 font-medium text-primary">PDFMergeNext</td>
              <td className="p-3">{'**唯一选择**——其他工具都上传服务器 / **Only choice** — others upload to server'}</td>
            </tr>
            <tr className="border-b border-line">
              <td className="p-3">{'✂️ 挑页合并 / Selective page merge'}</td>
              <td className="p-3 font-medium text-primary">PDFMergeNext</td>
              <td className="p-3">{'免费支持 `1-3,5` 语法；竞品需付费 / Free `1-3,5` syntax; competitors charge'}</td>
            </tr>
            <tr className="border-b border-line">
              <td className="p-3">{'📝 PDF 转 Word/Excel / PDF to Word/Excel'}</td>
              <td className="p-3">Smallpdf Pro</td>
              <td className="p-3">{'转换准确度领先（付费版） / Best conversion accuracy (paid)'}</td>
            </tr>
            <tr className="border-b border-line">
              <td className="p-3">{'🔧 全部 PDF 功能一体化 / All-in-one PDF suite'}</td>
              <td className="p-3">Smallpdf Pro / iLovePDF Premium</td>
              <td className="p-3">{'功能最全面，但需要付费 / Most comprehensive, but paid'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Section 6: FAQ */}
      <h2 id="faq" className="text-2xl font-semibold mt-12">
        {'6. 常见问题 / 6. Frequently Asked Questions'}
      </h2>
      <div className="mt-4 space-y-4">
        <details className="group rounded-lg border border-line p-4">
          <summary className="cursor-pointer font-medium group-open:text-primary">
            {'PDFMergeNext 真的不上传文件吗？如何验证？ / Does PDFMergeNext really not upload files? How to verify?'}
          </summary>
          <p className="mt-2 text-sm text-fg-muted">
            {isZh
              ? '是的。所有处理在浏览器中通过 WebAssembly 和 pdf-lib 完成。你可以打开浏览器开发者工具（F12）→ Network 标签 → 拖入 PDF 文件后观察网络请求——没有任何文件上传请求。我们的博客《如何不上传合并 PDF》有完整的 DevTools 验证教程。'
              : 'Yes. All processing happens in-browser via WebAssembly and pdf-lib. Open DevTools (F12) → Network tab → drag in a PDF — you\'ll see no file upload requests. See our previous blog post "How to merge PDF without uploading" for a full DevTools verification walkthrough.'}
          </p>
        </details>
        <details className="group rounded-lg border border-line p-4">
          <summary className="cursor-pointer font-medium group-open:text-primary">
            {'PDFMergeNext 以后会收费吗？ / Will PDFMergeNext charge in the future?'}
          </summary>
          <p className="mt-2 text-sm text-fg-muted">
            {isZh
              ? '目前完全免费，未来计划推出付费 Pro 计划（如更大文件支持、高级功能），但基础合并功能将保持免费。价格信息见 /pricing 页面。'
              : 'Currently free. A paid Pro plan (for advanced features, higher limits) is planned, but basic merge functionality will remain free. See /pricing for details.'}
          </p>
        </details>
        <details className="group rounded-lg border border-line p-4">
          <summary className="cursor-pointer font-medium group-open:text-primary">
            {'Smallpdf 免费够用吗？ / Is Smallpdf free tier enough?'}
          </summary>
          <p className="mt-2 text-sm text-fg-muted">
            {isZh
              ? '如果你每周只合并 1-2 次且文件很小（<15 MB），免费版勉强够用。但如果文件大于 15 MB、需要合并 2 个以上文件、或需要每天使用，免费版很快就会遇到限制。'
              : 'If you only merge 1-2 small files (<15 MB) per week, the free tier might suffice. For files >15 MB, merging more than 2 files, or daily use, you\'ll hit limits quickly.'}
          </p>
        </details>
        <details className="group rounded-lg border border-line p-4">
          <summary className="cursor-pointer font-medium group-open:text-primary">
            {'iLovePDF 加水印吗？ / Does iLovePDF add watermarks?'}
          </summary>
          <p className="mt-2 text-sm text-fg-muted">
            {isZh
              ? '部分操作需要注册才能消除水印。据 softpicker.com 2026 年测试，iLovePDF 的某些功能（如合并大文件、OCR）在免费版会施加水印或需要注册 Premium 账号（€6/月）。'
              : 'Under certain operations. Per softpicker.com 2026 testing, some iLovePDF features (large-file merge, OCR) add watermarks on the free tier or require Premium (~€6/mo) to remove.'}
          </p>
        </details>
        <details className="group rounded-lg border border-line p-4">
          <summary className="cursor-pointer font-medium group-open:text-primary">
            {isZh ? '离线合并 PDF 的最佳方案是？' : 'What\'s the best offline PDF merge solution?'}
          </summary>
          <p className="mt-2 text-sm text-fg-muted">
            {isZh
              ? 'PDFMergeNext（浏览器零上传，效果等同于离线）、PDFsam Basic（开源桌面）、macOS 预览 App。Windows 用户可用 PDF24 Creator（免费桌面）。对敏感文件，强烈推荐这些本地处理方案。'
              : 'PDFMergeNext (zero-upload in browser, effectively offline), PDFsam Basic (open-source desktop), macOS Preview. Windows users: PDF24 Creator (free desktop). For sensitive files, any of these local-processing solutions is strongly recommended.'}
          </p>
        </details>
      </div>

      {/* CTA */}
      <div className="mt-10 rounded-lg bg-primary/5 p-6 text-center">
        <p className="text-lg font-semibold">{'👉 试试 PDFMergeNext / 👉 Try PDFMergeNext'}</p>
        <p className="mt-1 text-sm text-fg-muted">
          {isZh
            ? '零上传、无水印、无限制。合并任意数量 PDF，免费。'
            : 'Zero upload, no watermarks, unlimited. Merge any number of PDFs for free.'}
        </p>
        <a
          href="/"
          className="mt-3 inline-block rounded-lg bg-primary px-6 py-2 text-sm font-medium text-white hover:bg-primary/90"
        >
          {'立即合并 / Merge Now'}
        </a>
      </div>

      {/* 相关文章 */}
      <section className="mt-10 max-w-3xl mx-auto px-4">
        <h2 className="text-base font-semibold text-fg">{'相关阅读 / Related'}</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <a
            href="/blog/why-local-offline-pdf-merge"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">{'为什么选择本地离线 PDF 合并'}</p>
            <p className="mt-1 text-xs text-fg-secondary">{'隐私优先才是正解 / Privacy-First PDF Merge'}</p>
          </a>
          <a
            href="/blog/how-to-merge-pdf-without-uploading"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">{'如何不上传合并 PDF'}</p>
            <p className="mt-1 text-xs text-fg-secondary">{'How to Merge PDF Without Uploading (Step-by-Step)'}</p>
          </a>
        </div>
      </section>
    </article>
  );
}
