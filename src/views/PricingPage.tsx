'use client';

import { useState, useEffect, useRef } from 'react';
import { useT } from '@/i18n/provider';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/cn';
import { useAppStore } from '@/store/useAppStore';
import { gtagEvent } from '@/lib/analytics';

const CLIENT_ID =
  process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID ?? '';

// 环境：sandbox 用 www.sandbox.paypal.com，live 用 www.paypal.com
// 必须与 Client ID 环境一致，否则按钮加载失败
const PAYPAL_ENV = process.env.NEXT_PUBLIC_PAYPAL_ENV ?? 'live';
const PAYPAL_SDK_BASE =
  PAYPAL_ENV === 'sandbox'
    ? 'https://www.sandbox.paypal.com'
    : 'https://www.paypal.com';
const IS_SANDBOX = PAYPAL_ENV === 'sandbox';

declare global {
  interface Window {
    paypal?: {
      Buttons: (config: {
        createSubscription?: (
          data: unknown,
          actions: {
            subscription: {
              create: (config: {
                plan_id: string;
                application_context?: Record<string, unknown>;
              }) => Promise<string>;
            };
          }
        ) => Promise<string> | string;
        onApprove?: (
          data: { subscriptionID: string },
          actions: unknown
        ) => Promise<void> | void;
        onError?: (err: unknown) => void;
        onCancel?: () => void;
        style?: {
          layout?: 'vertical' | 'horizontal';
          color?: 'gold' | 'blue' | 'silver' | 'white' | 'black';
          shape?: 'rect' | 'pill';
          label?: 'paypal' | 'checkout' | 'buynow' | 'pay' | 'subscribe';
          tagline?: boolean;
        };
      }) => {
        render: (container: string | HTMLElement) => Promise<void>;
      };
    };
  }
}

type Billing = 'monthly' | 'yearly';

// 订阅计划 ID（Billing Plan）。需提前在 PayPal 后台或用 REST API 创建，
// 否则 PayPal 订阅按钮无法渲染。沙箱 plan 必须绑定沙箱 Client ID。
const PLAN_IDS: Record<Billing, string> = {
  monthly: process.env.NEXT_PUBLIC_PAYPAL_PLAN_MONTHLY ?? '',
  yearly: process.env.NEXT_PUBLIC_PAYPAL_PLAN_YEARLY ?? '',
};

