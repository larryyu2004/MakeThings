import type { ComponentType } from "react";
import UnityEn from "@/content/writing/unity-lan-discovery.en.mdx";
import UnityZh from "@/content/writing/unity-lan-discovery.zh.mdx";
import KernelEn from "@/content/writing/risc-v-kernel.en.mdx";
import KernelZh from "@/content/writing/risc-v-kernel.zh.mdx";
import BrowserEn from "@/content/writing/browser-rendering.en.mdx";
import BrowserZh from "@/content/writing/browser-rendering.zh.mdx";
import { type WritingLocale, type WritingSlug } from "@/lib/writing-path";

export type { WritingLocale, WritingSlug } from "@/lib/writing-path";

type Article = {
  slug: WritingSlug;
  category: Record<WritingLocale, string>;
  title: Record<WritingLocale, string>;
  summary: Record<WritingLocale, string>;
  content: Record<WritingLocale, ComponentType>;
};

export const articles: Article[] = [
  {
    slug: "unity-lan-discovery",
    category: { en: "GAME / NETWORKING", zh: "游戏 / 网络" },
    title: { en: "Finding a Unity host on a local network", zh: "在局域网中发现 Unity 主机" },
    summary: {
      en: "Separating host discovery from transport connection, and designing for real Wi-Fi and hotspot behavior.",
      zh: "区分主机发现与传输层连接，并为真实的 Wi-Fi 和热点环境设计。",
    },
    content: { en: UnityEn, zh: UnityZh },
  },
  {
    slug: "risc-v-kernel",
    category: { en: "SYSTEMS / MEMORY", zh: "系统 / 内存" },
    title: { en: "Exploring an xv6 kernel on RISC-V", zh: "探索 RISC-V 上的 xv6 内核" },
    summary: {
      en: "A path from virtual addresses and page faults to copy-on-write and lazy allocation.",
      zh: "从虚拟地址与缺页异常出发，理解写时复制和延迟分配。",
    },
    content: { en: KernelEn, zh: KernelZh },
  },
  {
    slug: "browser-rendering",
    category: { en: "FRONTEND / PERFORMANCE", zh: "前端 / 性能" },
    title: { en: "How a browser turns a page into pixels", zh: "浏览器如何把页面变成像素" },
    summary: {
      en: "A practical rendering map from parsing and layout to paint, composite, and measurement.",
      zh: "从解析、布局到绘制、合成与测量的实用渲染流程。",
    },
    content: { en: BrowserEn, zh: BrowserZh },
  },
];

export const writingLocales: WritingLocale[] = ["en", "zh"];

export function isWritingLocale(value: string): value is WritingLocale {
  return value === "en" || value === "zh";
}

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
