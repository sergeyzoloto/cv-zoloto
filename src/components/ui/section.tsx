"use client";

import React from "react";
import { useContent } from "@/hooks/use-content";
import { useTone } from "@/context/tone-context";

import { useCallback, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { useMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";
import type { CarouselApi } from "./carousel";

export interface SectionProps {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  // Carousel options
  useCarouselOnMobile?: boolean;
  carouselChildrenFilter?: (children: ReactNode) => ReactNode[];
}

export function Section({
  id,
  title,
  description,
  children,
  className = "",
  useCarouselOnMobile = false,
  carouselChildrenFilter,
}: SectionProps) {
  const isMobile = useMobile();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const t = useContent();
  const { tone } = useTone();
  const isCasual = tone === "casual";
  const interfaceData = t.interface;
  const [isScreenTooShort, setIsScreenTooShort] = useState(false);

  // Check if the screen height is too short
  useEffect(() => {
    const checkScreenHeight = () => {
      setIsScreenTooShort(window.innerHeight < 400); // Adjust this value as needed
    };

    checkScreenHeight();
    window.addEventListener("resize", checkScreenHeight);

    return () => window.removeEventListener("resize", checkScreenHeight);
  }, []);

  // Update current slide when carousel changes
  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, [api]);

  // Set up the carousel API
  useEffect(() => {
    if (!api) return;
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  // Extract carousel items if needed
  const carouselItems = carouselChildrenFilter
    ? carouselChildrenFilter(children)
    : React.Children.toArray(children);

  // Casual tone has no viewport clamp, so nothing has to be paged away
  const showCarousel = isMobile && useCarouselOnMobile && !isCasual;
  // ...and nothing can overflow a fixed-height section either
  const showRotateMessage = isScreenTooShort && !isCasual;

  // Render content based on mobile state and carousel option
  const renderContent = () => {
    if (showCarousel) {
      return (
        <div className="w-full h-full flex flex-col justify-center items-center">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {carouselItems.map((child, index) => (
                <CarouselItem key={`carousel-item-${index}`}>
                  {child}
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4 gap-2">
              <CarouselPrevious className="static translate-y-0 translate-x-0" />
              <CarouselNext className="static translate-y-0 translate-x-0" />
            </div>
          </Carousel>
          {carouselItems.length > 1 && (
            <div className="flex justify-center mt-4">
              <div className="flex gap-1">
                {carouselItems.map((_, index) => (
                  <div
                    key={`indicator-${index}`}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      current === index ? "bg-primary" : "bg-primary/30"
                    }`}
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      );
    }

    return (
      <div
        className={cn(
          "w-full flex flex-col items-stretch",
          isCasual ? "" : "h-full justify-center"
        )}
      >
        {children}
      </div>
    );
  };

  return (
    // The element and its id must survive a tone change untouched: the
    // scroll and footer observers hold on to these nodes.
    <section
      id={id}
      className={cn(
        "flex flex-col",
        isCasual ? "scroll-mt-12" : "snap-start snap-always overflow-y-auto",
        className
      )}
    >
      <div
        className={cn(
          "page-container flex flex-col sm:items-center",
          isCasual ? "w-full py-12 lg:py-20" : "section-container h-full"
        )}
      >
        {showRotateMessage && (
          <div className="flex items-center justify-center h-screen bg-background text-muted-foreground">
            <p className="text-center text-sm sm:text-base">
              {interfaceData.rotateMessage}
            </p>
          </div>
        )}
        {!showRotateMessage && (
          <>
            <Reveal
              className={cn(
                "space-y-2 text-center flex-none",
                isCasual ? "sm:text-left sm:self-start" : "xl:mt-4"
              )}
            >
              <h2
                className={cn(
                  "font-bold tracking-tighter",
                  isCasual
                    ? "text-2xl sm:text-3xl xl:text-5xl"
                    : "text-lg sm:text-xl xl:text-3xl"
                )}
              >
                {title}
              </h2>
              {description && (
                <p
                  className={cn(
                    "mx-auto text-muted-foreground",
                    isCasual
                      ? "text-sm sm:text-base xl:text-lg max-w-[65ch] sm:mx-0"
                      : "text-xs sm:text-sm xl:text-base whitespace-nowrap max-w-[700px]"
                  )}
                >
                  {description}
                </p>
              )}
            </Reveal>
            <Reveal
              delayMs={120}
              className={cn(
                "flex flex-col w-full justify-center items-center",
                isCasual ? "mt-6 lg:mt-10" : "flex-1 h-full mt-2 lg:mt-4 xl:mt-6"
              )}
            >
              {renderContent()}
            </Reveal>
          </>
        )}
      </div>
    </section>
  );
}
