import { Phone, Mail, MapPin } from "lucide-react";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "./SocialIcons";
import footerProducts from "../assets/brand/23_footer_dairy_products.png";
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
      <div className="site-footer__splash" aria-hidden="true" />
      <img className="site-footer__products" src={footerProducts} alt="" aria-hidden="true" loading="lazy" />
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
        <p>&copy; 2026 Sree Surabhi Dairy. All Rights Reserved.</p>
        <p className="site-footer__made">Crafted with care for every family we serve.</p>
      </div>
    </footer>
  );
}
