// 创建 PayPal 订阅计划（Billing Plan）
// 用法（在本地有网络的环境运行，沙箱可能无法访问 PayPal API）：
//   PAYPAL_CLIENT_ID=xxx PAYPAL_SECRET=xxx PAYPAL_ENV=sandbox node scripts/create-paypal-plans.mjs
// 输出两个 plan id，分别填入 Vercel 环境变量：
//   NEXT_PUBLIC_PAYPAL_PLAN_MONTHLY = 月付 plan id
//   NEXT_PUBLIC_PAYPAL_PLAN_YEARLY  = 年付 plan id
// 注意：沙箱 plan 必须用沙箱 Client ID + 沙箱 Secret 创建，与 NEXT_PUBLIC_PAYPAL_CLIENT_ID 同属沙箱。

const CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
const SECRET = process.env.PAYPAL_SECRET;
const ENV = process.env.PAYPAL_ENV ?? 'sandbox';
const BASE =
  ENV === 'sandbox'
    ? 'https://api-m.sandbox.paypal.com'
    : 'https://api-m.paypal.com';

if (!CLIENT_ID || !SECRET) {
  console.error('缺少 PAYPAL_CLIENT_ID 或 PAYPAL_SECRET 环境变量');
  process.exit(1);
}

async function getToken() {
  const res = await fetch(`${BASE}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization:
        'Basic ' +
        Buffer.from(`${CLIENT_ID}:${SECRET}`).toString('base64'),
    },
    body: 'grant_type=client_credentials',
  });
  if (!res.ok) {
    throw new Error('获取 token 失败: ' + res.status + ' ' + (await res.text()));
  }
  return (await res.json()).access_token;
}

async function createProduct(token) {
  const res = await fetch(`${BASE}/v1/catalogs/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: 'MergeLocal Pro',
      description: 'MergeLocal Pro subscription plan',
      type: 'SERVICE',
      category: 'SOFTWARE',
    }),
  });
  if (!res.ok) {
    throw new Error('创建 product 失败: ' + res.status + ' ' + (await res.text()));
  }
  return (await res.json()).id;
}

async function createPlan(token, productId, opts) {
  const res = await fetch(`${BASE}/v1/billing/plans`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      'PayPal-Request-Id': `${opts.name}-${Date.now()}`,
    },
    body: JSON.stringify({
      product_id: productId,
      name: opts.name,
      description: `MergeLocal Pro ${opts.name}`,
      status: 'ACTIVE',
      billing_cycles: [
        {
          frequency: {
            interval_unit: opts.interval,
            interval_count: opts.intervalCount,
          },
          tenure_type: 'REGULAR',
          sequence: 1,
          total_cycles: 0, // 0 = 无限期自动续费
          pricing_scheme: {
            fixed_price: { value: opts.price, currency_code: 'USD' },
          },
        },
      ],
      payment_preferences: {
        auto_bill_outstanding: true,
        setup_fee_failure_action: 'CONTINUE',
        payment_failure_threshold: 3,
      },
    }),
  });
  if (!res.ok) {
    throw new Error('创建 plan 失败: ' + res.status + ' ' + (await res.text()));
  }
  return (await res.json()).id;
}

async function main() {
  const token = await getToken();
  console.log('token OK');
  const productId = await createProduct(token);
  console.log('PRODUCT_ID=' + productId);
  const monthly = await createPlan(token, productId, {
    name: 'pro_monthly',
    price: '7.00',
    interval: 'MONTH',
    intervalCount: 1,
  });
  const yearly = await createPlan(token, productId, {
    name: 'pro_yearly',
    price: '49.00',
    interval: 'YEAR',
    intervalCount: 1,
  });
  console.log('PLAN_MONTHLY=' + monthly);
  console.log('PLAN_YEARLY=' + yearly);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
