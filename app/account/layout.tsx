import type { Metadata } from 'next';

const SITE_URL = 'https://pdfmergenext.shop';

export const metadata: Metadata = {
  title: '我的账户 My Account',
  description:
    'PDFMergeNext 账户中心：查看会员状态、订阅详情、当前限额，管理本地离线 PDF 合并工具的使用。',
  keywords: [
    'PDFMergeNext 账户',
    'PDF 合并 会员状态',
    'PDF merger account',
    '我的订阅',
  ],
  alternates: {
    canonical: '/account',
    languages: { 'zh-CN': '/account', 'en-US': '/account', 'x-default': '/account' },
  },
  openGraph: {
    title: '我的账户 My Account · PDFMergeNext',
    description: '查看会员状态、订阅详情与当前使用上限。',
    url: `${SITE_URL}/account`,
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: '我的账户 My Account · PDFMergeNext',
    description: '查看会员状态、订阅详情与当前使用上限。',
  },
  // 会员中心无 SEO 价值，noindex 防爬
  robots: { index: false, follow: false },
};

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
