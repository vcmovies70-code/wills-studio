// Style direction: Midnight Cut — contact is a warm bone studio desk with an anchored map, copper form controls, and calm editorial utility.
import { FormEvent, useState } from "react";
import { ArrowUpRight, Check, Mail, MapPin, Phone } from "lucide-react";
import SiteChrome from "@/components/SiteChrome";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", project: "", message: "" });
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); };

  return <SiteChrome>
    <main className="inner-page contact-page">
      <section className="inner-hero inner-hero--contact"><div className="inner-hero-copy"><p className="eyebrow"><span className="kicker-dot" /> Contact </p><h1>Let’s make<br /><em>your videos beautifully.</em></h1><p className="inner-lede">Bring us your idea and date. We will come back with the right set.</p></div><div className="contact-side-note"><span>New enquiries</span><a href="willsmobilevideography.com">hello Wills Visual.studio</a><span>Based between<br />Abuja / Everywhere</span></div></section>
      <section className="contact-grid inner-section"><div className="contact-form-wrap"><p className="eyebrow">Reach out to us</p>{sent ? <div className="form-success"><span className="success-icon"><Check size={19} /></span><h2>Message received.</h2><p>Thanks for reaching out. We’ll be in touch with the right questions.</p><button className="text-link" onClick={() => { setSent(false); setForm({ name: "", email: "", project: "", message: "" }); }}>Send another note <ArrowUpRight size={16} /></button></div> : <form className="contact-form" onSubmit={submit}><label>Name<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" /></label><label>Email<input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="willsmobilevideography@gmail.com" /></label><label>Type of event<select value={form.project} onChange={(e) => setForm({ ...form, project: e.target.value })}><option value="">Choose one</option><option>Weddings</option><option>Drone Coverage</option><option>Commercial</option><option>Socials(music</option><option>Something else</option></select></label><label>Tell us a little<textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="What are you imagining?" rows={5} /></label><button className="button button--copper button--large" type="submit">Send the note <ArrowUpRight size={17} /></button></form>}</div><div className="contact-location"><div className="location-heading"><p className="eyebrow">Find the studio</p><h2>Come by<br /><em>when it matters.</em></h2></div><div className="location-details">
  <div className="map-embed">
    <iframe
    title="Cineframe studio location map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63043.94049995681!2d7.43097986750798!3d9.041284853149913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1790454158875!5m2!1sen!2sng"
    width="600"
    height="450"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="strict-origin-when-cross-origin"
  />
  </div>
</div><div className="location-details"><span><MapPin size={15} /> 188 Orchard Street<br />Abuja, Worldwide</span><span><Mail size={15} /> willsmobilevideography@gmail.com</span><span><Phone size={15} /> +234 8138095343</span></div></div></section>
    </main>
  </SiteChrome>;
}
