# Spec - MergeLocal (pdf-merge-next) v1.0

> 生成日期：2026-07-19
> 基于：PRD v1.0 + 架构文档 v1.0 + UIUX 文档 v1.0
> 状态：待确认（回溯性形式化，产品已上线 live）
> 性质：本文档将"已上线真实实现"锁定为规格契约；标注【规划中】项不在本次锁定范围。

---

## 1. 产品定义
- **一句话描述**：100% 浏览器端 PDF 合并工具，本地合并、零上传，文件永不离开设备。
- **目标用户**：处理含敏感信息 PDF 的个人与轻量专业用户（法务/财务/学生），不愿为"合并"装软件或把机密交第三方。
- **核心问题**：主流工具（Smallpdf/iLovePDF）需上传到服务商服务器留存；PDF24 桌面版/Adobe 需装重型软件。零上传 + 免安装 + 跨平台浏览器即开即用，是明确市场空白。

## 2. MVP 范围（锁定——不在此列表的功能一律不做）

| 优先级 | 功能 | 验收标准摘要 | 状态 |
|--------|------|-------------|------|
| P0 | 本地合并·零上传（pdf-lib Worker 保真合并 + 页范围抽取 + 拖拽排序 + 加密拒绝） | Network 无任何第三方上传请求 | 【已实现】 |
| P0 | Free/Pro 文件限额门禁（getPlanLimits） | Free 超限弹 toast 并拒；Pro 解锁更高档位 | 【已实现】 |
| P0 | 谷歌登录（OAuth2 popup，无后端） | 授权→拿用户信息→写 localStorage | 【已实现】 |
| P0 | PayPal 订阅（$7/月·$49/年·live） | 订阅成功→subscription 写 localStorage→限额切 Pro | 【已实现】 |
| P0 | 中英文 i18n（zh/en 双表，缺 key 回退 zh） | 切 en 无残留中文；插值正确 | 【已实现】 |
| P0 | 亮/黑双主题（CSS 变量 + localStorage + 防闪） | 刷新保持选择；全站 Token 跟随 | 【已实现】 |
| P0 | 6 路由页（/、/pricing、/contact、/privacy、/terms、/blog 占位） | 核心路由可访问 | 【已实现】 |
| P0 | 安全头（CSP / X-Frame-Options / HSTS / nosniff / Referrer-Policy） | next.config.mjs 已下 | 【已实现】 |
| P1 | 修复定价页文案 ≠ 代码限额（见 §9 偏差 A） | 文案与 constants.ts 一致 | 【待修复】 |
| P1 | Pro 旋转/书签：补实现或下架文案（见 §9 偏差 B） | 二选一落地 | 【待修复】 |
| P1 | PayPal 服务端轻校验 / webhook | 取消订阅后前端状态可修正 | 【待修复】 |
| P1 | SEO 补强（sitemap 子页 / 独立 metadata / 标题随语言） | 各页 title 唯一 | 【待修复】 |

### 明确不做的功能（Won't Have）
- 服务端账号体系（后端用户库 / Supabase 会话）—— 纯前端，app/ 无 API Route
- 文件云端存储 / 上传 —— 与零上传卖点根本冲突
- PayPal webhook 服务端校验（短期）—— 当前未做，对免费工具风险可控
- OCR / 服务端高级压缩 / 服务端转 Word —— 需重算力，违背零上传
- 跨文件书签 / 内链保真 —— 合并后原书签可能失效，仅提示

## 3. 技术架构（锁定）
- **前端**：Next.js 14 App Router + TypeScript 5.5 + Tailwind 3.4（Token 化）
- **合并/解析引擎**：pdf-lib 1.17（合并，Web Worker 内）+ pdfjs-dist 4.6（解析/缩略图，Web Worker 内）
- **状态管理**：Zustand 4.5（自定义 `useAppStore`）
- **图标**：lucide-react（唯一图标库，禁用 emoji 图标）
- **字体**：@fontsource 本地自托管（Inter / Noto Sans SC / JetBrains Mono），零外部字体请求
- **部署**：Vercel（构建命令 `node scripts/copy-pdfjs-assets.mjs && next build`）
- **认证方案**：Google OAuth2 popup（`google.accounts.oauth2`），token 仅客户端换用户信息，无后端校验/续期
- **支付方案**：PayPal 订阅（`vault=true&intent=subscription`），plan_id 走 `NEXT_PUBLIC_PAYPAL_PLAN_*`，无服务端 capture/webhook
- **服务端**：无（无 API Route / Server Action / DB / Supabase）

## 4. API 端点清单（锁定）
纯客户端产品，**无自有后端 API**。外部集成如下：

| 集成 | 方式 | 认证 | 说明 |
|------|------|------|------|
| Google 用户信息服务 | `https://www.googleapis.com/oauth2/v2/userinfo` | OAuth2 access_token（popup 获取） | 仅取昵称/头像，客户端 |
| PayPal 订阅创建 | `https://www.paypal.com/sdk/js`（live） | `NEXT_PUBLIC_PAYPAL_CLIENT_ID` | `subscription.create({ plan_id })` |
| GA4（生产） | gtag，仅 `isProd` 加载 | `NEXT_PUBLIC_GA_ID` | 无则静默降级 |

## 5. 数据库表清单（锁定）
无服务端数据库。**客户端持久化（localStorage）**：

