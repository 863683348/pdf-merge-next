import { NextResponse } from 'next/server';

// ads.txt — AdSense 要求根域名可访问
// 环境变量没配时返回 404（不阻断部署）；配了 NEXT_PUBLIC_ADSENSE_CLIENT 后自动生成正确内容
export const dynamic = 'force-static';

export function GET() {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? '';
  if (!client) {
    return new NextResponse('AdSense not configured', { status: 404 });
  }
  // client = "ca-pub-XXXXXXXXXXXXXXXX" → ads.txt 用 "pub-XXXXXXXXXXXXXXXX"（去掉 ca- 前缀）
  const pub = client.replace(/^ca-/, '');
  const body = `google.com, ${pub}, DIRECT, f08c47fec0942fa0\n`;
  return new NextResponse(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
