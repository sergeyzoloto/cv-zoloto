"use client";

import { useMemo } from "react";
import { useLanguage } from "@/context/language-context";
import { useTone } from "@/context/tone-context";
import { translations } from "@/data/translations";
import { casualOverlays, mergeCasual } from "@/data/translations/casual";
import type { TranslationData } from "@/data/translations/types";
import type { Tone } from "@/types/tone";

/**
 * The copy for the current language in every tone at once.
 *
 * For components that reserve room for the longest variant, so that a tone
 * switch changes the words but never the layout.
 */
export function useContentByTone(): Record<Tone, TranslationData> {
  const { language } = useLanguage();

  return useMemo(() => {
    const formal = translations[language];
    return { formal, casual: mergeCasual(formal, casualOverlays[language]) };
  }, [language]);
}

/**
 * The copy for the current language and tone.
 *
 * Formal returns the translation data untouched; casual lays the informal
 * overlay on top of it, so components keep reading the same shape.
 */
export function useContent(): TranslationData {
  const { tone } = useTone();
  return useContentByTone()[tone];
}
