"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ActionLink } from "@/components/ui/Buttons";
import { Logo } from "@/components/ui/Logo";
import { useLocale } from "@/components/i18n/LocaleProvider";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { locale, t, href, switchHref } = useLocale();
  const navigation = [
    { label: t.navigation.home, href: "/" }, { label: t.navigation.about, href: "/about" }, { label: t.navigation.certification, href: "/certification" }, { label: t.navigation.restaurant, href: "/restaurant" }, { label: t.navigation.contact, href: "/contact" },
  ];
  const activePath = pathname?.replace(/^\/zh(?=\/|$)/, "") || "/";

  return <header className="site-header"><div className="shell header-inner"><Link href={href("/")} className="brand" aria-label={`Foodie & Friend Cuisine ${t.navigation.home}`}><Logo priority /><span><b>Foodie &amp; Friend Cuisine</b><small>{t.common.rooted}</small></span></Link><nav className="desktop-nav" aria-label={t.common.mainNavigation}>{navigation.map((item) => <Link className={activePath === item.href || (item.href === "/restaurant" && activePath.startsWith("/restaurant")) ? "active" : ""} href={href(item.href)} key={item.href}>{item.label}</Link>)}</nav><div className="header-tools"><div className="language-switcher" aria-label={t.common.selectLanguage}><Link href={switchHref("en")} className={locale === "en" ? "active" : ""} aria-current={locale === "en" ? "page" : undefined}>EN</Link><span aria-hidden="true">|</span><Link href={switchHref("zh")} className={locale === "zh" ? "active" : ""} aria-current={locale === "zh" ? "page" : undefined}>中文</Link></div><ActionLink href="/contact" className="header-cta">{t.common.certified} <span>→</span></ActionLink><button className="menu-button" aria-expanded={open} aria-label={open ? t.common.closeNavigation : t.common.openNavigation} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}<span className="sr-only">{open ? t.common.closeNavigation : t.common.openNavigation}</span></button></div></div><div className={`mobile-menu ${open ? "is-open" : ""}`}><nav aria-label={t.common.mobileNavigation}>{navigation.map((item) => <Link onClick={() => setOpen(false)} href={href(item.href)} key={item.href}>{item.label}</Link>)}<div className="language-switcher mobile-language-switcher" aria-label={t.common.selectLanguage}><Link onClick={() => setOpen(false)} href={switchHref("en")} className={locale === "en" ? "active" : ""}>EN</Link><span aria-hidden="true">|</span><Link onClick={() => setOpen(false)} href={switchHref("zh")} className={locale === "zh" ? "active" : ""}>中文</Link></div><Link className="button button-primary" onClick={() => setOpen(false)} href={href("/contact")}>{t.common.certified} →</Link></nav></div></header>;
}
