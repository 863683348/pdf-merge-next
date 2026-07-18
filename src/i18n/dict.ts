import type { DictMap, Lang } from './types';

// 完整 UI 文案字典。新增文案必须同时在 zh / en 两表补齐，
// 缺失 key 运行时回退到 zh 并 console.warn（见 core.ts）。
export const dict: DictMap = {
  zh: {
    // ---- 元信息 / 品牌 ----
    'app.name': 'PDF 合并',
    'app.tagline': '本地离线 · 隐私优先',

    // ---- 主题切换 ----
    'theme.toLight': '切换到浅色主题',
    'theme.toDark': '切换到深色主题',
    'theme.light': '浅色主题',
    'theme.dark': '深色主题',

    // ---- 语言切换 ----
    'lang.switch': '切换界面语言',
    'lang.zh': '中文',
    'lang.en': 'English',

    // ---- 信任徽标 ----
    'secure.text': '文件永不离开你的设备',

    // ---- 通用 ----
    'common.close': '关闭提示',

    // ---- DnD 无障碍播报 (F3) ----
    'dnd.start': '开始拖动「{name}」',
    'dnd.over': '「{active}」移动到「{over}」上方',
    'dnd.end': '已将「{active}」移动到「{over}」',
    'dnd.cancel': '已取消拖动「{name}」',

    // ---- TopBar ----
    'topbar.clear': '清空所有文件',
    'topbar.clearTitle': '清空',

    // ---- DropZone (F1) ----
    'dropzone.title': '拖拽 PDF 到此处',
    'dropzone.subtitle': '或点击选择文件 · 支持一次添加多个',
    'dropzone.button': '选择文件',
    'dropzone.addMore': '添加更多 PDF 文件',

    // ---- 首访引导 ----
    'onboard.text': '提示：添加文件后可拖动手柄排序，展开卡片能按页抽取。',

    // ---- ActionBar (F2/F4/F6) ----
    'action.summary': '{files} 个文件 · 共 {pages} 页 · 已选 {selected} 页',
    'action.limit': '免费版：{files}/{maxFiles} 文件 · {size}/{maxSize} MB',
    'action.filesOverLimit': '文件数超过 {max} 个限制，请移除部分文件',
    'action.sizeOverLimit': '总大小超过 {max} MB 限制，请移除部分文件',
    'action.merge': '合并并下载',
    'action.merging': '合并中…',
    'action.emptyHint': '请至少添加一个 PDF',
    'action.progress': '正在合并… {done} / {total} 页',

    // ---- FileCard (F3/F4/F5) ----
    'file.parsing': '解析中…',
    'file.meta': '{pages} 页 · {size}',
    'file.allPages': '全部 {n} 页',
    'file.selectedPages': '已选 {sel}/{total} 页',
    'file.dragHandle': '拖动以排序 {name}',
    'file.moveUp': '上移 {name}',
    'file.moveDown': '下移 {name}',
    'file.expand': '展开页范围设置',
    'file.collapse': '收起页范围设置',
    'file.remove': '移除 {name}',
    'file.encrypted': 'PDF 已加密，请先解密后再上传',
    'file.corrupted': '文件可能已损坏，无法读取',

    // ---- 阈值 Badge 文案 ----
    'badge.fileYellow': '文件偏大',
    'badge.fileOrange': '大文件',
    'badge.fileBlack': '超大文件',
    'badge.pageYellow': '页数偏多',
    'badge.pageOrange': '页数较多',
    'badge.pageBlack': '页数超多',

    // ---- PageRangeSelector (F4) ----
    'range.all': '全部页面',
    'range.specific': '指定范围',
    'range.placeholder': '例如 1-3, 5',
    'range.total': '共 {n} 页',
    'range.errorSuffix': '将按全部页合并',
    'range.selected': '已选 {sel} / {total} 页',

    // ---- ResultPanel (F6) ----
    'result.failed': '合并失败',
    'result.noData': '没有可下载的文件',
    'result.noDataHint': '请先回到工作台添加 PDF 并合并。',
    'result.done': '合并完成',
    'result.retry': '重试',
    'result.back': '返回工作台',
    'result.download': '下载',
    'result.open': '在新标签打开',
    'result.mergeAgain': '再合并一个',
    'result.bookmarkNote': '合并后原始文件的书签目录与跨文件内部链接可能失效，页面内容保持不变。',
    'result.meta': '{name} · {size} · {pages} 页',

    // ---- Toast / 错误 ----
    'toast.onlyPdf': '仅支持 PDF 文件',
    'toast.fileTooBig': '「{name}」({size}) 超过 300 MB 上限，已跳过，建议用桌面工具分批处理',
    'toast.totalTooBigDesktop': '文件总量已超过 1.8 GB 上限，请减少文件或分批合并',
    'toast.totalTooBigMobile': '文件总量已超过 180 MB 上限，请减少文件或分批合并',
    'toast.freeFileLimit': '免费版最多 {max} 个文件，请移除部分文件或升级',
    'toast.freeSingleFileTooBig': '「{name}」({size}) 超过免费版 {max} MB 单文件上限，已跳过',
    'toast.freeTotalTooBig': '免费版总大小不能超过 {max} MB，请减少文件或升级',
    'toast.mergeDone': '合并完成',
    'toast.mergeFailed': '合并失败：{message}',
    'toast.parseError': '解析失败',
    'error.encryptedCannotMerge': '「{name}」已加密，无法合并，请先解密',
    'error.unknown': '未知错误',

    // ---- 谷歌登录 ----
    'auth.signIn': '登录',
    'auth.signOut': '退出登录',
    'auth.signInWithGoogle': '使用谷歌账号登录',
    'auth.signedInAs': '已登录 {name}',

    // ---- Footer ----
    'footer.privacy': '隐私政策',
    'footer.terms': '服务条款',
    'footer.faq': '常见问题',
    'footer.blog': '博客',
    'footer.contact': '联系我们',
    'footer.copyright': '© {year} MergeLocal。文件本地处理，不上传服务器。',

    // ---- 定价页 ----
    'pricing.title': '简单透明的定价',
    'pricing.subtitle': '免费版已满足日常需求，Pro 版解锁全部能力。',
    'pricing.free.name': '免费版',
    'pricing.free.price': '¥0',
    'pricing.free.desc': '日常 PDF 合并足够了',
    'pricing.free.feature1': '最多 5 个文件',
    'pricing.free.feature2': '单文件上限 100 MB',
    'pricing.free.feature3': '总大小上限 200 MB',
    'pricing.free.feature4': '无水印保真合并',
    'pricing.free.feature5': '本地离线处理',
    'pricing.free.cta': '当前方案',
    'pricing.pro.name': 'Pro 版',
    'pricing.pro.price': '¥ 49',
    'pricing.pro.period': '/月',
    'pricing.pro.desc': '适合高频使用和大型文档',
    'pricing.pro.feature1': '不限文件个数',
    'pricing.pro.feature2': '单文件上限 500 MB',
    'pricing.pro.feature3': '总大小上限 2 GB',
    'pricing.pro.feature4': '按页旋转',
    'pricing.pro.feature5': '自动添加书签',
    'pricing.pro.feature6': '优先技术支持',
    'pricing.pro.cta': '订阅 Pro',
    'pricing.pro.ctaSub': '可随时取消',
    'pricing.yearly.name': 'Pro 年付',
    'pricing.yearly.price': '¥ 399',
    'pricing.yearly.period': '/年',
    'pricing.yearly.desc': '省 32%，相当于 ¥33/月',
    'pricing.yearly.cta': '订阅年付',
    'pricing.yearly.ctaSub': '最受欢迎',
    'pricing.guarantee': '30 天无理由退款 · 安全支付',
    'pricing.note': 'Pro 版使用需要登录谷歌账号。支付由 PayPal 安全处理，你的支付信息不会存储在我们服务器上。',

    // ---- 隐私政策 ----
    'privacy.title': '隐私政策',
    'privacy.updated': '最后更新：2026 年 7 月',

    // ---- 服务条款 ----
    'terms.title': '服务条款',
    'terms.updated': '最后更新：2026 年 7 月',

    // ---- 博客 ----
    'blog.title': '博客',
    'blog.desc': '关于 PDF 处理、隐私保护和工具技巧的文章。',
    'blog.placeholder': '文章即将上线，敬请期待...',

    // ---- 联系我们 ----
    'contact.title': '联系我们',
    'contact.desc': '有问题或建议？我们很乐意听取你的意见。',
    'contact.email': '邮箱',
    'contact.github': 'GitHub',
  },

  en: {
    // ---- 元信息 / 品牌 ----
    'app.name': 'PDF Merge',
    'app.tagline': 'Local & offline · Privacy first',

    // ---- 主题切换 ----
    'theme.toLight': 'Switch to light theme',
    'theme.toDark': 'Switch to dark theme',
    'theme.light': 'Light theme',
    'theme.dark': 'Dark theme',

    // ---- 语言切换 ----
    'lang.switch': 'Switch interface language',
    'lang.zh': '中文',
    'lang.en': 'English',

    // ---- 信任徽标 ----
    'secure.text': 'Files never leave your device',

    // ---- 通用 ----
    'common.close': 'Dismiss',

    // ---- DnD 无障碍播报 (F3) ----
    'dnd.start': 'Started dragging "{name}"',
    'dnd.over': '"{active}" moved above "{over}"',
    'dnd.end': 'Moved "{active}" to "{over}"',
    'dnd.cancel': 'Cancelled dragging "{name}"',

    // ---- TopBar ----
    'topbar.clear': 'Clear all files',
    'topbar.clearTitle': 'Clear',

    // ---- DropZone (F1) ----
    'dropzone.title': 'Drop PDF files here',
    'dropzone.subtitle': 'or click to choose files · add multiple at once',
    'dropzone.button': 'Choose files',
    'dropzone.addMore': 'Add more PDF files',

    // ---- 首访引导 ----
    'onboard.text': 'Tip: After adding files, drag the handle to reorder. Expand a card to extract pages.',

    // ---- ActionBar (F2/F4/F6) ----
    'action.summary': '{files} files · {pages} pages · {selected} selected',
    'action.limit': 'Free: {files}/{maxFiles} files · {size}/{maxSize} MB',
    'action.filesOverLimit': 'Exceeds {max} file limit. Remove some files.',
    'action.sizeOverLimit': 'Exceeds {max} MB total limit. Remove some files.',
    'action.merge': 'Merge & Download',
    'action.merging': 'Merging…',
    'action.emptyHint': 'Add at least one PDF',
    'action.progress': 'Merging… {done} / {total} pages',

    // ---- FileCard (F3/F4/F5) ----
    'file.parsing': 'Parsing…',
    'file.meta': '{pages} pages · {size}',
    'file.allPages': 'All {n} pages',
    'file.selectedPages': '{sel}/{total} selected',
    'file.dragHandle': 'Drag to reorder {name}',
    'file.moveUp': 'Move up {name}',
    'file.moveDown': 'Move down {name}',
    'file.expand': 'Expand page range',
    'file.collapse': 'Collapse page range',
    'file.remove': 'Remove {name}',
    'file.encrypted': 'This PDF is encrypted. Decrypt it before uploading.',
    'file.corrupted': 'File may be corrupted and cannot be read.',

    // ---- 阈值 Badge 文案 ----
    'badge.fileYellow': 'Large file',
    'badge.fileOrange': 'Very large file',
    'badge.fileBlack': 'Oversized file',
    'badge.pageYellow': 'Many pages',
    'badge.pageOrange': 'Lots of pages',
    'badge.pageBlack': 'Too many pages',

    // ---- PageRangeSelector (F4) ----
    'range.all': 'All pages',
    'range.specific': 'Specific range',
    'range.placeholder': 'e.g. 1-3, 5',
    'range.total': '{n} pages total',
    'range.errorSuffix': 'will merge all pages',
    'range.selected': '{sel} / {total} selected',

    // ---- ResultPanel (F6) ----
    'result.failed': 'Merge failed',
    'result.noData': 'No file to download',
    'result.noDataHint': 'Add PDFs and merge them on the workbench first.',
    'result.done': 'Merge complete',
    'result.retry': 'Retry',
    'result.back': 'Back to workbench',
    'result.download': 'Download',
    'result.open': 'Open in new tab',
    'result.mergeAgain': 'Merge another',
    'result.bookmarkNote': 'After merging, the original bookmarks and cross-file internal links may break, but page content stays intact.',
    'result.meta': '{name} · {size} · {pages} pages',

    // ---- Toast / 错误 ----
    'toast.onlyPdf': 'Only PDF files are supported',
    'toast.fileTooBig': '"{name}" ({size}) exceeds the 300 MB limit and was skipped. Use a desktop tool in batches.',
    'toast.totalTooBigDesktop': 'Total size exceeds the 1.8 GB limit. Remove some files or merge in batches.',
    'toast.totalTooBigMobile': 'Total size exceeds the 180 MB limit. Remove some files or merge in batches.',
    'toast.freeFileLimit': 'Free plan: up to {max} files. Remove some files or upgrade.',
    'toast.freeSingleFileTooBig': '"{name}" ({size}) exceeds the {max} MB free single-file limit and was skipped.',
    'toast.freeTotalTooBig': 'Free plan: total size cannot exceed {max} MB. Remove some files or upgrade.',
    'toast.mergeDone': 'Merge complete',
    'toast.mergeFailed': 'Merge failed: {message}',
    'toast.parseError': 'Failed to parse',
    'error.encryptedCannotMerge': '"{name}" is encrypted and cannot be merged. Decrypt it first.',
    'error.unknown': 'Unknown error',

    // ---- Google Sign-In ----
    'auth.signIn': 'Sign in',
    'auth.signOut': 'Sign out',
    'auth.signInWithGoogle': 'Sign in with Google',
    'auth.signedInAs': 'Signed in as {name}',

    // ---- Footer ----
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.faq': 'FAQ',
    'footer.blog': 'Blog',
    'footer.contact': 'Contact',
    'footer.copyright': '© {year} MergeLocal. Files processed locally, never uploaded.',

    // ---- Pricing ----
    'pricing.title': 'Simple & Transparent Pricing',
    'pricing.subtitle': 'The free plan covers daily needs. Pro unlocks everything.',
    'pricing.free.name': 'Free',
    'pricing.free.price': '$0',
    'pricing.free.desc': 'Great for everyday PDF merging',
    'pricing.free.feature1': 'Up to 5 files',
    'pricing.free.feature2': '100 MB per file',
    'pricing.free.feature3': '200 MB total',
    'pricing.free.feature4': 'Watermark-free merge',
    'pricing.free.feature5': 'Local offline processing',
    'pricing.free.cta': 'Current plan',
    'pricing.pro.name': 'Pro',
    'pricing.pro.price': '$7',
    'pricing.pro.period': '/month',
    'pricing.pro.desc': 'For heavy users & large documents',
    'pricing.pro.feature1': 'Unlimited files',
    'pricing.pro.feature2': '500 MB per file',
    'pricing.pro.feature3': '2 GB total',
    'pricing.pro.feature4': 'Rotate pages',
    'pricing.pro.feature5': 'Auto add bookmarks',
    'pricing.pro.feature6': 'Priority support',
    'pricing.pro.cta': 'Subscribe Pro',
    'pricing.pro.ctaSub': 'Cancel anytime',
    'pricing.yearly.name': 'Pro Yearly',
    'pricing.yearly.price': '$49',
    'pricing.yearly.period': '/year',
    'pricing.yearly.desc': 'Save 42% — $4/mo',
    'pricing.yearly.cta': 'Subscribe Yearly',
    'pricing.yearly.ctaSub': 'Most popular',
    'pricing.guarantee': '30-day money-back guarantee · Secure payment',
    'pricing.note': 'Pro requires signing in with Google. Payments are securely processed by PayPal; your payment info is never stored on our servers.',

    // ---- Privacy ----
    'privacy.title': 'Privacy Policy',
    'privacy.updated': 'Last updated: July 2026',

    // ---- Terms ----
    'terms.title': 'Terms of Service',
    'terms.updated': 'Last updated: July 2026',

    // ---- Blog ----
    'blog.title': 'Blog',
    'blog.desc': 'Articles about PDF processing, privacy, and tips.',
    'blog.placeholder': 'Articles coming soon...',

    // ---- Contact ----
    'contact.title': 'Contact Us',
    'contact.desc': 'Have questions or feedback? We\'d love to hear from you.',
    'contact.email': 'Email',
    'contact.github': 'GitHub',
  },
};

export const LANGS: Lang[] = ['zh', 'en'];
export const LANG_STORAGE_KEY = 'pdf-merge-lang';
