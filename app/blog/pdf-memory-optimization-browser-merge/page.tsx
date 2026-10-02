import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';

export const metadata: Metadata = {
  title: 'PDF 内存优化：浏览器合并的 7 个实操技巧 | PDF Memory Optimization: 7 Browser Merge Techniques | PDFMergeNext',
  description:
    'PDF 内存优化不是开发者专属话题。合并到一半标签页白屏，多半是内存峰值超限。这篇给出 7 个能立刻做的调整：压缩、分批、排序、清理环境，加上一份内存自查表。',
  keywords: [
    'pdf memory optimization',
    'PDF 内存优化',
    'browser pdf merge memory',
    '浏览器合并 PDF 内存占用',
    'pdf merge out of memory',
    'PDF 合并 内存不足 解决',
    'reduce pdf merge memory usage',
    'PDF 分批合并 顺序',
    'chrome pdf merge memory limit',
    'PDFMergeNext 内存优化',
  ],
  alternates: {
    canonical: '/blog/pdf-memory-optimization-browser-merge',
    languages: {
      'zh-CN': '/blog/pdf-memory-optimization-browser-merge',
      'en-US': '/blog/pdf-memory-optimization-browser-merge',
      'x-default': '/blog/pdf-memory-optimization-browser-merge',
    },
  },
  openGraph: {
    title: 'PDF 内存优化：浏览器合并的 7 个实操技巧 · PDFMergeNext',
    description: '合并到一半白屏，多半是内存峰值超限。压缩、分批、排序、清理环境，7 个能立刻做的调整加一份自查表。',
    type: 'article',
    url: `${SITE_URL}/blog/pdf-memory-optimization-browser-merge`,
    siteName: 'PDFMergeNext',
    publishedTime: '2026-10-03T00:00:00.000Z',
    images: [{ url: `${SITE_URL}/og`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PDF 内存优化：浏览器合并的 7 个实操技巧 · PDFMergeNext',
    description: 'PDF 合并卡在内存上？先压缩、再分批、调顺序，配合一份内存自查表，绝大多数情况能在本地跑完。',
    images: [`${SITE_URL}/og`],
  },
};

const FAQ = [
  {
    q: '同样大小的两个 PDF，为什么一个能合并、一个白屏？',
    a: '决定内存峰值的是内容类型而不是文件体积。纯文本 PDF 的 300MB 和 300DPI 扫描件的 300MB 完全不是一回事，后者解压后可能膨胀四到六倍。',
  },
  {
    q: 'Why does one 300MB PDF merge fine while another crashes the tab?',
    a: 'Peak memory follows content type, not file size. A 300MB text PDF and a 300MB 300DPI scan behave completely differently, because the scan expands four to six times once its image streams are decoded.',
  },
  {
    q: '加大虚拟内存（swap）能让合并成功吗？',
    a: '能救一部分场景，但代价是速度。浏览器的内存上限由标签页进程决定，swap 只是把溢出部分搬到磁盘，合并时间可能从一分钟变成十分钟。优先压缩和分批。',
  },
  {
    q: '分批合并会不会影响最终文件的页码和书签？',
    a: '页码会连续，书签一般保留，但交互式表单字段在多轮重排后可能失效。已填写的表单建议先导出成静态页面再参与合并。',
  },
  {
    q: '手机浏览器合并 PDF 的内存上限大概是多少？',
    a: 'iOS Safari 通常在 1GB 到 1.5GB 就会回收标签页，Android Chrome 视机型在 1GB 到 3GB 之间。手机上处理超过 100MB 的文件，建议先压缩再合并。',
  },
];

const TOC = [
  { id: 'lead', label: '一句话结论 / TL;DR' },
  { id: 'why', label: '内存都花在哪了' },
  { id: 'shrink', label: '合并前先瘦身' },
  { id: 'batch', label: '分批与顺序' },
  { id: 'env', label: '浏览器环境优化' },
  { id: 'checklist', label: '内存自查表' },
  { id: 'faq', label: '常见问题' },
];

const SOURCE_TABLE = [
  { type: '图片流（扫描件、截图）', peak: '单页 20MB 至 30MB', fix: '降采样到 150DPI' },
  { type: '字体子集', peak: '每套 2MB 至 8MB', fix: '合并前统一字体' },
  { type: '透明图层与混合模式', peak: '额外 30% 至 50%', fix: '展平图层后再合并' },
  { type: '书签、注释、附件', peak: '5MB 至 15MB', fix: '保留，但可延后加载' },
  { type: '输出缓冲', peak: '与成品体积相当', fix: '分批输出、及时下载' },
];

const CHECK_TABLE = [
  { sign: '进度条走到 70% 之后不动', cause: '图片流解压进入峰值', fix: '压缩源文件后重跑' },
  { sign: '标签页直接白屏或刷新', cause: '超过单标签页内存上限', fix: '改为 50 页一批分批合并' },
  { sign: '合并成功但文件打不开', cause: '输出缓冲被截断', fix: '检查磁盘剩余空间是否达 3 倍' },
  { sign: '速度突然变慢、风扇狂转', cause: '内存溢出到磁盘 swap', fix: '关闭其他标签页与云盘同步' },
  { sign: '小文件正常、大文件必失败', cause: '单批页数过多', fix: '按从小到大顺序接力合并' },
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
            name: 'PDF 内存优化：浏览器合并的 7 个实操技巧',
            item: `${SITE_URL}/blog/pdf-memory-optimization-browser-merge`,
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
        headline: 'PDF 内存优化：浏览器合并的 7 个实操技巧 / PDF Memory Optimization: 7 Browser Merge Techniques',
        description: 'PDF 内存优化不是开发者专属话题。合并到一半标签页白屏，多半是内存峰值超限。这篇给出 7 个能立刻做的调整：压缩、分批、排序、清理环境，加上一份内存自查表。',
        author: { '@type': 'Person', name: 'PDFMergeNext', url: 'https://pdfmergenext.shop', '@id': 'https://pdfmergenext.shop/#organization' },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-10-03',
        dateModified: '2026-10-03',
        image: `${SITE_URL}/og`,
        url: `${SITE_URL}/blog/pdf-memory-optimization-browser-merge`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/pdf-memory-optimization-browser-merge` },
      },
    ],
  };

  return (
    <article className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-16">
      <header>
        <p className="text-caption font-semibold uppercase tracking-wide text-brand">
          内存优化 · Memory Optimization
        </p>
        <h1 className="mt-2 text-h1 font-bold tracking-tight text-fg">
          PDF 内存优化：浏览器合并的 7 个实操技巧 / PDF Memory Optimization: 7 Browser Merge Techniques
        </h1>
        <p className="mt-3 text-body text-fg-secondary">
          合并到一半标签页白屏，换工具重试还是白屏——这种情况基本可以确定是内存峰值超限，不是工具的问题。这篇给的是你在自己机器上立刻能做的七件事：压缩、分批、调顺序、清理环境，外加一份对着现象查原因的自查表。
        </p>
        <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-subtle px-3 py-1 text-caption font-medium text-fg-muted">
          阅读约 7 分钟 · 7 min read
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
            <strong>PDF 内存优化</strong> 听着像开发者的事，其实只要你在浏览器里合并过 PDF，就已经和它打过交道。关键结论只有一句：先压缩、再分批、把大文件放到最后一轮，这三步能解决绝大多数合并失败。
          </p>
          <p className="mt-2 text-fg-secondary">
            PDF memory optimization sounds like engineering work, but anyone who has merged a file in a browser tab has met it already. The whole playbook fits in one line: shrink the sources first, split them into batches, and leave the heaviest file for the last pass. Those three moves clear most merge failures.
          </p>
        </section>

        {/* 内存去向 */}
        <section id="why">
          <h2 className="text-title font-semibold text-fg">内存都花在哪了 / Where the memory actually goes</h2>
          <p className="mt-2 text-fg-secondary">
            PDF 不是一段连续字节，它更像一个小型数据库：对象表记录每个元素的位置，页面树描述顺序，交叉引用表负责寻址，字体和图片以独立对象嵌在里面。合并要把这些结构拆开、重新编号、再拼回去，中间态必须完整留在内存里，所以磁盘上的 200MB，峰值占用到 800MB 并不夸张。
          </p>
          <p className="mt-2 text-fg-secondary">
            真正吃内存的主要是三类内容。图片流占大头，解压后按像素算，一张 300DPI 的 A4 扫描页解压后接近 25MB，二十页就是 500MB。字体子集其次，每个源文件自带的字体都会被保留，十份文件常常带来十几套重复字体。透明图层和混合模式会让渲染上下文变复杂，通常再叠加三到五成。
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-line">
            <table className="w-full text-left text-sm">
              <thead className="bg-subtle text-fg-muted">
                <tr>
                  <th className="px-4 py-2 font-semibold">占用来源</th>
                  <th className="px-4 py-2 font-semibold">典型峰值</th>
                  <th className="px-4 py-2 font-semibold">对应优化手段</th>
                </tr>
              </thead>
              <tbody className="text-fg-secondary">
                {SOURCE_TABLE.map((r) => (
                  <tr key={r.type} className="border-t border-line">
                    <td className="px-4 py-2">{r.type}</td>
                    <td className="px-4 py-2">{r.peak}</td>
                    <td className="px-4 py-2">{r.fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-fg-secondary">
            浏览器还有自己的天花板。Chrome 在 64 位系统上单标签页一般能用到 2GB 到 4GB，Safari 更保守，大约 1GB 到 2GB。超过之后页面通常不报错，直接白屏或者被系统回收，这也是很多人误判成工具 bug 的原因。
          </p>
          <p className="mt-3 text-fg-secondary">
            A PDF behaves less like a stream and more like a small database. The object table tracks every element, the page tree defines order, the cross-reference table handles addressing, and fonts plus images sit inside as separate objects. Merging means taking that structure apart, renumbering it, and rebuilding it, and every intermediate state has to stay resident in memory. That is why a 200MB file on disk can peak near 800MB.
          </p>
          <p className="mt-3 text-fg-secondary">
            Three content types drive the peak. Image streams dominate, because decoded pixels are counted per pixel: a 300DPI A4 scan lands near 25MB once decoded, so twenty pages already mean half a gigabyte. Font subsets come next, since every source file keeps its own copies and ten files often carry a dozen redundant sets. Transparency layers and blend modes then add another thirty to fifty percent on top.
          </p>
        </section>

        {/* 瘦身 */}
        <section id="shrink">
          <h2 className="text-title font-semibold text-fg">合并前先瘦身：PDF 合并前该怎么压缩 / Shrink before you merge</h2>
          <p className="mt-2 text-fg-secondary">
            如果只能做一件事，就做<strong>PDF 合并前的压缩</strong>。扫描件的图片往往是 300 甚至 600DPI 的无压缩位图，实际阅读 150DPI 足够，压完之后文件通常降到原来的两到三成，后面的分批策略多数时候就用不上了。
          </p>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-fg-secondary">
            <li>把扫描件降采样到 150DPI，正文类文档 200DPI 也够用</li>
            <li>统一色彩空间到 sRGB，避免不同批次重新编码</li>
            <li>清掉缩略图、未引用对象和冗余元数据</li>
            <li>矢量图纸这类不能压的文件单独走分批路线</li>
            <li>原件另存一份，压缩版本只用于合并</li>
          </ol>
          <p className="mt-3 text-fg-secondary">
            具体怎么在不上传的前提下完成压缩，见{' '}
            <Link href="/blog/compress-pdf-local-no-upload" className="text-brand hover:underline">PDF 本地压缩教程</Link>。
          </p>
          <p className="mt-3 text-fg-secondary">
            If you only do one thing, do this one. Scanned pages usually carry 300 or even 600DPI uncompressed bitmaps, while 150DPI reads perfectly fine for most documents. Compression typically brings a file down to twenty or thirty percent of its original size, which in practice removes the need for batching altogether. Downsample the scans, normalise everything to sRGB so separate batches do not get re-encoded, strip thumbnails and orphaned objects, and keep the untouched originals archived. Vector drawings resist compression; route those into the batching path instead.
          </p>
        </section>

        {/* 分批与顺序 */}
        <section id="batch">
          <h2 className="text-title font-semibold text-fg">分批与顺序：PDF 分批合并的顺序怎么排 / Batch size and ordering</h2>
          <p className="mt-2 text-fg-secondary">
            <strong>PDF 分批合并的顺序</strong>比批次大小更容易被忽略。很多人的做法是把所有文件一次性拖进去，或者按文件夹里的默认顺序合并，这两种都会让峰值堆到最高。更稳的顺序是先合并小文件，把最大的那份留在最后一轮。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-fg-secondary">
            <li>每批控制在 50 到 100 页，单批峰值通常压在 300MB 以内</li>
            <li>按体积从小到大排，最大的文件放最后，避免一开始就顶到上限</li>
            <li>前两批合完得到中间结果，用中间结果去接下一批，而不是最后一次性合并几十批</li>
            <li>每批完成立刻下载到本地，别把所有中间结果都留在标签页里</li>
            <li>分批文件用 01、02、03 的数字前缀命名，防止顺序错乱</li>
          </ul>
          <p className="mt-3 text-fg-secondary">
            文件数量特别多时，命名和排序的讲究更多，对照{' '}
            <Link href="/blog/pdf-batch-merge-100-files" className="text-brand hover:underline">PDF 批量合并 100 个文件</Link>{' '}
            里的清单。
          </p>
          <p className="mt-3 text-fg-secondary">
            Ordering matters more than people expect. Dragging every file in at once, or accepting whatever order the folder hands you, pushes the peak to its worst case. A safer sequence starts with the small files and saves the heaviest one for the final pass. Keep batches between fifty and a hundred pages so a single pass stays under roughly 300MB, chain each result into the next batch instead of merging dozens of pieces at the end, and download every intermediate file straight away rather than parking them all in the same tab. Number the pieces 01, 02, 03 so the sort order cannot drift.
          </p>
        </section>

        {/* 环境 */}
        <section id="env">
          <h2 className="text-title font-semibold text-fg">浏览器环境优化：Chrome 内存不足时的设置 / Browser and OS settings</h2>
          <p className="mt-2 text-fg-secondary">
            同一份文件在不同机器上表现不同，多半差在环境上。<strong>Chrome 内存不足导致的 PDF 合并失败</strong>，有一半是在和别的应用抢内存，先清场往往比换工具有效。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-fg-secondary">
            <li>关掉其他标签页，尤其是视频会议、在线文档和云盘同步客户端</li>
            <li>用无痕窗口跑一次，排除扩展脚本注入带来的额外占用</li>
            <li>确认用的是 64 位浏览器，32 位版本的单进程上限低得多</li>
            <li>把源文件从网络驱动器复制到本地磁盘，网络盘的读取延迟会拉长内存占用时间</li>
            <li>磁盘剩余空间保持在待合并总体积的 3 倍以上，临时缓冲会写盘</li>
            <li>手机端别硬扛，iOS Safari 约 1GB 到 1.5GB 就会回收标签页</li>
          </ul>
          <p className="mt-3 text-fg-secondary">
            The same file behaves differently on different machines, and the environment is usually why. Start by clearing the field: close other tabs, especially video calls, collaborative documents and cloud drive sync clients, then try once in an incognito window so extension scripts are out of the picture. Confirm you are on a 64-bit browser, since the 32-bit build caps a single process far lower. Copy source files off network drives, because read latency keeps memory held for longer, and keep at least three times the total input size free on disk for temporary buffers. On phones, do not push it: iOS Safari tends to recycle the tab somewhere between 1GB and 1.5GB.
          </p>
          <p className="mt-3 text-fg-secondary">
            涉及合同、病历、财务凭证这类内容，本地处理不是偏好而是要求。PDFMergeNext 把解析和重排都放在浏览器里完成，文件不经过任何服务器，逐层拆解见{' '}
            <Link href="/blog/how-zero-upload-pdf-tools-work" className="text-brand hover:underline">零上传 PDF 工具原理解析</Link>。
          </p>
        </section>

        {/* 自查表 */}
        <section id="checklist">
          <h2 className="text-title font-semibold text-fg">内存自查表 / Symptom-to-fix table</h2>
          <div className="mt-4 overflow-x-auto rounded-lg border border-line">
            <table className="w-full text-left text-sm">
              <thead className="bg-subtle text-fg-muted">
                <tr>
                  <th className="px-4 py-2 font-semibold">现象</th>
                  <th className="px-4 py-2 font-semibold">可能原因</th>
                  <th className="px-4 py-2 font-semibold">处理动作</th>
                </tr>
              </thead>
              <tbody className="text-fg-secondary">
                {CHECK_TABLE.map((r) => (
                  <tr key={r.sign} className="border-t border-line">
                    <td className="px-4 py-2">{r.sign}</td>
                    <td className="px-4 py-2">{r.cause}</td>
                    <td className="px-4 py-2">{r.fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-fg-secondary">
            如果表格里的动作都试过仍然失败，说明这台设备的可用内存确实不够，换到内存更大的机器上处理，或者把文件拆到 20 页一批再跑。内存机制层面的原理，包括分块处理、Web Worker 和 Streams API 各自解决什么问题，写在{' '}
            <Link href="/blog/large-pdf-merge-browser-memory" className="text-brand hover:underline">大文件 PDF 合并的浏览器内存策略</Link>。
          </p>
          <p className="mt-3 text-fg-secondary">
            If every row above has been tried and the merge still dies, the machine genuinely does not have enough headroom. Move the job to a device with more RAM, or drop the batch size to twenty pages. For the underlying mechanics, including what chunked processing, Web Workers and the Streams API each solve, see the browser memory strategies article.
          </p>
        </section>

        {/* CTA */}
        <section className="rounded-xl border border-line bg-subtle p-6">
          <h2 className="text-title font-semibold text-fg">现在就按这个顺序跑一遍</h2>
          <p className="mt-2 text-fg-secondary">
            pdfmergenext.shop 在浏览器本地完成解析、重排和输出，文件不离开设备。拖进去，按上面的顺序先压缩、再分批、把大文件留到最后，剩下的交给工具。
          </p>
          <Link
            href="/"
            className="mt-4 inline-block rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-on-primary transition-colors duration-fast hover:bg-brand-hover"
          >
            开始合并 PDF →
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
            href="/blog/large-pdf-merge-500mb"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">大文件 PDF 合并：500MB+ 策略</p>
            <p className="mt-1 text-xs text-fg-secondary">500MB+ Strategies / 大文件处理</p>
          </Link>
          <Link
            href="/blog/compress-pdf-local-no-upload"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">PDF 本地压缩：不上传的做法</p>
            <p className="mt-1 text-xs text-fg-secondary">Compress PDF Locally / 预处理</p>
          </Link>
          <Link
            href="/blog/large-pdf-merge-browser-memory"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">大文件 PDF 合并：浏览器内存策略</p>
            <p className="mt-1 text-xs text-fg-secondary">Browser Memory Strategies / 内存机制</p>
          </Link>
          <Link
            href="/blog/pdf-batch-merge-100-files"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">PDF 批量合并 100 个文件</p>
            <p className="mt-1 text-xs text-fg-secondary">Batch Merge / 命名与排序</p>
          </Link>
        </div>
      </section>
    </article>
  );
}
