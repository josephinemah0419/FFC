import { ArrowRight } from "lucide-react";
import { ActionLink } from "@/components/ui/Buttons";
import { EditorialCard } from "@/components/ui/EditorialCard";
import { Media } from "@/components/ui/Media";
import { PageHero } from "@/components/ui/PageHero";
import { Process } from "@/components/ui/Process";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/Section";
import { images, roles } from "@/data/site";

export default function CertificationPage() { return <main><PageHero eyebrow="FFC Certification" title={<>Recognising Those Who Choose<br />Real Ingredients.</>} copy="A more honest food system, built together." image={images.kitchen}><ActionLink href="/contact">Get FFC Certified <ArrowRight /></ActionLink></PageHero><section className="section roles-section"><div className="shell"><div className="section-heading-pair"><Reveal><SectionLabel>Who Can Get Certified</SectionLabel><h2>Different Roles,<br />A Shared Belief.</h2></Reveal><Reveal><p className="body-copy">We welcome everyone across the food journey who is committed to real ingredients and more responsible food practices.</p></Reveal></div><div className="roles-grid">{roles.map((role, index) => <Reveal delay={index * .08} key={role.title}><EditorialCard icon={role.icon} title={role.title} copy={role.copy} image={role.image} /></Reveal>)}</div></div></section><section className="section process-section"><div className="shell"><Reveal><SectionLabel>The Certification Process</SectionLabel><h2>From Application<br />to Recognition.</h2></Reveal><Reveal delay={.1}><Process /></Reveal></div></section><section className="cert-close"><Media src={images.leaves} alt="Leaves with water drops placeholder" /><div className="shell"><Reveal><h2>A Better Food Tomorrow<br />Starts with You.</h2><ActionLink href="/contact">Get FFC Certified <ArrowRight /></ActionLink></Reveal></div></section></main>; }
