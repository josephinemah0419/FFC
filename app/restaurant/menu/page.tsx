import { MenuTabs } from "@/components/restaurant/MenuTabs";
import { PageHero } from "@/components/ui/PageHero";
import { images } from "@/data/site";

export default function MenuPage() { return <main><PageHero eyebrow="FFC Restaurant" title="Our Menu" copy="Tea Bar × Home-style Cooking. Placeholder selections below are structured for easy menu updates." image={images.tea} /><section className="section menu-section"><div className="shell"><MenuTabs /></div></section></main>; }
