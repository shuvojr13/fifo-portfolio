"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "cn";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/service", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 backdrop-blur-xl transition-colors duration-300",
        isHome
          ? "border-b border-white/5 bg-[#050816]/70 shadow-none"
          : "bg-surface/80 shadow-[0_1px_8px_rgba(0,0,0,0.04)]",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-margin-desktop">
        <Link href="/" className="group flex items-center gap-space-sm">
          <span
            className={cn(
              "h-2.5 w-2.5 rounded-full transition-transform duration-300 group-hover:scale-125",
              isHome ? "bg-[#90a8ff]" : "bg-primary-container",
            )}
          />
          <span
            className={cn(
              "text-headline-md tracking-tight font-semibold",
              isHome ? "text-white" : "text-on-surface",
            )}
          >
            FIFO SOLUTIONS
          </span>
        </Link>

        <nav className="hidden items-center gap-space-lg md:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "transition-colors duration-200",
                  isHome
                    ? isActive
                      ? "font-medium text-white underline decoration-[#90a8ff] decoration-2 underline-offset-8"
                      : "text-label-md text-white/55 hover:text-white"
                    : isActive
                      ? "text-on-surface font-medium underline decoration-primary-container decoration-2 underline-offset-8"
                      : "text-label-md text-on-surface-variant hover:text-on-surface",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className={cn(
            "text-label-md inline-flex h-10 items-center justify-center rounded-full px-space-md shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-colors duration-200",
            isHome
              ? "bg-[#4059aa] text-white hover:bg-[#1e3a8a]"
              : "bg-primary-container text-on-primary hover:bg-primary",
          )}
        >
          Start a Project
        </Link>
      </div>
    </header>
  );
}
