import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  Handshake,
  HeartHandshake,
  Layers,
  Sparkles,
  Target,
} from "lucide-react";
import {
  MotionDiv,
  MotionItem,
  MotionSection,
  MotionStagger,
} from "@/components/motion";

export const metadata: Metadata = {
  title: "About — FIFO SOLUTIONS",
  description:
    "Learn who FIFO SOLUTIONS is, how we work, and whether we are the right partner for your next digital or brand project.",
};

const values = [
  {
    icon: Target,
    title: "Clarity first",
    body: "We start with purpose, audience, and constraints—then design only what serves them. No decorative noise.",
  },
  {
    icon: Layers,
    title: "Craft that lasts",
    body: "Clean systems, maintainable code, and visual languages built to age well past launch week trends.",
  },
  {
    icon: Handshake,
    title: "Direct partnership",
    body: "You work with the people doing the work. No account layers, no diluted feedback loops.",
  },
  {
    icon: HeartHandshake,
    title: "Respectful pace",
    body: "We take fewer clients so each engagement gets focused attention, honest timelines, and careful iteration.",
  },
] as const;

const timeline = [
  {
    year: "2018",
    title: "Studio founded",
    body: "Started as a small practice focused on thoughtful product interfaces and identity systems.",
  },
  {
    year: "2020",
    title: "Cross-disciplinary growth",
    body: "Expanded into illustration and print craft so brands could stay coherent from screen to packaging.",
  },
  {
    year: "2023",
    title: "Remote-first, global clients",
    body: "Built a quiet operating rhythm across Zurich & Kyoto timezones for founders and cultural institutions.",
  },
  {
    year: "2025",
    title: "FIFO SOLUTIONS today",
    body: "Still selective. Still hands-on. Shipping digital products, identities, and visual systems that endure.",
  },
] as const;

const fitYes = [
  "You value clarity, accessibility, and long-term maintainability",
  "You want a small senior team, not a large agency machine",
  "Your project needs both strategy and careful execution",
  "You can share context early and collaborate in focused reviews",
] as const;

const fitNo = [
  "You need same-week delivery with undefined scope",
  "You want trend-chasing visuals over lasting systems",
  "You prefer many middlemen between decision-makers and makers",
  "You need ongoing high-volume production with little direction",
] as const;

const stats = [
  { value: "7+", label: "Years of practice" },
  { value: "3", label: "Core disciplines" },
  { value: "2", label: "Commissions / quarter" },
  { value: "48h", label: "Typical reply window" },
] as const;

