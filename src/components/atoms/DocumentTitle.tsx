'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useT, useLang } from '@/i18n/provider';

/**
 * 客户端动态刷新 <title>，以匹配当前语言。
 * App Router 静态导出无法按语言请求动态生成 metadata，
 * 因此用此组件在路由切换 / 语言切换时覆盖 document.title。
 */
export function DocumentTitle() {
  const t = useT();
  const lang = useLang();
  const pathname = usePathname();

  useEffect(() => {
    const suffix = 'MergeLocal';
    const articleTitle = t('blog.featured.title');

    const titles: Record<string, string> = {
      '/': `${t('meta.title.home')} | ${suffix}`,
      '/pricing': `${t('meta.title.pricing')} | ${suffix}`,
      '/blog': `${t('meta.title.blog')} | ${suffix}`,
      '/blog/why-local-offline-pdf-merge': `${articleTitle} | ${suffix}`,
      '/contact': `${t('meta.title.contact')} | ${suffix}`,
      '/privacy': `${t('meta.title.privacy')} | ${suffix}`,
      '/terms': `${t('meta.title.terms')} | ${suffix}`,
    };

    document.title = titles[pathname] || document.title;
  }, [t, lang, pathname]);

  return null;
}
