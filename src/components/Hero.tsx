import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { img } from "../assets/images";
import heroProductShot from "../assets/brand/02_hero_cropped.png";
import "./Hero.css";

const SLIDES = [
  { bg: img.heroFarm(1600), label: "Our green pastures" },
  { bg: img.heroFarmMisty(1600), label: "Morning on the farm" },
  { bg: img.qualityCows(1600), label: "Healthy, happy cows" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => setIndex((i) => (i + 1) % SLIDES.length), []);

  useEffect(() => {
    const t = setInterval(next, 6500);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section id="home" className="hero">
      <div className="hero__bg-stack" aria-hidden="true">
        <AnimatePresence mode="sync">
          <motion.div
            key={index}
            className="hero__bg"
            style={{ backgroundImage: `url(${SLIDES[index].bg})` }}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </AnimatePresence>
        <div className="hero__scrim" />
      </div>

      <div className="container hero__inner">
        <motion.div
          className="hero__copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow hero__eyebrow">Trusted Dairy Since Day One</span>
          <h1 className="hero__title">
            Pure Milk.
            <br />
            <span className="accent">Pure Promise.</span>
          </h1>
          <p className="hero__subtitle">
            From Our <span className="script">Farm</span> to Your <span className="script">Family</span>
          </p>
          <p className="hero__desc">
            We work hand in hand with local farmers to bring your household fresh, wholesome
            dairy every single morning — hygienically processed and delivered with care.
          </p>
          <div className="hero__actions">
            <a href="#about" className="btn btn-primary">
              Know Our Story
            </a>
            <a href="#products" className="btn btn-ghost-white">
              Our Products <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero__product-card"
          initial={{ opacity: 0, y: 30, rotate: 2 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src={heroProductShot} alt="Sree Surabhi milk bottle, milk can, glass of milk and curd on a rustic wooden table" loading="eager" />
          <div className="hero__product-badge">
            <strong>100%</strong>
            <span>Pure &amp; Fresh</span>
          </div>
        </motion.div>
      </div>

      <div className="hero__dots">
        {SLIDES.map((s, i) => (
          <button
            key={s.label}
            className={i === index ? "is-active" : ""}
            aria-label={`Show slide: ${s.label}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}
