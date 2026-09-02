import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { img } from "../assets/images";
import buildingImg from "../assets/brand/gallery-building.jpg";
import Reveal from "./Reveal";
import "./Gallery.css";

const PHOTOS = [
  { src: img.galleryCows(800), alt: "Cows grazing on the Sree Surabhi dairy farm" },
  { src: img.milkingMachine(800), alt: "Hygienic milking process at our farm" },
  { src: img.labTesting(800), alt: "Our quality assurance team at work" },
  { src: img.processingTanks(800), alt: "Our hygienic milk processing facility" },
  { src: img.cheeseAssortment(800), alt: "Fresh dairy products, ready to deliver" },
  { src: buildingImg, alt: "A modern dairy processing facility" },
];

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((i) => (i === null ? i : (i + 1) % PHOTOS.length));
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i === null ? i : (i - 1 + PHOTOS.length) % PHOTOS.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex]);

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <Reveal className="section-heading">
          <span className="eyebrow">Behind the Scenes</span>
          <h2>Our Gallery</h2>
          <div className="rule" />
        </Reveal>

        <div className="gallery__grid">
          {PHOTOS.map((p, i) => (
            <Reveal key={p.alt} delay={i * 0.05} className="gallery__item-wrap">
              <button className="gallery__item" onClick={() => setOpenIndex(i)} aria-label={`View photo: ${p.alt}`}>
                <img src={p.src} alt={p.alt} loading="lazy" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer">
          <button className="lightbox__close" onClick={() => setOpenIndex(null)} aria-label="Close">
            <X size={26} />
          </button>
          <button
            className="lightbox__nav lightbox__nav--left"
            onClick={() => setOpenIndex((i) => (i === null ? i : (i - 1 + PHOTOS.length) % PHOTOS.length))}
            aria-label="Previous photo"
          >
            <ChevronLeft size={28} />
          </button>
          <img src={PHOTOS[openIndex].src} alt={PHOTOS[openIndex].alt} className="lightbox__image" />
          <button
            className="lightbox__nav lightbox__nav--right"
            onClick={() => setOpenIndex((i) => (i === null ? i : (i + 1) % PHOTOS.length))}
            aria-label="Next photo"
          >
            <ChevronRight size={28} />
          </button>
          <div className="lightbox__caption">{PHOTOS[openIndex].alt}</div>
        </div>
      )}
    </section>
  );
}
