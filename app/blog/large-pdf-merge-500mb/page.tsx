import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';

export const metadata: Metadata = {
  title: '大文件 PDF 合并：500MB+ 策略 | Large PDF Merge: 500MB+ Strategies | PDFMergeNext',
  description:
    '500MB 以上的 PDF 合并失败，多数是内存撑不住而不是工具不行。判断瓶颈、先压缩后分批，再用一份能反复跑的排查清单解决问题。',
  keywords: [
    'large pdf merge',
    '大文件 PDF 合并',
    'merge large pdf 500mb',
    'pdf merge memory limit',
    '大文件 pdf 合并 内存不足',
    'merge pdf over 500mb',
    'pdf 合并 失败 排查',
    'large file pdf merge browser',
    'PDFMergeNext 大文件合并',
  ],
  alternates: {
    canonical: '/blog/large-pdf-merge-500mb',
    languages: {
      'zh-CN': '/blog/large-pdf-merge-500mb',
      'en-US': '/blog/large-pdf-merge-500mb',
      'x-default': '/blog/large-pdf-merge-500mb',
    },
  },
  openGraph: {
    title: '大文件 PDF 合并：500MB+ 策略 · PDFMergeNext',
    description: '500MB 以上的 PDF 合并失败，多数是内存撑不住。这篇给出处理顺序：判断瓶颈、先压缩后分批、失败排查清单。',
    type: 'article',
    url: `${SITE_URL}/blog/large-pdf-merge-500mb`,
    siteName: 'PDFMergeNext',
    publishedTime: '2026-10-02T00:00:00.000Z',
    images: [{ url: `${SITE_URL}/og`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '大文件 PDF 合并：500MB+ 策略 · PDFMergeNext',
    description: '500MB 以上的 PDF 合并失败，多数是内存撑不住。判断瓶颈、先压缩后分批，再跑一遍排查清单。',
    images: [`${SITE_URL}/og`],
  },
};

const FAQ = [
  {
    q: '500MB 的 PDF 能直接在浏览器里合并吗？',
    a: '可以，前提是单文件压缩后低于 300MB，或者按 50 至 100 页分批。未压缩的原始扫描件建议先压缩再合并。',
  },
  {
    q: 'Can I merge a 500MB PDF directly in the browser?',
    a: "Yes, provided the compressed file stays under 300MB or you split it into 50 to 100 page batches. Raw uncompressed scans should be compressed first.",
  },
  {
    q: '合并进度卡在 90% 不动，是失败了吗？',
    a: '通常不是。最后阶段在写交叉引用表和重建页面树，大文件这一段可能持续一两分钟，期间内存占用不会有明显变化。',
  },
  {
    q: '为什么合并出来的文件比两个源文件加起来还大？',
    a: '字体子集没有被复用，或者两批图片的色彩空间不一致导致重新编码。先在压缩步骤统一到 sRGB 能明显缓解。',
  },
  {
    q: '分批合并会丢书签或表单填写内容吗？',
    a: '书签一般会保留，交互式表单字段在多次重排后可能失效。填写过的表单建议先导出为静态页面再合并。',
  },
];

const TOC = [
  { id: 'lead', label: '一句话结论 / TL;DR' },
  { id: 'bottleneck', label: '500MB 以上的真实瓶颈' },
  { id: 'compress', label: '先瘦身：压缩预处理' },
  { id: 'batch', label: '分批合并怎么拆' },
  { id: 'compare', label: '浏览器本地 vs 桌面命令行' },
  { id: 'checklist', label: '失败排查清单' },
  { id: 'faq', label: '常见问题' },
];

const MEMORY_TABLE = [
  { profile: '纯文本扫描件（已 OCR）', peak: '600MB 至 900MB', source: '页面树 + 字体对象' },
  { profile: '高分辨率图片型 PDF', peak: '1.2GB 至 2GB', source: '内嵌图片流解压' },
  { profile: '矢量图 + 透明图层', peak: '1.5GB 以上', source: '图形状态栈 + 混合模式' },
  { profile: '加密或带数字签名', peak: '额外 200MB 至 400MB', source: '解密缓冲 + 证书链' },
];

const COMPARE_TABLE = [
  { dim: '文件是否外传', browser: '不出设备', desktop: '不出设备' },
  { dim: '500MB 处理稳定性', browser: '受浏览器内存上限约束', desktop: '依赖系统内存，通常更宽松' },
  { dim: '上手成本', browser: '拖入即可', desktop: '需要装环境、记参数' },
  { dim: '断点续做', browser: '刷新页面即重来', desktop: '脚本可重跑单批' },
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
            name: '大文件 PDF 合并：500MB+ 策略',
            item: `${SITE_URL}/blog/large-pdf-merge-500mb`,
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
        headline: '大文件 PDF 合并：500MB+ 策略 / Large PDF Merge: 500MB+ Strategies',
        description: '500MB 以上的 PDF 合并失败，多数是内存撑不住。判断瓶颈、先压缩后分批，再用一份能反复跑的排查清单解决问题。',
        author: { '@type': 'Person', name: 'PDFMergeNext', url: 'https://pdfmergenext.shop', '@id': 'https://pdfmergenext.shop/#organization' },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-10-02',
        dateModified: '2026-10-02',
        image: `${SITE_URL}/og`,
        url: `${SITE_URL}/blog/large-pdf-merge-500mb`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/large-pdf-merge-500mb` },
      },
    ],
  };

  return (
    <article className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-16">
      <header>
        <p className="text-caption font-semibold uppercase tracking-wide text-brand">
          大文件处理 · Large Files
        </p>
        <h1 className="mt-2 text-h1 font-bold tracking-tight text-fg">
          大文件 PDF 合并：500MB+ 策略 / Large PDF Merge: 500MB+ Strategies
        </h1>
        <p className="mt-3 text-body text-fg-secondary">
          500MB 以上的 PDF 合并失败，绝大多数不是工具不行，而是内存撑不住。这篇讲的是实际处理顺序：判断瓶颈、先压缩后分批，最后给一份能反复用的排查清单。
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
        {/* 导语 */}
        <section id="lead" className="rounded-xl border border-brand/30 bg-brand/5 p-6">
          <h2 className="text-title font-semibold text-fg">一句话结论</h2>
          <p className="mt-2 text-fg-secondary">
            <strong>大文件 PDF 合并</strong> 失败的根因通常是内存峰值，不是工具能力。先压缩源文件，再按 50 至 100 页分批，绝大多数 500MB 场景都能在浏览器本地跑完。
          </p>
          <p className="mt-2 text-fg-secondary">
            Large PDF merge failures above 500MB come from memory peaks, not from tool limits. Compress the sources first, then batch them 50 to 100 pages at a time, and most 500MB jobs finish locally in the browser.
          </p>
        </section>

        {/* 瓶颈 */}
        <section id="bottleneck">
          <h2 className="text-title font-semibold text-fg">500MB 以上 PDF 的真实瓶颈 / Where the bottleneck sits</h2>
          <p className="mt-2 text-fg-secondary">
            PDF 不是一整块数据，它由对象表、页面树、字体、图片流和交叉引用表组成。解析器要先把这些结构读进内存才能重排页面，所以磁盘上的 500MB 和内存里的 500MB 完全是两回事。
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-line">
            <table className="w-full text-left text-sm">
              <thead className="bg-subtle text-fg-muted">
                <tr>
                  <th className="px-4 py-2 font-semibold">文件特征</th>
                  <th className="px-4 py-2 font-semibold">500MB 时典型峰值</th>
                  <th className="px-4 py-2 font-semibold">主要占用来源</th>
                </tr>
              </thead>
              <tbody className="text-fg-secondary">
                {MEMORY_TABLE.map((r) => (
                  <tr key={r.profile} className="border-t border-line">
                    <td className="px-4 py-2">{r.profile}</td>
                    <td className="px-4 py-2">{r.peak}</td>
                    <td className="px-4 py-2">{r.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-fg-secondary">
            浏览器还有自己的天花板：Chrome 在 64 位系统上单标签页通常能用到 2GB 到 4GB，Safari 更保守，大约 1GB 到 2GB。超过这个范围，页面不会报错，只会白屏或者被系统回收。
          </p>
          <p className="mt-3 text-fg-secondary">
            Watch the memory curve during a merge. A smooth climb means streaming reads are working. A staircase pattern means whole files are being pulled in at once.
          </p>
        </section>

        {/* 压缩 */}
        <section id="compress">
          <h2 className="text-title font-semibold text-fg">合并前先瘦身：压缩能让 500MB 变成 80MB</h2>
          <p className="mt-2 text-fg-secondary">
            一个 500MB 的扫描件 PDF，里面的图片往往是 300 甚至 600 DPI 的无压缩位图，实际阅读只需要 150 DPI。压缩之后文件通常能降到原来的 15% 到 30%，合并难度会下降一个数量级。
          </p>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-fg-secondary">
            <li>先在浏览器本地压缩每一个源文件，不上传、不留副本</li>
            <li>检查压缩后的页面顺序和书签是否还在</li>
            <li>再把压缩版本按顺序合并</li>
            <li>最后保留一份未压缩的原件归档</li>
          </ol>
          <p className="mt-3 text-fg-secondary">
            详细做法见 <Link href="/blog/compress-pdf-local-no-upload" className="text-brand hover:underline">PDF 本地压缩教程</Link>。这一步做完，后面的分批策略通常就不必用了。
          </p>
        </section>

        {/* 分批 */}
        <section id="batch">
          <h2 className="text-title font-semibold text-fg">分批合并：500MB 文件该怎么拆 / Splitting into batches</h2>
          <p className="mt-2 text-fg-secondary">
            如果压缩后仍然超过 300MB，或者文件本来就不能压（比如矢量图纸），就走分批路线。核心思路是把一次性加载全部文件换成加载一批、合并一批、释放一批。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-fg-secondary">
            <li>每批控制在 50 到 100 页，单批内存占用通常不超过 300MB</li>
            <li>拆完之后按 01、02、03 的数字前缀命名，避免排序错乱</li>
            <li>先合并前两批得到中间结果，再用中间结果去接下一批，而不是最后一次性合并几十批</li>
            <li>每一批合并完成后立刻下载，不要全留在标签页里</li>
          </ul>
          <p className="mt-3 text-fg-secondary">
            文件数量特别多时，命名与排序另有讲究，对照 <Link href="/blog/pdf-batch-merge-100-files" className="text-brand hover:underline">PDF 批量合并 100 个文件</Link> 里的清单。
          </p>
        </section>

        {/* 对比 */}
        <section id="compare">
          <h2 className="text-title font-semibold text-fg">浏览器本地合并 vs 桌面命令行</h2>
          <div className="mt-4 overflow-x-auto rounded-lg border border-line">
            <table className="w-full text-left text-sm">
              <thead className="bg-subtle text-fg-muted">
                <tr>
                  <th className="px-4 py-2 font-semibold">维度</th>
                  <th className="px-4 py-2 font-semibold">浏览器本地合并</th>
                  <th className="px-4 py-2 font-semibold">桌面命令行（qpdf / pdftk）</th>
                </tr>
              </thead>
              <tbody className="text-fg-secondary">
                {COMPARE_TABLE.map((r) => (
                  <tr key={r.dim} className="border-t border-line">
                    <td className="px-4 py-2">{r.dim}</td>
                    <td className="px-4 py-2">{r.browser}</td>
                    <td className="px-4 py-2">{r.desktop}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-fg-secondary">
            涉及合同、病历、财务凭证这类内容时，本地处理不是偏好问题而是要求。PDFMergeNext 把解析和重排都放在浏览器里完成，文件从不离开设备，逐层拆解见{' '}
            <Link href="/blog/how-zero-upload-pdf-tools-work" className="text-brand hover:underline">零上传 PDF 工具原理解析</Link>。
          </p>
        </section>

        {/* 清单 */}
        <section id="checklist">
          <h2 className="text-title font-semibold text-fg">500MB 合并失败的排查清单 / Failure checklist</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-fg-secondary">
            <li>关闭其他标签页和占用内存的软件，尤其是视频会议和云盘同步客户端</li>
            <li>换成 Chrome 的无痕窗口，排除扩展注入带来的额外内存开销</li>
            <li>确认磁盘剩余空间大于待合并文件总大小的 3 倍，临时缓冲会写盘</li>
            <li>把源文件从网络驱动器复制到本地磁盘，网络盘的读取延迟会拖长内存占用时间</li>
            <li>单次只合并 2 到 3 个文件，而不是一次拖入 20 个</li>
            <li>合并前先压缩，这一步能解决大约七成的失败案例</li>
          </ul>
          <p className="mt-3 text-fg-secondary">
            内存层面的机制，包括分块处理、Web Worker 和 Streams API 各自解决什么问题，写在{' '}
            <Link href="/blog/large-pdf-merge-browser-memory" className="text-brand hover:underline">大文件 PDF 合并的浏览器内存策略</Link>。
          </p>
        </section>

        {/* CTA */}
        <section className="rounded-xl border border-line bg-subtle p-6">
          <h2 className="text-title font-semibold text-fg">现在就处理你的大文件</h2>
          <p className="mt-2 text-fg-secondary">
            pdfmergenext.shop 在浏览器本地完成解析、重排和输出，500MB 级别的文件不经过任何服务器。拖进去，按上面的顺序先压缩、再分批，剩下的交给工具。
          </p>
          <Link
            href="/"
            className="mt-4 inline-block rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-on-primary transition-colors duration-fast hover:bg-brand-hover"
          >
            开始合并大文件 →
          </Link>
        </section>

        {/* FAQ */}
        <section id="faq" className="rounded-xl border border-line p-6">
          <h2 className="text-title font-semibold text-fg">常见问题</h2>
          <div className="mt-4 space-y-4">
            {FAQ.map((it) => (
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
            href="/blog/large-pdf-merge-browser-memory"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">大文件 PDF 合并：浏览器内存策略</p>
            <p className="mt-1 text-xs text-fg-secondary">Browser Memory Strategies / 内存机制</p>
          </Link>
          <Link
            href="/blog/compress-pdf-local-no-upload"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">PDF 本地压缩：不上传的做法</p>
            <p className="mt-1 text-xs text-fg-secondary">Compress PDF Locally / 预处理</p>
          </Link>
          <Link
            href="/blog/pdf-batch-merge-100-files"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">PDF 批量合并 100 个文件</p>
            <p className="mt-1 text-xs text-fg-secondary">Batch Merge / 命名与排序</p>
          </Link>
          <Link
            href="/blog/offline-pdf-merge-limits"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">离线 PDF 合并的能力边界</p>
            <p className="mt-1 text-xs text-fg-secondary">Offline Limits / 边界说明</p>
          </Link>
        </div>
      </section>
    </article>
  );
}
