"use client";

import * as React from "react";
import { SectionHeading } from "@/components/sections/section-heading";
import { BentoCard } from "@/components/portfolio/bento-card";
import { ProjectModal } from "@/components/portfolio/project-modal";
import { projects, type Project } from "@/lib/content";

export function Portfolio() {
  const [active, setActive] = React.useState<Project | null>(null);
  const [open, setOpen] = React.useState(false);

  const handleOpen = React.useCallback((project: Project) => {
    setActive(project);
    setOpen(true);
  }, []);

  // Preload portfolio images in order after main render to improve perceived speed.
  React.useEffect(() => {
    const order = [
      "dutar-dashboard",
      "dutar-shop",
      "dev-solutions",
      "mafia-master",
    ];
    const urls: string[] = [];
    for (const id of order) {
      const p = projects.find((x) => x.id === id);
      if (!p) continue;
      // push cover first, then gallery images in their file-order
      urls.push(p.cover);
      if (Array.isArray(p.gallery)) {
        for (const g of p.gallery) urls.push(g.src);
      }
    }

    let cancelled = false;

    (async () => {
      // let critical page resources settle
      await new Promise((r) => setTimeout(r, 400));
      for (const u of urls) {
        if (cancelled) break;
        try {
          const link = document.createElement("link");
          link.rel = "preload";
          link.as = "image";
          link.href = u;
          document.head.appendChild(link);
        } catch (e) {
          /* ignore */
        }

        // also warm the image cache non-blocking
        const img = new Image();
        img.src = u;

        // small gap so the browser can interleave downloads
        // and main-page work isn't blocked.
        // tuned low to still preload fast.
        // eslint-disable-next-line no-await-in-loop
        await new Promise((r) => setTimeout(r, 120));
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="work" className="relative py-20 sm:py-28">
      <div className="container-edge flex flex-col gap-12">
        <SectionHeading
          labelKey="portfolio.label"
          titleKey="portfolio.title"
          subtitleKey="portfolio.subtitle"
          align="center"
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-6 sm:gap-5 lg:grid-cols-6">
          {(() => {
            const order = [
              "dutar-dashboard",
              "dutar-shop",
              "dev-solutions",
              "mafia-master",
            ];
            const ordered = order
              .map((id) => projects.find((p) => p.id === id))
              .filter(Boolean) as typeof projects;

            // column spans (out of 6) for sm and lg to create 2/3 + 1/3 rows
            const spans = [
              { sm: 4, lg: 4 },
              { sm: 2, lg: 2 },
              { sm: 2, lg: 2 },
              { sm: 4, lg: 4 },
            ];

            return ordered.map((project, i) => (
              <BentoCard
                key={project.id}
                project={project}
                index={i}
                onClick={() => handleOpen(project)}
                smCols={spans[i]?.sm}
                lgCols={spans[i]?.lg}
              />
            ));
          })()}
        </div>
      </div>

      <ProjectModal project={active} open={open} onOpenChange={setOpen} />
    </section>
  );
}