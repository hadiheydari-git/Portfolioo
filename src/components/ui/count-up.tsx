"use client";

import * as React from "react";
import { animate, useInView } from "framer-motion";

type Props = {
  /** Target number to count up to. */
  to: number;
  /** Duration of the count-up in milliseconds. */
  duration?: number;
  /** Delay before starting, in milliseconds. */
  delay?: number;
  /** Render function that receives the current (possibly fractional) value. */
  children: (value: number) => React.ReactNode;
};

/**
 * Counts up from 0 to `to` when the element scrolls into view.
 * Returns a render-prop so the parent can format (Persian digits, "+", etc).
 */
export function CountUp({ to, duration = 1600, delay = 200, children }: Props) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: duration / 1000,
      delay: delay / 1000,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [inView, to, duration, delay]);

  return <span ref={ref}>{children(value)}</span>;
}

/** Convert a number to Persian digits. */
export function toPersianDigits(n: number | string): string {
  const map = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return String(n).replace(/[0-9]/g, (d) => map[Number(d)]);
}
