"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "cn";

const faqs = [
  {
    question: "What is the typical timeframe for a full project?",
    answer:
      "Most identity systems and brand identities require 4 to 6 weeks. Complete application designs or bespoke web applications typically span 8 to 12 weeks from kickoff to production release. We never rush, nor do we let work linger unnecessarily.",
  },
  {
    question: "How does communication flow during an engagement?",
    answer:
      "We maintain a calm, async-first cadence. You will receive a weekly structured briefing detailing decisions made, active drafts, and next steps. We hold focused 30-minute checkpoints at major milestones to review work collectively.",
  },
  {
    question: "What exact files and assets do we receive upon completion?",
    answer:
      "You receive complete intellectual property and source files: comprehensive Figma workspaces, clean Git repositories with clean commit history, layered illustration vectors (SVG, EPS), and print-ready master files. Everything is structured so your team can maintain it effortlessly.",
  },
] as const;

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <button
            key={faq.question}
            type="button"
            onClick={() => setOpenIndex(isOpen ? null : index)}
            className="bg-surface-container-lowest w-full cursor-pointer rounded-xl p-6 text-left shadow-sm transition-colors duration-200"
            aria-expanded={isOpen}
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-headline-md text-on-surface">
                {faq.question}
              </h3>
              <ChevronDown
                className={cn(
                  "text-secondary size-5 shrink-0 transition-transform duration-200",
                  isOpen && "rotate-180",
                )}
                strokeWidth={1.75}
              />
            </div>
            {isOpen && (
              <div className="text-body-md text-on-surface-variant mt-4 border-t border-outline-variant/30 pt-4 leading-relaxed">
                {faq.answer}
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}
