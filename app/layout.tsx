import type { Metadata, Viewport } from 'next';
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

const SITE_URL = 'https://pdfmergenext.shop';
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? '';
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID ?? '';
const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? '';
const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? '';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Merge PDF Online Free - No Upload, No Sign-Up | PDFMergeNext',
    template: '%s | PDFMergeNext',
  },
  description:
    'Free online PDF merger: merge PDF files locally in your browser with no upload, no sign-up, no watermark. Private, fast, mobile-ready. 中文 / English.',
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
  applicationName: 'PDFMergeNext',
  authors: [{ name: 'PDFMergeNext' }],
  creator: 'PDFMergeNext',
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
    siteName: 'PDFMergeNext',
    title: 'Merge PDF Online Free - No Upload | PDFMergeNext',
    description:
      'Free online PDF merger. Files never leave your device. No sign-up, no watermark, mobile-ready.',
    locale: 'en_US',
    alternateLocale: ['zh_CN'],
    images: [
      {
        url: '/og',
        width: 1200,
        height: 630,
        alt: 'PDFMergeNext — 本地离线 PDF 合并，文件不上传',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Merge PDF Online Free - No Upload | PDFMergeNext',
    description:
      'Free online PDF merger. Files never leave your device. No sign-up, no watermark.',
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
      name: 'PDFMergeNext',
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

// 根布局是静态预渲染的（不再读 cookie），HTML 首帧固定 lang="zh-CN"。
// 这段脚本在首帧前按客户端偏好修正 <html lang>，与 src/i18n/core.ts 的 detectLang
// 保持同样的优先级：localStorage -> cookie -> navigator。文本本身由 LanguageProvider
// 在 hydration 后切换。
const langBootstrap = `
(function () {
  try {
    var l = localStorage.getItem('pdf-merge-lang');
    if (l !== 'zh' && l !== 'en') {
      var m = document.cookie.match(/(?:^|; )mergelocal-lang=([^;]*)/);
      l = m && m[1];
    }
    if (l !== 'zh' && l !== 'en') {
      l = /^\\s*zh/i.test(navigator.language || '') ? 'zh' : 'en';
    }
    document.documentElement.lang = l === 'zh' ? 'zh-CN' : 'en';
  } catch (e) {
    /* 保持服务端渲染的 zh-CN */
  }
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
        <script dangerouslySetInnerHTML={{ __html: langBootstrap }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Providers>
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

        {/* Google Identity Services: 有 Client ID 即加载（本地 dev 也走 sandbox） */}
        {(process.env.NODE_ENV === 'production' || !!GOOGLE_CLIENT_ID) && (
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

        {/* Google AdSense (Auto Ads): 仅生产 + 设置了 NEXT_PUBLIC_ADSENSE_CLIENT 时加载 */}
        {process.env.NODE_ENV === 'production' && ADSENSE_CLIENT.length > 0 && (
          <Script
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
