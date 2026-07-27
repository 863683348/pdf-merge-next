'use client';

import { ShieldCheck } from 'lucide-react';
import { cn } from '../../lib/cn';
import { useT } from '../../i18n/provider';

// 信任徽标：仅用 ShieldCheck + 文案，绝不出现 emoji / 锁型 emoji
export function SecureBadge({ className }: { className?: string }) {
  const t = useT();
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 text-caption text-fg-muted',
        className
      )}
    >
      <ShieldCheck size={16} className="text-ok" aria-hidden />
      <span>{t('secure.text')}</span>
    </span>
  );
}
