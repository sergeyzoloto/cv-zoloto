"use client";

import { useContent } from "@/hooks/use-content";
import { cn } from "@/lib/utils";

// Drawn once per page load, so the choice survives re-renders, remounts and
// language switches: the same slot is shown in every language.
const pick = Math.random();

/** The hero tagline: one superpower, chosen at random on page load. */
export function Superpower({ className }: Readonly<{ className?: string }>) {
  const { superpowers } = useContent().profile;
  const text = superpowers[Math.floor(pick * superpowers.length)];

  return (
    <p
      className={cn(
        "subtitle w-full text-balance text-center text-muted-foreground",
        className
      )}
    >
      {text}
    </p>
  );
}
