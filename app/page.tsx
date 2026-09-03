'use client';

import dynamic from 'next/dynamic';
import { Spinner } from '@/components/atoms/Spinner';
import { AdSlot } from '@/components/atoms/AdSlot';

const FAQ_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '合并 PDF 需要把文件上传到服务器吗？', acceptedAnswer: { '@type': 'Answer', text: '不需要。PDFMergeNext 的全部解析与合并都在你的浏览器本地完成，文件不会离开你的设备，断网也可继续处理已加载的页面。' } },
    { '@type': 'Question', name: '合并后的文件安全吗？', acceptedAnswer: { '@type': 'Answer', text: '安全。由于不上传，服务器无从获取你的内容，也不存在被第三方留存或泄露的风险，符合 GDPR、HIPAA 及《个人信息保护法》对敏感文档处理的要求。' } },
    { '@type': 'Question', name: '有文件大小或数量限制吗？', acceptedAnswer: { '@type': 'Answer', text: '免费、无水印，不对文件大小和数量做硬性限制。处理性能取决于你的设备内存，超大文档建议分批操作。' } },
    { '@type': 'Question', name: '会给我加水印吗？', acceptedAnswer: { '@type': 'Answer', text: '不会。合并输出的 PDF 干净无广告、无水印，可直接用于正式提交或打印。' } },
    { '@type': 'Question', name: '支持哪些系统？', acceptedAnswer: { '@type': 'Answer', text: '只要是现代浏览器（Chrome、Edge、Safari、Firefox 等）即可，桌面与移动端均可用，无需安装任何插件或客户端。' } },
    { '@type': 'Question', name: '开源吗？代码可信吗？', acceptedAnswer: { '@type': 'Answer', text: '是开源工具。所有逻辑运行在本地，你可以放心使用；详细实现见我们的隐私政策与开源仓库。' } },
    { '@type': 'Question', name: '加密或带密码的 PDF 能合并吗？', acceptedAnswer: { '@type': 'Answer', text: '需要先去掉打开密码或用正确密码解密后才能解析。出于安全考虑，本工具不会尝试破解任何密码，请使用你自己有权处理的文件。' } },
    { '@type': 'Question', name: '合并后能保留书签和超链接吗？', acceptedAnswer: { '@type': 'Answer', text: '可以。合并在本地进行，会尽量保留原文件的内部链接、书签与目录结构；个别由特殊软件生成的复杂 PDF 可能部分丢失，建议合并后点一下目录确认。' } },
    { '@type': 'Question', name: '扫描的图片型 PDF 合并后会变清晰吗？', acceptedAnswer: { '@type': 'Answer', text: '不会，也不会变模糊。合并只是把页面按顺序装订，不改变任何一页的原有分辨率。若需要可搜索的文字，请先做 OCR 再合并。' } },
    { '@type': 'Question', name: '断网后还能用吗？', acceptedAnswer: { '@type': 'Answer', text: '能。所有解析与合并都在本地执行，断网不影响已加载页面的处理；只是无法访问在线帮助或更新。' } },
    { '@type': 'Question', name: '可以把合并结果再转回 Word 吗？', acceptedAnswer: { '@type': 'Answer', text: 'PDF 转 Word 是另一类操作，本工具专注"合并"。若需编辑，可用支持 PDF 导出的办公软件打开合并后的文件再另存为 Word；注意图片型 PDF 转出的文字仍需 OCR。' } },
  ],
};

// 纯客户端工具：PDF 解析/合并、Web Worker、localStorage 等均在浏览器执行。
// 关闭 SSR 以避免服务端访问 window/document/Worker 导致的报错与 hydration 不一致。
const App = dynamic(() => import('@/App'), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-screen items-center justify-center bg-canvas text-fg">
      <Spinner size={28} />
    </div>
  ),
});

