import { Phone, Mail, MapPin } from "lucide-react";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "./SocialIcons";
import logo from "../assets/brand/logo-full.png";
import "./Footer.css";

const COLUMNS = [
  {
    title: "Quick Links",
    links: ["Home", "About Us", "Products", "Quality", "Process", "Contact"],
  },
  {
    title: "Quality",
    links: ["Quality Standards", "Certifications", "Hygiene", "Our Farmers"],
  },
  {
    title: "Support",
    links: ["FAQs", "Delivery", "Customer Support"],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <svg className="site-footer__drip" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="milkOceanShine" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-white)" />
            <stop offset="100%" stopColor="var(--color-cream)" />
          </linearGradient>
        </defs>
        <path
          className="site-footer__drip-wave site-footer__drip-wave--back"
          d="M0,66 C220,98 460,40 720,66 C980,92 1220,110 1440,74 L1440,0 L0,0 Z"
        />
        <path
          className="site-footer__drip-wave site-footer__drip-wave--front"
          fill="url(#milkOceanShine)"
          d="M0,40 C170,80 330,10 490,44 C650,78 810,102 970,62 C1130,22 1290,6 1440,36 L1440,0 L0,0 Z"
        />
        <g className="site-footer__drip-dots">
          <circle className="site-footer__drip-dot" cx="185" cy="84" r="8" />
          <circle className="site-footer__drip-dot" cx="185" cy="106" r="3.6" />
          <circle className="site-footer__drip-dot" cx="470" cy="50" r="5" />
          <circle className="site-footer__drip-dot" cx="830" cy="98" r="9" />
          <circle className="site-footer__drip-dot" cx="830" cy="118" r="4" />
          <circle className="site-footer__drip-dot" cx="1150" cy="28" r="5.5" />
          <circle className="site-footer__drip-dot" cx="1350" cy="52" r="7" />
          <circle className="site-footer__drip-dot" cx="1350" cy="72" r="3" />
        </g>
      </svg>

      <div className="site-footer__splash" aria-hidden="true" />

      <div className="container site-footer__top">
        <div className="site-footer__brand">
          <div className="footer-brand">
            <img src={logo} alt="Sree Surabhi Dairy" className="footer-brand__logo" />
          </div>
          <p>
            Honest, farm-fresh dairy delivered daily. Pure milk, pure promise — for every family
            we serve.
          </p>
          <ul className="site-footer__contact">
            <li><Phone size={15} /> +91 98765 43210</li>
            <li><Mail size={15} /> info@sreesurabhidairy.com</li>
            <li><MapPin size={15} /> Hyderabad, Telangana</li>
          </ul>
          <div className="site-footer__social">
            <a href="#" aria-label="Facebook"><FacebookIcon size={16} /></a>
            <a href="#" aria-label="Instagram"><InstagramIcon size={16} /></a>
            <a href="#" aria-label="YouTube"><YoutubeIcon size={16} /></a>
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div className="site-footer__col" key={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#home">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container site-footer__bottom">
        <p>
          &copy; 2026 Sree Surabhi Dairy. All Rights Reserved.{" "}
          <span className="site-footer__dot" aria-hidden="true" />{" "}
          Crafted with care for every family we serve.
        </p>
      </div>
    </footer>
  );
}
