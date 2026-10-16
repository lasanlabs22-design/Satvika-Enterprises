import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { partners } from "@/lib/site";

export default function About() {
  return (
    <section id="about" className="screen overflow-hidden bg-white">
      <div className="container-x grid items-center gap-[clamp(2.5rem,6vw,7rem)] lg:grid-cols-2">
        {/* Photo collage */}
        <div className="grid grid-cols-[1.25fr_1fr] gap-[clamp(0.75rem,1.2vw,1.25rem)]">
          <Reveal variant="wipe" className="row-span-2">
            <div className="relative h-[40svh] overflow-hidden lg:h-[clamp(20rem,60vh,46rem)]">
              <Image
                src="/images/about-site.jpg"
                alt="Multi-storey building under construction"
                fill
                sizes="(min-width: 1024px) 28vw, 55vw"
                className="parallax object-cover"
              />
            </div>
          </Reveal>
          <Reveal variant="wipe" delay={250}>
            <div className="relative h-[calc(20svh-0.4rem)] overflow-hidden lg:h-[calc(clamp(20rem,60vh,46rem)/2-0.6rem)]">
              <Image
                src="/images/about-team.jpg"
                alt="Site technician holding a safety helmet"
                fill
                sizes="(min-width: 1024px) 22vw, 45vw"
                className="object-cover object-top"
              />
            </div>
          </Reveal>
          <Reveal variant="wipe" delay={450}>
            <div className="relative h-[calc(20svh-0.4rem)] overflow-hidden lg:h-[calc(clamp(20rem,60vh,46rem)/2-0.6rem)]">
              <Image
                src="/images/about-plans.jpg"
                alt="Engineer marking up building plans"
                fill
                sizes="(min-width: 1024px) 22vw, 45vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div>
          <SectionHeading
            index="01"
            eyebrow="About us"
            title={
              <>
                We fix the <span className="text-brand-red">cause</span>, not just the stain.
              </>
            }
          />
          <Reveal variant="up" delay={300}>
            <div className="mt-[clamp(1rem,2.6vh,2rem)] space-y-[clamp(0.6rem,1.6vh,1rem)] text-body text-slate-600">
              <p>
                Satvika Enterprises is a Hyderabad building care company. We stop water where it gets in, on terraces,
                external walls, bathrooms, basements and tile joints, then put things right with grouting, painting and
                repairs.
              </p>
              <p>
                Every job starts on site. We trace the real entry point, explain what we find in plain words, and
                recommend a treatment matched to your surface, your budget and the Hyderabad weather.
              </p>
            </div>
          </Reveal>

          {/* Partner brands */}
          <Reveal variant="up" delay={450}>
            <div className="mt-[clamp(1.5rem,4vh,3rem)] border-t border-navy-100 pt-[clamp(1rem,2.6vh,1.75rem)]">
              <p className="font-display text-eyebrow text-slate-500">Products we work with</p>
              <ul className="mt-[clamp(0.75rem,2vh,1.25rem)] grid grid-cols-4 items-center gap-[clamp(0.75rem,2vw,2.5rem)]">
                {partners.map((p) => (
                  <li key={p.name} className="flex justify-center sm:justify-start">
                    <Image
                      src={p.logo}
                      alt={p.name}
                      width={p.width}
                      height={p.height}
                      className="h-[clamp(2.75rem,min(5.5vw,8vh),5rem)] w-auto"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
