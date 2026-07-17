'use client';

import { useAppStore, type FileItem } from '../../store/useAppStore';
import { cn } from '../../lib/cn';
import { useT } from '../../i18n/provider';

// F4 页范围选择（MVP 默认路径：快捷文本输入）。
// 非法 → 内联红字提示 + 该文件回退为全页（在 store.setRange 中处理）。
export function PageRangeSelector({ item }: { item: FileItem }) {
  const setMode = useAppStore((s) => s.setMode);
  const setRange = useAppStore((s) => s.setRange);
  const total = item.pageCount ?? 0;
  const t = useT();

  return (
    <div className="px-3 pb-3 pl-12">
      <div className="flex flex-wrap items-center gap-3">
        <div
          className="inline-flex rounded-md border border-line p-0.5"
          role="group"
          aria-label="选择页面范围模式"
        >
          <button
            type="button"
            onClick={() => setMode(item.id, 'all')}
            aria-pressed={item.mode === 'all'}
            className={cn(
              'rounded px-3 py-1 text-sm transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface',
              item.mode === 'all'
                ? 'bg-brand-subtle text-brand'
                : 'text-fg-secondary hover:bg-subtle'
            )}
          >
            {t('range.all')}
          </button>
          <button
            type="button"
            onClick={() => setMode(item.id, 'range')}
            aria-pressed={item.mode === 'range'}
            className={cn(
              'rounded px-3 py-1 text-sm transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface',
              item.mode === 'range'
                ? 'bg-brand-subtle text-brand'
                : 'text-fg-secondary hover:bg-subtle'
            )}
          >
            {t('range.specific')}
          </button>
        </div>

        {item.mode === 'range' && (
          <div className="flex flex-1 items-center gap-2">
            <input
              type="text"
              value={item.rangeText}
              onChange={(e) => setRange(item.id, e.target.value)}
              placeholder={t('range.placeholder')}
              aria-label={`${item.name} ${t('range.specific')}`}
              aria-invalid={!!item.rangeError}
              className={cn(
                'h-9 flex-1 rounded-md border bg-inset px-3 font-mono text-sm text-fg outline-none transition-colors duration-fast focus-visible:ring-2 focus-visible:ring-brand',
                item.rangeError
                  ? 'border-danger'
                  : 'border-line focus-visible:border-brand'
              )}
            />
            <span className="shrink-0 font-mono text-caption text-fg-muted">
              {t('range.total', { n: total })}
            </span>
          </div>
        )}
      </div>

      {item.mode === 'range' && item.rangeError && (
        <p className="mt-2 text-caption text-danger" role="alert">
          {item.rangeError}
          <span className="ml-1 text-fg-muted">
            · {t('range.errorSuffix')}
          </span>
        </p>
      )}
      {item.mode === 'range' && !item.rangeError && (
        <p className="mt-2 font-mono text-caption text-fg-muted">
          {t('range.selected', { sel: item.selectedCount, total })}
        </p>
      )}
    </div>
  );
}
