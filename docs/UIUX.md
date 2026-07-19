# MergeLocal（pdf-merge-next）UIUX 设计文档
> 性质：回溯性形式化（Retrospective Formalization）
> 说明：本文档**不重新设计**，而是核实已上线的真实实现并补齐规范/对标。所有结论均来自源码逐行核实，每条事实标注 `file:line`。
> 核实范围：`app/globals.css`、`tailwind.config.ts`、`src/components/**`、`src/views/**`、`src/i18n/dict.ts`、`app/layout.tsx`、`app/providers.tsx`。

---

## 1. 设计语言定位

**风格**：`clean / minimal / privacy-trust`，**light-first**（浅色为默认，深色可选）。

**为什么契合"隐私零上传"卖点**：
- 该工具 100% 浏览器端运行（PDF 解析/合并在 Web Worker 执行）。设计语言必须让"本地、可信、无外人经手"可被一眼感知。
- 克制、中性、留白充足的瑞士极简风，比花哨渐变/插画更传递"工具而非玩具"的专业感。
- 蓝色（`#2563EB` 系）作为唯一品牌色：蓝色在跨文化语境里稳定关联"安全/可信/技术"。
- 文案即信任：页面与状态处处明示"文件永不离开你的设备"，并由 `ShieldCheck` 图标反复强化（`src/components/molecules/SecureBadge.tsx:3,17`）。
- 字体本地自托管（`@fontsource`，无 Google Fonts CDN 外链，`app/layout.tsx:4-11`），从工程上消除"字体请求泄漏"隐患。

---

## 2. 配色 Token（直接引用 globals.css 变量名）

设计系统采用 **Foundation → Semantic 双层 Token**：`globals.css` 定义语义变量，Tailwind 仅引用变量（`tailwind.config.ts:10-53`）。组件一律消费 Tailwind 语义色类（`bg-surface` / `text-fg` / `border-line` / `bg-brand` / `text-ok`…）。

### 2.1 浅色主题（`:root`，`app/globals.css:8-53`）

| 类别 | 变量名 | 取值 |
|------|--------|------|
| 背景层1 | `--bg-primary` | `#f9fafb` |
| 背景层2 | `--bg-surface` | `#ffffff` |
| 背景层3 | `--bg-elevated` | `#ffffff` |
| 背景-次/凹陷 | `--bg-subtle` / `--bg-inset` | `#f3f4f6` |
| 文字-主 | `--text-primary` | `#111827` |
| 文字-次 | `--text-secondary` | `#6b7280` |
| 文字-禁用/弱 | `--text-muted` | `#9ca3af` |
| 文字-反白 | `--text-on-primary` | `#ffffff` |
| 边框-默认 | `--border-default` | `#e5e7eb` |
| 边框-强 | `--border-strong` | `#d1d5db` |
| 边框-极弱 | `--border-subtle` | `#f0f1f3` |
| 边框-聚焦 | `--border-focus` | `#2563eb` |
| 主色 | `--color-primary` | `#2563eb` |
| 主色-hover | `--color-primary-hover` | `#1d4ed8` |
| 主色-active | `--color-primary-active` | `#1e40af` |
| 主色-浅底 | `--color-primary-subtle` | `rgba(37,99,235,0.08)` |
| 成功 | `--color-success` | `#16a34a` |
| 警告 | `--color-warning` | `#b45309` |
| 危险 | `--color-error` | `#dc2626` |

### 2.2 深色主题（`[data-theme='dark']`，`app/globals.css:55-92`）

| 类别 | 变量名 | 取值 |
|------|--------|------|
| 背景层1 | `--bg-primary` | `#0b0e14` |
| 背景层2 | `--bg-surface` | `#11151c` |
| 背景层3 | `--bg-elevated` | `#161b24` |
| 背景-次/凹陷 | `--bg-subtle` / `--bg-inset` | `#0e1219` |
| 文字-主 | `--text-primary` | `#f2f4f8` |
| 文字-次 | `--text-secondary` | `#9ba3b0` |
| 文字-禁用/弱 | `--text-muted` | `#6b7280` |
| 文字-反白 | `--text-on-primary` | `#0b0e14` |
| 边框-默认 | `--border-default` | `#232a35` |
| 边框-强 | `--border-strong` | `#2e3744` |
| 边框-极弱 | `--border-subtle` | `#1a2029` |
| 边框-聚焦 | `--border-focus` | `#3b82f6` |
| 主色 | `--color-primary` | `#3b82f6` |
| 主色-hover | `--color-primary-hover` | `#60a5fa` |
| 主色-active | `--color-primary-active` | `#2563eb` |
| 主色-浅底 | `--color-primary-subtle` | `rgba(59,130,246,0.16)` |
| 成功 | `--color-success` | `#34d399` |
| 警告 | `--color-warning` | `#fbbf24` |
| 危险 | `--color-error` | `#f87171` |

