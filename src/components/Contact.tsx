import EnquiryForm from "./EnquiryForm";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { formatPhone, fullAddress, mapsEmbed, mapsLink, site, telHref } from "@/lib/site";

export default function Contact() {
  const label = "font-display text-eyebrow text-slate-500";
  const row = "py-[clamp(0.6rem,1.6vh,1.1rem)]";

  return (
    <section id="contact" className="screen bg-white">
      <div className="container-x grid gap-[clamp(2rem,4vw,4.5rem)] lg:grid-cols-[1fr_1fr_1fr] lg:items-stretch">
        <div>
          <SectionHeading index="08" eyebrow="Contact" title="Talk to us about your building" />
          <Reveal variant="up" delay={300}>
            <dl className="mt-[clamp(1.25rem,3.5vh,2.5rem)] divide-y divide-navy-100 border-y border-navy-100">
              <div className={row}>
                <dt className={label}>Phone</dt>
                <dd className="mt-1 flex flex-col font-display text-[clamp(1.1rem,min(1.4vw,2.6vh),1.6rem)] font-semibold text-navy-900">
                  {site.phones.map((p) => (
                    <a key={p} href={telHref(p)} className="w-fit hover:text-brand-red">
                      {formatPhone(p)}
                    </a>
                  ))}
                </dd>
              </div>
              <div className={row}>
                <dt className={label}>Email</dt>
                <dd className="mt-1 break-all text-body font-medium text-navy-900">
                  <a href={`mailto:${site.email}`} className="hover:text-brand-red">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div className={row}>
                <dt className={label}>Office</dt>
                <dd className="mt-1 text-body text-slate-700">
                  {fullAddress}
                  <a
                    href={mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 whitespace-nowrap font-medium text-navy-800 underline underline-offset-4 hover:text-brand-red"
                  >
                    Get directions
                  </a>
                </dd>
              </div>
              <div className={row}>
                <dt className={label}>GSTIN</dt>
                <dd className="mt-1 text-body font-medium text-navy-900">{site.gst}</dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal variant="up" delay={150}>
          {/* On phones and tablets this is the main form; desktop also has one in the hero. */}
          <div id="quote-form" className="h-full bg-navy-50/70 p-[clamp(1.5rem,2.4vw,2.75rem)]">
            <h3 className="font-display text-h3 font-bold text-navy-900">Request a quote</h3>
            <p className="mt-1.5 text-body text-slate-600">Your message opens in WhatsApp, ready to send.</p>
            <div className="mt-[clamp(0.5rem,1.5vh,1rem)]">
              <EnquiryForm idPrefix="contact" />
            </div>
          </div>
        </Reveal>

        <Reveal variant="up" delay={300} className="min-h-[18rem]">
          <iframe
            title={`Map showing the ${site.name} office`}
            src={mapsEmbed}
            className="block h-full min-h-[18rem] w-full border-0"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  );
}
