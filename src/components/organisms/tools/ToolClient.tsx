'use client';

import { useRef, useState, type ChangeEvent } from 'react';
import { PDFDocument, degrees } from 'pdf-lib';
import * as pdfjsLib from 'pdfjs-dist';
import { saveAs } from 'file-saver';
import { UploadCloud } from 'lucide-react';
import { Button } from '@/components/atoms/Button';
import { Spinner } from '@/components/atoms/Spinner';
import { SecureBadge } from '@/components/molecules/SecureBadge';
import { parsePageRange } from '@/lib/range';

export type ToolId = 'split' | 'compress' | 'rotate' | 'pdf-to-image';

interface DL {
  name: string;
  blob: Blob;
  url?: string;
}

export default function ToolClient({ tool }: { tool: ToolId }) {
  const [file, setFile] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const [dls, setDls] = useState<DL[]>([]);
  const [range, setRange] = useState('1-3,5');
  const [angle, setAngle] = useState(90);
  const [scale, setScale] = useState(2);
  const [format, setFormat] = useState<'png' | 'jpeg'>('png');
  const inputRef = useRef<HTMLInputElement>(null);

  const pick = (e: ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files && e.target.files[0] ? e.target.files[0] : null;
    setFile(f);
    setDls([]);
    setStatus(f ? `已选择 / Selected: ${f.name}` : '');
    if (inputRef.current) inputRef.current.value = '';
  };

  const run = async () => {
    if (!file) {
      setStatus('请先选择 PDF 文件 / Please choose a PDF first.');
      return;
    }
    setBusy(true);
    setStatus('处理中… / Processing…');
    setDls([]);
    try {
      const bytes = await file.arrayBuffer();
      let out: DL[] = [];
      if (tool === 'split') out = await splitPdf(bytes, range);
      else if (tool === 'compress') out = await compressPdf(bytes);
      else if (tool === 'rotate') out = await rotatePdf(bytes, angle);
      else if (tool === 'pdf-to-image') out = await pdfToImages(bytes, scale, format);

      const withUrls = out.map((o) => ({ ...o, url: URL.createObjectURL(o.blob) }));
      setDls(withUrls);
      withUrls.forEach((o) => o.url && saveAs(o.url, o.name));
      setStatus(`完成 / Done：${out.length} 个文件已生成并下载`);
    } catch (err) {
      setStatus('出错 / Error: ' + (err instanceof Error ? err.message : String(err)));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="my-6 rounded-xl border border-line bg-surface p-6">
      <div className="flex flex-col items-center">
        <div
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            const f = e.dataTransfer.files && e.dataTransfer.files[0];
            if (f) {
              setFile(f);
              setDls([]);
              setStatus(`已选择 / Selected: ${f.name}`);
            }
          }}
          className="flex w-full cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed border-line-strong bg-canvas px-4 py-8 text-center"
        >
          <UploadCloud size={24} className="text-brand" aria-hidden />
          <p className="text-sm font-medium">
            {file ? file.name : tool === 'pdf-to-image' ? '拖入或选择要转图的 PDF' : '拖入或选择 PDF 文件'}
          </p>
          <p className="text-xs text-fg-secondary">
            文件只在你的浏览器中处理，不会上传 / Processed locally, never uploaded
          </p>
        </div>
        <input
          ref={inputRef}
          type="file"
          accept="application/pdf"
          className="hidden"
          onChange={pick}
        />
      </div>

      {tool === 'split' && (
        <div className="mt-4">
          <label className="text-sm font-medium">
            提取页面 / Pages to extract（如 1-3,5）
          </label>
          <input
            value={range}
            onChange={(e) => setRange(e.target.value)}
            className="mt-1 w-full rounded-md border border-line bg-canvas px-3 py-2 font-mono text-sm"
          />
        </div>
      )}

      {tool === 'rotate' && (
        <div className="mt-4">
          <label className="text-sm font-medium">旋转角度 / Rotate by</label>
          <select
            value={angle}
            onChange={(e) => setAngle(Number(e.target.value))}
            className="mt-1 w-full rounded-md border border-line bg-canvas px-3 py-2"
          >
            <option value={90}>90°</option>
            <option value={180}>180°</option>
            <option value={270}>270°</option>
          </select>
        </div>
      )}

      {tool === 'pdf-to-image' && (
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div>
            <label className="text-sm font-medium">清晰度 / Scale</label>
            <select
              value={scale}
              onChange={(e) => setScale(Number(e.target.value))}
              className="mt-1 w-full rounded-md border border-line bg-canvas px-3 py-2"
            >
              <option value={1}>1×</option>
              <option value={2}>2×</option>
              <option value={3}>3×</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium">格式 / Format</label>
            <select
              value={format}
              onChange={(e) => setFormat(e.target.value as 'png' | 'jpeg')}
              className="mt-1 w-full rounded-md border border-line bg-canvas px-3 py-2"
            >
              <option value="png">PNG</option>
              <option value="jpeg">JPEG</option>
            </select>
          </div>
        </div>
      )}

      <div className="mt-4 flex items-center gap-3">
        <Button variant="primary" size="md" onClick={run} disabled={busy || !file}>
          {busy ? (
            <>
              <Spinner size={16} /> 处理中… / Processing
            </>
          ) : (
            '开始处理 / Run'
          )}
        </Button>
        <SecureBadge />
      </div>

      {status && <p className="mt-3 text-sm text-fg-secondary">{status}</p>}

      {dls.length > 0 && (
        <div className="mt-4 space-y-1">
          <p className="text-sm font-medium">下载 / Download：</p>
          {dls.map((d) => (
            <a
              key={d.name}
              href={d.url}
              download={d.name}
              className="block text-sm text-primary hover:underline"
            >
              {d.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function toBlob(u8: Uint8Array, type: string): Blob {
  const ab = new ArrayBuffer(u8.byteLength);
  new Uint8Array(ab).set(u8);
  return new Blob([ab], { type });
}

async function splitPdf(bytes: ArrayBuffer, range: string): Promise<DL[]> {
  const src = await PDFDocument.load(bytes);
  const res = parsePageRange(range, src.getPageCount());
  const pages = res.pages === 'all' ? src.getPages().map((_, i) => i) : res.pages;
  const out = await PDFDocument.create();
  const copied = await out.copyPages(src, pages);
  copied.forEach((p) => out.addPage(p));
  const u8 = await out.save();
  return [{ name: 'split.pdf', blob: toBlob(u8, 'application/pdf') }];
}

async function compressPdf(bytes: ArrayBuffer): Promise<DL[]> {
  const doc = await PDFDocument.load(bytes);
  const u8 = await doc.save({ useObjectStreams: true });
  return [{ name: 'compressed.pdf', blob: toBlob(u8, 'application/pdf') }];
}

async function rotatePdf(bytes: ArrayBuffer, angle: number): Promise<DL[]> {
  const doc = await PDFDocument.load(bytes);
  doc.getPages().forEach((p) => {
    const cur = p.getRotation().angle;
    p.setRotation(degrees((cur + angle) % 360));
  });
  const u8 = await doc.save();
  return [{ name: 'rotated.pdf', blob: toBlob(u8, 'application/pdf') }];
}

async function pdfToImages(
  bytes: ArrayBuffer,
  scale: number,
  format: 'png' | 'jpeg'
): Promise<DL[]> {
  const v = pdfjsLib.version;
  pdfjsLib.GlobalWorkerOptions.workerSrc = `/pdf.worker.${v}.min.mjs`;
  const doc = await pdfjsLib.getDocument({
    data: bytes,
    cMapUrl: `/cmap-${v}/`,
    cMapPacked: true,
    standardFontDataUrl: `/standard_fonts-${v}/`,
  }).promise;

  const res: DL[] = [];
  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i);
    const viewport = page.getViewport({ scale });
    const canvas = document.createElement('canvas');
    canvas.width = Math.ceil(viewport.width);
    canvas.height = Math.ceil(viewport.height);
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Canvas not supported / 浏览器不支持 Canvas');
    await page.render({ canvasContext: ctx, viewport }).promise;
    const dataUrl = canvas.toDataURL(format === 'png' ? 'image/png' : 'image/jpeg', 0.92);
    const blob = await (await fetch(dataUrl)).blob();
    res.push({ name: `page-${String(i).padStart(3, '0')}.${format}`, blob });
  }
  return res;
}
