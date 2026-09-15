"use client";

import { useLocale } from "@/components/i18n/LocaleProvider";
import { MenuTabs } from "@/components/restaurant/MenuTabs";
import { PageHero } from "@/components/ui/PageHero";
import { images } from "@/data/site";

export default function MenuPage() { const { t } = useLocale(); return <main><PageHero eyebrow={t.menu.hero.eyebrow} title={t.menu.hero.title} copy={t.menu.hero.copy} image={images.tea} /><section className="section menu-section"><div className="shell"><MenuTabs /></div></section></main>; }
