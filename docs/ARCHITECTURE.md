# MergeLocal（pdf-merge-next）架构文档

> 文档性质：**回溯性形式化（Retrospective Formalization）**。
> 本文档反映产品**已上线、真实落地**的技术决策，所有事实均标注 `file:line` 出处，基于仓库源码核实（核实日期：2026-07-19）。
> 产品定位：100% 浏览器端 PDF 合并，本地合并、零上传、纯前端无后端（`README.md:3`、`README.md:18`、`next.config.mjs:25`）。

---

## 1. 技术栈总览

| 维度 | 选型 | 出处 |
|------|------|------|
| 前端框架 | **Next.js 14（App Router）**，`next@^14.2.15` | `package.json:24` |
| 语言 | **TypeScript 5.5** | `package.json:39`、`tsconfig.json` |
| 样式 | **Tailwind CSS 3.4** + 设计 Token（CSS 变量） | `package.json:38`、`tailwind.config.ts:1`、`app/globals.css:8` |
| 合并/抽取引擎 | **pdf-lib 1.17.1**（Web Worker 内） | `package.json:25`、`src/workers/engine.worker.ts:3` |
| 解析/缩略图 | **pdfjs-dist 4.6**（Web Worker 内） | `package.json:26`、`src/workers/parser.worker.ts:4` |
| 图标 | **lucide-react 0.439** | `package.json:23` |
| 状态管理 | **Zustand 4.5**（自定义 `useAppStore`） | `package.json:29`、`src/store/useAppStore.ts:1` |
| 拖拽排序 | **@dnd-kit**（core/sortable/utilities） | `package.json:16-18` |
| 字体 | **@fontsource 本地自托管**（Inter / Noto Sans SC / JetBrains Mono），零外部请求 | `app/layout.tsx:5-11` |
| 部署 | **Vercel**（零配置，Next.js Preset） | `README.md:48-50`、`.vercel/` 目录存在 |
| 服务端 | **无**。无任何 API Route / Server Action / 数据库 / Supabase | `next.config.mjs:25`；全仓 grep `route.ts`/`cookies()`/`getServerSideProps` 均无匹配（见 §3 核实） |

### 1.1 为何"无后端 / 无 Supabase"

核心卖点是**隐私优先、文件零上传**（`README.md:18`：`无后端、无上传、无账号、无追踪`；`app/layout.tsx:27` 描述：`Files never leave your device`）。

- 全部解析（`parseFile`）、合并（`mergeFiles`）、抽取、排序、旋转均在浏览器 Web Worker 内完成（`src/lib/workers.ts`、`src/workers/engine.worker.ts`、`src/workers/parser.worker.ts`）。
- `next.config.mjs:25` 明确注释：`// 纯客户端工具：不引入任何服务端逻辑；构建时跳过 ESLint`。
- 全仓源码核验：**`app/` 与 `src/` 下均无任何 `route.ts`、API Handler、`cookies()`、`getServerSideProps`、`NextRequest`、`server-only`**（grep 仅在 `node_modules` 命中，项目源码 0 命中）。
- 结论：无后端意味着无服务端订阅校验、无用户库、无文件落盘。这与"部署到任意静态/Serverless 平台都不会触达用户文件"（`README.md:20`）一致。

---

## 2. 选型对比矩阵

> 说明：下面对比基于"上线后的真实落点"反推当时的决策空间。括号内为最终选择。

### 2.1 前端框架：Next.js App Router ✅ vs Vite+React vs Remix

| 候选 | 优势 | 劣势（对本产品） | 结论 |
|------|------|------|------|
| **Next.js App Router（选）** | 内置 `Metadata` / `Viewport` API 可做服务端注入 SEO（`app/layout.tsx:20-100`）、`jsonLd` 结构化数据利于出海搜索收录（`app/layout.tsx:103-143`）；App Router 文件路由清晰；`next/script` 管理第三方 SDK（`app/layout.tsx:184-200`） | 对纯静态工具略重，引入 Node 运行时 | **选**：SEO 与结构化数据是出海获客关键，且团队已用 React |
| Vite + React (SPA) | 极轻、构建快 | 无内置 SSR/Metadata，SEO 需额外预渲染；第三方脚本管理需手写 | 弃：出海需要 SEO 收录，SPA 首屏无语义 HTML |
| Remix | 强 SSR/数据加载 | 路由 loader 偏向有后端数据；本产品无服务端数据 | 弃：无后端收益，迁移成本高于收益 |

