'use client';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import {
  GripVertical,
  ChevronDown,
  ArrowUp,
  ArrowDown,
  Trash2,
  AlertTriangle,
} from 'lucide-react';
import type { CSSProperties } from 'react';
import { useAppStore, type FileItem } from '../../store/useAppStore';
import { cn } from '../../lib/cn';
import { formatBytes } from '../../lib/format';
import { levelTone, type Level } from '../../lib/thresholds';
import { Thumbnail } from '../atoms/Thumbnail';
import { Badge } from '../atoms/Badge';
import { PageRangeSelector } from './PageRangeSelector';
import { useT } from '../../i18n/provider';

const iconBtn =
  'inline-flex h-9 w-9 items-center justify-center rounded-md text-fg-muted transition-colors duration-fast hover:bg-subtle hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface';

export function FileCard({ item }: { item: FileItem }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
    index,
  } = useSortable({ id: item.id });

  const removeFile = useAppStore((s) => s.removeFile);
  const toggleExpand = useAppStore((s) => s.toggleExpand);
  const move = useAppStore((s) => s.move);
  const filesLength = useAppStore((s) => s.files.length);
  const t = useT();

  const style: CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 50 : undefined,
  };

  const isError = item.status === 'error' || item.status === 'encrypted';

  // 错误/加密态：可单独移除，不计入合并
  if (isError) {
    const errText =
      item.status === 'encrypted'
        ? t('file.encrypted')
        : item.errorMsg || t('file.corrupted');
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="flex items-center gap-3 rounded-lg border border-danger-subtle bg-danger-subtle px-4 py-3"
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-surface text-danger">
          <AlertTriangle size={20} aria-hidden />
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-fg">{item.name}</p>
          <p className="mt-0.5 text-caption text-danger">{errText}</p>
        </div>
        <button
          type="button"
          onClick={() => removeFile(item.id)}
          aria-label={t('file.remove', { name: item.name })}
          className={iconBtn}
        >
          <Trash2 size={20} aria-hidden />
        </button>
      </div>
    );
  }

  const totalPages = item.pageCount ?? 0;
  const selected = item.selectedCount;
  const rangeLabel =
    item.mode === 'all'
      ? t('file.allPages', { n: totalPages })
      : t('file.selectedPages', { sel: selected, total: totalPages });

  // 内存/页数阈值预警：黄/橙为性能提醒，黑为阻断（黑已在 add 前置拦截，
  // 但单文件页数上限不拦截，故这里对文件级黄橙黑统一做可视化）。
  const levelRank: Record<Level, number> = {
    green: 0,
    yellow: 1,
    orange: 2,
    black: 3,
  };
  const maxLevel: Level =
    levelRank[item.sizeLevel] >= levelRank[item.pageLevel]
      ? item.sizeLevel
      : item.pageLevel;
  const accentTone = maxLevel === 'green' ? null : levelTone(maxLevel); // 'warn' | 'danger'

  const warnings: { text: string; tone: 'warn' | 'danger' }[] = [];
  if (item.sizeLevel !== 'green') {
    warnings.push({
      text:
        item.sizeLevel === 'black'
          ? t('badge.fileBlack')
          : item.sizeLevel === 'orange'
          ? t('badge.fileOrange')
          : t('badge.fileYellow'),
      tone: item.sizeLevel === 'black' ? 'danger' : 'warn',
    });
  }
  if (item.pageLevel !== 'green') {
    warnings.push({
      text:
        item.pageLevel === 'black'
          ? t('badge.pageBlack')
          : item.pageLevel === 'orange'
          ? t('badge.pageOrange')
          : t('badge.pageYellow'),
      tone: item.pageLevel === 'black' ? 'danger' : 'warn',
    });
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cn(
        'group rounded-lg border border-line bg-surface shadow-xs transition-shadow duration-normal',
        isDragging && 'shadow-lg',
        accentTone === 'danger' && 'border-l-2 border-l-danger',
        accentTone === 'warn' && 'border-l-2 border-l-warn'
      )}
    >
      <div className="flex items-center gap-2 px-3 py-3">
        {/* 序号徽章：直观显示合并顺序 */}
        <span
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-subtle text-caption font-semibold text-fg-muted"
          aria-hidden
        >
          {(index ?? 0) + 1}
        </span>

        {/* 拖拽手柄：常驻显示，本身是 button 可键盘操作 */}
        <button
          type="button"
          aria-label={t('file.dragHandle', { name: item.name })}
          className={cn(
            iconBtn,
            'w-7 shrink-0 cursor-grab active:cursor-grabbing',
            isDragging && 'opacity-60'
          )}
          {...attributes}
          {...listeners}
        >
          <GripVertical size={20} aria-hidden />
        </button>

        <Thumbnail bitmap={item.thumbnail} size={64} />

        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-fg">{item.name}</p>
          <p className="mt-0.5 font-mono text-caption text-fg-muted">
            {item.status === 'parsing'
              ? t('file.parsing')
              : t('file.meta', {
                  pages: totalPages,
                  size: formatBytes(item.size),
                })}
          </p>
          {warnings.length > 0 && (
            <div className="mt-1 flex flex-wrap gap-1">
              {warnings.map((w) => (
                <Badge key={w.text} tone={w.tone}>
                  {w.text}
                </Badge>
              ))}
            </div>
          )}
        </div>

        <Badge tone={item.mode === 'all' ? 'neutral' : 'brand'}>
          {rangeLabel}
        </Badge>

        {/* 上移/下移：不依赖拖拽也能排序，触屏更友好 */}
        <div className="flex shrink-0 items-center">
          <button
            type="button"
            onClick={() => move(item.id, -1)}
            disabled={(index ?? 0) === 0}
            aria-label={t('file.moveUp', { name: item.name })}
            className={cn(
              iconBtn,
              'w-7',
              (index ?? 0) === 0 &&
                'cursor-not-allowed opacity-30 hover:bg-transparent'
            )}
          >
            <ArrowUp size={18} aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => move(item.id, 1)}
            disabled={(index ?? 0) === filesLength - 1}
            aria-label={t('file.moveDown', { name: item.name })}
            className={cn(
              iconBtn,
              'w-7',
              (index ?? 0) === filesLength - 1 &&
                'cursor-not-allowed opacity-30 hover:bg-transparent'
            )}
          >
            <ArrowDown size={18} aria-hidden />
          </button>
        </div>

        <button
          type="button"
          onClick={() => toggleExpand(item.id)}
          aria-label={
            item.expanded ? t('file.collapse') : t('file.expand')
          }
          aria-expanded={item.expanded}
          className={cn(
            iconBtn,
            'transition-transform duration-fast',
            item.expanded && 'rotate-180'
          )}
        >
          <ChevronDown size={20} aria-hidden />
        </button>

        <button
          type="button"
          onClick={() => removeFile(item.id)}
          aria-label={t('file.remove', { name: item.name })}
          className={iconBtn}
        >
          <Trash2 size={20} aria-hidden />
        </button>
      </div>

      {item.expanded && item.status === 'ready' && (
        <PageRangeSelector item={item} />
      )}
    </div>
  );
}
