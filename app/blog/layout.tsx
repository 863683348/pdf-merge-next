import type { Metadata } from 'next';

const SITE_URL = 'https://pdfmergenext.shop';

export const metadata: Metadata = {
  title: '博客 Blog',
  description:
    '关于本地离线、隐私优先 PDF 合并的使用指南、真实场景与趋势——为什么文件不上传比“免费”更重要。',
  keywords: [
    'PDF 合并 教程',
    '本地 PDF 合并',
    '离线 PDF 合并',
    '隐私 PDF 合并',
    'pdf merge guide',
    'offline pdf merge',
  ],
  alternates: {
    canonical: '/blog',
    languages: { 'zh-CN': '/blog', 'en-US': '/blog', 'x-default': '/blog' },
  },
  openGraph: {
    title: '博客 Blog · MergeLocal',
    description: '本地离线、隐私优先 PDF 合并的使用指南与趋势。',
    url: `${SITE_URL}/blog`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '博客 Blog · MergeLocal',
    description: '本地离线、隐私优先 PDF 合并的使用指南与趋势。',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
