import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://ffc-malaysia-20260914.josephinemah0419.chatgpt.site"),
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
      <body><Header />{children}<Footer /></body>
    </html>
  );
}
