"use client";

import { Button } from "../ui/button";
import { Superpower } from "../superpower";
import { useContentByTone } from "@/hooks/use-content";
import { useTone } from "@/context/tone-context";
import { cn } from "@/lib/utils";
import type { CasualOverlay } from "@/data/translations/types";
import { tones, type Tone } from "@/types/tone";

/** The profile strings that casual tone rewrites. */
type ToneDependentKey = Exclude<
  keyof NonNullable<CasualOverlay["profile"]>,
  "title"
>;

/**
 * Stacks every tone's variant of a string in one grid cell, so the box is
 * always sized by the longest one and a tone switch never moves anything.
 * The inactive variants only hold space: invisible and hidden from screen
 * readers.
 */
function ToneText({
  text,
  className,
}: Readonly<{ text: Record<Tone, string>; className?: string }>) {
  const { tone } = useTone();

  return (
    <span className={cn("grid", className)}>
      {tones.map((variant) => (
        <span
          key={variant}
          aria-hidden={variant !== tone || undefined}
          className={cn("[grid-area:1/1]", variant !== tone && "invisible")}
        >
          {text[variant]}
        </span>
      ))}
    </span>
  );
}

export function HeroSection() {
  const { tone } = useTone();
  const isCasual = tone === "casual";
  const copy = useContentByTone();
  const profile = copy[tone].profile;

  const byTone = (key: ToneDependentKey): Record<Tone, string> => ({
    formal: copy.formal.profile[key],
    casual: copy.casual.profile[key],
  });

  // Tone may change paint (colours, corners, button variant) but never
  // geometry: nothing below sizes or positions itself by tone.
  return (
    <section
      id="hero"
      className={cn(
        // py-10 clears the fixed 40px header and footer. svh is the screen
        // with the mobile URL bar shown, which is what is visible at scroll
        // top in both tones, and unlike dvh it doesn't relayout the page
        // while casual scrolls the document and the bar collapses.
        "flex min-h-svh w-full items-center justify-center overflow-hidden py-10",
        !isCasual && "snap-start snap-always"
      )}
    >
      <div className="page-container flex w-full flex-col items-center gap-8">
        {/* Photo in the middle, one role on each side. Stacked on mobile,
            where the roles don't fit beside the photo. */}
        <div className="flex w-full flex-col items-center gap-8 md:grid md:items-center md:grid-cols-[1fr_auto_1fr] md:gap-8">
          <div
            className={cn(
              // On short phones (iPhone SE) the photo gives way first, so the
              // stacked column still clears the header and footer: 432px is
              // those 80px plus the roles, gaps, tagline and buttons around it.
              // Below 160px the section grows and scrolls instead.
              "relative aspect-square w-full max-w-[clamp(160px,100svh_-_432px,250px)] order-2 md:size-[250px] md:max-w-none"
            )}
          >
            <span aria-hidden="true" className="hero-photo-outline" />
            <div className="hero-photo-blob h-full w-full overflow-hidden bg-muted">
              <img
                src={profile.profileImage || "/placeholder.svg"}
                alt={profile.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <p className="hero-role font-bold leading-none tracking-tighter order-1 md:text-center">
            {profile.roleLeft}
          </p>
          <p className="hero-role font-bold leading-none tracking-tighter order-3 md:text-center">
            {profile.roleRight}
          </p>
        </div>

        <Superpower className="mt-4 md:mt-8" />

        {/* Always stacked on mobile, so the arrangement never depends on
            whether the labels fit in 170px */}
        <div className="grid w-[170px] gap-2 sm:w-auto sm:auto-cols-fr sm:grid-flow-col">
          <Button asChild className="sm:px-2">
            <a href="#contact">
              <ToneText
                text={byTone("contactButton")}
                className="justify-items-center"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 h-4 w-4"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </Button>

          <Button
            asChild
            variant={isCasual ? "link" : "outline"}
            // The link variant has no border; a transparent one keeps its
            // box identical to the outline one
            className={cn("sm:px-2", isCasual && "border border-transparent")}
          >
            <a href="/SergeyZolotkoResume.pdf" download>
              <ToneText
                text={byTone("downloadButton")}
                className="justify-items-center"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 h-4 w-4"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" x2="12" y1="15" y2="3"></line>
              </svg>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
