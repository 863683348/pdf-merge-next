# MergeLocal 上线检查 · dafeixiang-saas-launch 10 项核对（更新版 · v3）

> 核对时间：2026-07-19 15:24 GMT+8 ｜ 生产状态：`READY`（最新部署 `dpl_GKhsobUyQJvG2ChtehRDQArRjFkN`）
> 架构前提：MergeLocal 是**纯浏览器端、零上传、无后端**应用（无 Supabase、无 API 路由）。
> 因此 skill 里"服务端验签 / RLS / 配额服务端强制 / 上传 magic-byte 校验"等项**按设计不适用**。
> 本次核对基于**当前代码真实状态**（逐项 grep / read 验证，非凭记忆）。

## 总览

| 状态 | 项数 | 编号 |
|------|------|------|
| ✅ 已完成 | 10 | 1 需求文档 / 2 脚手架 / 3 i18n / 4 亮黑UI / 5 谷歌登录 / 6 收付款 / 7 GA4+热力 / 8 移动端 / 9 安全 / 10 SEO |
| 🟡 部分完成 | 0 | — |
| ❌ 未完成 | 0 | — |

**结论：10 项全部完成。第 7 项 GA4 转化漏斗 + Microsoft Clarity 热力图已于本轮回填（代码落地、构建通过、已部署）。除 #6 的"无服务端订阅校验"属纯前端架构性已知风险（非阻断）外，无功能性硬伤。**

---

## 逐项核对（代码验证版）

### 1. 需求文档（PRD / 架构 / UIUX + Spec）—— ✅ 完成
- `docs/PRD.md`、`docs/ARCHITECTURE.md`、`docs/UIUX.md`、`docs/SPEC.md` 四份均存在（`ls docs/` 确认）。
- 由 PM/架构/设计三专家基于真实代码产出，含 RICE、选型矩阵、设计 Token、Spec 契约与验收标准。
- 属流程 artifact，已补齐。

### 2. MVP 搭建（脚手架）—— ✅ 完成
- `app/` 路由、`layout.tsx`、组件分层齐全；`tsc --noEmit` 与 `next build`（Next 15.5.20）均通过。
- i18n 基建 / 主题 Token / mobile-first 骨架已随脚手架一次性落地。

### 3. 中英文 i18n —— ✅ 完成
- `src/i18n/dict.ts` 含 `zh`/`en` 各约 190 key；`t()` 缺 key 回退；TopBar 切换器已接入；全仓渲染文本无硬编码中文。
- **`<title>` 已随语言切换**：新增 `src/components/atoms/DocumentTitle.tsx`，订阅 `lang` + `pathname`，客户端按路由动态更新 `document.title`（首页/定价/blog/联系/隐私/条款）。

### 4. 亮黑 UI 设定 —— ✅ 完成
- `app/globals.css` 双套 CSS 变量（`:root` + `[data-theme='dark']`）；`ThemeToggle` + localStorage 持久化 + 首帧防闪烁脚本（`layout.tsx` `themeBootstrap`）；组件全程走 Token，无写死色值。

### 5. 谷歌登录 —— ✅ 完成（纯客户端，设计如此）
- OAuth2 popup token 模式（绕开 FedCM / 第三方 Cookie）；状态存 localStorage + Zustand。
- 无服务端会话——纯前端架构下属预期内，非缺陷。

### 6. 收付款对接（PayPal 订阅）—— ✅ 完成
**已完成**：
- SDK 切 `subscription` 模式；`NEXT_PUBLIC_PAYPAL_ENV=live`；live Client ID + 两 live plan ID 已写 Vercel；生产部署 READY。
- **付费→Pro 权益解锁闭环已接通**（上一轮硬伤已修）：
  - `useAppStore.ts:167-168` `addFiles` 读 `state.subscription` → `getPlanLimits(isPro)`；
  - `constants.ts` 定义 `PRO_MAX_FILES=100` / `PRO_MAX_SINGLE_FILE_MB=300` / `PRO_MAX_TOTAL_FILE_MB=1800` + `getPlanLimits(isPro)`；
  - `ActionBar.tsx:14,18` 读订阅状态走动态档位。
