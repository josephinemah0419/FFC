"use client";

import { ArrowRight, CupSoda, Leaf, Utensils } from "lucide-react";
import { useLocale, LocalizedLines } from "@/components/i18n/LocaleProvider";
import { ActionLink } from "@/components/ui/Buttons";
import { EditorialCard } from "@/components/ui/EditorialCard";
import { Media } from "@/components/ui/Media";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/Section";
import { images, mapLink, wazeLink } from "@/data/site";

const pointIcons = [Leaf, Utensils, CupSoda];
const discoveryImages = [images.dish, images.kitchen, images.greens];
const discoveryHrefs = ["/restaurant/menu", "/restaurant/kitchen", "/restaurant/ingredients"];

export default function RestaurantPage() {
  const { t } = useLocale();
  const restaurant = t.restaurant;
  return <main><PageHero eyebrow={restaurant.hero.eyebrow} title={<LocalizedLines text={restaurant.hero.title} />} copy={restaurant.hero.copy} image={images.dish}><div className="hero-actions"><ActionLink href="/restaurant/menu">{t.common.exploreMenu} <ArrowRight /></ActionLink><ActionLink href="#visit" variant="ghost">{t.common.visitUs} <ArrowRight /></ActionLink></div></PageHero><section className="section discovery-section"><div className="shell"><Reveal><SectionLabel>{restaurant.discovery.eyebrow}</SectionLabel><h2><LocalizedLines text={restaurant.discovery.title} /></h2></Reveal><div className="discovery-grid">{restaurant.discovery.cards.map(([title, copy], index) => <Reveal delay={index * .1} key={title}><EditorialCard href={discoveryHrefs[index]} image={discoveryImages[index]} title={title} copy={copy} /></Reveal>)}</div></div></section><section className="section restaurant-philosophy"><div className="shell split"><Reveal><SectionLabel>{restaurant.philosophy.eyebrow}</SectionLabel><h2><LocalizedLines text={restaurant.philosophy.title} /></h2><p className="body-copy">{restaurant.philosophy.copy}</p></Reveal><Reveal className="point-list" delay={.1}>{restaurant.philosophy.points.map(([title, copy], index) => { const Icon = pointIcons[index]; return <span key={title}><Icon /><b>{title}</b><small>{copy}</small></span>; })}</Reveal></div></section><section className="section visit-section" id="visit"><div className="shell split"><Reveal><Media src={images.restaurant} alt={t.alt.restaurant} className="visit-photo" /></Reveal><Reveal><SectionLabel>{restaurant.visit.eyebrow}</SectionLabel><h2><LocalizedLines text={restaurant.visit.title} /></h2><p className="visit-name">{restaurant.visit.name}</p><address>1st Floor, 1D-1,<br />Jalan SS 9a/17,<br />43700 Petaling Jaya,<br />Selangor</address><div className="hero-actions"><a className="button button-primary" target="_blank" rel="noreferrer" href={mapLink}>{t.common.googleMaps} <ArrowRight /></a><a className="button button-ghost" target="_blank" rel="noreferrer" href={wazeLink}>{t.common.waze} <ArrowRight /></a></div></Reveal></div></section></main>;
}
