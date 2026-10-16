import Image from "next/image";
import Reveal from "./Reveal";
import WhatsAppIcon from "./WhatsAppIcon";
import { formatPhone, site, telHref, whatsappHref } from "@/lib/site";

export default function CtaBand() {
  return (
    <section className="screen relative isolate overflow-hidden bg-navy-950 text-center text-white">
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <Image src="/images/rain.jpg" alt="" fill sizes="100vw" className="parallax object-cover opacity-60" />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-950/90 via-navy-900/75 to-brand-red/45" />

      <div className="container-x">
        <Reveal variant="blur">
          <p className="flex items-center justify-center gap-4 font-display text-eyebrow text-white/70">
            <span aria-hidden="true" className="h-px w-12 bg-brand-red" />
            Before the rains
            <span aria-hidden="true" className="h-px w-12 bg-brand-red" />
          </p>
        </Reveal>
        <Reveal variant="up" delay={150}>
          <h2 className="mx-auto mt-6 max-w-5xl font-display text-display font-bold">
            The monsoon will find every crack. Let&apos;s find them first.
          </h2>
        </Reveal>
        <Reveal variant="up" delay={350}>
          <p className="mx-auto mt-[clamp(1.25rem,3vh,2rem)] max-w-2xl text-lead text-white/80">
            Book an inspection now and get your terrace, walls and bathrooms sealed before the rains arrive.
          </p>
        </Reveal>
        <Reveal variant="up" delay={550}>
          <div className="mt-[clamp(2rem,5vh,3.5rem)] flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={telHref(site.phones[0])}
              className="rounded-sm bg-white px-9 py-[clamp(1rem,2.2vh,1.35rem)] font-display text-[clamp(1rem,1.15vw,1.2rem)] font-semibold text-navy-900 transition-colors duration-300 hover:bg-brand-red hover:text-white"
            >
              Call {formatPhone(site.phones[0])}
            </a>
            <a
              href={whatsappHref("Hello Satvika Enterprises, I'd like to book an inspection.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 rounded-sm bg-whatsapp px-9 py-[clamp(1rem,2.2vh,1.35rem)] font-display text-[clamp(1rem,1.15vw,1.2rem)] font-semibold text-navy-950 transition hover:brightness-95"
            >
              <WhatsAppIcon className="size-5" />
              WhatsApp us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
