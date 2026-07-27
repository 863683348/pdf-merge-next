// POST /api/paypal/activate
// PayPal 订阅 onApprove 后主动写入 DB（即时生效，不等 webhook）。
// 前端在 PricingPage onApprove 时调用。
//
// Request body: {
//   "subscriptionID": "I-XXXX",       // PayPal subscription ID
//   "sub": "<google_sub>",             // 当前登录用户的 Google sub
//   "plan": "pro_monthly" | "pro_yearly"
// }
// Response: { "ok": true }
//
// 安全性：信任 PayPal onApprove（subscriptionID 由 PayPal 确认后返回）。
// webhook 作为兜底（处理 CANCELLED/EXPIRED 后续状态）。

import { NextResponse } from 'next/server';
import { upsertSubscription } from '@/lib/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      subscriptionID?: string;
      sub?: string;
      plan?: 'pro_monthly' | 'pro_yearly';
    };

    if (!body.subscriptionID || !body.sub || !body.plan) {
      return NextResponse.json(
        { ok: false, error: 'subscriptionID, sub, plan are required' },
        { status: 400 }
      );
    }

    if (body.plan !== 'pro_monthly' && body.plan !== 'pro_yearly') {
      return NextResponse.json(
        { ok: false, error: 'invalid plan' },
        { status: 400 }
      );
    }

    await upsertSubscription({
      sub: body.sub,
      paypalSubscriptionId: body.subscriptionID,
      plan: body.plan,
      status: 'active',
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[api/paypal/activate] error:', err);
    const msg = err instanceof Error ? err.message : 'server error';
    const status = msg.includes('DATABASE_URL') ? 503 : 500;
    return NextResponse.json({ ok: false, error: msg }, { status });
  }
}
