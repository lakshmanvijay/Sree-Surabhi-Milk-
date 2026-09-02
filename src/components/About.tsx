import { useState } from "react";
import { Play, Users, Award, HeartHandshake } from "lucide-react";
import { img } from "../assets/images";
import aboutFarmImg from "../assets/brand/03_about_farm_image.png";
import Reveal from "./Reveal";
import "./About.css";

const STATS = [
  { icon: Users, value: "500+", label: "Happy Farmers" },
  { icon: Award, value: "10+ Years", label: "Of Trust" },
  { icon: HeartHandshake, value: "100%", label: "Quality Promise" },
];

export default function About() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="about" className="about">
      <div className="container about__grid">
        <Reveal className="about__media">
          <div className="about__image-frame">
            <img src={aboutFarmImg} alt="Sree Surabhi dairy farm with green pastures and cattle sheds" loading="lazy" />
            {!playing && (
              <button className="about__play" aria-label="Play farm story video" onClick={() => setPlaying(true)}>
                <Play size={22} fill="currentColor" />
              </button>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.12} className="about__copy">
          <span className="eyebrow">Who We Are</span>
          <h2>
            About <span className="accent">Sree Surabhi Dairy</span>
          </h2>
          <div className="rule left" />
          <p className="about__text">
            Sree Surabhi Dairy began with a simple conviction — every home deserves milk that is
            genuinely pure. We partner closely with local farmers, care for our herds with
            attention and respect, and follow rigorous hygiene standards at every stage so that
            what reaches your table is exactly what nature intended.
          </p>
          <p className="about__text">
            From the pasture to your doorstep, our promise stays the same: honest dairy, made with
            care, for families who deserve the best.
          </p>

          <div className="about__stats">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div className="stat" key={label}>
                <span className="stat__icon">
                  <Icon size={22} strokeWidth={1.8} />
                </span>
                <strong>{value}</strong>
                <span className="stat__label">{label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="about__splash" aria-hidden="true">
        <img src={img.milkSplash(500)} alt="" loading="lazy" />
      </div>
    </section>
  );
}
