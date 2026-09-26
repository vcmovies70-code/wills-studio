// Style direction: Midnight Cut — events use a dark program-board composition with copper dates and restrained film metadata.
import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { Link } from "wouter";
import SiteChrome from "@/components/SiteChrome";

const events = [
  { month: "OCT", day: "18", title: "Video shoot: For a commercial", type: "Commercial", location: "The Playground / Owerri", time: "7:30 PM", detail: "Shooting a music video for a an artist whose goal is siren environment with a little entertainment." },
  { month: "NOV", day: "04", title: "Directing the Feeling", type: "Wedding-shoot", location: "Framehouse / Abuja", time: "11:00 AM", detail: "A half-day working session on intention, performance, and finding the right moment." },
  { month: "DEC", day: "12", title: "The Edit Table", type: "Studio talk", location: "Online / Live stream", time: "6:00 PM", detail: "Wills Visuals joins editors and directors for a conversation about rhythm, restraint, and the last ten percent." },
];

export default function Events() {
  return <SiteChrome>
    <main className="inner-page events-page">
      <section className="inner-hero inner-hero--events"><div className="inner-hero-copy"><p className="eyebrow"><span className="kicker-dot" /> Events </p><h1>Meet us<br /><em>in the room.</em></h1><p className="inner-lede">Screenings, workshops, and conversations about the work behind the work.</p></div><div className="event-poster"><span>WV / LIVE PROGRAM</span><strong>24—26 Dec</strong><span>Abuja/ Nationwide</span></div></section>
      <section className="events-list-section inner-section"><div className="events-list-heading"><p className="eyebrow">Our upcoming program</p><p className="section-note">Dates are confirmed as they are announced. Join the list for first word on new sessions.</p></div><div className="events-list">{events.map((event) => <article className="event-row" key={event.title}><div className="event-date"><span>{event.month}</span><strong>{event.day}</strong></div><div className="event-main"><span className="event-type">{event.type}</span><h2>{event.title}</h2><p>{event.detail}</p><div className="event-meta"><span><MapPin size={14} /> {event.location}</span><span><CalendarDays size={14} /> {event.time}</span></div></div><Link href="/contact" className="event-action" aria-label={`Ask about ${event.title}`}><ArrowUpRight size={20} /></Link></article>)}</div></section>
      <section className="events-signup"><div><p className="eyebrow">Keep it moving</p><h2>Be on our next <br /><em>event.</em></h2></div><Link href="/contact" className="button button--copper button--large">Join the list <ArrowUpRight size={17} /></Link></section>
    </main>
  </SiteChrome>;
}
