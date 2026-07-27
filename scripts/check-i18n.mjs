// 校验 i18n 字典：确保 zh / en 两个语言的 key 集合完全一致。
// 运行：npm run check:i18n
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dictPath = resolve(__dirname, '..', 'src', 'i18n', 'dict.ts');

if (!existsSync(dictPath)) {
  console.error('[check-i18n] 找不到 src/i18n/dict.ts');
  process.exit(1);
}

const src = readFileSync(dictPath, 'utf8');

// 粗略提取 const zh = {...} 与 const en = {...} 的顶层 key（形如  key:）
function extractKeys(blockName) {
  const re = new RegExp(`export const ${blockName}\\s*=\\s*\\{([\\s\\S]*?)\\n\\};`, 'm');
  const m = src.match(re);
  if (!m) return null;
  const body = m[1];
  const keys = new Set();
  const keyRe = /^\s{2,}([a-zA-Z0-9_]+)\s*:/gm;
  let km;
  while ((km = keyRe.exec(body)) !== null) {
    keys.add(km[1]);
  }
  return keys;
}

const zh = extractKeys('zh');
const en = extractKeys('en');
if (!zh || !en) {
  console.error('[check-i18n] 解析失败，请检查 dict.ts 结构');
  process.exit(1);
}

const onlyZh = [...zh].filter((k) => !en.has(k));
const onlyEn = [...en].filter((k) => !zh.has(k));

if (onlyZh.length === 0 && onlyEn.length === 0) {
  console.log(`[check-i18n] OK · zh=${zh.size} keys, en=${en.size} keys, 完全一致`);
  process.exit(0);
} else {
  console.error('[check-i18n] 不一致：');
  if (onlyZh.length) console.error('  仅 zh 有: ' + onlyZh.join(', '));
  if (onlyEn.length) console.error('  仅 en 有: ' + onlyEn.join(', '));
  process.exit(1);
}
