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
import { writingArticles, type WritingArticleSummary } from "@/lib/writing-articles";
import { type WritingLocale, type WritingSlug } from "@/lib/writing-path";

export type { WritingLocale, WritingSlug } from "@/lib/writing-path";

type Article = WritingArticleSummary & {
  content: Record<WritingLocale, ComponentType>;
};

const articleContent: Record<WritingSlug, Record<WritingLocale, ComponentType>> = {
  "unity-lan-discovery": { en: UnityEn, zh: UnityZh },
  "risc-v-kernel": { en: KernelEn, zh: KernelZh },
  "browser-rendering": { en: BrowserEn, zh: BrowserZh },
  "event-loop-responsiveness": { en: EventLoopEn, zh: EventLoopZh },
  "server-client-boundary": { en: BoundaryEn, zh: BoundaryZh },
  "url-to-resource": { en: ResourceEn, zh: ResourceZh },
};

export const articles: Article[] = writingArticles.map((article) => ({
  ...article,
  content: articleContent[article.slug],
}));

export const writingLocales: WritingLocale[] = ["en", "zh"];

export function isWritingLocale(value: string): value is WritingLocale {
  return value === "en" || value === "zh";
}

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
