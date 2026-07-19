import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '服务条款 Terms',
  description: 'MergeLocal 服务条款：工具用途、免责声明与订阅说明。',
  keywords: ['PDF 合并 服务条款', 'MergeLocal terms'],
  alternates: {
    canonical: '/terms',
    languages: { 'zh-CN': '/terms', 'en-US': '/terms', 'x-default': '/terms' },
  },
  openGraph: {
    title: '服务条款 Terms · MergeLocal',
    description: '工具用途、免责声明与订阅说明。',
    url: 'https://pdf-merge-next.vercel.app/terms',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '服务条款 Terms · MergeLocal',
    description: '工具用途、免责声明与订阅说明。',
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
