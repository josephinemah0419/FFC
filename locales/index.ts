import { en } from "@/locales/en";
import { zh } from "@/locales/zh";

export const messages = { en, zh };
export type Locale = keyof typeof messages;
export type Messages = (typeof messages)[Locale];

export const isLocale = (value: string | null | undefined): value is Locale => value === "en" || value === "zh";

export const localeFromPath = (pathname: string | null): Locale => pathname?.startsWith("/zh") ? "zh" : "en";

export const localePath = (href: string, locale: Locale) => {
  if (!href.startsWith("/")) return href;
  const englishPath = href === "/zh" ? "/" : href.replace(/^\/zh(?=\/|$)/, "") || "/";
  return locale === "zh" ? englishPath === "/" ? "/zh" : `/zh${englishPath}` : englishPath;
};
