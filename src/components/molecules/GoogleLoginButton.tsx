'use client';

import { useEffect, useRef, useState } from 'react';
import { LogOut } from 'lucide-react';
import { useAppStore } from '../../store/useAppStore';
import { readStoredUser, fetchGoogleUser } from '../../lib/auth';
import { useT } from '../../i18n/provider';

const CLIENT_ID =
  process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ??
  '200070339610-gv5okb7v3fal74qip6l10vosnhp2c01o.apps.googleusercontent.com';

export function GoogleLoginButton() {
  const gaUser = useAppStore((s) => s.gaUser);
  const login = useAppStore((s) => s.login);
  const logout = useAppStore((s) => s.logout);
  // OAuth2 token client（popup 模式，绕开 FedCM / 第三方 Cookie 限制）
  const tokenClientRef = useRef<{ requestAccessToken: (o?: { prompt?: string }) => void } | null>(null);
  const [gsiReady, setGsiReady] = useState(false);
  const t = useT();

  // 从 localStorage 恢复
  useEffect(() => {
    const stored = readStoredUser();
    if (stored && !gaUser) {
      login(stored);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // 等待 GSI 库加载，初始化 OAuth2 token client
  useEffect(() => {
    const tryInit = () => {
      const oauth2 = window.google?.accounts?.oauth2;
      if (!oauth2 || tokenClientRef.current) return false;
      tokenClientRef.current = oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: 'openid email profile',
        callback: async (response: { access_token?: string; error?: string }) => {
          if (response.error || !response.access_token) return;
          const user = await fetchGoogleUser(response.access_token);
          if (user) login(user);
        },
      });
      setGsiReady(true);
      return true;
    };
    if (tryInit()) return;
    const iv = setInterval(() => {
      if (tryInit()) clearInterval(iv);
    }, 200);
    return () => clearInterval(iv);
  }, [login]);

  const handleSignIn = () => {
    try {
      tokenClientRef.current?.requestAccessToken();
    } catch {
      /* noop */
    }
  };

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
    <button
      type="button"
      onClick={handleSignIn}
      disabled={!gsiReady}
      className="inline-flex h-9 items-center gap-2 rounded-md border border-line bg-surface px-3 text-sm font-medium text-fg-secondary transition-colors duration-fast hover:bg-subtle hover:text-fg disabled:cursor-wait disabled:opacity-50"
    >
      {/* SVG Google G logo */}
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
        <path
          fill="#4285F4"
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
        />
        <path
          fill="#34A853"
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        />
        <path
          fill="#FBBC05"
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        />
        <path
          fill="#EA4335"
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        />
      </svg>
      {t('auth.signInWithGoogle')}
    </button>
  );
}
