import { Instagram, Mail, Video } from "lucide-react";
import { Link } from "wouter";
import SiteNavigation from "@/components/SiteNavigation";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-shell">
      <SiteNavigation variant="inner" />
      {children}
      <footer className="inner-footer">
        <div className="footer-brand"><img src="/assets/cineframe-mark.png" alt="" className="brand-mark" /><span>WILLS / VISUAL STUDIO</span></div>
        <div className="footer-links"><Link href="/">Home</Link><Link href="/about">About</Link><Link href="/work">Work / Blog</Link><Link href="/events">Events</Link><Link href="/contact">Contact</Link></div>
        <div className="footer-social"><Link href="/contact" aria-label="Instagram"><Instagram size={16} /></Link><Link href="/contact" aria-label="Vimeo"><Video size={17} /></Link><Link href="/contact" aria-label="Email"><Mail size={16} /></Link></div>
        <span className="footer-legal">© 2026 Vtechservices. Made with intent.</span>
      </footer>
    </div>
  );
}
