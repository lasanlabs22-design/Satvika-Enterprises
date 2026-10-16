import Image from "next/image";
import Link from "next/link";
import { formatPhone, fullAddress, navLinks, services, site, telHref } from "@/lib/site";

export default function Footer() {
  const heading = "font-display text-eyebrow text-white";

  return (
    <footer className="bg-navy-950 pb-[4.6rem] text-white/70 lg:pb-0">
      <div className="container-x grid gap-12 py-[clamp(3.5rem,8vh,6rem)] md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Link href="/" className="inline-block rounded-sm bg-white px-4 py-3">
            <Image src="/logo.png" alt={site.name} width={1565} height={624} className="h-14 w-auto" />
          </Link>
          <p className="mt-6 max-w-xs text-body">
            Building and bathroom waterproofing, PU grouting, tile epoxy, painting and repairs in Hyderabad.
          </p>
        </div>

        <div>
          <h2 className={heading}>Services</h2>
          <ul className="mt-5 space-y-3 text-body">
            {services.map((s) => (
              <li key={s.slug}>
                <a href={`/#${s.slug}`} className="transition-colors hover:text-white">{s.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={heading}>Company</h2>
          <ul className="mt-5 space-y-3 text-body">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-white">{l.label}</a>
              </li>
            ))}
            <li><Link href="/privacy-policy" className="transition-colors hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms-and-conditions" className="transition-colors hover:text-white">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div>
          <h2 className={heading}>Get in touch</h2>
          <ul className="mt-5 space-y-3 text-body">
            {site.phones.map((p) => (
              <li key={p}>
                <a href={telHref(p)} className="font-display text-lg font-semibold text-white hover:text-red-300">{formatPhone(p)}</a>
              </li>
            ))}
            <li className="break-all">
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-white">{site.email}</a>
            </li>
            <li>{fullAddress}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-6 text-sm sm:flex-row sm:justify-between">
          <p>© 2026 {site.name}. All rights reserved.</p>
          <p>GSTIN: {site.gst}</p>
        </div>
      </div>
    </footer>
  );
}