- 付费后限额正确放宽到 Pro 档；订阅状态存 store 供 UI 展示。

**已知风险（架构性，非阻断）**：纯前端订阅，无服务端 capture / webhook 验签，Pro 权益存 localStorage 理论上可被伪造。对纯工具产品风险可控，若后续要规模化可引入 Vercel Functions + PayPal webhook 校验。

### 7. GA4 + 热力监控 —— ✅ 完成（本轮回填）
**已完成**：
- GA4 脚本仅生产加载（`NODE_ENV==='production' && GA_ID`）✅
- **SPA 路由 pageview 已接通**：`src/components/atoms/AnalyticsPageview.tsx` 用 `usePathname` + `gtagPageview` 在路由切换时补发；已在 `layout.tsx:192` 挂载；`ga4-init` 内联脚本已去掉 `page_path` 避免首屏重复计数 ✅
- **GA4 转化漏斗事件已接通**（本轮回填，上次 429 打断未落地）：
  - `useAppStore.ts` `addFiles` → `gtagEvent('file_added', {count, total_files, is_pro})`
  - `useAppStore.ts` `runMerge` 成功 → `gtagEvent('merge_completed', {files, pages})`
  - `useAppStore.ts` `runMerge` 失败 → `gtagEvent('merge_failed', {reason})`
  - `useAppStore.ts` `login` → `gtagEvent('login', {method:'google'})`
  - `PricingPage.tsx` 订阅按钮 `createSubscription` → `gtagEvent('begin_checkout', {currency:'USD', value, items})`
  - `PricingPage.tsx` 订阅成功 `onApprove` → `gtagEvent('purchase', {transaction_id, currency, value, items})`（标准 GA4 电商事件，可在 GA4 货币化报表看到收入）
- **Microsoft Clarity 热力图已接入**（门禁 `NEXT_PUBLIC_CLARITY_ID`，仅生产加载）：`layout.tsx` 加 `<Script id="ms-clarity">`，未配置 ID 时为 no-op ✅
- 外部脚本（`ga4` / `gsi` / `paypal`）均加 `crossOrigin="anonymous"` ✅

**待用户确认（不阻断）**：Vercel 中 `NEXT_PUBLIC_GA_ID` / `NEXT_PUBLIC_CLARITY_ID` 为 encrypted，**我无法读取明文**——请确保：① `NEXT_PUBLIC_GA_ID` 是你真实的 `G-xxxxxxxx` Measurement ID；② 若要用热力图，去 clarity.microsoft.com 建项目，把 Project ID 填入 Vercel 的 `NEXT_PUBLIC_CLARITY_ID`。两者任一为空则对应功能静默不加载。

### 8. 移动端适配 —— ✅ 完成
- 375px 无横向滚动；流式布局 + 响应式断点到位；tap 目标够大。
- **移动端汉堡菜单已加**：`TopBar.tsx` 小屏下显示 `Menu` 图标按钮，展开后露出 Home / Pricing / Blog / Contact 导航链接，并保留语言切换。

### 9. 安全检测 —— ✅ 完成
- 安全响应头齐全：`next.config.mjs` 含 CSP / X-Frame-Options(DENY) / HSTS / X-Content-Type-Options / Referrer-Policy / Permissions-Policy ✅
- `public/.well-known/security.txt` 已建（269B）✅
- **依赖漏洞清 0 high**：Next `14.2.35 → 15.5.20` + React 19 + pdfjs 4.x，`npm audit` 仅剩 2 个 `postcss` 构建期传递依赖（按 skill 不跑 `--force`，接受残留）✅
- 应用层无 XSS（`dangerouslySetInnerHTML` 仅用于 theme 引导脚本与 JSON-LD，内容均自生成、无用户输入）；密钥未泄漏；下载文件名安全生成；无服务端路由 → 攻击面极小 ✅
- 不适用（纯前端）：Supabase RLS、service_role、上传 magic-byte 校验。

