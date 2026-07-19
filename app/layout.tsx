import type { Metadata, Viewport } from 'next';
import { cookies } from 'next/headers';
import Script from 'next/script';
import './globals.css';
// 字体：@fontsource 本地自托管，无外部请求
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/noto-sans-sc/400.css';
import '@fontsource/noto-sans-sc/500.css';
import '@fontsource/jetbrains-mono/400.css';
import Providers from './providers';
import { Footer } from '@/components/organisms/Footer';
import { TopBar } from '@/components/molecules/TopBar';
import { AnalyticsPageview } from '@/components/atoms/AnalyticsPageview';
import { DocumentTitle } from '@/components/atoms/DocumentTitle';
import { faqContent } from '@/lib/faq';
import type { Lang } from '@/i18n/types';

const SITE_URL = 'https://pdf-merge-next.vercel.app';
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? '';
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID ?? '';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'PDF 合并 · 本地离线 · 文件不上传 | MergeLocal',
    template: '%s · MergeLocal',
  },
  description:
    '隐私优先的 PDF 合并工具：纯浏览器端、文件不上传、免注册、免安装、无水印，支持手机与中英双语。适合合同、财务报表、证件等敏感文档。 / A privacy-first, client-side PDF merger. Files never leave your device. No sign-up, no watermark, mobile-ready. 中文 / English.',
  keywords: [
    'PDF 合并',
    '合并 PDF',
    'PDF 合并 不上传',
    'PDF 合并 隐私',
    'PDF 合并 本地',
    '离线 PDF 合并',
    '浏览器 PDF 合并',
    '免费 PDF 合并',
    'PDF 合并 免注册',
    'PDF 合并 无水印',
    '手机 PDF 合并',
    'PDF 合并 排序',
    'PDF 合并 按页',
    'merge PDF',
    'combine PDF',
    'PDF merge',
    'local PDF merge',
    'private PDF merge',
    'offline PDF merger',
    'PDF combiner no upload',
    'free PDF merge',
  ],
  applicationName: 'MergeLocal',
  authors: [{ name: 'MergeLocal' }],
  creator: 'MergeLocal',
  category: 'technology',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  alternates: {
    canonical: '/',
    languages: {
      'zh-CN': '/',
      'en-US': '/',
      'x-default': '/',
    },
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'MergeLocal',
    title: 'PDF 合并 · 本地离线 · 文件不上传 | MergeLocal',
    description:
      '纯浏览器端、文件不上传、免注册、无水印的隐私优先 PDF 合并工具。支持手机与中英双语。',
    locale: 'zh_CN',
    alternateLocale: ['en_US'],
    images: [
      {
        url: '/og',
        width: 1200,
        height: 630,
        alt: 'MergeLocal — 本地离线 PDF 合并，文件不上传',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PDF 合并 · 本地离线 · 文件不上传 | MergeLocal',
    description:
      '纯浏览器端、文件不上传、免注册、无水印的隐私优先 PDF 合并工具。',
    images: ['/og'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f9fafb' },
    { media: '(prefers-color-scheme: dark)', color: '#0b0e14' },
  ],
};

// 结构化数据：WebApplication + FAQPage（服务端注入，确保被爬虫直接读取）
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'MergeLocal',
      url: SITE_URL,
      description:
        '隐私优先的纯浏览器端 PDF 合并工具：文件不上传、免注册、免安装、无水印，支持手机与中英双语。',
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'Any (browser)',
      inLanguage: ['zh-CN', 'en'],
      offers: [
        { '@type': 'Offer', name: 'Free', price: '0', priceCurrency: 'USD' },
        { '@type': 'Offer', name: 'Pro Monthly', price: '7', priceCurrency: 'USD' },
        { '@type': 'Offer', name: 'Pro Yearly', price: '49', priceCurrency: 'USD' },
      ],
      featureList: [
        'PDF 合并',
        '按页抽取',
        '拖拽 / 按钮排序',
        '本地离线处理',
        '文件不上传',
        '免注册',
        '无水印',
        '手机可用',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqContent.items.map((it) => ({
        '@type': 'Question',
        name: it.q.zh,
        acceptedAnswer: {
          '@type': 'Answer',
          text: it.a.zh,
        },
      })),
    },
  ],
};

// 在首帧前根据偏好/存储锁定主题，避免闪烁
const themeBootstrap = `
(function () {
  try {
    var t = localStorage.getItem('mergelocal-theme');
    if (!t) {
      t = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    document.documentElement.dataset.theme = t;
  } catch (e) {
    document.documentElement.dataset.theme = 'light';
  }
})();
`;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const serverLang = (cookieStore.get('mergelocal-lang')?.value ?? 'zh') as Lang;

  return (
    <html lang={serverLang === 'zh' ? 'zh-CN' : 'en'} data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Providers serverLang={serverLang}>
          <DocumentTitle />
          <TopBar />
          {children}
          <Footer />
        </Providers>

        {/* SPA 路由切换时补发 GA4 page_view */}
        <AnalyticsPageview />

        {/* GA4: 仅在生产环境且设置了 NEXT_PUBLIC_GA_ID 时加载 */}
        {process.env.NODE_ENV === 'production' && GA_ID.length > 0 && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}

        {/* Google Identity Services: 仅生产环境加载（Client ID 从环境变量取） */}
        {process.env.NODE_ENV === 'production' && (
          <Script
            src="https://accounts.google.com/gsi/client"
            strategy="afterInteractive"
          />
        )}

        {/* Microsoft Clarity 热力图: 仅生产 + 设置了 NEXT_PUBLIC_CLARITY_ID 时加载 */}
        {process.env.NODE_ENV === 'production' && CLARITY_ID.length > 0 && (
          <Script id="ms-clarity" strategy="afterInteractive">
            {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_ID}");`}
          </Script>
        )}
      </body>
    </html>
  );
}
