// Style direction: Midnight Cut — the Work / Blog page is a contact sheet of cinematic stills, timecodes, and short director notes.
import { useState } from "react";
import { ArrowUpRight, Play, X } from "lucide-react";
import SiteChrome from "@/components/SiteChrome";

const work = [
  { number: "01", title: "Where the road begins", type: "Wedding story", year: "2026", image: "./assets/peter_and_glory.jpg", note: "" },
  { number: "02", title: "Commercials", type: "Real Estate Commercial", year: "2026", image: "./assets/wills_and_woman.jpg", note: "" },
  { number: "03", title: "Parties", type: "DJ's", year: "2026", image: "./assets/party.jpg", note: "" },
  { number: "04", title: "Drone Coverage", type: "Still / Moving", year: "2026", image: "./assets/drone.jpg", note: "" },
];

export default function Work() {
  const [active, setActive] = useState<typeof work[number] | null>(null);
  return <SiteChrome>
    <main className="inner-page work-page">
      <section className="inner-hero inner-hero--work"><div className="inner-hero-copy"><p className="eyebrow"><span className="kicker-dot" /> Work / Blog</p><h1>Frames from<br /><em>the cut.</em></h1><p className="inner-lede">An archive of the types of videos we cover, and the visual decisions that made it into the final edit.</p></div><div className="work-index-stamp"><span>WV / 2026</span><strong>04</strong><span>stories in motion</span></div></section>
      <section className="work-index-section inner-section"><div className="work-filter"><span>Selected work</span><span>All / Film / Photo / Notes</span></div><div className="work-index-grid">{work.map((item) => <button key={item.number} className={`work-index-card ${item.number === "02" ? "work-index-card--tall" : ""}`} onClick={() => setActive(item)}><div className="work-index-media"><img src={item.image} alt={`${item.title} still`} /><div className="project-overlay" /><span className="project-play"><Play size={14} fill="currentColor" /></span><span className="project-timecode">00:{item.number === "01" ? "24" : item.number === "02" ? "17" : item.number === "03" ? "31" : "12"} : 16</span></div><div className="work-index-caption"><span className="project-number">{item.number}</span><span className="project-title">{item.title}</span><span className="project-category">{item.type} <span>/</span> {item.year}</span></div></button>)}</div></section>
      <section className="journal-section inner-section"><div className="chapter-rail"><span>02</span><div className="rail-line" /><span>From my daily works</span></div><div className="journal-list"><article><span className="journal-date">12.06.24</span><h3>How to leave room for the unexpected</h3><p>A few notes from a day of filming with no shot list and one very good question.</p><ArrowUpRight size={19} /></article><article><span className="journal-date">27.04.24</span><h3>The frame is a promise</h3><p>On composition, trust, and why the first take is often the most honest one.</p><ArrowUpRight size={19} /></article><article><span className="journal-date">08.02.24</span><h3>Making a small crew feel big</h3><p>The practical rituals that keep the work close, calm, and creatively awake.</p><ArrowUpRight size={19} /></article></div></section>
    </main>
    {active && <div className="reel-modal" role="dialog" aria-modal="true" aria-label={`${active.title} project`}><button className="reel-close" onClick={() => setActive(null)} aria-label="Close project"><X size={21} /></button><div className="reel-modal-inner"><video autoPlay controls poster={active.image}><source src="wedding-video.mp4" type="video/mp4" /></video><div className="reel-modal-caption"><span>{active.title.toUpperCase()} / {active.type.toUpperCase()}</span><span>{active.note}</span></div></div></div>}
  </SiteChrome>;
}
