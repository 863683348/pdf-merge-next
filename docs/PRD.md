# MergeLocal (pdf-merge-next) 产品需求文档（PRD）

> **版本**：v1.0（回溯性形式化）｜**日期**：2026-07-19｜**作者**：许清楚（PM）
> **状态**：产品已上线（生产 READY，PayPal 已切 live）。本文是对代码中**真实已实现**功能的形式化记录，不虚构未实现能力。
> **标注约定**：【已实现】= 代码已落地；【规划中·未实现】= 定价页已承诺但代码无对应实现；【部分实现】。

---

## 0. 文档性质与核验说明

- 本文为**回溯性 PRD**：产品在审计时（2026-07-19）已上线运行，本文仅对源代码中真实存在的功能做形式化存档。
- 每条事实均标注 `file:line`，可直接回溯源码，便于架构师/设计师引用。
- **关键校正 1（审计文档已过时）**：`docs/launch-checklist-audit.md` 指出"付费后 Pro 权益未解锁（`addFiles`/`ActionBar` 没读 subscription）"。经代码核实，该结论**已过时**——当前 `src/store/useAppStore.ts:167` 与 `src/components/molecules/ActionBar.tsx:14` **均已读取** `subscription`，付费权益已解锁。详见 §4、§7。
- **关键校正 2（文案与代码不一致）**：定价页文案（`src/i18n/dict.ts`）宣称 Pro = "不限文件 / 单文件 500MB / 总量 2GB"，但代码强制常量（`src/lib/constants.ts`）为 **100 文件 / 300MB / 1800MB（桌面）**。本文以 **`constants.ts`（强制逻辑）为准**，文案不一致列为待修复项（§7 决策 6）。

---

## 1. 问题陈述

**谁**：处理含敏感信息 PDF 的个人与轻量专业用户（自由职业者、法务/财务、留学生、小企业主）。
**场景**：需要把多份 PDF 合并成一个文件，但文档含合同、报税表、病历、商业机密。
**现在怎么解决**：主流工具 Smallpdf / iLovePDF 要求把文件**上传到服务商服务器**处理（Smallpdf 留存 1 小时、iLovePDF 留存 2 小时）；本地替代（PDF24 桌面版、Adobe Acrobat）需安装重量级软件或付费订阅。
**为什么不行**：上传意味着数据离开本机、留存于不受控的第三方，存在泄露与合规风险（HIPAA、律师保密义务、企业数据分级政策均禁止敏感文件上云）。安装重型软件则门槛高、不跨平台。
**MergeLocal 的解法**：**100% 浏览器端合并，文件永不离开设备**（Web Worker + pdf-lib），零上传、免安装、跨平台（含移动端浏览器）。

---

## 2. 用户与场景

### 2.1 用户画像（一句话）
隐私敏感、需要偶尔合并 PDF 的个人与轻量专业用户，不愿为"合并"安装软件或把机密文件交给第三方服务器。

### 2.2 核心使用场景
- **场景 A（个人/学生）**：把多份课程讲义、扫描件合并成一个 PDF 后下载/打印。免费版 5 文件 / 100MB 通常够用。
- **场景 B（法务/财务/小企业）**：合并含敏感信息的合同或报表，**必须零上传**；频繁/大文件用户升级 Pro（$7/月 或 $49/年）解锁 100 文件 / 300MB / 1800MB。
- **场景 C（移动办公）**：在手机浏览器里合并几份文件，受 180MB 移动上限约束，分批处理。

### 2.3 不做会怎样（痛点量化）
- 不提供零上传方案 → 用户只能把机密文件交给第三方服务器，承担泄露与合规风险。
- 不做免费层 → 轻度用户被挡在门外，无转化漏斗。
- 不做 Pro 限额与订阅 → 无收入，且大文件会压垮浏览器内存。
- 不做 i18n / 主题 / 移动适配 → 出海（zh+en）与多设备体验受阻。

---

## 3. 竞品分析

### 3.1 三个直接竞品（上传型 SaaS 主导者）

| 竞品 | 核心模式 | 免费额度 | 隐私 / 差评痛点 | 定价 |
|------|----------|----------|----------------|------|
| **Smallpdf**（瑞士） | 服务端处理，文件存 Google Cloud 欧洲，1 小时自动删除 | 单文件仅 5MB（极严苛） | 文件离机、1 小时留存窗口；免费档无 HIPAA BAA；敏感文档被评测明确建议"勿用" | Pro ≈ $12/月 |
| **iLovePDF**（西班牙） | 服务端处理，GDPR，2 小时删除 | 单文件 25MB / 每日 200MB | 文件离机至西班牙服务器；留存依赖"信任删除排程" | Pro 月付订阅 |
| **PDF24**（德国） | 在线（上传）+ **桌面 App（本地离线、无上限）** 双形态 | 桌面版免费、无大小限制 | 真正"零上传"需**安装桌面程序**（Windows 为主）；纯网页版仍上传 | 免费 + 付费增强 |

