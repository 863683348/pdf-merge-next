// GET /api/user/subscription?sub=<google_sub>
// 按 google_sub 查有效订阅，用于登录后恢复 Pro 状态。
// 前端在 useAppStore 初始化（有 gaUser）时调用。
//
// Response（已订阅）: { "plan": "pro_yearly", "status": "active", "expires": "2026-08-23T..." }
// Response（未订阅）: { "plan": null }
//
// 安全性：只读接口，仅泄露"某 sub 是否 Pro"，无写入风险。
// 如需更强校验，可改为 Bearer access_token 鉴权（与 register 一致）。

import { NextResponse } from 'next/server';
import { findActiveSubscriptionBySub } from '@/lib/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const sub = searchParams.get('sub');
    if (!sub) {
      return NextResponse.json(
        { ok: false, error: 'sub query param required' },
        { status: 400 }
      );
    }

    const subInfo = await findActiveSubscriptionBySub(sub);
    if (!subInfo) {
      return NextResponse.json({ ok: true, plan: null });
    }

    return NextResponse.json({
      ok: true,
      plan: subInfo.plan,
      status: subInfo.status,
      expires: subInfo.current_period_end,
    });
  } catch (err) {
    console.error('[api/user/subscription] error:', err);
    const msg = err instanceof Error ? err.message : 'server error';
    const status = msg.includes('DATABASE_URL') ? 503 : 500;
    // DB 不可用时降级为"未订阅"，前端走 Free 流程，不阻塞用户
    if (status === 503) {
      return NextResponse.json({ ok: true, plan: null, degraded: true });
    }
    return NextResponse.json({ ok: false, error: msg }, { status });
  }
}
