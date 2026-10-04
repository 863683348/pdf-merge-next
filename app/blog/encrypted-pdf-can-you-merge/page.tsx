import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';

export const metadata: Metadata = {
  title: 'PDF 加密文件能合并吗？密码、权限与签名处理指南 | Can You Merge Encrypted PDFs? | PDFMergeNext',
  description:
    '有密码的 PDF 不一定能直接合并：打开密码、权限限制、证书加密和数字签名要分别处理。这篇给出不绕过访问控制的本地操作流程。',
  keywords: [
    'encrypted pdf merge',
    'pdf 加密 合并',
    'merge password protected pdf',
    'pdf 密码 合并',
    'permission password pdf',
    'certificate encrypted pdf',
    'digitally signed pdf merge',
    '数字签名 pdf 合并',
    'PDFMergeNext 加密合并',
  ],
  alternates: {
    canonical: '/blog/encrypted-pdf-can-you-merge',
    languages: {
      'zh-CN': '/blog/encrypted-pdf-can-you-merge',
      'en-US': '/blog/encrypted-pdf-can-you-merge',
      'x-default': '/blog/encrypted-pdf-can-you-merge',
    },
  },
  openGraph: {
    title: 'PDF 加密文件能合并吗？密码、权限与签名处理指南 · PDFMergeNext',
    description:
      '有密码的 PDF 不一定能直接合并：打开密码、权限限制、证书加密和数字签名要分别处理。这篇给出不绕过访问控制的本地操作流程。',
    type: 'article',
    url: `${SITE_URL}/blog/encrypted-pdf-can-you-merge`,
    siteName: 'PDFMergeNext',
    publishedTime: '2026-10-04T00:00:00.000Z',
    images: [{ url: `${SITE_URL}/og`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PDF 加密文件能合并吗？密码、权限与签名处理指南 · PDFMergeNext',
    description: '打开密码、权限控制、证书加密、数字签名，四种加密各自的合并处理方式一次讲清。',
    images: [`${SITE_URL}/og`],
  },
};

const FAQ = [
  {
    q: '有打开密码的 PDF 能直接合并吗？',
    a: '不能直接用。合并工具需要先解密才能重排页面，所以必须先输入正确密码打开，再合并。忘记密码时没有任何合规工具能绕过，只能找回密码或索取未加密版本。',
  },
  {
    q: 'Can I merge a password-protected PDF without the password?',
    a: 'No, not lawfully. A merger must decrypt the file to reorder pages, so the correct password is required. If the password is lost, request an unprotected copy from the sender instead of trying to bypass it.',
  },
  {
    q: '只有权限密码（禁止打印/复制）的 PDF 能合并吗？',
    a: '要看权限是否允许提取页面。很多权限密码只限制打印和复制，仍允许内容提取，这种情况下合并可以正常进行，合并后的文件通常会继承原始权限设置。',
  },
  {
    q: '合并带数字签名的 PDF，签名会失效吗？',
    a: '会。签名覆盖的是当时的字节范围，页面顺序一变签名就失效。正确做法是签名前合并，或者把已签名的文件作为独立附件保留，不要重排它的页面。',
  },
  {
    q: '证书加密的 PDF 为什么在浏览器里打不开？',
    a: '证书加密依赖本地密钥库里的私钥，浏览器沙箱读不到。这类文件需要在桌面环境用持有私钥的阅读器打开并导出为普通加密 PDF，再走本地合并流程。',
  },
];

const TOC = [
  { id: 'lead', label: '一句话结论 / TL;DR' },
  { id: 'types', label: '四种加密，处理完全不同' },
  { id: 'password', label: '打开密码：先解密再合并' },
  { id: 'permission', label: '权限密码：看提取位' },
  { id: 'signature', label: '数字签名：合并即失效' },
  { id: 'workflow', label: '本地合规操作流程' },
  { id: 'checklist', label: '失败排查清单' },
  { id: 'faq', label: '常见问题' },
];

const ENCRYPT_TABLE = [
  { kind: '打开密码 / User password', merge: '必须先输入密码', note: '解密后才能重排页面' },
  { kind: '权限密码 / Owner password', merge: '多数可直接合并', note: '取决于是否允许内容提取' },
  { kind: '证书加密 / Certificate', merge: '需桌面私钥环境', note: '浏览器读不到本地密钥库' },
  { kind: '数字签名 / Signature', merge: '合并后签名失效', note: '应改为签名前合并' },
];

const COMPARE_TABLE = [
  { dim: '能否保留加密状态', after: '合并后需重新设置', before: '单文件原样保留' },
  { dim: '签名有效性', after: '失效（字节范围变化）', before: '有效' },
  { dim: '权限继承', after: '通常继承源文件限制', before: '按原文件设置' },
  { dim: '失败时的表现', after: '报错「文件已加密」或直接卡住', before: '正常打开' },
];

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '首页', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: '博客', item: `${SITE_URL}/blog` },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'PDF 加密文件能合并吗？密码、权限与签名处理指南',
            item: `${SITE_URL}/blog/encrypted-pdf-can-you-merge`,
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
        headline: 'PDF 加密文件能合并吗？密码、权限与签名处理指南 / Can You Merge Encrypted PDFs?',
        description:
          '有密码的 PDF 不一定能直接合并：打开密码、权限限制、证书加密和数字签名要分别处理。这篇给出不绕过访问控制的本地操作流程。',
        author: {
          '@type': 'Person',
          name: 'PDFMergeNext',
          url: 'https://pdfmergenext.shop',
          '@id': 'https://pdfmergenext.shop/#organization',
        },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-10-04',
        dateModified: '2026-10-04',
        image: `${SITE_URL}/og`,
        url: `${SITE_URL}/blog/encrypted-pdf-can-you-merge`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/encrypted-pdf-can-you-merge` },
      },
    ],
  };

  return (
    <article className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-16">
      <header>
        <p className="text-caption font-semibold uppercase tracking-wide text-brand">
          加密文件 · Encrypted PDFs
        </p>
        <h1 className="mt-2 text-h1 font-bold tracking-tight text-fg">
          PDF 加密文件能合并吗？密码、权限与签名处理指南 / Can You Merge Encrypted PDFs?
        </h1>
        <p className="mt-3 text-body text-fg-secondary">
          有密码的 PDF 不一定能直接合并。打开密码、权限限制、证书加密和数字签名是四件不同的事，处理方式完全不同。这篇讲清楚每一种该怎么走，全程不绕过任何访问控制。
        </p>
        <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-subtle px-3 py-1 text-caption font-medium text-fg-muted">
          阅读约 7 分钟 · 7 min read
        </p>
      </header>

      {/* 目录锚点 */}
      <nav aria-label="文章目录" className="mt-8 rounded-xl border border-line bg-subtle p-5">
        <p className="text-caption font-semibold uppercase tracking-wide text-fg-muted">目录 / Contents</p>
        <ul className="mt-2 grid gap-1 sm:grid-cols-2">
          {TOC.map((t) => (
            <li key={t.id}>
              <a href={`#${t.id}`} className="text-sm text-brand hover:underline">
                {t.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-8 space-y-8 text-body text-fg">
        {/* 导语 */}
        <section id="lead" className="rounded-xl border border-brand/30 bg-brand/5 p-6">
          <h2 className="text-title font-semibold text-fg">一句话结论</h2>
          <p className="mt-2 text-fg-secondary">
            <strong>加密 PDF 可以合并</strong>，但必须先合法解密。打开密码要输入密码；权限密码多数能直接合并；证书加密需要桌面私钥环境；数字签名一旦重排页面就会失效，应该改为签名前合并。
          </p>
          <p className="mt-2 text-fg-secondary">
            Encrypted PDFs can be merged, but only after lawful decryption. User passwords must be supplied, permission-restricted files usually merge fine, certificate-encrypted files need a desktop key store, and signed files lose their signature the moment page order changes.
          </p>
        </section>

        {/* 四种加密 */}
        <section id="types">
          <h2 className="text-title font-semibold text-fg">四种「加密」，处理完全不同 / Four different things</h2>
          <p className="mt-2 text-fg-secondary">
            日常说的「PDF 加密」其实混了四种机制。它们的加密对象不一样，合并时的表现也完全不同，先分清是哪一种再决定流程。
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-line">
            <table className="w-full text-left text-sm">
              <thead className="bg-subtle text-fg-muted">
                <tr>
                  <th className="px-4 py-2 font-semibold">加密类型</th>
                  <th className="px-4 py-2 font-semibold">能否合并</th>
                  <th className="px-4 py-2 font-semibold">关键点</th>
                </tr>
              </thead>
              <tbody className="text-fg-secondary">
                {ENCRYPT_TABLE.map((r) => (
                  <tr key={r.kind} className="border-t border-line">
                    <td className="px-4 py-2">{r.kind}</td>
                    <td className="px-4 py-2">{r.merge}</td>
                    <td className="px-4 py-2">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-fg-secondary">
            判断方法很简单：用阅读器打开文件，看它提示你要什么。要密码是打开密码；能看但复制不了是权限限制；提示证书选择是证书加密；角落有签名徽章是数字签名。
          </p>
          <p className="mt-3 text-fg-secondary">
            Open the file in a reader and read the prompt. A password dialog means a user password. Readable but un-copyable means permission flags. A certificate picker means public-key encryption. A signature badge means the file is signed.
          </p>
        </section>

        {/* 打开密码 */}
        <section id="password">
          <h2 className="text-title font-semibold text-fg">打开密码：必须先解密 / User passwords come first</h2>
          <p className="mt-2 text-fg-secondary">
            合并的本质是把页面对象从两个文件里读出来、重新编号、写进一个新文件。只要文件处于加密状态，页面对象就不可读，所以任何合并工具都必须先解密。这一步绕不过去，也不应该绕过去。
          </p>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-fg-secondary">
            <li>用正确密码打开文件，确认能正常阅读</li>
            <li>在本地导出一份已解密的临时副本</li>
            <li>按目标顺序合并这些副本</li>
            <li>合并完成后删除临时副本，或对结果重新加密码</li>
          </ol>
          <p className="mt-3 text-fg-secondary">
            忘记密码时合规工具无能为力，这是加密本身的设计目的。正确做法是向发送方索取未加密版本，或者找回密码，而不是尝试破解。
          </p>
          <p className="mt-3 text-fg-secondary">
            When the password is lost, no legitimate tool can help — that is the point of encryption. Ask the sender for an unprotected copy or recover the password instead of attempting to break it.
          </p>
        </section>

        {/* 权限密码 */}
        <section id="permission">
          <h2 className="text-title font-semibold text-fg">权限密码：看「内容提取」这一位 / Check the extraction flag</h2>
          <p className="mt-2 text-fg-secondary">
            权限密码（Owner password）并不加密内容，它只是设置了一组权限位：允许打印、允许复制、允许提取页面。很多文档只禁了打印和复制，内容提取仍然是允许的，这种情况下合并可以正常进行。
          </p>
          <p className="mt-3 text-fg-secondary">
            少数文档把提取位也关掉了，合并工具会直接报「文件已加密」。这时需要先用权限密码解除限制，再合并。合并后的文件通常会继承较严格的那一组权限设置。
          </p>
          <p className="mt-3 text-fg-secondary">
            Permission passwords do not encrypt content; they set flags. If content extraction is allowed, merging works. If it is denied, clear the restriction with the owner password first. The merged output typically inherits the stricter permission set.
          </p>
        </section>

        {/* 数字签名 */}
        <section id="signature">
          <h2 className="text-title font-semibold text-fg">数字签名：合并即失效 / Signatures break on reorder</h2>
          <p className="mt-2 text-fg-secondary">
            数字签名覆盖的是文件的一段字节范围，并记录了当时的哈希值。合并会重排页面、重建交叉引用表，字节范围必然变化，签名也就随之失效。这不是工具的缺陷，是签名的设计意图——它就是要检测任何改动。
          </p>
          <p className="mt-3 text-fg-secondary">
            所以顺序要反过来：先合并，再签名。如果文件已经签过名，正确做法是把它作为独立附件保留，或者请签署方在合并后的版本上重新签一次。
          </p>
          <p className="mt-3 text-fg-secondary">
            A signature covers a byte range and its hash. Merging rewrites page order and the cross-reference table, so the byte range changes and the signature breaks. Merge first, then sign — never the other way around.
          </p>
        </section>

        {/* 本地流程 */}
        <section id="workflow">
          <h2 className="text-title font-semibold text-fg">本地合规操作流程 / A local, lawful workflow</h2>
          <p className="mt-2 text-fg-secondary">
            加密文件通常也是敏感文件：合同、体检报告、财务报表。这类内容一旦上传到第三方服务器，解密后的明文就留在了别人的机器上。全程在本地处理是唯一稳妥的选择。
          </p>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-fg-secondary">
            <li>确认每个文件的加密类型（看提示，不要猜）</li>
            <li>逐个在本地解密，只保留临时副本</li>
            <li>检查页面顺序和书签是否完整</li>
            <li>本地合并，输出新文件</li>
            <li>按需对结果重新设置密码或权限</li>
            <li>清理临时副本</li>
          </ol>
          <Link
            href="/"
            className="mt-4 inline-block rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-on-primary transition-colors duration-fast hover:bg-brand-hover"
          >
            本地合并加密 PDF →
          </Link>
        </section>

        {/* 对比 */}
        <section id="compare">
          <h2 className="text-title font-semibold text-fg">合并前后状态对比 / Before and after</h2>
          <div className="mt-4 overflow-x-auto rounded-lg border border-line">
            <table className="w-full text-left text-sm">
              <thead className="bg-subtle text-fg-muted">
                <tr>
                  <th className="px-4 py-2 font-semibold">维度</th>
                  <th className="px-4 py-2 font-semibold">合并后</th>
                  <th className="px-4 py-2 font-semibold">单文件原状</th>
                </tr>
              </thead>
              <tbody className="text-fg-secondary">
                {COMPARE_TABLE.map((r) => (
                  <tr key={r.dim} className="border-t border-line">
                    <td className="px-4 py-2">{r.dim}</td>
                    <td className="px-4 py-2">{r.after}</td>
                    <td className="px-4 py-2">{r.before}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 排查清单 */}
        <section id="checklist" className="rounded-xl border border-line p-6">
          <h2 className="text-title font-semibold text-fg">失败排查清单 / Troubleshooting checklist</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-fg-secondary">
            <li>提示「已加密」：确认是打开密码还是权限限制，处理方式不同</li>
            <li>输入密码仍失败：检查是否为证书加密，浏览器读不到本地私钥</li>
            <li>合并后页面空白：源文件可能带签名，重排后渲染异常</li>
            <li>合并后体积暴增：加密对象表被展开，可用本地压缩收敛</li>
            <li>权限丢失：合并结果需要重新设置密码与权限位</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="rounded-xl border border-line p-6">
          <h2 className="text-title font-semibold text-fg">常见问题</h2>
          <div className="mt-4 space-y-4">
            {FAQ.map((it) => (
              <div key={it.q}>
                <h3 className="text-base font-semibold text-fg">{it.q}</h3>
                <p className="mt-1 text-fg-secondary">{it.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 相关文章 */}
      <section className="mx-auto mt-12 max-w-content px-4 sm:px-6">
        <h2 className="text-title font-semibold text-fg">相关阅读 / Related</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Link
            href="/blog/large-pdf-merge-500mb"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">大文件 PDF 合并：500MB+ 策略</p>
            <p className="mt-1 text-xs text-fg-secondary">Large PDF Merge / 内存与分批</p>
          </Link>
          <Link
            href="/blog/compress-pdf-local-no-upload"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">PDF 本地压缩：不上传的做法</p>
            <p className="mt-1 text-xs text-fg-secondary">Compress PDF Locally / 预处理</p>
          </Link>
          <Link
            href="/blog/pdf-merge-no-upload-privacy-facts"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">不上传合并的隐私事实</p>
            <p className="mt-1 text-xs text-fg-secondary">No-Upload Privacy / 数据不出设备</p>
          </Link>
          <Link
            href="/blog/pdf-batch-merge-100-files"
            className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-subtle"
          >
            <p className="text-sm font-semibold text-fg">PDF 批量合并 100 个文件</p>
            <p className="mt-1 text-xs text-fg-secondary">Batch Merge / 命名与排序</p>
          </Link>
        </div>
      </section>
    </article>
  );
}
