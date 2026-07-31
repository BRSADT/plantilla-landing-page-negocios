import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "./site.config";

const geist = Geist({ variable: "--font-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });
const display = Fraunces({ variable: "--font-display", subsets: ["latin"], weight: ["700", "800", "900"] });

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const colors = {
    "--red": siteConfig.theme.primary,
    "--yellow": siteConfig.theme.accent,
    "--cream": siteConfig.theme.cream,
    "--paper": siteConfig.theme.background,
    "--cocoa": siteConfig.theme.text,
    "--muted": siteConfig.theme.muted,
    "--line": siteConfig.theme.border,
  } as React.CSSProperties;
  return <html lang="es"><head><meta name="color-scheme" content="light" /></head><body style={colors} className={`${geist.variable} ${mono.variable} ${display.variable}`}>{children}</body></html>;
}
