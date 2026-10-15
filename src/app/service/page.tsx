import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Brush,
  Ear,
  Pencil,
  BadgeCheck,
  SlidersHorizontal,
} from "lucide-react";
import { FaqAccordion } from "@/components/faq-accordion";
import {
  MotionDiv,
  MotionItem,
  MotionSection,
  MotionStagger,
} from "@/components/motion";
import { craftDisciplines } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Services — FIFO SOLUTIONS",
  description:
    "Focused craft across web & mobile development, graphic design, and custom illustration.",
};

const highlights = [
  {
    label: "Scope",
    title: "End-to-End",
    description: "From nascent pencil sketches to shipped applications.",
  },
  {
    label: "Engagement",
    title: "Dedicated Team",
    description:
      "Direct access to principal practitioners without account layers.",
  },
  {
    label: "Pace",
    title: "Deliberate",
    description: "Careful iterations guided by longevity and restraint.",
  },
] as const;

const practiceExtras = [
  {
    footer: "cadence" as const,
    caption: "Interfaces shaped for Harbor Ledger, Solace Journal & Aura Living",
    reverse: false,
    extraItems: [
      "Next.js & Modern Frameworks",
      "Design Systems & Tokens",
      "Fluid Kinetic Micro-interactions",
    ],
  },
  {
    footer: "formats" as const,
    caption: "Systems behind Kinfolk Roast Co. & Archipelago Press",
    reverse: true,
    extraItems: [
      "Physical Packaging & Unboxing",
      "Printed Ephemera & Collateral",
      "Comprehensive Brand Books",
    ],
  },
  {
    footer: "medium" as const,
    caption: "The hand behind Botanica Field Guides and custom icon suites",
    reverse: false,
    extraItems: [
      "Spot Drawings & Empty States",
      "Dustjackets & Publication Covers",
      "Interactive SVG Assets",
    ],
  },
] as const;

const practices = craftDisciplines.map((craft, i) => {
  const extra = practiceExtras[i]!;
  return {
    badge: `${craft.num} / ${craft.name}`,
    title: craft.title,
    description: craft.description,
    items: [...craft.items, ...extra.extraItems],
    footer: extra.footer,
    image: {
      src: craft.image,
      alt: `${craft.title} — FIFO SOLUTIONS practice`,
      caption: extra.caption,
    },
    reverse: extra.reverse,
  };
});

const journey = [
  {
    step: "01",
    title: "Listen & Research",
    description:
      "We immerse ourselves in your context, constraints, and core purpose through intentional conversations and quiet study.",
    icon: Ear,
    note: "No assumptions",
  },
  {
    step: "02",
    title: "Sketch & Conceive",
    description:
      "Forming structural logic, exploring spatial composition, and sketching core concepts on paper before entering digital canvas.",
    icon: Pencil,
    note: "Low-fidelity clarity",
  },
  {
    step: "03",
    title: "Craft & Refine",
    description:
      "Building the final artifact. Precise typographic setting, functional engineering, and meticulous detailing.",
    icon: SlidersHorizontal,
    note: "Iterative polish",
  },
  {
    step: "04",
    title: "Deliver & Support",
    description:
      "Seamless handoff with immaculate source files, documentation, and ongoing partnership to ensure effortless longevity.",
    icon: BadgeCheck,
    note: "Full ownership",
  },
] as const;

