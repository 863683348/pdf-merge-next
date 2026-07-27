// POST /api/paypal/webhook
// 接收 PayPal 订阅事件回调，验签后更新 DB 订阅状态。
//
// 处理的事件类型：
//   BILLING.SUBSCRIPTION.ACTIVATED   → status = 'active'   （兜底，主路径是 activate 路由）
//   BILLING.SUBSCRIPTION.CANCELLED   → status = 'cancelled'
//   BILLING.SUBSCRIPTION.EXPIRED     → status = 'expired'
//
// 验签：调 PayPal verify-webhook-signature API（需 PAYPAL_CLIENT_SECRET + PAYPAL_WEBHOOK_ID）
//
// 环境变量：
//   PAYPAL_CLIENT_ID      后端 PayPal Client ID（不带 NEXT_PUBLIC_ 前缀）
//   PAYPAL_CLIENT_SECRET  PayPal Secret
//   PAYPAL_WEBHOOK_ID     PayPal 后台创建 webhook 后拿到的 Webhook ID
//   PAYPAL_ENV            'live' | 'sandbox'（默认 live）

import { NextResponse } from 'next/server';
import { updateSubscriptionStatus } from '@/lib/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const PAYPAL_BASE =
  (process.env.PAYPAL_ENV ?? 'live') === 'sandbox'
    ? 'https://api-m.sandbox.paypal.com'
    : 'https://api-m.paypal.com';

// 获取 PayPal access token（client credentials grant）
async function getPaypalAccessToken(): Promise<string> {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    throw new Error('PAYPAL_CLIENT_ID / PAYPAL_CLIENT_SECRET not configured');
  }
  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
  const res = await fetch(`${PAYPAL_BASE}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${auth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  });
  if (!res.ok) {
    throw new Error(`PayPal token request failed: ${res.status}`);
  }
  const data = (await res.json()) as { access_token?: string };
  if (!data.access_token) {
    throw new Error('no access_token in PayPal response');
  }
  return data.access_token;
}

// 调 PayPal verify-webhook-signature 验签
async function verifyWebhookSignature(
  headers: Headers,
  webhookEvent: unknown
): Promise<boolean> {
  const webhookId = process.env.PAYPAL_WEBHOOK_ID;
  if (!webhookId) {
    throw new Error('PAYPAL_WEBHOOK_ID not configured');
  }

  const token = await getPaypalAccessToken();
  const verifyBody = {
    auth_algo: headers.get('paypal-auth-algo'),
    cert_url: headers.get('paypal-cert-url'),
    transmission_id: headers.get('paypal-transmission-id'),
    transmission_sig: headers.get('paypal-transmission-sig'),
    transmission_time: headers.get('paypal-transmission-time'),
    webhook_id: webhookId,
    webhook_event: webhookEvent,
  };

  const res = await fetch(
    `${PAYPAL_BASE}/v1/notifications/verify-webhook-signature`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(verifyBody),
    }
  );
  if (!res.ok) {
    throw new Error(`verify API failed: ${res.status}`);
  }
  const data = (await res.json()) as { verification_status?: string };
  return data.verification_status === 'SUCCESS';
}

interface PaypalWebhookEvent {
  event_type?: string;
  resource?: {
    id?: string; // PayPal subscription ID (I-XXXX)
  };
}

export async function POST(request: Request) {
  try {
    const rawBody = await request.text();
    const event = JSON.parse(rawBody) as PaypalWebhookEvent;

    // 1. 验签（配置缺失时返回 200 避免 PayPal 疯狂重试，但记日志）
    let verified = false;
    try {
      verified = await verifyWebhookSignature(request.headers, JSON.parse(rawBody));
    } catch (verifyErr) {
      console.error('[api/paypal/webhook] verify failed:', verifyErr);
      // 配置缺失 → 静默返回 200，管理员看日志补配置
      // 非配置错误（验签真的失败）→ 返回 401，PayPal 不重试 4xx
      const msg = verifyErr instanceof Error ? verifyErr.message : '';
      if (msg.includes('not configured')) {
        return NextResponse.json(
          { ok: false, error: 'webhook not configured', skipped: true },
          { status: 200 }
        );
      }
      return NextResponse.json(
        { ok: false, error: 'verify failed' },
        { status: 401 }
      );
    }

    if (!verified) {
      console.warn('[api/paypal/webhook] signature invalid');
      return NextResponse.json(
        { ok: false, error: 'invalid signature' },
        { status: 401 }
      );
    }

    // 2. 处理事件
    const subscriptionId = event.resource?.id;
    const eventType = event.event_type ?? '';
    console.log(`[api/paypal/webhook] verified event: ${eventType}, sub: ${subscriptionId}`);

    if (!subscriptionId) {
      console.warn('[api/paypal/webhook] no resource.id, skipping');
      return NextResponse.json({ ok: true, skipped: true });
    }

    switch (eventType) {
      case 'BILLING.SUBSCRIPTION.ACTIVATED':
        // 兜底：主路径是 activate 路由（onApprove 时已写）。
        // 这里仅把已存在记录置为 active；不存在则跳过（等 activate 路由写）。
        await updateSubscriptionStatus(subscriptionId, 'active');
        break;
      case 'BILLING.SUBSCRIPTION.CANCELLED':
        await updateSubscriptionStatus(subscriptionId, 'cancelled');
        break;
      case 'BILLING.SUBSCRIPTION.EXPIRED':
        await updateSubscriptionStatus(subscriptionId, 'expired');
        break;
      default:
        // 其余事件（如 PAYMENT.SALE.COMPLETED）不处理，返回 200
        console.log(`[api/paypal/webhook] unhandled event type: ${eventType}`);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[api/paypal/webhook] error:', err);
    // 返回 200 避免 PayPal 重试；DB 错误属于我方问题，重试也无济于事
    return NextResponse.json(
      { ok: false, error: 'server error' },
      { status: 200 }
    );
  }
}

// PayPal 会先发 GET 探测（部分配置下），返回 200
export async function GET() {
  return NextResponse.json({ ok: true, service: 'paypal-webhook' });
}
