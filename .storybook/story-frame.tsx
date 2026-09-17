import { useEffect, type ReactNode } from "react";
import { LanguageProvider } from "../src/context/language-context";
import { ToneProviderContext } from "../src/context/tone-context";
import type { Tone } from "../src/types/tone";

export type Theme = "light" | "dark";

/**
 * Applies the toolbar's theme and tone to the story iframe's <html> and injects
 * the tone context directly, so stories never touch localStorage and the
 * toolbar stays the single source of truth.
 */
export function StoryFrame({
  theme,
  tone,
  children,
}: Readonly<{ theme: Theme; tone: Tone; children: ReactNode }>) {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark", "formal", "casual");
    root.classList.add(theme, tone);
    root.dataset.tone = tone;
  }, [theme, tone]);

  return (
    <LanguageProvider>
      <ToneProviderContext.Provider value={{ tone, setTone: () => null }}>
        {children}
      </ToneProviderContext.Provider>
    </LanguageProvider>
  );
}
