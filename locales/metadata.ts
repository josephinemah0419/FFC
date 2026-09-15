import type { Metadata } from "next";
import { localePath, messages, type Locale } from "@/locales";

type PageKey = keyof typeof messages.en.meta;

export function localizedMetadata(page: PageKey, locale: Locale, path: string): Metadata {
  const content = messages[locale].meta[page];
  return {
    title: content.title,
    description: content.description,
    openGraph: { title: content.title, description: content.description, locale: locale === "zh" ? "zh_CN" : "en_MY" },
    twitter: { title: content.title, description: content.description },
    alternates: {
      canonical: localePath(path, locale),
      languages: { en: localePath(path, "en"), "zh-CN": localePath(path, "zh") },
    },
  };
}
