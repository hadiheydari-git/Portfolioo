"use client";

import * as React from "react";
import { PenTool, Workflow, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";
import { useLanguage } from "@/components/providers/language-provider";
import { skillGroups } from "@/lib/content";

const ICONS: Record<string, React.ReactNode> = {
  design: <PenTool className="h-5 w-5" />,
  process: <Workflow className="h-5 w-5" />,
  tools: <Wrench className="h-5 w-5" />,
};

export function Skills() {
  const { t, tt } = useLanguage();

  // Flatten all items for the marquee strip
  const allItems = skillGroups.flatMap((g) => g.items);

  return (
    <section id="skills" className="relative py-20 sm:py-28">
      <div className="container-edge flex flex-col gap-12">
        <SectionHeading
          labelKey="skills.label"
          titleKey="skills.title"
          subtitleKey="skills.subtitle"
          align="center"
        />

        {/* Category cards */}
        <div className="grid gap-4 sm:grid-cols-3">
          {skillGroups.map((group, i) => (
            <div
              key={group.id}
              className="group relative flex flex-col gap-4 overflow-hidden rounded-3xl border border-black/10 bg-card p-6 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-lifted dark:border-white/10"
            >
              {/* Icon + title + count — all in one row.
                  Icon on the inline-start side, title + count stacked
                  vertically on the inline-end side. */}
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-secondary text-foreground/70 transition-colors group-hover:bg-foreground group-hover:text-background">
                  {ICONS[group.id]}
                </div>
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-base font-semibold tracking-tight">
                    {tt(group.label)}
                  </h3>
                  <span className="text-xs text-muted-foreground">
                    {tt(group.description)}
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="rounded-lg border border-border/60 bg-secondary/40 px-2.5 py-1 text-xs font-medium text-foreground/80 transition-colors hover:bg-secondary"
                  >
                    {tt(item)}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Marquee strip */}
        <div className="marquee-pause relative overflow-hidden rounded-3xl border border-black/10 bg-card py-5 shadow-card dark:border-white/10">
          <div className="skills-fade-start pointer-events-none absolute inset-y-0 start-0 z-10 w-28" />
          <div className="skills-fade-end pointer-events-none absolute inset-y-0 end-0 z-10 w-28" />
          <div className="flex w-max animate-marquee" style={{ ["--marquee-duration" as string]: "36s" }}>
            {[0, 1, 2, 3].map((setIdx) => (
              <div key={setIdx} className="flex gap-3">
                {allItems.map((item, i) => (
                  <span
                    key={`${setIdx}-${i}`}
                    className="flex items-center gap-2 whitespace-nowrap rounded-full border border-black/10 bg-secondary/30 px-4 py-2 text-sm text-muted-foreground dark:border-white/10"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-foreground/40" />
                    {tt(item)}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
