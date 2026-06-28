"use client";

import * as React from "react";
import * as si from "simple-icons";
import {
  Palette,
  Type,
  Boxes,
  BookOpen,
  Smartphone,
  PenTool,
  type LucideIcon,
} from "lucide-react";

type BrandIconInfo = {
  /** simple-icons slug key (e.g. "siFigma") OR null for a custom/Lucide fallback */
  slug: string | null;
  /** Lucide icon for non-brand tools */
  lucide?: LucideIcon;
  /** brand hex color (without #) */
  hex?: string;
};

/**
 * Maps a tool name (as used in content.ts) to its brand logo or a relevant
 * Lucide icon. Company products (Figma, Photoshop, Notion, …) get their real
 * brand SVG; generic concepts (Design Tokens, Copywriting) get a topical icon.
 */
const TOOL_ICON_MAP: Record<string, BrandIconInfo> = {
  // Brand logos (simple-icons)
  Figma: { slug: "siFigma", hex: "F24E1E" },
  FigJam: { slug: "siFigma", hex: "F24E1E" }, // FigJam is a Figma product
  Notion: { slug: "siNotion", hex: "000000" },
  Maze: { slug: "siMaze", hex: "000000" },
  Cursor: { slug: "siCursor", hex: "000000" },
  v0: { slug: "siV0", hex: "000000" },
  "Next.js": { slug: "siNextdotjs", hex: "000000" },
  TypeScript: { slug: "siTypescript", hex: "3178C6" },
  "Tailwind CSS": { slug: "siTailwindcss", hex: "06B6D4" },
  Storybook: { slug: "siStorybook", hex: "FF4785" },
  // Adobe — custom inline SVG (not in simple-icons)
  Photoshop: { slug: null, hex: "31A8FF", custom: "photoshop" },
  Illustrator: { slug: null, hex: "FF9A00", custom: "illustrator" },
  // Generic concepts → topical Lucide icons
  ProtoPie: { slug: null, lucide: Smartphone },
  "Design Tokens": { slug: null, lucide: Boxes },
  "Tokens Studio": { slug: null, lucide: Boxes },
  Copywriting: { slug: null, lucide: Type },
  Zeroheight: { slug: null, lucide: BookOpen },
};

