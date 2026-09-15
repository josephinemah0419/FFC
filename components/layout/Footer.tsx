import Link from "next/link";
import { Camera, MapPin } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { navigation } from "@/data/navigation";

export function Footer() {
  return <footer className="site-footer"><div className="shell footer-grid"><Link href="/" className="brand" aria-label="Foodie & Friend Cuisine home"><Logo /><span><b>Foodie &amp; Friend Cuisine</b><small>Rooted in Malaysia</small></span></Link><nav aria-label="Footer navigation">{navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}</nav><address><MapPin /> 1st Floor, 1D-1, Jalan SS 9a/17,<br />43700 Petaling Jaya, Selangor</address><div className="footer-contacts"><span>Queen Chin<br />+6011-6119 9465</span><span>Foong<br />+6016-2209 287</span></div><a aria-label="Instagram placeholder" href="#contact"><Camera /></a></div><div className="shell footer-bottom"><small>© 2026 Foodie &amp; Friend Cuisine. All rights reserved.</small><p className="footer-tagline text-h3">Good Food Brings People Together.</p></div></footer>;
}
