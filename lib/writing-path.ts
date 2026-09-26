export type WritingLocale = "en" | "zh";
export type WritingSlug = "unity-lan-discovery" | "risc-v-kernel" | "browser-rendering" | "event-loop-responsiveness" | "server-client-boundary" | "url-to-resource";

export function writingPath(locale: WritingLocale, slug?: WritingSlug) {
  return `/${locale}/writing${slug ? `/${slug}` : ""}`;
}