function PracticeFooter({ type }: { type: "cadence" | "formats" | "medium" }) {
  if (type === "cadence") {
    return (
      <div className="bg-surface-container-low rounded-xl p-5">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-label-md text-on-surface font-medium">
            Standard Release Cadence
          </span>
          <span className="text-caption text-secondary">
            6 to 10 Weeks Average
          </span>
        </div>
        <div className="bg-surface-container h-1.5 w-full overflow-hidden rounded-full">
          <div className="bg-primary-container h-full w-4/5 rounded-full" />
        </div>
      </div>
    );
  }

  if (type === "formats") {
    return (
      <div className="bg-surface-container-low flex items-center justify-between rounded-xl p-5">
        <div className="flex items-center gap-3">
          <BookOpen
            className="text-primary-container size-5 shrink-0"
            strokeWidth={1.5}
          />
          <div>
            <p className="text-label-md text-on-surface">Deliverable Formats</p>
            <p className="text-caption text-on-surface-variant">
              Figma libraries, vector archives, print-ready CMYK PDFs
            </p>
          </div>
        </div>
        <span className="text-label-sm text-primary-container shrink-0 font-semibold">
          Lossless Vector
        </span>
      </div>
    );
  }

  return (
    <div className="bg-surface-container-low flex items-center justify-between rounded-xl p-5">
      <div className="flex items-center gap-3">
        <Brush
          className="text-primary-container size-5 shrink-0"
          strokeWidth={1.5}
        />
        <div>
          <p className="text-label-md text-on-surface">Artistic Medium</p>
          <p className="text-caption text-on-surface-variant">
            Archival ink sketches transposed to scalable SVG
          </p>
        </div>
      </div>
      <span className="text-label-sm text-primary-container shrink-0 font-semibold">
        100% Original
      </span>
    </div>
  );
}

