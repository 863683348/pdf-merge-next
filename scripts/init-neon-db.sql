-- MergeLocal Neon 数据库初始化脚本
-- 用法：在 Neon SQL Editor 中粘贴执行，或用 psql 连接后运行
--   psql "postgresql://user:pass@ep-xxx.neon.tech/dbname" -f scripts/init-neon-db.sql

-- 启用 pgcrypto（gen_random_uuid 需要；Neon 默认已启用，这里幂等声明）
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- 用户表（Google 账号）
CREATE TABLE IF NOT EXISTS users (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  google_sub  TEXT UNIQUE NOT NULL,        -- Google user ID（唯一标识）
  email       TEXT NOT NULL,
  name        TEXT NOT NULL,
  picture     TEXT,
  created_at  TIMESTAMPTZ DEFAULT now(),
  updated_at  TIMESTAMPTZ DEFAULT now()
);

-- 订阅表（PayPal 订阅）
CREATE TABLE IF NOT EXISTS subscriptions (
  id                      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id                 UUID REFERENCES users(id) ON DELETE CASCADE,
  paypal_subscription_id  TEXT UNIQUE NOT NULL,     -- PayPal subscription ID (I-XXXX)
  plan                    TEXT NOT NULL,            -- 'pro_monthly' | 'pro_yearly'
  status                  TEXT NOT NULL,            -- 'active' | 'cancelled' | 'expired'
  created_at              TIMESTAMPTZ DEFAULT now(),
  current_period_end      TIMESTAMPTZ               -- PayPal 下次扣款时间
);

-- 索引：按 google_sub 查用户（登录高频）
CREATE INDEX IF NOT EXISTS idx_users_google_sub ON users (google_sub);

-- 索引：按 user_id 查订阅（账户页/登录恢复高频）
CREATE INDEX IF NOT EXISTS idx_subscriptions_user_id ON subscriptions (user_id);

-- 索引：按 status 过滤（管理后台/降级扫描用）
CREATE INDEX IF NOT EXISTS idx_subscriptions_status ON subscriptions (status);

-- 更新时间触发器（保持 updated_at 自动刷新）
CREATE OR REPLACE FUNCTION touch_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_users_touch ON users;
CREATE TRIGGER trg_users_touch
  BEFORE UPDATE ON users
  FOR EACH ROW EXECUTE FUNCTION touch_updated_at();

-- 验证
SELECT 'users' AS table_name, count(*) AS rows FROM users
UNION ALL
SELECT 'subscriptions', count(*) FROM subscriptions;
