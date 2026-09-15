"use client";

import Link from "next/link";
import { Camera, MapPin } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { useLocale } from "@/components/i18n/LocaleProvider";

export function Footer() {
  const { t, href } = useLocale();
  const navigation = [{ label: t.navigation.home, href: "/" }, { label: t.navigation.about, href: "/about" }, { label: t.navigation.certification, href: "/certification" }, { label: t.navigation.restaurant, href: "/restaurant" }, { label: t.navigation.contact, href: "/contact" }];
  return <footer className="site-footer"><div className="shell footer-grid"><Link href={href("/")} className="brand" aria-label={`Foodie & Friend Cuisine ${t.navigation.home}`}><Logo /><span><b>Foodie &amp; Friend Cuisine</b><small>{t.common.rooted}</small></span></Link><nav aria-label={t.common.mainNavigation}>{navigation.map((item) => <Link href={href(item.href)} key={item.href}>{item.label}</Link>)}</nav><address><MapPin /> 1st Floor, 1D-1, Jalan SS 9a/17,<br />43700 Petaling Jaya, Selangor</address><div className="footer-contacts"><span>Queen Chin<br />+6011-6119 9465</span><span>Foong<br />+6016-2209 287</span></div><a aria-label={t.footer.instagram} href="#contact"><Camera /></a></div><div className="shell footer-bottom"><small>{t.footer.rights}</small><p className="footer-tagline text-h3">{t.footer.tagline}</p></div></footer>;
}
