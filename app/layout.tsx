import type { Metadata, Viewport } from 'next';
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

export const metadata: Metadata = {
  title: 'PDF 合并 · 本地离线工具 | MergeLocal',
  description:
    '隐私优先的 PDF 合并工具：纯浏览器端、文件不上传、零注册。支持中英双语。 / A privacy-first, client-side PDF merger. Files never leave your device. 中文 / English.',
  applicationName: 'MergeLocal',
  authors: [{ name: 'MergeLocal' }],
  robots: { index: true, follow: true },
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
