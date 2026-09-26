import UnityNetworkEn from "@/content/writing/more/unity-network-interfaces.en.mdx";
import UnityNetworkZh from "@/content/writing/more/unity-network-interfaces.zh.mdx";
import RiscvModelsEn from "@/content/writing/more/risc-v-teaching-models.en.mdx";
import RiscvModelsZh from "@/content/writing/more/risc-v-teaching-models.zh.mdx";
import BrowserWorkEn from "@/content/writing/more/browser-layout-paint.en.mdx";
import BrowserWorkZh from "@/content/writing/more/browser-layout-paint.zh.mdx";
import EventOrderEn from "@/content/writing/more/event-loop-ordering.en.mdx";
import EventOrderZh from "@/content/writing/more/event-loop-ordering.zh.mdx";
import NextNavigationEn from "@/content/writing/more/nextjs-navigation-data.en.mdx";
import NextNavigationZh from "@/content/writing/more/nextjs-navigation-data.zh.mdx";
import LayersEn from "@/content/writing/more/network-layer-model.en.mdx";
import LayersZh from "@/content/writing/more/network-layer-model.zh.mdx";
import BrowserRequestsEn from "@/content/writing/more/browser-navigation-fetch.en.mdx";
import BrowserRequestsZh from "@/content/writing/more/browser-navigation-fetch.zh.mdx";

export const foundationArticles = [
  {
    slug: "unity-network-interfaces",
    category: { en: "UNITY / NETWORKING", zh: "Unity / 网络" },
    title: { en: "Choosing a local address for Unity discovery", zh: "为 Unity 局域网发现选择地址" },
    summary: { en: "Why a device's first IP address may be the wrong one for a nearby player.", zh: "为什么设备返回的第一个 IP 地址未必能让附近玩家连接。" },
    content: { en: UnityNetworkEn, zh: UnityNetworkZh },
  },
  {
    slug: "risc-v-teaching-models",
    category: { en: "SYSTEMS / RISC-V", zh: "系统 / RISC-V" },
    title: { en: "Separating RISC-V rules from teaching models", zh: "区分 RISC-V 规则与教学模型" },
    summary: { en: "Pipeline stages, instruction length, and xv6 behavior are different kinds of claims.", zh: "流水线阶段、指令长度与 xv6 行为属于不同层次的结论。" },
    content: { en: RiscvModelsEn, zh: RiscvModelsZh },
  },
  {
    slug: "browser-layout-paint",
    category: { en: "FRONTEND / RENDERING", zh: "前端 / 渲染" },
    title: { en: "Reading layout and paint work in a browser trace", zh: "从浏览器轨迹识别布局与绘制" },
    summary: { en: "Use rendering stages as clues, then measure the work a page actually performs.", zh: "把渲染阶段当作线索，再测量页面真正执行的工作。" },
    content: { en: BrowserWorkEn, zh: BrowserWorkZh },
  },
  {
    slug: "event-loop-ordering",
    category: { en: "JAVASCRIPT / SCHEDULING", zh: "JavaScript / 调度" },
    title: { en: "Predicting task and microtask order", zh: "推导任务与微任务的执行顺序" },
    summary: { en: "A small console exercise for reasoning about synchronous code, promises, and timers.", zh: "用简短的控制台练习推导同步代码、Promise 与定时器的顺序。" },
    content: { en: EventOrderEn, zh: EventOrderZh },
  },
  {
    slug: "nextjs-navigation-data",
    category: { en: "NEXT.JS / ROUTING", zh: "Next.js / 路由" },
    title: { en: "Navigation and data in the App Router", zh: "App Router 中的导航与数据" },
    summary: { en: "How links, routes, and server rendering fit together without fixed caching myths.", zh: "理解链接、路由和服务端渲染如何配合，避开对缓存的固定想象。" },
    content: { en: NextNavigationEn, zh: NextNavigationZh },
  },
  {
    slug: "network-layer-model",
    category: { en: "NETWORKING / FOUNDATIONS", zh: "网络 / 基础" },
    title: { en: "A layered model for a web request", zh: "用分层模型理解 Web 请求" },
    summary: { en: "Follow a request through application, transport, internet, and link responsibilities.", zh: "沿着应用、传输、网络与链路的职责理解一次请求。" },
    content: { en: LayersEn, zh: LayersZh },
  },
  {
    slug: "browser-navigation-fetch",
    category: { en: "WEB / REQUESTS", zh: "Web / 请求" },
    title: { en: "Navigation, forms, and fetch are different browser requests", zh: "导航、表单和 fetch 是不同的浏览器请求" },
    summary: { en: "Compare requests initiated by page navigation, HTML forms, and JavaScript.", zh: "比较页面导航、HTML 表单与 JavaScript 发起请求的方式。" },
    content: { en: BrowserRequestsEn, zh: BrowserRequestsZh },
  },
] as const;