// Custom inline SVGs for Adobe products (Ps / Ai square app icons)
const ADOBE_SVGS: Record<string, string> = {
  photoshop:
    "M6 3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm2.5 12.5V8.2c0-.08.04-.12.12-.12.2 0 .38 0 .64-.02.26-.02.54-.02.84-.04.3-.02.62-.02.96-.04.34-.02.66-.02.98-.02.88 0 1.62.12 2.2.36.54.2 1 .5 1.36.9.32.4.56.86.7 1.36.14.5.2 1 .2 1.54 0 1-.18 1.82-.56 2.48-.38.64-.92 1.12-1.6 1.42-.68.3-1.48.42-2.4.42-.26 0-.5 0-.74-.02-.24-.02-.46-.02-.68-.02-.22 0-.42 0-.6.02-.18 0-.32 0-.42 0-.08 0-.12-.06-.12-.16zm1.7-1.3c.1.02.22.02.36.02.14 0 .3 0 .48 0 .4 0 .76-.06 1.08-.18.32-.12.6-.3.82-.54.22-.24.4-.54.5-.9.1-.36.16-.78.16-1.26 0-.44-.06-.82-.16-1.14-.1-.32-.26-.6-.48-.82-.22-.22-.5-.38-.82-.48-.32-.1-.7-.16-1.14-.16-.26 0-.48 0-.68.02-.2.02-.34.04-.44.06v5.38zm7.2 1.3V8.2c0-.08.04-.12.12-.12.2 0 .4 0 .66-.02.26-.02.54-.02.84-.04.3-.02.6-.02.92-.04.32-.02.62-.02.9-.02.66 0 1.2.08 1.64.24.44.16.78.38 1.04.66.26.28.44.6.54.98.1.38.16.78.16 1.22 0 .4-.06.78-.18 1.12-.12.34-.32.64-.58.9-.26.26-.6.46-1 .6-.4.14-.88.22-1.44.22-.14 0-.28 0-.44-.02-.16 0-.3-.02-.44-.04v2.04c0 .08-.04.14-.12.14h-1.42c-.08 0-.12-.06-.12-.16zm1.66-5.5v2.18c.12.02.24.02.36.04.12 0 .24.02.36.02.3 0 .56-.04.78-.12.22-.08.4-.2.54-.34.14-.14.24-.3.3-.5.06-.2.1-.42.1-.66 0-.42-.14-.76-.42-1-.28-.24-.66-.36-1.14-.36-.16 0-.3 0-.42.02-.12 0-.22.02-.3.04-.08.02-.14.04-.18.06-.04.02-.06.06-.06.12z",
  illustrator:
    "M6 3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm5.4 12.8l-.5-1.5H8l-.5 1.5c-.02.08-.06.12-.14.12H6.2c-.08 0-.1-.04-.08-.14l2.5-7.2c.02-.08.04-.16.06-.26.02-.1.04-.2.04-.3 0-.04.02-.08.06-.1.04-.02.08-.02.12-.02h1.8c.06 0 .1.02.12.08l2.8 7.8c.02.08 0 .14-.08.14h-1.3c-.06 0-.1-.02-.14-.08zm-2.9-2.8h1.9c-.06-.2-.12-.4-.18-.62-.06-.22-.12-.44-.18-.66-.06-.22-.12-.44-.18-.66-.06-.22-.12-.42-.16-.62-.04-.2-.08-.38-.12-.54h-.02c-.06.34-.14.7-.24 1.08-.1.38-.2.78-.3 1.18-.1.4-.2.78-.3 1.12zm5.8 2.7V8.2c0-.08.02-.12.1-.12.2 0 .4 0 .66-.02.26-.02.54-.02.84-.04.3-.02.6-.02.92-.04.32-.02.62-.02.92-.02.5 0 .92.06 1.26.18.34.12.6.28.8.5.2.22.34.46.42.74.08.28.12.58.12.9 0 .62-.16 1.14-.48 1.54-.32.4-.8.66-1.44.78.22.02.44.06.66.14.22.08.42.18.6.32.18.14.32.32.44.54.12.22.18.5.18.82 0 .34-.06.66-.18.94-.12.28-.3.52-.54.72-.24.2-.54.34-.9.44-.36.1-.76.16-1.22.16-.2 0-.4 0-.62-.02-.22-.02-.44-.02-.66-.04-.22-.02-.42-.04-.62-.06-.2-.02-.36-.04-.48-.06-.06-.02-.1-.08-.1-.16zm1.66-5.4v1.9c.1.02.2.02.32.04.12 0 .24.02.36.02.24 0 .46-.02.66-.08.2-.06.36-.14.5-.26.14-.12.24-.26.32-.42.08-.16.12-.36.12-.58 0-.36-.12-.64-.36-.84-.24-.2-.58-.3-1.02-.3-.14 0-.26 0-.38.02-.12 0-.22.02-.3.04-.08.02-.14.04-.18.06-.04.02-.06.06-.06.12zm0 3v2.1c.1.02.2.02.32.04.12 0 .24.02.38.02.5 0 .88-.1 1.14-.32.26-.22.4-.52.4-.92 0-.42-.14-.72-.4-.92-.26-.2-.64-.3-1.14-.3-.14 0-.28 0-.4.02-.12 0-.22.02-.3.02z",
};

type Props = {
  name: string;
  className?: string;
};

/**
 * Renders a tool's brand logo (real SVG) or a topical Lucide icon fallback.
 * Brand logos use their official brand color.
 */
export function ToolIcon({ name, className }: Props) {
  const info = TOOL_ICON_MAP[name];

  // Brand logo via simple-icons
  if (info?.slug) {
    const icon = (si as Record<string, { path: string; hex: string }>)[info.slug];
    if (icon) {
      return (
        <svg
          role="img"
          viewBox="0 0 24 24"
          className={className}
          fill={`#${info.hex || icon.hex}`}
          aria-label={name}
        >
          <path d={icon.path} />
        </svg>
      );
    }
  }

  // Custom Adobe SVG
  if (info?.custom && ADOBE_SVGS[info.custom]) {
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        className={className}
        fill={`#${info.hex}`}
        aria-label={name}
      >
        <path d={ADOBE_SVGS[info.custom]} />
      </svg>
    );
  }

  // Lucide fallback
  const Lucide = info?.lucide ?? PenTool;
  return <Lucide className={className} aria-label={name} />;
}
