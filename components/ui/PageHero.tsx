import type { ReactNode } from "react";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/Section";

type Props = { eyebrow: string; title: ReactNode; copy: string; image: string; children?: ReactNode; light?: boolean };
export function PageHero({ eyebrow, title, copy, image, children, light = false }: Props) {
  return <section className={`page-hero ${light ? "page-hero-light" : ""}`}><Media src={image} alt="FFC editorial placeholder photography" priority /><div className="page-hero-wash" /><div className="shell"><Reveal className="page-hero-copy"><SectionLabel>{eyebrow}</SectionLabel><h1 className="text-h1">{title}</h1><p className="lead text-body-lg">{copy}</p>{children}</Reveal></div></section>;
}
