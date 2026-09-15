"use client";

import { ChefHat, Flame, HeartHandshake } from "lucide-react";
import { useLocale, LocalizedLines } from "@/components/i18n/LocaleProvider";
import { Media } from "@/components/ui/Media";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/Section";
import { images } from "@/data/site";

const pointIcons = [ChefHat, Flame, HeartHandshake];

export default function KitchenPage() { const { t } = useLocale(); const kitchen = t.kitchen; return <main><PageHero eyebrow={kitchen.hero.eyebrow} title={<LocalizedLines text={kitchen.hero.title} />} copy={kitchen.hero.copy} image={images.kitchen} /><section className="section kitchen-story"><div className="shell split"><Reveal><Media src={images.prep} alt={t.alt.prep} className="story-image" /></Reveal><Reveal><SectionLabel>{kitchen.story.eyebrow}</SectionLabel><h2><LocalizedLines text={kitchen.story.title} /></h2><p className="body-copy">{kitchen.story.copy}</p><div className="kitchen-points">{kitchen.story.points.map((point, index) => { const Icon = pointIcons[index]; return <span key={point}><Icon /> {point}</span>; })}</div></Reveal></div></section><section className="kitchen-image-break"><Media src={images.dish} alt={t.alt.completedDish} /><div className="shell"><p className="kitchen-tagline">{kitchen.tagline}</p></div></section></main>; }
