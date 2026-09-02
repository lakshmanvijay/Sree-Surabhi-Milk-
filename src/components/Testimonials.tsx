import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import { avatars } from "../assets/images";
import Reveal from "./Reveal";
import "./Testimonials.css";

const REVIEWS = [
  {
    name: "Ramesh Kumar",
    city: "Hyderabad",
    rating: 5,
    text: "The milk is remarkably fresh — we can genuinely taste the difference every morning.",
    avatar: avatars.ramesh,
  },
  {
    name: "Priya Sharma",
    city: "Secunderabad",
    rating: 4,
    text: "Excellent quality products and very hygienic packaging. Highly recommended for families.",
    avatar: avatars.priya,
  },
  {
    name: "Anil Reddy",
    city: "Kukatpally",
    rating: 5,
    text: "We've trusted them for over a year now. Consistent quality and always on time.",
    avatar: avatars.anil,
  },
  {
    name: "Sneha Patel",
    city: "Miyapur",
    rating: 5,
    text: "Sree Surabhi Dairy is now part of our daily routine. Great taste and real freshness.",
    avatar: avatars.sneha,
  },
];

const PAGE_SIZE_DESKTOP = 4;

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const pages = Math.ceil(REVIEWS.length / PAGE_SIZE_DESKTOP);

  useEffect(() => {
    if (pages <= 1) return;
    const t = setInterval(() => setPage((p) => (p + 1) % pages), 7000);
    return () => clearInterval(t);
  }, [pages]);

  return (
    <section id="reviews" className="testimonials">
      <div className="container">
        <Reveal className="section-heading">
          <span className="eyebrow">Voices of Trust</span>
          <h2>What Our Customers Say</h2>
          <div className="rule" />
        </Reveal>

        <div className="testimonials__grid">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.07}>
              <article className="review-card">
                <Quote className="review-card__quote" size={34} aria-hidden="true" />
                <div className="review-card__stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      size={15}
                      fill={s < r.rating ? "currentColor" : "none"}
                      strokeWidth={1.5}
                    />
                  ))}
                </div>
                <p>&ldquo;{r.text}&rdquo;</p>
                <div className="review-card__person">
                  <img src={r.avatar} alt={`${r.name} portrait`} loading="lazy" />
                  <div>
                    <strong>{r.name}</strong>
                    <span>{r.city}</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {pages > 1 && (
          <div className="testimonials__dots">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                className={i === page ? "is-active" : ""}
                aria-label={`Show review set ${i + 1}`}
                onClick={() => setPage(i)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
