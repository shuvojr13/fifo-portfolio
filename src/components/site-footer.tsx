import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

const exploreLinks = [
  { href: "/work", label: "Selected Work" },
  { href: "/service", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

const practiceLinks = [
  { href: "/service", label: "Digital Craft" },
  { href: "/service", label: "Graphic Design" },
  { href: "/service", label: "Illustration" },
  { href: "/work", label: "Archive" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-outline-variant/30 bg-surface-container-low w-full">
      <div className="mx-auto max-w-7xl px-margin-desktop">
        {/* Main */}
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-12 md:gap-10 md:py-20">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="group inline-flex items-center gap-space-sm">
              <span className="bg-primary-container h-2.5 w-2.5 rounded-full transition-transform duration-300 group-hover:scale-125" />
              <span className="text-headline-md tracking-tight text-on-surface font-semibold">
                FIFO SOLUTIONS
              </span>
            </Link>
            <p className="text-body-md text-on-surface-variant mt-5 max-w-sm leading-relaxed">
              Independent design &amp; craft studio. Thoughtful digital products,
              graphic identities, and bespoke illustrations built to last.
            </p>
            <Link
              href="/contact"
              className="bg-primary-container text-on-primary text-label-md hover:bg-primary mt-8 inline-flex h-11 items-center gap-2 rounded-full px-5 transition-colors"
            >
              Start a Project
              <ArrowUpRight className="size-4" strokeWidth={1.75} />
            </Link>
          </div>

          {/* Explore */}
          <div className="md:col-span-2">
            <p className="text-caption text-secondary mb-5 font-medium tracking-widest uppercase">
              Explore
            </p>
            <ul className="flex flex-col gap-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-label-md text-on-surface-variant hover:text-on-surface transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice */}
          <div className="md:col-span-2">
            <p className="text-caption text-secondary mb-5 font-medium tracking-widest uppercase">
              Practice
            </p>
            <ul className="flex flex-col gap-3">
              {practiceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-label-md text-on-surface-variant hover:text-on-surface transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <p className="text-caption text-secondary mb-5 font-medium tracking-widest uppercase">
              Reach us
            </p>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="mailto:hello@fifosolutions.com"
                  className="text-label-md text-on-surface hover:text-primary-container group inline-flex items-center gap-2.5 transition-colors"
                >
                  <span className="bg-surface-container-lowest text-primary-container flex size-8 items-center justify-center rounded-full shadow-sm">
                    <Mail className="size-3.5" strokeWidth={1.75} />
                  </span>
                  hello@fifosolutions.com
                </a>
              </li>
              <li className="text-label-md text-on-surface-variant inline-flex items-start gap-2.5">
                <span className="bg-surface-container-lowest text-primary-container flex size-8 shrink-0 items-center justify-center rounded-full shadow-sm">
                  <MapPin className="size-3.5" strokeWidth={1.75} />
                </span>
                <span className="pt-1.5 leading-relaxed">
                  Zurich &amp; Kyoto
                  <br />
                  <span className="text-caption">Remote-first worldwide</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-outline-variant/25 flex flex-col items-start justify-between gap-4 border-t py-6 sm:flex-row sm:items-center">
          <p className="text-caption text-on-surface-variant">
            © 2026 FIFO SOLUTIONS. All rights reserved.
          </p>
          <p className="text-caption text-on-surface-variant">
            Crafted with clarity — reply within 48 hours.
          </p>
        </div>
      </div>
    </footer>
  );
}