### 2.2 PDF 处理库：pdf-lib ✅（合并）+ pdfjs-dist ✅（解析） vs hummus

> 本产品**同时**使用两个库，分工明确——这是真实落地的关键决策：**pdf-lib 负责合并/抽取，pdfjs-dist 负责解析与缩略图**。

| 候选 | 用途适配 | 劣势 | 结论 |
|------|------|------|------|
| **pdf-lib（合并/抽取，选）** | `copyPages` 原样拷贝页面对象，**保真无重渲染画质损失**（`engine.worker.ts:35`）；支持 `ignoreEncryption` 探测加密（`engine.worker.ts:25`） | 不能渲染页面做缩略图 | **选作合并引擎** |
| **pdfjs-dist（解析/缩略图，选）** | 可读取页数、尺寸并 `OffscreenCanvas` 渲染首页缩略图（`parser.worker.ts:29-44`）；自带 cmap/standard_fonts 处理中文 PDF | 合并需重渲染，易掉保真 | **选作解析/缩略图引擎** |
| hummusjs | Node 侧 PDF 操作强 | **无浏览器构建**、多年未维护、无法在 Worker 内渲染缩略图 | 弃：浏览器/Worker 不可用 |

> 决策要点：合并必须保真 → pdf-lib；缩略图必须渲染 → pdfjs。两者皆跑在 Web Worker 内（`lib/workers.ts:13-31`），主线程不阻塞 UI。

### 2.3 部署：Vercel ✅ vs Netlify vs 自托管

| 候选 | 优势 | 劣势 | 结论 |
|------|------|------|------|
| **Vercel（选）** | 零配置 Next.js Preset（`README.md:50`）；内置环境变量与预览部署；与 Next 生态最佳 | 锁定平台、需联网 CLI | **选**：团队已在用，零运维 |
| Netlify | 类似静态托管 | Next 集成略逊、规则需手写 | 弃：无差异化收益 |
| 自托管（Docker/Nginx） | 完全可控 | 需运维、无自动预览、沙箱环境 git 被墙难推（`README`/环境约束见 §5） | 弃：违背"零运维"原则 |

### 2.4 i18n 方案：自研 dict ✅ vs react-i18next vs next-intl

| 候选 | 优势 | 劣势（对本产品） | 结论 |
|------|------|------|------|
| **自研 dict + core（选）** | 零依赖、单例 `t()` 可在 store 非 React 上下文调用（`core.ts:44-68`）；`useSyncExternalStore` 订阅（`provider.tsx:35`）；缺失 key 回退 zh（`core.ts:49-61`） | 需手工维护双表一致性（已有 `check-i18n.mjs` 校验） | **选**：状态机（zustand）也要翻译，需脱离 React 上下文的 `t()` |
| react-i18next | 生态成熟 | 重、需 Provider、store 内调用不便 | 弃：过度设计 |
| next-intl | App Router 友好、支持 SSR | 绑定 Next 路由、store 内调用需额外桥接 | 弃：本产品字符串量小，收益不足 |

---

## 3. 系统架构（纯客户端数据流）

### 3.1 数据流（无服务端）

```
┌─────────────────────────────────────────────────────────────────────┐
│  浏览器（唯一执行环境，文件从不离开本机）                                │
│                                                                       │
│  DropZone / 文件选择器                                                 │
│        │  File[]                                                       │
│        ▼                                                               │
│  useAppStore.addFiles()         ← 限额/去重/类型校验                    │
│   (useAppStore.ts:164-291)                                           │
│        │  逐文件 parseFile(file)                                       │
│        ▼                                                               │
│  ┌─────────────── Parser Worker (pdfjs) ───────────────┐              │
│  │ getDocument → numPages / viewport / 首页缩略图       │              │
│  │ (parser.worker.ts:20-57) 加密/损坏→status=encrypted  │              │
│  └───────────────────────┬──────────────────────────────┘              │
│                          │ {pageCount, thumbnail} (transferable)        │
│                          ▼                                              │
│  useAppStore.files[]  (FileItem 状态: parsing→ready/error)            │
│        │  runMerge()  →  mergeFiles(plan)                              │
│        ▼                                                               │
│  ┌─────────────── Engine Worker (pdf-lib) ──────────────┐             │
│  │ PDFDocument.load + copyPages（保真）+ save()         │             │
│  │ (engine.worker.ts:16-49) 加密→抛 ENC_PREFIX 错误      │             │
│  └───────────────────────┬──────────────────────────────┘             │
│                          │ Uint8Array (transferable)                   │
│                          ▼                                              │
│  Blob → ResultPanel  →  浏览器下载 (file-saver / <a download>)        │
└─────────────────────────────────────────────────────────────────────┘
        │                        │                        │
        ▼                        ▼                        ▼
  subscription(localStorage)   lang(localStorage)    theme(localStorage)
  mergelocal-sub             pdf-merge-lang         mergelocal-theme
  (useAppStore.ts:70,127-143) (core.ts:12-17)        (theme.ts:2,21-23)
```

