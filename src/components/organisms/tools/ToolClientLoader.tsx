'use client';

import dynamic from 'next/dynamic';
import type { ToolId } from './ToolClient';

// 工具依赖 window / Worker / Canvas，必须关闭 SSR。
// dynamic(ssr:false) 只能出现在 client 组件中，因此用本包装层，
// 让上层 server 页面可以正常导出 metadata。
const Tool = dynamic(() => import('./ToolClient'), {
  ssr: false,
  loading: () => (
    <div className="my-6 rounded-xl border border-line bg-surface p-6 text-sm text-fg-secondary">
      加载工具… / Loading tool…
    </div>
  ),
});

export function ToolClientLoader({ tool }: { tool: ToolId }) {
  return <Tool tool={tool} />;
}
