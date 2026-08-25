'use client';

import dynamic from 'next/dynamic';
import { Spinner } from '@/components/atoms/Spinner';
import { useT } from '@/i18n/provider';

const PricingPage = dynamic(() => import('@/views/PricingPage'), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-screen items-center justify-center bg-canvas text-fg">
      <Spinner size={28} />
    </div>
  ),
});

export default function Page() {
  const t = useT();
  return (
    <>
      <PricingPage />
      <section className="mx-auto max-w-3xl px-4 pb-16 pt-10 text-sm leading-relaxed text-fg-secondary">
        <h2 className="text-base font-semibold text-fg">{t('pricing.noteTitle')}</h2>
        <p className="mt-3">{t('pricing.note1')}</p>
        <p className="mt-2">{t('pricing.note2')}</p>
        <p className="mt-2">{t('pricing.note3')}</p>
      </section>
    </>
  );
}
