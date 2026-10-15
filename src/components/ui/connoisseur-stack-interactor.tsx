"use client";

import { cn } from "@/lib/utils";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { craftMenuItems } from "@/content/portfolio";

export interface MenuItem {
  num: string;
  name: string;
  clipId: string;
  image: string;
}

const defaultItems: MenuItem[] = craftMenuItems;

export function ConnoisseurStackInteractor({
  items = defaultItems,
  className,
}: {
  items?: MenuItem[];
  className?: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<SVGImageElement>(null);
  const mainGroupRef = useRef<SVGGElement>(null);
  const masterTl = useRef<gsap.core.Timeline | null>(null);
  const itemsRef = useRef(items);
  itemsRef.current = items;

  const createLoop = (index: number) => {
    const currentItems = itemsRef.current;
    const item = currentItems[index];
    if (!item) return;

    const selector = `#${item.clipId} .path`;

    if (masterTl.current) masterTl.current.kill();

    if (imageRef.current) imageRef.current.setAttribute("href", item.image);
    if (mainGroupRef.current) {
      mainGroupRef.current.setAttribute("clip-path", `url(#${item.clipId})`);
    }

    gsap.set(selector, { scale: 0, transformOrigin: "50% 50%" });

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    tl.to(selector, {
      scale: 1,
      duration: 0.8,
      stagger: { amount: 0.4, from: "random" },
      ease: "expo.out",
    })
      .to(selector, {
        scale: 1.05,
        duration: 1.5,
        yoyo: true,
        repeat: 1,
        ease: "sine.inOut",
        stagger: { amount: 0.2, from: "center" },
      })
      .to(selector, {
        scale: 0,
        duration: 0.6,
        stagger: { amount: 0.3, from: "edges" },
        ease: "expo.in",
      });

    masterTl.current = tl;
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      createLoop(0);
    }, containerRef);
    return () => {
      ctx.revert();
      if (masterTl.current) masterTl.current.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- mount once; hover drives subsequent loops
  }, []);

  const handleItemHover = (index: number) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
    createLoop(index);
  };

  const nameParts = (name: string) => {
    const parts = name.split(" ");
    return [parts[0] ?? "", parts.slice(1).join(" ") || (parts[0] ?? "")];
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex w-full flex-col items-center justify-between overflow-hidden md:flex-row md:gap-12",
        className,
      )}
    >
      {/* LEFT: Menu */}
      <div className="z-20 w-full md:w-1/2">
        <nav>
          <ul className="flex flex-col gap-10 md:gap-14">
            {items.map((item, index) => {
              const [line1, line2] = nameParts(item.name);
              return (
                <li
                  key={item.num}
                  onMouseEnter={() => handleItemHover(index)}
                  onFocus={() => handleItemHover(index)}
                  className="group cursor-pointer"
                >
                  <button
                    type="button"
                    className="flex w-full items-start gap-5 text-left md:gap-6"
                    onMouseEnter={() => handleItemHover(index)}
                  >
                    <span
                      className={cn(
                        "mt-2 text-2xl font-bold transition-all duration-500 md:text-3xl",
                        activeIndex === index
                          ? "text-primary-container scale-110"
                          : "text-on-surface-variant/50",
                      )}
                    >
                      {item.num}
                    </span>

                    <h3
                      className={cn(
                        "text-4xl leading-[0.85] font-black tracking-tighter uppercase transition-all duration-700 md:text-5xl lg:text-6xl",
                        activeIndex === index
                          ? "text-on-surface translate-x-3 opacity-100 md:translate-x-4"
                          : "text-on-surface-variant/35 translate-x-0 opacity-50",
                      )}
                    >
                      {line1}
                      <br />
                      {line2}
                    </h3>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* RIGHT: Animated clip grid */}
      <div className="relative mt-12 flex w-full items-center justify-center md:mt-0 md:w-1/2">
        <div className="bg-primary-container/10 absolute h-[120%] w-[120%] rounded-full blur-[120px] transition-opacity duration-1000" />

        <svg
          viewBox="0 0 500 500"
          className="z-10 h-auto w-full max-w-[500px] drop-shadow-xl"
          aria-hidden
        >
          <defs>
            {/* Digital Craft — arched panels + orb (not layered burger strips) */}
            <clipPath id="clip-original">
              <path
                className="path"
                d="M40 220 C40 90, 460 90, 460 220 L460 250 C460 280, 40 280, 40 250 Z"
              />
              <circle className="path" cx="250" cy="250" r="72" />
              <rect
                className="path"
                x="40"
                y="300"
                width="180"
                height="160"
                rx="28"
              />
              <rect
                className="path"
                x="240"
                y="300"
                width="220"
                height="100"
                rx="24"
              />
              <rect
                className="path"
                x="240"
                y="420"
                width="220"
                height="40"
                rx="20"
              />
              <rect
                className="path"
                x="70"
                y="40"
                width="120"
                height="40"
                rx="20"
              />
              <rect
                className="path"
                x="210"
                y="40"
                width="220"
                height="40"
                rx="20"
              />
            </clipPath>

            <clipPath id="clip-hexagons">
              <rect className="path" x="20" y="20" width="200" height="280" rx="12" />
              <rect className="path" x="20" y="320" width="200" height="160" rx="12" />
              <rect className="path" x="240" y="20" width="240" height="140" rx="12" />
              <rect className="path" x="240" y="180" width="110" height="160" rx="12" />
              <rect className="path" x="370" y="180" width="110" height="160" rx="12" />
              <rect className="path" x="240" y="360" width="240" height="120" rx="12" />
            </clipPath>

            <clipPath id="clip-pixels">
              {Array.from({ length: 9 }).map((_, i) => (
                <rect
                  key={i}
                  className="path"
                  x={(i % 3) * 160 + 20}
                  y={Math.floor(i / 3) * 160 + 20}
                  width="140"
                  height="140"
                  rx="4"
                />
              ))}
            </clipPath>
          </defs>

          <g ref={mainGroupRef} clipPath={`url(#${items[0].clipId})`}>
            <image
              ref={imageRef}
              href={items[0].image}
              width="500"
              height="500"
              preserveAspectRatio="xMidYMid slice"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

/** Alias matching the source package export */
export const Component = ConnoisseurStackInteractor;
