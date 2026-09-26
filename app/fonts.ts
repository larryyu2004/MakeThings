import localFont from "next/font/local";

export const display = localFont({
  src: "./fonts/newsreader-latin.woff2",
  variable: "--font-newsreader",
  weight: "400 700",
  display: "swap",
});

export const sans = localFont({
  src: "./fonts/space-grotesk-latin.woff2",
  variable: "--font-space-grotesk",
  weight: "400 700",
  display: "swap",
});

export const mono = localFont({
  src: "./fonts/jetbrains-mono-latin.woff2",
  variable: "--font-jetbrains-mono",
  weight: "400 600",
  display: "swap",
});
