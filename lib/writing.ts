import type { ComponentType } from "react";
import UnityEn from "@/content/writing/unity-lan-discovery.en.mdx";
import UnityZh from "@/content/writing/unity-lan-discovery.zh.mdx";
import KernelEn from "@/content/writing/risc-v-kernel.en.mdx";
import KernelZh from "@/content/writing/risc-v-kernel.zh.mdx";
import BrowserEn from "@/content/writing/browser-rendering.en.mdx";
import BrowserZh from "@/content/writing/browser-rendering.zh.mdx";
import EventLoopEn from "@/content/writing/event-loop-responsiveness.en.mdx";
import EventLoopZh from "@/content/writing/event-loop-responsiveness.zh.mdx";
import BoundaryEn from "@/content/writing/server-client-boundary.en.mdx";
import BoundaryZh from "@/content/writing/server-client-boundary.zh.mdx";
import ResourceEn from "@/content/writing/url-to-resource.en.mdx";
import ResourceZh from "@/content/writing/url-to-resource.zh.mdx";
import { algorithmArticles } from "@/lib/more-articles-algorithms";
import { languageArticles } from "@/lib/more-articles-languages";
import { webArticles } from "@/lib/more-articles-web";
import { foundationArticles } from "@/lib/more-articles-foundations";
import { writingArticles, type WritingArticleSummary } from "@/lib/writing-articles";
import { type FeaturedWritingSlug, type WritingLocale, type WritingSlug } from "@/lib/writing-path";

export type { WritingLocale, WritingSlug } from "@/lib/writing-path";

type Article = Omit<WritingArticleSummary, "slug"> & {
  slug: WritingSlug;
  content: Record<WritingLocale, ComponentType>;
};

const featuredContent: Record<FeaturedWritingSlug, Record<WritingLocale, ComponentType>> = {
  "unity-lan-discovery": { en: UnityEn, zh: UnityZh },
  "risc-v-kernel": { en: KernelEn, zh: KernelZh },
  "browser-rendering": { en: BrowserEn, zh: BrowserZh },
  "event-loop-responsiveness": { en: EventLoopEn, zh: EventLoopZh },
  "server-client-boundary": { en: BoundaryEn, zh: BoundaryZh },
  "url-to-resource": { en: ResourceEn, zh: ResourceZh },
};

export const featuredArticles: Article[] = writingArticles.map((article) => ({
  ...article,
  content: featuredContent[article.slug],
}));

export const articleGroups = [
  { id: "foundations", title: { en: "Core concepts", zh: "核心概念" }, articles: foundationArticles },
  { id: "algorithms", title: { en: "Algorithms", zh: "算法" }, articles: algorithmArticles },
  { id: "languages", title: { en: "Languages & Unity", zh: "编程语言与 Unity" }, articles: languageArticles },
  { id: "web", title: { en: "Web & backend", zh: "Web 与后端" }, articles: webArticles },
] as const;

export const moreArticles: Article[] = [...foundationArticles, ...algorithmArticles, ...languageArticles, ...webArticles];
export const articles: Article[] = [...featuredArticles, ...moreArticles];

export const writingLocales: WritingLocale[] = ["en", "zh"];

export function isWritingLocale(value: string): value is WritingLocale {
  return value === "en" || value === "zh";
}

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getArticleGroup(slug: string) {
  return articleGroups.find((group) => group.articles.some((article) => article.slug === slug));
}
