'use client';

import { PageShell } from '@/components/atoms/PageShell';
import { useT, useLang } from '@/i18n/provider';

export default function TermsPage() {
  const t = useT();
  const lang = useLang();
  const isZh = lang === 'zh';

  return (
    <PageShell titleKey="terms.title">
      <p className="mt-2 text-sm text-fg-muted">{t('terms.updated')}</p>

      {isZh ? (
        <div className="mt-8 space-y-6 text-body text-fg-secondary leading-relaxed">
          <section>
            <h2 className="text-title font-semibold text-fg">服务说明</h2>
            <p className="mt-2">
              MergeLocal 提供纯浏览器端 PDF 合并工具。我们按&quot;现状&quot;提供服务，
              不保证服务不会中断或无错误。
            </p>
          </section>
          <section>
            <h2 className="text-title font-semibold text-fg">免费版</h2>
            <p className="mt-2">
              免费版受限于文件数量、单文件大小和总大小的限制。这些限制可能随时调整。
            </p>
          </section>
          <section>
            <h2 className="text-title font-semibold text-fg">Pro 订阅</h2>
            <p className="mt-2">
              Pro 订阅为月付或年付制，可随时取消。取消后当前计费周期结束时降级为免费版，
              已支付的费用不退还。支付由 PayPal 安全处理。
            </p>
          </section>
          <section>
            <h2 className="text-title font-semibold text-fg">退款政策</h2>
            <p className="mt-2">
              我们提供 30 天无理由退款保证。如果对 Pro 版本不满意，在购买后 30 天内联系我们即可获得全额退款。
            </p>
          </section>
          <section>
            <h2 className="text-title font-semibold text-fg">免责声明</h2>
            <p className="mt-2">
              本工具按&quot;现状&quot;提供，不提供任何明示或暗示的保证。
              使用本工具处理重要文档时请自行备份。
            </p>
          </section>
        </div>
      ) : (
        <div className="mt-8 space-y-6 text-body text-fg-secondary leading-relaxed">
          <section>
            <h2 className="text-title font-semibold text-fg">Service Description</h2>
            <p className="mt-2">
              MergeLocal provides a browser-only PDF merging tool. The service is provided &quot;as is&quot;
              without guarantees of uninterrupted or error-free operation.
            </p>
          </section>
          <section>
            <h2 className="text-title font-semibold text-fg">Free Plan</h2>
            <p className="mt-2">
              The free plan has limits on file count, single file size, and total size.
              These limits may be adjusted at any time.
            </p>
          </section>
          <section>
            <h2 className="text-title font-semibold text-fg">Pro Subscription</h2>
            <p className="mt-2">
              Pro is a monthly or yearly subscription that can be cancelled at any time.
              Upon cancellation, you will be downgraded to the free plan at the end of the current billing period.
              Fees already paid are non-refundable. Payments are securely handled by PayPal.
            </p>
          </section>
          <section>
            <h2 className="text-title font-semibold text-fg">Refund Policy</h2>
            <p className="mt-2">
              We offer a 30-day money-back guarantee. If you are not satisfied with Pro,
              contact us within 30 days of purchase for a full refund.
            </p>
          </section>
          <section>
            <h2 className="text-title font-semibold text-fg">Disclaimer</h2>
            <p className="mt-2">
              This tool is provided &quot;as is&quot; without any warranties, express or implied.
              Always keep backups of your important documents.
            </p>
          </section>
        </div>
      )}
    </PageShell>
  );
}
