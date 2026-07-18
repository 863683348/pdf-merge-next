'use client';

import type { ReactNode } from 'react';
import { useT } from '@/i18n/provider';

export function PageShell({
  children,
  titleKey,
}: {
  children: ReactNode;
  titleKey: string;
}) {
  const t = useT();
  return (
    <div className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-16">
      <h1 className="text-h1 font-bold text-fg">{t(titleKey)}</h1>
      {children}
    </div>
  );
}
