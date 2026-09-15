import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { Media } from "@/components/ui/Media";

type Props = { href?: string; image: string; icon?: LucideIcon; title: string; copy: string; className?: string };
export function EditorialCard({ href, image, icon: Icon, title, copy, className = "" }: Props) {
  const body = <><Media src={image} alt={`${title} placeholder photography`} /><div className="editorial-card-copy">{Icon && <span className="icon-orb"><Icon /></span>}<h3 className="text-h3">{title}</h3><p className="text-card-description">{copy}</p>{href && <ArrowRight className="card-arrow" />}</div></>;
  return href ? <Link href={href} className={`editorial-card ${className}`}>{body}</Link> : <article className={`editorial-card ${className}`}>{body}</article>;
}
