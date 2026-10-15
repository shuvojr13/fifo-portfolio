import type { Metadata } from "next";
import Link from "next/link";
import {
  Clock,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import {
  MotionDiv,
  MotionItem,
  MotionSection,
  MotionStagger,
} from "@/components/motion";

export const metadata: Metadata = {
  title: "Contact — FIFO SOLUTIONS",
  description:
    "Start a project conversation with FIFO SOLUTIONS. Share your goals, timeline, and context—we reply within two business days.",
};

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@fifosolutions.com",
    href: "mailto:hello@fifosolutions.com",
    note: "Best for project briefs and documents",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+41 44 000 00 00",
    href: "tel:+41440000000",
    note: "Weekdays, by appointment",
  },
  {
    icon: MapPin,
    label: "Studios",
    value: "Zurich & Kyoto",
    href: undefined,
    note: "Remote-first, global collaboration",
  },
] as const;

const process = [
  {
    step: "01",
    title: "You inquire",
    body: "Send goals, context, timeline, and any links. The form takes about 3 minutes.",
  },
  {
    step: "02",
    title: "We reply",
    body: "Within 48 hours we confirm fit, ask clarifying questions, or suggest a short call.",
  },
  {
    step: "03",
    title: "Scoped proposal",
    body: "If aligned, you receive a clear scope, phases, investment range, and start window.",
  },
] as const;

const tips = [
  "What problem are you solving, and for whom?",
  "Do you have a hard launch date or budget ceiling?",
  "Is this a new build, redesign, or brand from scratch?",
  "Who will be the decision-maker on your side?",
] as const;

