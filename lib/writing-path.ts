import type { algorithmArticles } from "@/lib/more-articles-algorithms";
import type { languageArticles } from "@/lib/more-articles-languages";
import type { webArticles } from "@/lib/more-articles-web";
import type { foundationArticles } from "@/lib/more-articles-foundations";

export type WritingLocale = "en" | "zh";
export type FeaturedWritingSlug = "unity-lan-discovery" | "risc-v-kernel" | "browser-rendering" | "event-loop-responsiveness" | "server-client-boundary" | "url-to-resource";
export type MoreWritingSlug =
  | (typeof algorithmArticles)[number]["slug"]
  | (typeof languageArticles)[number]["slug"]
  | (typeof webArticles)[number]["slug"]
  | (typeof foundationArticles)[number]["slug"];
export type WritingSlug = FeaturedWritingSlug | MoreWritingSlug;

export function writingPath(locale: WritingLocale, slug?: WritingSlug) {
  return `/${locale}/writing${slug ? `/${slug}` : ""}`;
}
