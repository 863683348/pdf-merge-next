'use client';

import { useRef, useState, type DragEvent } from 'react';
import { UploadCloud, Plus } from 'lucide-react';
import { useAppStore } from '../../store/useAppStore';
import { Button } from '../atoms/Button';
import { SecureBadge } from './SecureBadge';
import { useT } from '../../i18n/provider';
import { cn } from '../../lib/cn';

interface DropZoneProps {
  compact?: boolean;
}

export function DropZone({ compact }: DropZoneProps) {
  const addFiles = useAppStore((s) => s.addFiles);
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);
  const t = useT();

  const open = () => inputRef.current?.click();

  const onFiles = (list: FileList | null) => {
    if (list && list.length) addFiles(Array.from(list));
  };

  const onDrop = (e: DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    onFiles(e.dataTransfer.files);
  };

  if (compact) {
    return (
      <div className="flex flex-col items-center">
        <div
          onClick={open}
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={onDrop}
          className={cn(
            'flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-dashed px-4 py-3 text-center text-sm transition-colors duration-normal ease-standard',
            dragOver
              ? 'border-brand bg-brand-subtle'
              : 'border-line-strong bg-surface text-fg-secondary hover:border-brand hover:text-brand'
          )}
        >
          <Plus size={18} aria-hidden />
          <span>{t('dropzone.addMore')}</span>
        </div>
        <input
          ref={inputRef}
          type="file"
          accept="application/pdf"
          multiple
          className="hidden"
          onChange={(e) => {
            onFiles(e.target.files);
            e.target.value = '';
          }}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <div
        onClick={open}
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={onDrop}
        className={cn(
          'flex w-full flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed px-6 py-12 text-center transition-colors duration-normal ease-standard',
          dragOver
            ? 'border-brand bg-brand-subtle'
            : 'border-line-strong bg-surface'
        )}
      >
        <UploadCloud size={24} className="text-brand" aria-hidden />
        <div>
          <h2 className="text-h2 font-semibold">{t('dropzone.title')}</h2>
          <p className="mt-1 text-sm text-fg-secondary">
            {t('dropzone.subtitle')}
          </p>
        </div>
        <Button
          variant="primary"
          size="md"
          onClick={(e) => {
            e.stopPropagation();
            open();
          }}
        >
          {t('dropzone.button')}
        </Button>
        <SecureBadge className="mt-2" />
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="application/pdf"
        multiple
        className="hidden"
        onChange={(e) => {
          onFiles(e.target.files);
          e.target.value = '';
        }}
      />
    </div>
  );
}
