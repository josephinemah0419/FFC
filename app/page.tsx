"use client";

import Link from "next/link";
import { ArrowRight, ChefHat, Factory, Leaf, Sun, UsersRound, UtensilsCrossed } from "lucide-react";
import { useLocale, LocalizedLines } from "@/components/i18n/LocaleProvider";
import { ActionLink } from "@/components/ui/Buttons";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/Section";
import { images } from "@/data/site";

const photo = {
  hero: images.hero,
  greens: images.greens,
  tea: images.tea,
  restaurant: images.restaurant,
  dish: images.dish,
  leaves: images.leaves,
};

const valueIcons = [Leaf, UsersRound, UtensilsCrossed, Sun];
const roleIcons = [UtensilsCrossed, Leaf, Factory, ChefHat];

export default function Home() {
  const { t, href } = useLocale();
  const home = t.home;
  return <main>
    <section className="hero-shell">
      <Media src={photo.hero} alt={t.alt.heroDish} priority className="hero-photo" />
      <div className="hero-vignette" />
      <div className="shell hero-grid">
        <Reveal className="hero-copy"><SectionLabel>{home.hero.eyebrow}</SectionLabel><h1><span className="heading-desktop"><LocalizedLines text={home.hero.desktopTitle} /></span><span className="heading-mobile"><LocalizedLines text={home.hero.mobileTitle} /></span></h1><p className="lead">{home.hero.copy}</p><div className="hero-actions"><ActionLink href="/contact">{t.common.certified} <ArrowRight /></ActionLink><ActionLink href="/restaurant" variant="ghost">{t.common.visitRestaurant} <ArrowRight /></ActionLink></div></Reveal>
      </div>
    </section>
    <section className="section about-preview"><div className="shell split split-about"><Reveal><SectionLabel>{home.about.eyebrow}</SectionLabel><h2><LocalizedLines text={home.about.title} /></h2><p className="body-copy">{home.about.copy}</p><p className="micro-copy">{home.about.founders}</p><ActionLink href="/about" variant="text">{t.common.discoverStory} <ArrowRight /></ActionLink></Reveal><Reveal className="photo-stack" delay={0.15}><Media src={photo.greens} alt={t.alt.greens} className="stack-main" /><Media src={photo.restaurant} alt={t.alt.restaurant} className="stack-small" /></Reveal></div></section>
    <section className="section restaurant-preview"><div className="shell"><div className="section-intro inline-intro"><Reveal><SectionLabel>{home.restaurant.eyebrow}</SectionLabel><h2><LocalizedLines text={home.restaurant.title} /></h2><p className="body-copy">{home.restaurant.copy}</p><ActionLink href="/restaurant" variant="text">{t.common.exploreRestaurant} <ArrowRight /></ActionLink></Reveal></div><div className="dish-rail" aria-label={t.common.restaurantHighlights}><Reveal className="dish-feature" delay={0.1}><Link className="dish-link" href={`${href("/restaurant/menu")}?group=food`}><Media src={photo.dish} alt={t.alt.dish} /><div className="dish-card-copy"><strong>{home.restaurant.dish}</strong><span>{home.restaurant.dishCopy}</span></div></Link></Reveal><Reveal className="dish-card" delay={0.2}><Link className="dish-link" href={`${href("/restaurant/menu")}?group=drinks`}><Media src={photo.tea} alt={t.alt.tea} /><div className="dish-card-copy"><strong>{home.restaurant.tea}</strong><span>{home.restaurant.teaCopy}</span></div></Link></Reveal><Link href={href("/restaurant")} className="rail-link" aria-label={t.common.seeRestaurant}><ArrowRight /></Link></div></div></section>
    <section className="section certification-preview"><div className="shell cert-layout"><Reveal><SectionLabel>{home.certification.eyebrow}</SectionLabel><h2><LocalizedLines text={home.certification.title} /></h2><p className="body-copy">{home.certification.copy}</p><ActionLink href="/contact">{t.common.certified} <ArrowRight /></ActionLink></Reveal><Reveal className="timeline" delay={0.15}><p className="timeline-title">{home.certification.timelineTitle}</p>{home.certification.steps.map(([number, title, copy]) => <div className="timeline-step" key={number}><span>{number}</span><b>{title}</b><small>{copy}</small></div>)}</Reveal></div><div className="shell role-row" aria-label={t.certification.roles.eyebrow}>{home.certification.roles.map((role, index) => { const Icon = roleIcons[index]; return <span key={role}><Icon /> {role}</span>; })}</div></section>
    <section className="section value-section"><div className="shell"><Reveal><SectionLabel>{home.values.eyebrow}</SectionLabel><h2>{home.values.title}</h2></Reveal><div className="value-grid">{home.values.items.map(([title, copy], index) => { const Icon = valueIcons[index]; return <Reveal key={title} delay={index * 0.07} className="value-item"><span className="icon-orb"><Icon /></span><h3>{title}</h3><p>{copy}</p></Reveal>; })}</div></div></section>
    <section className="final-cta"><div className="cta-panel cta-professional"><Media src={photo.leaves} alt={t.alt.leaves} /><div><SectionLabel>{home.ctas.professionalsEyebrow}</SectionLabel><h2><LocalizedLines text={home.ctas.professionalsTitle} /></h2><ActionLink href="/contact">{t.common.certified} <ArrowRight /></ActionLink></div></div><div className="cta-panel cta-lover"><Media src={photo.restaurant} alt={t.alt.restaurant} /><div><SectionLabel>{home.ctas.loversEyebrow}</SectionLabel><h2><LocalizedLines text={home.ctas.loversTitle} /></h2><ActionLink href="/restaurant" variant="light">{t.common.visitRestaurant} <ArrowRight /></ActionLink></div></div></section>
  </main>;
}
