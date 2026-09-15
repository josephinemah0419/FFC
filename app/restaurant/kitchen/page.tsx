import { ChefHat, Flame, HeartHandshake } from "lucide-react";
import { Media } from "@/components/ui/Media";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/Section";
import { images } from "@/data/site";

export default function KitchenPage() { return <main><PageHero eyebrow="Our Kitchen" title={<>Cooking With<br />Ingredients in Mind.</>} copy="Thoughtful preparation lets ingredients speak for themselves and makes every shared meal feel familiar." image={images.kitchen} /><section className="section kitchen-story"><div className="shell split"><Reveal><Media src={images.prep} alt="Ingredient preparation placeholder" className="story-image" /></Reveal><Reveal><SectionLabel>Our Approach</SectionLabel><h2>Simple care,<br />felt at the table.</h2><p className="body-copy">From preparation to plating, we focus on food that feels warm, thoughtful and true to its ingredients.</p><div className="kitchen-points"><span><ChefHat /> Prepared with care</span><span><Flame /> Home-style cooking</span><span><HeartHandshake /> Natural flavours first</span></div></Reveal></div></section><section className="kitchen-image-break"><Media src={images.dish} alt="Finished dish placeholder" /><div className="shell"><p className="kitchen-tagline">Good food is made in the details.</p></div></section></main>; }
