import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const faqs = [
  {
    q: "How do you find where my leak is coming from?",
    a: "Water often travels before it shows. A stain on the ceiling may come from the terrace, a bathroom above or a pipe inside the wall. We inspect the site, trace the likely entry points and explain what we find before recommending a treatment.",
  },
  {
    q: "When is the best time to waterproof?",
    a: "Before the monsoon, when surfaces are dry and coatings can cure properly. Active leaks can still be treated during the rains with methods such as PU grouting.",
  },
  {
    q: "Will you have to break my bathroom tiles?",
    a: "Not always. If the problem is in the grout joints, epoxy grouting or injection can often fix it without removing tiles. If the floor waterproofing has failed, we open up only the area that needs it.",
  },
  {
    q: "Which products do you use?",
    a: "Waterproofing and grouting systems from Dr. Fixit, Fosroc and MYK Laticrete, and Asian Paints for painting. We choose the product based on the surface and the problem.",
  },
  {
    q: "How long does the work take?",
    a: "It depends on the area and the treatment. Small grouting or bathroom jobs are quicker, while terraces and larger repairs take longer because coatings need time to cure. Your quotation includes a timeline.",
  },
  {
    q: "Which areas do you cover?",
    a: "Our office is in Kistareddypet and we work across Hyderabad. Call or WhatsApp us with your location and we will confirm.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Faq() {
  return (
    <section id="faq" className="screen bg-navy-50/50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container-x grid gap-[clamp(2.5rem,6vw,7rem)] lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <SectionHeading index="07" eyebrow="Questions" title="What people ask us before we start" />
          <Reveal variant="wipe" delay={300} className="mt-[clamp(1.5rem,4vh,3rem)] hidden lg:block">
            <div className="relative h-[clamp(14rem,36vh,28rem)] overflow-hidden">
              <Image src="/images/faq.jpg" alt="Bright, freshly finished living space" fill sizes="35vw" className="parallax object-cover" />
            </div>
          </Reveal>
        </div>

        <div className="border-t border-navy-900/15">
          {faqs.map((f, i) => (
            <Reveal key={f.q} variant="up" delay={i * 100}>
              <details name="faq" className="group border-b border-navy-900/15" open={i === 0}>
                <summary className="flex cursor-pointer items-baseline gap-5 py-[clamp(1rem,2.4vh,1.6rem)]">
                  <span className="font-display text-sm text-brand-red">0{i + 1}</span>
                  <span className="flex-1 font-display text-[clamp(1.05rem,1.35vw,1.5rem)] font-semibold text-navy-900">{f.q}</span>
                  <span
                    aria-hidden="true"
                    className="relative size-4 shrink-0 self-center before:absolute before:inset-x-0 before:top-1/2 before:h-0.5 before:-translate-y-1/2 before:bg-navy-900 after:absolute after:inset-y-0 after:left-1/2 after:w-0.5 after:-translate-x-1/2 after:bg-navy-900 after:transition-transform after:duration-500 group-open:after:scale-y-0"
                  />
                </summary>
                <p className="pb-[clamp(1rem,2.4vh,1.6rem)] pl-[calc(1.25rem+2ch)] pr-8 text-body text-slate-600">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
