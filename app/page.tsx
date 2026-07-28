'use client';

import dynamic from 'next/dynamic';
import { Spinner } from '@/components/atoms/Spinner';

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
        <p className="mt-2">
          隐私合规：符合 GDPR（通用数据保护条例）、HIPAA（健康保险可携性和责任法案）
          和《个人信息保护法》要求。所有合并操作在本地执行——即使断开网络，已加载的页面也能继续运行。
        </p>
        <p className="mt-2">
          支持中英双语界面。桌面端和移动端均可用，无需安装任何应用。也欢迎阅读我们的博客：
          <a href="/blog" className="ml-1 text-primary hover:underline">合并 PDF 不上传的完整指南</a>
          、
          <a href="/blog/pdfmergenext-vs-smallpdf-vs-ilovepdf" className="text-primary hover:underline">PDFMergeNext vs Smallpdf vs iLovePDF 对比</a>
          。
        </p>
      </section>
    </>
  );
}
