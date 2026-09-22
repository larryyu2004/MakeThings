import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "mdx"],
};

export default createMDX({ options: { remarkPlugins: ["remark-gfm"], rehypePlugins: ["rehype-slug"] } })(nextConfig);
