"use client";

import { Button } from "../ui/button";
import { useContent } from "@/hooks/use-content";
import { useTone } from "@/context/tone-context";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const t = useContent();
  const { tone } = useTone();
  const isCasual = tone === "casual";
  const profile = t.profile;

  return (
    <section
      id="hero"
      className={cn(
        "min-h-dvh w-full flex items-center justify-center overflow-hidden",
        !isCasual && "snap-start snap-always"
      )}
    >
      {/* Main container with defined width */}
      <div
        className={cn(
          "h-full items-center justify-center flex w-full page-container",
          !isCasual && "section-container"
        )}
      >
        {/* Hero rectangle container with explicit height */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-8 w-[250px] h-full sm:h-[250px] sm:w-full relative">
          {/* Left Column - Content rectangle */}
          <div className="flex flex-col justify-between h-full items-center sm:w-3/5 w-content sm:items-start">
            {/* Title at the top left */}
            <div className="space-y-2">
              <p
                className={cn(
                  "font-bold tracking-tighter text-center sm:text-left title",
                  isCasual ? "leading-tight" : "leading-none"
                )}
              >
                {profile.name}
              </p>

              <p className="text-muted-foreground pt-4 text-center sm:text-left subtitle">
                {profile.title}
              </p>
            </div>

            {/* Buttons at the bottom left */}
            <div className="flex flex-row flex-wrap gap-2 mt-8 sm:mt-0 w-full justify-center sm:justify-start">
              <Button asChild>
                <a href="#contact">
                  {profile.contactButton}
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

              <Button asChild variant={isCasual ? "link" : "outline"}>
                <a href="/SergeyZolotkoResume.pdf" download>
                  {profile.downloadButton}
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
          <div className="flex items-center sm:justify-end sm:w-2/5 h-full">
            <div
              className={cn(
                "relative aspect-square overflow-hidden bg-muted w-full max-w-[250px] sm:h-full",
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
