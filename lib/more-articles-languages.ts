import CppMoveEn from "@/content/writing/more/cpp-move-semantics.en.mdx";
import CppMoveZh from "@/content/writing/more/cpp-move-semantics.zh.mdx";
import UnityCSharpEn from "@/content/writing/more/unity-csharp-lifecycle.en.mdx";
import UnityCSharpZh from "@/content/writing/more/unity-csharp-lifecycle.zh.mdx";
import GoChannelsEn from "@/content/writing/more/go-goroutines-channels.en.mdx";
import GoChannelsZh from "@/content/writing/more/go-goroutines-channels.zh.mdx";
import HtmlFormsEn from "@/content/writing/more/html-forms.en.mdx";
import HtmlFormsZh from "@/content/writing/more/html-forms.zh.mdx";
import JavaScriptEventsEn from "@/content/writing/more/javascript-language-patterns.en.mdx";
import JavaScriptEventsZh from "@/content/writing/more/javascript-language-patterns.zh.mdx";
import SwiftOptionalsEn from "@/content/writing/more/swift-optionals-protocols.en.mdx";
import SwiftOptionalsZh from "@/content/writing/more/swift-optionals-protocols.zh.mdx";
import TypeScriptBoundariesEn from "@/content/writing/more/typescript-type-boundaries.en.mdx";
import TypeScriptBoundariesZh from "@/content/writing/more/typescript-type-boundaries.zh.mdx";
import SingletonEn from "@/content/writing/more/singleton-tradeoffs.en.mdx";
import SingletonZh from "@/content/writing/more/singleton-tradeoffs.zh.mdx";
import UnityStateEn from "@/content/writing/more/unity-game-state-events.en.mdx";
import UnityStateZh from "@/content/writing/more/unity-game-state-events.zh.mdx";

export const languageArticles = [
  {
    slug: "cpp-move-semantics",
    category: { en: "C++ / LANGUAGE", zh: "C++ / 语言" },
    title: { en: "When a C++ value can be moved", zh: "C++ 中什么时候可以移动一个值" },
    summary: { en: "Value categories, ownership, and what std::move actually offers.", zh: "从值类别与所有权出发，理解 std::move 真正提供了什么。" },
    content: { en: CppMoveEn, zh: CppMoveZh },
  },
  {
    slug: "unity-csharp-lifecycle",
    category: { en: "UNITY / C#", zh: "UNITY / C#" },
    title: { en: "Put Unity work in the right callback", zh: "把 Unity 工作放到合适的回调中" },
    summary: { en: "Choose initialization, frame, and physics callbacks by the work they own.", zh: "根据工作职责选择初始化、画面帧与物理回调。" },
    content: { en: UnityCSharpEn, zh: UnityCSharpZh },
  },
  {
    slug: "go-goroutines-channels",
    category: { en: "GO / CONCURRENCY", zh: "GO / 并发" },
    title: { en: "Coordinate Go goroutines with channels", zh: "用 channel 协调 Go goroutine" },
    summary: { en: "Give workers an owner, an output path, and a stop condition.", zh: "为并发工作明确所有者、输出路径与停止条件。" },
    content: { en: GoChannelsEn, zh: GoChannelsZh },
  },
  {
    slug: "html-forms",
    category: { en: "WEB / HTML", zh: "WEB / HTML" },
    title: { en: "What a plain HTML form already does", zh: "原生 HTML 表单已经会做什么" },
    summary: { en: "Labels, named fields, GET, and POST without misleading security shortcuts.", zh: "理解标签、字段名、GET 与 POST，避开误导性的安全捷径。" },
    content: { en: HtmlFormsEn, zh: HtmlFormsZh },
  },
  {
    slug: "javascript-language-patterns",
    category: { en: "JAVASCRIPT / EVENTS", zh: "JAVASCRIPT / 事件" },
    title: { en: "Follow a click through JavaScript's event model", zh: "沿着 JavaScript 事件路径追踪一次点击" },
    summary: { en: "Capture, target, bubble, and delegate a click without breaking other controls.", zh: "从捕获到冒泡与事件委托，理清一次点击如何传播。" },
    content: { en: JavaScriptEventsEn, zh: JavaScriptEventsZh },
  },
  {
    slug: "swift-optionals-protocols",
    category: { en: "SWIFT / DESIGN", zh: "SWIFT / 设计" },
    title: { en: "Make missing values explicit in Swift", zh: "在 Swift 中明确处理缺失的值" },
    summary: { en: "Use optionals at input boundaries and protocols for the behavior that follows.", zh: "在输入边界处理可选值，再用协议描述后续行为。" },
    content: { en: SwiftOptionalsEn, zh: SwiftOptionalsZh },
  },
  {
    slug: "typescript-type-boundaries",
    category: { en: "TYPESCRIPT / TYPES", zh: "TYPESCRIPT / 类型" },
    title: { en: "Keep untrusted values outside the TypeScript boundary", zh: "把不可信的值挡在 TypeScript 边界外" },
    summary: { en: "Validate unknown runtime data before relying on discriminated types.", zh: "先验证未知的运行时数据，再依靠可辨识类型组织代码。" },
    content: { en: TypeScriptBoundariesEn, zh: TypeScriptBoundariesZh },
  },
  {
    slug: "singleton-tradeoffs",
    category: { en: "DESIGN / OWNERSHIP", zh: "设计 / 所有权" },
    title: { en: "A singleton is an ownership decision", zh: "单例其实是在决定所有权" },
    summary: { en: "A static instance is convenient only when its scene lifetime and dependencies are clear.", zh: "静态实例的便利，需要清楚的场景生命周期和依赖关系支撑。" },
    content: { en: SingletonEn, zh: SingletonZh },
  },
  {
    slug: "unity-game-state-events",
    category: { en: "UNITY / GAME FLOW", zh: "UNITY / 游戏流程" },
    title: { en: "Let game state notify the UI", zh: "让游戏状态主动通知 UI" },
    summary: { en: "Separate state transitions from presentation with events and an initial snapshot.", zh: "用事件和初始快照分开状态转换与界面呈现。" },
    content: { en: UnityStateEn, zh: UnityStateZh },
  },
] as const;
