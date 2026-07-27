'use client';

import { LanguageProvider } from '@/i18n/provider';
import type { Lang } from '@/i18n/types';

export default function Providers({
  children,
  serverLang,
}: {
  children: React.ReactNode;
  serverLang?: Lang;
}) {
  return <LanguageProvider serverLang={serverLang}>{children}</LanguageProvider>;
}
