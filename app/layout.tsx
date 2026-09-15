import type { Metadata } from "next";
import { headers } from "next/headers";
import { Cormorant_Garamond, Manrope, Noto_Sans_SC, Noto_Serif_SC } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocaleDocumentLanguage } from "@/components/i18n/LocaleProvider";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const notoSerifSC = Noto_Serif_SC({
  weight: ["400", "500", "600"],
  variable: "--font-zh-display",
  display: "swap",
  preload: false,
});

const notoSansSC = Noto_Sans_SC({
  weight: ["400", "500", "600", "700"],
  variable: "--font-zh-body",
  display: "swap",
  preload: false,
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Foodie & Friend Cuisine | Rooted in Malaysia",
  description: "Honest food starts with real ingredients.",
  alternates: {
    canonical: "/",
    languages: { en: "/", "zh-CN": "/zh" },
  },
  openGraph: {
    title: "Foodie & Friend Cuisine | Rooted in Malaysia",
    description: "Honest food starts with real ingredients.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Honest Food Starts with Real Ingredients." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Foodie & Friend Cuisine | Rooted in Malaysia",
    description: "Honest food starts with real ingredients.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/ffc-logo.png",
    shortcut: "/ffc-logo.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const requestHeaders = await headers();
  const lang = requestHeaders.get("x-ffc-locale") === "zh-CN" ? "zh-CN" : "en";
  return (
    <html lang={lang}>
      <body className={`${cormorantGaramond.variable} ${manrope.variable} ${notoSerifSC.variable} ${notoSansSC.variable}`}><LocaleDocumentLanguage /><Header />{children}<Footer /></body>
    </html>
  );
}
