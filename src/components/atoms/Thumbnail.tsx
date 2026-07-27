'use client';

import { useEffect, useRef } from 'react';
import { FileText } from 'lucide-react';
import { cn } from '../../lib/cn';

// F5：将 Worker 回传的 ImageBitmap(零拷贝) 绘制到 canvas。
// 解析失败/解析中无 bitmap 时显示占位图标。
export function Thumbnail({
  bitmap,
  size = 64,
  className,
}: {
  bitmap?: ImageBitmap | null;
  size?: number;
  className?: string;
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, cv.width, cv.height);
    if (bitmap) {
      cv.width = bitmap.width;
      cv.height = bitmap.height;
      ctx.drawImage(bitmap, 0, 0);
    }
  }, [bitmap]);

  return (
    <div
      className={cn(
        'relative flex shrink-0 items-center justify-center overflow-hidden rounded-md border border-line-subtle bg-inset',
        className
      )}
      style={{ height: size }}
    >
      {bitmap ? (
        <canvas ref={ref} aria-hidden className="block h-full w-auto" />
      ) : (
        <FileText size={20} className="text-fg-muted" aria-hidden />
      )}
    </div>
  );
}
