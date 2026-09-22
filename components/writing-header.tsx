"use client";

import Link from "next/link";
import { useEffect } from "react";
import { ThemeIcon } from "@/components/icons";
import { writingPath, type WritingLocale, type WritingSlug } from "@/lib/writing-path";

export default function WritingHeader({ locale, slug }: { locale: WritingLocale; slug?: WritingSlug }) {
  useEffect(() => {
    try { window.localStorage.setItem("larry-locale", locale); } catch { /* Storage can be unavailable. */ }
  }, [locale]);


  function toggleTheme() {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { window.localStorage.setItem("larry-theme", next); } catch { /* Storage can be unavailable. */ }
  }

  return (
    <header className="writing-header">
      <div className="writing-header__inner">
        <Link className="brand" href="/" aria-label={locale === "zh" ? "Larry Yu 首页" : "Larry Yu home"}>
          <span className="brand__mark" aria-hidden="true" />
          <span>LARRY MAKEs</span>
          <span className="brand__meta">Software / Games</span>
        </Link>
        <nav className="writing-header__nav" aria-label={locale === "zh" ? "写作导航" : "Writing navigation"}>
          <Link href={writingPath(locale)}>{locale === "zh" ? "写作" : "Writing"}</Link>
          <Link href="/#work">{locale === "zh" ? "项目" : "Projects"}</Link>
        </nav>
        <div className="writing-header__actions">
          <div className="locale-toggle" role="group" aria-label={locale === "zh" ? "语言" : "Language"}>
            <Link className="locale-toggle__option" aria-current={locale === "en" ? "page" : undefined} href={writingPath("en", slug)}>EN</Link>
            <Link className="locale-toggle__option" aria-current={locale === "zh" ? "page" : undefined} href={writingPath("zh", slug)}>中文</Link>
          </div>
          <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={locale === "zh" ? "切换明暗主题" : "Toggle color theme"}>
            <ThemeIcon className="theme-toggle__icon" />
          </button>
        </div>
      </div>
    </header>
  );
}
