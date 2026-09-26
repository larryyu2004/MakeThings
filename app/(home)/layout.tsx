import type { Metadata } from "next";
import Script from "next/script";
import { display, mono, sans } from "../fonts";
import "../globals.css";

export const metadata: Metadata = {
  title: "Larry Yu — Software Engineering Portfolio",
  description:
    "Larry Yu — software engineering portfolio focused on interactive systems, AI agents and distributed systems.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Script src="/theme-bootstrap.js" strategy="beforeInteractive" />
        {children}
      </body>
    </html>
  );
}
