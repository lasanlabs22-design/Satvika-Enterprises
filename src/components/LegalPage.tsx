import type { ReactNode } from "react";

export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <section className="bg-navy-900 py-14 text-white sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-red-300">Legal</p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
          <p className="mt-4 text-white/70">Last updated: {updated}</p>
        </div>
      </section>
      <article className="mx-auto max-w-3xl px-4 py-14 text-[16px] leading-relaxed text-slate-700 sm:px-6 sm:py-20 [&_a]:font-medium [&_a]:text-navy-800 [&_a]:underline [&_a]:underline-offset-2 [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-navy-900 [&_li]:mt-1.5 [&_p]:mt-4 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-6">
        {children}
      </article>
    </>
  );
}
