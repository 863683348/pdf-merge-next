/**
 * 博客文章元数据（数据驱动）
 *
 * 数据源：posts.json（纯数据）
 * 为什么要 JSON：历史教训——pipeline 以 TS 语法拼接 posts.ts 数组时，
 * 反复出现对象被拆散、schema 错字段、未闭合、撇号截断等损坏。
 * JSON 无法被这种拼接破坏：结构错误会被 JSON.parse 立即抓住。
 * 本文件只负责类型定义 + 排序导出，禁止在这里手写文章数据。
 *
 * ⚠️ SEO 每日发布流程：新增文章 = 在 posts.json 追加一条（date 用 YYYY-MM-DD），
 * 列表页自动按日期倒序渲染。
 */
import raw from './posts.json';

export interface BlogPostMeta {
  slug: string;
  tag: string;
  date: string; // YYYY-MM-DD
  zhTitle: string;
  enTitle: string;
  zhDesc: string;
  enDesc?: string; // 脚本可选输出，列表页暂未使用
}

export const BLOG_POSTS: BlogPostMeta[] = raw as BlogPostMeta[];

/** 按发布日期倒序（最新在前） */
export function getBlogPosts(): BlogPostMeta[] {
  return [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date));
}
