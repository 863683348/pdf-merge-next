'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useT } from '@/i18n/provider';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/cn';
import { useAppStore } from '@/store/useAppStore';

const CLIENT_ID =
  process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID ?? '';

declare global {
  interface Window {
    paypal?: {
      Buttons: (config: {
        createOrder: (data: unknown, actions: {
          order: { create: (config: { purchase_units: Array<{ amount: { value: string }; description: string }> }) => Promise<string> };
        }) => Promise<string> | string;
        onApprove: (data: unknown, actions: {
          order: { capture: () => Promise<Record<string, unknown>> };
        }) => Promise<void>;
        onError?: (err: unknown) => void;
        onCancel?: () => void;
        style?: {
          layout?: 'vertical' | 'horizontal';
          color?: 'gold' | 'blue' | 'silver' | 'white' | 'black';
          shape?: 'rect' | 'pill';
          label?: 'paypal' | 'checkout' | 'buynow' | 'pay';
          tagline?: boolean;
        };
      }) => {
        render: (container: string | HTMLElement) => Promise<void>;
      };
    };
  }
}

type Billing = 'monthly' | 'yearly';

const PLAN_AMOUNTS: Record<Billing, string> = {
  monthly: '7.00',
  yearly: '49.00',
};

export default function PricingPage() {
  const t = useT();
  const router = useRouter();
  const [billing, setBilling] = useState<Billing>('monthly');
  const gaUser = useAppStore((s) => s.gaUser);
  const subscription = useAppStore((s) => s.subscription);
  const setSubscription = useAppStore((s) => s.setSubscription);
  const addToast = useAppStore((s) => s.addToast);
  const paypalRef = useRef<HTMLDivElement>(null);
  const [sdkReady, setSdkReady] = useState(false);
  const rendered = useRef(false);

  const isYearly = billing === 'yearly';

  const proPrice = isYearly ? t('pricing.yearly.price') : t('pricing.pro.price');
  const proPeriod = isYearly ? t('pricing.yearly.period') : t('pricing.pro.period');

  // 加载 PayPal SDK
  useEffect(() => {
    if (!CLIENT_ID || rendered.current) return;
    if (document.querySelector('script[src*="paypal.com/sdk"]')) {
      setSdkReady(true);
      return;
    }
    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${CLIENT_ID}&currency=USD&intent=capture`;
    script.async = true;
    script.onload = () => setSdkReady(true);
    document.body.appendChild(script);
    return () => {
      // 不清理 script（复用）
    };
  }, []);

  // 渲染 PayPal 按钮（sdk 就绪 + 已登录 + 未订阅 且 容器存在）
  const renderButtons = useCallback(() => {
    if (!sdkReady || !gaUser || subscription || !paypalRef.current) return;
    if (rendered.current) return;

    try {
      const amount = PLAN_AMOUNTS[billing];
      window.paypal?.Buttons({
        createOrder: (_data: unknown, actions: { order: { create: (config: { purchase_units: Array<{ amount: { value: string }; description: string }> }) => Promise<string> } }) => {
          return actions.order.create({
            purchase_units: [{
              amount: { value: amount },
              description: isYearly ? 'MergeLocal Pro Yearly' : 'MergeLocal Pro Monthly',
            }],
          });
        },
        onApprove: (_data: unknown, actions: { order: { capture: () => Promise<Record<string, unknown>> } }) => {
          return actions.order.capture().then(() => {
            setSubscription({
              plan: isYearly ? 'pro_yearly' : 'pro_monthly',
              since: new Date().toISOString(),
            });
            addToast('success', t('pricing.subSuccess'));
          });
        },
        onError: () => {
          addToast('error', t('pricing.subError'));
        },
        onCancel: () => {
          /* 用户取消，静默 */
        },
        style: { layout: 'vertical', color: 'gold', shape: 'rect', label: 'paypal' },
      }).render(paypalRef.current);
      rendered.current = true;
    } catch {
      /* noop */
    }
  }, [sdkReady, gaUser, subscription, isYearly, billing, setSubscription, addToast, t]);

  useEffect(() => {
    rendered.current = false;
    if (paypalRef.current) paypalRef.current.innerHTML = '';
    renderButtons();
  }, [renderButtons]);

  // 切换计费时重新渲染
  useEffect(() => {
    rendered.current = false;
  }, [billing]);

  const plans = [
    {
      nameKey: 'pricing.free.name',
      price: t('pricing.free.price'),
      period: '',
      features: [1, 2, 3, 4, 5].map((i) => t(`pricing.free.feature${i}`)),
      highlight: false,
      action: () => router.push('/'),
    },
    {
      nameKey: 'pricing.pro.name',
      price: proPrice,
      period: proPeriod,
      features: [1, 2, 3, 4, 5, 6].map((i) => t(`pricing.pro.feature${i}`)),
      highlight: true,
    },
  ];

  return (
    <div className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-16">
      {/* 标题 */}
      <div className="text-center">
        {subscription && (
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-ok-subtle px-3 py-1 text-sm font-semibold text-ok">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {t('pricing.proBadge')}
          </div>
        )}
        <h1 className="text-h1 font-bold text-fg">{t('pricing.title')}</h1>
        <p className="mt-2 text-body text-fg-secondary">{t('pricing.subtitle')}</p>
      </div>

      {/* 计费切换 */}
      <div className="mt-8 flex justify-center">
        <div className="inline-flex rounded-md border border-line p-0.5">
          <button
            type="button"
            onClick={() => setBilling('monthly')}
            className={cn(
              'rounded px-4 py-1.5 text-sm font-medium transition-colors duration-fast',
              billing === 'monthly'
                ? 'bg-brand-subtle text-brand'
                : 'text-fg-secondary hover:text-fg'
            )}
          >
            {t('pricing.free.name') === '免费版' ? '月付' : 'Monthly'}
          </button>
          <button
            type="button"
            onClick={() => setBilling('yearly')}
            className={cn(
              'rounded px-4 py-1.5 text-sm font-medium transition-colors duration-fast',
              billing === 'yearly'
                ? 'bg-brand-subtle text-brand'
                : 'text-fg-secondary hover:text-fg'
            )}
          >
            {t('pricing.free.name') === '免费版' ? '年付' : 'Yearly'}
            <span className="ml-1.5 rounded-full bg-ok-subtle px-1.5 py-0.5 text-caption font-semibold text-ok">
              -32%
            </span>
          </button>
        </div>
      </div>

      {/* 方案卡片 */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {/* 免费版 */}
        <div className="flex flex-col rounded-xl border border-line bg-surface p-6 shadow-sm">
          <h2 className="text-title font-semibold text-fg">{t('pricing.free.name')}</h2>
          <p className="mt-1 text-sm text-fg-secondary">{t('pricing.free.desc')}</p>
          <div className="mt-4 flex items-baseline gap-1">
            <span className="text-display font-bold text-fg">{t('pricing.free.price')}</span>
          </div>
          <ul className="mt-6 flex-1 space-y-3">
            {plans[0].features.map((feat) => (
              <li key={feat} className="flex items-start gap-2 text-sm text-fg">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-ok" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
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

        {/* Pro 版 */}
        <div className="flex flex-col rounded-xl border border-brand bg-surface p-6 shadow-glow">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-title font-semibold text-fg">{t('pricing.pro.name')}</h2>
              <p className="mt-1 text-sm text-fg-secondary">{t('pricing.pro.desc')}</p>
            </div>
            <span className="rounded-full bg-brand-subtle px-2.5 py-0.5 text-caption font-semibold text-brand">
              {t('pricing.yearly.ctaSub')}
            </span>
          </div>
          <div className="mt-4 flex items-baseline gap-1">
            <span className="text-display font-bold text-fg">{proPrice}</span>
            <span className="text-sm text-fg-secondary">{proPeriod}</span>
          </div>
          <ul className="mt-6 flex-1 space-y-3">
            {plans[1].features.map((feat) => (
              <li key={feat} className="flex items-start gap-2 text-sm text-fg">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-ok" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {feat}
              </li>
            ))}
          </ul>

          {/* 已订阅 */}
          {subscription ? (
            <div className="mt-6 w-full rounded-lg bg-ok-subtle px-4 py-3 text-center text-sm font-semibold text-ok">
              {t('pricing.proBadge')} · {t('pricing.free.cta')}
            </div>
          ) : !gaUser ? (
            <button
              type="button"
              onClick={() => router.push('/')}
              className="mt-6 w-full rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-on-primary transition-colors duration-fast hover:bg-brand-hover"
            >
              {t('pricing.loggedOut')}
            </button>
          ) : (
            <>
              <div ref={paypalRef} className="mt-4 min-h-[40px]" />
              {!sdkReady && (
                <div className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-line bg-surface px-4 py-3 text-sm text-fg-muted">
                  <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Loading PayPal...
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* 保障 + 备注 */}
      <div className="mt-8 text-center">
        <p className="text-sm font-medium text-ok">{t('pricing.guarantee')}</p>
        <p className="mt-2 text-caption text-fg-muted">{t('pricing.note')}</p>
      </div>
    </div>
  );
}