export default function ServicePage() {
  return (
    <div className="flex w-full flex-col">
      {/* Intro */}
      <MotionSection className="relative mx-auto w-full max-w-7xl px-margin-desktop pt-12 pb-24 md:py-28">
        <MotionDiv className="flex max-w-3xl flex-col">
          <div className="mb-6 inline-flex items-center gap-space-xs">
            <span className="bg-primary-container h-1.5 w-1.5 rounded-full" />
            <span className="text-label-sm text-secondary font-medium tracking-widest uppercase">
              Practices & Capabilities
            </span>
          </div>
          <h1 className="text-display-lg text-on-surface mb-6 tracking-tight">
            Our Services
          </h1>
          <p className="text-body-lg text-on-surface-variant leading-relaxed font-light">
            Focused craft across three core disciplines. We build things that
            feel natural, honest, and enduring for institutions, independent
            founders, and considerate brands.
          </p>
        </MotionDiv>

        <MotionStagger
          delay={0.1}
          className="mt-16 grid grid-cols-1 gap-space-lg md:grid-cols-3"
        >
          {highlights.map((item) => (
            <MotionItem
              key={item.label}
              className="bg-surface-container-lowest flex flex-col justify-between rounded-xl p-6 shadow-sm"
            >
              <span className="text-caption text-secondary mb-2 tracking-wider uppercase">
                {item.label}
              </span>
              <p className="text-headline-md text-on-surface">{item.title}</p>
              <span className="text-body-md text-on-surface-variant mt-1">
                {item.description}
              </span>
            </MotionItem>
          ))}
        </MotionStagger>
      </MotionSection>

      {/* Practice sections */}
      <section className="mx-auto w-full max-w-7xl space-y-28 px-margin-desktop pb-32">
        {practices.map((practice) => (
          <MotionDiv
            key={practice.badge}
            className="grid grid-cols-1 items-center gap-gutter-desktop lg:grid-cols-12"
          >
            <div
              className={
                practice.reverse
                  ? "flex flex-col justify-center pl-0 lg:col-span-6 lg:order-2 lg:pl-8"
                  : "flex flex-col justify-center pr-0 lg:col-span-6 lg:pr-8"
              }
            >
              <div className="mb-4 flex items-center gap-space-sm">
                <span className="text-label-sm text-primary-container bg-secondary-container/50 rounded-full px-3 py-1">
                  {practice.badge}
                </span>
              </div>
              <h2 className="text-headline-lg text-on-surface mb-4 tracking-tight">
                {practice.title}
              </h2>
              <p className="text-body-lg text-on-surface-variant mb-6 leading-relaxed">
                {practice.description}
              </p>
              <div className="mb-8 grid grid-cols-2 gap-x-4 gap-y-3">
                {practice.items.map((item) => (
                  <div
                    key={item}
                    className="text-on-surface-variant flex items-center gap-2"
                  >
                    <span className="bg-primary-container h-1.5 w-1.5 shrink-0 rounded-full" />
                    <span className="text-body-md">{item}</span>
                  </div>
                ))}
              </div>
              <PracticeFooter type={practice.footer} />
            </div>

            <div
              className={
                practice.reverse
                  ? "lg:col-span-6 lg:order-1"
                  : "lg:col-span-6"
              }
            >
              <div className="bg-surface-container-high group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md">
                <Image
                  src={practice.image.src}
                  alt={practice.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent p-6">
                  <span className="text-caption text-on-surface-variant bg-surface/90 rounded-md px-3 py-1.5 tracking-wider uppercase shadow-sm backdrop-blur-md">
                    {practice.image.caption}
                  </span>
                </div>
              </div>
            </div>
          </MotionDiv>
        ))}
      </section>

      {/* Journey */}
      <MotionSection className="bg-surface-container-low my-8 w-full py-24">
        <div className="mx-auto max-w-7xl px-margin-desktop">
          <MotionDiv className="mb-16 max-w-2xl">
            <span className="text-label-sm text-secondary mb-3 block font-medium tracking-widest uppercase">
              Our Way of Working
            </span>
            <h2 className="text-headline-lg text-on-surface mb-4 tracking-tight">
              A Quiet, Four-Step Journey
            </h2>
            <p className="text-body-lg text-on-surface-variant">
              We operate without bureaucratic friction. Our approach is direct,
              open, and respectful of your time.
            </p>
          </MotionDiv>

          <MotionStagger className="grid grid-cols-1 gap-gutter-desktop md:grid-cols-2 lg:grid-cols-4">
            {journey.map((step) => {
              const Icon = step.icon;
              return (
                <MotionItem
                  key={step.step}
                  className="bg-surface-container-lowest flex h-full flex-col justify-between rounded-xl p-8 shadow-sm"
                >
                  <div>
                    <span className="text-display-lg text-primary-container/20 mb-4 block font-bold">
                      {step.step}
                    </span>
                    <h3 className="text-headline-md text-on-surface mb-2">
                      {step.title}
                    </h3>
                    <p className="text-body-md text-on-surface-variant leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className="text-secondary mt-8 flex items-center gap-2 pt-4">
                    <Icon className="size-[18px]" strokeWidth={1.75} />
                    <span className="text-caption">{step.note}</span>
                  </div>
                </MotionItem>
              );
            })}
          </MotionStagger>
        </div>
      </MotionSection>

      {/* FAQ */}
      <MotionSection className="mx-auto w-full max-w-4xl px-margin-desktop py-20">
        <MotionDiv className="mb-16 text-center">
          <span className="text-label-sm text-secondary mb-2 block font-medium tracking-widest uppercase">
            Inquiries & Answers
          </span>
          <h2 className="text-headline-lg text-on-surface">
            Frequently Asked Questions
          </h2>
        </MotionDiv>
        <MotionDiv delay={0.1}>
          <FaqAccordion />
        </MotionDiv>
      </MotionSection>

      {/* CTA */}
      <MotionSection className="mx-auto w-full max-w-7xl px-margin-desktop pt-8 pb-24">
        <MotionDiv className="bg-surface-container-lowest relative flex flex-col items-start justify-between gap-8 overflow-hidden rounded-2xl p-10 shadow-md md:flex-row md:items-center md:p-16">
          <div className="max-w-xl">
            <span className="text-label-sm text-primary-container mb-2 block font-semibold tracking-widest uppercase">
              Begin an Engagement
            </span>
            <h2 className="text-headline-lg text-on-surface mb-3 tracking-tight">
              Have a project in mind?
            </h2>
            <p className="text-body-lg text-on-surface-variant font-light">
              We take on a limited number of commissions each quarter to
              preserve attention and craft. Let us discuss your goals in
              confidence.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="bg-primary-container text-on-primary text-label-md hover:bg-primary inline-flex h-12 items-center justify-center rounded-full px-space-lg shadow-sm transition-colors"
            >
              Start a Conversation
            </Link>
            <Link
              href="/work"
              className="bg-surface-container text-on-surface text-label-md hover:bg-surface-container-high inline-flex h-12 items-center justify-center rounded-full px-space-lg transition-colors"
            >
              View Selected Work
            </Link>
          </div>
        </MotionDiv>
      </MotionSection>
    </div>
  );
}
