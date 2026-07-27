# 上线清单 · 第 9 项（安全）& 第 10 项（SEO）执行报告

> 项目：MergeLocal（pdf-merge-next，纯浏览器端零上传 PDF 合并）
> 日期：2026-07-19
> 基于 skill：dafeixiang-saas-launch（Phase 5 安全闸门 / Phase 4 SEO 收尾）

---

## 一、第 9 项 · 上线前安全检查

### ✅ 已修复 / 已确认过关

| # | 项 | 结论 |
|---|----|------|
| 1 | **Next.js high CVE** | 升级 Next `14.2.35 → 15.5.20`、React `18 → 19.2.7`、pdfjs-dist `→ 4.10.38`。`npm audit` 从 high 降为 **2 个 moderate**（均为 postcss 构建期传递依赖，详见残留风险 C）。 |
| 2 | **安全响应头** | `next.config.mjs` 已含 CSP、HSTS(`max-age`)、X-Frame-Options、X-Content-Type-Options、Referrer-Policy、Permissions-Policy，齐全。 |
| 3 | **security.txt** | 新增 `public/.well-known/security.txt`（安全披露邮箱 + 过期时间 2027-07-19）。 |
| 4 | **外部脚本完整性** | Google GSI、GA4、PayPal SDK 注入处均加 `crossOrigin="anonymous"`，便于 SRI/来源隔离。 |
| 5 | **应用层 XSS** | 全源码无 `dangerouslySetInnerHTML` / `innerHTML`；PDF 经 canvas 渲染，不注入 HTML。 |
| 6 | **密钥泄漏** | `NEXT_PUBLIC_*` 仅暴露 PayPal/GA/Google 等本就该公开的客户端 ID，无服务端密钥泄漏。 |
| 7 | **下载文件名净化** | 文件名 `merged-{时间戳}.pdf` 由代码生成，非用户可控，无路径注入。 |
| 8 | **服务端攻击面** | 全项目无 `app/api` 路由处理器（三个 paypal/subscription 目录为空），PayPal 走纯客户端 SDK；无 cookies/server headers 处理，攻击面极小。 |

### ⚠️ 已知 / 残留风险（记录在案，非阻断）

- **A. 无服务端支付校验**：PayPal 纯客户端订阅，无 webhook / 后端验签。Pro 权益由前端 store 解锁，理论上可被绕过。属**架构性已知风险**（纯客户端工具无后端）；免费档已满足核心需求，订阅收入以 PayPal 侧为准。若需服务端校验，须引入轻量后端（Vercel Functions + PayPal webhook）。
- **B. CSP 保留 `'unsafe-eval'`**：PayPal / Google SDK 运行时需要 eval，功能性残留；已最小化其余源。
- **C. postcss moderate（2 个）**：Next 内部捆绑的构建期传递依赖，XSS 仅在“不可信 CSS 字符串化输出”场景——本项目从不处理不可信 CSS。`npm audit fix --force` 会把 Next 降到 9.x（skill 明令禁止的陷阱），故**接受残留**。
- **D. 无 WAF / 速率限制**：纯静态站点、无认证后端，无暴力破解面；攻击面本身小。
- **E. GitHub PAT 失效**：本次用于同步源码的 PAT 返回 `401 Bad credentials`，未能推送 GitHub（见部署说明）。**交付不受影响**（Vercel 部署用本地文件），但仓库整洁度待用户更新令牌后补全。

---

## 二、第 10 项 · SEO 收尾

### ✅ 已落地

| # | 项 | 说明 |
|---|----|------|
| 1 | **sitemap.xml 补全** | 重写 `public/sitemap.xml`，列出全部 6 页 + 博客文章，含 `priority` / `lastmod`。 |
| 2 | **各子页独立 metadata** | `/pricing` `/blog` `/contact` `/privacy` `/terms` 各自 `title` / `canonical` / `description` / `keywords` / `og`，修正原先继承根 metadata 导致的重复 canonical。 |
| 3 | **OG 分享图** | 新增 `app/og/route.tsx`（next/og `ImageResponse`，1200×630 品牌图）。绕开 `next-metadata-route-loader` 对路径单引号（`l'x`）的转义 bug——初始用 `opengraph-image.tsx` 元数据路由会触发该 bug，改为普通路由 `/og` 后构建通过。首页/定价页 `og:image` + `twitter:image` 已指向 `/og`。 |
| 4 | **JSON-LD 付费档** | `WebApplication` 的 `offers` 由单一 `$0` 扩展为 `$0 / $7 / $49` 三档。 |
| 5 | **SEO 博客文章** | 新增 `app/blog/why-local-offline-pdf-merge/page.tsx`（中英双语），targeting 差异化趋势词；并在 `/blog` 列表加入口、sitemap 增条目。 |

