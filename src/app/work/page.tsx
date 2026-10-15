import type { Metadata } from "next";
import Link from "next/link";
import { Quote } from "lucide-react";
import { WorkGallery } from "@/components/work-gallery";
import {
  MotionDiv,
  MotionItem,
  MotionSection,
  MotionStagger,
} from "@/components/motion";
import { portfolioProjects, testimonial } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Work — FIFO SOLUTIONS",
  description:
    "A disciplined catalog of digital products, visual systems, and tactile illustrations.",
};

const principles = [
  {
    id: "01",
    title: "Reductionist Clarity",
    body: "Stripping decorative excess until only the purest message and tactile essence endure.",
  },
  {
    id: "02",
    title: "Enduring Craft",
    body: "Designs engineered to feel as timeless in ten years as they appear upon launch.",
  },
  {
    id: "03",
    title: "Harmonious Rhythm",
    body: "A measured cadence of clear milestones without chaotic agency urgency.",
  },
] as const;

export default function WorkPage() {
  return (
    <div className="flex w-full flex-col">
      {/* Intro */}
      <MotionSection className="mx-auto w-full max-w-7xl px-margin-desktop pt-12 pb-16 md:pt-20 md:pb-24">
        <MotionDiv className="flex flex-col justify-between gap-space-lg md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="text-secondary mb-space-sm flex items-center gap-space-xs">
              <span className="bg-primary-container h-1.5 w-1.5 rounded-full" />
              <span className="text-caption text-on-surface-variant font-medium tracking-widest uppercase">
                Selected Works • 2022–2025
              </span>
            </div>
            <h1 className="text-display-lg text-on-surface tracking-tight font-semibold">
              Quiet form, purposeful craft.
            </h1>
            <p className="text-body-lg text-on-surface-variant mt-space-md max-w-xl leading-relaxed">
              A disciplined catalog of digital products, visual systems, and
              tactile illustrations crafted for contemplative brands and
              creators.
            </p>
          </div>
          <div className="flex items-center gap-space-sm">
            <span className="text-caption text-on-surface-variant tracking-wider uppercase">
              Archive Vol. 04
            </span>
            <span className="text-outline-variant text-caption">/</span>
            <span className="text-caption text-secondary font-medium">
              {portfolioProjects.length} Curated Artifacts
            </span>
          </div>
        </MotionDiv>
      </MotionSection>

      <WorkGallery />

      {/* Working Principles */}
      <MotionSection className="bg-surface-container-low my-8 w-full py-24">
        <div className="mx-auto max-w-4xl px-margin-desktop text-center">
          <MotionDiv>
            <span className="text-caption text-secondary font-medium tracking-widest uppercase">
              Working Principles
            </span>
            <h3 className="text-headline-lg text-on-surface mt-space-sm tracking-tight font-semibold">
              Less noise, deeper resonance.
            </h3>
            <p className="text-body-lg text-on-surface-variant mt-space-md mx-auto max-w-2xl leading-relaxed">
              We intentionally take on only two commissions per quarter. This
              disciplined pacing guarantees unhurried experimentation, obsessive
              typographic rigor, and direct collaboration with studio principals.
            </p>
          </MotionDiv>
          <MotionStagger className="mt-16 grid grid-cols-1 gap-8 text-left md:grid-cols-3">
            {principles.map((item) => (
              <MotionItem
                key={item.id}
                className="bg-surface rounded-lg p-6 shadow-sm"
              >
                <span className="text-headline-md text-primary-container font-semibold">
                  {item.id}
                </span>
                <h4 className="text-label-md text-on-surface mt-2 font-semibold">
                  {item.title}
                </h4>
                <p className="text-body-md text-on-surface-variant mt-2 leading-relaxed">
                  {item.body}
                </p>
              </MotionItem>
            ))}
          </MotionStagger>
        </div>
      </MotionSection>

      {/* Testimonial */}
      <MotionSection className="mx-auto w-full max-w-4xl px-margin-desktop py-24 text-center md:py-32">
        <MotionDiv>
          <div className="bg-secondary-container text-on-secondary-fixed mb-space-lg inline-flex h-10 w-10 items-center justify-center rounded-full">
            <Quote className="size-5" strokeWidth={1.5} />
          </div>
          <blockquote className="text-headline-lg text-on-surface mx-auto max-w-3xl leading-snug font-normal tracking-tight italic">
            “{testimonial.quote}”
          </blockquote>
          <div className="mt-8 flex flex-col items-center justify-center">
            <div className="bg-primary-container/20 mb-4 h-1 w-12 rounded-full" />
            <cite className="text-label-md text-on-surface not-italic font-semibold">
              {testimonial.name}
            </cite>
            <span className="text-caption text-on-surface-variant mt-0.5">
              {testimonial.role}
            </span>
          </div>
        </MotionDiv>
      </MotionSection>

      {/* CTA */}
      <MotionSection className="mx-auto w-full max-w-7xl px-margin-desktop pb-24">
        <MotionDiv className="bg-surface-container flex w-full flex-col items-start justify-between gap-space-lg rounded-2xl p-8 shadow-sm md:flex-row md:items-center md:p-16">
          <div className="max-w-xl">
            <span className="text-caption text-secondary font-medium tracking-widest uppercase">
              Autumn / Winter Allocations
            </span>
            <h3 className="text-headline-lg text-on-surface mt-2 tracking-tight font-semibold">
              Have a thoughtful project in mind?
            </h3>
            <p className="text-body-md text-on-surface-variant mt-space-sm leading-relaxed">
              We welcome dialogue regarding new identities, publication
              releases, web environments, and visual essays. Let us begin with a
              quiet conversation.
            </p>
          </div>
          <div className="flex w-full flex-col items-center gap-space-md sm:flex-row md:w-auto">
            <Link
              href="/contact"
              className="bg-primary-container text-on-primary text-label-md hover:bg-primary inline-flex h-11 w-full items-center justify-center rounded-full px-8 shadow-sm transition-all duration-200 sm:w-auto"
            >
              Initiate Dialogue
            </Link>
            <Link
              href="/about"
              className="bg-surface-container-lowest text-on-surface text-label-md hover:bg-surface inline-flex h-11 w-full items-center justify-center rounded-full px-6 shadow-sm transition-all duration-200 sm:w-auto"
            >
              Studio Overview
            </Link>
          </div>
        </MotionDiv>
      </MotionSection>
    </div>
  );
}
