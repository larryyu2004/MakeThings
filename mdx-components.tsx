import type { MDXComponents } from "mdx/types";
import type { ReactNode } from "react";

function Key({ children }: { children: ReactNode }) {
  return <aside className="writing-callout">{children}</aside>;
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { Key, ...components };
}
