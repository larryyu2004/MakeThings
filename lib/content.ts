export type Locale = "en" | "zh";

export type LocalizedText = {
  en: string;
  zh: string;
};

export type Project = {
  id: string;
  title: LocalizedText;
  tag: LocalizedText;
  description: LocalizedText;
  alt: LocalizedText;
  ariaLabel: LocalizedText;
  href?: string;
  video?: { src: string; width: number; height: number };
  image: string;
  darkImage: string;
  width: number;
  height: number;
  variant?: "wide" | "hero";
};

export type Note = {
  number: string;
  category: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
};

export type TimelineEntry = {
  date: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
};

export type Achievement = LocalizedText;

export type PortfolioCopy = {
  nav: {
    work: string;
    stack: string;
    about: string;
    contact: string;
    writing: string;
  };
  controls: {
    language: string;
    themeToDark: string;
    themeToLight: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    overline: string;
    cta: string;
    summary: string;
  };
  sections: {
    work: {
      number: string;
      title: string;
      aside: string;
    };
    stack: {
      number: string;
      title: string;
      aside: string;
    };
    about: {
      number: string;
      title: string;
      aside: string;
      introEyebrow: string;
      introTitle: string;
      intro: string;
      visualIndex: string;
      visualTitle: string;
      visualDescription: string;
      visualMeta: string;
      visualCaption: string;
      timelineLabel: string;
      recognitionLabel: string;
      achievementsLabel: string;
    };
    writing: {
      number: string;
      title: string;
      aside: string;
      allArticles: string;
    };
  };
  visuals: {
    stackAlt: string;
    stackCaption: string;
    aboutAlt: string;
    aboutCaptionIndex: string;
    aboutCaptionTitle: string;
  };
  links: {
    viewProject: string;
    discussFocus: string;
    readArticle: string;
  };
  contact: {
    number: string;
    title: string;
    subtitle: string;
    emailLabel: string;
    emailTitle: string;
    phoneLabel: string;
    phoneTitle: string;
    profilesLabel: string;
    profilesTitle: string;
    profilesPortfolioLabel: string;
  };
  footer: string;
};

