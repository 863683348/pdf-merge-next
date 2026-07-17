# MergeLocal · 纯浏览器端 PDF 合并

> 零上传、零注册、隐私优先的 PDF 合并工具。所有解析、合并、抽取、排序、旋转都在你的浏览器本地完成，**文件永远不会离开你的设备**。

English: A fully client-side PDF merge tool. Everything runs in the browser — your files never leave your device.

## ✨ 功能

- **合并（Merge）**：把多个 PDF 按顺序拼成一个，保持原始页面质量（无重渲染画质损失）。
- **抽取（Extract）**：只保留勾选的页面，生成新 PDF。
- **排序（Reorder）**：拖拽或上/下移动调整文件与页面顺序，带常驻序号。
- **免费版限制（明示）**：最多 5 个文件、单文件 ≤ 100MB、合计 ≤ 200MB（技术上限 300MB / 1.8GB 兜底）。
- **中英双语**：界面跟随浏览器语言自动切换。
- **缩略图预览**：Web Worker 内解析，带环境适配（OffscreenCanvas）保证复杂 PDF 不崩。

## 🛡️ 隐私

- 无后端、无上传、无账号、无追踪。
- 解析与合并 100% 在浏览器内完成（pdf-lib + pdfjs-dist）。
- 部署到任意静态/Serverless 平台都不会触达用户文件。

## 🧱 技术栈

- **框架**：Next.js 14（App Router）
- **合并/抽取**：pdf-lib
- **缩略图**：pdfjs-dist（Worker + OffscreenCanvas 适配）
- **状态**：Zustand
- **拖拽排序**：@dnd-kit
- **样式**：Tailwind CSS + 设计 Token
- **图标**：Lucide

## 🚀 本地开发

```bash
npm install
npm run dev      # 自动复制 pdfjs 资源后启动开发服务器
```

构建（部署前会自动执行同样的步骤）：

```bash
npm run build    # copy:pdfjs + next build
npm start
```

> `scripts/copy-pdfjs-assets.mjs` 会在 build/dev 前把 pdfjs 的 worker / cmap / standard_fonts 复制到 `public/`，做到零外部请求。这些文件已被 .gitignore 忽略，由构建自动生成。

## ☁️ 部署到 Vercel

零配置：在 Vercel 导入本仓库，Framework Preset 选 **Next.js** 即可。构建命令与输出目录均沿用默认（`next build` / `.next`）。无需额外环境变量。

## 📁 目录

```
app/             Next.js App Router 入口
src/
  components/    atoms / molecules / organisms
  store/         Zustand 全局状态
  workers/       PDF 解析 Worker（含 Worker 环境适配 shim）
  i18n/          中英文字典与 provider
  lib/           常量、阈值、工具
scripts/         pdfjs 资源复制脚本
```
