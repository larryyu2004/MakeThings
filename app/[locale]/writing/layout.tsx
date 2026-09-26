import { notFound } from "next/navigation";
import Script from "next/script";
import { display, mono, sans } from "../../fonts";
import { isWritingLocale } from "@/lib/writing";
import "../../globals.css";

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
