import { ArrowRight, MapPin, Phone, UsersRound } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/Section";
import { images, mapLink, wazeLink } from "@/data/site";

export default function ContactPage() {
  return <main className="contact-page">
    <PageHero eyebrow="Contact Us" title={<>Let’s Talk<br />Good Food.</>} copy="Whether you’re interested in FFC Certification, our restaurant, ingredients or collaboration, we’d love to hear from you." image={images.restaurant} />
    <section className="contact-info"><div className="shell contact-info-grid"><div><Phone /><b>Queen Chin</b><span>+6011-6119 9465</span></div><div><Phone /><b>Foong</b><span>+6016-2209 287</span></div><div><MapPin /><b>Location</b><span>1st Floor, 1D-1, Jalan SS 9a/17,<br />43700 Petaling Jaya, Selangor</span></div><div><UsersRound /><b>Collaborate</b><span>Let’s start with a conversation.</span></div></div></section>
    <section className="section contact-main"><div className="shell contact-form-shell"><Reveal><SectionLabel>Send Us a Message</SectionLabel><h2>We’re Here to Help.</h2><ContactForm /></Reveal></div></section>
    <section className="section contact-visit-section"><div className="shell contact-visit-layout">
      <Reveal className="contact-visit-copy"><SectionLabel>Visit Us</SectionLabel><h2>Come Visit FFC.</h2><address>Foodie &amp; Friend Cuisine<br />1st Floor, 1D-1, Jalan SS 9a/17,<br />43700 Petaling Jaya, Selangor, Malaysia</address><div className="hero-actions"><a className="button button-primary" href={mapLink} target="_blank" rel="noreferrer">Google Maps <ArrowRight /></a><a className="button button-ghost" href={wazeLink} target="_blank" rel="noreferrer">Waze <ArrowRight /></a></div></Reveal>
      <Reveal className="contact-map-preview" delay={.1}><div className="contact-map-pin"><MapPin /><span>Foodie &amp; Friend Cuisine</span></div><p>Petaling Jaya, Selangor</p></Reveal>
    </div></section>
  </main>;
}