export const copy: Record<Locale, PortfolioCopy> = {
  en: {
    nav: {
      work: "01 Projects",
      stack: "02 Stack",
      about: "03 About",
      contact: "05 Contact",
      writing: "04 Writing",
    },
    controls: {
      language: "Language",
      themeToDark: "Switch to dark theme",
      themeToLight: "Switch to light theme",
      openMenu: "Open navigation",
      closeMenu: "Close navigation",
    },
    hero: {
      overline: "Software engineer / Game Developer / Researcher",
      cta: "View selected work",
      summary:
        "I build interactive systems, AI developer tools and full-stack applications — from the first model to the working system.",
    },
    sections: {
      work: {
        number: "01 / Work",
        title: "Projects",
        aside:
          "Selected systems, simulations and developer tools — each one a question made executable.",
      },
      stack: {
        number: "02 / Stack",
        title: "Toolkit",
        aside:
          "The tools and areas I move between when a problem crosses the boundary between interface and system.",
      },
      about: {
        number: "03 / About",
        title: "Profile",
        aside:
          "Software engineering with a bias toward interactive systems, careful abstractions and working prototypes.",
        introEyebrow: "A short introduction",
        introTitle: "I build to understand.",
        intro:
          "I am a Software Engineering student at Adelaide University specialising in interactive systems, AI agents and distributed systems. I enjoy moving between a clear interface, a reliable architecture and the low-level details that make the whole thing work.",
        visualIndex: "PROFILE / VISUAL",
        visualTitle: "Portrait or technical diagram",
        visualDescription:
          "Replace this panel with a personal image or a representative system visual.",
        visualMeta: "ADD WHEN READY",
        visualCaption: "Replace with a personal visual",
        timelineLabel: "Experience timeline",
        recognitionLabel: "Recognition",
        achievementsLabel: "Awards and achievements",
      },
      writing: {
        number: "04 / Writing",
        title: "Writing",
        aside: "Notes from building games, kernels and interfaces — the decisions behind the finished work.",
        allArticles: "Explore all writing",
      },
    },
    visuals: {
      stackAlt: "Hand-drawn system map connecting AI agents, interactive web and 3D, low-level systems, testing tools and visual design",
      stackCaption: "Fig. 02 / Build, learn, iterate",
      aboutAlt: "Ink illustration of an engineer sketching a bridge between interactive experiences and reliable software systems",
      aboutCaptionIndex: "Fig. 03 / Profile",
      aboutCaptionTitle: "Building across layers",
    },
    links: {
      viewProject: "View project",
      discussFocus: "Discuss focus",
      readArticle: "Read related article",
    },
    contact: {
      number: "05 / Contact",
      title: "Let's build\nsomething.",
      subtitle:
        "Based in Adelaide and interested in interactive systems, AI engineering and software that helps people make better decisions.",
      emailLabel: "01 / Email",
      emailTitle: "Write to Larry",
      phoneLabel: "02 / Phone",
      phoneTitle: "Call Larry",
      profilesLabel: "03 / Profiles",
      profilesTitle: "Find the work",
      profilesPortfolioLabel: "Portfolio",
    },
    footer: "Software / interactive systems / AI engineering.",
  },
  zh: {
    nav: {
      work: "01 项目",
      stack: "02 技术栈",
      about: "03 关于",
      contact: "05 联系",
      writing: "04 写作",
    },
    controls: {
      language: "语言",
      themeToDark: "切换至深色主题",
      themeToLight: "切换至浅色主题",
      openMenu: "打开导航",
      closeMenu: "关闭导航",
    },
    hero: {
      overline: "软件工程师 / 游戏开发者 / 研究者",
      cta: "查看精选作品",
      summary:
        "我构建交互式系统、AI 开发者工具和全栈应用——从最初的模型到真正运行的系统。",
    },
    sections: {
      work: {
        number: "01 / 工作",
        title: "项目",
        aside: "精选系统、模拟与开发者工具——每一个都是一个被执行的问题。",
      },
      stack: {
        number: "02 / 技术栈",
        title: "工具箱",
        aside: "当问题跨越界面与系统边界时，我在这些工具和领域之间切换。",
      },
      about: {
        number: "03 / 关于",
        title: "简介",
        aside: "偏向交互系统、清晰抽象与可运行原型的软件工程实践。",
        introEyebrow: "简短介绍",
        introTitle: "我通过构建来理解。",
        intro:
          "我是阿德莱德大学的软件工程学生，专注于交互系统、AI 智能体与分布式系统。我喜欢在清晰的界面、可靠的架构和让系统真正运转的底层细节之间切换。",
        visualIndex: "简介 / 视觉",
        visualTitle: "肖像或技术图",
        visualDescription: "用个人图片或有代表性的系统视觉替换此面板。",
        visualMeta: "待添加",
        visualCaption: "替换为个人视觉",
        timelineLabel: "经历时间线",
        recognitionLabel: "荣誉与认可",
        achievementsLabel: "荣誉与成就",
      },
      writing: {
        number: "04 / 写作",
        title: "写作",
        aside: "记录我构建游戏、内核与界面时的思考，以及成品背后的技术决策。",
        allArticles: "查看全部文章",
      },
    },
    visuals: {
      stackAlt: "手绘系统图，将 AI 智能体、交互式网页与 3D、底层系统、测试工具和视觉设计连接起来",
      stackCaption: "图 02 / 构建、学习、迭代",
      aboutAlt: "工程师绘制连接交互体验与可靠软件系统的桥梁的手绘插画",
      aboutCaptionIndex: "图 03 / 简介",
      aboutCaptionTitle: "在不同层次之间构建",
    },
    links: {
      viewProject: "查看项目",
      discussFocus: "讨论方向",
      readArticle: "阅读相关文章",
    },
    contact: {
      number: "05 / 联系",
      title: "一起构建\n一些东西。",
      subtitle:
        "我目前在阿德莱德，关注交互系统、AI 工程，以及帮助人们做出更好决策的软件。",
      emailLabel: "01 / 邮箱",
      emailTitle: "写信给 Larry",
      phoneLabel: "02 / 电话",
      phoneTitle: "致电 Larry",
      profilesLabel: "03 / 主页",
      profilesTitle: "查看作品",
      profilesPortfolioLabel: "作品集",
    },
    footer: "软件 / 交互系统 / AI 工程。",
  },
};

