import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '隐私政策 Privacy',
  description:
    'MergeLocal 隐私政策：纯浏览器端处理，文件不上传服务器，不收集文档内容，仅必要的匿名使用统计。',
  keywords: ['PDF 合并 隐私政策', '隐私优先 PDF', 'MergeLocal privacy'],
  alternates: {
    canonical: '/privacy',
    languages: { 'zh-CN': '/privacy', 'en-US': '/privacy', 'x-default': '/privacy' },
  },
  openGraph: {
    title: '隐私政策 Privacy · MergeLocal',
    description: '纯浏览器端处理，文件不上传服务器，不收集文档内容。',
    url: 'https://pdf-merge-next.vercel.app/privacy',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '隐私政策 Privacy · MergeLocal',
    description: '纯浏览器端处理，文件不上传服务器，不收集文档内容。',
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
