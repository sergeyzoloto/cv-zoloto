"use client";

import { Button } from "../ui/button";
import { useContentByTone } from "@/hooks/use-content";
import { useTone } from "@/context/tone-context";
import { cn } from "@/lib/utils";
import type { CasualOverlay } from "@/data/translations/types";
import { tones, type Tone } from "@/types/tone";

/** The profile strings that casual tone rewrites. */
type ToneDependentKey = keyof NonNullable<CasualOverlay["profile"]>;

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
      {/* Main container with defined width */}
      <div className="flex w-full justify-center page-container">
        {/* Hero rectangle container with explicit height */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-8 w-[250px] sm:h-[250px] sm:w-full relative">
          {/* Left Column - Content rectangle */}
          <div className="flex flex-col justify-between h-full items-center sm:w-3/5 sm:items-start">
            {/* Title at the top left */}
            <div className="space-y-2">
              <p className="font-bold tracking-tighter leading-none text-center sm:text-left title">
                {profile.name}
              </p>

              <p className="text-muted-foreground pt-4 text-center sm:text-left subtitle">
                <ToneText text={byTone("title")} />
              </p>
            </div>

            {/* Buttons at the bottom left. Always stacked on mobile, so the
                arrangement never depends on whether the labels fit in 250px */}
            <div className="flex flex-col items-center gap-2 mt-8 sm:mt-0 w-full sm:flex-row sm:flex-wrap sm:justify-start">
              <Button asChild>
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
                className={cn(isCasual && "border border-transparent")}
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

          {/* Right Column - Image aligned to the right edge */}
          <div className="flex items-center justify-center sm:justify-end sm:w-2/5 h-full">
            <div
              className={cn(
                // On short phones (iPhone SE) the photo gives way first, so the
                // stacked column still clears the header and footer: 360px is
                // those 80px plus the name, subtitle and buttons above it.
                // Below 160px the section grows and scrolls instead.
                "relative aspect-square overflow-hidden bg-muted w-full max-w-[clamp(160px,100svh_-_360px,250px)] sm:max-w-[250px] sm:h-full",
                isCasual ? "rounded-full" : "rounded-xl"
              )}
            >
              <img
                src={profile.profileImage || "/placeholder.svg"}
                alt={profile.name}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
