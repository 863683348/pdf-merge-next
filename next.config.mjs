/** @type {import('next').NextConfig} */
const csp = [
  "default-src 'self'",
  // script: 自身 + 谷歌 GSI / PayPal SDK / GA4 / PayPal checkout
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://accounts.google.com https://apis.google.com https://*.paypal.com https://www.googletagmanager.com",
  // style: 自身 + 谷歌 GSI / Google Fonts
  "style-src 'self' 'unsafe-inline' https://accounts.google.com https://fonts.googleapis.com",
  // img: 自身 + data/blob/任意 https（含 GA4 像素 + Google 用户头像）
  "img-src 'self' data: blob: https:",
  // font: 自身 + Google Fonts
  "font-src 'self' data: https://fonts.gstatic.com",
  // connect: 自身 + 谷歌 + PayPal + GA4
  "connect-src 'self' https://accounts.google.com https://apis.google.com https://oauth2.googleapis.com https://www.googleapis.com https://*.paypal.com https://www.google-analytics.com https://www.googletagmanager.com",
  // worker: 自身 + blob（pdfjs）
  "worker-src 'self' blob:",
  // frame: Google OAuth 弹窗 + PayPal 支付弹窗
  "frame-src 'self' https://accounts.google.com https://*.paypal.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
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
