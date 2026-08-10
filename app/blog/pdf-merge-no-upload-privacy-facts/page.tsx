import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';

export const metadata: Metadata = {
  title: '文件不上传：7 个你必须清楚的隐私事实 | PDFMergeNext',
  description:
    '合并 PDF 时"文件不上传"意味着什么？7 个隐私事实：没有上传就没有服务器日志、没有传输链路、没有第三方接触。以及哪些承诺其实说了等于没说。7 privacy facts about no-upload PDF tools.',
  keywords: [
    '文件不上传',
    'no upload pdf merge',
    'no-upload file privacy',
    'local pdf merge privacy',
    '浏览器本地合并 PDF',
    'pdf merge no upload',
    'PDFMergeNext 不上传',
    'file privacy pdf',
  ],
  alternates: {
    canonical: '/blog/pdf-merge-no-upload-privacy-facts',
    languages: {
      'zh-CN': '/blog/pdf-merge-no-upload-privacy-facts',
      'en-US': '/blog/pdf-merge-no-upload-privacy-facts',
      'x-default': '/blog/pdf-merge-no-upload-privacy-facts',
    },
  },
};

const FAQ = [
  {
    q: '"文件不上传"和"处理完就删除"有什么区别？',
    a: '区别是承诺和事实。不上传是架构事实：文件没有网络路径离开设备，第三方在物理上接触不到。处理完就删除是服务商承诺，你无法验证它是否真的删除、是否被复制或用于训练。',
  },
  {
    q: '浏览器本地处理安全吗？',
    a: '安全边界取决于你的设备。文件在浏览器内存里处理，不落盘到服务器；但如果你在共享电脑或装有恶意软件的设备上操作，风险来自设备本身，而不是处理方式。',
  },
  {
    q: '怎么验证一个工具真的不上传？',
    a: '打开开发者工具的 Network 面板，合并一个文件，观察有没有上传请求（multipart/form-data 或二进制 PUT）。没有请求就是本地处理。断网刷新后还能用，是第二个验证手段。',
  },
  {
    q: 'PDFMergeNext 是怎么做到不上传的？',
    a: '合并逻辑用 WebAssembly + pdf-lib 在浏览器本地运行，File API 读入内存，处理完直接触发下载。没有上传接口，也没有服务器存储。',
  },
];

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '首页 / Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: '博客 / Blog', item: `${SITE_URL}/blog` },
          {
            '@type': 'ListItem',
            position: 3,
            name: '文件不上传：7 个隐私事实 / 7 Privacy Facts About No-Upload',
            item: `${SITE_URL}/blog/pdf-merge-no-upload-privacy-facts`,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: FAQ.map((it) => ({
          '@type': 'Question',
          name: it.q,
          acceptedAnswer: { '@type': 'Answer', text: it.a },
        })),
      },
      {
        '@type': 'Article',
        headline: '文件不上传：7 个你必须清楚的隐私事实 / 7 Privacy Facts About No-Upload File',
        description: '合并 PDF 时"文件不上传"到底意味着什么：没有上传就没有服务器日志、没有传输链路、没有第三方接触。以及哪些承诺说了等于没说。',
        author: { '@type': 'Person', name: 'PDFMergeNext', url: 'https://pdfmergenext.shop', '@id': 'https://pdfmergenext.shop/#organization' },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-08-11',
        dateModified: '2026-08-11',
        image: `${SITE_URL}/og`,
        url: `${SITE_URL}/blog/pdf-merge-no-upload-privacy-facts`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/pdf-merge-no-upload-privacy-facts` },
      },
    ],
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav className="mb-6 text-sm text-fg-muted" aria-label="Breadcrumb">
        <a href="/" className="hover:underline">首页 / Home</a>
        {' › '}
        <a href="/blog" className="hover:underline">博客 / Blog</a>
        {' › '}
        <span>文件不上传：7 个隐私事实</span>
      </nav>

      <h1 className="text-3xl font-bold leading-tight">
        文件不上传：7 个你必须清楚的隐私事实 / 7 Privacy Facts About No-Upload File
      </h1>
      <p className="mt-2 text-sm text-fg-muted">
        更新于 2026-08-11 · 阅读约 7 分钟 / 7 min read
      </p>

      <div className="my-6 rounded-lg bg-subtle p-4 text-sm leading-relaxed">
        <strong className="block mb-1">快速结论 / TL;DR</strong>
        "文件不上传"不是营销话术，是架构事实：你的文件没有网络路径离开设备。
        但很多工具宣传的"传输加密""30 分钟后删除"本质上只是承诺，无法验证。
        这 7 个事实帮你分清什么是事实、什么是承诺。
      </div>

      <nav className="mb-8 rounded-lg border border-line p-4 text-sm">
        <strong className="block mb-2">目录 / Contents</strong>
        <ul className="list-inside space-y-1">
          <li><a href="#f1" className="text-primary hover:underline">1. 不上传是架构，不是开关</a></li>
          <li><a href="#f2" className="text-primary hover:underline">2. 没有服务器，就没有日志</a></li>
          <li><a href="#f3" className="text-primary hover:underline">3. 没有传输，就没有拦截</a></li>
          <li><a href="#f4" className="text-primary hover:underline">4. 本机处理 ≠ 绝对安全</a></li>
          <li><a href="#f5" className="text-primary hover:underline">5. "删除承诺"验证不了</a></li>
          <li><a href="#f6" className="text-primary hover:underline">6. 大文件有物理极限</a></li>
          <li><a href="#f7" className="text-primary hover:underline">7. 你可以自己验证</a></li>
          <li><a href="#faq" className="text-primary hover:underline">8. 常见问题 / FAQ</a></li>
        </ul>
      </nav>

      <h2 id="f1" className="text-2xl font-semibold mt-10">1. 不上传是架构，不是开关</h2>
      <p className="mt-3">
        这是最容易被误解的一点。很多在线工具在设置里提供"隐私模式"，勾选后声称不上传。
        但工具的核心逻辑在服务器，本地选项只是少存一份副本。真正的"文件不上传"是架构层面
        决定的：处理代码本身就在浏览器里运行，文件根本没有被发送的路径。本地合并工具
        （client-side pdf merge）天生如此，不需要任何开关。
      </p>

      <h2 id="f2" className="text-2xl font-semibold mt-10">2. 没有服务器，就没有日志</h2>
      <p className="mt-3">
        在线工具哪怕删除了你的文件，访问日志、调试日志、性能埋点里仍可能留有文件名的痕迹，
        甚至文件内容被临时缓存。本地处理没有这些：文件在浏览器内存里，浏览器关闭即释放，
        不产生任何服务端日志。这也是 no-upload file privacy 和"云端隐私模式"的本质差异。
      </p>

      <h2 id="f3" className="text-2xl font-semibold mt-10">3. 没有传输，就没有拦截</h2>
      <p className="mt-3">
        "传输加密"保护的是传输过程，但加密链路的两端：你的设备和服务器，都可能存在风险点。
        服务器端被入侵、内部人员访问、配合执法调取，这些都不是加密能解决的。
        文件不上传直接把"传输"这一环删掉了，攻击面少了一条完整链路。
      </p>

      <h2 id="f4" className="text-2xl font-semibold mt-10">4. 本机处理 ≠ 绝对安全</h2>
      <p className="mt-3">
        诚实一点：本地处理解决的是"第三方接触文件"的问题，不解决你设备自身的问题。
        如果你在共享电脑、被植入恶意软件的设备上操作，风险依然存在。所以处理合同、证件时，
        建议在可信设备上完成。这是本机处理的边界，也是它和"绝对安全"的区别。
      </p>

      <h2 id="f5" className="text-2xl font-semibold mt-10">5. "删除承诺"验证不了</h2>
      <p className="mt-3">
        "我们 30 分钟后自动删除你的文件"——这是在线工具最常见的承诺，也是你唯一能得到的承诺。
        你无法验证它是否真的删除了、是否被复制到备份、是否被用于模型训练。
        文件不上传则不需要任何承诺：文件没去过服务器，删除问题在物理上不存在。
      </p>

      <h2 id="f6" className="text-2xl font-semibold mt-10">6. 大文件有物理极限</h2>
      <p className="mt-3">
        本地处理受浏览器内存限制，几百 MB 的超大文件可能卡顿甚至失败。这是"不上传"要付的代价：
        服务器可以堆内存，你的浏览器不行。遇到超大文件，建议拆分处理。
        反过来看，这也是判断工具是否真本地的线索——真本地工具会跟你说清这个限制。
      </p>

      <h2 id="f7" className="text-2xl font-semibold mt-10">7. 你可以自己验证</h2>
      <p className="mt-3">
        两个实测方法，不用信任何宣传。第一，断网刷新页面再操作，能用的就是本地工具；
        第二，打开开发者工具 Network 面板，合并一个文件，观察有没有上传请求。
        有请求就是服务器端。具体步骤我们写过一篇
        <Link href="/blog/how-zero-upload-pdf-tools-work" className="text-primary hover:underline">用 DevTools 验证零上传</Link>的详细教程。
      </p>

      <h2 id="faq" className="text-2xl font-semibold mt-10">8. 常见问题 / FAQ</h2>
      <p className="mt-3"><strong>"文件不上传"和"处理完就删除"有什么区别？</strong> 区别是承诺和事实。不上传是架构事实：文件没有网络路径离开设备，第三方在物理上接触不到。处理完就删除是服务商承诺，你无法验证它是否真的删除、是否被复制或用于训练。</p>
      <p className="mt-2"><strong>浏览器本地处理安全吗？</strong> 安全边界取决于你的设备。文件在浏览器内存里处理，不落盘到服务器；但如果你在共享电脑或装有恶意软件的设备上操作，风险来自设备本身，而不是处理方式。</p>
      <p className="mt-2"><strong>怎么验证一个工具真的不上传？</strong> 打开开发者工具的 Network 面板，合并一个文件，观察有没有上传请求（multipart/form-data 或二进制 PUT）。没有请求就是本地处理。断网刷新后还能用，是第二个验证手段。</p>
      <p className="mt-2"><strong>PDFMergeNext 是怎么做到不上传的？</strong> 合并逻辑用 WebAssembly + pdf-lib 在浏览器本地运行，File API 读入内存，处理完直接触发下载。没有上传接口，也没有服务器存储。</p>

      <div className="mt-8 rounded-lg bg-subtle p-4 text-sm leading-relaxed">
        <strong className="block mb-1">相关阅读 / Related</strong>
        <ul className="list-inside space-y-1">
          <li><Link href="/blog/pdfmergenext-privacy-design" className="text-primary hover:underline">PDFMergeNext 隐私设计白皮书</Link></li>
          <li><Link href="/blog/client-side-vs-server-side-pdf-tools" className="text-primary hover:underline">客户端 vs 服务器端：架构对比</Link></li>
          <li><Link href="/blog/how-zero-upload-pdf-tools-work" className="text-primary hover:underline">零上传 PDF 工具：工作原理全解析</Link></li>
        </ul>
      </div>

      <p className="mt-8">
        到 <a href="https://pdfmergenext.shop" className="text-primary hover:underline">PDFMergeNext（pdfmergenext.shop）</a>
        的<a href="/" className="text-primary hover:underline">首页</a>直接用本地合并工具试试。
        文件全程不出浏览器。
      </p>
    </article>
  );
}
