// Neon Postgres 数据库封装（serverless driver，适配 Vercel）
// 文档：https://neon.tech/docs/serverless/serverless-driver
//
// 环境变量：DATABASE_URL（Neon connection string，形如
//   postgresql://user:pass@ep-xxx.region.aws.neon.tech/dbname?sslmode=require）
//
// 所有查询走 tagged template 自动参数化，防 SQL 注入。

import { neon } from '@neondatabase/serverless';

function getSql() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error('DATABASE_URL is not set');
  }
  return neon(url);
}

export interface DbUser {
  id: string;
  google_sub: string;
  email: string;
  name: string;
  picture: string | null;
  created_at: string;
  updated_at: string;
}

export interface DbSubscription {
  id: string;
  user_id: string;
  paypal_subscription_id: string;
  plan: 'pro_monthly' | 'pro_yearly';
  status: 'active' | 'cancelled' | 'expired';
  created_at: string;
  current_period_end: string | null;
}

// upsert 用户（按 google_sub 唯一）。登录后调用。
export async function upsertUser(input: {
  sub: string;
  email: string;
  name: string;
  picture?: string;
}): Promise<DbUser> {
  const sql = getSql();
  const rows = await sql`
    INSERT INTO users (google_sub, email, name, picture)
    VALUES (${input.sub}, ${input.email}, ${input.name}, ${input.picture ?? null})
    ON CONFLICT (google_sub)
    DO UPDATE SET
      email = EXCLUDED.email,
      name  = EXCLUDED.name,
      picture = EXCLUDED.picture,
      updated_at = now()
    RETURNING *
  `;
  return rows[0] as DbUser;
}

// 按 google_sub 查用户
export async function findUserBySub(sub: string): Promise<DbUser | null> {
  const sql = getSql();
  const rows = await sql`SELECT * FROM users WHERE google_sub = ${sub}`;
  return (rows[0] as DbUser | undefined) ?? null;
}

// 按 google_sub 查有效订阅（active 状态）。用于登录后恢复 Pro。
export async function findActiveSubscriptionBySub(
  sub: string
): Promise<DbSubscription | null> {
  const sql = getSql();
  const rows = await sql`
    SELECT s.* FROM subscriptions s
    JOIN users u ON u.id = s.user_id
    WHERE u.google_sub = ${sub}
      AND s.status = 'active'
    ORDER BY s.created_at DESC
    LIMIT 1
  `;
  return (rows[0] as DbSubscription | undefined) ?? null;
}

// 按 PayPal subscription ID 查订阅
export async function findSubscriptionByPaypalId(
  paypalSubscriptionId: string
): Promise<DbSubscription | null> {
  const sql = getSql();
  const rows = await sql`
    SELECT * FROM subscriptions WHERE paypal_subscription_id = ${paypalSubscriptionId}
  `;
  return (rows[0] as DbSubscription | undefined) ?? null;
}

// 新建订阅（onApprove 主动写入）。如已存在则更新状态为 active。
export async function upsertSubscription(input: {
  sub: string; // google_sub
  paypalSubscriptionId: string;
  plan: 'pro_monthly' | 'pro_yearly';
  status?: 'active' | 'cancelled' | 'expired';
  currentPeriodEnd?: string | null;
}): Promise<DbSubscription> {
  const sql = getSql();
  const status = input.status ?? 'active';
  const periodEnd = input.currentPeriodEnd ?? null;

  // 先确保 user 存在（upsert 已在外层 register 做过，这里防御性查找）
  const user = await findUserBySub(input.sub);
  if (!user) {
    throw new Error(`User not found for sub: ${input.sub}`);
  }

  const rows = await sql`
    INSERT INTO subscriptions (user_id, paypal_subscription_id, plan, status, current_period_end)
    VALUES (${user.id}, ${input.paypalSubscriptionId}, ${input.plan}, ${status}, ${periodEnd})
    ON CONFLICT (paypal_subscription_id)
    DO UPDATE SET
      plan = EXCLUDED.plan,
      status = EXCLUDED.status,
      current_period_end = EXCLUDED.current_period_end
    RETURNING *
  `;
  return rows[0] as DbSubscription;
}

// webhook 更新订阅状态（CANCELLED / EXPIRED）
export async function updateSubscriptionStatus(
  paypalSubscriptionId: string,
  status: 'active' | 'cancelled' | 'expired'
): Promise<void> {
  const sql = getSql();
  await sql`
    UPDATE subscriptions SET status = ${status} WHERE paypal_subscription_id = ${paypalSubscriptionId}
  `;
}

// 健康检查（部署后验证连接）
export async function pingDb(): Promise<boolean> {
  try {
    const sql = getSql();
    await sql`SELECT 1`;
    return true;
  } catch {
    return false;
  }
}
