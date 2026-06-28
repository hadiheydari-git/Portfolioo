"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  className?: string;
  /** gradient classes for the placeholder shown behind / on error */
  gradientClassName?: string;
  imgClassName?: string;
  /**
   * When true, the image renders at its natural aspect ratio (no cropping,
   * no empty bars). The container's height is driven by the image's natural
   * dimensions. Useful for galleries where images have varying aspect ratios
   * and must be shown in full.
   */
  natural?: boolean;
  /**
   * Natural aspect ratio (width / height) of the source image. Only used
   * when `natural` is true. When provided, the skeleton placeholder
   * reserves exactly this much vertical space while the image is loading,
   * so the surrounding grid layout doesn't shift when the image arrives.
   * When omitted, the skeleton falls back to a sensible default height.
   */
  aspectRatio?: number;
  /**
   * When true, render an animated skeleton placeholder (shimmer) instead
   * of the gradient + dot pattern. Recommended for gallery grids where
   * a clearly visible "loading" state is desired.
   */
  skeleton?: boolean;
  /** When true, load the image eagerly and hint high fetch priority. */
  eager?: boolean;
};

/**
 * Image with a graceful gradient / skeleton placeholder.
 * Shows the placeholder until the image loads (or if it fails to load),
 * which makes it perfect for swappable placeholder imagery.
 */
export function SmartImage({
  src,
  alt,
  className,
  gradientClassName,
  imgClassName,
  natural = false,
  aspectRatio,
  skeleton = false,
  eager = false,
}: Props) {
  const [loaded, setLoaded] = React.useState(false);
  const [failed, setFailed] = React.useState(false);

  const showPlaceholder = !loaded || failed;

  const placeholderStyle: React.CSSProperties = React.useMemo(() => {
    if (!natural || !aspectRatio) return {};
    return { aspectRatio: String(aspectRatio) };
  }, [natural, aspectRatio]);

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        natural && "w-full",
        className
      )}
      style={placeholderStyle}
    >
      {showPlaceholder && skeleton ? (
        <div className="absolute inset-0 skeleton-shimmer" aria-hidden="true" />
      ) : showPlaceholder && gradientClassName ? (
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br transition-opacity duration-500",
            gradientClassName,
            loaded && !failed ? "opacity-0" : "opacity-100"
          )}
        />
      ) : null}

      {showPlaceholder && !skeleton ? (
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--foreground) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
      ) : null}

      {!failed && (
        // use fetchpriority and loading to give the browser a hint for critical images
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          decoding="async"
          {...(eager ? { fetchpriority: "high" } : {})}
          className={cn(
            "relative transition-opacity duration-700",
            natural
              ? "block h-auto w-full"
              : "h-full w-full object-cover",
            loaded ? "opacity-100" : "opacity-0",
            imgClassName
          )}
        />
      )}
    </div>
  );
}
