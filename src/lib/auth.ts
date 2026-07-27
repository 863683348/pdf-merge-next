// Google Identity Services (GIS) 认证 —— 纯前端，零注册
// 采用 OAuth 2.0 popup 流程（google.accounts.oauth2），绕开 FedCM / 第三方 Cookie 限制
// 通过 access_token 调用 userinfo 接口获取用户信息

declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (config: {
            client_id: string;
            callback: (response: { credential: string }) => void;
            auto_select?: boolean;
            cancel_on_tap_outside?: boolean;
          }) => void;
          renderButton: (
            parent: HTMLElement,
            options: {
              type?: 'standard' | 'icon';
              theme?: 'outline' | 'filled_blue' | 'filled_black';
              size?: 'large' | 'medium' | 'small';
              text?: 'signin_with' | 'signup_with' | 'continue_with' | 'signin';
              shape?: 'rectangular' | 'pill' | 'circle' | 'square';
              logo_alignment?: 'left' | 'center';
              width?: string;
              locale?: string;
            }
          ) => void;
          prompt: (
            momentListener?: (notification: { isNotDisplayed: () => boolean; isSkippedMoment: () => boolean; getDismissedReason: () => string; getNotDisplayedReason: () => string }) => void
          ) => void;
          disableAutoSelect: () => void;
          revoke: (hint: string, callback: (response: { error?: string }) => void) => void;
        };
        oauth2: {
          initTokenClient: (config: {
            client_id: string;
            scope: string;
            callback: (response: { access_token?: string; error?: string }) => void;
            error_callback?: (error: unknown) => void;
          }) => {
            requestAccessToken: (overrides?: { prompt?: string; login_hint?: string }) => void;
            requestCode: (overrides?: { prompt?: string; login_hint?: string }) => void;
          };
        };
      };
    };
  }
}

export const USER_STORAGE_KEY = 'mergelocal-user';

export interface GoogleUser {
  sub: string; // Google user ID (唯一标识)
  name: string;
  email: string;
  picture: string; // 头像 URL
}

// 解码 JWT id_token 的 payload（保留备用；OAuth2 popup 流程改用 access_token + userinfo）
export function decodeJwtPayload(token: string): GoogleUser | null {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    const json = atob(parts[1].replace(/-/g, '+').replace(/_/g, '/'));
    const payload = JSON.parse(json) as Record<string, unknown>;
    if (!payload.sub || typeof payload.sub !== 'string') return null;
    return {
      sub: payload.sub,
      name: String(payload.name ?? ''),
      email: String(payload.email ?? ''),
      picture: String(payload.picture ?? ''),
    };
  } catch {
    return null;
  }
}

// 用 OAuth2 access_token 调用 userinfo 接口换取用户信息
export async function fetchGoogleUser(accessToken: string): Promise<GoogleUser | null> {
  try {
    const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as Record<string, unknown>;
    if (!data.sub || typeof data.sub !== 'string') return null;
    return {
      sub: data.sub,
      name: String(data.name ?? ''),
      email: String(data.email ?? ''),
      picture: String(data.picture ?? ''),
    };
  } catch {
    return null;
  }
}

// 从 localStorage 读取已保存的用户
export function readStoredUser(): GoogleUser | null {
  try {
    const raw = localStorage.getItem(USER_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as GoogleUser;
    if (parsed && parsed.sub) return parsed;
    return null;
  } catch {
    return null;
  }
}

export function setStoredUser(user: GoogleUser): void {
  try {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
  } catch {
    /* 隐私模式静默失败 */
  }
}

export function clearStoredUser(): void {
  try {
    localStorage.removeItem(USER_STORAGE_KEY);
  } catch {
    /* noop */
  }
}

// 登出（禁用 Google 自动登录 + 清除本地存储）
export function googleLogout(): void {
  clearStoredUser();
  try {
    window.google?.accounts.id.disableAutoSelect();
  } catch {
    /* noop */
  }
}
