import type { WritingLocale, WritingSlug } from "@/lib/writing-path";

export type WritingArticleSummary = {
  slug: WritingSlug;
  category: Record<WritingLocale, string>;
  title: Record<WritingLocale, string>;
  summary: Record<WritingLocale, string>;
};

export const writingArticles: WritingArticleSummary[] = [
  {
    slug: "unity-lan-discovery",
    category: { en: "GAME / NETWORKING", zh: "游戏 / 网络" },
    title: { en: "Finding a Unity host on a local network", zh: "在局域网中发现 Unity 主机" },
    summary: {
      en: "Separating host discovery from transport connection, and designing for real Wi-Fi and hotspot behavior.",
      zh: "区分主机发现与传输层连接，并为真实的 Wi-Fi 和热点环境设计。",
    },
  },
  {
    slug: "risc-v-kernel",
    category: { en: "SYSTEMS / MEMORY", zh: "系统 / 内存" },
    title: { en: "Exploring an xv6 kernel on RISC-V", zh: "探索 RISC-V 上的 xv6 内核" },
    summary: {
      en: "A path from virtual addresses and page faults to copy-on-write and lazy allocation.",
      zh: "从虚拟地址与缺页异常出发，理解写时复制和延迟分配。",
    },
  },
  {
    slug: "browser-rendering",
    category: { en: "FRONTEND / PERFORMANCE", zh: "前端 / 性能" },
    title: { en: "How a browser turns a page into pixels", zh: "浏览器如何把页面变成像素" },
    summary: {
      en: "A practical rendering map from parsing and layout to paint, composite, and measurement.",
      zh: "从解析、布局到绘制、合成与测量的实用渲染流程。",
    },
  },
  {
    slug: "event-loop-responsiveness",
    category: { en: "FRONTEND / INTERACTION", zh: "前端 / 交互" },
    title: { en: "How the event loop affects page responsiveness", zh: "事件循环怎样影响页面响应" },
    summary: {
      en: "Tasks, microtasks, and long work explain why a changed page can still feel frozen.",
      zh: "从任务、微任务与长时间运行的代码，解释页面为何已经更新却仍让人觉得卡顿。",
    },
  },
  {
    slug: "server-client-boundary",
    category: { en: "FRONTEND / ARCHITECTURE", zh: "前端 / 架构" },
    title: { en: "Drawing the Server–Client boundary in MakeThings", zh: "在 MakeThings 中划分 Server 与 Client 组件" },
    summary: {
      en: "How article pages, navigation, language, and theme controls divide work in this portfolio.",
      zh: "以文章页、导航、语言和主题切换为例，说明这个作品集怎样划分组件职责。",
    },
  },
  {
    slug: "url-to-resource",
    category: { en: "WEB / NETWORKING", zh: "Web / 网络" },
    title: { en: "From a URL to a page resource", zh: "从 URL 到页面资源" },
    summary: {
      en: "Following a browser request through URL parsing, HTTP, responses, and cache validation.",
      zh: "跟随一次浏览器请求，理解 URL、HTTP 响应与缓存验证。",
    },
  },
];
