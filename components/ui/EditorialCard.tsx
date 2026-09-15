"use client";

import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { Media } from "@/components/ui/Media";
import { useLocale } from "@/components/i18n/LocaleProvider";

type Props = { href?: string; image: string; icon?: LucideIcon; title: string; copy: string; className?: string };
export function EditorialCard({ href, image, icon: Icon, title, copy, className = "" }: Props) {
  const { href: localHref, t } = useLocale();
  const body = <><Media src={image} alt={`${title} — ${t.common.editorialPhoto}`} /><div className="editorial-card-copy">{Icon && <span className="icon-orb"><Icon /></span>}<h3 className="text-h3">{title}</h3><p className="text-card-description">{copy}</p>{href && <ArrowRight className="card-arrow" />}</div></>;
  return href ? <Link href={localHref(href)} className={`editorial-card ${className}`}>{body}</Link> : <article className={`editorial-card ${className}`}>{body}</article>;
}
