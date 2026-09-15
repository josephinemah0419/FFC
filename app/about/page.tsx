"use client";

import { ArrowRight, Leaf, Sun, UsersRound } from "lucide-react";
import { useLocale, LocalizedLines } from "@/components/i18n/LocaleProvider";
import { ActionLink } from "@/components/ui/Buttons";
import { Media } from "@/components/ui/Media";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/Section";
import { images } from "@/data/site";

const valueIcons = [Leaf, UsersRound, UsersRound, Sun];

export default function AboutPage() {
  const { t } = useLocale();
  const about = t.about;
  return <main>
    <PageHero eyebrow={about.hero.eyebrow} title={about.hero.title} copy={about.hero.copy} image={images.salad} />
    <section className="section about-story"><div className="shell split about-story-layout">
      <Reveal><Media src={images.greens} alt={t.alt.basket} className="story-image" /></Reveal>
      <Reveal className="about-story-copy"><p>{about.story.first}</p><p>{about.story.second}</p><div className="about-mission"><span className="icon-orb"><Leaf /></span><div><h2>{about.story.missionTitle}</h2><p>{about.story.missionCopy}</p></div></div></Reveal>
    </div></section>
    <section className="section value-section"><div className="shell"><Reveal><SectionLabel>{about.values.eyebrow}</SectionLabel><h2>{about.values.title}</h2></Reveal><div className="value-grid">{about.values.items.map(([title, copy], index) => { const Icon = valueIcons[index]; return <Reveal className="value-item" key={title}><span className="icon-orb"><Icon /></span><h3>{title}</h3><p>{copy}</p></Reveal>; })}</div></div></section>
    <section className="founders-section"><Media src={images.founders} alt={t.alt.founders} /><div className="shell founders-copy"><Reveal><SectionLabel>{about.founders.eyebrow}</SectionLabel><h2><LocalizedLines text={about.founders.title} /></h2><p>{about.founders.copy}</p><ActionLink href="/contact" variant="text">{about.founders.link} <ArrowRight /></ActionLink></Reveal></div></section>
  </main>;
}
