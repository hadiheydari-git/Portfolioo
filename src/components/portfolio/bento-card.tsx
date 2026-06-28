"use client";

import * as React from "react";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import { SmartImage } from "@/components/ui/smart-image";
import type { Project } from "@/lib/content";
import { cn } from "@/lib/utils";

type Props = {
  project: Project;
  index: number;
  onClick: () => void;
  /** Small (sm) column span out of 6 columns. */
  smCols?: number;
  /** Large (lg) column span out of 6 columns. */
  lgCols?: number;
};

export function BentoCard({ project, index, onClick, smCols = 3, lgCols = 2 }: Props) {
  const { t, tt, locale } = useLanguage();
  const smClass =
    smCols === 6
      ? "sm:col-span-6"
      : smCols === 4
      ? "sm:col-span-4"
      : smCols === 3
      ? "sm:col-span-3"
      : smCols === 2
      ? "sm:col-span-2"
      : "sm:col-span-1";

  const lgClass =
    lgCols === 6
      ? "lg:col-span-6"
      : lgCols === 4
      ? "lg:col-span-4"
      : lgCols === 3
      ? "lg:col-span-3"
      : lgCols === 2
      ? "lg:col-span-2"
      : "lg:col-span-1";
  const isFeature = lgCols >= 4; // 2/3 width -> feature card
  return (
    <div className={cn(smClass, lgClass)}>
      <button
        type="button"
        onClick={onClick}
        className={cn(
          "group relative flex w-full flex-col overflow-hidden rounded-3xl border border-black/10 bg-card text-start transition-shadow duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:border-white/10",
          // Make all Bento cards the same height across breakpoints
          "h-[380px] sm:h-[380px] lg:h-[380px]"
        )}
      >
        {/* Accent glow (under the image) */}
        <div
          className={cn(
            "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-60 transition-opacity duration-500 group-hover:opacity-90",
            project.accent
          )}
        />

        {/* Cover image */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0">
            {project.id === "dev-solutions" ? (
              // stacked three images for Dev Solutions: fixed-height frame,
              // vertical scrollable area with hidden scrollbar. Thumbnails
              // use object-contain so they fit the frame; the lightbox shows
              // the natural size.
              <div className="h-full w-full overflow-y-auto scrollbar-none">
                {project.gallery.slice(0, 3).map((g, idx) => (
                  <div key={g.src} className="h-[33.333%] overflow-hidden">
                    <SmartImage
                      src={g.src}
                      alt={tt(project.title)}
                      className="h-full w-full"
                      gradientClassName={project.accent}
                      imgClassName="object-contain transition-transform duration-700 ease-out group-hover:scale-105 h-full w-full"
                      skeleton={true}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <SmartImage
                src={project.cover}
                alt={tt(project.title)}
                className="h-full w-full"
                gradientClassName={project.accent}
                imgClassName="transition-transform duration-700 ease-out group-hover:scale-105"
              />
            )}
          </div>
          {/* Readability gradient */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2"
            style={{
              backgroundImage:
                "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 30%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0) 100%)",
            }}
          />
        </div>

        {/* Top meta */}
        <div className="relative z-10 flex items-start justify-between p-5">
          <span className="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur">
            {tt(project.role)}
          </span>
          <span className="rounded-full bg-black/30 px-2.5 py-1 text-xs text-white/70 backdrop-blur">
            {tt(project.year)}
          </span>
        </div>

        {/* Bottom content */}
        <div className="relative z-10 mt-auto flex flex-col gap-2 p-5 sm:p-6">
          <h3
            className={cn(
              "font-semibold tracking-tight text-balance text-white",
              // Feature cards (2/3 width) get a larger title.
              isFeature ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
            )}
          >
            {tt(project.title)}
          </h3>
          <p className="line-clamp-2 max-w-md text-sm text-white/70">
            {tt(project.tagline)}
          </p>

          {/* Hover action */}
          <div className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-white/80 transition-colors group-hover:text-white">
            <span>{t("portfolio.viewProject")}</span>
            <ArrowUpRight
              className={cn(
                "h-4 w-4 transition-transform duration-300",
                locale === "fa" ? "-scale-x-100" : "",
                "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              )}
            />
          </div>
        </div>
      </button>
    </div>
  );
}