import { Wheat, Leaf, Cpu, Users2, Truck, Recycle } from "lucide-react";
import Reveal from "./Reveal";
import "./WhyChoose.css";

const REASONS = [
  { icon: Wheat, title: "Farm Fresh", desc: "Sourced directly from our own trusted farms." },
  { icon: Leaf, title: "Pure & Natural", desc: "Fresh dairy with zero unnecessary additives." },
  { icon: Cpu, title: "Advanced Technology", desc: "Modern, hygienic processing at every step." },
  { icon: Users2, title: "Trusted by Families", desc: "Loved by thousands of households nearby." },
  { icon: Truck, title: "Timely Delivery", desc: "Fresh products on your doorstep, on time." },
  { icon: Recycle, title: "Sustainable Practices", desc: "Responsible, eco-friendly dairy farming." },
];

export default function WhyChoose() {
  return (
    <section className="why-choose">
      <div className="container">
        <Reveal className="section-heading">
          <span className="eyebrow">Our Difference</span>
          <h2>
            Why Choose <span className="accent">Sree Surabhi Dairy</span>?
          </h2>
          <div className="rule" />
        </Reveal>

        <div className="why-choose__grid">
          {REASONS.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 0.05} className="reason">
              <span className="reason__icon">
                <Icon size={26} strokeWidth={1.6} />
              </span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