export default function Page() {
  return (
    <>
      <App />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
      <section className="mx-auto max-w-3xl px-4 pb-16 pt-10 text-sm leading-relaxed text-fg-secondary">
        <h2 className="text-base font-semibold text-fg">
          PDFMergeNext — 零上传、隐私优先的免费 PDF 在线合并工具
        </h2>
        <p className="mt-3">
          PDFMergeNext 是一款完全在浏览器客户端运行的 PDF 合并工具。所有文件处理均在本地完成，
          无需上传至服务器，确保你的文档隐私安全。支持批量合并、拖拽排序、挑页合并（输入
          <code className="mx-1 rounded bg-subtle px-1.5 py-0.5 font-mono text-xs">1-3,5</code>语法挑页）、
          免费无水印，不限制文件大小和数量。开源工具，适用于法律合同、学术论文、财务报表、证件扫描等场景。
        </p>

        <h3 className="mt-5 text-base font-semibold text-fg">如何使用（三步）</h3>
        <ol className="mt-2 list-decimal space-y-1 pl-5">
          <li>拖入或选择需要合并的 PDF 文件，可一次添加多个。</li>
          <li>在列表中拖拽调整顺序，或用挑页语法只合并指定页面（如 <code className="mx-1 rounded bg-subtle px-1.5 py-0.5 font-mono text-xs">1-3,5</code>）。</li>
          <li>点击"合并"，浏览器本地生成新文件并直接下载，全程不上传。</li>
        </ol>

        <h3 className="mt-5 text-base font-semibold text-fg">为什么选择本地合并</h3>
        <p className="mt-2">
          大多数在线合并工具需要先把文件传到它们的服务器，存在泄露与留存风险。PDFMergeNext 利用现代浏览器的
          File System Access 与 Web Worker 能力，在本地完成解析与合并——文件不会离开你的设备，
          网络中断也不影响已加载页面的处理。对包含合同、病历、证件等敏感内容的文档尤其重要。
        </p>

        <h3 className="mt-5 text-base font-semibold text-fg">常见使用场景</h3>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>法律合同：把多个签章页、附件合并成一份可发送的 PDF。</li>
          <li>学术论文：按顺序整合正文、参考文献与附录。</li>
          <li>财务报表：将月度报表汇总为年度归档文件。</li>
          <li>证件扫描：把多页扫描件合并为单个 PDF 方便上传。</li>
          <li>日常办公：批量整理发票、收据与文档。</li>
        </ul>

        <h3 className="mt-5 text-base font-semibold text-fg">隐私与合规</h3>
        <p className="mt-2">
          隐私合规：符合 GDPR（通用数据保护条例）、HIPAA（健康保险可携性和责任法案）
          和《个人信息保护法》要求。所有合并操作在本地执行——即使断开网络，已加载的页面也能继续运行。
        </p>
        <p className="mt-2">
          支持中英双语界面。桌面端和移动端均可用，无需安装任何应用。也欢迎阅读我们的博客：
          <a href="/blog" className="ml-1 text-primary hover:underline">合并 PDF 不上传的完整指南</a>
          、
          <a href="/blog/privacy-first-pdf-workflow" className="text-primary hover:underline">隐私友好的 PDF 工作流设计</a>
          、
          <a href="/blog/pdfmergenext-vs-smallpdf-vs-ilovepdf" className="text-primary hover:underline">PDFMergeNext vs Smallpdf vs iLovePDF 对比</a>
          ，或查看
          <a href="/privacy" className="text-primary hover:underline">隐私政策</a>
          、
          <a href="/terms" className="text-primary hover:underline">服务条款</a>
          。
        </p>

        <h3 className="mt-5 text-base font-semibold text-fg">不止合并：本地 PDF 工具箱</h3>
        <p className="mt-2">
          除了合并，我们还提供同样「零上传」的本地工具，覆盖你日常处理 PDF 的完整链路：
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li><a href="/split-pdf" className="text-primary hover:underline">拆分 PDF</a>：用 1-3,5 语法提取指定页面，文件不出本机。</li>
          <li><a href="/compress-pdf" className="text-primary hover:underline">压缩 PDF</a>：在浏览器内重新序列化减小体积，无需上传到服务器。</li>
          <li><a href="/rotate-pdf" className="text-primary hover:underline">旋转 PDF</a>：把扫描件或导出的页面统一转正 90°/180°/270°。</li>
          <li><a href="/pdf-to-image" className="text-primary hover:underline">PDF 转图片</a>：把每一页渲染成 PNG/JPEG，方便插入文档或分享。</li>
        </ul>

        <h3 className="mt-5 text-base font-semibold text-fg">关于 PDF 格式，你需要知道的几件事</h3>
        <p className="mt-2">
          PDF（Portable Document Format）是一种跨平台、版式固定的文档格式，无论在 Windows、macOS 还是手机上打开，排版都不会错乱，因此成为合同、论文、报表等正式文件的首选。合并 PDF 并不会改变每一页原有的清晰度——它只是把多份文件按顺序"装订"成一份新文档，原图分辨率、字体、超链接都会保留。
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li><strong>合并后体积会变大吗？</strong> 通常会等于各文件之和，因为内容被完整保留。PDFMergeNext 在本地完成合并，不会额外上传，也不会压缩你的原图质量。</li>
          <li><strong>页数很多会卡吗？</strong> 由于处理在你的浏览器内执行，性能取决于本机内存。一般几十页到上百页的文档都能流畅处理；超大文件建议分批合并。</li>
          <li><strong>能挑页合并吗？</strong> 可以。用挑页语法（如 <code className="mx-1 rounded bg-subtle px-1.5 py-0.5 font-mono text-xs">1-3,5</code>）只抽取需要的页面，跳过无关内容。</li>
          <li><strong>合并后能再编辑吗？</strong> 合并生成的是标准 PDF，可用任意 PDF 阅读器打开；若需二次拆分，可再次使用本工具。</li>
        </ul>

        <h3 className="mt-5 text-base font-semibold text-fg">合并前，先让文件更"规整"</h3>
        <p className="mt-2">
          合并本身不改变每一页的内容，但几个小习惯能让结果更省心：统一页面尺寸（A4 与 Letter 混排时，合并后可能出现大小不一的页）、确认扫描件清晰度（合并不会提升分辨率，模糊页合并后依旧模糊）、检查字体是否嵌入（极少数情况下未嵌入字体的 PDF 在别处打开会替换字体）。
        </p>

        <h3 className="mt-5 text-base font-semibold text-fg">挑页语法进阶：不只"1-3,5"</h3>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li><code className="mx-1 rounded bg-subtle px-1.5 py-0.5 font-mono text-xs">1-3,5</code>：合并第 1–3 页与第 5 页。</li>
          <li><code className="mx-1 rounded bg-subtle px-1.5 py-0.5 font-mono text-xs">-3</code>：只要前三页（从头到第三页）。</li>
          <li><code className="mx-1 rounded bg-subtle px-1.5 py-0.5 font-mono text-xs">5-</code>：从第五页到最后一页。</li>
          <li><code className="mx-1 rounded bg-subtle px-1.5 py-0.5 font-mono text-xs">2,4,6</code>：只抽取偶数页，适合把双面扫描拆开重组。</li>
        </ul>
        <p className="mt-2">
          挑页适合"大文件只取需要的几页"——比如一份 50 页合同你只需签字页和附件，挑出来合并成 5 页，发送更轻、对方打开更快。
        </p>

        <h3 className="mt-5 text-base font-semibold text-fg">合并后，花 10 秒校验这三件事</h3>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li><strong>页数对不对：</strong> 合并后的总页数应等于各文件页数之和（或你挑页的总和）。</li>
          <li><strong>超链接和书签：</strong> PDFMergeNext 在本地合并时会尽量保留原文件的内部链接与书签，打开后点一下目录确认跳转正常。</li>
          <li><strong>体积与清晰度：</strong> 体积应约等于原文件之和；图片型扫描件不会因合并变清晰，也不会变模糊。</li>
        </ul>

        <h3 className="mt-5 text-base font-semibold text-fg">不同场景的合并建议</h3>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li><strong>合同或协议：</strong> 把签字页、附件、补充协议按约定顺序合并，挑页去掉草稿页，输出干净的一份。</li>
          <li><strong>学术论文：</strong> 正文、参考文献、附录、致谢按学校模板排序；注意页码连续。</li>
          <li><strong>发票或报销：</strong> 把一个月的发票扫描件合并成单文件，方便财务归档与邮件发送。</li>
          <li><strong>证件材料：</strong> 身份证、户口本、证明等多页扫描合并，上传政务或银行时只需一个文件。</li>
        </ul>

        <h3 className="mt-5 text-base font-semibold text-fg">关于 PDF，再多说两句</h3>
        <p className="mt-2">
          PDF 分"文本型"和"图片型"两种：文本型由可选中的文字构成，图片型则是把纸面扫描成图（文字无法直接复制）。合并对两者都适用，但图片型 PDF 体积通常更大、且无法被搜索。若你的扫描件是图片型，可先做一次 OCR（光学字符识别）再合并，后续检索会方便很多。此外，标准 PDF 支持加密与权限设置——带打开密码的 PDF 需先解密，才能被本工具解析合并。
        </p>

        <h3 className="mt-5 text-base font-semibold text-fg">常见问题（FAQ）</h3>
        <dl className="mt-2 space-y-3">
          <div>
            <dt className="font-semibold text-fg">合并 PDF 需要把文件上传到服务器吗？</dt>
            <dd className="mt-1 text-fg-secondary">不需要。PDFMergeNext 的全部解析与合并都在你的浏览器本地完成，文件不会离开你的设备，断网也可继续处理已加载的页面。</dd>
          </div>
          <div>
            <dt className="font-semibold text-fg">合并后的文件安全吗？</dt>
            <dd className="mt-1 text-fg-secondary">安全。由于不上传，服务器无从获取你的内容，也不存在被第三方留存或泄露的风险，符合 GDPR、HIPAA 及《个人信息保护法》对敏感文档处理的要求。</dd>
          </div>
          <div>
            <dt className="font-semibold text-fg">有文件大小或数量限制吗？</dt>
            <dd className="mt-1 text-fg-secondary">免费、无水印，不对文件大小和数量做硬性限制。处理性能取决于你的设备内存，超大文档建议分批操作。</dd>
          </div>
          <div>
            <dt className="font-semibold text-fg">会给我加水印吗？</dt>
            <dd className="mt-1 text-fg-secondary">不会。合并输出的 PDF 干净无广告、无水印，可直接用于正式提交或打印。</dd>
          </div>
          <div>
            <dt className="font-semibold text-fg">支持哪些系统？</dt>
            <dd className="mt-1 text-fg-secondary">只要是现代浏览器（Chrome、Edge、Safari、Firefox 等）即可，桌面与移动端均可用，无需安装任何插件或客户端。</dd>
          </div>
          <div>
            <dt className="font-semibold text-fg">开源吗？代码可信吗？</dt>
            <dd className="mt-1 text-fg-secondary">是开源工具。所有逻辑运行在本地，你可以放心使用；详细实现见我们的隐私政策与开源仓库。</dd>
          </div>
          <div>
            <dt className="font-semibold text-fg">加密或带密码的 PDF 能合并吗？</dt>
            <dd className="mt-1 text-fg-secondary">需要先去掉打开密码或用正确密码解密后才能解析。出于安全考虑，本工具不会尝试破解任何密码，请使用你自己有权处理的文件。</dd>
          </div>
          <div>
            <dt className="font-semibold text-fg">合并后能保留书签和超链接吗？</dt>
            <dd className="mt-1 text-fg-secondary">可以。合并在本地进行，会尽量保留原文件的内部链接、书签与目录结构；个别由特殊软件生成的复杂 PDF 可能部分丢失，建议合并后点一下目录确认。</dd>
          </div>
          <div>
            <dt className="font-semibold text-fg">扫描的图片型 PDF 合并后会变清晰吗？</dt>
            <dd className="mt-1 text-fg-secondary">不会，也不会变模糊。合并只是把页面按顺序装订，不改变任何一页的原有分辨率。若需要可搜索的文字，请先做 OCR 再合并。</dd>
          </div>
          <div>
            <dt className="font-semibold text-fg">断网后还能用吗？</dt>
            <dd className="mt-1 text-fg-secondary">能。所有解析与合并都在本地执行，断网不影响已加载页面的处理；只是无法访问在线帮助或更新。</dd>
          </div>
          <div>
            <dt className="font-semibold text-fg">可以把合并结果再转回 Word 吗？</dt>
            <dd className="mt-1 text-fg-secondary">PDF 转 Word 是另一类操作，本工具专注"合并"。若需编辑，可用支持 PDF 导出的办公软件打开合并后的文件再另存为 Word；注意图片型 PDF 转出的文字仍需 OCR。</dd>
          </div>
        </dl>
      </section>

      {/* AdSense 广告位 — 首页 SEO 文案下方 */}
      <div className="mx-auto max-w-3xl px-4">
        <AdSlot />
      </div>
    </>
  );
}
