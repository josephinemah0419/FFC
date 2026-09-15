import Link from "next/link";
import { ArrowRight, ChefHat, Factory, Leaf, Sun, UsersRound, UtensilsCrossed, type LucideIcon } from "lucide-react";
import { ActionLink } from "@/components/ui/Buttons";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/Section";

const photo = {
  hero: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1800&q=85",
  greens: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
  kitchen: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=80",
  tea: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=1200&q=80",
  restaurant: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1400&q=80",
  dish: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1400&q=80",
  leaves: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1400&q=80",
};

const values: Array<[LucideIcon, string, string]> = [
  [Leaf, "Real Ingredients", "Food as it should be."],
  [UsersRound, "Responsible Practices", "For people and the planet."],
  [UtensilsCrossed, "Stronger Communities", "Good food brings people together."],
  [Sun, "A Better Tomorrow", "Healthier food, brighter futures."],
];

export default function Home() {
  return <main>
    <section className="hero-shell">
      <Media src={photo.hero} alt="A finished dish with fresh greens" priority className="hero-photo" />
      <div className="hero-vignette" />
      <div className="shell hero-grid">
        <Reveal className="hero-copy"><SectionLabel>Rooted in Malaysia</SectionLabel><h1>Honest Food Starts<br />with Real Ingredients.</h1><p className="lead">Foodie &amp; Friend Cuisine brings together people who believe better food begins with real ingredients.</p><div className="hero-actions"><ActionLink href="/contact">Get FFC Certified <ArrowRight /></ActionLink><ActionLink href="/restaurant" variant="ghost">Visit Our Restaurant <ArrowRight /></ActionLink></div></Reveal>
        <div className="hero-aside" aria-hidden="true"><p className="hero-tagline">Good Food<br />Brings People<br />Together.</p><p className="vertical-note">FROM INGREDIENT<br />TO TABLE</p></div>
      </div>
    </section>
    <section className="section about-preview"><div className="shell split split-about"><Reveal><SectionLabel>About FFC</SectionLabel><h2>A community built<br />around honest food.</h2><p className="body-copy">Foodie &amp; Friend Cuisine brings together food makers, restaurants, cooks and producers who believe better food begins with real ingredients and less reliance on artificial additives.</p><p className="micro-copy">Founded by Mr. Foong &amp; Queen Chin</p><ActionLink href="/about" variant="text">Discover Our Story <ArrowRight /></ActionLink></Reveal><Reveal className="photo-stack" delay={0.15}><Media src={photo.greens} alt="Fresh leafy ingredients" className="stack-main" /><Media src={photo.restaurant} alt="Warm restaurant interior" className="stack-small" /><p className="stack-note">People, Ingredients,<br />A Better Tomorrow.</p></Reveal></div></section>
    <section className="section restaurant-preview"><div className="shell"><div className="section-intro inline-intro"><Reveal><SectionLabel>FFC Restaurant</SectionLabel><h2>Taste what<br />we believe in.</h2><p className="body-copy">Our philosophy comes to life through a tea bar and comforting home-style cooking, prepared with thoughtful ingredients.</p><ActionLink href="/restaurant" variant="text">Explore Our Restaurant <ArrowRight /></ActionLink></Reveal></div><div className="dish-rail" aria-label="Restaurant highlights"><Reveal className="dish-feature" delay={0.1}><Media src={photo.dish} alt="Signature vegetable dish" /><div><strong>Signature Dish</strong><span>Real ingredients, true flavours.</span></div></Reveal><Reveal className="dish-card" delay={0.2}><Media src={photo.tea} alt="A warm signature tea" /><div><strong>Signature Tea</strong><span>Thoughtfully blended.</span></div></Reveal><Link href="/restaurant" className="rail-link" aria-label="See the restaurant"><ArrowRight /></Link></div></div></section>
    <section className="section certification-preview"><div className="shell cert-layout"><Reveal><SectionLabel>FFC Certification</SectionLabel><h2>Recognising those who<br />choose ingredients with intention.</h2><p className="body-copy">We work with restaurants, farmers, factories and cooks who are committed to better ingredients and more responsible food practices.</p><ActionLink href="/contact">Get FFC Certified <ArrowRight /></ActionLink></Reveal><Reveal className="timeline" delay={0.15}><p className="timeline-title">From application to recognition.</p>{[["01", "Apply", "Submit your interest to FFC."],["02", "Review", "We review your food practices."],["03", "Assessment", "A thoughtful assessment follows."],["04", "Recognition", "Qualified applicants receive FFC recognition."]].map(([number, title, copy]) => <div className="timeline-step" key={number}><span>{number}</span><b>{title}</b><small>{copy}</small></div>)}</Reveal></div><div className="shell role-row" aria-label="Certification roles"><span><UtensilsCrossed /> Restaurants</span><span><Leaf /> Farmers</span><span><Factory /> Factories</span><span><ChefHat /> Cooks</span></div></section>
    <section className="section value-section"><div className="shell"><Reveal><SectionLabel>Our Philosophy</SectionLabel><h2>What We Stand For.</h2></Reveal><div className="value-grid">{values.map(([Icon, title, copy], index) => <Reveal key={title} delay={index * 0.07} className="value-item"><span className="icon-orb"><Icon /></span><h3>{title}</h3><p>{copy}</p></Reveal>)}</div></div></section>
    <section className="final-cta"><div className="cta-panel cta-professional"><Media src={photo.leaves} alt="Leafy ingredient detail" /><div><SectionLabel>For Food Professionals</SectionLabel><h2>Believe in better ingredients?<br />Become part of FFC.</h2><ActionLink href="/contact">Get FFC Certified <ArrowRight /></ActionLink></div></div><div className="cta-panel cta-lover"><Media src={photo.restaurant} alt="Restaurant dining room" /><div><SectionLabel>For Food Lovers</SectionLabel><h2>Come experience<br />it at our table.</h2><ActionLink href="/restaurant" variant="light">Visit Our Restaurant <ArrowRight /></ActionLink></div></div></section>
  </main>;
}
