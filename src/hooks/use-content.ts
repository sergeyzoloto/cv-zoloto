"use client";

import { useMemo } from "react";
import { useLanguage } from "@/context/language-context";
import { useTone } from "@/context/tone-context";
import { translations } from "@/data/translations";
import { casualOverlays, mergeCasual } from "@/data/translations/casual";
import type { TranslationData } from "@/data/translations/types";

/**
 * The copy for the current language and tone.
 *
 * Formal returns the translation data untouched; casual lays the informal
 * overlay on top of it, so components keep reading the same shape.
 */
export function useContent(): TranslationData {
  const { language } = useLanguage();
  const { tone } = useTone();

  return useMemo(() => {
    const base = translations[language];
    return tone === "casual"
      ? mergeCasual(base, casualOverlays[language])
      : base;
  }, [language, tone]);
}