### 3.2 关键事实与出处

- **Web Worker 单例**：`getParser()` / `getEngine()` 各持一个 Worker 句柄，主线程只持有 `File` 引用，字节物化在 Worker 内（`lib/workers.ts:9-31`）。
- **缩略图零拷贝回传**：`ImageBitmap` 通过 `postMessage(result, [bitmap])` transferable 回传（`parser.worker.ts:57`）；合并结果 `outBytes.buffer` 同样 transferable（`engine.worker.ts:47-49`）。
- **无服务端**：数据流的每一步都在浏览器内；合并产物直接 `Blob` 下载，不经过任何网络上传（`useAppStore.ts:436-441`）。
- **持久化（全部 localStorage）**：
  - 订阅：`mergelocal-sub`，`readStoredSub/writeStoredSub`（`useAppStore.ts:70,127-143`）
  - 用户：`mergelocal-user`，`setStoredUser/clearStoredUser`（`auth.ts:51,112-126`）
  - 语言：`pdf-merge-lang`，`detectLang` 优先读存储，否则按 `navigator.language`（`core.ts:9-18`，`dict.ts:396`）
  - 主题：`mergelocal-theme`，`initTheme`/`setStoredTheme`（`theme.ts:2,12-38`）

---

## 4. 关键模块设计

### 4.1 认证 —— Google OAuth2 Popup（无后端校验）

- **流程**：使用 Google Identity Services (GIS) 的 **OAuth 2.0 popup**（`google.accounts.oauth2`，而非 FedCM/One Tap），绕开第三方 Cookie 限制（`auth.ts:1-3`）。
  1. `initTokenClient({ client_id, scope:'openid email profile', callback })`（`GoogleLoginButton.tsx:35-43`）
  2. 用户点击 → `requestAccessToken()` 弹窗授权（`GoogleLoginButton.tsx:54-60`）
  3. 拿到 `access_token` → 调用 `https://www.googleapis.com/oauth2/v3/userinfo` 换取用户信息（`auth.ts:80-97`）
  4. `login(user)` 写入 store + `localStorage`（`useAppStore.ts:537-540`、`auth.ts:112-118`）
- **Client ID**：`NEXT_PUBLIC_GOOGLE_CLIENT_ID`（`.env.local:4`；`GoogleLoginButton.tsx:9-11` 兜底硬编码同值）。
- **无后端校验**：token 仅在客户端换取用户信息，**服务端不校验、不存储、不续期**；刷新后从 `localStorage` 恢复（`GoogleLoginButton.tsx:23-28`）。
- 登出：`clearStoredUser` + `google.accounts.id.disableAutoSelect()`（`auth.ts:129-136`、`useAppStore.ts:542-550`）。

### 4.2 支付 —— PayPal 订阅（无服务端 capture/webhook）

- **模式**：PayPal **Billing Plan 订阅**（`subscription.create`），非一次性支付。
- **SDK 加载**：动态注入 `https://<env>.paypal.com/sdk/js?...&vault=true&intent=subscription`（`PricingPage.tsx:82-89`），单例 `sdkPromise` 防重复注入（`PricingPage.tsx:66-91`）。
- **创建订阅**：`createSubscription → actions.subscription.create({ plan_id })`（`PricingPage.tsx:174-176`）。`plan_id` 来自环境变量：
  - `NEXT_PUBLIC_PAYPAL_PLAN_MONTHLY` / `NEXT_PUBLIC_PAYPAL_PLAN_YEARLY`（`PricingPage.tsx:60-63`）
