import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import WritingHeader from "@/components/writing-header";
import { articles, getArticle, getArticleGroup, isWritingLocale, writingLocales } from "@/lib/writing";
import { writingPath } from "@/lib/writing-path";
import { writingMetadata } from "@/lib/writing-metadata";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return writingLocales.flatMap((locale) => articles.map(({ slug }) => ({ locale, slug })));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getArticle(slug);
  if (!isWritingLocale(locale) || !article) return {};
  return writingMetadata(locale, article.title[locale], article.summary[locale], article.slug);
}

export default async function WritingArticle({ params }: Props) {
  const { locale, slug } = await params;
  const article = getArticle(slug);
  if (!isWritingLocale(locale) || !article) notFound();
  const Content = article.content[locale];
  const group = getArticleGroup(slug);
  const listPath = group ? `${writingPath(locale)}#more-${group.id}` : writingPath(locale);

  return (
    <>
      <a className="skip-link" href="#main-content">{locale === "zh" ? "跳到正文" : "Skip to content"}</a>
      <WritingHeader locale={locale} slug={article.slug} />
      <main className="writing-page writing-page--article" id="main-content">
        <Link className="writing-back" href={listPath}>← {group ? (locale === "zh" ? "更多文章" : "More articles") : (locale === "zh" ? "所有文章" : "All writing")}</Link>
        <div className="writing-article__header">
          <span className="eyebrow">{article.category[locale]}</span>
          <p>{article.summary[locale]}</p>
        </div>
        <article className="writing-prose"><Content /></article>
        <footer className="writing-article__footer">
          <Link href={listPath}>← {locale === "zh" ? "返回文章列表" : "Back to writing"}</Link>
          <Link href="/#work">{locale === "zh" ? "查看项目" : "View projects"} ↗</Link>
        </footer>
      </main>
    </>
  );
}
