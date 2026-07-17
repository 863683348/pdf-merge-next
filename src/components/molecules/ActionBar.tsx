'use client';

import { Download, AlertCircle } from 'lucide-react';
import type { CSSProperties } from 'react';
import { useAppStore } from '../../store/useAppStore';
import { Button } from '../atoms/Button';
import { useT } from '../../i18n/provider';
import { formatBytes } from '../../lib/format';
import {
  FREE_MAX_FILES,
  FREE_MAX_TOTAL_FILE_MB,
} from '../../lib/constants';

export function ActionBar() {
  const files = useAppStore((s) => s.files);
  const processing = useAppStore((s) => s.processing);
  const runMerge = useAppStore((s) => s.runMerge);
  const t = useT();

  const valid = files.filter((f) => f.status === 'ready');
  const fileCount = valid.length;
  const totalPages = valid.reduce((s, f) => s + (f.pageCount ?? 0), 0);
  const selectedPages = valid.reduce((s, f) => s + f.selectedCount, 0);
  const totalSizeBytes = valid.reduce((s, f) => s + f.size, 0);
  const totalSizeMB = totalSizeBytes / 1024 / 1024;
  const disabled = fileCount === 0 || processing.active;

  const filesOverLimit = fileCount > FREE_MAX_FILES;
  const sizeOverLimit = totalSizeMB > FREE_MAX_TOTAL_FILE_MB;
  const blocked = filesOverLimit || sizeOverLimit;

  const pct =
    processing.total > 0
      ? Math.round((processing.done / processing.total) * 100)
      : 0;

  return (
    <div className="sticky bottom-0 z-20 border-t border-line bg-surface">
      <div className="mx-auto flex max-w-content flex-col gap-2 px-6 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <div className="flex flex-col gap-1">
          <p className="font-mono text-sm text-fg-secondary">
            {t('action.summary', {
              files: fileCount,
              pages: totalPages,
              selected: selectedPages,
            })}
          </p>
          <p className="text-caption text-fg-muted">
            {t('action.limit', {
              files: fileCount,
              maxFiles: FREE_MAX_FILES,
              size: formatBytes(totalSizeBytes),
              maxSize: FREE_MAX_TOTAL_FILE_MB,
            })}
          </p>
          {blocked && (
            <p className="flex items-center gap-1 text-caption text-danger">
              <AlertCircle size={14} aria-hidden />
              {filesOverLimit
                ? t('action.filesOverLimit', { max: FREE_MAX_FILES })
                : t('action.sizeOverLimit', { max: FREE_MAX_TOTAL_FILE_MB })}
            </p>
          )}
        </div>
        <div className="flex flex-col items-start gap-1 sm:items-end">
          <Button
            variant="primary"
            size="md"
            loading={processing.active}
            disabled={disabled || blocked}
            onClick={() => void runMerge()}
            icon={<Download size={16} aria-hidden />}
          >
            {processing.active ? t('action.merging') : t('action.merge')}
          </Button>
          {fileCount === 0 && (
            <span className="text-caption text-fg-muted">
              {t('action.emptyHint')}
            </span>
          )}
          {processing.active && (
            <span className="font-mono text-caption text-fg-muted">
              {t('action.progress', {
                done: processing.done,
                total: processing.total,
              })}
            </span>
          )}
        </div>
      </div>
      {processing.active && (
        <div className="h-0.5 w-full bg-subtle">
          <div
            className="h-full bg-brand transition-[width] duration-normal ease-standard"
            style={{ width: `${pct}%` } as CSSProperties}
          />
        </div>
      )}
    </div>
  );
}