### 10. SEO —— ✅ 完成
- `layout.tsx` metadata 含 title/description/keywords（含趋势词 `offline/local/private PDF merge`、`PDF 合并 不上传/隐私/本地/离线/免注册/无水印`）/ hreflang / OG(`/og`) / Twitter / robots ✅
- JSON-LD（WebApplication + FAQPage）服务端注入，offers 已扩为 `$0/$7/$49` 三档 ✅
- `public/sitemap.xml` 含 **7 条 URL**（首页/定价/blog 文章/blog 列表/contact/privacy/terms），带 priority + lastmod ✅
- `app/og/route.tsx` 动态生成 1200×630 OG 图（绕开 Next 元数据路由对路径单引号的转义 bug）✅
- `/pricing` `/blog` `/contact` `/privacy` `/terms` 各加独立 `metadata` + `canonical` ✅
- 新增 SEO 博客 `app/blog/why-local-offline-pdf-merge/page.tsx`（6775B，中英双语，卡位差异化趋势词）✅

---

## 残留缺口 · 结论与建议

| 优先级 | 项 | 问题 | 建议 |
|--------|----|------|------|
| 🟡 待确认 | #7 ID | Vercel `NEXT_PUBLIC_GA_ID` / `NEXT_PUBLIC_CLARITY_ID` 为加密值，我无法读明文 | 你确认 `NEXT_PUBLIC_GA_ID` 是真实 `G-` Measurement ID；要用热力图则把 Clarity Project ID 填入 `NEXT_PUBLIC_CLARITY_ID`（不填则不加载，已部署代码不报错） |
| 🟢 可选 | #6 安全 | 纯前端订阅可伪造 | 规模化后加服务端 webhook 校验 |

**一句话**：10 项全部完成，当前生产部署 `dpl_GKhsobUyQJvG2ChtehRDQArRjFkN` READY。仅剩 #7 的"确认 GA/Clarity ID 是否为真实值"需你后台核对（不填则对应功能静默不加载，不影响上线）。#6 的纯前端订阅无服务端 webhook 验签属规模化后的安全升级项，非阻断。本轮回合还顺手修了用户截图反馈的控制台问题：CSP 放行 Clarity、补 favicon、修复语言 hydration 不匹配。

---

## 决策日志（本次核对相关）

- `[2026-07-19 14:52] Phase 5/10 - 重新核对 10 项清单 - 距上次 5/5 已补完 #1/#6/#9/#10 - 现状 9 完成 / 1 部分(#7)`
- `[2026-07-19 14:52] #7 - 发现 gtagEvent 零调用（上次 429 打断未落地） - GA4 仅 pageview 无转化漏斗 - 需补接转化事件 + 热力图`
- `[2026-07-19] #9 - Next 升至 15.5.20 清 high CVE 已上线 - 仅 postcss 构建期传递依赖残留，按 skill 接受不 --force`
- `[2026-07-19 15:06] #7 - 回填 GA4 转化事件(file_added/merge_completed/merge_failed/login/begin_checkout/purchase) + Microsoft Clarity 热力图(layout 门禁 NEXT_PUBLIC_CLARITY_ID) - 构建通过 - 部署 dpl_3uQAWaADZWj7gkDo1oy8XQYAuSe9 READY - 10 项全部完成`
- `[2026-07-19 15:17] #3/#8/#Blog - 博客精选卡中文改英文(i18n blog.featured.*)、新增 DocumentTitle 客户端按语言刷新 document.title、TopBar 加移动端汉堡菜单(Home/Pricing/Blog/Contact) - 构建通过 - 部署 dpl_7gHk1UVCiTUBww95dGyrfx8vvMPz READY`
- `[2026-07-19 15:23] 控制台修复 - 用户截图显示 CSP 拦截 Clarity / React hydration #418 / favicon 404 - 修复：next.config.mjs 补 CSP 放行 *.clarity.ms、新增 public/favicon.svg 并在 layout metadata 引用、通过 cookie(mergelocal-lang) 让服务端与客户端首屏语言一致并重构 provider.tsx 使 t 函数基于 context lang - 构建通过 - 部署 dpl_GKhsobUyQJvG2ChtehRDQArRjFkN READY`
