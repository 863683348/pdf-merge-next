import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // 背景阶梯（浅色/深色统一引用 CSS 变量）
        canvas: 'var(--bg-primary)',
        surface: 'var(--bg-surface)',
        elevated: 'var(--bg-elevated)',
        subtle: 'var(--bg-subtle)',
        inset: 'var(--bg-inset)',
        // 文字
        fg: {
          DEFAULT: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
          onPrimary: 'var(--text-on-primary)',
        },
        // 边框
        line: {
          DEFAULT: 'var(--border-default)',
          strong: 'var(--border-strong)',
          subtle: 'var(--border-subtle)',
          focus: 'var(--border-focus)',
        },
        // 主色（品牌蓝）
        brand: {
          DEFAULT: 'var(--color-primary)',
          hover: 'var(--color-primary-hover)',
          active: 'var(--color-primary-active)',
          subtle: 'var(--color-primary-subtle)',
          subtle2: 'var(--color-primary-subtle-2)',
          on: 'var(--color-on-primary)',
        },
        // 功能色
        ok: {
          DEFAULT: 'var(--color-success)',
          subtle: 'var(--color-success-subtle)',
        },
        warn: {
          DEFAULT: 'var(--color-warning)',
          subtle: 'var(--color-warning-subtle)',
        },
        danger: {
          DEFAULT: 'var(--color-error)',
          subtle: 'var(--color-error-subtle)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans SC', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      fontSize: {
        caption: ['12px', '16px'],
        sm: ['14px', '20px'],
        body: ['16px', '24px'],
        'title-sm': ['18px', '26px'],
        title: ['20px', '28px'],
        h2: ['24px', '32px'],
        h1: ['32px', '40px'],
        display: ['40px', '48px'],
      },
      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '14px',
        xl: '20px',
        pill: '9999px',
      },
      boxShadow: {
        xs: '0 1px 2px rgba(16,24,40,0.05)',
        sm: '0 1px 3px rgba(16,24,40,0.08), 0 1px 2px rgba(16,24,40,0.04)',
        md: '0 4px 12px rgba(16,24,40,0.08)',
        lg: '0 12px 32px rgba(16,24,40,0.12)',
        focus: '0 0 0 3px var(--shadow-focus-color)',
        glow: '0 0 0 1px rgba(59,130,246,0.30), 0 0 32px rgba(59,130,246,0.12)',
      },
      transitionDuration: {
        fast: '150ms',
        normal: '250ms',
        slow: '400ms',
      },
      transitionTimingFunction: {
        standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
        smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      maxWidth: {
        content: '880px',
      },
      spacing: {
        topbar: '64px',
      },
    },
  },
  plugins: [],
};

export default config;
