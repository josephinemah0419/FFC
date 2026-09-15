"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { localeFromPath, localePath, messages, type Locale } from "@/locales";

export function useLocale() {
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  return { locale, t: messages[locale], href: (path: string) => localePath(path, locale), switchHref: (nextLocale: Locale) => localePath(pathname || "/", nextLocale) };
}

export function LocaleDocumentLanguage() {
  const { locale } = useLocale();
  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
    document.documentElement.dataset.locale = locale;
  }, [locale]);
  return null;
}

export function LocalizedLines({ text }: { text: string }) {
  return <>{text.split("\n").map((line, index) => <span key={`${line}-${index}`}>{line}{index < text.split("\n").length - 1 && <br />}</span>)}</>;
}
