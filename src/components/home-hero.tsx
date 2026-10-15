"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GLSLHills } from "@/components/ui/glsl-hills";
import { MotionDiv } from "@/components/motion";

export function HomeHero() {
  return (
    <section className="relative -mt-20 flex h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-black">
      {/* Flowing GLSL terrain fills the hero */}
      <GLSLHills
        width="100%"
        height="100%"
        className="absolute inset-0 z-[1] h-full w-full"
      />

      <div className="pointer-events-none absolute z-10 mx-auto flex max-w-5xl flex-col items-center px-margin-desktop text-center">
        <MotionDiv
          delay={0.05}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md"
        >
          <span className="bg-primary-container h-1.5 w-1.5 rounded-full" />
          <span className="text-label-sm font-medium tracking-widest text-white/70 uppercase">
            FIFO SOLUTIONS • Est. 2018
          </span>
        </MotionDiv>

        <MotionDiv delay={0.12} className="space-y-4">
          <h1 className="text-balance text-white">
            <span className="block text-4xl font-thin tracking-tight italic sm:text-5xl md:text-6xl">
              Designs That Speak
            </span>
            <span className="mt-2 block text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
              Louder Than Words
            </span>
          </h1>
        </MotionDiv>

        <MotionDiv delay={0.2}>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
            We craft stunning visuals and user-friendly experiences that help
            your brand stand out and connect with your audience.
          </p>
        </MotionDiv>

        <MotionDiv
          delay={0.3}
          className="pointer-events-auto mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/work"
            className="bg-primary-container hover:bg-primary inline-flex h-12 items-center gap-2 rounded-full px-7 text-sm font-medium text-white shadow-sm transition-colors"
          >
            View Selected Work
            <ArrowRight className="size-4" strokeWidth={1.75} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center rounded-full border border-white/15 bg-white/5 px-7 text-sm font-medium text-white/90 backdrop-blur-md transition-colors hover:bg-white/10"
          >
            Get in Touch
          </Link>
        </MotionDiv>
      </div>
    </section>
  );
}
