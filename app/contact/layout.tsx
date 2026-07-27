import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '联系我们 Contact',
  description: '联系 PDFMergeNext：产品反馈、合作与安全问题披露。',
  keywords: ['PDFMergeNext 联系', 'PDF 合并 反馈', 'contact PDFMergeNext'],
  alternates: {
    canonical: '/contact',
    languages: { 'zh-CN': '/contact', 'en-US': '/contact', 'x-default': '/contact' },
  },
  openGraph: {
    title: '联系我们 Contact · PDFMergeNext',
    description: '产品反馈、合作与安全问题披露。',
    url: 'https://pdfmergenext.shop/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '联系我们 Contact · PDFMergeNext',
    description: '产品反馈、合作与安全问题披露。',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
