/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 纯客户端工具：不引入任何服务端逻辑；构建时跳过 ESLint（类型检查由 tsc 负责）
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