export default function ContactPage() {
  return (
    <div className="flex w-full flex-col">
      {/* Hero */}
      <MotionSection className="mx-auto w-full max-w-7xl px-margin-desktop pt-12 pb-12 md:pt-20 md:pb-16">
        <MotionDiv className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-space-xs">
            <span className="bg-primary-container h-1.5 w-1.5 rounded-full" />
            <span className="text-label-sm text-secondary font-medium tracking-widest uppercase">
              Contact
            </span>
          </div>
          <h1 className="text-display-lg text-on-surface tracking-tight">
            Let&apos;s talk about your next project.
          </h1>
          <p className="text-body-lg text-on-surface-variant mt-6 max-w-2xl leading-relaxed font-light">
            Whether you need a product build, identity system, or illustration
            suite—share a bit of context and we will get back with a clear,
            useful response.
          </p>
        </MotionDiv>

        <MotionDiv
          delay={0.15}
          className="mt-10 flex flex-wrap items-center gap-6"
        >
          <div className="text-caption text-on-surface-variant flex items-center gap-2">
            <Clock className="text-primary-container size-4" strokeWidth={1.75} />
            Typical reply within 48 hours
          </div>
          <div className="text-caption text-on-surface-variant flex items-center gap-2">
            <ShieldCheck
              className="text-primary-container size-4"
              strokeWidth={1.75}
            />
            Private &amp; confidential by default
          </div>
          <div className="text-caption text-on-surface-variant flex items-center gap-2">
            <MessageSquareText
              className="text-primary-container size-4"
              strokeWidth={1.75}
            />
            No spam, no hard sell
          </div>
        </MotionDiv>
      </MotionSection>

      {/* Form + sidebar */}
      <MotionSection className="mx-auto w-full max-w-7xl px-margin-desktop pb-24">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
          <MotionDiv className="lg:col-span-7">
            <ContactForm />
          </MotionDiv>

          <MotionStagger
            delay={0.1}
            className="flex flex-col gap-6 lg:col-span-5"
          >
            <MotionItem className="bg-surface-container-low rounded-2xl p-7">
              <h2 className="text-headline-md text-on-surface">Direct channels</h2>
              <p className="text-body-md text-on-surface-variant mt-2 leading-relaxed">
                Prefer email or a call? Use these—form submissions still help us
                prepare the best first reply.
              </p>
              <ul className="mt-6 space-y-5">
                {channels.map((channel) => {
                  const Icon = channel.icon;
                  const value = channel.href ? (
                    <a
                      href={channel.href}
                      className="text-label-md text-on-surface hover:text-primary-container font-medium transition-colors"
                    >
                      {channel.value}
                    </a>
                  ) : (
                    <span className="text-label-md text-on-surface font-medium">
                      {channel.value}
                    </span>
                  );

                  return (
                    <li key={channel.label} className="flex gap-3">
                      <div className="bg-surface-container-lowest text-primary-container flex h-10 w-10 shrink-0 items-center justify-center rounded-full shadow-sm">
                        <Icon className="size-4" strokeWidth={1.75} />
                      </div>
                      <div>
                        <p className="text-caption text-secondary tracking-wider uppercase">
                          {channel.label}
                        </p>
                        <div className="mt-0.5">{value}</div>
                        <p className="text-caption text-on-surface-variant mt-0.5">
                          {channel.note}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </MotionItem>

            <MotionItem className="bg-surface-container-lowest rounded-2xl p-7 shadow-sm">
              <h2 className="text-headline-md text-on-surface">
                What helps us help you
              </h2>
              <p className="text-body-md text-on-surface-variant mt-2 leading-relaxed">
                Strong first replies come from clear context. Consider including:
              </p>
              <ul className="mt-5 space-y-3">
                {tips.map((tip) => (
                  <li
                    key={tip}
                    className="text-body-md text-on-surface-variant flex items-start gap-3 leading-relaxed"
                  >
                    <span className="bg-primary-container mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
                    {tip}
                  </li>
                ))}
              </ul>
            </MotionItem>

            <MotionItem className="bg-primary-container text-on-primary rounded-2xl p-7">
              <p className="text-caption tracking-widest uppercase opacity-80">
                Availability
              </p>
              <p className="text-headline-md mt-2">
                Currently welcoming select Autumn / Winter 2025 commissions.
              </p>
              <p className="text-body-md mt-3 opacity-90 leading-relaxed">
                We keep only a few active projects at a time. If timing is not a
                match, we will say so clearly and suggest alternatives.
              </p>
              <Link
                href="/about"
                className="text-label-md mt-5 inline-flex underline underline-offset-4 opacity-90 transition hover:opacity-100"
              >
                Learn how we work →
              </Link>
            </MotionItem>
          </MotionStagger>
        </div>
      </MotionSection>

      {/* Process */}
      <MotionSection className="bg-surface-container-low w-full py-24">
        <div className="mx-auto max-w-7xl px-margin-desktop">
          <MotionDiv className="mb-12 max-w-2xl">
            <span className="text-label-sm text-secondary font-medium tracking-widest uppercase">
              After you write
            </span>
            <h2 className="text-headline-lg text-on-surface mt-3 tracking-tight">
              A simple, respectful process.
            </h2>
          </MotionDiv>
          <MotionStagger className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {process.map((item) => (
              <MotionItem
                key={item.step}
                className="bg-surface-container-lowest rounded-xl p-7 shadow-sm"
              >
                <span className="text-display-lg text-primary-container/20 font-bold">
                  {item.step}
                </span>
                <h3 className="text-headline-md text-on-surface mt-2">
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

      {/* Quick links */}
      <MotionSection className="mx-auto w-full max-w-7xl px-margin-desktop py-20 pb-24">
        <MotionStagger className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <MotionItem>
            <Link
              href="/service"
              className="bg-surface-container-lowest group block rounded-2xl p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <p className="text-caption text-secondary tracking-widest uppercase">
                Explore
              </p>
              <h3 className="text-headline-md text-on-surface group-hover:text-primary-container mt-2 transition-colors">
                Services &amp; capabilities
              </h3>
              <p className="text-body-md text-on-surface-variant mt-2 leading-relaxed">
                See how we approach product, identity, and illustration work.
              </p>
            </Link>
          </MotionItem>
          <MotionItem>
            <Link
              href="/work"
              className="bg-surface-container-lowest group block rounded-2xl p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <p className="text-caption text-secondary tracking-widest uppercase">
                Portfolio
              </p>
              <h3 className="text-headline-md text-on-surface group-hover:text-primary-container mt-2 transition-colors">
                Selected work archive
              </h3>
              <p className="text-body-md text-on-surface-variant mt-2 leading-relaxed">
                Browse recent digital products, brand systems, and illustrations.
              </p>
            </Link>
          </MotionItem>
        </MotionStagger>
      </MotionSection>
    </div>
  );
}
