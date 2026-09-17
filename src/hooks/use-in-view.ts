"use client";

import { useEffect, useRef, useState } from "react";

interface UseInViewOptions {
  rootMargin?: string;
  threshold?: number;
  /** Stop observing after the first intersection (default). */
  once?: boolean;
  /** Skip the observer entirely, e.g. in formal tone. */
  enabled?: boolean;
}

/**
 * Reports whether the referenced element has entered the viewport.
 * Falls back to `true` when IntersectionObserver is unavailable, so content
 * is never hidden behind an observer that cannot fire.
 */
export function useInView<T extends Element>({
  rootMargin = "0px 0px -15% 0px",
  threshold = 0.15,
  once = true,
  enabled = true,
}: UseInViewOptions = {}) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const element = ref.current;
    if (!element || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      // The viewport is the right root in both tones: IntersectionObserver
      // already clips the intersection rect by ancestor overflow.
      { root: null, rootMargin, threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [enabled, rootMargin, threshold, once]);

  return { ref, inView };
}
