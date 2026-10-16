import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const signs = [
  { title: "Ceiling drips in the monsoon", text: "Rain is getting through the terrace slab or roof." },
  { title: "Damp patches on walls", text: "Seepage from outside walls or a bathroom next door." },
  { title: "Paint peeling or bubbling", text: "Moisture is trapped behind the surface." },
  { title: "Leak into the flat below", text: "A failed bathroom floor or pipe joint." },
  { title: "Black, broken tile grout", text: "Water is getting under your tiles every day." },
  { title: "Cracks that keep growing", text: "Openings that let water into the structure." },
];

export default function Signs() {
  return (
    <section className="screen relative isolate overflow-hidden bg-navy-950 text-white">
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <Image src="/images/signs.jpg" alt="" fill sizes="100vw" className="parallax object-cover opacity-55" />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/60" />

      <div className="container-x grid gap-[clamp(2.5rem,5vw,6rem)] lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading
          index="04"
          eyebrow="Warning signs"
          title="Small leaks become expensive repairs"
          intro="Water damage spreads quietly. Once it reaches the steel inside your slabs and walls, the steel rusts, expands and cracks the concrete around it. If you see any of these, get it inspected early."
          light
        />

        <ol className="grid sm:grid-cols-2 sm:gap-x-[clamp(1.5rem,3vw,3.5rem)]">
          {signs.map((s, i) => (
            <li key={s.title} className="border-t border-white/15">
              <Reveal variant="up" delay={i * 140}>
                <div className="flex gap-5 py-[clamp(1rem,2.6vh,1.75rem)]">
                  <span className="font-display text-[clamp(1.5rem,2.2vw,2.5rem)] font-bold leading-none text-brand-red">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-[clamp(1.05rem,1.25vw,1.35rem)] font-semibold">{s.title}</h3>
                    <p className="mt-1 text-[clamp(0.9rem,0.95vw,1.05rem)] text-white/65">{s.text}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
