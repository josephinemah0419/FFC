"use client";
import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import { whatsappLink } from "@/data/site";

const initial = { name: "", company: "", country: "", state: "", phone: "", email: "", enquiry: "", message: "" };
export function ContactForm() {
  const { t } = useLocale(); const form = t.contact.form;
  const [values, setValues] = useState(initial); const [error, setError] = useState("");
  const update = (key: keyof typeof initial, value: string) => setValues((prev) => ({ ...prev, [key]: value }));
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    const required = [values.name, values.company, values.country, values.state, values.phone, values.enquiry, values.message];
    if (required.some((value) => !value.trim())) { setError(form.validation); return; }
    if (values.email.trim() && !/^\S+@\S+\.\S+$/.test(values.email.trim())) { setError(form.emailValidation); return; }
    const lines = [
      form.whatsappGreeting,
      "",
      `${form.whatsappName}: ${values.name.trim()}`,
      `${form.whatsappCompany}: ${values.company.trim()}`,
      `${form.whatsappCountry}: ${values.country.trim()}`,
      `${form.whatsappState}: ${values.state.trim()}`,
      `${form.whatsappPhone}: ${values.phone.trim()}`,
      ...(values.email.trim() ? [`${form.whatsappEmail}: ${values.email.trim()}`] : []),
      `${form.whatsappEnquiry}: ${values.enquiry.trim()}`,
      "",
      `${form.whatsappMessage}:`,
      values.message.trim(),
    ];
    window.open(`${whatsappLink}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
  };
  return <form className="contact-form" onSubmit={submit} noValidate><div className="form-grid"><label>{form.name} *<input value={values.name} onChange={(e) => update("name", e.target.value)} /></label><label>{form.company} *<input value={values.company} onChange={(e) => update("company", e.target.value)} /></label><label>{form.country} *<input value={values.country} onChange={(e) => update("country", e.target.value)} /></label><label>{form.state} *<input value={values.state} onChange={(e) => update("state", e.target.value)} /></label><label>{form.phone} *<input value={values.phone} onChange={(e) => update("phone", e.target.value)} placeholder={form.phonePlaceholder} /></label><label>{form.email}<input type="email" value={values.email} onChange={(e) => update("email", e.target.value)} /></label></div><label>{form.enquiry} *<select value={values.enquiry} onChange={(e) => update("enquiry", e.target.value)}><option value="">{form.selectEnquiry}</option>{form.options.map((option) => <option key={option}>{option}</option>)}</select></label><label>{form.message} *<textarea rows={5} value={values.message} onChange={(e) => update("message", e.target.value)} /></label>{error && <p className="form-error" role="alert">{error}</p>}<button className="button button-primary form-submit" type="submit"><WhatsAppIcon className="whatsapp-icon" /> {form.submit} <ArrowRight /></button><p className="form-note">{form.note}</p></form>;
}
