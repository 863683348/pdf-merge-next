'use client';

import { useState } from 'react';
import { useT } from '@/i18n/provider';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/cn';

type Billing = 'monthly' | 'yearly';

export default function PricingPage() {
  const t = useT();
  const router = useRouter();
  const [billing, setBilling] = useState<Billing>('monthly');

  const isYearly = billing === 'yearly';

  const ctaKey = isYearly ? 'pricing.yearly.cta' : 'pricing.pro.cta';
  const ctaSubKey = isYearly ? 'pricing.yearly.ctaSub' : 'pricing.pro.ctaSub';
  const proPrice = isYearly ? t('pricing.yearly.price') : t('pricing.pro.price');
  const proPeriod = isYearly ? t('pricing.yearly.period') : t('pricing.pro.period');

  const plans = [
    {
      nameKey: 'pricing.free.name',
      price: t('pricing.free.price'),
      period: '',
      descKey: 'pricing.free.desc',
      features: [1, 2, 3, 4, 5].map((i) => t(`pricing.free.feature${i}`)),
      ctaKey: 'pricing.free.cta',
      highlight: false,
      action: () => router.push('/'),
    },
    {
      nameKey: 'pricing.pro.name',
      price: proPrice,
      period: proPeriod,
      descKey: 'pricing.pro.desc',
      features: [1, 2, 3, 4, 5, 6].map((i) => t(`pricing.pro.feature${i}`)),
      ctaKey,
      ctaSubKey,
      highlight: true,
      action: () => {
        // PayPal 支付：在下一轮对接
        const priceId = isYearly ? 'pro_yearly' : 'pro_monthly';
        alert(
          `PayPal payment for ${priceId} (${proPrice}${proPeriod}) — integration in progress.`
        );
      },
    },
  ];

  return (
    <div className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-16">
      {/* 标题 */}
      <div className="text-center">
        <h1 className="text-h1 font-bold text-fg">{t('pricing.title')}</h1>
        <p className="mt-2 text-body text-fg-secondary">
          {t('pricing.subtitle')}
        </p>
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
            Monthly
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
            Yearly
            <span className="ml-1.5 rounded-full bg-ok-subtle px-1.5 py-0.5 text-caption font-semibold text-ok">
              -32%
            </span>
          </button>
        </div>
      </div>

      {/* 方案卡片 */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {plans.map((plan) => (
          <div
            key={plan.nameKey}
            className={cn(
              'flex flex-col rounded-xl border p-6 shadow-sm transition-shadow duration-normal',
              plan.highlight
                ? 'border-brand bg-surface shadow-glow'
                : 'border-line bg-surface'
            )}
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-title font-semibold text-fg">
                  {t(plan.nameKey)}
                </h2>
                <p className="mt-1 text-sm text-fg-secondary">
                  {plan.descKey}
                </p>
              </div>
              {plan.highlight && (
                <span className="rounded-full bg-brand-subtle px-2.5 py-0.5 text-caption font-semibold text-brand">
                  {t('pricing.yearly.ctaSub')}
                </span>
              )}
            </div>

            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-display font-bold text-fg">
                {plan.price}
              </span>
              {plan.period && (
                <span className="text-sm text-fg-secondary">
                  {plan.period}
                </span>
              )}
            </div>

            <ul className="mt-6 flex-1 space-y-3">
              {plan.features.map((feat) => (
                <li key={feat} className="flex items-start gap-2 text-sm text-fg">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-ok"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {feat}
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={plan.action}
              className={cn(
                'mt-6 w-full rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors duration-fast',
                plan.highlight
                  ? 'bg-brand text-on-primary hover:bg-brand-hover active:bg-brand-active'
                  : 'border border-line bg-surface text-fg hover:bg-subtle'
              )}
            >
              {t(plan.ctaKey)}
              {(plan as typeof plans[0] & { ctaSubKey?: string }).ctaSubKey && (
                <span className="ml-1 font-normal opacity-80">
                  · {t((plan as typeof plans[0] & { ctaSubKey: string }).ctaSubKey)}
                </span>
              )}
            </button>
          </div>
        ))}
      </div>

      {/* 保障 + 备注 */}
      <div className="mt-8 text-center">
        <p className="text-sm font-medium text-ok">
          {t('pricing.guarantee')}
        </p>
        <p className="mt-2 text-caption text-fg-muted">
          {t('pricing.note')}
        </p>
      </div>
    </div>
  );
}
