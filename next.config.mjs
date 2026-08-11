/** @type {import('next').NextConfig} */
const csp = [
  "default-src 'self'",
  // script: 自身 + 谷歌 GSI / gtag / GA4 / PayPal SDK / Google CDN / Microsoft Clarity
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://accounts.google.com https://apis.google.com https://*.paypal.com https://www.googletagmanager.com https://*.googletagmanager.com https://www.gstatic.com https://*.gstatic.com https://www.clarity.ms https://*.clarity.ms https://pagead2.googlesyndication.com",
  // style: 自身 + 谷歌 GSI / Google Fonts / gstatic（GIS 注入样式可能来自 gstatic）
  "style-src 'self' 'unsafe-inline' https://accounts.google.com https://fonts.googleapis.com https://www.gstatic.com https://fonts.gstatic.com",
  // img: 自身 + data/blob/任意 https（含 GA4 像素 + Google 用户头像 + Clarity）
  "img-src 'self' data: blob: https: https://*.googleusercontent.com https://*.clarity.microsoft.com https://clarity.microsoft.com",
  // font: 自身 + Google Fonts / gstatic
  "font-src 'self' data: https://fonts.gstatic.com https://www.gstatic.com",
  // connect: 自身 + 谷歌全栈（GAPI / OAuth / GA4 全子域 / Tag Manager）+ PayPal + Clarity + Clarity 像素
  "connect-src 'self' https://accounts.google.com https://apis.google.com https://oauth2.googleapis.com https://www.googleapis.com https://content.googleapis.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com https://*.googletagmanager.com https://stats.g.doubleclick.net https://*.paypal.com https://*.clarity.ms https://clarity.microsoft.com https://c.clarity.ms https://c.bing.com https://pagead2.googlesyndication.com https://googleads.g.doubleclick.net",
  // worker: 自身 + blob（pdfjs）
  "worker-src 'self' blob:",
  // frame: Google OAuth / GIS 弹窗 + PayPal 支付弹窗
  "frame-src 'self' https://accounts.google.com https://*.google.com https://*.paypal.com https://googleads.g.doubleclick.net",
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

      // --- 静态资源缓存 ---
      // Vercel 对 public/ 下的文件默认下发 `public, max-age=0, must-revalidate`：
      // 浏览器零复用、每个 edge region 反复回源，直接推高 Fast Origin Transfer。
      // 下面这些资源路径都带 pdfjs 版本号（见 scripts/copy-pdfjs-assets.mjs），
      // 内容与路径一一绑定，升级 pdfjs 会换新路径，因此 immutable 是安全的。
      {
        source: '/pdf.worker.:version([0-9.]+).min.mjs',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/cmap-:version([0-9.]+)/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/standard_fonts-:version([0-9.]+)/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // 图标：文件名固定，用较短强缓存 + 长 SWR（换图时改文件名而非覆盖）
      {
        source: '/favicon.svg',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, stale-while-revalidate=2592000',
          },
        ],
      },
      // 爬虫 / LLM 抓取文件：内容会随内容运营变动，1 小时强缓存 + 1 天 SWR
      {
        source: '/:file(robots\\.txt|llms\\.txt|llms-full\\.txt|sitemap\\.xml)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
      // FOT 修复：公开页加边缘缓存（Next.js 默认 max-age=0 每次回源验证）。
      // 排除 /api（PayPal 接口）、/account（用户订阅页）、/ads.txt；覆盖其余全部公开页
      //（首页、/pricing、/blog/*、/privacy、/terms、/contact 等）。
      {
        source: '/:path((?!api|account|ads\\.txt).*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=86400, stale-while-revalidate=604800',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // 规范域名统一：www → 非 www（301）。配合根布局的 canonical: '/' 完成 P1 规范域名修复。
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.pdfmergenext.shop' }],
        destination: 'https://pdfmergenext.shop/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
