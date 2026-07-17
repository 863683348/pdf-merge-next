'use client';

import { X } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';
import { TopBar } from '../components/molecules/TopBar';
import { DropZone } from '../components/molecules/DropZone';
import { FileList } from '../components/organisms/FileList';
import { ActionBar } from '../components/molecules/ActionBar';
import { useT } from '../i18n/provider';

function OnboardLine({ onDismiss }: { onDismiss: () => void }) {
  const t = useT();
  return (
    <div className="flex items-center justify-between gap-3 rounded-md border border-line-subtle bg-surface px-4 py-2.5 text-caption text-fg-secondary">
      <span>{t('onboard.text')}</span>
      <button
        type="button"
        onClick={onDismiss}
        aria-label={t('common.close')}
        className="shrink-0 rounded text-fg-muted transition-colors duration-fast hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
      >
        <X size={16} aria-hidden />
      </button>
    </div>
  );
}

export function Workbench() {
  const files = useAppStore((s) => s.files);
  const onboarded = useAppStore((s) => s.onboarded);
  const dismissOnboarding = useAppStore((s) => s.dismissOnboarding);

  return (
    <div className="flex min-h-full flex-col">
      <TopBar />
      <main className="mx-auto w-full max-w-content flex-1 px-6 py-8">
        {files.length === 0 ? (
          <div className="flex flex-col gap-4">
            <DropZone />
            {!onboarded && <OnboardLine onDismiss={dismissOnboarding} />}
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <FileList />
            <DropZone compact />
          </div>
        )}
      </main>
      <ActionBar />
    </div>
  );
}
