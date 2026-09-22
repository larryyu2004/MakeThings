export type WritingLocale = "en" | "zh";
export type WritingSlug = "unity-lan-discovery" | "risc-v-kernel" | "browser-rendering";

export function writingPath(locale: WritingLocale, slug?: WritingSlug) {
  return `/${locale}/writing${slug ? `/${slug}` : ""}`;
}
