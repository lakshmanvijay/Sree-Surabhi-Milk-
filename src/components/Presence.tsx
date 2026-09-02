import { CheckCircle2, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "./SocialIcons";
import Reveal from "./Reveal";
import "./Presence.css";

const AREAS = [
  "Hyderabad",
  "Secunderabad",
  "Kukatpally",
  "Miyapur",
  "Madhapur",
  "Gachibowli",
  "Kondapur",
  "Nearby areas",
];

export default function Presence() {
  return (
    <section id="presence" className="presence">
      <div className="container presence__grid">
        <Reveal className="presence__col">
          <span className="eyebrow">Where We Deliver</span>
          <h2>Our Presence</h2>
          <div className="rule left" />
          <p className="presence__lead">
            We proudly serve families across these areas with fresh dairy, delivered daily.
          </p>
          <ul className="presence__areas">
            {AREAS.map((a) => (
              <li key={a}>
                <CheckCircle2 size={17} />
                {a}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="presence__map" aria-hidden="true">
          <div className="map-graphic">
            <svg viewBox="0 0 300 300" className="map-graphic__lines">
              <path d="M10 220 C 70 180, 90 250, 150 200 S 260 150, 290 90" />
              <path d="M20 60 C 80 90, 120 40, 180 80 S 260 220, 280 260" />
              <circle cx="150" cy="150" r="120" />
              <circle cx="150" cy="150" r="80" />
            </svg>
            <span className="map-graphic__pin">
              <MapPin size={26} fill="currentColor" />
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.18} className="presence__col">
          <span id="contact" className="anchor-target" aria-hidden="true" />
          <span className="eyebrow">Reach Us</span>
          <h2>Get In Touch</h2>
          <div className="rule left" />

          <ul className="contact-list">
            <li>
              <Phone size={18} />
              <span>+91 98765 43210</span>
            </li>
            <li>
              <Mail size={18} />
              <span>info@sreesurabhidairy.com</span>
            </li>
            <li>
              <MapPin size={18} />
              <span>Plot No. 123, Dairy Farm Road, Hyderabad, Telangana – 500077</span>
            </li>
          </ul>

          <div className="contact-social">
            <a href="#" aria-label="Facebook"><FacebookIcon size={17} /></a>
            <a href="#" aria-label="Instagram"><InstagramIcon size={17} /></a>
            <a href="#" aria-label="YouTube"><YoutubeIcon size={17} /></a>
          </div>

          <a href="#contact" className="btn btn-primary presence__cta">
            <MessageCircle size={17} />
            Talk to Us
          </a>
        </Reveal>
      </div>
    </section>
  );
}
