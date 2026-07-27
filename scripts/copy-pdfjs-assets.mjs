// 把 pdfjs-dist 的 worker / cmap / standard_fonts 复制到 public/，做到零外部请求。
// 运行时机：build 与 dev 之前（package.json 的 build/dev 脚本已自动调用）。
import { existsSync, mkdirSync, readdirSync, copyFileSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const publicDir = join(root, 'public');

// 解析 pdfjs-dist 实际安装位置（兼容 monorepo / 普通安装）
function resolvePdfjs() {
  const candidates = [
    join(root, 'node_modules', 'pdfjs-dist'),
    join(root, '..', 'node_modules', 'pdfjs-dist'),
  ];
  for (const c of candidates) {
    if (existsSync(c)) return c;
  }
  throw new Error('找不到 pdfjs-dist，请先执行 npm install');
}

const pdfjs = resolvePdfjs();
if (!existsSync(publicDir)) mkdirSync(publicDir, { recursive: true });

function copyDir(src, dest) {
  if (!existsSync(src)) {
    console.warn(`[copy-pdfjs] 跳过（不存在）: ${src}`);
    return 0;
  }
  mkdirSync(dest, { recursive: true });
  let count = 0;
  for (const entry of readdirSync(src)) {
    const s = join(src, entry);
    const d = join(dest, entry);
    if (statSync(s).isDirectory()) {
      count += copyDir(s, d);
    } else {
      copyFileSync(s, d);
      count += 1;
    }
  }
  return count;
}

function copyFile(src, dest) {
  if (!existsSync(src)) {
    console.warn(`[copy-pdfjs] 跳过（不存在）: ${src}`);
    return 0;
  }
  mkdirSync(dirname(dest), { recursive: true });
  copyFileSync(src, dest);
  return 1;
}

// 1) 主 worker 文件（parser.worker.ts 中 GlobalWorkerOptions.workerSrc 指向 /pdf.worker.min.mjs）
const workerCandidates = [
  join(pdfjs, 'build', 'pdf.worker.min.mjs'),
  join(pdfjs, 'build', 'pdf.worker.mjs'),
];
let copied = 0;
let done = false;
for (const wc of workerCandidates) {
  if (existsSync(wc)) {
    copied += copyFile(wc, join(publicDir, 'pdf.worker.min.mjs'));
    done = true;
    break;
  }
}
if (!done) console.warn('[copy-pdfjs] 未找到 pdf worker 文件');

// 2) cmap（CMapReaderFactory 用 cMapUrl='/cmap/'）
copied += copyDir(join(pdfjs, 'cmaps'), join(publicDir, 'cmap'));

// 3) standard_fonts（标准字体回退，standardFontDataUrl='/standard_fonts/'）
copied += copyDir(join(pdfjs, 'standard_fonts'), join(publicDir, 'standard_fonts'));

console.log(`[copy-pdfjs] 已复制 ${copied} 个文件到 public/（pdfjs worker + cmap + standard_fonts）`);
