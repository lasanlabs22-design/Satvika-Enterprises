import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    title: "Call or WhatsApp",
    text: "Tell us the problem. Photos of the damage help us prepare for the visit.",
    image: "/images/step-quote.jpg",
    alt: "Notes and a laptop on a desk",
  },
  {
    title: "Site inspection",
    text: "We visit, check the affected areas and trace where the water is coming from.",
    image: "/images/step-inspect.jpg",
    alt: "Plans and measuring tools spread on a table",
  },
  {
    title: "Clear quotation",
    text: "A written quote listing the treatment, materials, price and timeline.",
    image: "/images/step-handover.jpg",
    alt: "Two people shaking hands across a table",
  },
  {
    title: "Work & handover",
    text: "Our team completes the job, cleans up and walks you through what was done.",
    image: "/images/step-work.jpg",
    alt: "Power drill resting on a freshly repaired surface",
  },
];

export default function Process() {
  return (
    <section id="process" className="screen bg-white">
      <div className="container-x">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading index="06" eyebrow="How it works" title="From first call to a dry home in four steps" />
          <Reveal variant="blur" delay={300}>
            <p className="max-w-md text-lead text-slate-600">No surprises. You know what we will do and what it costs before we start.</p>
          </Reveal>
        </div>

        <ol className="-mx-[clamp(1rem,4.5vw,5rem)] mt-[clamp(2rem,5vh,3.5rem)] flex snap-x snap-mandatory scroll-px-[clamp(1rem,4.5vw,5rem)] gap-4 overflow-x-auto px-[clamp(1rem,4.5vw,5rem)] pb-4 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-[clamp(1rem,2vw,2.5rem)] lg:overflow-visible lg:px-0 lg:pb-0">
          {steps.map((s, i) => (
            <li key={s.title} className="w-[78vw] max-w-sm shrink-0 snap-start sm:w-[45vw] lg:w-auto lg:max-w-none">
              <Reveal variant="up" delay={i * 180} className="group">
                <div className="relative h-[clamp(9rem,25vh,22rem)] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, 78vw"
                    className="object-cover grayscale-[35%] transition duration-[1800ms] ease-(--ease-out-expo) group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
                <div className="relative border-t-2 border-navy-900 pt-[clamp(0.75rem,2vh,1.25rem)]">
                  <span className="absolute -top-[2px] left-0 h-0.5 w-0 bg-brand-red transition-all duration-1000 group-hover:w-full" />
                  <p className="font-display text-[clamp(2rem,min(3.2vw,5.5vh),4rem)] font-bold leading-none text-navy-100">0{i + 1}</p>
                  <h3 className="mt-[clamp(0.25rem,1vh,0.5rem)] font-display text-h3 font-bold text-navy-900">{s.title}</h3>
                  <p className="mt-[clamp(0.25rem,1vh,0.5rem)] text-body text-slate-600">{s.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
