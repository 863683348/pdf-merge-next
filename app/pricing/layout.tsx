import type { Metadata } from 'next';

const SITE_URL = 'https://pdfmergenext.shop';

export const metadata: Metadata = {
  title: '定价 Pricing',
  description:
    'MergeLocal PDF 合并定价：免费版与 Pro 订阅（月付 $7 / 年付 $49）。本地离线处理、文件不上传、免注册、无水印，支持中英双语与手机端。',
  keywords: [
    'PDF 合并 定价',
    'PDF merger pricing',
    'merge pdf price',
    'Pro PDF 合并',
    '订阅 PDF 合并',
    '免费 PDF 合并 升级',
  ],
  alternates: {
    canonical: '/pricing',
    languages: { 'zh-CN': '/pricing', 'en-US': '/pricing', 'x-default': '/pricing' },
  },
  openGraph: {
    title: '定价 Pricing · MergeLocal',
    description: '免费版与 Pro 订阅（$7/月 · $49/年）。本地离线、文件不上传、无水印。',
    url: `${SITE_URL}/pricing`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '定价 Pricing · MergeLocal',
    description: '免费版与 Pro 订阅（$7/月 · $49/年）。本地离线、文件不上传、无水印。',
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