// 共享的 PayPal SDK 加载器（多卡片复用，避免重复注入 script）
let sdkPromise: Promise<void> | null = null;
function ensurePaypalSdk(): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve();
  if (window.paypal) return Promise.resolve();
  if (sdkPromise) return sdkPromise;
  sdkPromise = new Promise<void>((resolve) => {
    const existing = document.querySelector('script[src*="paypal.com/sdk"]');
    if (existing) {
      const timer = setInterval(() => {
        if (window.paypal) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
      return;
    }
    const script = document.createElement('script');
    // 订阅模式：必须加 vault=true&intent=subscription
    script.src = `${PAYPAL_SDK_BASE}/sdk/js?client-id=${CLIENT_ID}&currency=USD&vault=true&intent=subscription`;
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.onload = () => resolve();
    script.onerror = () => resolve();
    document.body.appendChild(script);
  });
  return sdkPromise;
}

function CheckIcon() {
  return (
    <svg className="mt-0.5 h-4 w-4 shrink-0 text-ok" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function FreeCard() {
  const t = useT();
  const router = useRouter();
  const features = [1, 2, 3, 4, 5].map((i) => t(`pricing.free.feature${i}`));

  return (
    <div className="flex flex-col rounded-xl border border-line bg-surface p-6 shadow-sm">
      <h2 className="text-title font-semibold text-fg">{t('pricing.free.name')}</h2>
      <p className="mt-1 text-sm text-fg-secondary">{t('pricing.free.desc')}</p>
      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-display font-bold text-fg">{t('pricing.free.price')}</span>
      </div>
      <ul className="mt-6 flex-1 space-y-3">
        {features.map((feat) => (
          <li key={feat} className="flex items-start gap-2 text-sm text-fg">
            <CheckIcon />
            {feat}
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => router.push('/')}
        className="mt-6 w-full rounded-lg border border-line bg-surface px-4 py-2.5 text-sm font-semibold text-fg transition-colors duration-fast hover:bg-subtle"
      >
        {t('pricing.free.cta')}
      </button>
    </div>
  );
}

function ProCard({ billing }: { billing: Billing }) {
  const t = useT();
  const router = useRouter();
  const gaUser = useAppStore((s) => s.gaUser);
  const subscription = useAppStore((s) => s.subscription);
  const setSubscription = useAppStore((s) => s.setSubscription);
  const addToast = useAppStore((s) => s.addToast);
  const paypalRef = useRef<HTMLDivElement>(null);
  const [sdkReady, setSdkReady] = useState(false);
  const rendered = useRef(false);

  const isYearly = billing === 'yearly';
  const recommended = isYearly;
  const subscribed = !!subscription;

  const price = isYearly ? t('pricing.yearly.price') : t('pricing.pro.price');
  const period = isYearly ? t('pricing.yearly.period') : t('pricing.pro.period');
  const desc = isYearly ? t('pricing.yearly.desc') : t('pricing.monthly.desc');
  const name = isYearly ? t('pricing.yearly.name') : t('pricing.pro.name');
  const features = [1, 2, 3, 4, 5, 6].map((i) => t(`pricing.pro.feature${i}`));
  const planId = PLAN_IDS[billing];

  // 加载 PayPal SDK（共享单例）
  useEffect(() => {
    let alive = true;
    ensurePaypalSdk().then(() => {
      if (alive) setSdkReady(true);
    });
    return () => {
      alive = false;
    };
  }, []);

  // 渲染该卡片对应的 PayPal 订阅按钮
  useEffect(() => {
    if (!sdkReady || !gaUser || subscribed || !paypalRef.current) return;
    if (rendered.current) return;
    if (!planId) return; // 未配置 plan id，静默不渲染

    try {
      window.paypal
        ?.Buttons({
          createSubscription: (_data, actions) => {
            gtagEvent('begin_checkout', {
              currency: 'USD',
              value: isYearly ? 49 : 7,
              items: [
                {
                  item_id: isYearly ? 'pro_yearly' : 'pro_monthly',
                  item_name: isYearly ? 'Pro Yearly' : 'Pro Monthly',
                  price: isYearly ? 49 : 7,
                  quantity: 1,
                },
              ],
            });
            return actions.subscription.create({ plan_id: planId });
          },
          onApprove: (data, _actions) => {
            gtagEvent('purchase', {
              currency: 'USD',
              value: isYearly ? 49 : 7,
              transaction_id: data.subscriptionID,
              items: [
                {
                  item_id: isYearly ? 'pro_yearly' : 'pro_monthly',
                  item_name: isYearly ? 'Pro Yearly' : 'Pro Monthly',
                  price: isYearly ? 49 : 7,
                  quantity: 1,
                },
              ],
            });
            setSubscription({
              plan: isYearly ? 'pro_yearly' : 'pro_monthly',
              since: new Date().toISOString(),
            });
            addToast('success', t('pricing.subSuccess'));
          },
          onError: () => {
            addToast('error', t('pricing.subError'));
          },
          onCancel: () => {
            /* 用户取消，静默 */
          },
          style: { layout: 'vertical', color: 'gold', shape: 'rect', label: 'subscribe' },
        })
        .render(paypalRef.current);
      rendered.current = true;
    } catch {
      /* noop */
    }
  }, [sdkReady, gaUser, subscribed, isYearly, billing, planId, setSubscription, addToast, t]);

  return (
    <div
      className={cn(
        'relative flex flex-col rounded-xl border bg-surface p-6',
        recommended ? 'border-brand shadow-glow' : 'border-line shadow-sm'
      )}
    >
      {recommended && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3 py-1 text-caption font-semibold text-on-primary">
          {t('pricing.recommended')}
        </span>
      )}
      <div>
        <h2 className="text-title font-semibold text-fg">{name}</h2>
        <p className="mt-1 text-sm text-fg-secondary">{desc}</p>
      </div>
      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-display font-bold text-fg">{price}</span>
        <span className="text-sm text-fg-secondary">{period}</span>
      </div>
      <ul className="mt-6 flex-1 space-y-3">
        {features.map((feat) => (
          <li key={feat} className="flex items-start gap-2 text-sm text-fg">
            <CheckIcon />
            {feat}
          </li>
        ))}
      </ul>

      <div className="mt-6">
        {subscribed ? (
          <div className="w-full rounded-lg bg-ok-subtle px-4 py-3 text-center text-sm font-semibold text-ok">
            {t('pricing.proBadge')} · {t('pricing.free.cta')}
          </div>
        ) : !gaUser ? (
          <button
            type="button"
            onClick={() => router.push('/')}
            className="w-full rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-on-primary transition-colors duration-fast hover:bg-brand-hover"
          >
            {t('pricing.loggedOut')}
          </button>
        ) : !planId ? (
          <div className="w-full rounded-lg border border-line bg-surface px-4 py-2.5 text-center text-sm text-fg-muted">
            {t('pricing.planConfig')}
          </div>
        ) : (
          <>
            <div ref={paypalRef} className="min-h-[40px]" />
            {!sdkReady && (
              <div className="flex items-center justify-center gap-2 rounded-lg border border-line bg-surface px-4 py-3 text-sm text-fg-muted">
                <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                {t('pricing.loadingPaypal')}
              </div>
            )}
            {IS_SANDBOX && (
              <p className="mt-2 text-center text-caption text-fg-muted">
                {t('pricing.sandboxNote')}
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default function PricingPage() {
  const t = useT();
  const subscription = useAppStore((s) => s.subscription);

  return (
    <div className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-16">
      {/* 标题 */}
      <div className="text-center">
        {subscription && (
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-ok-subtle px-3 py-1 text-sm font-semibold text-ok">
            <CheckIcon />
            {t('pricing.proBadge')}
          </div>
        )}
        <h1 className="text-h1 font-bold text-fg">{t('pricing.title')}</h1>
        <p className="mt-2 text-body text-fg-secondary">{t('pricing.subtitle')}</p>
      </div>

      {/* 三张卡片：免费版 | Pro 年付(推荐) | Pro 月付 */}
      <div className="mt-10 grid items-stretch gap-6 sm:grid-cols-3">
        <FreeCard />
        <ProCard billing="yearly" />
        <ProCard billing="monthly" />
      </div>

      {/* 备注 */}
      <div className="mt-8 text-center">
        <p className="text-caption text-fg-muted">{t('pricing.note')}</p>
      </div>
    </div>
  );
}
