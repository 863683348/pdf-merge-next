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
      </section>

      {/* AdSense 广告位 — 首页 SEO 文案下方 */}
      <div className="mx-auto max-w-3xl px-4">
        <AdSlot />
      </div>
    </>
  );
}
