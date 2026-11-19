"use client";

import type React from "react";
import { useState, useEffect } from "react";
import type { Language } from "@/types/language";
import { useBrowserLanguage } from "@/hooks/use-browser-language";
import { LanguageContext, defaultLanguage } from "./language-context";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const detectedLanguage = useBrowserLanguage(defaultLanguage);
  const [language, setLanguageState] = useState<Language>(defaultLanguage);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load language preference from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;

    if (savedLanguage && ["en", "ru", "nl"].includes(savedLanguage)) {
      setLanguageState(savedLanguage);
    } else {
      // If no saved preference, use browser language
      setLanguageState(detectedLanguage);
    }

    setIsInitialized(true);
  }, [detectedLanguage]);

  // Save language preference to localStorage when it changes
  const setLanguage = (newLanguage: Language) => {
    localStorage.setItem("language", newLanguage);
    setLanguageState(newLanguage);

    // Update HTML lang attribute for accessibility
    document.documentElement.lang = newLanguage;
  };

  // Set the HTML lang attribute on initial load
  useEffect(() => {
    if (isInitialized) {
      document.documentElement.lang = language;
    }
  }, [language, isInitialized]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
