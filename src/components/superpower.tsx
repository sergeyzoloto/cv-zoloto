"use client";

import { useEffect, useState } from "react";
import { useContent } from "@/hooks/use-content";
import { cn } from "@/lib/utils";

// Drawn once per page load, so the choice survives re-renders, remounts and
// language switches: the same slot is shown in every language.
const pick = Math.random();

const START_DELAY_MS = 700;
const CHAR_DELAY_MS = 45;

/** How many characters of `text` are shown, ticking up after a short pause. */
function useTyped(text: string): number {
  const [shown, setShown] = useState({ text, count: 0 });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown({ text, count: text.length });
      return;
    }
    setShown({ text, count: 0 });
    let interval: ReturnType<typeof setInterval> | undefined;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        setShown((s) => {
          if (s.count >= text.length) {
            clearInterval(interval);
            return s;
          }
          return { text, count: s.count + 1 };
        });
      }, CHAR_DELAY_MS);
    }, START_DELAY_MS);
    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [text]);

  // A stale count from the previous language must not slice the new text.
  return shown.text === text ? shown.count : 0;
}

/**
 * The hero tagline: a fixed lead, then one superpower chosen at random on
 * page load, typed out after a short delay. Untyped characters stay in the
 * layout, invisible, so typing never reflows the page.
 */
export function Superpower({ className }: Readonly<{ className?: string }>) {
  const { superpowerLead, superpowers } = useContent().profile;
  const ending = superpowers[Math.floor(pick * superpowers.length)];
  const count = useTyped(ending);

  return (
    <p
      aria-label={`${superpowerLead} ${ending}`}
      className={cn(
        "subtitle superpower w-full text-balance text-center text-muted-foreground",
        className
      )}
    >
      {/* The ending sits on its own line. Typed and not-yet-typed text share
          one span, so it wraps as the finished ending does from the first
          frame. */}
      <span aria-hidden>
        <span className="block">{superpowerLead}</span>
        <span className="block">
          {ending.slice(0, count)}
          <span className="invisible">{ending.slice(count)}</span>
        </span>
      </span>
    </p>
  );
}
