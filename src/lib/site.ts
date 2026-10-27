// Single source of truth for business details. Contact details and services come from the business card.

export const site = {
  name: "Satvika Enterprises",
  url: "https://www.satvikaservices.com",
  tagline: "Waterproofing, painting & building repairs in Hyderabad",
  description:
    "Satvika Enterprises fixes leaking terraces, damp walls and seeping bathrooms in Hyderabad. Building and bathroom waterproofing, PU grouting, tile epoxy, painting and renovations using Dr. Fixit, Fosroc, MYK Laticrete and Asian Paints.",
  phones: ["7337004656", "8341416263"],
  // Number used for WhatsApp chats and enquiry form submissions.
  whatsapp: "7337004656",
  email: "satvikaenterprises1@gmail.com",
  gst: "36AUNPM8012D2ZN",
  address: {
    line1: "5-85/33, Sriramnagar Colony",
    line2: "Kistareddypet",
    city: "Hyderabad",
    state: "Telangana",
    pincode: "502319",
  },
  // Office pin, from the client's Google Maps link.
  geo: { lat: 17.5449181, lng: 78.2963486 },
} as const;

// All offices, from the letterhead. Shown in the footer.
export const offices = [
  {
    label: "Corporate Office",
    lines: ["6-1-360/2/8, Saifabad", "Khairtabad Back Side", "Hyderabad, Telangana - 500081"],
  },
  {
    label: "Regional Office",
    lines: ["Plot No. 84 & 85, PS Rao Nagar", "Dammaiguda, Medchal-Malkajgiri", "Hyderabad, Telangana - 500083"],
  },
  {
    label: "Regional Office",
    lines: ["LIG 496, Khokha Housing Board", "Bhilai, Durg", "Chhattisgarh - 490023"],
  },
  {
    label: "Regional Office",
    lines: ["5-85/33, Sri Ram Nagar Colony", "Kistareddypet", "Hyderabad, Telangana - 502319"],
  },
];

export const mapsLink =`https://www.google.com/maps?q=${site.geo.lat},${site.geo.lng}`;
export const mapsEmbed = `https://maps.google.com/maps?q=${site.geo.lat},${site.geo.lng}&z=16&output=embed`;

export const fullAddress = `${site.address.line1}, ${site.address.line2}, ${site.address.city} - ${site.address.pincode}`;

