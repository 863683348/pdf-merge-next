import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';

export const metadata: Metadata = {
  title: 'Why Local, Offline PDF Merging Wins on Privacy',
  description:
    'Online PDF mergers upload your files to a third-party server. A local, offline merger runs entirely in your browser — zero uploads, zero watermarks, and no sign-up required. Learn why privacy-first is the right default.',
  keywords: [
    'offline PDF merge',
    'local PDF merge',
    'private PDF merge',
    'no upload PDF merger',
    'watermark-free PDF merge',
    'merge pdf locally',
    'offline pdf merger',
    'private pdf merge',
    '本地 PDF 合并',
    '离线 PDF 合并',
  ],
  alternates: {
    canonical: '/blog/why-local-offline-pdf-merge',
    languages: {
      'zh-CN': '/blog/why-local-offline-pdf-merge',
      'en-US': '/blog/why-local-offline-pdf-merge',
      'x-default': '/blog/why-local-offline-pdf-merge',
    },
  },
  openGraph: {
    title: 'Why Local, Offline PDF Merging Wins on Privacy · MergeLocal',
    description: 'No upload, no server, no watermark. Keep contracts, IDs, and statements on your device.',
    url: `${SITE_URL}/blog/why-local-offline-pdf-merge`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Local, Offline PDF Merging Wins on Privacy · MergeLocal',
    description: 'No upload, no server, no watermark. Keep contracts, IDs, and statements on your device.',
  },
};

export default function ArticlePage() {
  return (
    <article className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-16">
      <header>
        <p className="text-caption font-semibold uppercase tracking-wide text-brand">
          PDF 合并 · 隐私优先
        </p>
        <h1 className="mt-2 text-h1 font-bold tracking-tight text-fg">
          为什么选择本地离线 PDF 合并？隐私优先才是正解
        </h1>
        <p className="mt-3 text-body text-fg-secondary">
          Why choose a local, offline PDF merger? Because privacy-first is the right answer.
        </p>
      </header>

      <div className="mt-8 space-y-8 text-body text-fg">
        <section>
          <h2 className="text-title font-semibold text-fg">在线合并工具的隐私隐患</h2>
          <p className="mt-2 text-fg-secondary">
            大多数“免费在线 PDF 合并”会先把你的文件上传到服务商服务器，合并完成后再让你下载。
            这听起来方便，却意味着合同、身份证复印件、财务报表、病历等敏感文档，在一段时间内停留在别人的硬盘上。
            一旦服务器被攻破、内部人员越权访问或出于训练目的留存数据，后果难以挽回。
          </p>
          <p className="mt-2 text-fg-secondary">
            Online merge tools usually upload your files to a third-party server first. That means contracts,
            ID copies, and financial statements briefly live on someone else&apos;s disk — a risk no free feature is worth.
          </p>
        </section>

        <section>
          <h2 className="text-title font-semibold text-fg">本地离线合并如何工作</h2>
          <p className="mt-2 text-fg-secondary">
            本地离线（local / offline）合并直接在你的浏览器里完成：解析用 pdf.js，重组用 pdf-lib，整个过程不发起任何上传请求。
            文件从你的硬盘读入内存，合并后立刻下载回本机，服务器全程“看不见”内容。这也是为什么它能在断网环境下工作。
          </p>
          <p className="mt-2 text-fg-secondary">
            A local offline merger runs entirely in your browser — parsing with pdf.js, re-assembly with pdf-lib,
            zero upload requests. The server never sees your content, which is also why it works fully offline.
          </p>
        </section>

        <section>
          <h2 className="text-title font-semibold text-fg">谁最应该用本地离线合并</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-fg-secondary">
            <li>HR 与行政：合并员工合同、入职材料，避免敏感人事数据外泄。</li>
            <li>财务：月度报销单、对账单合并，涉及金额与账户信息。</li>
            <li>法务与律师：卷宗、证据页合并，受保密义务约束。</li>
            <li>个人：身份证、签证、房产证等证件扫描件整理。</li>
            <li>HR &amp; finance teams handling contracts, statements, and payroll packs.</li>
            <li>Legal professionals bound by confidentiality obligations.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-title font-semibold text-fg">不止隐私：免注册、无水印、免费</h2>
          <p className="mt-2 text-fg-secondary">
            很多人以为“安全”就要牺牲体验。其实本地工具往往同时做到了：免注册（不用填邮箱密码）、无水印（输出干净专业）、
            免费版即够日常使用。MergeLocal 在此基础上还支持拖拽排序、按页抽取、中英双语与手机端。
          </p>
          <p className="mt-2 text-fg-secondary">
            Local tools are often also the most frictionless: no sign-up, no watermark, and a free tier that covers daily use.
            MergeLocal adds drag-to-reorder, per-page extraction, bilingual UI, and mobile support.
          </p>
        </section>

        <section>
          <h2 className="text-title font-semibold text-fg">常见误区</h2>
          <p className="mt-2 text-fg-secondary">
            误区一：“本地工具更复杂。” 实际上现代网页工具打开即用，拖入文件、调整顺序、点击合并即可。
            误区二：“只有大文件才需要担心。” 哪怕一份普通合同，也可能包含姓名、电话、地址等可识别信息。
            只要涉及隐私，离线合并就是更稳妥的默认选项。
          </p>
        </section>

        <section className="rounded-xl border border-line bg-subtle p-6">
          <h2 className="text-title font-semibold text-fg">马上试试</h2>
          <p className="mt-2 text-fg-secondary">
            打开 MergeLocal，添加你的 PDF，几秒内在本机完成合并与下载——文件从不上传。
          </p>
          <Link
            href="/"
            className="mt-4 inline-block rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-on-primary transition-colors duration-fast hover:bg-brand-hover"
          >
            开始合并 →
          </Link>
        </section>
      </div>
    </article>
  );
}
