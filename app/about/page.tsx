import { ArrowRight, Leaf, Sun, UsersRound, type LucideIcon } from "lucide-react";
import { ActionLink } from "@/components/ui/Buttons";
import { Media } from "@/components/ui/Media";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/Section";
import { images } from "@/data/site";

const values: Array<[LucideIcon, string, string]> = [[Leaf, "Real Ingredients", "Food as it should be."], [UsersRound, "Responsible Practices", "For people and the planet."], [UsersRound, "Stronger Communities", "Good food brings people together."], [Sun, "A Better Tomorrow", "Healthier food, brighter futures."]];

export default function AboutPage() {
  return <main>
    <PageHero eyebrow="Our Story" title="Food culture with a higher standard." copy="Founded in Malaysia by Mr. Foong of Teaxini Tea and Miss Queen Chin of HY Fried Station." image={images.salad} />
    <section className="section about-story"><div className="shell split about-story-layout">
      <Reveal><Media src={images.greens} alt="Fresh ingredient basket" className="story-image" /></Reveal>
      <Reveal className="about-story-copy">
        <p>Foodie &amp; Friend Cuisine (FFC) is a certification body in Malaysia, founded by Mr. Foong of Teaxini Tea and Miss Queen Chin of HY Fried Station. We honor the art of honest food preparation, celebrating those who craft with integrity and passion.</p>
        <p>Our mission is to connect responsible producers, cooks, and communities, fostering a network that values quality and authenticity in every dish. Together, we strive to elevate culinary standards and nurture meaningful relationships within the food industry.</p>
        <div className="about-mission"><span className="icon-orb"><Leaf /></span><div><h2>Our mission</h2><p>To recognize food practices centered on raw ingredients, transparency, and care.</p></div></div>
      </Reveal>
    </div></section>
    <section className="section value-section"><div className="shell"><Reveal><SectionLabel>Our Values</SectionLabel><h2>What we stand for.</h2></Reveal><div className="value-grid">{values.map(([Icon, title, copy]) => <Reveal className="value-item" key={title}><span className="icon-orb"><Icon /></span><h3>{title}</h3><p>{copy}</p></Reveal>)}</div></div></section>
    <section className="founders-section"><Media src={images.restaurant} alt="Warm dining room" /><div className="shell founders-copy"><Reveal><SectionLabel>Our Founders</SectionLabel><h2>Food brings<br />us together.</h2><p>Founded by Mr. Foong &amp; Queen Chin, who share a simple belief — good food can create a better tomorrow.</p><ActionLink href="/contact" variant="text">Meet Our Founders <ArrowRight /></ActionLink></Reveal></div></section>
    <section className="about-close"><div className="shell"><div><h2>Better ingredients.<br />Brighter tomorrows.</h2></div><ActionLink href="/contact">Get FFC Certified <ArrowRight /></ActionLink></div></section>
  </main>;
}
