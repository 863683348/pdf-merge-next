'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { gtagPageview } from '@/lib/analytics';

// SPA 路由切换时补发 GA4 page_view。
// 首屏由 layout.tsx 的 ga4-init 引导，这里统一负责所有（含初始）pageview，
// 故 ga4-init 内联脚本不再带 page_path，避免首屏重复计数。
export function AnalyticsPageview() {
  const pathname = usePathname();
  useEffect(() => {
    if (pathname) gtagPageview(pathname);
  }, [pathname]);
  return null;
}
