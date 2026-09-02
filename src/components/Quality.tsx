import { ShieldCheck, Sparkles, Droplet, BadgeCheck } from "lucide-react";
import { img } from "../assets/images";
import Reveal from "./Reveal";
import "./Quality.css";

const FEATURES = [
  { icon: ShieldCheck, title: "Strict Quality Checks", desc: "Regular testing at every stage of production." },
  { icon: Sparkles, title: "Hygienic Standards", desc: "International-standard hygiene maintained throughout." },
  { icon: Droplet, title: "No Additives", desc: "No unnecessary preservatives or harmful chemicals." },
  { icon: BadgeCheck, title: "Certified Quality", desc: "FSSAI-certified processes you can rely on." },
];

export default function Quality() {
  return (
    <section id="quality" className="quality">
      <div className="container quality__grid">
        <Reveal className="quality__media">
          <img src={img.qualityCows(800)} alt="Healthy dairy cows grazing on fresh green grass" loading="lazy" />
        </Reveal>

        <Reveal delay={0.1} className="quality__copy">
          <span className="eyebrow">Uncompromising Standards</span>
          <h2>
            Quality &amp; Purity <span className="accent">You Can Trust</span>
          </h2>
          <div className="rule left" />

          <div className="quality__features">
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <div className="quality-feature" key={title}>
                <span className="quality-feature__icon">
                  <Icon size={22} strokeWidth={1.8} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
