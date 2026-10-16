import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const reasons = [
  {
    title: "We find the source first",
    text: "Water rarely leaks where the stain shows. We trace it before we quote, so you pay for a fix, not a patch.",
  },
  {
    title: "Proven, branded materials",
    text: "Dr. Fixit, Fosroc, MYK Laticrete and Asian Paints systems, applied the way the manufacturer intends.",
  },
  {
    title: "One team, start to finish",
    text: "Waterproofing, grouting, tiling, painting and repairs under one roof. No juggling contractors.",
  },
  {
    title: "Clear quotes, clean sites",
    text: "A written quote before anything starts, and a clean home when we finish.",
  },
];

export default function WhyUs() {
  return (
    <section className="screen bg-navy-900 text-white">
      <div className="container-x grid items-center gap-[clamp(2.5rem,6vw,7rem)] lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative pb-[clamp(2.5rem,7vh,4.5rem)] pr-[clamp(2rem,6vw,6rem)]">
          <Reveal variant="wipe">
            <div className="relative h-[clamp(16rem,50vh,40rem)] overflow-hidden">
              <Image
                src="/images/apartments.jpg"
                alt="Apartment building with balconies in warm evening light"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="parallax object-cover"
              />
            </div>
          </Reveal>
          <Reveal variant="zoom" delay={500} className="absolute bottom-0 right-0 w-[45%]">
            <div className="relative aspect-[4/3] overflow-hidden border-[clamp(0.4rem,0.6vw,0.75rem)] border-navy-900">
              <Image
                src="/images/why-house.jpg"
                alt="Contemporary house at twilight"
                fill
                sizes="(min-width: 1024px) 18vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal variant="blur" delay={800} className="absolute left-[clamp(1rem,2vw,2rem)] top-[clamp(1rem,2vw,2rem)]">
            <p className="bg-white px-5 py-4 font-display text-navy-900 shadow-2xl">
              <span className="block text-eyebrow text-brand-red">Our promise</span>
              <span className="mt-1 block text-[clamp(1.05rem,1.4vw,1.5rem)] font-bold">Fix it once, fix it right.</span>
            </p>
          </Reveal>
        </div>

        <div>
          <SectionHeading
            index="05"
            eyebrow="Why Satvika"
            title="Built on doing the job properly"
            intro="A leak fixed badly comes back next monsoon. We diagnose, use the right system and finish neatly."
            light
          />
          <ol className="mt-[clamp(1.25rem,3.5vh,2.5rem)] grid gap-x-[clamp(1.5rem,3vw,3.5rem)] sm:grid-cols-2">
            {reasons.map((r, i) => (
              <li key={r.title} className="border-t border-white/15 py-[clamp(0.6rem,1.6vh,1.3rem)]">
                <Reveal variant="up" delay={i * 150}>
                  <p className="font-display text-sm text-red-300">0{i + 1}</p>
                  <h3 className="mt-1 font-display text-[clamp(1.05rem,min(1.3vw,2.4vh),1.4rem)] font-semibold">{r.title}</h3>
                  <p className="mt-1.5 text-[clamp(0.88rem,min(0.95vw,1.8vh),1.05rem)] leading-relaxed text-white/65">{r.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
