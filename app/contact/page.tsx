'use client';

import { Mail, Github } from 'lucide-react';
import { PageShell } from '@/components/atoms/PageShell';
import { useT } from '@/i18n/provider';

export default function ContactPage() {
  const t = useT();

  const contacts = [
    {
      icon: Mail,
      labelKey: 'contact.email',
      value: 'ahmedlzany423@gmail.com',
      href: 'mailto:ahmedlzany423@gmail.com',
    },
    {
      icon: Github,
      labelKey: 'contact.github',
      value: 'github.com/863683348/pdf-merge-next',
      href: 'https://github.com/863683348/pdf-merge-next',
    },
  ];

  return (
    <PageShell titleKey="contact.title">
      <p className="mt-2 text-body text-fg-secondary">{t('contact.desc')}</p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {contacts.map((c) => {
          const Icon = c.icon;
          return (
            <a
              key={c.labelKey}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-4 rounded-xl border border-line bg-surface p-5 transition-colors duration-fast hover:bg-subtle"
            >
              <Icon size={24} className="shrink-0 text-fg-secondary" />
              <div>
                <p className="text-sm font-medium text-fg">
                  {t(c.labelKey)}
                </p>
                <p className="text-sm text-fg-muted">{c.value}</p>
              </div>
            </a>
          );
        })}
      </div>
    </PageShell>
  );
}
