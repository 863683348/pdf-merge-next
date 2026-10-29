'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { PageShell } from '@/components/atoms/PageShell';
import { useT } from '@/i18n/provider';
import { getBlogPosts } from '@/lib/blog/posts';

// P1-1：按粗分类（tag 中「·」前的主类）做客户端筛选，
// 让 25+ 篇博客按主题聚类、长尾更清晰，也避免单页信息过载。
function categoryOf(tag: string): string {
  return tag.split(' · ')[0] || tag;
}

export default function BlogPage() {
  const t = useT();
  const all = getBlogPosts();
  const cats = useMemo(() => {
    const set = new Set(all.map((p) => categoryOf(p.tag)));
    return Array.from(set);
  }, [all]);
  const [active, setActive] = useState<string | null>(null);
  const posts = active ? all.filter((p) => categoryOf(p.tag) === active) : all;

  return (
    <PageShell titleKey="blog.title">
      <p className="mt-2 text-body text-fg-secondary">{t('blog.desc')}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActive(null)}
          className={`rounded-full border px-3 py-1 text-xs transition-colors duration-fast ${
            active === null
              ? 'border-brand bg-brand-subtle text-brand'
              : 'border-line text-fg-secondary hover:border-brand'
          }`}
        >
          全部 / All
        </button>
        {cats.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            className={`rounded-full border px-3 py-1 text-xs transition-colors duration-fast ${
              active === c
                ? 'border-brand bg-brand-subtle text-brand'
                : 'border-line text-fg-secondary hover:border-brand'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {(!active || active === 'iPad 技巧') && (
        <Link
          href="/blog/merge-pdf-ipad-touch-optimized"
          className="mt-6 block rounded-xl border border-line bg-surface p-6 shadow-sm transition-colors duration-fast hover:bg-subtle"
        >
          <p className="text-caption font-semibold uppercase tracking-wide text-brand">
            iPad 技巧 · iPad Tips
          </p>
          <p className="mt-1 text-xs text-fg-tertiary">2026-10-30</p>
          <h2 className="mt-1 text-title font-semibold text-fg">
            iPad 合并 PDF：触控优化
          </h2>
          <p className="mt-1 text-sm font-medium text-fg-muted">
            iPad PDF Merge: Touch Optimized
          </p>
          <p className="mt-2 text-sm text-fg-secondary">
            iPad 上合并 PDF 真正的难点不在合并，而在用指头给十几个文件排序。这篇给出两条可行路径、一条 15 页硬限制、一张场景对照表，以及发出去之前的三项核对。
          </p>
        </Link>
      )}
      {(!active || active === 'Linux 技巧') && (
        <Link
          href="/blog/merge-pdf-linux-open-source"
          className="mt-6 block rounded-xl border border-line bg-surface p-6 shadow-sm transition-colors duration-fast hover:bg-subtle"
        >
          <p className="text-caption font-semibold uppercase tracking-wide text-brand">
            Linux 技巧 · Linux Tips
          </p>
          <p className="mt-1 text-xs text-fg-tertiary">2026-10-29</p>
          <h2 className="mt-1 text-title font-semibold text-fg">
            Linux 合并 PDF：四个开源工具怎么选
          </h2>
          <p className="mt-1 text-sm font-medium text-fg-muted">
            Linux PDF Merge: Open Source Tools
          </p>
          <p className="mt-2 text-sm text-fg-secondary">
            qpdf、pdftk、Ghostscript、pdfunite 各自的边界在哪，哪几个会悄悄丢书签和表单字段，以及合并前该跑的三项检查。
          </p>
        </Link>
      )}
      {(!active || active === 'Windows 技巧') && (
        <Link
          href="/blog/merge-pdf-windows-file-order"
          className="mt-6 block rounded-xl border border-line bg-surface p-6 shadow-sm transition-colors duration-fast hover:bg-subtle"
        >
          <p className="text-caption font-semibold uppercase tracking-wide text-brand">
            Windows 技巧 · Windows Tips
          </p>
          <p className="mt-1 text-xs text-fg-tertiary">2026-10-28</p>
          <h2 className="mt-1 text-title font-semibold text-fg">
            Windows 合并 PDF：文件顺序与批量命名
          </h2>
          <p className="mt-1 text-sm font-medium text-fg-muted">
            Windows PDF Merge: Getting the File Order Right
          </p>
          <p className="mt-2 text-sm text-fg-secondary">
            资源管理器按文本排序，1/10/2 会把整份文件排乱。这篇给出改名与显式排序两种解法，以及发出去之前的三步核对。
          </p>
        </Link>
      )}
      {(!active || active === 'Mac 技巧') && (
        <Link
          href="/blog/merge-pdf-mac-3-free-methods"
          className="mt-6 block rounded-xl border border-line bg-surface p-6 shadow-sm transition-colors duration-fast hover:bg-subtle"
        >
          <p className="text-caption font-semibold uppercase tracking-wide text-brand">
            Mac 技巧 · Mac Tips
          </p>
          <p className="mt-1 text-xs text-fg-tertiary">2026-10-27</p>
          <h2 className="mt-1 text-title font-semibold text-fg">
            Mac 合并 PDF：3 个免费方法
          </h2>
          <p className="mt-1 text-sm font-medium text-fg-muted">
            Mac PDF Merge: 3 Free Methods
          </p>
          <p className="mt-2 text-sm text-fg-secondary">
            Mac 上合并 PDF 不用装付费软件。Automator 快速操作、终端里的 qpdf、浏览器本地工具，三条路各自适合什么量级的活，以及哪三种情况免费方案就该换掉。
          </p>
        </Link>
      )}
      {(!active || active === '合规清单') && (
        <Link
          href="/blog/cross-border-data-transfer-pdf-tools"
          className="mt-6 block rounded-xl border border-line bg-surface p-6 shadow-sm transition-colors duration-fast hover:bg-subtle"
        >
          <p className="text-caption font-semibold uppercase tracking-wide text-brand">
            合规清单 · Cross-Border Transfer
          </p>
          <p className="mt-1 text-xs text-fg-tertiary">2026-10-26</p>
          <h2 className="mt-1 text-title font-semibold text-fg">
            跨境数据传输：PDF 工具合规要点怎么逐条核对
          </h2>
          <p className="mt-1 text-sm font-medium text-fg-muted">
            Cross-Border Data Transfer for PDF Tools: How to Check Each Requirement
          </p>
          <p className="mt-2 text-sm text-fg-secondary">
            四个判定位：有没有离开本机、接收方在哪个国家、有没有个人信息、适用哪个法域。附 GDPR 第 5 章与个保法第 38 条的对照表、四条出境路径的成本对照，以及本地处理为什么能把整节写成不适用。
          </p>
        </Link>
      )}
      {(!active || active === '合规清单') && (
        <Link
          href="/blog/privacy-impact-assessment-pdf-tools"
          className="mt-6 block rounded-xl border border-line bg-surface p-6 shadow-sm transition-colors duration-fast hover:bg-subtle"
        >
          <p className="text-caption font-semibold uppercase tracking-wide text-brand">
            合规清单 · Privacy Impact Assessment
          </p>
          <p className="mt-1 text-xs text-fg-tertiary">2026-10-25</p>
          <h2 className="mt-1 text-title font-semibold text-fg">
            隐私影响评估：引入 PDF 工具前要回答的八个问题
          </h2>
          <p className="mt-1 text-sm font-medium text-fg-muted">
            Privacy Impact Assessment for PDF Tools: Eight Questions to Answer First
          </p>
          <p className="mt-2 text-sm text-fg-secondary">
            隐私影响评估不需要写成几十页的报告。八个空格：文件里有什么、为什么处理、副本去哪、谁能读到、留多久、怎么留痕、怎么降险、谁签字，最后附一页能归档的结论模板。
          </p>
        </Link>
      )}
      {(!active || active === '产品设计') && (
        <Link
          href="/blog/privacy-by-design-pdf-tools"
          className="mt-6 block rounded-xl border border-line bg-surface p-6 shadow-sm transition-colors duration-fast hover:bg-subtle"
        >
          <p className="text-caption font-semibold uppercase tracking-wide text-brand">
            产品设计 · Privacy by Design
          </p>
          <p className="mt-1 text-xs text-fg-tertiary">2026-10-24</p>
          <h2 className="mt-1 text-title font-semibold text-fg">
            隐私设计 PDF 工具：七条原则怎么逐条核对
          </h2>
          <p className="mt-1 text-sm font-medium text-fg-muted">
            Privacy by Design for PDF Tools: How to Check the Seven Principles
          </p>
          <p className="mt-2 text-sm text-fg-secondary">
            隐私设计的七条原则不是口号，是可以逐条核对的清单。这篇把它们翻成 PDF 工具上能当场验证的动作：默认不上传、默认不留副本、默认最小范围，配一张核对表和五分钟自测。
          </p>
        </Link>
      )}
      {(!active || active === '元数据') && (
        <Link
          href="/blog/strip-pdf-metadata-before-sharing"
          className="mt-6 block rounded-xl border border-line bg-surface p-6 shadow-sm transition-colors duration-fast hover:bg-subtle"
        >
          <p className="text-caption font-semibold uppercase tracking-wide text-brand">
            元数据 · Metadata Privacy
          </p>
          <p className="mt-1 text-xs text-fg-tertiary">2026-10-22</p>
          <h2 className="mt-1 text-title font-semibold text-fg">
            分享前清除 PDF 元数据：一份 PDF 里藏着什么
          </h2>
          <p className="mt-1 text-sm font-medium text-fg-muted">
            How to Remove PDF Metadata Before Sharing: What a PDF Hides
          </p>
          <p className="mt-2 text-sm text-fg-secondary">
            作者名、公司名、时间戳、原始文件名，手机扫描件还带坐标。清除 PDF 元数据是发出文件前的最后一步。这篇列出八个字段的外泄风险、三类清理方式各自停在什么地方，以及一套当天能跑完的流程。
          </p>
        </Link>
      )}
      {(!active || active === '合规清单') && (
        <Link
          href="/blog/pdf-file-audit-trail-requirements"
          className="mt-6 block rounded-xl border border-line bg-surface p-6 shadow-sm transition-colors duration-fast hover:bg-subtle"
        >
          <p className="text-caption font-semibold uppercase tracking-wide text-brand">
            合规清单 · Audit Trail
          </p>
          <p className="mt-1 text-xs text-fg-tertiary">2026-10-21</p>
          <h2 className="mt-1 text-title font-semibold text-fg">
            文件审计追踪：PDF 工具该留下哪些记录
          </h2>
          <p className="mt-1 text-sm font-medium text-fg-muted">
            File Audit Trail: What a PDF Tool Should Record
          </p>
          <p className="mt-2 text-sm text-fg-secondary">
            审计追踪要回答四件事：谁、什么时间、对哪份文件、做了什么操作。在线服务能给出账号级日志但文件已离机，桌面软件只留文件不留操作，浏览器本地工具两样都不给。这篇给出七条记录线的检查清单和当天能补上的留痕流程。
          </p>
        </Link>
      )}
      {(!active || active === '合规清单') && (
        <Link
          href="/blog/trade-secret-protection-pdf-merge"
          className="mt-6 block rounded-xl border border-line bg-surface p-6 shadow-sm transition-colors duration-fast hover:bg-subtle"
        >
          <p className="text-caption font-semibold uppercase tracking-wide text-brand">
            合规清单 · Trade Secrets
          </p>
          <p className="mt-1 text-xs text-fg-tertiary">2026-10-20</p>
          <h2 className="mt-1 text-title font-semibold text-fg">
            商业机密保护：合并 PDF 前该先确认的五件事
          </h2>
          <p className="mt-1 text-sm font-medium text-fg-muted">
            Trade Secret Protection: Five Things to Check Before Merging a PDF
          </p>
          <p className="mt-2 text-sm text-fg-secondary">
            商业机密 PDF 合并的判断标准不在工具页面上写了什么，而在三件事：信息本身是不是商业秘密、有没有采取相应保密措施、合并这一步有没有把副本交到别人手上。这篇给出五件事检查清单和三个最容易出问题的环节。
          </p>
        </Link>
      )}
      {(!active || active === '合规清单') && (
        <Link
          href="/blog/china-pipl-pdf-tools-requirements"
          className="mt-6 block rounded-xl border border-line bg-surface p-6 shadow-sm transition-colors duration-fast hover:bg-subtle"
        >
          <p className="text-caption font-semibold uppercase tracking-wide text-brand">
            合规清单 · PIPL Compliance
          </p>
          <p className="mt-1 text-xs text-fg-tertiary">2026-10-15</p>
          <h2 className="mt-1 text-title font-semibold text-fg">
            个保法下的 PDF 工具要求：八个能当场核对的点
          </h2>
          <p className="mt-1 text-sm font-medium text-fg-muted">
            China PIPL PDF Tools: Eight Requirements to Check
          </p>
          <p className="mt-2 text-sm text-fg-secondary">
            按《个人信息保护法》挑 PDF 工具，判断依据能拆成八个当场可核对的事实：文件里有没有个人信息、有没有敏感个人信息、处理目的是否写明、需不需要单独同意、有没有委托处理协议、能不能转委托、有没有数据出境、保存多久和怎么证明删除。
          </p>
        </Link>
      )}
      {(!active || active === '合规清单') && (
        <Link
          href="/blog/hipaa-compliant-pdf-merge"
          className="mt-6 block rounded-xl border border-line bg-surface p-6 shadow-sm transition-colors duration-fast hover:bg-subtle"
        >
          <p className="text-caption font-semibold uppercase tracking-wide text-brand">
            合规清单 · HIPAA Compliance
          </p>
          <p className="mt-1 text-xs text-fg-tertiary">2026-10-14</p>
          <h2 className="mt-1 text-title font-semibold text-fg">
            HIPAA 合规 PDF 合并：医疗文件要过的六道关口
          </h2>
          <p className="mt-1 text-sm font-medium text-fg-muted">
            HIPAA Compliant PDF Merge: Six Gates for Medical Documents
          </p>
          <p className="mt-2 text-sm text-fg-secondary">
            病历、检验报告、理赔附件要合成一份 PDF 时，HIPAA 看的是六件能写成书面答案的事：有没有 BAA、PHI 是否离机、去标识化做到哪一步、访问有没有留痕、副本什么时候删、以及工具方算不算商业伙伴。这篇给出可当场核对的清单和一套当天能跑的本地流程。
          </p>
        </Link>
      )}
      {(!active || active === '合规清单') && (
        <Link
          href="/blog/gdpr-compliant-pdf-tools"
          className="mt-6 block rounded-xl border border-line bg-surface p-6 shadow-sm transition-colors duration-fast hover:bg-subtle"
        >
          <p className="text-caption font-semibold uppercase tracking-wide text-brand">
            合规清单 · GDPR Compliance
          </p>
          <p className="mt-1 text-xs text-fg-tertiary">2026-10-13</p>
          <h2 className="mt-1 text-title font-semibold text-fg">
            GDPR 合规 PDF 工具：选型前能逐条打勾的检查清单
          </h2>
          <p className="mt-1 text-sm font-medium text-fg-muted">
            GDPR Compliant PDF Tools: A Checklist Before You Choose
          </p>
          <p className="mt-2 text-sm text-fg-secondary">
            "符合 GDPR"在供应商页面上是句口号。这篇把它拆成文件上传与否、角色定位、DPA、存储地、日志留存七项能当场验证的检查，以及交给法务的那一页纸。
          </p>
        </Link>
      )}
      {(!active || active === '操作选择') && (
        <Link
          href="/blog/pdf-merge-vs-convert-scenarios"
          className="mt-6 block rounded-xl border border-line bg-surface p-6 shadow-sm transition-colors duration-fast hover:bg-subtle"
        >
          <p className="text-caption font-semibold uppercase tracking-wide text-brand">
            操作选择 · Merge or Convert
          </p>
          <p className="mt-1 text-xs text-fg-tertiary">2026-10-12</p>
          <h2 className="mt-1 text-title font-semibold text-fg">
            PDF 合并 vs PDF 转换：六种场景该怎么选
          </h2>
          <p className="mt-1 text-sm font-medium text-fg-muted">
            PDF Merge vs Convert: How to Pick in Six Scenarios
          </p>
          <p className="mt-2 text-sm text-fg-secondary">
            合并不动文件格式，转换要重建版式。先看交付终点是"一份 PDF"还是"另一种格式"，再决定先合并定版还是直接转。
          </p>
        </Link>
      )}
      {(!active || active === '操作选择') && (
        <Link
          href="/blog/pdf-merge-vs-split-when-to-use"
          className="mt-6 block rounded-xl border border-line bg-surface p-6 shadow-sm transition-colors duration-fast hover:bg-subtle"
        >
          <p className="text-caption font-semibold uppercase tracking-wide text-brand">
            操作选择 · Merge or Split
          </p>
          <p className="mt-1 text-xs text-fg-tertiary">2026-10-11</p>
          <h2 className="mt-1 text-title font-semibold text-fg">
            PDF 合并 vs PDF 拆分：什么情况该用哪个
          </h2>
          <p className="mt-1 text-sm font-medium text-fg-muted">
            PDF Merge vs Split: When to Use Each One
          </p>
          <p className="mt-2 text-sm text-fg-secondary">
            合并改的是文件数量，拆分改的是页码边界。先看交付终点是一份还是几份，第一步就该选谁就清楚了。
          </p>
        </Link>
      )}
      {(!active || active === '元数据') && (
        <Link
          href="/blog/pdf-metadata-preservation-merge"
          className="mt-6 block rounded-xl border border-line bg-surface p-6 shadow-sm transition-colors duration-fast hover:bg-subtle"
        >
          <p className="text-caption font-semibold uppercase tracking-wide text-brand">
            元数据 · Metadata
          </p>
          <p className="mt-1 text-xs text-fg-tertiary">2026-10-09</p>
          <h2 className="mt-1 text-title font-semibold text-fg">
            PDF 元数据保留：合并时该注意什么
          </h2>
          <p className="mt-1 text-sm font-medium text-fg-muted">
            PDF Metadata Preservation: What Survives a Merge
          </p>
          <p className="mt-2 text-sm text-fg-secondary">
            合并 PDF 时元数据不会自动跟着走：文档信息字典一个文件只有一份，合并后标题、作者、关键词只能留下其中一套值。这篇讲清哪些会留下、哪些会被覆盖，以及合并前后怎么回填。
          </p>
        </Link>
      )}
      {(!active || active === '质量对比') && (
        <Link
          href="/blog/pdf-merge-quality-before-after-test"
          className="mt-6 block rounded-xl border border-line bg-surface p-6 shadow-sm transition-colors duration-fast hover:bg-subtle"
        >
          <p className="text-caption font-semibold uppercase tracking-wide text-brand">
            质量对比 · Quality Comparison
          </p>
          <p className="mt-1 text-xs text-fg-tertiary">2026-10-08</p>
          <h2 className="mt-1 text-title font-semibold text-fg">
            PDF 合并前后：质量对比测试怎么做
          </h2>
          <p className="mt-1 text-sm font-medium text-fg-muted">
            PDF Quality Before and After Merge: How to Test It
          </p>
          <p className="mt-2 text-sm text-fg-secondary">
            PDF 质量对比要先固定住变量：同一份源文件、同一页、同一缩放比例。这篇讲清对比测试怎么搭、该看哪六个指标，以及三种会把结论带偏的测法。
          </p>
        </Link>
      )}
      {(!active || active === '压缩质量') && (
        <Link
          href="/blog/compressed-pdf-merge-quality-loss"
          className="mt-6 block rounded-xl border border-line bg-surface p-6 shadow-sm transition-colors duration-fast hover:bg-subtle"
        >
          <p className="text-caption font-semibold uppercase tracking-wide text-brand">
            压缩质量 · Compression Quality
          </p>
          <p className="mt-1 text-xs text-fg-tertiary">2026-10-07</p>
          <h2 className="mt-1 text-title font-semibold text-fg">
            PDF 压缩后合并：质量损失有多大
          </h2>
          <p className="mt-1 text-sm font-medium text-fg-muted">
            Compressed PDF Merge: How Much Quality Do You Lose
          </p>
          <p className="mt-2 text-sm text-fg-secondary">
            压缩过的 PDF 可以直接合并，合并这一步不再掉画质，真正糊掉画面的是同一张图被压了两次。这篇讲清先压缩还是先合并，以及一次成型的本地流程。
          </p>
        </Link>
      )}
      {(!active || active === '书签导航') && (
        <Link
          href="/blog/pdf-bookmark-merge-keep-outline"
          className="mt-6 block rounded-xl border border-line bg-surface p-6 shadow-sm transition-colors duration-fast hover:bg-subtle"
        >
          <p className="text-caption font-semibold uppercase tracking-wide text-brand">
            书签导航 · Bookmarks
          </p>
          <p className="mt-1 text-xs text-fg-tertiary">2026-10-06</p>
          <h2 className="mt-1 text-title font-semibold text-fg">
            PDF 书签合并：怎样保住导航结构
          </h2>
          <p className="mt-1 text-sm font-medium text-fg-muted">
            PDF Bookmark Merge: How to Keep the Navigation Outline
          </p>
          <p className="mt-2 text-sm text-fg-secondary">
            合并带书签的 PDF，常见结果是目录层级塌成一堆同名条目、页码全部错位。这篇讲清 PDF 书签合并为什么会丢导航，哪些做法能保住层级，并给出可复用的本地流程。
          </p>
        </Link>
      )}
      {(!active || active === '表单处理') && (
        <Link
          href="/blog/pdf-form-merge-keep-fields"
          className="mt-6 block rounded-xl border border-line bg-surface p-6 shadow-sm transition-colors duration-fast hover:bg-subtle"
        >
          <p className="text-caption font-semibold uppercase tracking-wide text-brand">
            表单处理 · PDF Forms
          </p>
          <p className="mt-1 text-xs text-fg-tertiary">2026-10-05</p>
          <h2 className="mt-1 text-title font-semibold text-fg">
            PDF 表单合并：怎样保住可填写字段
          </h2>
          <p className="mt-1 text-sm font-medium text-fg-muted">
            PDF Form Merge: How to Keep Fillable Fields
          </p>
          <p className="mt-2 text-sm text-fg-secondary">
            合并带表单的 PDF 后字段变灰、填不了、提交报错，多半是字段重名或页面对象被重建。这篇讲清哪些做法能保住字段、哪些一定丢，并给出可复用的本地流程。
          </p>
        </Link>
      )}
      {(!active || active === '加密文件') && (
        <Link
          href="/blog/encrypted-pdf-can-you-merge"
          className="mt-6 block rounded-xl border border-line bg-surface p-6 shadow-sm transition-colors duration-fast hover:bg-subtle"
        >
          <p className="text-caption font-semibold uppercase tracking-wide text-brand">
            加密文件 · Encrypted PDFs
          </p>
          <p className="mt-1 text-xs text-fg-tertiary">2026-10-04</p>
          <h2 className="mt-1 text-title font-semibold text-fg">
            PDF 加密文件能合并吗？密码、权限与签名处理指南
          </h2>
          <p className="mt-1 text-sm font-medium text-fg-muted">
            Can You Merge Encrypted PDFs? Passwords, Permissions, and Signatures
          </p>
          <p className="mt-2 text-sm text-fg-secondary">
            有密码的 PDF 不一定能直接合并：打开密码、权限限制、证书加密和数字签名要分别处理。这篇给出不绕过访问控制的本地操作流程。
          </p>
        </Link>
      )}

      {posts.filter((p) => p.slug !== 'merge-pdf-ipad-touch-optimized' && p.slug !== 'merge-pdf-mac-3-free-methods' && p.slug !== 'privacy-impact-assessment-pdf-tools' && p.slug !== 'privacy-by-design-pdf-tools' && p.slug !== 'pdf-file-audit-trail-requirements' && p.slug !== 'trade-secret-protection-pdf-merge' && p.slug !== 'china-pipl-pdf-tools-requirements' && p.slug !== 'hipaa-compliant-pdf-merge' && p.slug !== 'gdpr-compliant-pdf-tools' && p.slug !== 'encrypted-pdf-can-you-merge' && p.slug !== 'pdf-form-merge-keep-fields' && p.slug !== 'pdf-bookmark-merge-keep-outline' && p.slug !== 'compressed-pdf-merge-quality-loss' && p.slug !== 'pdf-merge-quality-before-after-test' && p.slug !== 'pdf-metadata-preservation-merge' && p.slug !== 'pdf-merge-vs-split-when-to-use' && p.slug !== 'pdf-merge-vs-convert-scenarios' && p.slug !== 'strip-pdf-metadata-before-sharing' && p.slug !== 'merge-pdf-windows-file-order' && p.slug !== 'merge-pdf-linux-open-source').map((p) => (
        <Link
          key={p.slug}
          href={`/blog/${p.slug}`}
          className="mt-6 block rounded-xl border border-line bg-surface p-6 shadow-sm transition-colors duration-fast hover:bg-subtle"
        >
          <p className="text-caption font-semibold uppercase tracking-wide text-brand">
            {p.tag}
          </p>
          <p className="mt-1 text-xs text-fg-tertiary">{p.date}</p>
          <h2 className="mt-1 text-title font-semibold text-fg">
            {p.zhTitle}
          </h2>
          <p className="mt-1 text-sm font-medium text-fg-muted">
            {p.enTitle}
          </p>
          <p className="mt-2 text-sm text-fg-secondary">
            {p.zhDesc}
          </p>
        </Link>
      ))}
    </PageShell>
  );
}
