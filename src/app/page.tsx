import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Clock,
  Mail,
  MapPin,
  Quote,
} from "lucide-react";
import { HomeHero } from "@/components/home-hero";
import { ConnoisseurStackInteractor } from "@/components/ui/connoisseur-stack-interactor";
import {
  craftMenuItems,
  featuredProjects,
} from "@/content/portfolio";
import {
  MotionDiv,
  MotionItem,
  MotionSection,
  MotionStagger,
} from "@/components/motion";

const ethos = [
  {
    id: "01 / PURPOSE",
    title: "Clarity over complexity",
    body: "We reject noise and gratuitous decorative bloat.",
  },
  {
    id: "02 / HUMAN",
    title: "Authentic craft",
    body: "Shaped with intention, discernment, and care.",
  },
  {
    id: "03 / TIME",
    title: "Enduring longevity",
    body: "Built to endure well past transient industry trends.",
  },
] as const;

const reassurances = [
  "Human Craft",
  "Accessible Web",
  "Bespoke Typographics",
  "Pure Longevity",
] as const;

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <HomeHero />

      {/* Reassurance strip */}
      <MotionSection className="bg-surface border-b border-surface-container-high py-10">
        <MotionDiv className="text-caption text-on-surface-variant/70 mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-8 px-margin-desktop tracking-widest uppercase">
          {reassurances.map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              <span className="bg-primary-container h-1 w-1 rounded-full" />
              {item}
            </span>
          ))}
        </MotionDiv>
      </MotionSection>

      {/* Three Disciplines */}
      <MotionSection id="services" className="bg-surface-container-low w-full py-28">
        <div className="mx-auto max-w-6xl px-margin-desktop">
          <MotionDiv className="mb-12 flex flex-col justify-between gap-4 md:mb-16 md:flex-row md:items-end">
            <div>
              <span className="text-caption text-primary-container font-semibold tracking-widest uppercase">
                Our Studio Practice
              </span>
              <h2 className="text-headline-lg text-on-surface mt-2">
                Three quiet, dedicated crafts.
              </h2>
            </div>
            <p className="text-body-md text-on-surface-variant max-w-md">
              A coherent intersection of tactile graphic arts, nuanced digital
              product engineering, and bespoke visual narratives. Hover a craft
              to reveal its visual language.
            </p>
          </MotionDiv>

          <MotionDiv>
            <ConnoisseurStackInteractor items={craftMenuItems} />
          </MotionDiv>
        </div>
      </MotionSection>

      {/* Featured Works */}
      <MotionSection id="work" className="w-full py-28">
        <div className="mx-auto max-w-6xl px-margin-desktop">
          <MotionDiv className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="text-caption text-primary-container font-semibold tracking-widest uppercase">
                Selected Portfolio
              </span>
              <h2 className="text-headline-lg text-on-surface mt-2">
                Recent thoughtful creations.
              </h2>
            </div>
            <Link
              href="/work"
              className="text-label-md text-primary-container hover:text-primary group inline-flex items-center gap-2 transition-colors duration-200"
            >
              <span>Explore all archived work</span>
              <ArrowRight
                className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                strokeWidth={1.75}
              />
            </Link>
          </MotionDiv>

          <MotionStagger className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <MotionItem
                key={project.id}
                className="group bg-surface-container-lowest flex flex-col overflow-hidden rounded-xl shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <div className="bg-surface-container relative h-80 w-full overflow-hidden">
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-surface-container-lowest/90 text-on-surface text-caption rounded-full px-3 py-1 shadow-sm backdrop-blur-md">
                      {project.tag}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-between p-8">
                  <div>
                    <div className="text-caption text-on-surface-variant mb-2 flex items-center justify-between">
                      <span>{project.index}</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="text-headline-md text-on-surface group-hover:text-primary-container mb-2 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-body-md text-on-surface-variant leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center justify-between pt-4">
                    <span className="text-label-sm text-on-surface-variant">
                      {project.meta}
                    </span>
                    <ArrowUpRight
                      className="text-on-surface-variant group-hover:text-primary-container size-5 transition-all duration-200 group-hover:translate-x-1"
                      strokeWidth={1.75}
                    />
                  </div>
                </div>
              </MotionItem>
            ))}
          </MotionStagger>
        </div>
      </MotionSection>

      {/* Ethos */}
      <MotionSection
        id="about"
        className="bg-surface-container-low relative w-full overflow-hidden py-32"
      >
        <MotionDiv className="mx-auto flex max-w-4xl flex-col items-center px-margin-desktop text-center">
          <Quote
            className="text-primary-container/40 mb-8 size-10"
            strokeWidth={1.25}
          />
          <blockquote className="text-headline-lg text-on-surface max-w-3xl tracking-tight leading-relaxed">
            “Simplicity is the deliberate elimination of the unnecessary so the
            essential may speak.”
          </blockquote>
          <div className="mt-8 flex flex-col items-center">
            <span className="text-label-md text-on-surface font-semibold">
              FIFO Manifesto
            </span>
            <span className="text-caption text-on-surface-variant mt-1">
              Our guiding principle across every line of code, glyph, and hand
              sketch
            </span>
          </div>
          <MotionStagger className="mt-14 grid w-full max-w-2xl grid-cols-1 gap-8 text-left sm:grid-cols-3">
            {ethos.map((item) => (
              <MotionItem
                key={item.id}
                className="bg-surface-container-lowest rounded-lg p-6 shadow-sm"
              >
                <span className="text-caption text-primary-container font-semibold">
                  {item.id}
                </span>
                <p className="text-body-md text-on-surface mt-2 font-medium">
                  {item.title}
                </p>
                <p className="text-caption text-on-surface-variant mt-1">
                  {item.body}
                </p>
              </MotionItem>
            ))}
          </MotionStagger>
        </MotionDiv>
      </MotionSection>

      {/* CTA */}
      <MotionSection id="contact" className="relative w-full py-28">
        <div className="mx-auto max-w-4xl px-margin-desktop">
          <MotionDiv className="bg-surface-container-lowest flex flex-col items-start justify-between gap-10 rounded-2xl p-10 shadow-sm md:flex-row md:items-center md:p-16">
            <div className="max-w-xl">
              <div className="text-primary-container text-caption mb-3 inline-flex items-center gap-2 font-semibold tracking-wider uppercase">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                <span>Currently welcoming select clients for Autumn 2025</span>
              </div>
              <h2 className="text-headline-lg text-on-surface tracking-tight">
                Have an upcoming project in mind?
              </h2>
              <p className="text-body-lg text-on-surface-variant mt-3 leading-relaxed">
                Let&apos;s create something enduring together. We take on only
                three active commissions at a time to ensure complete focus and
                meticulous craft.
              </p>
              <div className="text-caption text-on-surface-variant mt-6 flex flex-wrap items-center gap-6">
                <span className="flex items-center gap-1.5">
                  <Clock className="size-4" strokeWidth={1.75} />
                  Typical response within 48h
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="size-4" strokeWidth={1.75} />
                  Based in Zurich & Kyoto
                </span>
              </div>
            </div>
            <div className="flex w-full flex-col gap-3 md:w-auto">
              <Link
                href="/contact"
                className="bg-primary-container text-on-primary text-label-md hover:bg-primary inline-flex h-12 items-center justify-center gap-2 rounded-lg px-8 shadow-sm transition-colors duration-200"
              >
                <span>Start a Conversation</span>
                <Mail className="size-[18px]" strokeWidth={1.75} />
              </Link>
              <Link
                href="/about"
                className="bg-surface-container text-on-surface text-label-md hover:bg-surface-container-high inline-flex h-12 items-center justify-center gap-2 rounded-lg px-8 transition-colors duration-200"
              >
                Learn About Our Studio
              </Link>
            </div>
          </MotionDiv>
        </div>
      </MotionSection>
    </div>
  );
}
