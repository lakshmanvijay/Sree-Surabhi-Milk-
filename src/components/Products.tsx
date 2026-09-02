import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import toneMilkImg from "../assets/brand/04_cropped.png";
import curdImg from "../assets/brand/05_cropped.png";
import gheeImg from "../assets/brand/06_cropped.png";
import paneerImg from "../assets/brand/07_cropped.png";
import buttermilkImg from "../assets/brand/08_cropped.png";
import moreProductsImg from "../assets/brand/09_cropped.png";
import "./Products.css";

const PRODUCTS = [
  {
    name: "Toned Milk",
    desc: "100% pure cow milk, standardised for everyday nutrition.",
    image: toneMilkImg,
  },
  {
    name: "Curd",
    desc: "Thick, creamy curd, naturally set the traditional way.",
    image: curdImg,
  },
  {
    name: "Ghee",
    desc: "Slow-simmered, aromatic ghee made from pure milk fat.",
    image: gheeImg,
  },
  {
    name: "Paneer",
    desc: "Soft, protein-rich paneer cut fresh every morning.",
    image: paneerImg,
  },
  {
    name: "Buttermilk",
    desc: "Light, refreshing and naturally cultured buttermilk.",
    image: buttermilkImg,
  },
  {
    name: "More Products",
    desc: "Explore our complete range of farm-fresh dairy.",
    image: moreProductsImg,
  },
];

export default function Products() {
  return (
    <section id="products" className="products">
      <div className="container">
        <Reveal className="section-heading">
          <span className="eyebrow">Farm Fresh Range</span>
          <h2>Our Products</h2>
          <div className="rule" />
        </Reveal>

        <div className="products__grid">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <article className="product-card">
                <div className="product-card__image">
                  <img src={p.image} alt={p.name} loading="lazy" />
                </div>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <span className="product-card__link">
                  Explore <ArrowUpRight size={15} />
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