// "7337004656" -> "+91 73370 04656"
export const formatPhone = (n: string) => `+91 ${n.slice(0, 5)} ${n.slice(5)}`;
export const telHref = (n: string) => `tel:+91${n}`;
export const whatsappHref = (message?: string) =>
  `https://wa.me/91${site.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

export type Service = {
  slug: string;
  title: string;
  summary: string;
  intro: string;
  points: string[];
  steps: string[];
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "building-waterproofing",
    title: "Building Water Proofing",
    summary: "Terraces, roofs, sunshades and external walls sealed against monsoon seepage.",
    intro:
      "Most building leaks start at the top and the outside: terrace slabs, parapet joints, sunshades and cracked external plaster. Rain soaks in, travels through the concrete and shows up inside as damp patches, drips and peeling paint.",
    points: ["Terrace & roof slabs", "External wall dampness", "Sunshades & parapets", "Water tanks & sumps"],
    steps: [
      "Inspect terraces, joints and walls to find entry points",
      "Clean the surface, repair cracks and treat joints",
      "Apply a coating or membrane system suited to the surface",
      "Check the treated area and hand over",
    ],
    image: "/images/building-waterproofing.jpg",
    imageAlt: "Workers treating a concrete roof slab on a building site",
  },
  {
    slug: "bathroom-waterproofing",
    title: "Bathroom Water Proofing",
    summary: "Stop water leaking into the flat below and damp creeping up adjoining walls.",
    intro:
      "Bathroom leaks show up in the room next door or the flat below, usually through failed floor waterproofing, cracked tile joints or leaking pipe connections. Painting over the damp only hides it for a few weeks.",
    points: ["Leaks into lower floors", "Damp adjoining walls", "Pipe & drain joints", "Shower & floor areas"],
    steps: [
      "Find whether the leak is from the floor, joints or plumbing",
      "Open up only what is needed and treat pipe outlets",
      "Waterproof the floor, corners and wall bases",
      "Re-tile and seal the joints with epoxy grout",
    ],
    image: "/images/bathroom-waterproofing.jpg",
    imageAlt: "Modern bathroom with a glass shower enclosure and tiled walls",
  },
  {
    slug: "pu-grouting",
    title: "PU Grouting",
    summary: "Polyurethane injection that seals active leaks and cracks from the inside.",
    intro:
      "When water is actively pushing through a crack, surface coatings will not hold it back. PU grouting injects polyurethane resin into the crack under pressure. It reacts with the water, expands and seals the path from inside, without breaking open the structure.",
    points: ["Basements & lift pits", "Active water leaks", "Slab & wall cracks", "Water tanks"],
    steps: [
      "Map the cracks and the active leak points",
      "Drill and fix injection packers along the crack",
      "Inject PU resin under pressure until the crack is sealed",
      "Remove the packers and finish the surface",
    ],
    image: "/images/pu-grouting.jpg",
    imageAlt: "Technician in safety gear working with power tools",
  },
  {
    slug: "tiles-epoxy",
    title: "Tiles Epoxy",
    summary: "Stain-proof, waterproof epoxy grout that keeps water out from under your tiles.",
    intro:
      "Ordinary cement grout is porous. Over time it stains, cracks and lets water seep under the tiles, which loosens them and causes leaks. Epoxy grout is waterproof, resists stains, is easy to clean and keeps its colour.",
    points: ["Bathrooms & kitchens", "Floor & wall tiles", "Blackened grout lines", "Loose or hollow tiles"],
    steps: [
      "Rake out the old, damaged grout",
      "Clean and dry the joints thoroughly",
      "Fill with epoxy grout in your chosen colour",
      "Clean the tile faces and let it cure",
    ],
    image: "/images/tiles-epoxy.jpg",
    imageAlt: "White wall tiles with clean, even grout lines",
  },
  {
    slug: "painting",
    title: "Painting",
    summary: "Interior and exterior painting with proper preparation and a finish that lasts.",
    intro:
      "A good paint job is mostly preparation. We fix the cracks and damp first, so the new finish does not bubble or peel within a season. Then we paint with the right primer and coats for interior or exterior walls.",
    points: ["Interior & exterior", "Crack filling & putty", "Damp-resistant coats", "Texture & finishes"],
    steps: [
      "Check walls for damp and cracks, and treat them first",
      "Scrape, fill and sand the surface",
      "Apply a primer suited to the wall",
      "Apply the finish coats and clean up",
    ],
    image: "/images/painting.jpg",
    imageAlt: "Paint roller applying fresh blue paint to a wall",
  },
  {
    slug: "repairs-renovations",
    title: "Building Repairs & Renovations",
    summary: "Crack repairs, re-plastering and complete refreshes for tired buildings.",
    intro:
      "Older buildings need more than paint. We repair cracked and hollow plaster, damaged concrete and worn surfaces, and handle the waterproofing, tiling and painting that go with it, so one team takes care of the whole job.",
    points: ["Cracks & plaster repair", "Structural patchwork", "Concrete repairs", "Complete refreshes"],
    steps: [
      "Survey the building and list what needs repair",
      "Repair cracks, plaster and damaged concrete",
      "Waterproof and re-tile where needed",
      "Paint, finish and hand over",
    ],
    image: "/images/repairs-renovations.jpg",
    imageAlt: "Room under renovation with exposed brickwork and scaffolding",
  },
];

export const partners = [
  { name: "Dr. Fixit", logo: "/partners/dr-fixit.png", width: 284, height: 162 },
  { name: "Fosroc", logo: "/partners/fosroc.png", width: 154, height: 162 },
  { name: "MYK Laticrete", logo: "/partners/myk-laticrete.png", width: 196, height: 160 },
  { name: "Asian Paints", logo: "/partners/asian-paints.png", width: 204, height: 168 },
];

export const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "How it works" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];
