import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://pdfmergenext.shop';

export const metadata: Metadata = {
  title: 'Merge PDF on Android: Chrome Browser Method / Android 合并 PDF：Chrome 浏览器方式 | PDFMergeNext',
  description: '## 1. Why Chrome Can Handle PDF Merging Chrome for Android has a decent built-in PDF viewer, but it doesn't have native merge functionality. However,...',
  keywords: ['android merge pdf', 'merge pdf chrome', 'android pdf 合并', 'chrome pdf merger', 'merge pdf android without app'],
  alternates: {
    canonical: '/blog/android-merge-pdf-chrome',
    languages: { 'zh-CN': '/blog/android-merge-pdf-chrome', 'en-US': '/blog/android-merge-pdf-chrome', 'x-default': '/blog/android-merge-pdf-chrome' },
  },
  openGraph: {
    title: 'Merge PDF on Android: Chrome Browser Method',
    description: '## 1. Why Chrome Can Handle PDF Merging Chrome for Android has a decent built-in PDF viewer, but it doesn't have native merge functionality. However,...',
    url: `${SITE_URL}/blog/android-merge-pdf-chrome`,
    type: 'article',
    publishedTime: '2026-08-28T00:00:00.000Z',
    authors: ['PDFMergeNext'],
  },
  twitter: { card: 'summary_large_image', title: 'Merge PDF on Android: Chrome Browser Method', description: '## 1. Why Chrome Can Handle PDF Merging Chrome for Android has a decent built-in PDF viewer, but it doesn't have native merge functionality. However,...' },
};

const TOC = [
  { id: 'lead', label: 'TL;DR' },
  { id: 'chrome', label: 'Chrome Can Handle PDF Merging?' },
  { id: 'method1', label: 'Method 1: Online Tools via Chrome' },
  { id: 'method2', label: 'Method 2: Chrome + Google Drive' },
  { id: 'privacy', label: 'Privacy Tip' },
  { id: 'faq', label: 'FAQ' },
];

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
          { '@type': 'ListItem', position: 3, name: 'Merge PDF on Android: Chrome Browser Method', item: `${SITE_URL}/blog/android-merge-pdf-chrome` },
        ],
      },
      {
        '@type': 'Article',
        headline: 'Merge PDF on Android: Chrome Browser Method / Android 合并 PDF：Chrome 浏览器方式',
        description: '## 1. Why Chrome Can Handle PDF Merging Chrome for Android has a decent built-in PDF viewer, but it doesn't have native merge functionality. However,...',
        author: { '@type': 'Person', name: 'PDFMergeNext' },
        publisher: { '@type': 'Organization', name: 'PDFMergeNext' },
        datePublished: '2026-08-28',
        dateModified: '2026-08-28',
        url: `${SITE_URL}/blog/android-merge-pdf-chrome`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/android-merge-pdf-chrome` },
      },
    ],
  };
  return (
    <article className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-16">
      <header>
        <p className="text-caption font-semibold uppercase tracking-wide text-brand">Android</p>
        <h1 className="mt-2 text-h1 font-bold tracking-tight text-fg">Merge PDF on Android: Chrome Browser Method</h1>
        <p className="mt-3 text-body text-fg-secondary">## 1. Why Chrome Can Handle PDF Merging Chrome for Android has a decent built-in PDF viewer, but it doesn't have native merge functionality. However,...</p>
        <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-subtle px-3 py-1 text-caption font-medium text-fg-muted">6 min read</p>
      </header>
      <nav aria-label="文章目录" className="mt-8 rounded-xl border border-line bg-subtle p-5">
        <p className="text-caption font-semibold uppercase tracking-wide text-fg-muted">Contents</p>
        <ul className="mt-2 grid gap-1 sm:grid-cols-2">
          {TOC.map((t) => (
            <li key={t.id}>
              <a href={'#' + t.id} className="text-sm text-brand hover:underline">{t.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-8 space-y-8 text-body text-fg">
        <section id="lead" className="rounded-xl border border-brand/30 bg-brand/5 p-6">
          <h2 className="text-title font-semibold text-fg">TL;DR</h2>
          <p className="mt-2 text-fg-secondary">No app needed. Use Chrome + free online PDF merge tools, or a local browser tool for privacy.</p>
        </section>
        <section id="chrome">
          <h2 className="text-title font-semibold text-fg">Why Chrome Can Handle PDF Merging</h2>
          <p className="mt-2 text-fg-secondary">Chrome for Android has a decent built-in PDF viewer, but no native merge. Use Chrome to access free online tools without installing anything.</p>
        </section>
        <section id="method1">
          <h2 className="text-title font-semibold text-fg">Method 1: Online PDF Merge Tools via Chrome</h2>
          <p>{jsxBody}</p>
        </section>
        <section id="method2">
          <h2 className="text-title font-semibold text-fg">Method 2: Chrome + Google Drive</h2>
          <p className="mt-2 text-fg-secondary">Google Drive has PDF viewing but not merging. Use <Link href="/" className="text-brand hover:underline">PDFMergeNext</Link> for local browser-based merging.</p>
        </section>
        <section id="privacy">
          <h2 className="text-title font-semibold text-fg">Privacy Tip</h2>
          <p className="mt-2 text-fg-secondary">For privacy-sensitive docs, use local tools like <Link href="/" className="text-brand hover:underline">PDFMergeNext</Link> — files never leave your device.</p>
        </section>
        <section id="faq" className="rounded-xl border border-line p-6">
          <h2 className="text-title font-semibold text-fg">FAQ</h2>
          <div className="mt-4 space-y-4">
            <div><h3 className="text-base font-semibold text-fg">Q: Do I need to install an app?</h3><p className="mt-1 text-fg-secondary">A: No. Chrome's built-in PDF viewer + online tools work without installation.</p></div>
            <div><h3 className="text-base font-semibold text-fg">Q: Can I merge offline?</h3><p className="mt-1 text-fg-secondary">A: Yes. Use <Link href="/" className="text-brand hover:underline">PDFMergeNext</Link> — files stay on device.</p></div>
            <div><h3 className="text-base font-semibold text-fg">Q: Any file size limits?</h3><p className="mt-1 text-fg-secondary">A: Online tools have limits (50-100MB). Local tools have no limit.</p></div>
          </div>
        </section>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="mx-auto mt-12 max-w-content px-4 sm:px-6">
        <h2 className="text-title font-semibold text-fg">Related</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Link href="/blog/merge-pdf-on-mobile" className="block rounded-xl border border-line bg-surface p-4 hover:bg-subtle"><p className="text-sm font-semibold text-fg">Merge PDF on Mobile</p><p className="mt-1 text-xs text-fg-secondary">iOS/Android</p></Link>
          <Link href="/blog/merge-pdf-iphone-safari" className="block rounded-xl border border-line bg-surface p-4 hover:bg-subtle"><p className="text-sm font-semibold text-fg">Merge PDF on iPhone</p><p className="mt-1 text-xs text-fg-secondary">Safari Guide</p></Link>
          <Link href="/blog/5-pdf-merge-methods-compared" className="block rounded-xl border border-line bg-surface p-4 hover:bg-subtle"><p className="text-sm font-semibold text-fg">5 PDF Merge Methods</p><p className="mt-1 text-xs text-fg-secondary">Compared</p></Link>
          <Link href="/blog/pdf-page-selection-1-3-5-syntax" className="block rounded-xl border border-line bg-surface p-4 hover:bg-subtle"><p className="text-sm font-semibold text-fg">PDF Page Selection</p><p className="mt-1 text-xs text-fg-secondary">1-3,5 Syntax</p></Link>
        </div>
      </section>
    </article>
  );
}
