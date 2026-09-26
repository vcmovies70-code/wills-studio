import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";

type SiteNavigationProps = {
  variant?: "home" | "inner";
  scrolled?: boolean;
};

const pages = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work / Blog" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact", cta: true },
];

function isCurrentPage(location: string, href: string) {
  return location === href || (href === "/work" && location === "/blog");
}

export default function SiteNavigation({ variant = "inner", scrolled = false }: SiteNavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();
  const isHome = variant === "home";
  const headerClass = isHome
    ? `site-header${scrolled ? " site-header--scrolled" : ""}`
    : "inner-header";
  const navClass = isHome
    ? `main-nav${menuOpen ? " main-nav--open" : ""}`
    : `inner-nav${menuOpen ? " inner-nav--open" : ""}`;
  const linkClass = isHome ? "nav-link" : "inner-nav-link";
  const activeClass = isHome ? "nav-link--active" : "inner-nav-link--active";
  const contactClass = isHome ? "nav-link--contact" : "inner-nav-link--contact";

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header className={headerClass}>
      <Link href="/" className="brand-lockup" aria-label="Back to Cineframe home">
        <img src="/assets/cineframe-mark.png" alt="" className="brand-mark" />
        <span className="brand-wordmark"><span>WILLS</span><em>VISUALS</em></span>
      </Link>
      <nav className={navClass} aria-label="Primary navigation">
        {pages.map((page) => {
          const active = isCurrentPage(location, page.href);
          return (
            <Link
              key={page.href}
              href={page.href}
              className={`${linkClass}${active ? ` ${activeClass}` : ""}${page.cta ? ` ${contactClass}` : ""}`}
            >
              {page.label}
              {page.cta && <ArrowUpRight size={14} />}
            </Link>
          );
        })}
      </nav>
      <button
        className={isHome ? "menu-toggle" : "inner-menu-toggle"}
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
    </header>
  );
}
