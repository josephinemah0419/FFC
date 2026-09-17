"use client";

import { ArrowRight, ArrowUpRight, MapPin, Phone, UsersRound } from "lucide-react";
import { useLocale, LocalizedLines } from "@/components/i18n/LocaleProvider";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/Section";
import { FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { images, mapLink, socialLinks, wazeLink } from "@/data/site";

export default function ContactPage() {
  const { t } = useLocale();
  const contact = t.contact;
  const social = t.common.social;
  return <main className="contact-page">
    <PageHero eyebrow={contact.hero.eyebrow} title={<LocalizedLines text={contact.hero.title} />} copy={contact.hero.copy} image={images.restaurant} />
    <section className="contact-info"><div className="shell contact-info-grid"><div><Phone /><b>{contact.info.queen}</b><span>+6011-6119 9465</span></div><div><Phone /><b>{contact.info.foong}</b><span>+6016-2209 287</span></div><div><MapPin /><b>{contact.info.location}</b><span>1st Floor, 1D-1, Jalan SS 9a/17,<br />43700 Petaling Jaya, Selangor</span></div><div><UsersRound /><b>{contact.info.collaborate}</b><span>{contact.info.collaborateCopy}</span></div></div></section>
    <div className="contact-flow">
      <section className="section contact-main"><div className="shell contact-form-shell"><Reveal><SectionLabel>{contact.form.eyebrow}</SectionLabel><h2>{contact.form.title}</h2><ContactForm /></Reveal></div></section>
      <section className="section contact-visit-section"><div className="shell contact-visit-layout">
        <Reveal className="contact-visit-copy"><SectionLabel>{contact.visit.eyebrow}</SectionLabel><h2>{contact.visit.title}</h2><address>Foodie &amp; Friend Cuisine<br />1st Floor, 1D-1, Jalan SS 9a/17,<br />43700 Petaling Jaya, Selangor, Malaysia</address><div className="hero-actions"><a className="button button-primary" href={mapLink} target="_blank" rel="noreferrer">{t.common.googleMaps} <ArrowRight /></a><a className="button button-ghost" href={wazeLink} target="_blank" rel="noreferrer">{t.common.waze} <ArrowRight /></a></div><nav className="contact-socials" aria-label={social.followUs}><SectionLabel>{social.followUs}</SectionLabel><a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label={social.visitFacebook}><span className="contact-social-icon"><FacebookIcon className="facebook-icon" /></span><span className="contact-social-account"><small>{social.facebook}</small><b>{social.facebookName}</b></span><ArrowUpRight /></a><a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label={social.visitInstagram}><span className="contact-social-icon"><InstagramIcon className="instagram-icon" /></span><span className="contact-social-account"><small>{social.instagram}</small><b>{social.instagramName}</b></span><ArrowUpRight /></a></nav></Reveal>
        <Reveal className="contact-map-preview" delay={.1}><div className="contact-map-pin"><MapPin /><span>{contact.visit.mapLabel}</span></div><p>{contact.visit.mapLocation}</p></Reveal>
      </div></section>
    </div>
  </main>;
}
