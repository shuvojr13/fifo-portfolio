/** Shared FIFO SOLUTIONS portfolio — used across home, work, service & crafts */

export type CraftCategory = "web" | "graphic" | "illustration";

export type PortfolioProject = {
  id: string;
  category: CraftCategory;
  index: string;
  year: string;
  tag: string;
  title: string;
  description: string;
  meta: string;
  alt: string;
  src: string;
  tags: string[];
  offset?: boolean;
};

export type CraftDiscipline = {
  num: string;
  name: string;
  clipId: string;
  image: string;
  label: string;
  title: string;
  description: string;
  items: string[];
};

/** Practice imagery — digital / identity / illustration */
export const craftImages = {
  digital:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  identity:
    "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=1200&q=80",
  illustration:
    "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1200&q=80",
} as const;

/** Full archive — work page + home featured subset */
export const portfolioProjects: PortfolioProject[] = [
  {
    id: "harbor-ledger",
    category: "web",
    index: "01 / 06",
    year: "2024",
    tag: "Web & Product",
    title: "Harbor Ledger",
    description:
      "A calm financial operations dashboard for a Zurich wealth studio—fast reporting, accessible charts, and a system that stays clear under dense data.",
    meta: "Next.js • Design System",
    alt: "Clean analytics dashboard on a laptop in a bright studio workspace",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tags: ["Product UI", "Design Tokens", "Accessibility"],
    offset: false,
  },
  {
    id: "kinfolk-roast",
    category: "graphic",
    index: "02 / 06",
    year: "2024",
    tag: "Identity & Packaging",
    title: "Kinfolk Roast Co.",
    description:
      "Complete visual identity and tactile packaging for a single-origin coffee collective—hand-lettered marks, debossed cotton stock, and quiet indigo accents.",
    meta: "Brand System • Print",
    alt: "Artisan coffee packaging and cups on a linen table with soft morning light",
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    tags: ["Identity", "Packaging", "Typography"],
    offset: true,
  },
  {
    id: "solace-journal",
    category: "web",
    index: "03 / 06",
    year: "2024",
    tag: "iOS & Web App",
    title: "Solace Journal",
    description:
      "A meditative daily writing companion with zero streaks and offline-first sync—built for emotional clarity, not engagement metrics.",
    meta: "Product Design • Full-Stack",
    alt: "Minimal smartphone showing a calm journaling app beside a ceramic cup",
    src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    tags: ["Mobile", "UX", "SwiftUI / Web"],
    offset: false,
  },
  {
    id: "botanica-guides",
    category: "illustration",
    index: "04 / 06",
    year: "2023",
    tag: "Editorial Illustration",
    title: "Botanica Field Guides",
    description:
      "Fifty-two hand-drawn plant studies and seasonal maps for a civic botanical garden—exhibition catalogs, wayfinding, and archival signage.",
    meta: "Ink • Wayfinding Print",
    alt: "Hand-drawn botanical illustrations of ferns and blossoms on paper",
    src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80",
    tags: ["Illustration", "Editorial", "Print"],
    offset: true,
  },
  {
    id: "archipelago-press",
    category: "graphic",
    index: "05 / 06",
    year: "2023",
    tag: "Editorial Design",
    title: "Archipelago Press",
    description:
      "Clothbound monograph and exhibition catalog documenting coastal architecture—Swiss grid discipline, warm cotton rag, charcoal on ivory.",
    meta: "Publication • Lithography",
    alt: "Open hardcover architectural monograph with refined typography",
    src: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80",
    tags: ["Editorial Grid", "Print", "Type"],
    offset: false,
  },
  {
    id: "aura-living",
    category: "web",
    index: "06 / 06",
    year: "2023",
    tag: "E-Commerce Experience",
    title: "Aura Living",
    description:
      "Headless storefront for an architectural home-objects collective—instant loads, frictionless checkout, and editorial room staging.",
    meta: "Commerce • Art Direction",
    alt: "Serene homeware interior with ceramic vase and oak furniture",
    src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
    tags: ["Headless Commerce", "UX", "Art Direction"],
    offset: true,
  },
];

/** Home featured strip — four related case studies */
export const featuredProjects = portfolioProjects.filter((p) =>
  ["kinfolk-roast", "solace-journal", "botanica-guides", "aura-living"].includes(
    p.id,
  ),
);

/** Crafts interactor + services practices */
export const craftDisciplines: CraftDiscipline[] = [
  {
    num: "01",
    name: "Digital Craft",
    clipId: "clip-original",
    image: craftImages.digital,
    label: "DIGITAL",
    title: "Web & App Development",
    description:
      "Quiet code architecture, lightning-fast rendering, and accessible interfaces. Custom web platforms and mobile apps built to age gracefully—see Harbor Ledger, Solace Journal, and Aura Living.",
    items: [
      "Semantic Web Engineering",
      "Mobile Native Craft (iOS & Android)",
      "Performance & Accessibility (WCAG)",
    ],
  },
  {
    num: "02",
    name: "Graphic Design",
    clipId: "clip-hexagons",
    image: craftImages.identity,
    label: "IDENTITY",
    title: "Graphic Design & Brand",
    description:
      "Timeless identities, editorial publications, and tactile packaging. Work like Kinfolk Roast Co. and Archipelago Press establishes presence in print and pixels.",
    items: [
      "Brand Systems & Guidelines",
      "Editorial & Catalog Design",
      "Packaging & Print Ephemera",
    ],
  },
  {
    num: "03",
    name: "Studio Art",
    clipId: "clip-pixels",
    image: craftImages.illustration,
    label: "NARRATIVE",
    title: "Illustration & Visual Art",
    description:
      "Hand-rendered storytelling, icon systems, and editorial artwork—Botanica Field Guides and custom suites that bring warmth to digital and print.",
    items: [
      "Editorial & Cover Art",
      "Custom Icon Systems",
      "Spot Drawings & Empty States",
    ],
  },
];

export const craftMenuItems = craftDisciplines.map(
  ({ num, name, clipId, image }) => ({ num, name, clipId, image }),
);

export const testimonial = {
  quote:
    "Collaborating with FIFO SOLUTIONS felt like stepping into an unhurried sanctuary. They translated our quiet philosophy into a visual language of profound poise and precision.",
  name: "Elena Lindqvist",
  role: "Founder & Creative Director, Kinfolk Roast Co. • Kyoto & Stockholm",
} as const;