**差评共性（市场空白）**：三类均要求**上传**或**装软件**。"敏感文件别用在线工具"已成共识（raptorpdf / tsight / justuse.me 等多篇评测明确建议合同/病历/报税表改用浏览器本地工具）。→ **零上传 + 免安装 + 浏览器即开即用**是明确空白。

### 3.2 两个替代方案

| 替代 | 模式 | 痛点 |
|------|------|------|
| **Adobe Acrobat**（桌面/订阅） | 完全本地、能力最强 | $239/年或订阅，重、需安装/账号，合并这种小事杀鸡用牛刀 |
| **系统预览**（Mac Preview / Windows Print） | 本地、免费 | 仅基础合并（打印到 PDF / 缩略图），无页范围抽取、不跨平台（Win 弱）、无 Pro 变现 |

### 3.3 新兴"零上传浏览器"竞品（威胁，须正视）
PDFLance、简PDF、Orbit、RaptorPDF、SafetyPDF 等同属"纯浏览器本地处理"赛道，且多免费、功能更全（旋转 / 书签 / 加密常已内置）。MergeLocal 的差异化护城河必须靠：**谷歌登录 + PayPal 订阅变现 + zh/en 双语出海 + 双主题 + 移动端 + 已上线 live 的付费闭环**，而非仅靠"零上传"一个卖点。

### 3.4 我们的差异化（用户为什么选我们）
1. **零上传 + 免安装 + 跨平台浏览器**（融合 PDF24 的隐私 + 在线工具的便捷）。
2. **已跑通的付费闭环**（PayPal live 订阅），在"免费隐私工具"赛道里率先商业化。
3. **出海定位**：zh/en 双语 + 双主题 + 移动端，面向全球隐私敏感用户。

---

## 4. 核心功能列表 + RICE 评分

**评分口径**：`Reach` = 触碰该功能的 MAU 占比（1–10）；`Impact` = 0.25 / 0.5 / 1 / 2 / 3；`Confidence` = 0.5 / 0.8 / 1.0；`Effort` = 人周。`Score = (Reach × Impact × Confidence) / Effort`，越高越优先。

| # | 功能 | 状态 | 核验（file:line） | Reach | Impact | Conf | Effort | RICE |
|---|------|------|-------------------|-------|--------|------|--------|------|
| F1 | 本地合并·零上传（pdf-lib Worker 保真拷贝；页范围抽取；拖拽排序；加密检测拒绝） | 【已实现】 | engine.worker.ts:1,35；useAppStore.ts:91,332-371；ActionBar.tsx:66-76 | 10 | 3 | 1.0 | 6 | **5.0** |
| F2 | Free/Pro 文件限额门禁（getPlanLimits） | 【已实现】 | constants.ts:7-14,23-35；useAppStore.ts:167-168,204-211；ActionBar.tsx:14,18 | 10 | 2 | 1.0 | 1 | **20.0** |
| F3 | 中英文 i18n（zh/en 双表，缺 key 回退） | 【已实现】 | dict.ts:5-393；LANG_STORAGE_KEY(dict.ts:396) | 10 | 2 | 1.0 | 2 | **10.0** |
| F4 | 亮/黑双主题（CSS 变量 + localStorage + 防闪） | 【已实现】 | globals.css；constants.ts:43；useTheme.ts；ThemeToggle.tsx | 10 | 0.5 | 1.0 | 1 | **5.0** |
| F5 | 谷歌登录（OAuth2 popup，无后端） | 【已实现】 | auth.ts:35-44,80-97；GoogleLoginButton.tsx:13-52 | 4 | 2 | 0.9 | 2 | **3.6** |
| F6 | PayPal 订阅（$7/月 · $49/年 · live） | 【已实现】 | PricingPage.tsx:14,60-63,84,172-183；dict.ts:147-166 | 4 | 3 | 0.9 | 3 | **3.6** |
| F7 | 移动端适配（响应式 + 180MB 移动上限） | 【已实现】 | constants.ts:4,38-41；useAppStore.ts:402-412 | 6 | 1 | 0.9 | 3 | **1.8** |
| F8 | 按页旋转（Pro 卖点） | 【规划中·未实现】 | 仅文案 dict.ts:155,349；引擎无旋转逻辑（engine.worker.ts 仅 copyPages） | 3 | 1 | 0.6 | 2 | 0.9 |
| F9 | 自动添加书签（Pro 卖点） | 【规划中·未实现】 | 仅文案 dict.ts:156,350；bookmark 仅作提示（result.bookmarkNote） | 2 | 0.5 | 0.5 | 3 | 0.17 |

