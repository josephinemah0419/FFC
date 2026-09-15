"use client";

import { Leaf, Sprout, Wheat } from "lucide-react";
import { useLocale, LocalizedLines } from "@/components/i18n/LocaleProvider";
import { Media } from "@/components/ui/Media";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/Section";
import { images } from "@/data/site";

const icons = [Leaf, Sprout, Wheat];

export default function IngredientsPage() { const { t } = useLocale(); const ingredients = t.ingredients; return <main><PageHero eyebrow={ingredients.hero.eyebrow} title={<LocalizedLines text={ingredients.hero.title} />} copy={ingredients.hero.copy} image={images.greens} /><section className="section ingredients-story"><div className="shell"><div className="section-heading-pair"><Reveal><SectionLabel>{ingredients.story.eyebrow}</SectionLabel><h2><LocalizedLines text={ingredients.story.title} /></h2></Reveal><Reveal><p className="body-copy">{ingredients.story.copy}</p></Reveal></div><div className="ingredient-grid"><Reveal className="ingredient-wide"><Media src={images.farmer} alt={t.alt.produce} /></Reveal><Reveal><Media src={images.teaGarden} alt={t.alt.teaGarden} /></Reveal>{ingredients.story.cards.map(([title, copy], index) => { const Icon = icons[index]; return <Reveal className="ingredient-copy" key={title}><span className="icon-orb"><Icon /></span><h3>{title}</h3><p>{copy}</p></Reveal>; })}</div></div></section></main>; }
