// 把 pdfjs-dist 的 worker / cmap / standard_fonts 复制到 public/，做到零外部请求。
// 运行时机：build 与 dev 之前（package.json 的 build/dev 脚本已自动调用）。
//
// 产物路径带 pdfjs 版本号（pdf.worker.<v>.min.mjs、cmap-<v>/、standard_fonts-<v>/），
// 与 src/workers/parser.worker.ts 里的 pdfjsLib.version 一一对应。带版本号后这些文件
// 才能安全地用 Cache-Control: immutable 长缓存（见 next.config.mjs）——它们合计约
// 3.2MB / 186 个文件，此前以 max-age=0 下发，每次访问都回源，是 Fast Origin Transfer
// 的主要来源之一。
import { existsSync, mkdirSync, readdirSync, copyFileSync, statSync, readFileSync } from 'node:fs';
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

// 版本号必须与运行时 pdfjsLib.version 一致，否则 worker/cmap 会 404。
const version = JSON.parse(readFileSync(join(pdfjs, 'package.json'), 'utf8')).version;
if (!version) throw new Error('无法读取 pdfjs-dist 版本号');

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

// 1) 主 worker 文件（workerSrc = `/pdf.worker.${pdfjsLib.version}.min.mjs`）
const workerCandidates = [
  join(pdfjs, 'build', 'pdf.worker.min.mjs'),
  join(pdfjs, 'build', 'pdf.worker.mjs'),
];
let copied = 0;
let done = false;
for (const wc of workerCandidates) {
  if (existsSync(wc)) {
    copied += copyFile(wc, join(publicDir, `pdf.worker.${version}.min.mjs`));
    done = true;
    break;
  }
}
if (!done) console.warn('[copy-pdfjs] 未找到 pdf worker 文件');

// 2) cmap（cMapUrl = `/cmap-${version}/`）
copied += copyDir(join(pdfjs, 'cmaps'), join(publicDir, `cmap-${version}`));

// 3) standard_fonts（standardFontDataUrl = `/standard_fonts-${version}/`）
copied += copyDir(join(pdfjs, 'standard_fonts'), join(publicDir, `standard_fonts-${version}`));

console.log(
  `[copy-pdfjs] 已复制 ${copied} 个文件到 public/（pdfjs ${version}: worker + cmap + standard_fonts）`
);
