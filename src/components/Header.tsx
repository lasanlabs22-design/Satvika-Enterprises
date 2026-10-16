"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { formatPhone, navLinks, site, telHref } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 h-(--header-h) bg-white transition-shadow duration-500 ${
        scrolled || open ? "shadow-[0_1px_0_rgba(1,48,94,0.1)]" : ""
      }`}
    >
      <div className="container-x flex h-full items-center justify-between gap-6">
        <Link href="/" aria-label={`${site.name} home`} onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt={site.name}
            width={1565}
            height={624}
            priority
            className="h-12 w-auto lg:h-[3.75rem]"
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-[clamp(1.5rem,2.6vw,3rem)] lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative font-display text-[clamp(0.95rem,1vw,1.1rem)] font-medium text-navy-900 after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-brand-red after:transition-transform after:duration-500 hover:after:scale-x-100"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-8 lg:flex">
          <a href={telHref(site.phones[0])} className="text-right leading-tight">
            <span className="block text-xs uppercase tracking-[0.18em] text-slate-500">Call us</span>
            <span className="font-display text-lg font-semibold text-navy-900">{formatPhone(site.phones[0])}</span>
          </a>
          <Link
            href="/#quote"
            className="rounded-sm bg-brand-red px-6 py-3.5 font-display text-[clamp(0.95rem,1vw,1.05rem)] font-semibold text-white transition-colors duration-300 hover:bg-navy-900"
          >
            Get a quote
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative grid size-11 place-items-center lg:hidden"
        >
          <span
            className={`absolute h-0.5 w-7 bg-navy-900 transition-transform duration-500 ${open ? "rotate-45" : "-translate-y-2"}`}
          />
          <span className={`absolute h-0.5 w-7 bg-navy-900 transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span
            className={`absolute h-0.5 w-7 bg-navy-900 transition-transform duration-500 ${open ? "-rotate-45" : "translate-y-2"}`}
          />
        </button>
      </div>

      {/* Reading progress along the bottom edge of the header. */}
      <div aria-hidden="true" className="scroll-progress absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-brand-red" />

      <nav
        id="mobile-menu"
        aria-label="Mobile"
        className={`absolute inset-x-0 top-full overflow-hidden bg-white transition-[max-height] duration-700 ease-(--ease-out-expo) lg:hidden ${
          open ? "max-h-[80svh] shadow-xl" : "max-h-0"
        }`}
      >
        <div className="container-x pb-8 pt-2">
          {navLinks.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-4 border-b border-navy-100 py-4 font-display text-2xl font-semibold text-navy-900"
            >
              <span className="text-sm text-brand-red">0{i + 1}</span>
              {l.label}
            </a>
          ))}
          <Link
            href="/#quote-form"
            onClick={() => setOpen(false)}
            className="mt-6 block rounded-sm bg-brand-red py-4 text-center font-display font-semibold text-white"
          >
            Get a quote
          </Link>
        </div>
      </nav>
    </header>
  );
}
