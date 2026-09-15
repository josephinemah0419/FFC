"use client";

import Image from "next/image";
import { ArrowRight, ChefHat, Factory, Leaf, UtensilsCrossed } from "lucide-react";
import { useLocale, LocalizedLines } from "@/components/i18n/LocaleProvider";
import { ActionLink } from "@/components/ui/Buttons";
import { EditorialCard } from "@/components/ui/EditorialCard";
import { Media } from "@/components/ui/Media";
import { Process } from "@/components/ui/Process";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/Section";
import { images } from "@/data/site";

const roleIcons = [UtensilsCrossed, Leaf, Factory, ChefHat];
const roleImages = [images.restaurant, images.farmer, images.factory, images.kitchen];

export default function CertificationPage() {
  const { t } = useLocale();
  const certification = t.certification;
  return <main>
    <section className="certification-hero"><div className="shell certification-hero-grid">
      <Reveal className="certification-hero-copy"><SectionLabel>{certification.hero.eyebrow}</SectionLabel><h1><span className="heading-desktop"><LocalizedLines text={certification.hero.desktopTitle} /></span><span className="heading-mobile"><LocalizedLines text={certification.hero.mobileTitle} /></span></h1><p>{certification.hero.copy}</p><ActionLink href="/contact">{t.common.certified} <ArrowRight /></ActionLink></Reveal>
      <Reveal className="certification-hero-visual" delay={.12}><Image src="/ffc-certification-characters.png" alt={t.alt.certificate} width={1536} height={1024} priority sizes="(max-width: 680px) 100vw, (max-width: 900px) 84vw, 700px" /></Reveal>
    </div></section>
    <section className="section roles-section"><div className="shell"><div className="section-heading-pair"><Reveal><SectionLabel>{certification.roles.eyebrow}</SectionLabel><h2><LocalizedLines text={certification.roles.title} /></h2></Reveal><Reveal><p className="body-copy">{certification.roles.copy}</p></Reveal></div><div className="roles-grid">{certification.roles.items.map(([title, copy], index) => <Reveal delay={index * .08} key={title}><EditorialCard icon={roleIcons[index]} title={title} copy={copy} image={roleImages[index]} /></Reveal>)}</div></div></section>
    <section className="section process-section"><div className="shell"><Reveal><SectionLabel>{certification.process.eyebrow}</SectionLabel><h2><LocalizedLines text={certification.process.title} /></h2></Reveal><Reveal delay={.1}><Process /></Reveal></div></section>
    <section className="cert-close"><Media src={images.leaves} alt={t.alt.leaves} /><div className="shell"><Reveal><h2><LocalizedLines text={certification.close.title} /></h2><ActionLink href="/contact">{t.common.certified} <ArrowRight /></ActionLink></Reveal></div></section>
  </main>;
}
