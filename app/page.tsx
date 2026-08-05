'use client';

import dynamic from 'next/dynamic';
import { Spinner } from '@/components/atoms/Spinner';
import { AdSlot } from '@/components/atoms/AdSlot';

// 纯客户端工具：PDF 解析/合并、Web Worker、localStorage 等均在浏览器执行。
// 关闭 SSR 以避免服务端访问 window/document/Worker 导致的报错与 hydration 不一致。
const App = dynamic(() => import('@/App'), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-screen items-center justify-center bg-canvas text-fg">
      <Spinner size={28} />
    </div>
  ),
});

export default function Page() {
  return (
    <>
      <App />
      <section className="mx-auto max-w-3xl px-4 pb-16 pt-10 text-sm leading-relaxed text-fg-secondary">
        <h2 className="text-base font-semibold text-fg">
          PDFMergeNext — 零上传、隐私优先的免费 PDF 在线合并工具
        </h2>
        <p className="mt-3">
          PDFMergeNext 是一款完全在浏览器客户端运行的 PDF 合并工具。所有文件处理均在本地完成，
          无需上传至服务器，确保你的文档隐私安全。支持批量合并、拖拽排序、挑页合并（输入
          <code className="mx-1 rounded bg-subtle px-1.5 py-0.5 font-mono text-xs">1-3,5</code>语法挑页）、
          免费无水印，不限制文件大小和数量。开源工具，适用于法律合同、学术论文、财务报表、证件扫描等场景。
        </p>

        <h3 className="mt-5 text-base font-semibold text-fg">如何使用（三步）</h3>
        <ol className="mt-2 list-decimal space-y-1 pl-5">
          <li>拖入或选择需要合并的 PDF 文件，可一次添加多个。</li>
          <li>在列表中拖拽调整顺序，或用挑页语法只合并指定页面（如 <code className="mx-1 rounded bg-subtle px-1.5 py-0.5 font-mono text-xs">1-3,5</code>）。</li>
          <li>点击"合并"，浏览器本地生成新文件并直接下载，全程不上传。</li>
        </ol>

        <h3 className="mt-5 text-base font-semibold text-fg">为什么选择本地合并</h3>
        <p className="mt-2">
          大多数在线合并工具需要先把文件传到它们的服务器，存在泄露与留存风险。PDFMergeNext 利用现代浏览器的
          File System Access 与 Web Worker 能力，在本地完成解析与合并——文件不会离开你的设备，
          网络中断也不影响已加载页面的处理。对包含合同、病历、证件等敏感内容的文档尤其重要。
        </p>

        <h3 className="mt-5 text-base font-semibold text-fg">常见使用场景</h3>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>法律合同：把多个签章页、附件合并成一份可发送的 PDF。</li>
          <li>学术论文：按顺序整合正文、参考文献与附录。</li>
          <li>财务报表：将月度报表汇总为年度归档文件。</li>
          <li>证件扫描：把多页扫描件合并为单个 PDF 方便上传。</li>
          <li>日常办公：批量整理发票、收据与文档。</li>
        </ul>

        <h3 className="mt-5 text-base font-semibold text-fg">隐私与合规</h3>
        <p className="mt-2">
          隐私合规：符合 GDPR（通用数据保护条例）、HIPAA（健康保险可携性和责任法案）
          和《个人信息保护法》要求。所有合并操作在本地执行——即使断开网络，已加载的页面也能继续运行。
        </p>
        <p className="mt-2">
          支持中英双语界面。桌面端和移动端均可用，无需安装任何应用。也欢迎阅读我们的博客：
          <a href="/blog" className="ml-1 text-primary hover:underline">合并 PDF 不上传的完整指南</a>
          、
          <a href="/blog/pdfmergenext-vs-smallpdf-vs-ilovepdf" className="text-primary hover:underline">PDFMergeNext vs Smallpdf vs iLovePDF 对比</a>
          ，或查看
          <a href="/privacy" className="text-primary hover:underline">隐私政策</a>
          、
          <a href="/terms" className="text-primary hover:underline">服务条款</a>
          。
        </p>

        <h3 className="mt-5 text-base font-semibold text-fg">关于 PDF 格式，你需要知道的几件事</h3>
        <p className="mt-2">
          PDF（Portable Document Format）是一种跨平台、版式固定的文档格式，无论在 Windows、macOS 还是手机上打开，排版都不会错乱，因此成为合同、论文、报表等正式文件的首选。合并 PDF 并不会改变每一页原有的清晰度——它只是把多份文件按顺序"装订"成一份新文档，原图分辨率、字体、超链接都会保留。
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li><strong>合并后体积会变大吗？</strong> 通常会等于各文件之和，因为内容被完整保留。PDFMergeNext 在本地完成合并，不会额外上传，也不会压缩你的原图质量。</li>
          <li><strong>页数很多会卡吗？</strong> 由于处理在你的浏览器内执行，性能取决于本机内存。一般几十页到上百页的文档都能流畅处理；超大文件建议分批合并。</li>
          <li><strong>能挑页合并吗？</strong> 可以。用挑页语法（如 <code className="mx-1 rounded bg-subtle px-1.5 py-0.5 font-mono text-xs">1-3,5</code>）只抽取需要的页面，跳过无关内容。</li>
          <li><strong>合并后能再编辑吗？</strong> 合并生成的是标准 PDF，可用任意 PDF 阅读器打开；若需二次拆分，可再次使用本工具。</li>
        </ul>

        <h3 className="mt-5 text-base font-semibold text-fg">常见问题（FAQ）</h3>
        <dl className="mt-2 space-y-3">
          <div>
            <dt className="font-semibold text-fg">合并 PDF 需要把文件上传到服务器吗？</dt>
            <dd className="mt-1 text-fg-secondary">不需要。PDFMergeNext 的全部解析与合并都在你的浏览器本地完成，文件不会离开你的设备，断网也可继续处理已加载的页面。</dd>
          </div>
          <div>
            <dt className="font-semibold text-fg">合并后的文件安全吗？</dt>
            <dd className="mt-1 text-fg-secondary">安全。由于不上传，服务器无从获取你的内容，也不存在被第三方留存或泄露的风险，符合 GDPR、HIPAA 及《个人信息保护法》对敏感文档处理的要求。</dd>
          </div>
          <div>
            <dt className="font-semibold text-fg">有文件大小或数量限制吗？</dt>
            <dd className="mt-1 text-fg-secondary">免费、无水印，不对文件大小和数量做硬性限制。处理性能取决于你的设备内存，超大文档建议分批操作。</dd>
          </div>
          <div>
            <dt className="font-semibold text-fg">会给我加水印吗？</dt>
            <dd className="mt-1 text-fg-secondary">不会。合并输出的 PDF 干净无广告、无水印，可直接用于正式提交或打印。</dd>
          </div>
          <div>
            <dt className="font-semibold text-fg">支持哪些系统？</dt>
            <dd className="mt-1 text-fg-secondary">只要是现代浏览器（Chrome、Edge、Safari、Firefox 等）即可，桌面与移动端均可用，无需安装任何插件或客户端。</dd>
          </div>
          <div>
            <dt className="font-semibold text-fg">开源吗？代码可信吗？</dt>
            <dd className="mt-1 text-fg-secondary">是开源工具。所有逻辑运行在本地，你可以放心使用；详细实现见我们的隐私政策与开源仓库。</dd>
          </div>
        </dl>
      </section>

      {/* AdSense 广告位 — 首页 SEO 文案下方 */}
      <div className="mx-auto max-w-3xl px-4">
        <AdSlot />
      </div>
    </>
  );
}
