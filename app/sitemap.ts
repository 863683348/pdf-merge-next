import type { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/lib/blog/posts';

const SITE_URL = 'https://pdfmergenext.shop';

// 动态生成 sitemap：build 时写入真实日期，避免静态 lastmod 写死导致 Google 误判更新频率。
// 博客条目从 src/lib/blog/posts.ts 的 BLOG_POSTS 数据驱动生成（新增文章自动收录，无需手改本文件）。
// 非博客类页面 monthly/yearly，博客类页面 weekly（兑现内容更新承诺）。
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: { path: string; changefreq: 'weekly' | 'monthly' | 'yearly'; priority: number }[] = [
    { path: '', changefreq: 'monthly', priority: 1 },
    { path: '/pricing', changefreq: 'monthly', priority: 0.6 },
    { path: '/blog', changefreq: 'weekly', priority: 0.7 },
    { path: '/contact', changefreq: 'yearly', priority: 0.4 },
    { path: '/privacy', changefreq: 'yearly', priority: 0.3 },
    { path: '/terms', changefreq: 'yearly', priority: 0.3 },
  ];

  const blogRoutes = BLOG_POSTS.map((post) => ({
    path: `/blog/${post.slug}`,
    changefreq: 'weekly' as const,
    priority: 0.8,
  }));

  const routes = [...staticRoutes, ...blogRoutes];

  return routes.map(({ path, changefreq, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastmod: now,
    changefreq,
    priority,
    alternates: {
      languages: {
        'zh-CN': `${SITE_URL}${path}`,
        'en-US': `${SITE_URL}${path}`,
        'x-default': `${SITE_URL}${path}`,
      },
    },
  }));
}
