'use client';

import {
  Check,
  AlertTriangle,
  Download,
  ExternalLink,
  RotateCcw,
  FileQuestion,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { saveAs } from 'file-saver';
import { useAppStore } from '../../store/useAppStore';
import { Button } from '../atoms/Button';
import { Thumbnail } from '../atoms/Thumbnail';
import { SecureBadge } from '../molecules/SecureBadge';
import { formatBytes } from '../../lib/format';
import { useT } from '../../i18n/provider';

export function ResultPanel() {
  const result = useAppStore((s) => s.result);
  const resultError = useAppStore((s) => s.resultError);
  const resetToWorkbench = useAppStore((s) => s.resetToWorkbench);
  const retryMerge = useAppStore((s) => s.retryMerge);
  const t = useT();

  const [openUrl, setOpenUrl] = useState<string | null>(null);
  useEffect(() => {
    return () => {
      if (openUrl) URL.revokeObjectURL(openUrl);
    };
  }, [openUrl]);

  // 合并执行异常
  if (resultError && !result) {
    return (
      <div className="flex flex-col items-center text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-pill bg-danger-subtle text-danger">
          <AlertTriangle size={24} aria-hidden />
        </span>
        <h1 className="mt-4 text-h1 font-bold tracking-tight">
          {t('result.failed')}
        </h1>
        <p className="mt-2 max-w-md text-sm text-fg-secondary">
          {resultError}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <Button variant="primary" onClick={retryMerge}>
            {t('result.retry')}
          </Button>
          <Button variant="ghost" onClick={resetToWorkbench}>
            {t('result.back')}
          </Button>
        </div>
      </div>
    );
  }

  // 异常进入：无数据
  if (!result) {
    return (
      <div className="flex flex-col items-center text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-pill bg-subtle text-fg-muted">
          <FileQuestion size={24} aria-hidden />
        </span>
        <h1 className="mt-4 text-h1 font-bold tracking-tight">
          {t('result.noData')}
        </h1>
        <p className="mt-2 text-sm text-fg-secondary">
          {t('result.noDataHint')}
        </p>
        <div className="mt-6">
          <Button variant="primary" onClick={resetToWorkbench}>
            {t('result.back')}
          </Button>
        </div>
      </div>
    );
  }

  // 成功态
  const onDownload = () => saveAs(result.blob, result.fileName);
  const onOpen = () => {
    const url = URL.createObjectURL(result.blob);
    setOpenUrl(url);
    window.open(url, '_blank', 'noopener');
  };

  return (
    <div className="flex flex-col items-center text-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-pill bg-ok-subtle text-ok">
        <Check size={24} aria-hidden />
      </span>
      <h1 className="mt-4 text-h1 font-bold tracking-tight">
        {t('result.done')}
      </h1>
      <p className="mt-2 font-mono text-sm text-fg-secondary">
        {t('result.meta', {
          name: result.fileName,
          size: formatBytes(result.size),
          pages: result.pageCount,
        })}
      </p>
      <div className="mt-6 flex flex-col items-center gap-4">
        <div className="overflow-hidden rounded-md border border-line-subtle bg-inset shadow-sm">
          <Thumbnail bitmap={result.thumbnail} size={160} />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <Button
            variant="primary"
            icon={<Download size={16} aria-hidden />}
            onClick={onDownload}
          >
            {t('result.download')}
          </Button>
          <Button
            variant="secondary"
            icon={<ExternalLink size={16} aria-hidden />}
            onClick={onOpen}
          >
            {t('result.open')}
          </Button>
          <Button
            variant="ghost"
            icon={<RotateCcw size={16} aria-hidden />}
            onClick={resetToWorkbench}
          >
            {t('result.mergeAgain')}
          </Button>
        </div>
      </div>
      <SecureBadge className="mt-6" />
      <p className="mt-3 max-w-md text-caption text-fg-muted">
        {t('result.bookmarkNote')}
      </p>
    </div>
  );
}
