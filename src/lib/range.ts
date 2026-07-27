// F4 页面范围解析
// 语法：1-based，逗号分隔，支持区间，如 "1-3, 5, 8-10"
// 越界 / 0 / 非数字 → 返回 error，调用方应回退为「全部页」(不崩溃、不影响其它文件)
export interface RangeResult {
  pages: number[] | 'all';
  error?: string;
}

export function parsePageRange(
  raw: string,
  pageCount: number
): RangeResult {
  const text = (raw ?? '').trim();
  if (text === '' || text.toLowerCase() === 'all') return { pages: 'all' };

  const tokens = text
    .split(',')
    .map((t) => t.trim())
    .filter((t) => t.length > 0);
  if (tokens.length === 0) return { pages: 'all' };

  const indices = new Set<number>();

  for (const tok of tokens) {
    if (tok.includes('-')) {
      const parts = tok.split('-').map((p) => p.trim());
      if (parts.length !== 2 || parts[0] === '' || parts[1] === '') {
        return { pages: 'all', error: '页码格式无效，例如 1-3, 5' };
      }
      const a = Number(parts[0]);
      const b = Number(parts[1]);
      if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return { pages: 'all', error: '无法识别的页码' };
      }
      if (a < 1 || b < 1) {
        return { pages: 'all', error: '页码需 ≥ 1' };
      }
      if (a > pageCount || b > pageCount) {
        return { pages: 'all', error: `页码超出范围 1–${pageCount}` };
      }
      const lo = Math.min(a, b);
      const hi = Math.max(a, b);
      for (let i = lo; i <= hi; i += 1) indices.add(i - 1); // 0-based
    } else {
      const n = Number(tok);
      if (!Number.isInteger(n)) {
        return { pages: 'all', error: '无法识别的页码' };
      }
      if (n < 1) {
        return { pages: 'all', error: '页码需 ≥ 1' };
      }
      if (n > pageCount) {
        return { pages: 'all', error: `页码超出范围 1–${pageCount}` };
      }
      indices.add(n - 1);
    }
  }

  const pages = Array.from(indices).sort((x, y) => x - y);
  return { pages };
}
