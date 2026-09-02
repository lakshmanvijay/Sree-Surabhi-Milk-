import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import logo from "../assets/brand/logo-full.png";
import "./Header.css";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Products", href: "#products" },
  { label: "Quality", href: "#quality" },
  { label: "Our Process", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "Our Presence", href: "#presence" },
  { label: "Contact Us", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setActive(href);
    setMenuOpen(false);
  };

  return (
    <>
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container site-header__inner">
        <a href="#home" className="brand" onClick={() => handleNavClick("#home")}>
          <img src={logo} alt="Sree Surabhi Dairy" className="brand__logo" />
        </a>

        <nav className="main-nav" aria-label="Primary">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={active === link.href ? "is-active" : ""}
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <a href="#contact" className="btn btn-primary contact-btn">
            <Phone size={16} strokeWidth={2.4} />
            Contact Us
          </a>
          <button
            className="menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>

    <div
      className={`mobile-nav-backdrop ${menuOpen ? "is-open" : ""}`}
      onClick={() => setMenuOpen(false)}
      aria-hidden="true"
    />

    <div className={`mobile-nav ${menuOpen ? "is-open" : ""}`}>
      <ul>
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={() => handleNavClick(link.href)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <a href="#contact" className="btn btn-primary" onClick={() => handleNavClick("#contact")}>
        <Phone size={16} strokeWidth={2.4} />
        Contact Us
      </a>
    </div>
    </>
  );
}