- **批准回调**：`onApprove` 直接 `setSubscription({plan, since})` 写入 store + `localStorage`（`PricingPage.tsx:177-183`、`useAppStore.ts:552-555`）。**无服务端 capture、无 webhook、无服务端权益下发**。
- **前置条件**：Billing Plan 须预先在 PayPal 后台/REST API 创建（`scripts/create-paypal-plans.mjs`），价格为 $7/月、$49/年（`create-paypal-plans.mjs:104-115`）。
- **门禁**：PayPal 按钮仅在已登录 Google 账号后渲染（`PricingPage.tsx:167,233-263`）；未配置 plan_id 时静默不渲染（`PricingPage.tsx:169,241-244`）。

### 4.3 i18n —— 自研字典 + 单一翻译函数

- **字典**：`dict.ts` 双表 `zh` / `en`，所有 key 必须两表补齐（`dict.ts:5-393`，注释 `dict.ts:3-4`）。
- **检测**：`detectLang()` 模块加载时探测——SSR 回退 `zh`；客户端优先读 `localStorage('pdf-merge-lang')`，否则按 `navigator.language` 正则判断（`core.ts:9-18`）。
- **订阅机制**：`setLang` 写入存储并通知 `listeners`（`core.ts:27-35`）；React 侧用 `useSyncExternalStore` 同步 `<html lang>`（`provider.tsx:35-45`）。
- **缺失 key 容错**：优先回退 `zh` 并 `console.warn`；若 `zh` 也无则返回 key（**不白屏**）（`core.ts:49-61`）。
- **非 React 调用**：store 内 `addToast(t('...'))` 直接调用单例 `t()`（`useAppStore.ts:17,178` 等），满足状态机也要翻译的需求。
- **校验脚本**：`scripts/check-i18n.mjs`（`package.json:13`）用于 CI 检查双表一致性。

### 4.4 主题 —— CSS 变量切换 + localStorage

- **Token 定义**：`app/globals.css` 中 `:root`（浅色，`:8-53`）与 `[data-theme='dark']`（深色，`:55-92`）定义全部语义色/阴影变量；Tailwind 仅引用变量、禁止硬编码色值（`tailwind.config.ts:10-53`）。
- **防闪烁**：`layout.tsx` 内联首屏脚本在 hydration 前读 `mergelocal-theme`（无则按 `prefers-color-scheme` 推断）并设置 `data-theme`（`layout.tsx:146-158,168`）。
- **切换**：`useTheme` hook 调用 `document.documentElement.dataset.theme = t` + `setStoredTheme`（`useTheme.ts:23-29`、`theme.ts:21-38`）。
- **无障碍**：`prefers-reduced-motion` 全局降级动画（`globals.css:127-140`）；`viewport.themeColor` 随系统（`layout.tsx:92-100`）。

### 4.5 CSP —— next.config.mjs 放行 Google / PayPal / GA

- **策略**：`next.config.mjs` 中 `csp` 数组通过 `headers()` 以 `Content-Security-Policy` 下发（`next.config.mjs:2-21,28-52`）。
- **关键放行项**：
  - `script-src`：`accounts.google.com` / `apis.google.com` / `*.paypal.com` / `www.googletagmanager.com` + `'unsafe-inline'` + `'unsafe-eval'`（`next.config.mjs:5`）
  - `connect-src`：googleapis / oauth2 / `*.paypal.com` / GA（`next.config.mjs:13`）
  - `frame-src`：Google OAuth 弹窗 + PayPal 弹窗（`next.config.mjs:17`）
  - `worker-src 'self' blob:`：pdfjs worker 走 blob（`next.config.mjs:15`）
- **其他安全头**：`X-Frame-Options: DENY`、`X-Content-Type-Options: nosniff`、`HSTS`、`Referrer-Policy`、`Permissions-Policy`（禁用 camera/mic/geo）（`next.config.mjs:34-48`）。

---

## 5. 技术约束与风险

