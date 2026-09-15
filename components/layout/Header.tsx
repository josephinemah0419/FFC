"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation } from "@/data/navigation";
import { ActionLink } from "@/components/ui/Buttons";
import { Logo } from "@/components/ui/Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return <header className="site-header"><div className="shell header-inner"><Link href="/" className="brand" aria-label="Foodie & Friend Cuisine home"><Logo priority /><span><b>Foodie &amp; Friend Cuisine</b><small>Rooted in Malaysia</small></span></Link><nav className="desktop-nav" aria-label="Main navigation">{navigation.map((item) => <Link className={pathname === item.href || (item.href === "/restaurant" && pathname.startsWith("/restaurant")) ? "active" : ""} href={item.href} key={item.href}>{item.label}</Link>)}</nav><div className="header-tools"><ActionLink href="/contact" className="header-cta">Get FFC Certified <span>→</span></ActionLink><button className="menu-button" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}<span className="sr-only">Open navigation</span></button></div></div><div className={`mobile-menu ${open ? "is-open" : ""}`}><nav aria-label="Mobile navigation">{navigation.map((item) => <Link onClick={() => setOpen(false)} href={item.href} key={item.href}>{item.label}</Link>)}<Link className="button button-primary" onClick={() => setOpen(false)} href="/contact">Get FFC Certified →</Link></nav></div></header>;
}
