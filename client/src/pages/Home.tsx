// Style direction: Midnight Cut — editorial noir, asymmetrical chapters, ink + bone + oxidized copper, cinematic motion.
import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  CirclePlay,
  Instagram,
  Mail,
  Play,
  Video,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
import SiteNavigation from "@/components/SiteNavigation";

const HERO_VIDEO = "/assets/wedding-video.mp4";

const projects = [
  {
    number: "01",
    title: "Wedding Coverage",
    category: "Event film",
    year: "2026",
    image: "./assets/wedding_image.jpg",
    size: "project-card--wide",
  },
  {
    number: "02",
    title: "Personal Coverage",
    category: "Wedding story",
    year: "2026",
    image: "/assets/bride_image.jpg",
    size: "project-card--tall",
  },
  {
    number: "03",
    title: "Drone Event Videos",
    category: "All Events",
    year: "2026",
    image: "/assets/drone.jpg",
    size: "project-card--wide",
  },
];

const services = [
  {
    number: "01",
    title: "Events",
    body: "Weddings, engagement,social events, film coverage, brand videos, etc.",
  },
  {
    number: "02",
    title: "Drone Coverage",
    body: "Real time drone coverage of events that gives you a different angle and view.",
  },
  {
    number: "03",
    title: "Commercials",
    body: "Sharp concepts and exacting craft for launches, campaigns, and the moments between.",
  },
  {
    number: "04",
    title: "Social cuts",
    body: "Short-form edits with a point of view, built to stop the scroll without shouting.",
  },
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [reelOpen, setReelOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setReelOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const navigate = (id: string) => {
    scrollToId(id);
  };

  return (
    <div className="site-shell" id="top">
      <SiteNavigation variant="home" scrolled={scrolled} />

      <main>
        <section className="hero-section" aria-label="Wills VIsuals introduction">
          <video className="hero-video" autoPlay muted={isMuted} loop playsInline poster="/assets/hero-still.jpg">
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
          <div className="hero-wash" />
          <div className="hero-grain" />
          <div className="hero-content">
            
            <h1>Stories<br /><em>with emotions</em></h1>
            <p className="hero-intro">Wills Visuals is a small, exacting studio making films for brands, artists, and people with something worth remembering.</p>
            <div className="hero-actions">
              <button className="button button--copper" onClick={() => scrollToId("work")}>View the reel <ArrowDownRight size={17} /></button>
              
            </div>
          </div>
          <div className="hero-footer">
            <div className="hero-meta"><span></span><span></span><span></span></div>
            <div className="hero-scroll"><span>Scroll to explore</span><ArrowDownRight size={16} /></div>
            <button className="sound-toggle" onClick={() => setIsMuted((muted) => !muted)} aria-label={isMuted ? "Turn sound on" : "Mute hero video"}>
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              <span>{isMuted ? "Sound off" : "Sound on"}</span>
            </button>
          </div>
        </section>

        <section className="manifesto-section chapter-section" id="studio">
          <div className="chapter-rail"><span>02</span><div className="rail-line" /><span>Studio</span></div>
          <div className="manifesto-copy">
            <p className="eyebrow">A considered point of view</p>
            <h2>Not more content.<br /><em>More feeling.</em></h2>
            <div className="manifesto-bottom">
              <p>We believe a good video leaves a trace. A glance held one beat longer. A line that finds you later. A visual language that feels unmistakably its own.</p>
              <button className="text-link" onClick={() => scrollToId("contact")}>Meet the studio <ArrowRight size={16} /></button>
            </div>
          </div>
          <div className="manifesto-stamp"><span>WV</span><span>videos with intent<br />Not in a hurry</span></div>
        </section>

        <section className="work-section" id="work">
          <div className="section-heading section-heading--split">
            <div><p className="eyebrow">Videos i have covered</p><h2>See my  <em>work</em></h2></div>
            <p className="section-note">A few frames from recent collaborations.<br />.</p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <button className={`project-card ${project.size}`} key={project.number} onClick={() => setReelOpen(true)} aria-label={`Play ${project.title}`}>
                <div className="project-media"><img src={project.image} alt={`${project.title} still`} /><div className="project-overlay" /><span className="project-play"><Play size={14} fill="currentColor" /></span><span className="project-timecode">00:{project.number === "01" ? "24" : project.number === "02" ? "17" : "31"} : 16</span></div>
                <div className="project-caption"><span className="project-number">{project.number}</span><span className="project-title">{project.title}</span><span className="project-category">{project.category} <span>/</span> {project.year}</span></div>
              </button>
            ))}
          </div>
          <div className="work-footer"><span>More work available on request</span><button className="text-link" onClick={() => setReelOpen(true)}>Watch the full reel <ArrowUpRight size={16} /></button></div>
        </section>

        <section className="services-section" id="services">
          <div className="chapter-rail chapter-rail--light"><span>03</span><div className="rail-line" /><span>What we do</span></div>
          <div className="services-main">
            <div className="section-heading section-heading--light"><p className="eyebrow">From first thought to final cut</p><h2>Made for the<br /><em>most beautiful stories.</em></h2><p className="section-note">My goal is to make all the beautiful stories and events tell thier tales through my videos.</p></div>
            <div className="services-list">{services.map((service) => <article className="service-row" key={service.number}><span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.body}</p><ArrowUpRight className="service-arrow" size={20} /></article>)}</div>
          </div>
        </section>

        <section className="process-section process-section--intermission">
          <div className="process-label"><span className="kicker-dot" /> Our process <span className="process-timecode">CUT / 04—04</span></div>
          <div className="process-track"><div className="process-step"><span>01</span><h3>Listen</h3><p>Find the story underneath the brief.</p></div><div className="process-step"><span>02</span><h3>Frame</h3><p>Make a visual language that is yours.</p></div><div className="process-step"><span>03</span><h3>Cut</h3><p>Keep what moves the feeling forward.</p></div><div className="process-step"><span>04</span><h3>Release</h3><p>Let the video meet the world.</p></div></div>
        </section>

        <section className="contact-section" id="contact">
          
          <div className="contact-content"><p className="eyebrow">Bring us the video</p><h2>Have an event<br /><em>worth filming?</em></h2><p className="contact-copy">Contact us and well make your event memory last forever.</p><a className="button button--copper button--large" href="mailto:willsmobilevideography@gmail.com">hello Wills Visuals <Mail size={17} /></a></div>
          <div className="contact-side"><span>Based in Abuja<br />Lagos / Nationwide</span><button className="contact-mark" onClick={() => navigate("top")} aria-label="Back to top"><img src="/assets/cineframe-mark.png" alt="" /></button></div>
        </section>
      </main>

      <footer className="site-footer"><div className="footer-brand"><img src="/assets/cineframe-mark.png" alt="" className="brand-mark" /><span>WILLS  / VISUALS</span></div><div className="footer-links"><button onClick={() => navigate("work")}>Work</button><button onClick={() => navigate("studio")}>collection</button><button onClick={() => navigate("contact")}>Contact</button></div><div className="footer-social"><button onClick={() => navigate("contact")} aria-label="Instagram"><Instagram size={16} /></button><button onClick={() => navigate("contact")} aria-label="Vimeo"><Video size={17} /></button><button onClick={() => navigate("contact")} aria-label="Email"><Mail size={16} /></button></div><span className="footer-legal">© 2026 Vtechservices. Made with intent.</span></footer>

      {reelOpen && <div className="reel-modal" role="dialog" aria-modal="true" aria-label="Cineframe showreel"><button className="reel-close" onClick={() => setReelOpen(false)} aria-label="Close showreel"><X size={21} /></button><div className="reel-modal-inner"><video autoPlay controls poster="/assets/reel-still.jpg"><source src={HERO_VIDEO} type="video/mp4" /></video><div className="reel-modal-caption"><span>WILLS STUDIO/ SHOWREEL 2026</span><span>Press escape to close</span></div></div></div>}
    </div>
  );
}
