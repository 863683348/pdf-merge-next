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
  return <App />;
}
