"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { services, whatsappHref } from "@/lib/site";

const AUTOPLAY_MS = 9000;
const delay = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;

// Interactive showcase. It auto-advances while in view (driven by the progress bar's
// animation), pauses on hover, and stops for good once the visitor picks a service.
export default function Services() {
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [hovering, setHovering] = useState(false);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Deep links such as /#tiles-epoxy (used in the footer) open the matching service.
  useEffect(() => {
    const open = () => {
      const i = services.findIndex((s) => `#${s.slug}` === window.location.hash);
      if (i >= 0) {
        setActive(i);
        setAutoplay(false);
      }
    };
    open();
    window.addEventListener("hashchange", open);
    return () => window.removeEventListener("hashchange", open);
  }, []);

  const pick = (i: number) => {
    setActive(i);
    setAutoplay(false);
  };

  const s = services[active];
  const playing = autoplay && inView && !hovering;

  return (
    <section
      id="services"
      ref={ref}
      className="screen relative bg-navy-50/50"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Invisible anchors so footer links like /#painting land on this section. */}
      {services.map((sv) => (
        <span key={sv.slug} id={sv.slug} className="absolute top-0" aria-hidden="true" />
      ))}

      <div className="container-x grid gap-[clamp(1.5rem,3.5vw,4.5rem)] lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.6fr)] lg:items-center">
        {/* Heading + service list */}
        <div className="min-w-0">
          <SectionHeading
            index="02"
            eyebrow="Our services"
            title={
              <>
                Six ways we keep buildings <span className="text-brand-red">dry and strong</span>
              </>
            }
          />
          <Reveal variant="left" delay={200} className="mt-[clamp(1.25rem,3.5vh,2.5rem)]">
            <div
              role="tablist"
              aria-label="Services"
              className="-mx-[clamp(1rem,4.5vw,5rem)] flex snap-x scroll-px-[clamp(1rem,4.5vw,5rem)] gap-2 overflow-x-auto px-[clamp(1rem,4.5vw,5rem)] pb-2 lg:mx-0 lg:block lg:overflow-visible lg:border-t lg:border-navy-100 lg:p-0"
            >
              {services.map((sv, i) => {
                const selected = i === active;
                return (
                  <button
                    key={sv.slug}
                    type="button"
                    role="tab"
                    id={`tab-${sv.slug}`}
                    aria-selected={selected}
                    aria-controls="service-panel"
                    onClick={() => pick(i)}
                    className={`group relative shrink-0 snap-start border px-4 py-3 text-left transition-colors duration-500 lg:flex lg:w-full lg:items-baseline lg:gap-4 lg:border-0 lg:border-b lg:border-navy-100 lg:px-0 lg:py-[clamp(0.55rem,1.5vh,1.1rem)] ${
                      selected
                        ? "border-navy-900 bg-navy-900 text-white lg:bg-transparent lg:text-navy-900"
                        : "border-navy-100 bg-white text-slate-500 hover:text-navy-900 lg:bg-transparent"
                    }`}
                  >
                    <span className={`hidden font-display text-sm lg:inline ${selected ? "text-brand-red" : ""}`}>
                      0{i + 1}
                    </span>
                    <span
                      className={`whitespace-nowrap font-display font-semibold transition-transform duration-500 lg:whitespace-normal lg:text-[clamp(1.05rem,min(1.35vw,2.5vh),1.6rem)] ${
                        selected ? "lg:translate-x-2" : "group-hover:lg:translate-x-1"
                      }`}
                    >
                      {sv.title}
                    </span>
                    {selected && (
                      <span className="absolute inset-x-0 bottom-[-1px] hidden h-0.5 overflow-hidden bg-navy-100 lg:block">
                        <span
                          key={`${active}-${autoplay}`}
                          className="autoplay-bar absolute inset-0 origin-left bg-brand-red"
                          style={
                            autoplay
                              ? {
                                  animation: `progress ${AUTOPLAY_MS}ms linear forwards`,
                                  animationPlayState: playing ? "running" : "paused",
                                }
                              : undefined
                          }
                          onAnimationEnd={() => setActive((a) => (a + 1) % services.length)}
                        />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* Detail panel */}
        <Reveal variant="up" delay={300} className="min-w-0">
          <div
            id="service-panel"
            role="tabpanel"
            aria-labelledby={`tab-${s.slug}`}
            className="grid overflow-hidden bg-white shadow-[0_30px_80px_-40px_rgba(0,34,71,0.35)] lg:h-[clamp(30rem,72vh,52rem)] lg:grid-cols-[0.8fr_1.2fr]"
          >
            <div className="relative h-[clamp(13rem,30svh,22rem)] lg:h-full">
              {services.map((sv, i) => (
                <Image
                  key={sv.slug}
                  src={sv.image}
                  alt={i === active ? sv.imageAlt : ""}
                  fill
                  sizes="(min-width: 1024px) 26vw, 100vw"
                  className={`object-cover transition-[opacity,transform] duration-[1600ms] ease-(--ease-out-expo) ${
                    i === active ? "scale-100 opacity-100" : "scale-110 opacity-0"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-5 font-display text-[clamp(2.75rem,7vh,5rem)] font-bold leading-none text-white/90">
                0{active + 1}
              </p>
            </div>

            <div key={s.slug} className="flex min-h-0 flex-col p-[clamp(1.25rem,2.4vw,3rem)]">
              <h3 className="fade-up font-display text-h3 font-bold text-navy-900">{s.title}</h3>
              <p className="fade-up mt-[clamp(0.5rem,1.4vh,1rem)] text-[clamp(0.95rem,min(1vw,1.9vh),1.15rem)] leading-relaxed text-slate-600" style={delay(0.1)}>
                {s.intro}
              </p>

              <h4 className="fade-up mt-[clamp(1rem,2.6vh,1.75rem)] font-display text-eyebrow text-brand-red" style={delay(0.2)}>
                How we do it
              </h4>
              <ol className="fade-up mt-[clamp(0.4rem,1vh,0.75rem)] grid gap-x-6 sm:grid-cols-2" style={delay(0.25)}>
                {s.steps.map((st, i) => (
                  <li
                    key={st}
                    className="flex gap-3 border-b border-navy-100 py-[clamp(0.4rem,1vh,0.7rem)] text-[clamp(0.88rem,min(0.9vw,1.75vh),1.05rem)] text-slate-700"
                  >
                    <span className="font-display font-semibold text-navy-900">{i + 1}</span>
                    {st}
                  </li>
                ))}
              </ol>

              <h4 className="fade-up mt-[clamp(1rem,2.6vh,1.75rem)] font-display text-eyebrow text-brand-red" style={delay(0.3)}>
                Where it&apos;s needed
              </h4>
              <p className="fade-up mt-[clamp(0.4rem,1vh,0.75rem)] text-[clamp(0.9rem,min(0.95vw,1.8vh),1.08rem)] font-medium text-navy-900" style={delay(0.35)}>
                {s.points.join("  /  ")}
              </p>

              <a
                href={whatsappHref(`Hello Satvika Enterprises, I'd like a quote for ${s.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="fade-up mt-auto inline-flex w-fit items-center gap-3 pt-[clamp(1rem,2.6vh,1.75rem)] font-display font-semibold text-navy-900"
                style={delay(0.4)}
              >
                <span className="border-b-2 border-brand-red pb-1 transition-colors duration-300 hover:text-brand-red">
                  Ask about {s.title.toLowerCase()}
                </span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
