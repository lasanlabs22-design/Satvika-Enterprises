"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  { src: "/images/hero.jpg", alt: "Modern home lit up at dusk" },
  { src: "/images/hero-2.jpg", alt: "Apartment building with rows of balconies" },
  { src: "/images/hero-3.jpg", alt: "Contemporary house with large glass windows" },
];

const INTERVAL = 7000;

// Slow cross-fading background with a gentle zoom on each slide.
export default function HeroSlideshow() {
  // `runs[i]` changes each time slide i becomes active, remounting it so its zoom restarts,
  // while the outgoing slide keeps its zoom as it fades away.
  const [{ active, runs }, setState] = useState({ active: 0, runs: slides.map(() => 0) });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(
      () =>
        setState((s) => {
          const next = (s.active + 1) % slides.length;
          const runs = [...s.runs];
          runs[next] += 1;
          return { active: next, runs };
        }),
      INTERVAL,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      {slides.map((s, i) => (
        <div
          key={s.src}
          className={`absolute inset-0 transition-opacity duration-[2500ms] ease-in-out ${i === active ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            key={runs[i]}
            src={s.src}
            alt={s.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className="ken-burns object-cover"
          />
        </div>
      ))}

      <div className="absolute right-[clamp(1rem,4.5vw,5rem)] top-[clamp(1rem,2.5vh,2rem)] z-10 hidden items-center gap-3 font-display text-sm text-white/70 sm:flex">
        <span className="text-white">0{active + 1}</span>
        <span className="relative h-px w-24 bg-white/25">
          <span
            key={`${active}-${runs[active]}`}
            className="absolute inset-0 origin-left bg-white"
            style={{ animation: `progress ${INTERVAL}ms linear forwards` }}
          />
        </span>
        <span>0{slides.length}</span>
      </div>
    </div>
  );
}
