/** @type {import('next').NextConfig} */
const csp = [
  "default-src 'self'",
  // script: 自身 + 谷歌 GSI / gtag / GA4 / PayPal SDK / Google CDN / Microsoft Clarity
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://accounts.google.com https://apis.google.com https://*.paypal.com https://www.googletagmanager.com https://*.googletagmanager.com https://www.gstatic.com https://*.gstatic.com https://www.clarity.ms https://*.clarity.ms",
  // style: 自身 + 谷歌 GSI / Google Fonts / gstatic（GIS 注入样式可能来自 gstatic）
  "style-src 'self' 'unsafe-inline' https://accounts.google.com https://fonts.googleapis.com https://www.gstatic.com https://fonts.gstatic.com",
  // img: 自身 + data/blob/任意 https（含 GA4 像素 + Google 用户头像 + Clarity）
  "img-src 'self' data: blob: https: https://*.googleusercontent.com https://*.clarity.microsoft.com https://clarity.microsoft.com",
  // font: 自身 + Google Fonts / gstatic
  "font-src 'self' data: https://fonts.gstatic.com https://www.gstatic.com",
  // connect: 自身 + 谷歌全栈（GAPI / OAuth / GA4 全子域 / Tag Manager）+ PayPal + Clarity + Clarity 像素
  "connect-src 'self' https://accounts.google.com https://apis.google.com https://oauth2.googleapis.com https://www.googleapis.com https://content.googleapis.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com https://*.googletagmanager.com https://stats.g.doubleclick.net https://*.paypal.com https://*.clarity.ms https://clarity.microsoft.com https://c.clarity.ms https://c.bing.com",
  // worker: 自身 + blob（pdfjs）
  "worker-src 'self' blob:",
  // frame: Google OAuth / GIS 弹窗 + PayPal 支付弹窗
  "frame-src 'self' https://accounts.google.com https://*.google.com https://*.paypal.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self' https://accounts.google.com",
].join('; ');

const nextConfig = {
  reactStrictMode: true,
  // 纯客户端工具：不引入任何服务端逻辑；构建时跳过 ESLint（类型检查由 tsc 负责）
  eslint: { ignoreDuringBuilds: true },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Content-Security-Policy', value: csp },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value:
              'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
