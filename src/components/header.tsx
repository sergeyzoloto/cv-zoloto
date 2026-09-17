"use client";

import { ModeToggle } from "./mode-toggle";
import { ToneToggle } from "./tone-toggle";
import { LanguageSwitcher } from "./language-switcher";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/data/translations";

export function Header() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <header className="border-none fixed min-w-screen top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-10 items-center justify-between width-container mx-auto">
        <a href="/" className="font-bold mr-6">
          {t.profile.name}
        </a>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Theme toggle and language switcher for mobile - moved outside the dropdown */}
          <LanguageSwitcher />
          <ToneToggle />
          <ModeToggle />
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-2">
          <LanguageSwitcher />
          <ToneToggle />
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
