// Style direction: Midnight Cut — the About page reads like a studio dossier with warm bone panels, copper markers, and editorial pacing.
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import SiteChrome from "@/components/SiteChrome";

const principles = [
  ["01", "Look closer", "We pay atention to every detail, every angle, every obect or person that will maake the stori more cinematic."],
  ["02", "Make it felt", "A polished video. We take our time in editing your videos, every cut to capture only the moments with the best stories."],
  ["03", "Keep it human", "We build trust before we build coverage. ."],
];

export default function About() {
  return <SiteChrome>
    <main className="inner-page about-page">
      <section className="inner-hero inner-hero--about">
        <div className="inner-hero-copy"><p className="eyebrow"><span className="kicker-dot" /> About Wills Visuals</p><h1>videography <br /><em>video for memories.</em></h1><p className="inner-lede">We make and edit videos for people who care about the feeling left behind after the screen goes dark.</p></div>
        <div className="inner-hero-art"><img src="/assets/about_image.png" alt="Cinematic still from a Cineframe production" /><span className="image-caption"></span></div>
      </section>
      <section className="about-intro inner-section"><div className="chapter-rail"><span>01</span><div className="rail-line" /><span>My point of view</span></div><div className="about-intro-copy"><p className="eyebrow">A considered point of view</p><h2>Good videos<br /><em>explain everything.</em></h2><p className="body-copy">Wills Visuals is an independent Videography studio founded by director and cinematographer Wills Scott. We work across brands, people, music, events and the small human stories that refuse to be reduced to a tagline.</p><p className="body-copy">Our process is deliberately close: fewer layers, better questions, and a crew that knows when to step forward and when to let a moment breathe.</p><Link href="/contact" className="text-link">Send us your idea<ArrowRight size={16} /></Link></div></section>
      <section className="principles-section inner-section"><div className="section-heading section-heading--split"><div><p className="eyebrow">The way we work</p><h2>Three things<br /><em>we protect.</em></h2></div><p className="section-note">Every project is different. The standard stays the same.</p></div><div className="principles-list">{principles.map(([number, title, body]) => <article className="principle-row" key={number}><span className="project-number">{number}</span><h3>{title}</h3><p>{body}</p><ArrowUpRight className="service-arrow" size={19} /></article>)}</div></section>
      <section className="about-cta"><p className="eyebrow">A good place to begin</p><h2>Bring us the<br /><em>unfinished idea.</em></h2><Link href="/contact" className="button button--copper button--large">Tell us about it <ArrowUpRight size={17} /></Link></section>
    </main>
  </SiteChrome>;
}
