# MergeLocal 上线检查 · 2026-07-23 核对

> 核对时间：2026-07-23 12:15 GMT+8
> 生产部署：`dpl_7fM4VhKx6nhR` READY（CLI）
> GitHub：commit `946fa7af`
> 正式域名：`pdfmergenext.shop`

## 总览

| 状态 | 项数 | 编号 |
|------|------|------|
| ✅ 已完成 | 7 | 1/2/3/4/6/8/10 |
| 🟡 代码就绪但需外部配置 | 2 | 5 谷歌登录 / 7 GA4+热力 |
| 🔴 架构缺服务端 | 1 | 6 支付安全（非阻断，已知风险） |

---

## 逐项核对

### 1. 需求文档（PRD/架构/UIUX/Spec） — ✅ 完成
- `docs/PRD.md` `ARCHITECTURE.md` `UIUX.md` `SPEC.md` `launch-checklist-audit.md` `security-seo-report.md` 共 6 份。
- 代码引用均已同步到新域名。

### 2. MVP 脚手架 — ✅ 完成
- Next.js 15.5.20 + React 19 + TypeScript，组件分层 atoms/molecules/organisms/views。
- 8 个页面路由，59 个 .ts/.tsx 源文件。

### 3. 中英文 i18n — ✅ 完成
- `src/i18n/dict.ts` 约 190 key，中/英完整覆盖。
- 缺 key 回退 + console.warn；`<title>` 已随语言动态切换(DocumentTitle 组件)。
- `mergelocal-lang` cookie + `html lang` 服务端/客户端一致，hydration 无闪。

### 4. 亮黑 UI — ✅ 完成
- CSS Token 双套（light/dark），localStorage 持久化 + 首帧防闪烁脚本。
- 组件全程走 Token，无写死色值。

### 5. 谷歌登录 — 🟡 代码就绪，需配 GCP
- **✅ 代码**：OAuth2 popup 流程（GIS），纯前端，无需后端。
- **❌ 阻断**：`origin_mismatch` 报错。上次域名切换后 GCP 未同步。
- **修法**：去 Google Cloud Console → `200070339610-...` 这个 Client ID → Authorized JavaScript origins 加上：
  ```
  https://pdfmergenext.shop
  https://www.pdfmergenext.shop
  https://pdf-merge-next.vercel.app
  ```

### 6. 收付款（PayPal）— ✅ 功能完成 / 🔴 架构缺服务端
- **✅ 支付**：PayPal live 订阅模式，月付/年付 plan ID 已配 Vercel，Pro 限额解锁闭环已通。
- **🔴 安全风险（已知，不阻断）**：订阅信息存 `localStorage`（`mergelocal-sub`），用户可伪造 Pro 权益。纯前端工具可接受，规模化后需 Vercel Functions + PayPal webhook 验签。

### 7. GA4 + 热力监控 — 🟡 代码就绪，缺配置
- **✅ GA4**：`NEXT_PUBLIC_GA_ID` 已设 Vercel（encrypted），转化事件（file_added/merge_completed/purchase 等）已接入。
- **⚠️ 热力图**：Clarity 代码已写（`layout.tsx` 门禁 `NEXT_PUBLIC_CLARITY_ID`），但 **该环境变量未设**。不设则不加载，不报错。
- **⚠️ GA4 在中国大陆**：`google-analytics.com` 被墙，`ERR_CONNECTION_TIMED_OUT` 正常现象。

### 8. 移动端适配 — ✅ 完成
- 响应式断点 + 汉堡菜单(Home/Pricing/Blog/Contact) + 小屏语言切换。
- 375px 无横向溢出。

### 9. 安全检测 — ✅ 完成（前端层面）
- **✅ 已做**：CSP（Google/PayPal/Clarity 全栈）/ HSTS / X-Frame-Options(DENY) / X-Content-Type-Options / Referrer-Policy / Permissions-Policy。
- **✅** `npm audit` 仅 2 个 postcss moderate（构建期传递依赖，接受）。
- **✅** 无服务端路由（攻击面极小）。
- **⚠️ 订阅 localStorage**：纯前端存储可伪造（见第 6 项已知风险）。

### 10. SEO — ✅ 代码完成 / 🟡 待上线后验证
- **✅** sitemap.xml（7 条 URL，已指向新域名）。
- **✅** OG 图（`/og` route）、JSON-LD（WebApplication + FAQPage）、per-page metadata + canonical。
- **✅** SEO 博客 1 篇（中英双语，卡位 offline/local/private 趋势词）。
- **🟡 DNS**：新域名 DNS 已指向 Vercel `76.76.21.21` ✅，但待确认 HTTPS/SSL 全面生效。
- **🟡 待做**：Google Search Console 地址变更（旧域名→新域名）。

---

## 需要你动手的（3 件事）

| 优先级 | 做什么 | 怎么操作 |
|--------|--------|---------|
| 🔴 P0 | **Google OAuth 加白名单** | GCP Console → Credentials → 编辑 Client ID → Authorized JavaScript origins 加 `https://pdfmergenext.shop` + `https://www.pdfmergenext.shop` |
| 🔴 P0 | **Google Search Console** | 把旧属性 `pdf-merge-next.vercel.app` 做地址变更到 `pdfmergenext.shop` |
| 🟡 P1 | **CLARITY_ID** | 去 clarity.microsoft.com 建项目 → 把 Project ID 填到 Vercel `NEXT_PUBLIC_CLARITY_ID` |

---

## 决策日志

- `[2026-07-22] 域名切换` — pdf-merge-next.vercel.app → pdfmergenext.shop — 10 文件部署，旧域名未设 301（设定后又被人/系统清除） — 影响：旧域名仍可直接访问但无重定向
- `[2026-07-22] DNS` — A 记录已指向 Vercel 76.76.21.21 — HTTPS/SSL Vercel 自动签发中
- `[2026-07-23] 核对` — 底线：代码 7 项完成，2 项缺外部配置（Google+Clarity），1 项架构缺服务端（订阅 localStorage，已知不阻断）
