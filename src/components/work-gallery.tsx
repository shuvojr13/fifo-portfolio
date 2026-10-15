"use client";

import { useState } from "react";
import Image from "next/image";
import { SlidersHorizontal } from "lucide-react";
import { cn } from "cn";
import { MotionDiv, MotionItem, MotionStagger } from "@/components/motion";
import {
  portfolioProjects,
  type CraftCategory,
} from "@/content/portfolio";

type Category = "all" | CraftCategory;

const filters: { id: Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "web", label: "Web & Apps" },
  { id: "graphic", label: "Graphic Design" },
  { id: "illustration", label: "Illustration" },
];

export function WorkGallery() {
  const [active, setActive] = useState<Category>("all");

  const visible = portfolioProjects.filter(
    (project) => active === "all" || project.category === active,
  );

  return (
    <div className="mx-auto w-full max-w-7xl px-margin-desktop pb-28">
      <MotionDiv className="-mt-4 mb-16 flex items-center justify-between overflow-x-auto border-b border-surface-container-high pb-4 md:-mt-8">
        <div className="flex items-center gap-space-sm sm:gap-space-md">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActive(filter.id)}
              className={cn(
                "text-label-md rounded-full px-4 py-2 transition-all duration-200",
                active === filter.id
                  ? "bg-primary-container text-on-primary"
                  : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container",
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <div className="text-on-surface-variant text-caption hidden items-center gap-space-xs sm:flex">
          <SlidersHorizontal className="size-4" strokeWidth={1.75} />
          <span>Filtered View</span>
        </div>
      </MotionDiv>

      <MotionStagger
        key={active}
        className="grid grid-cols-1 gap-x-12 gap-y-20 md:grid-cols-2"
      >
        {visible.map((project) => (
          <MotionItem
            key={project.id}
            className={cn(
              "group flex flex-col transition-all duration-500 ease-out",
              project.offset && "md:translate-y-12",
            )}
          >
            <div className="bg-surface-container-low relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-sm transition-shadow duration-500 group-hover:shadow-md">
              <Image
                src={project.src}
                alt={project.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-surface-container-lowest/90 text-label-sm text-on-surface inline-flex items-center rounded-full px-3 py-1 shadow-sm backdrop-blur-md">
                  {project.tag}
                </span>
              </div>
            </div>
            <div className="flex flex-col pt-6">
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-headline-md text-on-surface group-hover:text-primary-container font-semibold transition-colors duration-200">
                  {project.title}
                </h2>
                <span className="text-caption text-on-surface-variant shrink-0">
                  {project.year}
                </span>
              </div>
              <p className="text-body-md text-on-surface-variant mt-2 leading-relaxed">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-space-xs">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-caption bg-surface-container-high text-on-surface-variant rounded px-2.5 py-0.5 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </MotionItem>
        ))}
      </MotionStagger>
    </div>
  );
}
