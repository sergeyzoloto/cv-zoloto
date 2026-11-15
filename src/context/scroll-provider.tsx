// src/context/scroll-provider.tsx
import React, { useEffect, useRef, useState } from "react";
import { ScrollContext } from "./scroll-context";

export const ScrollProvider: React.FC<{
  children: React.ReactNode;
  /** Change this whenever the set of observed sections may have changed
   *  (e.g. the presentation tone) to rebuild the observer. */
  observeKey?: string;
}> = ({ children, observeKey }) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          const mostVisible = visibleEntries.sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio
          )[0];
          const newSectionId = mostVisible.target.id;

          setActiveSection((prev) => {
            if (prev !== newSectionId) {
              return newSectionId;
            }
            return prev;
          });
        }
      },
      { threshold: 0.5 }
    );

    observerRef.current = observer;
    document
      .querySelectorAll("section[id]")
      .forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, [observeKey]); // ✅ Re-observe when the section set may have changed

  return (
    <ScrollContext.Provider value={{ activeSection }}>
      {children}
    </ScrollContext.Provider>
  );
};
