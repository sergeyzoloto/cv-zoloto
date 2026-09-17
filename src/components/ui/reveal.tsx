"use client";

import type { ReactNode } from "react";
import { useTone } from "@/context/tone-context";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

export interface RevealProps {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  /** Defaults to "casual tone only". */
  enabled?: boolean;
}

/**
 * Fades and lifts its children into place once, when they scroll into view.
 *
 * The hidden state lives behind `motion-safe:`, so under
 * `prefers-reduced-motion: reduce` no hiding rule exists at all and the
 * content is visible even if the observer never fires.
 */
export function Reveal({
  children,
  className,
  delayMs = 0,
  enabled,
}: Readonly<RevealProps>) {
  const { tone } = useTone();
  const active = enabled ?? tone === "casual";
  const { ref, inView } = useInView<HTMLDivElement>({ enabled: active });

  if (!active) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      data-in-view={inView ? "true" : "false"}
      style={{ transitionDelay: delayMs ? `${delayMs}ms` : undefined }}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-out",
        "motion-safe:data-[in-view=false]:opacity-0",
        "motion-safe:data-[in-view=false]:translate-y-6",
        "motion-reduce:transition-none",
        className
      )}
    >
      {children}
    </div>
  );
}
