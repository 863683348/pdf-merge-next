'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  LogOut, Check, User, CreditCard, Sparkles, Calendar, Crown,
  FileText, HardDrive, Files, RotateCw, Bookmark, Headphones,
  Shield, MonitorSmartphone, ArrowRight, ExternalLink,
} from 'lucide-react';
import { useAppStore } from '@/store/useAppStore';
import { useT } from '@/i18n/provider';
import { GoogleLoginButton } from '@/components/molecules/GoogleLoginButton';

const PAYPAL_ENV = process.env.NEXT_PUBLIC_PAYPAL_ENV ?? 'live';
const PAYPAL_MANAGE_URL = PAYPAL_ENV === 'sandbox'
  ? 'https://www.sandbox.paypal.com/myaccount/subscriptions'
  : 'https://www.paypal.com/myaccount/subscriptions';

export default function AccountPage() {
  const t = useT();
  const router = useRouter();
  const gaUser = useAppStore((s) => s.gaUser);
  const subscription = useAppStore((s) => s.subscription);
  const logout = useAppStore((s) => s.logout);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => { setHydrated(true); }, []);

  const isPro = !!subscription;
  const isEn = t('account.locale') === 'en';
  const locale = isEn ? 'en-US' : 'zh-CN';

  const planLabel = subscription?.plan === 'pro_yearly'
    ? t('account.planYearly')
    : subscription?.plan === 'pro_monthly'
    ? t('account.planMonthly')
    : t('account.planFree');

  const planPrice = subscription?.plan === 'pro_yearly'
    ? t('account.planPriceYearly')
    : subscription?.plan === 'pro_monthly'
    ? t('account.planPriceMonthly')
    : '';

  const sinceText = subscription?.since
    ? new Date(subscription.since).toLocaleDateString(locale,
        { year: 'numeric', month: 'long', day: 'numeric' })
    : '';

  const nextBillingText = subscription?.since
    ? calcNextBilling(subscription.since, subscription.plan, locale)
    : '';

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  if (!hydrated) {
    return <div className="min-h-screen bg-canvas" />;
  }

  if (!gaUser) {
    return (
      <div className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-16">
        <h1 className="text-h1 font-bold text-fg">{t('account.title')}</h1>
        <p className="mt-2 text-body text-fg-secondary">{t('account.subtitle')}</p>
        <section className="mt-8 rounded-xl border border-line bg-surface p-8 shadow-sm">
          <div className="flex flex-col items-center gap-4 text-center">
            <User className="h-12 w-12 text-fg-muted" aria-hidden />
            <p className="text-body text-fg-secondary">{t('account.notLoggedIn')}</p>
            <GoogleLoginButton />
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-16">
      <h1 className="text-h1 font-bold text-fg">{t('account.title')}</h1>
      <p className="mt-2 text-body text-fg-secondary">{t('account.subtitle')}</p>

      <div className="mt-8 space-y-5">

        {/* 1. Profile Header */}
        <section className="rounded-xl border border-line bg-surface p-5 shadow-sm sm:p-6">
          <div className="flex items-center gap-4">
            <img
              src={gaUser.picture}
              alt={gaUser.name}
              className="h-14 w-14 rounded-full ring-1 ring-line sm:h-16 sm:w-16"
              referrerPolicy="no-referrer"
            />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-title font-semibold text-fg truncate">{gaUser.name}</span>
                <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-caption font-medium ${
                  isPro ? 'bg-amber-50 text-amber-700 ring-1 ring-amber-200' : 'bg-subtle text-fg-muted'
                }`}>
                  {isPro ? <Crown size={11} aria-hidden /> : <User size={11} aria-hidden />}
                  {isPro ? t('account.proMember') : t('account.freeUser')}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-subtle px-2 py-0.5 text-caption text-fg-muted">
                  Google
                </span>
              </div>
              <div className="mt-1 text-sm text-fg-secondary truncate">{gaUser.email}</div>
              {isPro && sinceText && (
                <div className="mt-1 flex items-center gap-1 text-caption text-fg-muted">
                  <Calendar size={12} aria-hidden />
                  {t('account.since')} {sinceText}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 2. Subscription Details (Pro only) */}
        {isPro && (
          <section className="rounded-xl border border-line bg-surface p-5 shadow-sm sm:p-6">
            <SectionLabel icon={<CreditCard size={14} />} text={t('account.sectionSubscription')} />
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div>
                <div className="text-caption text-fg-muted">{t('account.sectionPlan')}</div>
                <div className="mt-1 text-title font-semibold text-fg">{planLabel}</div>
                {planPrice && <div className="text-sm text-fg-secondary">{planPrice}</div>}
              </div>
              <div>
                <div className="text-caption text-fg-muted">{t('account.status')}</div>
                <div className="mt-1">
                  <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-0.5 text-sm font-medium text-green-700 ring-1 ring-green-200">
                    <Check size={12} aria-hidden />
                    {t('account.statusActive')}
                  </span>
                </div>
                {nextBillingText && (
                  <div className="mt-1.5 text-sm text-fg-secondary">{nextBillingText}</div>
                )}
              </div>
              <div className="flex flex-col gap-2 sm:items-end">
                <a
                  href={PAYPAL_MANAGE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 items-center justify-center gap-1.5 rounded-md border border-line bg-surface px-3 text-sm font-medium text-fg transition-colors duration-fast hover:bg-subtle"
                >
                  {t('account.managePaypal')}
                  <ExternalLink size={13} aria-hidden />
                </a>
              </div>
            </div>
            <p className="mt-3 text-caption text-fg-muted">
              {t('account.cancelHint')}
            </p>
          </section>
        )}

        {/* 3. Upgrade CTA (Free users only) */}
        {!isPro && (
          <section className="rounded-xl border border-brand bg-brand/5 p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-3">
              <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden />
              <div className="flex-1">
                <div className="text-title font-semibold text-fg">{t('account.upgradeCta')}</div>
                <p className="mt-1 text-sm text-fg-secondary">{t('account.upgradeDesc')}</p>
                <Link
                  href="/pricing"
                  className="mt-3 inline-flex h-9 items-center gap-1.5 rounded-md bg-brand px-4 text-sm font-semibold text-on-primary transition-colors duration-fast hover:bg-brand-hover"
                >
                  {t('account.upgrade')}
                  <ArrowRight size={15} aria-hidden />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* 4. Usage Limits Comparison */}
        <section className="rounded-xl border border-line bg-surface p-5 shadow-sm sm:p-6">
          <SectionLabel icon={<HardDrive size={14} />} text={t('account.sectionLimits')} />
          <div className="mt-4 overflow-hidden rounded-lg border border-line">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-canvas">
                  <th className="px-3 py-2 text-left text-caption font-medium text-fg-muted" />
                  <th className="px-3 py-2 text-center text-caption font-semibold text-brand">
                    {t('account.yourPlan')}
                  </th>
                  <th className="px-3 py-2 text-center text-caption font-medium text-fg-muted">
                    {t('account.freePlan')}
                  </th>
                </tr>
              </thead>
              <tbody>
                <LimitRow
                  icon={<Files size={13} />}
                  label={t('account.metricFiles')}
                  proValue={t('account.limitFilesPro')}
                  freeValue={t('account.limitFilesFree')}
                />
                <LimitRow
                  icon={<FileText size={13} />}
                  label={t('account.metricSingle')}
                  proValue={t('account.limitSinglePro')}
                  freeValue={t('account.limitSingleFree')}
                />
                <LimitRow
                  icon={<HardDrive size={13} />}
                  label={t('account.metricTotal')}
                  proValue={t('account.limitTotalPro')}
                  freeValue={t('account.limitTotalFree')}
                />
              </tbody>
            </table>
          </div>
        </section>

        {/* 5. Features Grid */}
        <section className="rounded-xl border border-line bg-surface p-5 shadow-sm sm:p-6">
          <SectionLabel icon={<Sparkles size={14} />} text={t('account.sectionFeatures')} />
          <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            <FeatureChip icon={<Files size={14} />} label={t('account.featUnlimited')} included />
            <FeatureChip icon={<FileText size={14} />} label={t('account.featLargeFile')} included />
            <FeatureChip icon={<HardDrive size={14} />} label={t('account.featLargeTotal')} included />
            <FeatureChip icon={<RotateCw size={14} />} label={t('account.featRotate')} included={false} />
            <FeatureChip icon={<Bookmark size={14} />} label={t('account.featBookmarks')} included={false} />
            <FeatureChip icon={<Headphones size={14} />} label={t('account.featPriority')} included />
            <FeatureChip icon={<Shield size={14} />} label={t('account.featNoWatermark')} included />
            <FeatureChip icon={<MonitorSmartphone size={14} />} label={t('account.featOffline')} included />
          </div>
        </section>

        {/* 6. Quick Actions + Account */}
        <div className="grid gap-4 sm:grid-cols-2">
          <section className="rounded-xl border border-line bg-surface p-5 shadow-sm sm:p-6">
            <SectionLabel icon={<ArrowRight size={14} />} text={t('account.sectionActions')} />
            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                href="/"
                className="inline-flex h-9 items-center gap-1.5 rounded-md bg-brand px-4 text-sm font-semibold text-on-primary transition-colors duration-fast hover:bg-brand-hover"
              >
                {t('account.actionMerge')}
                <ArrowRight size={14} aria-hidden />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex h-9 items-center gap-1.5 rounded-md border border-line bg-surface px-3 text-sm font-medium text-fg transition-colors duration-fast hover:bg-subtle"
              >
                {t('account.actionPricing')}
              </Link>
              <Link
                href="/blog"
                className="inline-flex h-9 items-center gap-1.5 rounded-md border border-line bg-surface px-3 text-sm font-medium text-fg transition-colors duration-fast hover:bg-subtle"
              >
                {t('account.actionBlog')}
              </Link>
            </div>
          </section>

          <section className="rounded-xl border border-line bg-surface p-5 shadow-sm sm:p-6">
            <SectionLabel icon={<User size={14} />} text={t('account.sectionAccount')} />
            <div className="mt-4">
              <button
                type="button"
                onClick={handleLogout}
                className="inline-flex h-9 items-center gap-1.5 rounded-md border border-line bg-surface px-4 text-sm font-medium text-red-600 transition-colors duration-fast hover:bg-red-50"
              >
                <LogOut size={15} aria-hidden />
                {t('account.signOut')}
              </button>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}

function calcNextBilling(since: string, plan: string, locale: string): string {
  const d = new Date(since);
  if (plan === 'pro_yearly') d.setFullYear(d.getFullYear() + 1);
  else d.setMonth(d.getMonth() + 1);
  return d.toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' });
}

function SectionLabel({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 text-caption font-semibold uppercase tracking-wide text-fg-muted">
      {icon}
      {text}
    </div>
  );
}

function LimitRow({
  icon, label, proValue, freeValue,
}: { icon: React.ReactNode; label: string; proValue: string; freeValue: string }) {
  return (
    <tr className="border-t border-line">
      <td className="px-3 py-2.5">
        <span className="flex items-center gap-1.5 text-sm text-fg">
          {icon}
          {label}
        </span>
      </td>
      <td className="px-3 py-2.5 text-center text-sm font-semibold text-fg">{proValue}</td>
      <td className="px-3 py-2.5 text-center text-sm text-fg-muted">{freeValue}</td>
    </tr>
  );
}

function FeatureChip({
  icon, label, included,
}: { icon: React.ReactNode; label: string; included: boolean }) {
  const t = useT();
  return (
    <div className={`flex items-center gap-2 rounded-lg px-3 py-2.5 ring-1 ${
      included
        ? 'bg-green-50 ring-green-200'
        : 'bg-amber-50 ring-amber-200'
    }`}>
      <span className={included ? 'text-green-600' : 'text-amber-600'}>{icon}</span>
      <div className="min-w-0 flex-1">
        <div className="truncate text-sm font-medium text-fg">{label}</div>
        <div className={`text-caption ${included ? 'text-green-600' : 'text-amber-600'}`}>
          {included ? t('account.included') : t('account.comingSoon')}
        </div>
      </div>
    </div>
  );
}
