"use client";

import { useTone, toggleTone } from "@/context/tone-context";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/data/translations";
import { Button } from "./ui/button";

export function ToneToggle() {
  const { tone, setTone } = useTone();
  const { language } = useLanguage();
  const t = translations[language];

  const isCasual = tone === "casual";

  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative"
      onClick={() => setTone(toggleTone(tone))}
      aria-label={t.interface.toneToggleLabel}
      aria-pressed={isCasual}
    >
      {/* Wine glass - shown in casual mode */}
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
        className={`h-[1.2rem] w-[1.2rem] transition-all ${
          isCasual ? "rotate-0 scale-100" : "rotate-90 scale-0"
        }`}
      >
        <path d="M8 22h8"></path>
        <path d="M7 10h10"></path>
        <path d="M12 15v7"></path>
        <path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"></path>
      </svg>

      {/* Coffee cup - shown in formal mode */}
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
        className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
          !isCasual ? "rotate-0 scale-100" : "rotate-90 scale-0"
        }`}
      >
        <path d="M10 2v2"></path>
        <path d="M14 2v2"></path>
        <path d="M6 2v2"></path>
        <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"></path>
      </svg>
    </Button>
  );
}
