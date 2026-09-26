import NodeEn from "@/content/writing/more/node-server-basics.en.mdx";
import NodeZh from "@/content/writing/more/node-server-basics.zh.mdx";
import PrismaEn from "@/content/writing/more/prisma-data-access.en.mdx";
import PrismaZh from "@/content/writing/more/prisma-data-access.zh.mdx";
import PipelineEn from "@/content/writing/more/frontend-build-pipeline.en.mdx";
import PipelineZh from "@/content/writing/more/frontend-build-pipeline.zh.mdx";
import ReactEn from "@/content/writing/more/react-memoization.en.mdx";
import ReactZh from "@/content/writing/more/react-memoization.zh.mdx";
import BootstrapEn from "@/content/writing/more/bootstrap-layout-basics.en.mdx";
import BootstrapZh from "@/content/writing/more/bootstrap-layout-basics.zh.mdx";
import PostcssEn from "@/content/writing/more/postcss-transform-pipeline.en.mdx";
import PostcssZh from "@/content/writing/more/postcss-transform-pipeline.zh.mdx";
import TailwindEn from "@/content/writing/more/tailwind-utility-design.en.mdx";
import TailwindZh from "@/content/writing/more/tailwind-utility-design.zh.mdx";
import RazorEn from "@/content/writing/more/razor-pages-data-flow.en.mdx";
import RazorZh from "@/content/writing/more/razor-pages-data-flow.zh.mdx";

export const webArticles = [
  {
    slug: "node-server-basics",
    category: { en: "BACKEND / NODE", zh: "后端 / NODE" },
    title: { en: "What a small Node server actually does", zh: "一个小型 Node 服务器究竟做了什么" },
    summary: { en: "Trace a request, choose a response, and understand what a framework adds.", zh: "追踪一次请求和响应，理解框架在哪一步发挥作用。" },
    content: { en: NodeEn, zh: NodeZh },
  },
  {
    slug: "prisma-data-access",
    category: { en: "BACKEND / DATA", zh: "后端 / 数据" },
    title: { en: "Designing a Prisma data access boundary", zh: "设计 Prisma 数据访问边界" },
    summary: { en: "Ask for the fields a screen needs while keeping validation and permission in the application.", zh: "按页面需要选择字段，同时由应用负责验证与授权。" },
    content: { en: PrismaEn, zh: PrismaZh },
  },
  {
    slug: "frontend-build-pipeline",
    category: { en: "FRONTEND / TOOLING", zh: "前端 / 工具链" },
    title: { en: "What a frontend build pipeline is for", zh: "前端构建流水线究竟解决什么问题" },
    summary: { en: "Separate bundling, syntax transforms, runtime support, and deployment output.", zh: "区分打包、语法转换、运行时支持与部署产物。" },
    content: { en: PipelineEn, zh: PipelineZh },
  },
  {
    slug: "react-memoization",
    category: { en: "FRONTEND / REACT", zh: "前端 / REACT" },
    title: { en: "When React memoization earns its place", zh: "React memoization 什么时候值得使用" },
    summary: { en: "Compare useMemo, useCallback, and memo with an example that actually consumes its props.", zh: "用真正接收属性的示例区分 useMemo、useCallback 与 memo。" },
    content: { en: ReactEn, zh: ReactZh },
  },
  {
    slug: "bootstrap-layout-basics",
    category: { en: "FRONTEND / CSS", zh: "前端 / CSS" },
    title: { en: "Reading a Bootstrap layout from the outside in", zh: "从外到内读懂 Bootstrap 布局" },
    summary: { en: "A concise primer on containers, rows, columns, and responsive breakpoints.", zh: "从容器、行、列和断点理解响应式网格。" },
    content: { en: BootstrapEn, zh: BootstrapZh },
  },
  {
    slug: "postcss-transform-pipeline",
    category: { en: "FRONTEND / CSS", zh: "前端 / CSS" },
    title: { en: "PostCSS as a CSS transformation pipeline", zh: "将 PostCSS 理解为 CSS 转换流水线" },
    summary: { en: "A concise primer on parsing, plugins, output, and checking the generated CSS.", zh: "理解解析、插件、输出，以及如何检查生成的 CSS。" },
    content: { en: PostcssEn, zh: PostcssZh },
  },
  {
    slug: "tailwind-utility-design",
    category: { en: "FRONTEND / CSS", zh: "前端 / CSS" },
    title: { en: "Designing with Tailwind utilities, not class collections", zh: "用 Tailwind 工具类设计，而不是堆砌类名" },
    summary: { en: "Make responsive intent and interaction states clear through consistent utilities.", zh: "用一致的工具类表达响应式布局和交互状态。" },
    content: { en: TailwindEn, zh: TailwindZh },
  },
  {
    slug: "razor-pages-data-flow",
    category: { en: "BACKEND / .NET", zh: "后端 / .NET" },
    title: { en: "Following data through a Razor Page", zh: "跟随数据走过一个 Razor Page" },
    summary: { en: "Separate route, query, and form input across GET, POST, PageModel, and data access.", zh: "区分路由、查询与表单输入，追踪 PageModel 中的读写流程。" },
    content: { en: RazorEn, zh: RazorZh },
  },
] as const;