| Key | 内容 | 说明 |
|-----|------|------|
| `mergelocal-sub` | `{ plan, since }` | 订阅状态，刷新恢复；取消订阅后不清（已知风险，见 §9） |
| `pdf-merge-lang` | `zh` / `en` | 语言偏好，detectLang 优先读此 |
| `mergelocal-theme` | `light` / `dark` | 主题偏好 |

## 6. 页面清单（锁定）

| 页面 | 路由 | 核心组件 | 对应集成 | 设计 Token 主题 |
|------|------|----------|----------|-----------------|
| 工作台 | `/` | Workbench / DropZone / FileCard / ActionBar / ResultPanel | pdf-lib+pdfjs Worker | light-first / dark |
| 定价 | `/pricing` | PricingPage（三卡 + PayPal 按钮） | PayPal 订阅 | light-first / dark |
| 联系 | `/contact` | 联系表单 + 邮箱 | — | light-first / dark |
| 隐私政策 | `/privacy` | 条款正文（双语） | — | light-first / dark |
| 服务条款 | `/terms` | 条款正文（双语） | — | light-first / dark |
| 博客 | `/blog` | 占位页 | — | light-first / dark |

## 7. 设计 Token（锁定）
- **主色**：浅 `#2563eb` / 深 `#3b82f6`（blue，隐私可信叙事）
- **字体**：`Inter` + `Noto Sans SC`（本地自托管），7 级字号阶梯
- **图标库**：lucide-react（唯一，禁用 emoji 图标）
- **主题**：light-first 双主题，CSS 变量双层 Token（`globals.css` `:root` 与 `[data-theme='dark']`）
- **对标品牌**：Stripe / Linear（干净克制风）
- **圆角**：6/10/14/20/9999px；**阴影**：xs/sm/md/lg/focus + glow（推荐卡）；**间距**：4px 基准网格；**动效**：`cubic-bezier(0.4,0,0.2,1)`，150/250/400ms
- 完整取值见 `docs/UIUX.md` §2

## 8. 验收标准（锁定——QA 测试时以此为唯一依据）

| 编号 | 功能 | Given | When | Then |
|------|------|-------|------|------|
| AC-1 | 本地合并 | 用户拖入 1+ PDF | 点"合并并下载" | 本地生成并下载，Network 无第三方上传请求 |
| AC-2 | Free 限额 | 免费用户加第 6 个文件 | 校验 | 弹 `toast.freeFileLimit` 并拒收 |
| AC-3 | Pro 解锁 | 已登录且订阅成功 | `onApprove` | `subscription` 写 localStorage，限额切 Pro（100/300/1800） |
| AC-4 | 单文件上限 | 单文件 > 300MB | 添加 | 技术上限拒绝 `toast.fileTooBig` |
| AC-5 | 加密 PDF | 加密/损坏 PDF | 解析 | 标记 `encrypted` 并拒合并，提示已加密 |
| AC-6 | 语言切换 | 切到 en | 页面渲染 | 无残留中文；`<html lang>` 同步 |
| AC-7 | 主题切换 | 切 dark 后刷新 | 加载 | 保持 dark，全站 Token 跟随，无闪烁 |
| AC-8 | 移动端 | 375px 视口 | 浏览核心流程 | 无横向滚动；合并/登录/支付可触屏完成 |

## 9. 边界与约束

- **限额（以代码 `constants.ts` 为准）**：
  - Free：$0 ｜ 5 文件 ｜ 单文件 100MB ｜ 总量 200MB
  - Pro：$7/月 或 $49/年 ｜ 100 文件 ｜ 单文件 300MB ｜ 总量 1800MB（桌面）/ 180MB（移动）
  - 技术硬上限：单文件 300MB、总量 1800MB 桌面 / 180MB 移动
- **偏差 A（⚠️ 文案 ≠ 代码，P1 修复）**：`dict.ts` 定价文案写 Pro"不限文件 / 单文件 500MB / 总量 2GB"，但 `constants.ts` 强制 100/300/1800MB。**Spec 以代码为准**；修复方式二选一：① 改文案对齐代码；② 抬高 `PRO_MAX_*` 至 500/2GB（受 pdf-lib/内存约束，需验证）。
- **偏差 B（⚠️ 过早承诺，P1 修复）**：定价页承诺 Pro"按页旋转""自动书签"，但引擎仅 `copyPages`、无旋转逻辑、书签仅提示文案。**修复方式二选一**：① 补实现；② 下架/标"即将推出"。
- **无服务端订阅校验（已知风险）**：取消订阅后本地 `mergelocal-sub` 不清空，前端短期仍显示 Pro。建议定价页注明"权益以 PayPal 为准"。
- **CSP 含 `'unsafe-inline'`/`'unsafe-eval'`**（因 Next 运行时 + 第三方 SDK），削弱 CSP，后续可改 nonce/hash。
- **响应式**：实测单一 640px 断点 + 880px 内容封顶（覆盖 375，但非显式 768/1024 两档）。
- 不支持 IE；移动端受 180MB 内存保护上限。
- 性能目标：合并在客户端 Worker 执行，不阻塞 UI 主线程。

## 10. 变更记录
| 日期 | 变更内容 | 原因 | 影响范围 |
|------|----------|------|----------|
| 2026-07-19 | 首次形式化 Spec（回溯） | 上线审计发现"需求文档未形式化" | 全文档；锁定已实现功能 + 标注 P1 待修复项 |
