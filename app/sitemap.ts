import type { MetadataRoute } from 'next';

const SITE_URL = 'https://pdfmergenext.shop';

// 动态生成 sitemap：build 时写入真实日期，避免静态 lastmod 写死导致 Google 误判更新频率。
// 覆盖全部核心 URL；博客类页面 weekly（兑现内容更新承诺），其余 monthly。
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: { path: string; changefreq: 'weekly' | 'monthly' | 'yearly'; priority: number }[] = [
    { path: '', changefreq: 'monthly', priority: 1 },
    { path: '/pricing', changefreq: 'monthly', priority: 0.6 },
    { path: '/blog', changefreq: 'weekly', priority: 0.7 },
    { path: '/blog/why-local-offline-pdf-merge', changefreq: 'weekly', priority: 0.8 },
    { path: '/blog/how-to-merge-pdf-without-uploading', changefreq: 'weekly', priority: 0.8 },
    { path: '/blog/pdfmergenext-vs-smallpdf-vs-ilovepdf', changefreq: 'weekly', priority: 0.8 },
    { path: '/blog/merge-pdf-no-upload', changefreq: 'weekly', priority: 0.8 },
    { path: '/contact', changefreq: 'yearly', priority: 0.4 },
    { path: '/privacy', changefreq: 'yearly', priority: 0.3 },
    { path: '/terms', changefreq: 'yearly', priority: 0.3 },
  ];

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
