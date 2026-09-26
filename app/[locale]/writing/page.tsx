import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import WritingHeader from "@/components/writing-header";
import { articles, isWritingLocale, writingLocales } from "@/lib/writing";
import { writingPath } from "@/lib/writing-path";
import { writingMetadata } from "@/lib/writing-metadata";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return writingLocales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isWritingLocale(locale)) return {};
  return writingMetadata(
    locale,
    locale === "zh" ? "写作" : "Writing",
    locale === "zh" ? "关于游戏网络、操作系统、浏览器行为与 Web 架构的技术文章。" : "Technical writing on game networking, operating systems, browser behavior, and web architecture.",
  );
}

export default async function WritingIndex({ params }: Props) {
  const { locale } = await params;
  if (!isWritingLocale(locale)) notFound();

  return (
    <>
      <a className="skip-link" href="#main-content">{locale === "zh" ? "跳到正文" : "Skip to content"}</a>
      <WritingHeader locale={locale} />
      <main className="writing-page" id="main-content">
        <div className="writing-page__intro">
          <span className="eyebrow">{locale === "zh" ? "04 / 写作" : "04 / Writing"}</span>
          <h1>{locale === "zh" ? "笔记成为文章。" : "Notes into essays."}</h1>
          <p>{locale === "zh" ? "从项目中遇到的问题出发，记录设计选择、技术边界和真正学到的东西。" : "Technical ideas shaped by projects: the design choices, the boundaries, and what the work taught me."}</p>
        </div>
        <div className="writing-list" aria-label={locale === "zh" ? "文章列表" : "Articles"}>
          {articles.map((article, index) => (
            <Link className="writing-card" href={writingPath(locale, article.slug)} key={article.slug}>
              <span className="writing-card__number mono">{String(index + 1).padStart(2, "0")}</span>
              <span className="writing-card__category mono">{article.category[locale]}</span>
              <span className="writing-card__body"><strong>{article.title[locale]}</strong><span>{article.summary[locale]}</span></span>
              <span className="writing-card__arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
        <Link className="writing-back" href="/#work">← {locale === "zh" ? "返回项目" : "Back to projects"}</Link>
      </main>
    </>
  );
}
