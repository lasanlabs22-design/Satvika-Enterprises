import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const areas = [
  { title: "Terraces & roofs", text: "The first line of defence against monsoon rain.", image: "/images/area-terrace.jpg", alt: "Team standing on a large concrete roof slab" },
  { title: "External walls", text: "Seepage through cracks and porous plaster.", image: "/images/area-walls.jpg", alt: "Apartment building facade with balconies" },
  { title: "Bathrooms", text: "Floors, wall bases and pipe joints.", image: "/images/area-bathroom.jpg", alt: "Modern bathroom with a bathtub and dark fittings" },
  { title: "Kitchens", text: "Sink walls, tile joints and floors.", image: "/images/area-kitchen.jpg", alt: "Bright white kitchen with tiled walls" },
  { title: "Interiors", text: "Damp patches, peeling paint and fresh finishes.", image: "/images/area-interior.jpg", alt: "Freshly finished living room interior" },
  { title: "Pipes & water tanks", text: "Tanks, sumps and pipe penetrations.", image: "/images/area-pipes.jpg", alt: "Water pipes running along a brick wall" },
];

export default function Areas() {
  return (
    <section className="screen bg-white">
      <div className="container-x">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading index="03" eyebrow="Where we work" title="Every place water can get through" />
          <Reveal variant="blur" delay={300}>
            <p className="max-w-md text-lead text-slate-600">
              From the roof down to the plumbing, we treat independent houses, apartments and buildings of every size.
            </p>
          </Reveal>
        </div>

        <ul className="mt-[clamp(2rem,5vh,3.5rem)] grid grid-cols-2 gap-[clamp(0.5rem,1vw,1.25rem)] md:grid-cols-3">
          {areas.map((a, i) => (
            <li key={a.title}>
              <Reveal variant="wipe" delay={(i % 3) * 180 + Math.floor(i / 3) * 120}>
                <div className="group relative h-[clamp(9rem,23vh,20rem)] overflow-hidden">
                  <Image
                    src={a.image}
                    alt={a.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 50vw"
                    className="object-cover transition-transform duration-[1800ms] ease-(--ease-out-expo) group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent transition-opacity duration-700 group-hover:opacity-90" />
                  <div className="absolute inset-x-0 bottom-0 p-[clamp(1rem,1.8vw,2rem)] text-white">
                    <p className="font-display text-xs text-white/60 sm:text-sm">0{i + 1}</p>
                    <h3 className="font-display text-[clamp(1.05rem,1.6vw,1.9rem)] font-bold leading-tight">{a.title}</h3>
                    <p className="mt-1 hidden max-w-xs text-[clamp(0.85rem,0.9vw,1rem)] text-white/75 sm:block">{a.text}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
