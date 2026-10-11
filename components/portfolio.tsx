"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { writingArticles } from "@/lib/writing-articles";
import { writingPath, type WritingSlug } from "@/lib/writing-path";
import {
  achievements,
  copy,
  localized,
  notes,
  projects,
  timeline,
  type Locale,
  type Note,
  type Project,
} from "@/lib/content";
import {
  ArrowIcon,
  DocumentIcon,
  MailIcon,
  MenuIcon,
  PhoneIcon,
  ThemeIcon,
} from "@/components/icons";

type Theme = "light" | "dark";
type SectionId = "work" | "stack" | "about" | "writing" | "contact";

const sectionIds: SectionId[] = ["work", "stack", "about", "writing", "contact"];

function readStorage(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStorage(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Local storage may be unavailable in private browsing contexts.
  }
}

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      const timeout = window.setTimeout(() => setVisible(true), 0);
      return () => window.clearTimeout(timeout);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setVisible(true);
        observer.unobserve(element);
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return [ref, visible] as const;
}

function revealClassName(visible: boolean) {
  return `reveal${visible ? " is-visible" : ""}`;
}

function useActiveSection() {
  const [activeSection, setActiveSection] = useState<SectionId>("work");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const updateFromHash = () => {
      const hash = window.location.hash.slice(1) as SectionId;
      if (sectionIds.includes(hash)) setActiveSection(hash);
    };

    updateFromHash();
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && sectionIds.includes(entry.target.id as SectionId)) {
            setActiveSection(entry.target.id as SectionId);
          }
        });
      },
      { rootMargin: "-38% 0px -52% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("hashchange", updateFromHash);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", updateFromHash);
    };
  }, []);

  return activeSection;
}

function ProgressRail() {
  const fillRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
      if (fillRef.current) fillRef.current.style.height = `${progress * 100}%`;
    };
    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    requestUpdate();

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="progress-rail" aria-hidden="true">
      <span className="progress-rail__label">00</span>
      <div className="progress-rail__track">
        <span ref={fillRef} className="progress-rail__fill" />
        <span className="progress-rail__dot" />
      </div>
      <span className="progress-rail__label">100</span>
    </div>
  );
}

