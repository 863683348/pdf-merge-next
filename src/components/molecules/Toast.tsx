'use client';

import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import type { ReactNode } from 'react';
import { useAppStore, type ToastKind } from '../../store/useAppStore';
import { useT } from '../../i18n/provider';

const icons: Record<ToastKind, ReactNode> = {
  success: <CheckCircle2 size={18} className="text-ok" aria-hidden />,
  error: <AlertCircle size={18} className="text-danger" aria-hidden />,
  info: <Info size={18} className="text-brand" aria-hidden />,
};

export function ToastHost() {
  const toasts = useAppStore((s) => s.toasts);
  const removeToast = useAppStore((s) => s.removeToast);
  const t = useT();

  return (
    <div
      className="pointer-events-none fixed bottom-4 right-4 z-50 flex w-[min(92vw,360px)] flex-col gap-2"
      aria-live="polite"
      aria-atomic="false"
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-start gap-2 rounded-md border border-line bg-elevated px-3 py-2.5 shadow-md"
          role={toast.kind === 'error' ? 'alert' : 'status'}
        >
          <span className="mt-0.5 shrink-0">{icons[toast.kind]}</span>
          <p className="flex-1 text-sm text-fg">{toast.message}</p>
          <button
            type="button"
            onClick={() => removeToast(toast.id)}
            aria-label={t('common.close')}
            className="shrink-0 rounded text-fg-muted transition-colors duration-fast hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-elevated"
          >
            <X size={16} aria-hidden />
          </button>
        </div>
      ))}
    </div>
  );
}
