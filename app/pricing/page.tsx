'use client';

import dynamic from 'next/dynamic';
import { Spinner } from '@/components/atoms/Spinner';

const PricingPage = dynamic(() => import('@/views/PricingPage'), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-screen items-center justify-center bg-canvas text-fg">
      <Spinner size={28} />
    </div>
  ),
});

export default function Page() {
  return <PricingPage />;
}
