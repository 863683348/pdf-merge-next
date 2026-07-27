import Link from 'next/link';

// 品牌化 404 页：避免默认 404 流失，并提供回工具/首页/博客的内部链接（防孤儿页 + 内链权重回收）。
export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-content flex-col items-center justify-center px-4 py-16 text-center">
      <p className="text-caption font-semibold uppercase tracking-wide text-brand">404</p>
      <h1 className="mt-2 text-h1 font-bold tracking-tight text-fg">
        页面走丢了 · Page not found
      </h1>
      <p className="mt-3 max-w-md text-body text-fg-secondary">
        你访问的页面不存在或已被移动。不如直接去合并 PDF，文件全程不上传。
        <br />
        The page you’re looking for doesn’t exist. Merge your PDFs instead — files never leave your device.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-block rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-on-primary transition-colors duration-fast hover:bg-brand-hover"
        >
          开始合并 → / Merge PDF
        </Link>
        <Link
          href="/blog"
          className="inline-block rounded-lg border border-line px-5 py-2.5 text-sm font-semibold text-fg transition-colors duration-fast hover:bg-subtle"
        >
          阅读博客 / Blog
        </Link>
      </div>
    </main>
  );
}