| # | 约束 / 风险 | 事实与出处 | 影响 / 建议 |
|---|------|------|------|
| R1 | **纯静态无后端** | 全仓无 API/Server Action（§1.1 核实） | 无法做服务端订阅校验、无法防滥用、无服务端分析。属产品核心取舍，保留。 |
| R2 | **沙箱 git 被墙，依赖 Vercel CLI 部署** | 环境约束（团队已知）；`.vercel/` 存在 | 部署走 `vercel` CLI 而非 `git push`；需保证本地能联网推 Vercel。 |
| R3 | **PayPal Billing Plan 需预创建且与 Client ID 同源** | `create-paypal-plans.mjs:7`：沙箱 plan 必须绑定沙箱 Client ID；env 缺失则按钮不渲染（`PricingPage.tsx:169`） | 上线 live 前须用 live Client ID+Secret 重建 plan 并写入 `NEXT_PUBLIC_PAYPAL_PLAN_*`；否则 Pro 订阅不可用。 |
| R4 | **当前 `.env.local` 为 `NEXT_PUBLIC_PAYPAL_ENV=sandbox`** | `.env.local:3` | 生产构建若沿用 sandbox，订阅**不会产生真实扣款**，Pro 实为"测试态"。上线前须切 `live` 并配齐 live plan id。 |
| R5 | **加密/损坏 PDF 解析失败处理** | 合并：`EncryptedPDFError` → 抛 `__PDF_ENC__:` 前缀错误，store 本地化为"已加密无法合并"（`engine.worker.ts:26-30`、`useAppStore.ts:26,471-474`）；解析：正则识别 `encrypted/password` → `status:'encrypted'`（`parser.worker.ts:60-67`） | 已覆盖加密提示；损坏（非加密）PDF 走通用 `error` 文案（`dict.ts:72,266`）。建议补充损坏样例的针对性提示。 |
| R6 | **技术上限 vs 商业限额（存在文案/实现不一致）** ⚠️ | 实现层：`constants.ts` —— 单文件技术上限 **300MB**（`:2`）、桌面总量 **1800MB**（`:3`）、移动 **180MB**（`:4`）；Free 商业限额 5 文件/100MB/200MB（`:7-9`）；Pro 商业限额 100 文件/**300MB**/1800MB（`:12-14`）。**但定价页 UI 文案写 Pro 单文件 500MB、总 2GB**（`dict.ts:153,154,347,348`）。 | **真实落地的强制上限是 300MB / 1800MB，而定价页宣称 500MB / 2GB**——用户按 UI 期待上传会被 Free/技术上限拦截，产生预期落差。建议统一：要么抬高 `PRO_MAX_*` 至与文案一致（受 pdf-lib/内存约束），要么修正 `dict.ts` 文案与 `constants.ts` 对齐。 |
| R7 | **无服务端订阅校验：取消订阅后前端短期仍显示 Pro** | `subscription` 仅存 `localStorage`，无任何后端校验/失效机制（`useAppStore.ts:65-68,552-560`）；PayPal `onCancel` 静默（`PricingPage.tsx:187-189`）；无 webhook 回写 | 用户取消 PayPal 订阅后，本地 `mergelocal-sub` 不清空，仍显示 Pro 直至手动清存储。属已知"软权益"风险，当前可接受（无服务端无法避免），建议至少在定价页注明"权益以 PayPal 为准"。 |
| R8 | **CSP 含 `'unsafe-inline'` 与 `'unsafe-eval'`** | `next.config.mjs:5` | 因 Next 运行时 + 第三方 SDK 需要，削弱了 CSP 防护。如后续可改为 nonce/hash 更佳，但当前为务实取舍。 |
| R9 | **付费 plan id / GA id 不在 `.env.local`** | `.env.local` 仅含 `PAYPAL_CLIENT_ID`、`PAYPAL_ENV`、`GOOGLE_CLIENT_ID`（`:2-4`）；`NEXT_PUBLIC_PAYPAL_PLAN_MONTHLY/YEARLY`、`NEXT_PUBLIC_GA_ID` 仅在 Vercel 环境变量中（引用：`PricingPage.tsx:60-63`、`layout.tsx:18`、`analytics.ts:15`） | 缺失时：plan id 空→按钮不渲染（`PricingPage.tsx:169`）；GA_ID 空→不加载 GA（`layout.tsx:182`、`analytics.ts:17-18`）。属静默降级，部署清单须核对。 |
| R10 | **移动端 180MB 总量硬上限** | `runMerge` 按 `isMobileView()`（≤768px）启用 180MB（`useAppStore.ts:401-412`、`constants.ts:38-41`） | 与桌面 1800MB 差异 10×，移动用户易触顶；属内存保护，保留。 |

---

## 6. 部署架构

### 6.1 平台与构建

- **平台**：Vercel，零配置 Next.js Preset（`README.md:48-50`）。站点域名 `https://pdf-merge-next.vercel.app`（`layout.tsx:17`）。
- **构建命令**（package.json）：
  ```
  "build": "node scripts/copy-pdfjs-assets.mjs && next build"   # package.json:10
  "dev":   "node scripts/copy-pdfjs-assets.mjs && next dev"     # package.json:9
  ```
