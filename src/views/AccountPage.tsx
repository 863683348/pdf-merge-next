'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { LogOut, Check, User, CreditCard, FileText, Sparkles, Calendar, Crown } from 'lucide-react';
import { useAppStore } from '@/store/useAppStore';
import { useT } from '@/i18n/provider';
import { GoogleLoginButton } from '@/components/molecules/GoogleLoginButton';

export default function AccountPage() {
  const t = useT();
  const router = useRouter();
  const gaUser = useAppStore((s) => s.gaUser);
  const subscription = useAppStore((s) => s.subscription);
  const logout = useAppStore((s) => s.logout);
  const [hydrated, setHydrated] = useState(false);

  // 避免 SSR/CSR 文本不一致：组件挂载后才认为已就绪
  useEffect(() => {
    setHydrated(true);
  }, []);

  const isPro = !!subscription;
  const planLabel = subscription?.plan === 'pro_yearly'
    ? t('account.planYearly')
    : subscription?.plan === 'pro_monthly'
    ? t('account.planMonthly')
    : t('account.planFree');
  const sinceText = subscription?.since
    ? new Date(subscription.since).toLocaleDateString(
        t('account.locale') === 'en' ? 'en-US' : 'zh-CN',
        { year: 'numeric', month: 'long', day: 'numeric' }
      )
    : '';

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  if (!hydrated) {
    return <div className="min-h-screen bg-canvas" />;
  }

  return (
    <div className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-16">
      <h1 className="text-h1 font-bold text-fg">{t('account.title')}</h1>
      <p className="mt-2 text-body text-fg-secondary">{t('account.subtitle')}</p>

      <div className="mt-8 space-y-6">
        {/* 1. 用户身份 */}
        <section className="rounded-xl border border-line bg-surface p-6 shadow-sm">
          <div className="flex items-center gap-2 text-caption font-semibold uppercase tracking-wide text-fg-muted">
            <User size={14} aria-hidden />
            {t('account.sectionUser')}
          </div>
          {gaUser ? (
            <div className="mt-4 flex items-center gap-4">
              <img
                src={gaUser.picture}
                alt={gaUser.name}
                className="h-14 w-14 rounded-full ring-1 ring-line"
                referrerPolicy="no-referrer"
              />
              <div className="min-w-0 flex-1">
                <div className="text-title font-semibold text-fg truncate">{gaUser.name}</div>
                <div className="mt-0.5 text-sm text-fg-secondary truncate">{gaUser.email}</div>
                <div className="mt-1 inline-flex items-center gap-1 rounded-full bg-subtle px-2 py-0.5 text-caption font-medium text-fg-muted">
                  Google
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-4 flex flex-col items-start gap-3">
              <p className="text-sm text-fg-secondary">{t('account.notLoggedIn')}</p>
              <GoogleLoginButton />
            </div>
          )}
        </section>

        {/* 2. 会员状态（仅登录后显示，避��暴露他人订阅） */}
        {gaUser ? (
          <section className="rounded-xl border border-line bg-surface p-6 shadow-sm">
            <div className="flex items-center gap-2 text-caption font-semibold uppercase tracking-wide text-fg-muted">
              <CreditCard size={14} aria-hidden />
              {t('account.sectionPlan')}
            </div>
            <div className="mt-4 flex items-center gap-3">
              {isPro ? (
                <Crown className="h-6 w-6 text-brand" aria-hidden />
              ) : (
                <FileText className="h-6 w-6 text-fg-muted" aria-hidden />
              )}
              <div>
                <div className="text-title font-semibold text-fg">{planLabel}</div>
                {isPro && sinceText && (
                  <div className="mt-0.5 flex items-center gap-1 text-caption text-fg-muted">
                    <Calendar size={12} aria-hidden />
                    {t('account.since')} {sinceText}
                  </div>
                )}
              </div>
            </div>

            {/* 当前限额（与 pricing 页文案保持一致） */}
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <LimitCell
                icon={<FileText size={14} aria-hidden />}
                label={t('account.limitFiles')}
                value={isPro ? t('account.limitFilesPro') : t('account.limitFilesFree')}
              />
              <LimitCell
                icon={<FileText size={14} aria-hidden />}
                label={t('account.limitSingle')}
                value={isPro ? t('account.limitSinglePro') : t('account.limitSingleFree')}
              />
              <LimitCell
                icon={<FileText size={14} aria-hidden />}
                label={t('account.limitTotal')}
                value={isPro ? t('account.limitTotalPro') : t('account.limitTotalFree')}
              />
            </div>

            {/* 升级/管理 */}
            <div className="mt-6 flex flex-col gap-2 sm:flex-row">
              {isPro ? (
                <>
                  <span className="inline-flex h-10 items-center gap-2 rounded-md bg-ok-subtle px-3 text-sm font-semibold text-ok">
                    <Check size={16} aria-hidden />
                    {t('account.proActive')}
                  </span>
                  <Link
                    href="/pricing"
                    className="inline-flex h-10 items-center gap-2 rounded-md border border-line bg-surface px-3 text-sm font-medium text-fg transition-colors duration-fast hover:bg-subtle"
                  >
                    {t('account.manageSub')}
                  </Link>
                </>
              ) : (
                <Link
                  href="/pricing"
                  className="inline-flex h-10 items-center gap-2 rounded-md bg-brand px-3 text-sm font-semibold text-on-primary transition-colors duration-fast hover:bg-brand-hover"
                >
                  <Sparkles size={16} aria-hidden />
                  {t('account.upgrade')}
                </Link>
              )}
            </div>
          </section>
        ) : (
          <section className="rounded-xl border border-line bg-surface p-6 shadow-sm">
            <div className="flex items-center gap-2 text-caption font-semibold uppercase tracking-wide text-fg-muted">
              <CreditCard size={14} aria-hidden />
              {t('account.sectionPlan')}
            </div>
            <p className="mt-4 text-sm text-fg-secondary">
              {t('account.lockedHint')}
            </p>
            <div className="mt-4">
              <GoogleLoginButton />
            </div>
          </section>
        )}

        {/* 3. Pro 权益（仅登录 + Pro 用户展示） */}
        {gaUser && isPro && (
          <section className="rounded-xl border border-line bg-surface p-6 shadow-sm">
            <div className="flex items-center gap-2 text-caption font-semibold uppercase tracking-wide text-fg-muted">
              <Sparkles size={14} aria-hidden />
              {t('account.sectionPro')}
            </div>
            <ul className="mt-4 space-y-2 text-sm text-fg">
              <BenefitRow>{t('account.benefit1')}</BenefitRow>
              <BenefitRow>{t('account.benefit2')}</BenefitRow>
              <BenefitRow>{t('account.benefit3')}</BenefitRow>
              <BenefitRow>{t('account.benefit4')}</BenefitRow>
              <BenefitRow>{t('account.benefit5')}</BenefitRow>
            </ul>
          </section>
        )}

        {/* 4. 退出登录 */}
        {gaUser && (
          <section className="rounded-xl border border-line bg-surface p-6 shadow-sm">
            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex h-10 items-center gap-2 rounded-md border border-line bg-surface px-3 text-sm font-medium text-fg-secondary transition-colors duration-fast hover:bg-subtle hover:text-fg"
            >
              <LogOut size={16} aria-hidden />
              {t('account.signOut')}
            </button>
          </section>
        )}
      </div>
    </div>
  );
}

function LimitCell({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-lg border border-line bg-canvas px-3 py-2.5">
      <div className="flex items-center gap-1.5 text-caption text-fg-muted">
        {icon}
        {label}
      </div>
      <div className="mt-1 text-title font-semibold text-fg">{value}</div>
    </div>
  );
}

function BenefitRow({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <Check className="mt-0.5 h-4 w-4 shrink-0 text-ok" aria-hidden />
      <span>{children}</span>
    </li>
  );
}
