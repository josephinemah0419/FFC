import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Foodie & Friend Cuisine | Rooted in Malaysia",
  description: "Honest food starts with real ingredients.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorantGaramond.variable} ${manrope.variable}`}><Header />{children}<Footer /></body>
    </html>
  );
}
