"use client";

import { useState, type FormEvent } from "react";
import WhatsAppIcon from "./WhatsAppIcon";
import { formatPhone, services, site, telHref, whatsappHref } from "@/lib/site";

// No backend: the enquiry is sent as a pre-filled WhatsApp message to the business.
// `idPrefix` keeps field ids unique when the form appears more than once on a page.
export default function EnquiryForm({ idPrefix }: { idPrefix: string }) {
  const [error, setError] = useState("");
  const id = (name: string) => `${idPrefix}-${name}`;

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name")).trim();
    const phone = String(data.get("phone")).replace(/\D/g, "").slice(-10);
    const service = String(data.get("service"));
    const area = String(data.get("area")).trim();

    if (phone.length !== 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }
    setError("");

    const message = [
      `Hello ${site.name}, I would like a quote.`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Service: ${service}`,
      area && `Area: ${area}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappHref(message), "_blank", "noopener,noreferrer");
  }

  const field =
    "w-full border-0 border-b border-navy-100 bg-transparent px-0 py-[clamp(0.6rem,1.4vh,0.9rem)] text-body text-navy-950 placeholder:text-slate-400 outline-none transition-colors duration-300 focus:border-brand-red";

  return (
    <form onSubmit={onSubmit} className="space-y-[clamp(0.5rem,1.2vh,1rem)]" noValidate>
      <div>
        <label htmlFor={id("name")} className="sr-only">Your name</label>
        <input id={id("name")} name="name" required autoComplete="name" placeholder="Your name" className={field} />
      </div>
      <div>
        <label htmlFor={id("phone")} className="sr-only">Mobile number</label>
        <input
          id={id("phone")}
          name="phone"
          type="tel"
          inputMode="numeric"
          required
          autoComplete="tel"
          placeholder="Mobile number"
          aria-invalid={!!error}
          aria-describedby={error ? id("phone-error") : undefined}
          className={field}
        />
        {error && (
          <p id={id("phone-error")} className="mt-1.5 text-sm text-brand-red">{error}</p>
        )}
      </div>
      <div>
        <label htmlFor={id("service")} className="sr-only">Service needed</label>
        <select id={id("service")} name="service" defaultValue={services[0].title} className={field}>
          {services.map((s) => (
            <option key={s.slug}>{s.title}</option>
          ))}
          <option>Not sure, need an inspection</option>
        </select>
      </div>
      <div>
        <label htmlFor={id("area")} className="sr-only">Your area or locality</label>
        <input id={id("area")} name="area" autoComplete="address-level2" placeholder="Area / locality (optional)" className={field} />
      </div>

      <div className="pt-[clamp(0.75rem,2vh,1.5rem)]">
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2.5 rounded-sm bg-navy-900 px-5 py-[clamp(0.9rem,2vh,1.15rem)] font-display font-semibold text-white transition-colors duration-300 hover:bg-brand-red"
        >
          <WhatsAppIcon className="size-5" />
          Send on WhatsApp
        </button>
        <p className="mt-3 text-center text-sm text-slate-500">
          Prefer to talk?{" "}
          <a href={telHref(site.phones[0])} className="font-medium text-navy-800 underline underline-offset-4 hover:text-brand-red">
            Call {formatPhone(site.phones[0])}
          </a>
        </p>
      </div>
    </form>
  );
}
