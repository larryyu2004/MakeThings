import { notFound } from "next/navigation";
import { JetBrains_Mono, Newsreader, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import { isWritingLocale } from "@/lib/writing";
import "../../globals.css";

const display = Newsreader({ variable: "--font-newsreader", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const sans = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const mono = JetBrains_Mono({ variable: "--font-jetbrains-mono", subsets: ["latin"], weight: ["400", "500", "600"] });

export default async function WritingLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  if (!isWritingLocale(locale)) notFound();

  return (
    <html lang={locale === "zh" ? "zh-CN" : "en"} className={`${display.variable} ${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <body>
        <Script src="/theme-bootstrap.js" strategy="beforeInteractive" />
        {children}
      </body>
    </html>
  );
}
