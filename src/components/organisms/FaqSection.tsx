'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLang } from '@/i18n/provider';
import { faqContent } from '@/lib/faq';

// 可见 FAQ 折叠区。内容来自 faq.ts（与 layout.tsx 注入的 JSON-LD FAQPage 同源）。
// 即使页面为 ssr:false，Googlebot 等现代爬虫执行 JS 后也能抓到；
// 结构化数据（FAQPage）则在服务端注入，双重保障长尾词收录。
export function FaqSection() {
  const lang = useLang();
  const firstId = faqContent.items[0]?.id ?? null;
  const [open, setOpen] = useState<string | null>(firstId);

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="mt-12 border-t border-line pt-8 pb-24 sm:pb-10 scroll-mt-20"
    >
      <h2 id="faq-title" className="text-lg font-semibold text-fg">
        {faqContent.title[lang]}
      </h2>
      <p className="mt-1 text-sm text-fg-secondary">{faqContent.subtitle[lang]}</p>

      <dl className="mt-5 divide-y divide-line border-t border-line">
        {faqContent.items.map((it) => {
          const isOpen = open === it.id;
          return (
            <div key={it.id}>
              <dt>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : it.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-3 py-4 text-left text-sm font-medium text-fg transition-colors duration-fast hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                >
                  <span>{it.q[lang]}</span>
                  <ChevronDown
                    size={18}
                    aria-hidden
                    className={`shrink-0 text-fg-muted transition-transform duration-fast ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </dt>
              {isOpen && (
                <dd className="pb-4 text-sm leading-relaxed text-fg-secondary">
                  {it.a[lang]}
                </dd>
              )}
            </div>
          );
        })}
      </dl>
    </section>
  );
}
