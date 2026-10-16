import type { CSSProperties } from "react";
import EnquiryForm from "./EnquiryForm";
import HeroSlideshow from "./HeroSlideshow";
import WhatsAppIcon from "./WhatsAppIcon";
import { formatPhone, site, telHref, whatsappHref } from "@/lib/site";

const delay = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;

const highlights = [
  { title: "Branded systems", detail: "Dr. Fixit, Fosroc, MYK Laticrete, Asian Paints" },
  { title: "One team", detail: "Waterproofing, grouting, painting & repairs" },
  { title: "GST registered", detail: `GSTIN ${site.gst}` },
];

// The hero is locked to exactly one screen (below the header, and above the phone action bar)
// so everything in it is visible at once. All sizes inside scale with the viewport height.
export default function Hero() {
  return (
    <section className="relative isolate flex snap-start h-[calc(100svh-var(--header-h)-4.6rem)] min-h-[34rem] flex-col overflow-hidden bg-navy-950 text-white lg:h-[calc(100svh-var(--header-h))] lg:min-h-[36rem]">
      <HeroSlideshow />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-950/85 via-navy-950/70 to-navy-950/90 lg:bg-gradient-to-r lg:from-navy-950/95 lg:via-navy-950/70 lg:to-navy-950/25" />

      <div className="container-x grid flex-1 content-center items-center gap-[clamp(2rem,4vw,5rem)] py-[clamp(1.5rem,4vh,3rem)] lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <p className="fade-up flex items-center gap-4 font-display text-eyebrow text-white/85" style={delay(0.1)}>
            <span aria-hidden="true" className="h-px w-10 bg-brand-red" />
            Waterproofing &amp; building care, Hyderabad
          </p>

          <h1 className="mt-[clamp(0.75rem,2.2vh,1.5rem)] font-display text-[clamp(2rem,min(8.4vw,7.8vh),6.25rem)] font-bold lg:text-[clamp(2.4rem,min(5.4vw,7.8vh),6.25rem)] leading-[1.02] tracking-[-0.035em]">
            <span className="line-mask">
              <span style={delay(0.2)}>
                <span className="text-brand-red">Leak-proof</span> roofs.
              </span>
            </span>
            <span className="line-mask">
              <span style={delay(0.38)}>Dry bathrooms.</span>
            </span>
            <span className="line-mask">
              <span style={delay(0.56)}>Walls that last.</span>
            </span>
          </h1>

          <p
            className="fade-up mt-[clamp(0.75rem,2.4vh,1.75rem)] max-w-[40rem] text-[clamp(1rem,min(2.6vw,2.2vh),1.35rem)] leading-relaxed lg:text-[clamp(1rem,min(1.2vw,2.2vh),1.35rem)] text-white/85"
            style={delay(0.9)}
          >
            Building and bathroom waterproofing, PU grouting, tile epoxy, painting and repairs across Hyderabad. We find
            where water gets in, seal it at the source and finish the job properly.
          </p>

          <div className="fade-up mt-[clamp(1rem,3.2vh,2.5rem)] grid grid-cols-2 gap-3 sm:flex" style={delay(1.1)}>
            <a
              href={telHref(site.phones[0])}
              className="rounded-sm bg-brand-red px-[clamp(1rem,2vw,2rem)] py-[clamp(0.85rem,1.8vh,1.2rem)] text-center font-display text-[clamp(0.95rem,1.05vw,1.15rem)] font-semibold transition-colors duration-300 hover:bg-white hover:text-navy-900"
            >
              <span className="sm:hidden">Call now</span>
              <span className="hidden sm:inline">Call {formatPhone(site.phones[0])}</span>
            </a>
            <a
              href={whatsappHref("Hello Satvika Enterprises, I need help with a leak/repair.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 rounded-sm border border-white/50 px-[clamp(1rem,2vw,2rem)] py-[clamp(0.85rem,1.8vh,1.2rem)] font-display text-[clamp(0.95rem,1.05vw,1.15rem)] font-semibold transition-colors duration-300 hover:border-white hover:bg-white hover:text-navy-900"
            >
              <WhatsAppIcon className="size-5" />
              WhatsApp
            </a>
          </div>
        </div>

        <div
          id="quote"
          className="fade-up hidden rounded-sm bg-white px-[clamp(1.5rem,2.2vw,2.75rem)] py-[clamp(1.25rem,3vh,2.5rem)] text-navy-950 shadow-2xl shadow-black/40 lg:block"
          style={delay(0.8)}
        >
          <p className="font-display text-eyebrow text-brand-red">Quick enquiry</p>
          <h2 className="mt-1 font-display text-[clamp(1.4rem,min(1.8vw,3.4vh),2.1rem)] font-bold text-navy-900">Get a quote</h2>
          <p className="mt-1 text-[clamp(0.9rem,min(0.95vw,1.8vh),1.05rem)] text-slate-600">
            Tell us what&apos;s wrong. We&apos;ll call back to arrange a visit.
          </p>
          <div className="mt-[clamp(0.5rem,1.5vh,1.25rem)]">
            <EnquiryForm idPrefix="hero" />
          </div>
        </div>
      </div>

      {/* Key points, pinned to the bottom of the hero on a solid band so they stay readable. */}
      <div className="fade-up shrink-0 border-t border-white/10 bg-navy-950/90 backdrop-blur-sm" style={delay(1.3)}>
        <ul className="container-x grid grid-cols-3 divide-x divide-white/15 py-[clamp(0.75rem,2vh,1.4rem)]">
          {highlights.map((h) => (
            <li key={h.title} className="px-[clamp(0.5rem,2vw,2rem)] first:pl-0">
              <p className="font-display text-[clamp(0.8rem,1.1vw,1.15rem)] font-semibold leading-tight text-white">
                <span aria-hidden="true" className="mr-2 inline-block h-2 w-2 bg-brand-red align-middle" />
                {h.title}
              </p>
              <p className="mt-1 hidden text-[clamp(0.8rem,0.9vw,0.98rem)] text-white/70 md:block">{h.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
