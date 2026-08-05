'use client';

import { PageShell } from '@/components/atoms/PageShell';
import { useT, useLang } from '@/i18n/provider';

export default function PrivacyPage() {
  const t = useT();
  const lang = useLang();
  const isZh = lang === 'zh';

  return (
    <PageShell titleKey="privacy.title">
      <p className="mt-2 text-sm text-fg-muted">{t('privacy.updated')}</p>

      {isZh ? (
        <div className="mt-8 space-y-6 text-body text-fg-secondary leading-relaxed">
          <section>
            <h2 className="text-title font-semibold text-fg">数据收集</h2>
            <p className="mt-2">
              PDFMergeNext 是一款纯浏览器端工具。你的 PDF 文件在本地设备上处理，永远不会被上传到我们的服务器。
              我们不收集、不存储、不传输你的文件内容。
            </p>
          </section>
          <section>
            <h2 className="text-title font-semibold text-fg">谷歌登录</h2>
            <p className="mt-2">
              如果你选择使用谷歌账号登录，我们会收到 Google 提供的基本个人资料信息（姓名、邮箱地址、头像）。
              这些信息仅用于识别你的身份以提供 Pro 订阅服务，不会与第三方共享。
            </p>
          </section>
          <section>
            <h2 className="text-title font-semibold text-fg">Cookie</h2>
            <p className="mt-2">
              本工具不使用追踪型 Cookie。我们使用 localStorage 存储你的主题偏好和登录状态，
              这些数据仅保存在你的浏览器中。
            </p>
          </section>
          <section>
            <h2 className="text-title font-semibold text-fg">第三方服务</h2>
            <p className="mt-2">
              本工具接入 Google Analytics（匿名访问统计）和 PayPal（支付处理）。
              这些服务有其独立的隐私政策。我们不会将你的个人信息提供给这些服务用于分析或营销目的。
            </p>
          </section>
          <section>
            <h2 className="text-title font-semibold text-fg">广告（Google AdSense）</h2>
            <p className="mt-2">
              本网站展示由 Google AdSense（第三方广告服务商）投放的广告。Google 及其合作伙伴可能使用 Cookie（包括 DART Cookie）及类似技术，根据您对本站及其他网站的访问记录向您投放广告，并衡量广告效果。您可以通过 Google 广告设置（https://www.google.com/settings/ads）或 Your Online Choices（http://www.aboutads.info/choices）退出个性化广告。关于 Google 如何使用数据，请参阅其广告隐私政策（https://policies.google.com/technologies/ads）。
            </p>
          </section>
          <section>
            <h2 className="text-title font-semibold text-fg">联系我们</h2>
            <p className="mt-2">
              如有隐私相关问题，请通过 ahmedlzany423@gmail.com 联系我们。
            </p>
          </section>
        </div>
      ) : (
        <div className="mt-8 space-y-6 text-body text-fg-secondary leading-relaxed">
          <section>
            <h2 className="text-title font-semibold text-fg">Data Collection</h2>
            <p className="mt-2">
              PDFMergeNext is a browser-only tool. Your PDF files are processed entirely on your device
              and are never uploaded to our servers. We do not collect, store, or transmit your document content.
            </p>
          </section>
          <section>
            <h2 className="text-title font-semibold text-fg">Google Sign-In</h2>
            <p className="mt-2">
              If you choose to sign in with Google, we receive basic profile information (name, email,
              avatar) provided by Google. This is used solely to identify you for Pro subscription services
              and is not shared with third parties.
            </p>
          </section>
          <section>
            <h2 className="text-title font-semibold text-fg">Cookies</h2>
            <p className="mt-2">
              This tool does not use tracking cookies. We use localStorage to store your theme preference
              and login state — this data stays in your browser only.
            </p>
          </section>
          <section>
            <h2 className="text-title font-semibold text-fg">Third-Party Services</h2>
            <p className="mt-2">
              This tool integrates Google Analytics (anonymous usage statistics) and PayPal (payment processing).
              These services have their own privacy policies. We do not share your personal information with
              these services for analytics or marketing purposes.
            </p>
          </section>
          <section>
            <h2 className="text-title font-semibold text-fg">Advertising (Google AdSense)</h2>
            <p className="mt-2">
              This site displays advertisements served by Google AdSense, a third-party advertising vendor. Google and its partners may use cookies (including the DART cookie) and similar technologies to serve ads based on your prior visits to this site and other websites, and to measure ad performance. You can opt out of personalized advertising via Google Ads Settings (https://www.google.com/settings/ads) or Your Online Choices (http://www.aboutads.info/choices). For more information on how Google uses data, see Google's advertising privacy policy (https://policies.google.com/technologies/ads).
            </p>
          </section>
          <section>
            <h2 className="text-title font-semibold text-fg">Contact</h2>
            <p className="mt-2">
              For privacy-related inquiries, contact us at ahmedlzany423@gmail.com.
            </p>
          </section>
        </div>
      )}
    </PageShell>
  );
}