export default function AboutPage() {
  return (
    <div className="flex w-full flex-col">
      {/* Hero */}
      <MotionSection className="relative mx-auto w-full max-w-7xl overflow-hidden px-margin-desktop pt-12 pb-20 md:pt-20 md:pb-28">
        <div className="from-primary-fixed/20 pointer-events-none absolute -top-24 left-1/2 h-[280px] w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-b to-transparent blur-3xl" />
        <MotionDiv className="relative max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-space-xs">
            <span className="bg-primary-container h-1.5 w-1.5 rounded-full" />
            <span className="text-label-sm text-secondary font-medium tracking-widest uppercase">
              About the Studio
            </span>
          </div>
          <h1 className="text-display-lg text-on-surface tracking-tight">
            A quiet studio for thoughtful digital & brand work.
          </h1>
          <p className="text-body-lg text-on-surface-variant mt-6 max-w-2xl leading-relaxed font-light">
            FIFO SOLUTIONS is an independent design and engineering practice. We
            help founders, institutions, and considerate brands build products,
            identities, and visual systems that feel clear, human, and built to
            last.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/work"
              className="bg-primary-container text-on-primary text-label-md hover:bg-primary inline-flex h-12 items-center gap-2 rounded-full px-6 shadow-sm transition-colors"
            >
              See our work
              <ArrowRight className="size-4" strokeWidth={1.75} />
            </Link>
            <Link
              href="/contact"
              className="bg-surface-container-lowest text-on-surface text-label-md hover:bg-surface-container inline-flex h-12 items-center rounded-full px-6 shadow-sm transition-colors"
            >
              Start a conversation
            </Link>
          </div>
        </MotionDiv>

        <MotionStagger
          delay={0.15}
          className="relative mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
        >
          {stats.map((stat) => (
            <MotionItem
              key={stat.label}
              className="bg-surface-container-lowest rounded-xl p-5 shadow-sm md:p-6"
            >
              <p className="text-headline-lg text-primary-container">
                {stat.value}
              </p>
              <p className="text-caption text-on-surface-variant mt-1">
                {stat.label}
              </p>
            </MotionItem>
          ))}
        </MotionStagger>
      </MotionSection>

      {/* Story */}
      <MotionSection className="bg-surface-container-low w-full py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 px-margin-desktop lg:grid-cols-12">
          <MotionDiv className="lg:col-span-5">
            <span className="text-label-sm text-secondary font-medium tracking-widest uppercase">
              Our story
            </span>
            <h2 className="text-headline-lg text-on-surface mt-3 tracking-tight">
              Built for depth, not volume.
            </h2>
          </MotionDiv>
          <MotionDiv
            delay={0.1}
            className="text-body-lg text-on-surface-variant space-y-5 leading-relaxed lg:col-span-7"
          >
            <p>
              We founded FIFO SOLUTIONS because too much digital work optimizes
              for speed and spectacle, then becomes hard to maintain, hard to
              use, and hard to trust. We wanted the opposite: calm process,
              durable craft, and outcomes people can live with for years.
            </p>
            <p>
              Today we work across web &amp; mobile product development, brand
              identity, and custom illustration—keeping a small roster so every
              project gets senior attention from brief to handoff.
            </p>
            <p>
              If you are looking for a partner who will ask sharp questions,
              protect clarity, and ship with care, you are in the right place.
            </p>
          </MotionDiv>
        </div>
      </MotionSection>

      {/* Values */}
      <MotionSection className="mx-auto w-full max-w-7xl px-margin-desktop py-24 md:py-28">
        <MotionDiv className="mb-14 max-w-2xl">
          <span className="text-label-sm text-secondary font-medium tracking-widest uppercase">
            What guides us
          </span>
          <h2 className="text-headline-lg text-on-surface mt-3 tracking-tight">
            Principles you will feel in the work.
          </h2>
          <p className="text-body-lg text-on-surface-variant mt-4 leading-relaxed">
            These are not slogans. They shape how we scope, design, build, and
            communicate—every week of an engagement.
          </p>
        </MotionDiv>
        <MotionStagger className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <MotionItem
                key={value.title}
                className="bg-surface-container-lowest flex gap-5 rounded-xl p-7 shadow-sm"
              >
                <div className="bg-secondary-container text-primary-container flex h-11 w-11 shrink-0 items-center justify-center rounded-full">
                  <Icon className="size-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-headline-md text-on-surface">
                    {value.title}
                  </h3>
                  <p className="text-body-md text-on-surface-variant mt-2 leading-relaxed">
                    {value.body}
                  </p>
                </div>
              </MotionItem>
            );
          })}
        </MotionStagger>
      </MotionSection>

      {/* Timeline */}
      <MotionSection className="bg-surface-container-low w-full py-24">
        <div className="mx-auto max-w-7xl px-margin-desktop">
          <MotionDiv className="mb-14 max-w-2xl">
            <span className="text-label-sm text-secondary font-medium tracking-widest uppercase">
              Studio timeline
            </span>
            <h2 className="text-headline-lg text-on-surface mt-3 tracking-tight">
              How we got here.
            </h2>
          </MotionDiv>
          <MotionStagger className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {timeline.map((item) => (
              <MotionItem
                key={item.year}
                className="bg-surface-container-lowest flex h-full flex-col rounded-xl p-6 shadow-sm"
              >
                <span className="text-caption text-primary-container font-semibold tracking-wider">
                  {item.year}
                </span>
                <h3 className="text-headline-md text-on-surface mt-3">
                  {item.title}
                </h3>
                <p className="text-body-md text-on-surface-variant mt-2 leading-relaxed">
                  {item.body}
                </p>
              </MotionItem>
            ))}
          </MotionStagger>
        </div>
      </MotionSection>

      {/* Fit check */}
      <MotionSection className="mx-auto w-full max-w-7xl px-margin-desktop py-24 md:py-28">
        <MotionDiv className="mb-14 max-w-2xl">
          <div className="mb-3 inline-flex items-center gap-2">
            <Compass
              className="text-primary-container size-5"
              strokeWidth={1.5}
            />
            <span className="text-label-sm text-secondary font-medium tracking-widest uppercase">
              Partnership fit
            </span>
          </div>
          <h2 className="text-headline-lg text-on-surface tracking-tight">
            Are we the right studio for you?
          </h2>
          <p className="text-body-lg text-on-surface-variant mt-4 leading-relaxed">
            A good fit saves everyone time. Use this as a quick check before you
            reach out—we are happy to recommend another partner when we are not
            the best match.
          </p>
        </MotionDiv>

        <MotionStagger className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <MotionItem className="bg-surface-container-lowest rounded-2xl p-8 shadow-sm">
            <h3 className="text-headline-md text-on-surface flex items-center gap-2">
              <Sparkles
                className="text-primary-container size-5"
                strokeWidth={1.5}
              />
              Great fit when…
            </h3>
            <ul className="mt-6 space-y-3">
              {fitYes.map((item) => (
                <li
                  key={item}
                  className="text-body-md text-on-surface-variant flex items-start gap-3 leading-relaxed"
                >
                  <span className="bg-primary-container mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </MotionItem>
          <MotionItem className="bg-surface-container-low rounded-2xl p-8">
            <h3 className="text-headline-md text-on-surface">Less ideal when…</h3>
            <ul className="mt-6 space-y-3">
              {fitNo.map((item) => (
                <li
                  key={item}
                  className="text-body-md text-on-surface-variant flex items-start gap-3 leading-relaxed"
                >
                  <span className="bg-outline mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </MotionItem>
        </MotionStagger>
      </MotionSection>

      {/* CTA */}
      <MotionSection className="mx-auto w-full max-w-7xl px-margin-desktop pb-24">
        <MotionDiv className="bg-surface-container-lowest flex flex-col items-start justify-between gap-8 rounded-2xl p-10 shadow-md md:flex-row md:items-center md:p-16">
          <div className="max-w-xl">
            <span className="text-label-sm text-primary-container mb-2 block font-semibold tracking-widest uppercase">
              Next step
            </span>
            <h2 className="text-headline-lg text-on-surface tracking-tight">
              Ready to talk through a project?
            </h2>
            <p className="text-body-lg text-on-surface-variant mt-3 font-light leading-relaxed">
              Tell us what you are building, your timeline, and what success
              looks like. We reply within two business days.
            </p>
          </div>
          <div className="flex w-full shrink-0 flex-col gap-3 sm:flex-row md:w-auto">
            <Link
              href="/contact"
              className="bg-primary-container text-on-primary text-label-md hover:bg-primary inline-flex h-12 items-center justify-center rounded-full px-8 shadow-sm transition-colors"
            >
              Contact us
            </Link>
            <Link
              href="/service"
              className="bg-surface-container text-on-surface text-label-md hover:bg-surface-container-high inline-flex h-12 items-center justify-center rounded-full px-8 transition-colors"
            >
              View services
            </Link>
          </div>
        </MotionDiv>
      </MotionSection>
    </div>
  );
}