function Header({
  locale,
  theme,
  activeSection,
  onLocaleChange,
  onThemeToggle,
}: {
  locale: Locale;
  theme: Theme;
  activeSection: SectionId;
  onLocaleChange: (locale: Locale) => void;
  onThemeToggle: () => void;
}) {
  const t = copy[locale];
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems: { id: SectionId; label: string }[] = [
    { id: "work", label: t.nav.work },
    { id: "stack", label: t.nav.stack },
    { id: "about", label: t.nav.about },
    { id: "writing", label: t.nav.writing },
    { id: "contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const themeLabel = theme === "dark" ? t.controls.themeToLight : t.controls.themeToDark;

  return (
    <header className="topbar">
      <div className="topbar__inner">
        <a className="brand" href="#top" aria-label="Larry Yu home" onClick={closeMenu}>
          <span className="brand__mark" aria-hidden="true" />
          <span>LARRY MAKEs</span>
          <span className="brand__meta">Software / Games</span>
        </a>

        <nav id="site-nav" className={`nav${menuOpen ? " is-open" : ""}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              className={`nav__link${activeSection === item.id ? " is-active" : ""}`}
              href={`#${item.id}`}
              key={item.id}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="topbar__actions">
          <div className="topbar__controls" aria-label={t.controls.language}>
            <div className="locale-toggle" role="group" aria-label={t.controls.language}>
              <button
                className="locale-toggle__option"
                type="button"
                aria-pressed={locale === "en"}
                onClick={() => {
                  onLocaleChange("en");
                  closeMenu();
                }}
              >
                EN
              </button>
              <button
                className="locale-toggle__option"
                type="button"
                aria-pressed={locale === "zh"}
                onClick={() => {
                  onLocaleChange("zh");
                  closeMenu();
                }}
              >
                CN
              </button>
            </div>

            <button
              className="theme-toggle"
              type="button"
              aria-label={themeLabel}
              title={themeLabel}
              aria-pressed={theme === "dark"}
              onClick={onThemeToggle}
            >
              <ThemeIcon className="theme-toggle__icon" />
            </button>
          </div>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            aria-label={menuOpen ? t.controls.closeMenu : t.controls.openMenu}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <MenuIcon />
          </button>
        </div>
      </div>
    </header>
  );
}

function SectionHeading({
  id,
  number,
  title,
  aside,
}: {
  id: string;
  number: string;
  title: string;
  aside: string;
}) {
  const [revealRef, revealVisible] = useReveal<HTMLDivElement>();
  return (
    <div ref={revealRef} className={`section-heading ${revealClassName(revealVisible)}`}>
      <span className="section-heading__number mono">{number}</span>
      <h2 id={id}>{title}</h2>
      <p className="section-heading__aside">{aside}</p>
    </div>
  );
}

function SectionNumberDecoration({ number }: { number: string }) {
  return (
    <div className="section-number-decoration" aria-hidden="true">
      <span className="section-number-decoration__text">{number}</span>
    </div>
  );
}

function Hero({ locale, theme }: { locale: Locale; theme: Theme }) {
  const t = copy[locale];
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <Image
        className="hero__background"
        src={theme === "dark" ? "/images/larry-yu-hero-background-dark.png" : "/images/larry-yu-hero-background.png"}
        alt=""
        width={1774}
        height={887}
        priority
        sizes="100vw"
      />
      <div className="hero__copy">
        <div className="hero__overline eyebrow">{t.hero.overline}</div>
        <h1 id="hero-title">
          <span>Larry</span>
          <span>YU</span>
        </h1>
        <div className="hero__summary">
          <a className="hero__cta" href="#work">
            {t.hero.cta}
            <ArrowIcon />
          </a>
          <p>{t.hero.summary}</p>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, locale, theme }: { project: Project; locale: Locale; theme: Theme }) {
  const [revealRef, revealVisible] = useReveal<HTMLElement>();
  const videoDialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const title = localized(project.title, locale);
  const video = project.video;
  const relatedArticle: WritingSlug | undefined = project.id === "ozwatergame"
    ? "unity-lan-discovery"
    : project.id === "risc-v-kernel"
      ? "risc-v-kernel"
      : project.id === "water-balance-game"
        ? "browser-rendering"
        : undefined;
  const cardContent = (
    <>
      <figure className={`project-card__media project-card__media--${project.id}`}>
        <Image
          className="project-card__image"
          src={theme === "dark" ? project.darkImage : project.image}
          alt={localized(project.alt, locale)}
          width={project.width}
          height={project.height}
          sizes="(max-width: 900px) 100vw, (max-width: 1200px) 55vw, 48vw"
        />
      </figure>
      <div className="project-card__body">
        <div>
          <div className="project-card__tag mono">{localized(project.tag, locale)}</div>
          <h3>{title}</h3>
        </div>
        <span className="card__link" aria-hidden="true">
          <ArrowIcon />
        </span>
      </div>
    </>
  );

  const openVideo = () => {
    videoDialogRef.current?.showModal();
    void videoRef.current?.play().catch(() => {
      // Playback controls remain available if a browser blocks autoplay.
    });
  };

  const closeVideo = () => videoDialogRef.current?.close();

  return (
    <article
      ref={revealRef}
      className={`project-card${project.variant ? ` project-card--${project.variant}` : ""} ${revealClassName(revealVisible)}`}
    >
      {video ? (
        <button className="project-card__primary" type="button" aria-label={localized(project.ariaLabel, locale)} onClick={openVideo}>
          {cardContent}
        </button>
      ) : (
        <a className="project-card__primary" href={project.href ?? "#contact"} aria-label={localized(project.ariaLabel, locale)}>
          {cardContent}
        </a>
      )}
      {relatedArticle && (
        <a className="project-card__writing mono" href={writingPath(locale, relatedArticle)}>
          {copy[locale].links.readArticle} <span aria-hidden="true">↗</span>
        </a>
      )}
      {video && (
        <dialog
          ref={videoDialogRef}
          className="project-video"
          aria-label={locale === "zh" ? `${title} 项目视频` : `${title} project video`}
          onClick={(event) => {
            if (event.target === event.currentTarget) closeVideo();
          }}
          onClose={() => {
            videoRef.current?.pause();
            if (videoRef.current) videoRef.current.currentTime = 0;
          }}
        >
          <div className="project-video__content">
            <div className="project-video__header">
              <span className="mono">{title} / Video</span>
              <button className="project-video__close" type="button" onClick={closeVideo} aria-label={locale === "zh" ? "关闭视频" : "Close video"}>
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <video
              ref={videoRef}
              controls
              playsInline
              preload="none"
              poster={theme === "dark" ? project.darkImage : project.image}
              style={{ aspectRatio: `${video.width} / ${video.height}` }}
            >
              <source src={video.src} type="video/mp4" />
              {locale === "zh" ? "浏览器不支持视频播放。" : "Your browser does not support video playback."}
            </video>
          </div>
        </dialog>
      )}
    </article>
  );
}

function ProjectsSection({ locale, theme }: { locale: Locale; theme: Theme }) {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const t = copy[locale];

  useEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!section || !pin || !viewport || !track) return;

    const desktopQuery = window.matchMedia("(min-width: 768px)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let active = false;
    let sectionStart = 0;
    let scrollRange = 0;
    let edgeScrollDistance = 0;
    let maxOffset = 0;
    let targetOffset = 0;
    let currentOffset = 0;
    let animationFrame: number | null = null;
    let previousTime = 0;

    const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);
    const getTopbarHeight = () => document.querySelector<HTMLElement>(".topbar")?.getBoundingClientRect().height ?? 0;
    const resetViewportScroll = () => {
      viewport.scrollLeft = 0;
      viewport.scrollTop = 0;
    };

    const render = (timestamp: number) => {
      animationFrame = null;
      if (!active) return;
      resetViewportScroll();
      const elapsed = Math.min(Math.max((timestamp - previousTime) / 1000, 0), 0.05);
      previousTime = timestamp;
      const easing = 1 - Math.exp(-elapsed * 18);
      currentOffset += (targetOffset - currentOffset) * easing;
      if (Math.abs(targetOffset - currentOffset) < 0.15) currentOffset = targetOffset;
      track.style.transform = `translate3d(${-currentOffset}px, 0, 0)`;
      if (Math.abs(targetOffset - currentOffset) >= 0.15) {
        animationFrame = window.requestAnimationFrame(render);
      }
    };

    const requestRender = () => {
      if (animationFrame !== null) return;
      previousTime = performance.now();
      animationFrame = window.requestAnimationFrame(render);
    };

    const updateTarget = () => {
      if (!active) return;
      resetViewportScroll();
      const progress = maxOffset > 0
        ? clamp((window.scrollY - (sectionStart - getTopbarHeight()) - edgeScrollDistance) / maxOffset, 0, 1)
        : 0;
      targetOffset = progress * maxOffset;
      requestRender();
    };

    const measure = () => {
      if (!active) return;
      resetViewportScroll();
      const topbarHeight = getTopbarHeight();
      const pinHeight = Math.max(320, window.innerHeight - topbarHeight);
      maxOffset = Math.max(0, track.scrollWidth - viewport.clientWidth);
      edgeScrollDistance = maxOffset > 0 ? Math.min(pinHeight * 0.75, 600) : 0;
      scrollRange = maxOffset + edgeScrollDistance * 2;
      sectionStart = window.scrollY + section.getBoundingClientRect().top;
      section.style.setProperty("--topbar-height", `${topbarHeight}px`);
      section.style.setProperty("--projects-pin-height", `${pinHeight}px`);
      section.style.setProperty("--projects-scroll-distance", `${scrollRange}px`);
      currentOffset = clamp(currentOffset, 0, maxOffset);
      track.style.transform = `translate3d(${-currentOffset}px, 0, 0)`;
      updateTarget();
    };

    const disable = () => {
      active = false;
      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = null;
      }
      section.classList.remove("projects-section--horizontal");
      section.style.removeProperty("--topbar-height");
      section.style.removeProperty("--projects-pin-height");
      section.style.removeProperty("--projects-scroll-distance");
      track.style.removeProperty("transform");
      currentOffset = 0;
      targetOffset = 0;
    };

    const enable = () => {
      active = true;
      section.classList.add("projects-section--horizontal");
      measure();
    };

    const sync = () => {
      const shouldEnable = desktopQuery.matches && !reducedMotionQuery.matches;
      if (shouldEnable && !active) enable();
      else if (!shouldEnable && active) disable();
      else if (shouldEnable) measure();
    };

    const handleScroll = () => updateTarget();
    const handleResize = () => sync();
    const listenToMediaChange = (query: MediaQueryList) => {
      if (query.addEventListener) query.addEventListener("change", sync);
      else query.addListener(sync);
    };
    const removeMediaChange = (query: MediaQueryList) => {
      if (query.removeEventListener) query.removeEventListener("change", sync);
      else query.removeListener(sync);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    const handleFocusIn = (event: FocusEvent) => {
      if (!active || maxOffset <= 0) return;
      const target = event.target;
      if (!(target instanceof HTMLElement) || target.closest("dialog")) return;
      const card = target.closest<HTMLElement>(".project-card");
      if (!card || !track.contains(card)) return;
      resetViewportScroll();
      window.requestAnimationFrame(resetViewportScroll);
      const desiredOffset = clamp(card.offsetLeft - (viewport.clientWidth - card.offsetWidth) / 2, 0, maxOffset);
      window.scrollTo({
        top: sectionStart - getTopbarHeight() + edgeScrollDistance + desiredOffset,
        behavior: "smooth",
      });
    };
    track.addEventListener("focusin", handleFocusIn);
    listenToMediaChange(desktopQuery);
    listenToMediaChange(reducedMotionQuery);

    const resizeObserver = "ResizeObserver" in window ? new ResizeObserver(measure) : null;
    resizeObserver?.observe(viewport);
    resizeObserver?.observe(track);
    resizeObserver?.observe(pin);

    sync();
    window.requestAnimationFrame(measure);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      track.removeEventListener("focusin", handleFocusIn);
      removeMediaChange(desktopQuery);
      removeMediaChange(reducedMotionQuery);
      resizeObserver?.disconnect();
      disable();
    };
  }, [locale]);

  return (
    <section ref={sectionRef} className="section section--rule section--numbered projects-section" id="work" aria-labelledby="work-title">
      <div ref={pinRef} className="projects-pin">
        <SectionNumberDecoration number="01" />
        <SectionHeading id="work-title" number={t.sections.work.number} title={t.sections.work.title} aside={t.sections.work.aside} />
        <div ref={viewportRef} className="projects-viewport" role="region" aria-labelledby="work-title">
          <div ref={trackRef} className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} locale={locale} theme={theme} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StackSection({ locale, theme }: { locale: Locale; theme: Theme }) {
  const t = copy[locale];
  const [imageRevealRef, imageRevealVisible] = useReveal<HTMLElement>();
  const [listRevealRef, listRevealVisible] = useReveal<HTMLDivElement>();
  return (
    <section className="section section--rule section--numbered" id="stack" aria-labelledby="stack-title">
      <SectionNumberDecoration number="02" />
      <SectionHeading id="stack-title" number={t.sections.stack.number} title={t.sections.stack.title} aside={t.sections.stack.aside} />
      <div className="notes-layout">
        <figure ref={imageRevealRef} className={`notes-image ${revealClassName(imageRevealVisible)}`}>
          <div className="notes-image__art">
            <Image
              src={theme === "dark" ? "/images/toolkit-system-map-dark.png" : "/images/toolkit-system-map.png"}
              alt={t.visuals.stackAlt}
              width={1122}
              height={1402}
              sizes="(max-width: 900px) 100vw, 38vw"
            />
            <span className="notes-image__marker mono" aria-hidden="true">02 / {locale === "zh" ? "技术栈地图" : "SYSTEM MAP"}</span>
          </div>
          <figcaption className="mono">{t.visuals.stackCaption}</figcaption>
        </figure>

        <div ref={listRevealRef} className={`notes-list ${revealClassName(listRevealVisible)}`} aria-label={locale === "zh" ? "关注方向" : "Areas of focus"}>
          {notes.map((note, index) => (
            <NoteRow key={note.number} note={note} locale={locale} featured={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function NoteRow({ note, locale, featured }: { note: Note; locale: Locale; featured: boolean }) {
  return (
    <article className={`note-row${featured ? " is-featured" : ""}`}>
      <span className="note-row__number">{note.number}</span>
      <span className="note-row__date mono">{localized(note.category, locale)}</span>
      <div>
        <h3>{localized(note.title, locale)}</h3>
        <p>{localized(note.description, locale)}</p>
      </div>
    </article>
  );
}

function AboutSection({ locale, theme }: { locale: Locale; theme: Theme }) {
  const t = copy[locale];
  const [introRevealRef, introRevealVisible] = useReveal<HTMLDivElement>();
  const [visualRevealRef, visualRevealVisible] = useReveal<HTMLDivElement>();
  return (
    <section className="section section--rule section--numbered" id="about" aria-labelledby="about-title">
      <SectionNumberDecoration number="03" />
      <SectionHeading id="about-title" number={t.sections.about.number} title={t.sections.about.title} aside={t.sections.about.aside} />
      <div className="about-grid">
        <div ref={introRevealRef} className={`about__intro ${revealClassName(introRevealVisible)}`}>
          <div className="eyebrow">{t.sections.about.introEyebrow}</div>
          <h3>{t.sections.about.introTitle}</h3>
          <p>{t.sections.about.intro}</p>
          <span className="about__signature" aria-label="Signature">Larry Yu</span>
        </div>

        <div ref={visualRevealRef} className={revealClassName(visualRevealVisible)}>
          <figure className="about__visual">
            <Image
              className="about__visual-image"
              src={theme === "dark" ? "/images/profile-building-across-layers-dark.png" : "/images/profile-building-across-layers.png"}
              alt={t.visuals.aboutAlt}
              width={1672}
              height={941}
              sizes="(max-width: 900px) 100vw, 56vw"
            />
            <figcaption>
              <span className="mono">{t.visuals.aboutCaptionIndex}</span>
              <strong>{t.visuals.aboutCaptionTitle}</strong>
            </figcaption>
          </figure>

          <div className="about__right">
            <div className="timeline" aria-label={t.sections.about.timelineLabel}>
              {timeline.map((entry) => (
                <div className="timeline__item" key={entry.date.en}>
                  <div className="timeline__date mono">{localized(entry.date, locale)}</div>
                  <div>
                    <h4>{localized(entry.title, locale)}</h4>
                    <p>{localized(entry.description, locale)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="about__support">
              <div className="achievement-strip" aria-label={t.sections.about.achievementsLabel}>
                <div className="eyebrow">{t.sections.about.recognitionLabel}</div>
                <div className="achievement-strip__items">
                  {achievements.map((achievement) => (
                    <span key={achievement.en}>{localized(achievement, locale)}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const [revealRef, revealVisible] = useReveal<HTMLDivElement>();
  const titleLines = t.contact.title.split("\n");
  return (
    <section className="section section--rule" id="contact" aria-labelledby="contact-title">
      <div ref={revealRef} className={`contact-panel ${revealClassName(revealVisible)}`}>
        <div className="contact-panel__heading">
          <div className="eyebrow">{t.contact.number}</div>
          <h2 id="contact-title">
            {titleLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="contact-panel__sub">{t.contact.subtitle}</p>
        </div>

        <div className="contact-list">
          <a className="contact-link" href="mailto:jiayiyu@myyahoo.com">
            <span className="contact-link__top">
              <span className="mono">{t.contact.emailLabel}</span>
              <MailIcon />
            </span>
            <strong>{t.contact.emailTitle}</strong>
            <span>jiayiyu@myyahoo.com</span>
          </a>
          <a className="contact-link" href="tel:+61468353776">
            <span className="contact-link__top">
              <span className="mono">{t.contact.phoneLabel}</span>
              <PhoneIcon />
            </span>
            <strong>{t.contact.phoneTitle}</strong>
            <span>0468 353 776</span>
          </a>
          <div className="contact-link contact-link--static">
            <span className="contact-link__top">
              <span className="mono">{t.contact.profilesLabel}</span>
              <DocumentIcon />
            </span>
            <strong>{t.contact.profilesTitle}</strong>
            <div className="profile-links">
              <a href="https://www.linkedin.com/in/larry-yu-29b19133b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/larryyu2004" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://makethings.vercel.app/" target="_blank" rel="noopener noreferrer">{t.contact.profilesPortfolioLabel}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WritingSection({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const [revealRef, revealVisible] = useReveal<HTMLDivElement>();

  return (
    <section className="section section--rule section--numbered" id="writing" aria-labelledby="writing-title">
      <SectionNumberDecoration number="04" />
      <SectionHeading
        id="writing-title"
        number={t.sections.writing.number}
        title={t.sections.writing.title}
        aside={t.sections.writing.aside}
      />
      <div ref={revealRef} className={`writing-home ${revealClassName(revealVisible)}`}>
        <div className="writing-list" aria-label={locale === "zh" ? "精选文章" : "Selected writing"}>
          {writingArticles.slice(0, 3).map((article, index) => (
            <Link className="writing-card" href={writingPath(locale, article.slug)} key={article.slug}>
              <span className="writing-card__number mono">{String(index + 1).padStart(2, "0")}</span>
              <span className="writing-card__category mono">{article.category[locale]}</span>
              <span className="writing-card__body">
                <strong>{article.title[locale]}</strong>
                <span>{article.summary[locale]}</span>
              </span>
              <span className="writing-card__arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
        <Link className="writing-home__all mono" href={writingPath(locale)}>
          {t.sections.writing.allArticles} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}

export default function Portfolio() {
  const [locale, setLocale] = useState<Locale>("en");
  const [theme, setTheme] = useState<Theme>("light");
  const [hydrated, setHydrated] = useState(false);
  const activeSection = useActiveSection();
  const t = useMemo(() => copy[locale], [locale]);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      const storedLocale = readStorage("larry-locale");
      if (storedLocale === "zh") setLocale("zh");

      const documentTheme: Theme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
      setTheme(documentTheme);
      setHydrated(true);
    }, 0);

    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    const syncDocumentLanguage = () => {
      document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
      document.title = locale === "zh" ? "Larry Yu — 软件工程作品集" : "Larry Yu — Software Engineering Portfolio";
    };

    syncDocumentLanguage();
    const frame = window.requestAnimationFrame(syncDocumentLanguage);
    const timeout = window.setTimeout(syncDocumentLanguage, 0);
    writeStorage("larry-locale", locale);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
    };
  }, [hydrated, locale]);

  const handleThemeToggle = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    writeStorage("larry-theme", nextTheme);
    setTheme(nextTheme);
  };

  return (
    <div className="portfolio">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header
        locale={locale}
        theme={theme}
        activeSection={activeSection}
        onLocaleChange={setLocale}
        onThemeToggle={handleThemeToggle}
      />
      <ProgressRail />
      <main className="page" id="main-content">
        <Hero locale={locale} theme={theme} />
        <ProjectsSection locale={locale} theme={theme} />
        <StackSection locale={locale} theme={theme} />
        <AboutSection locale={locale} theme={theme} />
        <WritingSection locale={locale} />
        <ContactSection locale={locale} />
      </main>
      <footer className="footer">
        <span className="mono">© {new Date().getFullYear()} Larry Yu</span>
        <span className="footer__note mono">{t.footer}</span>
      </footer>
    </div>
  );
}