> 暗色背景刻意偏冷（`#0b0e14` 带蓝黑调），与品牌蓝呼应；文字用 `#f2f4f8` 而非 `#fff`，更柔和不刺眼。

**阴影 Token**（亮/暗各一套）：`app/globals.css:47-52`（浅）、`:86-91`（深），含 `--shadow-xs/sm/md/lg/focus`。Tailwind 镜像见 `tailwind.config.ts:75-81`（另含 `glow`：蓝色描边+柔光，用于定价"最推荐"卡）。

---

## 3. 字体

**字体栈（中英混排）**——`app/globals.css:40-44` 与 `tailwind.config.ts:54-57`：
- 显示/正文：`'Inter', 'Noto Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- 等宽：`'JetBrains Mono', 'SFMono-Regular', Menlo, Consolas, monospace`

**中文策略**：西文优先 `Inter`，中文回落 `Noto Sans SC`，再回落系统字体，保证无网络时仍有良好回退。

**加载方式（隐私加分项）**：字体经 `@fontsource` **本地自托管**（`app/layout.tsx:4-11`），**无任何外部字体 CDN 请求**。

**字号阶梯（7 级，`tailwind.config.ts:58-67`）**：`caption 12/16` · `sm 14/20` · `body 16/24` · `title-sm 18/26` · `title 20/28` · `h2 24/32` · `h1 32/40` · `display 40/48`。

---

## 4. 图标库

**唯一图标库：`lucide-react`**（已全量核实，14 处 import，零例外）：TopBar `RotateCcw`、ThemeToggle `Sun/Moon`、SecureBadge `ShieldCheck`、Button `Loader2`、ActionBar `Download/AlertCircle`、ResultPanel `Check/AlertTriangle/Download/ExternalLink/RotateCcw/FileQuestion`、FileCard `GripVertical/ChevronDown/ArrowUp/ArrowDown/Trash2/AlertTriangle`、DropZone `UploadCloud/Plus`、FaqSection `ChevronDown`、Thumbnail `FileText`、GoogleLoginButton `LogOut`、Toast `CheckCircle2/AlertCircle/Info/X`、Spinner `Loader2`、Workbench `X`。

**图标尺寸规范**：行内/按钮内 16px、独立图标 20–24px、折叠箭头 18px。统一 `aria-hidden` 装饰性图标 + 文本标签。

**禁用 emoji 图标**：代码无 emoji 充当功能图标；团队显式注释"仅用 ShieldCheck + 文案，绝不出现 emoji"（`src/components/molecules/SecureBadge.tsx:7`）。
> ⚠️ 唯一例外：emoji 仅出现在 i18n **文案**里（订阅成功提示的 🎉），非图标用途。

---

## 5. 对标品牌

选取 **Stripe** 与 **Linear** 作为设计对标（二者方向一致、互不冲突，且与 PM 竞品分析"隐私工具走克制干净风"结论相容）：

| 维度 | Stripe | Linear | MergeLocal 落地 |
|------|--------|--------|----------------|
| 气质 | 金融科技级干净、克制、可信 | 极简、极速、精确 | 蓝色单品牌色、克制留白、无装饰渐变 |
| Token 体系 | 严格 Design Token 分层 | 系统化、暗色原生 | `globals.css` 双层 Token + Tailwind 映射 |
| 排版 | 高 x-height 无衬线 | 紧凑、信息密度高 | Inter/Noto Sans SC + 7 级字号阶梯 |
| 动效 | 微妙、目的明确 | 短、线性、可关 | `cubic-bezier(0.4,0,0.2,1)`，`prefers-reduced-motion` 全量关闭 |
| 可访问 | 聚焦环、ARIA 完整 | 键盘可达 | `focus-visible` 2px 主色环、ARIA 全量 |

**为何不选 Notion/花哨风**：Notion 偏"内容画布"，与本工具"单任务工具"定位弱相关；紫色渐变/3D 插画会削弱"隐私可信"信号，故排除。

---

## 6. 组件规范（Token 化 / 阴影 / 圆角 / 间距）

- 颜色：组件只引用 Tailwind 语义类，源头皆 `globals.css` 变量。实测 `src/**/*.tsx` 内裸 16 进制色值仅 4 处，全部是 Google "G" 徽标品牌色，设计系统本身零裸色。
- 圆角（`tailwind.config.ts:68-74`）：`sm 6px` / `md 10px` / `lg 14px` / `xl 20px` / `pill 9999px`。按钮 `rounded-md`、卡片 `rounded-lg`、定价卡 `rounded-xl`、"最推荐"卡 `shadow-glow`。
- 阴影（`tailwind.config.ts:75-81` + `globals.css`）：卡片默认 `shadow-sm`，悬停/拖拽 `shadow-lg`；聚焦 `ring-2 ring-brand`；推荐定价卡 `shadow-glow`。
- 间距：4px 基准网格；TopBar 高 64px（`h-topbar`）；内容最大宽 `max-w-content=880px`。
- 动效：`fast 150ms` / `normal 250ms` / `slow 400ms`；缓动 `cubic-bezier(0.4,0,0.2,1)`。

**原子组件状态（Button，`src/components/atoms/Button.tsx`）**：变体 `primary/secondary/ghost/danger`；尺寸 `sm/md`；覆盖 Default/Hover/Active(slight scale)/Focus(ring-2)/Disabled/Loading 六态。`Error/Success/Empty` 由 Organism 承接。

---

## 7. 反模式自检（对照 7 大 AI 模板罪）

| 反模式 | 结论 | 证据 |
|--------|------|------|
| 紫色渐变综合症 | ✅ 无 | 全仓 Grep `gradient`：产品 UI 零渐变；唯一 `glow` 是蓝色柔光 |
| emoji 当图标 | ✅ 功能图标无；⚠️ 文案 1 处 | 图标全走 lucide-react；🎉 仅作订阅成功文案 |
| 千篇一律 Hero | ✅ 否 | 首页即工作台，首屏核心是真实拖拽上传区 |
| 三列卡片功能展示 | ✅ 仅定价页且非空泛 | 承载真实价格/限额/功能 + PayPal 按钮 |
| 彩色背景上灰字 | ✅ 无 | 文字统一走 `--text-*` 阶梯 |
| 纯黑/纯灰 | ✅ 无 | 黑底 `#0b0e14`、无 `#000`/`#808080` 直用 |
| 弹跳/弹性缓动 | ✅ 无 | 统一 `cubic-bezier(0.4,0,0.2,1)`，无 back 弹性 |

