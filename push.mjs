import { readFileSync } from 'node:fs';

const REPO = '863683348/pdf-merge-next';
const BRANCH = 'main';
const TOKEN = process.env.GH_TOKEN;
const BASE = `https://api.github.com/repos/${REPO}/contents`;

if (!TOKEN) {
  console.error('GH_TOKEN not set');
  process.exit(1);
}

const FILES = [
  'app/blog/page.tsx',
  'app/blog/personal-pdf-privacy-vs-enterprise-saas/page.tsx',
  'app/sitemap.ts',
];

const headers = {
  Authorization: `Bearer ${TOKEN}`,
  Accept: 'application/vnd.github+json',
  'Content-Type': 'application/json',
  'User-Agent': 'pdfmergenext-seo-bot',
  'X-GitHub-Api-Version': '2022-11-28',
};

async function getSha(path) {
  const url = `${BASE}/${encodeURI(path)}?ref=${BRANCH}`;
  const res = await fetch(url, { headers });
  if (res.status === 200) {
    const data = await res.json();
    return data.sha;
  }
  if (res.status === 404) return null;
  throw new Error(`GET ${path} -> ${res.status} ${await res.text()}`);
}

async function put(path) {
  const content = readFileSync(path, 'utf8');
  const b64 = Buffer.from(content, 'utf8').toString('base64');
  const sha = await getSha(path);
  const body = {
    message: `feat(blog): add personal-pdf-privacy-vs-enterprise-saas (day 11)`,
    content: b64,
    branch: BRANCH,
    ...(sha ? { sha } : {}),
  };
  const url = `${BASE}/${encodeURI(path)}?ref=${BRANCH}`;
  const res = await fetch(url, {
    method: 'PUT',
    headers,
    body: JSON.stringify(body),
  });
  const text = await res.text();
  if (res.status >= 200 && res.status < 300) {
    const data = JSON.parse(text);
    const commitSha = data.commit?.sha;
    console.log(`OK  ${path} -> commit ${commitSha}`);
    return commitSha;
  }
  throw new Error(`PUT ${path} -> ${res.status} ${text}`);
}

let failed = false;
const shas = [];
for (const f of FILES) {
  try {
    const s = await put(f);
    shas.push(s);
  } catch (e) {
    failed = true;
    console.error(`FAIL ${f}: ${e.message}`);
  }
}

console.log('---');
console.log(`pushed ${shas.length}/${FILES.length} files`);
if (failed) process.exit(1);
