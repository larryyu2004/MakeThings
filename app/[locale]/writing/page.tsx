import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import WritingHeader from "@/components/writing-header";
import { articleGroups, articles, featuredArticles, isWritingLocale, writingLocales } from "@/lib/writing";
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
    locale === "zh" ? "关于编程、游戏开发、算法与 Web 工程的双语文章。" : "Bilingual writing on programming, game development, algorithms, and web engineering.",
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
          <p>{locale === "zh" ? "精选文章与更多技术写作，涵盖项目实践、编程语言、算法和 Web 开发。" : "Selected essays and more technical writing on projects, programming languages, algorithms, and the web."}</p>
        </div>
        <section className="writing-collection" aria-labelledby="selected-writing">
          <h2 className="writing-collection__heading" id="selected-writing">
            {locale === "zh" ? "精选文章" : "Selected writing"}
            <span className="mono">{String(featuredArticles.length).padStart(2, "0")}</span>
          </h2>
          <div className="writing-list" aria-label={locale === "zh" ? "精选文章列表" : "Selected articles"}>
            {featuredArticles.map((article, index) => (
              <Link className="writing-card" href={writingPath(locale, article.slug)} key={article.slug}>
                <span className="writing-card__number mono">{String(index + 1).padStart(2, "0")}</span>
                <span className="writing-card__category mono">{article.category[locale]}</span>
                <span className="writing-card__body"><strong>{article.title[locale]}</strong><span>{article.summary[locale]}</span></span>
                <span className="writing-card__arrow" aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </section>
        <section className="writing-collection" id="more-articles" aria-labelledby="more-writing">
          <h2 className="writing-collection__heading" id="more-writing">
            {locale === "zh" ? "更多文章" : "More articles"}
            <span className="mono">{String(articles.length - featuredArticles.length).padStart(2, "0")}</span>
          </h2>
          <p className="writing-collection__intro">
            {locale === "zh" ? "从旧 portfolio 的主题与笔记扩展而来，按主题浏览。" : "Expanded from topics and notes in the older portfolio, organized by subject."}
          </p>
          <nav className="writing-topics mono" aria-label={locale === "zh" ? "更多文章分类" : "More article topics"}>
            {articleGroups.map((group) => (
              <a href={`#more-${group.id}`} key={group.id}>{group.title[locale]} <span>{group.articles.length}</span></a>
            ))}
          </nav>
          {articleGroups.map((group) => (
            <section className="writing-topic" id={`more-${group.id}`} aria-labelledby={`more-${group.id}-title`} key={group.id}>
              <h3 className="writing-topic__heading" id={`more-${group.id}-title`}>{group.title[locale]}</h3>
              <div className="writing-list" aria-label={group.title[locale]}>
                {group.articles.map((article, index) => (
                  <Link className="writing-card" href={writingPath(locale, article.slug)} key={article.slug}>
                    <span className="writing-card__number mono">{String(index + 1).padStart(2, "0")}</span>
                    <span className="writing-card__category mono">{article.category[locale]}</span>
                    <span className="writing-card__body"><strong>{article.title[locale]}</strong><span>{article.summary[locale]}</span></span>
                    <span className="writing-card__arrow" aria-hidden="true">↗</span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </section>
        <Link className="writing-back" href="/#work">← {locale === "zh" ? "返回项目" : "Back to projects"}</Link>
      </main>
    </>
  );
}