- **pdfjs 资源自托管**：`scripts/copy-pdfjs-assets.mjs` 在 build/dev 前把 `pdf.worker.min.mjs`、`cmap/`、`standard_fonts/` 复制到 `public/`，实现**零外部请求**（`copy-pdfjs-assets.mjs:1-78`；`parser.worker.ts:9` 指向 `/pdf.worker.min.mjs`）。这些文件被 `.gitignore` 忽略、由构建生成（`README.md:46`）。

### 6.2 环境变量清单（NEXT_PUBLIC_*，构建期内联）

| 变量 | 用途 | 出处 | 当前 `.env.local` 是否含 |
|------|------|------|------|
| `NEXT_PUBLIC_GOOGLE_CLIENT_ID` | Google OAuth2 Client ID | `GoogleLoginButton.tsx:9-11`、`.env.local:4` | ✅ 含 |
| `NEXT_PUBLIC_PAYPAL_CLIENT_ID` | PayPal SDK client-id | `PricingPage.tsx:9-10`、`.env.local:2` | ✅ 含 |
| `NEXT_PUBLIC_PAYPAL_ENV` | `sandbox` / `live`，决定 SDK 域名与是否真实扣款 | `PricingPage.tsx:14-19`、`.env.local:3` | ✅ 含（当前 `sandbox`） |
| `NEXT_PUBLIC_PAYPAL_PLAN_MONTHLY` | 月付 Billing Plan ID | `PricingPage.tsx:61` | ❌ 仅 Vercel |
| `NEXT_PUBLIC_PAYPAL_PLAN_YEARLY` | 年付 Billing Plan ID | `PricingPage.tsx:62` | ❌ 仅 Vercel |
| `NEXT_PUBLIC_GA_ID` | GA4 测量 ID；为空则不加载分析 | `layout.tsx:18`、`analytics.ts:15,17-18` | ❌ 仅 Vercel |

> 注意：所有变量均为 `NEXT_PUBLIC_*` 前缀——意味着它们被**编译进客户端 bundle**（公开的），符合"无密钥、无后端"的设计；不承载任何机密（`create-paypal-plans.mjs` 中的 `PAYPAL_SECRET` 仅用于本地建 plan，绝不上线）。

### 6.3 部署核对清单（上线 live 前）

1. 在 PayPal live 环境用 live Client ID+Secret 运行 `create-paypal-plans.mjs`，得到 live plan id（`create-paypal-plans.mjs:1-8,99-118`）。
2. Vercel 环境变量：`NEXT_PUBLIC_PAYPAL_ENV=live` + 填入 live `NEXT_PUBLIC_PAYPAL_PLAN_MONTHLY/YEARLY` + `NEXT_PUBLIC_GA_ID`。
3. 修正 R6（Pro 文案 500MB/2GB 与实现 300MB/1800MB 不一致）。
4. 确认 `NEXT_PUBLIC_GOOGLE_CLIENT_ID` 的授权域包含 `pdf-merge-next.vercel.app`。

---

## 附：核心源码索引

| 关注点 | 文件 |
|------|------|
| 依赖与脚本 | `package.json` |
| CSP / 安全头 | `next.config.mjs` |
| 限额/上限/getPlanLimits | `src/lib/constants.ts` |
| 全局状态（zustand） | `src/store/useAppStore.ts` |
| Google OAuth2 | `src/lib/auth.ts`、`src/components/molecules/GoogleLoginButton.tsx` |
| PayPal 订阅 | `src/views/PricingPage.tsx`、`scripts/create-paypal-plans.mjs` |
| i18n 字典/核心/Provider | `src/i18n/dict.ts`、`src/i18n/core.ts`、`src/i18n/provider.tsx` |
| 主题 CSS 变量 | `app/globals.css`、`src/lib/theme.ts`、`src/hooks/useTheme.ts` |
| 解析 Worker（pdfjs） | `src/workers/parser.worker.ts`、`parser-worker-shim.ts` |
| 合并 Worker（pdf-lib） | `src/workers/engine.worker.ts` |
| Worker 调度 | `src/lib/workers.ts` |
| 布局/SEO/第三方脚本 | `app/layout.tsx` |
| 构建资源复制 | `scripts/copy-pdfjs-assets.mjs` |

---

*本文档由首席架构师（高见远）基于仓库源码逐条核实后产出，反映 pdf-merge-next / MergeLocal 真实已落地的技术决策。所有结论可经 `file:line` 回溯。*