**可访问性兜底**：`focus-visible` 全局 2px 主色环；`prefers-reduced-motion` 全量降级；ARIA 标签全量。

---

## 8. 响应式断点

**实测断点**：全站仅使用 Tailwind 默认 `sm`（**640px**）作为唯一视口断点（无 `md:`/`lg:` 视口断点）。内容宽度上限 `max-w-content=880px`（`tailwind.config.ts:93`）。

映射到 375 / 768 / 1024：
- **移动端（≤640，覆盖 375）**：单列流式；`FileCard` 纵向堆叠，拖拽手柄隐藏、改用上下箭头排序（触屏友好）。
- **平板/小桌面（≥640，覆盖 768）**：`sm:` 触发多列——定价三卡 `sm:grid-cols-3`、`FileCard` 转横向、TopBar 显示次要项、`ActionBar` 转横排。
- **桌面（≥1024）**：因内容封顶 880px，布局与 ≥640 一致，仅两侧留白更多。

**移动端适配策略**：① 底部栏（`ActionBar` 为 `sticky bottom-0` 操作条）；② 抽屉（未采用，导航极简无需）；③ 流式栅格（采用，flex/grid + `sm:` 重排，无定宽硬断）。

---

## 9. 偏差与建议（透明披露）

**偏差#1 — i18n 文案中的 emoji 🎉**：仅文案庆祝表情，非功能图标，不违反图标禁 emoji 红线；当前无害，可保留或改 `CheckCircle2`。

**偏差#2 — Google "G" 徽标内联品牌色**：Google 官方品牌标识强制色，不可改为 Token，属合理例外。

**偏差#3 — 断点与"375/768/1024"不完全等同**：实测为单一 640px 断点 + 880px 内容封顶。功能完整、移动优先；若需显式对齐 768/1024 两档可在 `tailwind.config.ts` 增 `screens`。

**结论**：真实实现对标干净克制风、Token 化彻底、零紫色渐变、零 emoji 图标、非模板化 Hero，与"隐私零上传"卖点高度自洽，可作为正式 UIUX 规范基线。
