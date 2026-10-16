import type { ReactNode } from "react";
import Reveal from "./Reveal";

// Editorial section label ("01 ── About us") followed by a large heading.
export default function SectionHeading({
  index,
  eyebrow,
  title,
  intro,
  light = false,
  center = false,
  className = "",
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  light?: boolean;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={`${center ? "mx-auto max-w-4xl text-center" : "max-w-3xl"} ${className}`}>
      <Reveal variant="blur">
        <p
          className={`flex items-center gap-4 font-display text-eyebrow ${center ? "justify-center" : ""} ${
            light ? "text-white/70" : "text-slate-500"
          }`}
        >
          <span className="text-brand-red">{index}</span>
          <span aria-hidden="true" className="h-px w-12 bg-brand-red" />
          {eyebrow}
        </p>
      </Reveal>
      <Reveal variant="up" delay={120}>
        <h2 className={`mt-5 font-display text-h2 font-bold ${light ? "text-white" : "text-navy-900"}`}>{title}</h2>
      </Reveal>
      {intro && (
        <Reveal variant="up" delay={240}>
          <p className={`mt-6 text-lead ${light ? "text-white/75" : "text-slate-600"}`}>{intro}</p>
        </Reveal>
      )}
    </div>
  );
}