export const projects: Project[] = [
  {
    id: "ozwatergame",
    title: { en: "WaterGame", zh: "WaterGame" },
    tag: {
      en: "Research / Multiplayer / Unity",
      zh: "研究 / 多人游戏 / Unity",
    },
    description: {
      en: "A server-authoritative simulation platform for five roles, LAN discovery, facility decisions and shared game state.",
      zh: "面向五种角色、局域网发现、设施决策与共享游戏状态的服务器权威模拟平台。",
    },
    alt: {
      en: "Hand-drawn isometric illustration of a Brisbane-inspired multiplayer water and infrastructure simulation with five player roles and long-term city projections",
      zh: "布里斯班风格的多人水资源与基础设施模拟图，展示五种玩家角色和城市长期规划。",
    },
    ariaLabel: {
      en: "Play the ozWaterGame project video",
      zh: "播放 ozWaterGame 项目视频",
    },
    image: "/images/ozwatergame-art.png",
    darkImage: "/images/ozwatergame-art-dark.png",
    video: { src: "/videos/ozwatergame.mp4", width: 1620, height: 1080 },
    width: 1536,
    height: 1024,
    variant: "wide",
  },
  {
    id: "water-balance-game",
    title: { en: "Water Balance Game", zh: "Water Balance Game" },
    tag: {
      en: "Simulation / Next.js / Three.js",
      zh: "模拟 / Next.js / Three.js",
    },
    description: {
      en: "An interactive water-security simulation that visualises trade-offs through physics-based models and decision support.",
      zh: "一个交互式水安全模拟，通过基于物理的模型和决策支持来呈现权衡。",
    },
    alt: {
      en: "Hand-drawn editorial illustration of a water demand and supply system balanced on a blue fulcrum",
      zh: "展示水资源需求与供应在蓝色支点上保持平衡的手绘编辑插画。",
    },
    ariaLabel: {
      en: "Open Water Balance Game",
      zh: "打开 Water Balance Game",
    },
    href: "https://water-balance-mu.vercel.app/",
    image: "/images/water-balance-game-art.png",
    darkImage: "/images/water-balance-game-art-dark.png",
    width: 1568,
    height: 1003,
    variant: "hero",
  },
  {
    id: "dead-trace",
    title: { en: "DEAD TRACE", zh: "DEAD TRACE" },
    tag: {
      en: "3D Gameplay / Unity / C#",
      zh: "3D 游戏玩法 / Unity / C#",
    },
    description: {
      en: "A third-person investigation prototype with firearm systems, rotating light puzzles, clue progression and an unlockable exit.",
      zh: "一款第三人称调查游戏原型，包含枪械系统、旋转灯光谜题、线索推进与可解锁的出口。",
    },
    alt: {
      en: "Hand-drawn illustration of an armed investigator between a red-lit wooden structure and an amber spotlight aimed toward a locked gate",
      zh: "手绘插画：持枪调查者站在红光照亮的木屋与指向锁闭大门的琥珀色聚光灯之间。",
    },
    ariaLabel: {
      en: "Play the DEAD TRACE project video",
      zh: "播放 DEAD TRACE 项目视频",
    },
    image: "/images/dead-trace-art.png",
    darkImage: "/images/dead-trace-art-dark.png",
    video: { src: "/videos/dead-trace.mp4", width: 1280, height: 720 },
    width: 1536,
    height: 1024,
  },
  {
    id: "bridge",
    title: { en: "BRIDGE", zh: "BRIDGE" },
    tag: {
      en: "AI engineering / MCP / Playwright",
      zh: "AI 工程 / MCP / Playwright",
    },
    description: {
      en: "An MCP-based coding-agent extension connecting OpenCode, ChatGPT and Gemini through typed tools and review gates.",
      zh: "一个基于 MCP 的编程智能体扩展，通过类型化工具与审查门连接 OpenCode、ChatGPT 和 Gemini。",
    },
    alt: {
      en: "Hand-drawn editorial illustration of BRIDGE connecting three AI coding environments through typed tools, browser workflows and review gates",
      zh: "展示 BRIDGE 通过类型化工具、浏览器工作流和审查门连接三个 AI 编程环境的手绘编辑插画。",
    },
    ariaLabel: {
      en: "Play the BRIDGE project video",
      zh: "播放 BRIDGE 项目视频",
    },
    image: "/images/bridge-mcp-art.png",
    darkImage: "/images/bridge-mcp-art-dark.png",
    video: { src: "/videos/bridge.mp4", width: 1280, height: 720 },
    width: 1619,
    height: 971,
  },
  {
    id: "risc-v-kernel",
    title: { en: "Operating System Kernel", zh: "操作系统内核" },
    tag: { en: "Systems / C / Assembly", zh: "系统 / C / Assembly" },
    description: {
      en: "An xv6-based systems project covering copy-on-write, lazy allocation, memory-mapped files and expanded file addressing.",
      zh: "一个基于 xv6 的系统项目，涵盖写时复制、延迟分配、内存映射文件和扩展文件寻址。",
    },
    alt: {
      en: "Hand-drawn systems illustration of a RISC-V xv6 kernel with processes, system calls, virtual memory, copy-on-write and a file system",
      zh: "展示带有进程、系统调用、虚拟内存、写时复制和文件系统的 RISC-V xv6 内核手绘系统插画。",
    },
    ariaLabel: {
      en: "Open the Operating System Kernel repository",
      zh: "打开操作系统内核代码仓库",
    },
    href: "https://github.com/larryyu2004/XV-6-Lab",
    image: "/images/risc-v-kernel-art.png",
    darkImage: "/images/risc-v-kernel-art-dark.png",
    width: 1536,
    height: 1024,
  },
];

