'use client';

import { useEffect, useRef, useCallback } from 'react';
import { LogOut } from 'lucide-react';
import { useAppStore } from '../../store/useAppStore';
import { decodeJwtPayload, readStoredUser } from '../../lib/auth';
import { useT } from '../../i18n/provider';

const CLIENT_ID =
  process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ??
  '200070339610-gv5okb7v3fal74qip6l10vosnhp2c01o.apps.googleusercontent.com';

export function GoogleLoginButton() {
  const gaUser = useAppStore((s) => s.gaUser);
  const login = useAppStore((s) => s.login);
  const logout = useAppStore((s) => s.logout);
  const btnRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);
  const t = useT();

  // 首次挂载由 localStorage 恢复用户
  useEffect(() => {
    const stored = readStoredUser();
    if (stored && !gaUser) {
      login(stored);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // 初始化 GSI 并渲染按钮
  const initGsi = useCallback(() => {
    if (initialized.current || typeof window === 'undefined') return;
    if (!window.google?.accounts?.id) return;
    if (!btnRef.current) return;

    initialized.current = true;
    window.google.accounts.id.initialize({
      client_id: CLIENT_ID,
      callback: (response) => {
        const user = decodeJwtPayload(response.credential);
        if (user) login(user);
      },
      auto_select: false,
      cancel_on_tap_outside: false,
    });

    window.google.accounts.id.renderButton(btnRef.current, {
      type: 'icon',
      theme: 'outline',
      size: 'large',
      shape: 'circle',
    });
  }, [login]);

  useEffect(() => {
    // GSI 库可能已加载完成（如 layout.tsx 用 Script 加载）
    if (window.google?.accounts?.id) {
      initGsi();
      return;
    }
    // 否则等库加载
    const check = setInterval(() => {
      if (window.google?.accounts?.id) {
        clearInterval(check);
        initGsi();
      }
    }, 200);
    return () => clearInterval(check);
  }, [initGsi]);

  if (gaUser) {
    return (
      <div className="flex items-center gap-2">
        <img
          src={gaUser.picture}
          alt={gaUser.name}
          className="h-8 w-8 rounded-full ring-1 ring-line"
          referrerPolicy="no-referrer"
          title={t('auth.signedInAs', { name: gaUser.name })}
        />
        <span className="hidden text-sm font-medium text-fg sm:inline max-w-[100px] truncate">
          {gaUser.name}
        </span>
        <button
          type="button"
          onClick={logout}
          aria-label={t('auth.signOut')}
          title={t('auth.signOut')}
          className="inline-flex h-8 w-8 items-center justify-center rounded-md text-fg-secondary transition-colors duration-fast hover:bg-subtle hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        >
          <LogOut size={16} aria-hidden />
        </button>
      </div>
    );
  }

  return (
    <div
      ref={btnRef}
      className="flex items-center"
      title={t('auth.signInWithGoogle')}
    />
  );
}
