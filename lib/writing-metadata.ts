import type { Metadata } from "next";
import { writingPath, type WritingLocale, type WritingSlug } from "@/lib/writing-path";

export function writingMetadata(locale: WritingLocale, title: string, description: string, slug?: WritingSlug): Metadata {
  const origin = process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined);
  const path = writingPath(locale, slug);
  return {
    title: `${title} — Larry Yu`,
    description,
    openGraph: { title, description, type: slug ? "article" : "website", locale: locale === "zh" ? "zh_CN" : "en_US" },
    ...(origin ? {
      metadataBase: new URL(origin),
      alternates: {
        canonical: path,
        languages: { en: writingPath("en", slug), "zh-CN": writingPath("zh", slug) },
      },
    } : {}),
  };
}