### 🔑 采用的趋势关键词

- **英文高量词**：`merge pdf`(≈135K/mo)、`pdf combiner`(≈135K)、`combine pdf`(≈110K)、`combine pdf free`、`pdf combine`、西语 `unir pdf`(≈18K)。
- **英文差异化低竞争词（契合“本地/离线/隐私”卖点）**：`offline pdf merger`、`local pdf merge`、`private pdf merge`、`pdf merger no upload`、`pdf combine no watermark`、`secure pdf merger`。
- **中文核心词**：`PDF合并`、`PDF合并免费`。
- **中文差异化强词**：`离线PDF合并`、`本地PDF合并`、`隐私PDF合并`、`不上传PDF合并`、`无水印PDF合并`、`PDF合并 免注册`、`手机PDF合并`。

> 高量词竞争烈，先用差异化词卡位（与“零上传/隐私优先”定位高度契合），再逐步做高量词的内容厚化。

### ✅ 本地冒烟验证

- `/og` → `image/png` 28391B ✅
- 首页 `og:image` / `twitter:image` → `https://pdf-merge-next.vercel.app/og` ✅
- `/pricing` 独立 `<title>` + 正确 `canonical` ✅
- JSON-LD `offers` 含 `0 / 7 / 49` ✅
- 文章页 `HTTP 200` ✅
- `security.txt` `HTTP 200` ✅
- `sitemap.xml` 含文章条目 ✅
- 首页 `Content-Security-Policy` 头在位 ✅

---

## 三、构建与部署

- 本地 `next build`：Next 15.5.20 + React 19.2.7 干净构建，11 个路由全部静态预渲染（含 `/og` 按需 SSR PNG）。
- **Vercel 生产部署**：已成功（`npx vercel deploy --prod`，远端构建 `✓ Ready`，`DEPLOY_EXIT=0`）。
  - 部署 UID：`dpl_GAw14TBe5PJokZ8i4YMsdJACjELX`
  - 生产域名：`https://pdf-merge-next.vercel.app`（已别名）
  - 经 Vercel API 确认 `readyState = READY`（v6 deployments 列表核对）。
  - 构建仅剩 2 个 postcss moderate（预期，非阻断）。
- **GitHub 源码同步**：本次 PAT 失效（401 `Bad credentials`），**未同步**。Vercel 部署基于本地文件不受此影响；待用户提供有效 PAT 后执行整库 REST API 同步（脚本已就绪：`scripts/sync-github.mjs`，自动排除 node_modules/.next/生成物/`.env*.local`）。

---

## 四、决策日志

| 时间 | Phase | 决策 | 原因 | 影响 |
|------|-------|------|------|------|
| 2026-07-19 | 安全 | 升级 Next 15 清除 high CVE | 原 14.2.35 仍报 RSC DoS high 漏洞 | 仅剩 2 个 postcss moderate，按 skill 接受残留 |
| 2026-07-19 | 安全 | 不跑 `npm audit fix --force` | 会把 Next 降到 9.x（skill 禁止陷阱） | postcss moderate 残留，非阻断 |
| 2026-07-19 | SEO | OG 图改普通路由 `/og` | 元数据路由加载器对路径单引号转义失败 | 构建通过，OG 图正常生成 |
| 2026-07-19 | SEO | 优先卡位差异化词 | 高量词竞争激烈，差异化词契合隐私卖点 | 低成本获取精准流量 |
| 2026-07-19 | 部署 | Vercel 生产部署（本地文件） | GitHub PAT 失效，改用本地源部署 | 交付不受影响，GitHub 待补令牌 |

---

## 五、后续建议（非阻断）

1. 提供有效 GitHub PAT → 执行 `scripts/sync-github.mjs` 整库同步，补全仓库。
2. 若订阅收入规模化，引入 Vercel Functions + PayPal webhook 做服务端校验（消项 A）。
3. 持续为博客补充高量词长文（merge pdf / combine pdf 等），巩固 SEO。