**说明**：
- F1–F7 均已上线，构成当前产品全部真实能力。
- F8 / F9 在定价页作为 Pro 权益展示（`dict.ts`），但**代码中无实现**（引擎只做 `copyPages` 原样拷贝；书签仅作为"合并后原书签可能失效"的提示文案）。属**过早承诺**，建议定价页下架或标注"即将推出"。
- 定价页同时承诺"不限文件个数"（`dict.ts:152,346`），与代码 `PRO_MAX_FILES=100`（`constants.ts:12`）冲突——亦属文案夸大，见 §7。
- 页范围抽取（`setMode`/`setRange`）对**所有用户开放**，非 Pro 专属，属免费即得能力。

### 4.1 限额事实（以强制代码为准）

| 档位 | 价格 | 文件数 | 单文件 | 总量 |
|------|------|--------|--------|------|
| 免费 Free | $0 | 5 | 100 MB | 200 MB |
| Pro | $7/月 或 $49/年（PayPal live） | 100 | 300 MB | 1800 MB（桌面）/ 180 MB（移动） |

- 技术硬上限：单文件 300MB、总量 1800MB 桌面 / 180MB 移动（`constants.ts:2-4`）。
- 核验：`constants.ts:7-14`（FREE/PRO 商业限制）、`constants.ts:23-35`（getPlanLimits）、`useAppStore.ts:167-168`（addFiles 读 subscription）、`ActionBar.tsx:14`（读 subscription）。

---

## 5. MVP 范围

### 5.1 P0（已交付 · 核心闭环）

| 模块 | 范围 | 核验 |
|------|------|------|
| 合并内核 | 零上传本地合并、保真、页范围抽取、拖拽排序、加密拒绝 | engine.worker.ts；useAppStore.ts |
| 限额与变现 | Free/Pro 限额门禁 + PayPal 订阅闭环（live） | constants.ts；PricingPage.tsx；useAppStore.ts:552-560 |
| 账号 | 谷歌登录（popup，localStorage 持久化） | auth.ts；GoogleLoginButton.tsx |
| 国际化/主题 | zh/en i18n + 亮黑主题 | dict.ts；globals.css；useTheme.ts |
| 渠道/合规页 | `/` `/pricing` `/contact` `/privacy` `/terms` `/blog`（blog 占位） | `find app/*/page.tsx` 确认 6 个路由 |
| 安全头 | CSP / HSTS / X-Frame-Options 等 | next.config.mjs:2-52 |

### 5.2 P1（应做 · 下一迭代）
- 按页旋转（F8）、自动书签（F9）——先补实现再上架，或先从定价页下架。
- 修复定价页文案与代码限额不一致（`dict.ts` vs `constants.ts`）。
- PayPal 服务端轻校验（webhook / capture）以降低伪造风险（见 §7 决策 6 / 审计 #6-B）。
- SEO：sitemap 补全子页 URL；`/pricing` 等加独立 metadata；`<title>` 随语言切换。
- 移动端汉堡导航（当前移动端 TopBar 隐藏 Pricing 入口）。
- 热力图（GA4 已接，缺 Clarity / Hotjar）。

### 5.3 Won't Have（明确不做）
- **服务端账号体系**（后端用户库 / Supabase 会话）——当前纯前端、无后端（`app/api` 为空；next.config.mjs:25 明示无服务端逻辑）。
- **文件云端存储 / 上传**——与"零上传"核心卖点根本冲突，永不做的反向功能。
- **PayPal webhook 服务端校验**——当前未做，且按纯前端架构短期不做（风险可控，见 §7）。
- **OCR / 服务端高级压缩 / 服务端转 Word**——需重算力，违背纯前端零上传原则（参考简PDF FAQ 同样放弃转 Word）。
- **跨文件内部链接 / 书签保真**——合并后原书签可能失效，仅作提示（`result.bookmarkNote`），不做修复。

---

## 6. 验收标准（Given / When / Then，节选关键）

- **G** 用户在 `/` 拖入 PDF；**W** 点击"合并并下载"；**T** 浏览器本地生成合并文件并下载，DevTools Network 面板无向第三方上传文件请求（零上传）。（`engine.worker.ts:35`）
- **G** 免费用户添加第 6 个文件；**W** 系统校验；**T** 弹出 `toast.freeFileLimit`，文件被拒。（`constants.ts:7` / `useAppStore.ts:174-181`）
- **G** 已登录谷歌且订阅成功；**W** `onApprove` 触发；**T** `store.subscription` 写入 localStorage，限额切换到 Pro（100/300/1800）。（`PricingPage.tsx:177-183`；`useAppStore.ts:167`）
- **G** 单文件 > 300MB；**W** 添加；**T** 被技术上限拒绝（`toast.fileTooBig`）。（`constants.ts:2`；`useAppStore.ts:214-220`）
- **G** 加密 PDF；**W** 解析；**T** 标记 encrypted 并拒绝合并（`error.encryptedCannotMerge`）。（`engine.worker.ts:27-29`）

