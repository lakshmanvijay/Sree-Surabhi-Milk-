import { ArrowRight } from "lucide-react";
import { img } from "../assets/images";
import Reveal from "./Reveal";
import "./Process.css";

const STEPS = [
  { n: "01", title: "Healthy Cows", desc: "We care for our cows with the best feed and environment.", image: img.cowFace(300) },
  { n: "02", title: "Hygienic Milking", desc: "Milked under strict hygiene using modern equipment.", image: img.milkingMachine(300) },
  { n: "03", title: "Quality Testing", desc: "Every batch is lab-tested for purity and safety.", image: img.labTesting(300) },
  { n: "04", title: "Hygienic Processing", desc: "Advanced technology ensures maximum freshness.", image: img.processingTanks(300) },
  { n: "05", title: "Safe Packaging", desc: "Sealed in food-grade, eco-friendly packaging.", image: img.packagingLine(300) },
  { n: "06", title: "Delivered Fresh", desc: "On your doorstep fresh, every single morning.", image: img.deliveryTruck(300) },
];

export default function Process() {
  return (
    <section id="process" className="process">
      <div className="container">
        <Reveal className="section-heading">
          <span className="eyebrow">How It Works</span>
          <h2>From Our Farm to Your Home</h2>
          <div className="rule" />
        </Reveal>

        <div className="process__track">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08} className="process__item-wrap">
              <div className="process__item">
                <div className="process__circle">
                  <img src={s.image} alt={s.title} loading="lazy" />
                  <span className="process__num">{s.n}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
              {i < STEPS.length - 1 && (
                <span className="process__arrow" aria-hidden="true">
                  <ArrowRight size={18} />
                </span>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
