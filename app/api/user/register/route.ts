// POST /api/user/register
// 接收 Google OAuth2 access_token，后端调 userinfo 验证身份，upsert 到 users 表。
// 前端在 GoogleLoginButton 登录成功后调用。
//
// Request body: { "access_token": "<google oauth2 access_token>" }
// Response:     { "ok": true, "user": { "sub", "email", "name", "picture" } }
//
// 安全性：access_token 由 Google 签发，后端再次调 userinfo 验证，无法伪造 sub。

import { NextResponse } from 'next/server';
import { upsertUser } from '@/lib/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { access_token?: string };
    if (!body.access_token) {
      return NextResponse.json(
        { ok: false, error: 'access_token required' },
        { status: 400 }
      );
    }

    // 调 Google userinfo 验证 access_token 并取用户信息
    const res = await fetch(
      'https://www.googleapis.com/oauth2/v3/userinfo',
      { headers: { Authorization: `Bearer ${body.access_token}` } }
    );
    if (!res.ok) {
      return NextResponse.json(
        { ok: false, error: 'invalid access_token' },
        { status: 401 }
      );
    }
    const data = (await res.json()) as Record<string, unknown>;
    const sub = typeof data.sub === 'string' ? data.sub : '';
    if (!sub) {
      return NextResponse.json(
        { ok: false, error: 'no sub in userinfo' },
        { status: 400 }
      );
    }

    // upsert 到 Neon users 表
    const user = await upsertUser({
      sub,
      email: String(data.email ?? ''),
      name: String(data.name ?? ''),
      picture: typeof data.picture === 'string' ? data.picture : '',
    });

    return NextResponse.json({
      ok: true,
      user: {
        sub: user.google_sub,
        email: user.email,
        name: user.name,
        picture: user.picture,
      },
    });
  } catch (err) {
    console.error('[api/user/register] error:', err);
    const msg = err instanceof Error ? err.message : 'server error';
    // DATABASE_URL 未配 → 503；其余 → 500
    const status = msg.includes('DATABASE_URL') ? 503 : 500;
    return NextResponse.json({ ok: false, error: msg }, { status });
  }
}