---

## 7. 决策日志（关键产品决策小结）

1. **纯前端零上传架构（坚持）**——以 pdf-lib Web Worker 在浏览器内合并，文件不上传（`engine.worker.ts`）。代价：大文件依赖设备内存、无 OCR/高级压缩。换来：隐私护城河 + 零服务器成本。`app/api` 为空、`next.config.mjs:25` 明示无服务端逻辑。
2. **本地合并为唯一内核（F1）**——所有功能（抽取/排序/加密检测）围绕零上传内核，不引入上传分支。
3. **Free 限额刻意收紧于技术上限之下**——Free 200MB < 技术 1800MB（`constants.ts:6` 注释），给 Pro 留"解锁感"与变现空间。
4. **Pro 用 PayPal 订阅而非自建支付**——无后端，PayPal `vault+subscription` 直接前端接入（`PricingPage.tsx:84`）；状态存 localStorage。代价：可伪造（§7 / 审计 #6-B），对免费工具风险可控。
5. **认证用 Google OAuth2 popup 而非自有账号**——绕开 FedCM / 第三方 Cookie，零注册（`auth.ts:1-3`）。无服务端会话，符合纯前端定位。
6. **定价页文案与代码限额不一致（待决 · 须修）**——`dict.ts` 承诺"不限文件 / 500MB / 2GB + 旋转 + 书签"，`constants.ts` 实际 100 / 300 / 1800 且无旋转/书签。决定：**以代码为准**，文案回补或在下个迭代对齐；旋转/书签下架或标注"即将推出"。
7. **审计文档 #6"Pro 未解锁"已过时（已纠正）**——核实 `useAppStore.ts:167` 与 `ActionBar.tsx:14` 均已读 `subscription`，付费权益已解锁。审计结论需更新，避免误导后续排期。
8. **Won't Have 三件套（服务端账号 / 云端存储 / webhook 校验）**——锚定纯前端零上传定位，不为变现牺牲隐私卖点。

---

## 附录 A：事实核验清单（file:line 溯源）

| 断言 | 源 |
|------|----|
| 零上传、纯前端、无后端 | package.json:6（描述）；next.config.mjs:25；`app/api` 为空 |
| 合并用 pdf-lib Worker 保真拷贝 | engine.worker.ts:1,35；pdf-lib 见 package.json:25 |
| 页范围抽取（全用户） | useAppStore.ts:93-94,332-371；dict.ts `range.*` |
| 拖拽排序 | useAppStore.ts:91,319-330；@dnd-kit（package.json:16-18） |
| 加密 PDF 检测拒绝 | engine.worker.ts:27-29；useAppStore.ts:471-474；dict.ts `error.encryptedCannotMerge` |
| Free 限额 5/100/200 | constants.ts:7-9 |
| Pro 限额 100/300/1800(桌面)/180(移动) | constants.ts:2-4,12-14 |
| getPlanLimits 被 addFiles 与 ActionBar 共用 | constants.ts:23-35；useAppStore.ts:168；ActionBar.tsx:18 |
| addFiles 读 subscription（Pro 解锁） | useAppStore.ts:167 |
| ActionBar 读 subscription（Pro 解锁） | ActionBar.tsx:14 |
| SubscriptionInfo 结构 + localStorage | useAppStore.ts:65-70,552-560 |
| PayPal live + vault+subscription | PricingPage.tsx:14,84；audit 文档首行 |
| PayPal onApprove 写 subscription | PricingPage.tsx:172-183 |
| 价格 $7/月 $49/年 | dict.ts:147-166,341-360 |
| 谷歌 OAuth2 popup + userinfo | auth.ts:35-44,80-97；GoogleLoginButton.tsx:35-42 |
| 用户存 localStorage | auth.ts:51,112-126 |
| zh/en 双表 ~180 key + 回退 | dict.ts:5-393,395-396；audit #3 |
| 亮黑主题 + 防闪 | globals.css；constants.ts:43；useTheme.ts；ThemeToggle.tsx |
| 移动 180MB 上限判定 | constants.ts:4,38-41；useAppStore.ts:402-412 |
| 路由 / /pricing /contact /privacy /terms /blog | `find app/*/page.tsx`；blog 占位 dict.ts `blog.placeholder` |
| 安全响应头 CSP/HSTS 等 | next.config.mjs:2-52 |
| Pro 旋转/书签仅文案无实现 | dict.ts:155-156,349-350；引擎无对应逻辑 |
| 定价文案夸大（不限/500/2GB） | dict.ts:152-156,346-350 vs constants.ts:12-14 |
