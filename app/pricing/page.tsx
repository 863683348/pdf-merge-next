'use client';

import dynamic from 'next/dynamic';
import { Spinner } from '@/components/atoms/Spinner';

const PricingPage = dynamic(() => import('@/views/PricingPage'), {
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
      <PricingPage />
      <section className="mx-auto max-w-3xl px-4 pb-16 pt-10 text-sm leading-relaxed text-fg-secondary">
        <h2 className="text-base font-semibold text-fg">PDFMergeNext 定价说明 / Pricing</h2>
        <p className="mt-3">
          PDFMergeNext 目前提供完全免费的 PDF 合并服务：无水印、无每日操作次数限制、无文件大小限制。
          免费版即可满足绝大多数日常 PDF 合并需求——合并任意数量的文件、拖拽排序、挑页合并（1-3,5 语法）全部免费。
        </p>
        <p className="mt-2">
          未来 Pro 订阅计划（即将推出）将为有更高需求的用户提供额外功能：
          超大文件支持（单文件 &gt;200MB）、批量批量转换、优先技术支持等。
          Pro 定价为 $7/月（月付）或 $49/年（年付，相当于约 $4/月）。
        </p>
        <p className="mt-2">
          所有处理均在浏览器客户端完成，文件永不离开你的设备。
          无需信用卡即可开始使用。
        </p>
      </section>
    </>
  );
}
