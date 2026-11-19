"use client";

import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/data/translations";
import { useScrollContext } from "@/context/scroll-context";
import { Button } from "./ui/button";
import links from "@/data/links";

export function Footer() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];
  const observerRef = useRef<IntersectionObserver | null>(null);
  const { activeSection } = useScrollContext();

  // Set up the IntersectionObserver to detect when the hero section is not in view
  useEffect(() => {
    // Create a new IntersectionObserver
    observerRef.current = new IntersectionObserver(
      (entries) => {
        // When the hero section is not intersecting (not visible),
        // it means we've scrolled down
        const [entry] = entries;
        // Update the isScrolled state based on the intersection
        setIsScrolled(!entry.isIntersecting);
      },
      {
        // Set a threshold that works well with snap scrolling
        threshold: 0.1,
        // Use the viewport as the root
        root: null,
      }
    );

    // Target the hero section (top of the page)
    const heroSection = document.getElementById(`${links.hero.slice(1)}`);

    if (heroSection) {
      observerRef.current.observe(heroSection);
    }

    return () => {
      // Clean up the observer
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const getNextSectionName = () => {
    const sections = document.querySelectorAll("section[id]");
    const currentIndex = Array.from(sections).findIndex(
      (section) => section.id === activeSection
    );
    if (currentIndex !== -1 && currentIndex < sections.length - 1) {
      const nextSection = sections[currentIndex + 1];
      const nextSectionId = nextSection.getAttribute(
        "id"
      ) as keyof typeof t.navigation;
      return nextSectionId ? t.navigation[nextSectionId] : t.navigation.contact;
    }
    return null; // No next section
  };

  const scrollToNextSection = () => {
    const sections = document.querySelectorAll("section[id]");
    const currentIndex = Array.from(sections).findIndex(
      (section) => section.id === activeSection
    );
    if (currentIndex !== -1 && currentIndex < sections.length - 1) {
      const nextSection = sections[currentIndex + 1];
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="app-bar border-none fixed inset-x-0 bottom-0 z-50 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center justify-between h-10 flex-row width-container mx-auto">
        <div className="flex items-center flex-row gap-2 px-0 pt-0">
          <a
            href={links.hero}
            className={`text-sm font-medium text-muted-foreground hover:text-primary underline transition-all duration-300 ${
              isScrolled
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
            aria-hidden={!isScrolled}
          >
            {t.navigation.backToTop}
          </a>
        </div>
        <div className="flex gap-4 md:pr-4">
          {getNextSectionName() && (
            <Button
              onClick={scrollToNextSection}
              variant="ghost"
              size="sm"
              className="text-muted-foreground underline"
            >
              {getNextSectionName()}
            </Button>
          )}
        </div>
      </div>
    </footer>
  );
}