export const notes: Note[] = [
  {
    number: "01",
    category: { en: "AI / AGENTS", zh: "AI / 智能体" },
    title: { en: "AI engineering", zh: "AI 工程" },
    description: {
      en: "MCP, multi-agent systems, OpenAI Codex, OpenCode, local AI deployment and reliable agent workflows.",
      zh: "MCP、多智能体系统、OpenAI Codex、OpenCode、本地 AI 部署与可靠的智能体工作流。",
    },
  },
  {
    number: "02",
    category: { en: "FRONTEND / 3D", zh: "前端 / 3D" },
    title: { en: "Interactive development", zh: "交互式开发" },
    description: {
      en: "React, Next.js, Three.js, React Three Fibre, Unity, Unreal Engine and Zustand.",
      zh: "React、Next.js、Three.js、React Three Fibre、Unity、Unreal Engine 与 Zustand。",
    },
  },
  {
    number: "03",
    category: { en: "SYSTEMS / LOW-LEVEL", zh: "系统 / 底层" },
    title: { en: "Systems engineering", zh: "系统工程" },
    description: {
      en: "C++, C, Python, Go, Java, C#, Swift, Assembly, Docker, Linux, databases and APIs.",
      zh: "C++、C、Python、Go、Java、C#、Swift、Assembly、Docker、Linux、数据库与 API。",
    },
  },
  {
    number: "04",
    category: { en: "TESTING / TOOLS", zh: "测试 / 工具" },
    title: { en: "Quality and developer tooling", zh: "质量与开发者工具" },
    description: {
      en: "Vitest, Playwright, Git, TypeDoc, Doxygen and Xcode — with 351 tests on Water Balance Game and 167 on BRIDGE.",
      zh: "Vitest、Playwright、Git、TypeDoc、Doxygen 与 Xcode——Water Balance Game 有 351 个测试，BRIDGE 有 167 个。",
    },
  },
  {
    number: "05",
    category: { en: "DESIGN / VISUAL", zh: "设计 / 视觉" },
    title: { en: "Design and modelling", zh: "设计与建模" },
    description: {
      en: "Blender, Figma, Open Design, Obsidian, Krita, Quixel Mixer and Comfy.",
      zh: "Blender、Figma、Open Design、Obsidian、Krita、Quixel Mixer 与 Comfy。",
    },
  },
];

export const timeline: TimelineEntry[] = [
  {
    date: { en: "2026—now", zh: "2026—现在" },
    title: { en: "Water Balance Game / BRIDGE", zh: "Water Balance Game / BRIDGE" },
    description: {
      en: "Building an interactive water-security simulation and an MCP-based AI coding-agent extension.",
      zh: "构建交互式水安全模拟，以及基于 MCP 的 AI 编程智能体扩展。",
    },
  },
  {
    date: { en: "NOV 2025—JAN 2026", zh: "2025年11月—2026年1月" },
    title: {
      en: "Student Researcher / Lead Unity Developer",
      zh: "学生研究者 / Unity 首席开发者",
    },
    description: {
      en: "Led initial ozWaterGame development at Adelaide University and handed the architecture to a ten-member team.",
      zh: "在阿德莱德大学主导 ozWaterGame 的初期开发，并将架构交接给十人团队。",
    },
  },
  {
    date: { en: "JUL 2024—NOW", zh: "2024年7月—现在" },
    title: { en: "Bachelor of Information Technology", zh: "信息技术学士" },
    description: {
      en: "Adelaide University / Software & Games Development / GPA 6.60 / 7.00.",
      zh: "阿德莱德大学 / 软件与游戏开发 / GPA 6.60 / 7.00。",
    },
  },
  {
    date: { en: "NOV 2024—FEB 2025", zh: "2024年11月—2025年2月" },
    title: { en: "RISC-V operating system kernel", zh: "RISC-V 操作系统内核" },
    description: {
      en: "Implemented memory management, tracing, mmap files and expanded xv6 file addressing.",
      zh: "实现内存管理、追踪、mmap 文件与扩展的 xv6 文件寻址。",
    },
  },
];

export const achievements: Achievement[] = [
  {
    en: "Chancellor's Letter of Commendation / GPA top 5%",
    zh: "校长嘉许信 / GPA 前 5%",
  },
  { en: "Summer Research Scholarship", zh: "暑期研究奖学金" },
  {
    en: "University of South Australia International Merit Award",
    zh: "南澳大学国际优秀奖",
  },
];

export function localized(value: LocalizedText, locale: Locale): string {
  return value[locale];
}
