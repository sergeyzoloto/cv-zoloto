"use client";

import type React from "react";
import { useEffect, useState, useMemo } from "react";
import { ToneProviderContext } from "@/context/tone-context";
import { isTone, type Tone } from "@/types/tone";

type ToneProviderProps = Readonly<{
  children: React.ReactNode;
  defaultTone?: Tone;
  storageKey?: string;
}>;

export function ToneProvider({
  children,
  defaultTone = "formal",
  storageKey = "vite-ui-tone",
  ...props
}: ToneProviderProps) {
  const [tone, setTone] = useState<Tone>(() => {
    const stored = localStorage.getItem(storageKey);
    return isTone(stored) ? stored : defaultTone;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("formal", "casual");
    root.classList.add(tone);
    root.dataset.tone = tone;
  }, [tone]);

  const value = useMemo(
    () => ({
      tone,
      setTone: (tone: Tone) => {
        localStorage.setItem(storageKey, tone);
        setTone(tone);
      },
    }),
    [tone, storageKey]
  );

  return (
    <ToneProviderContext.Provider {...props} value={value}>
      {children}
    </ToneProviderContext.Provider>
  );
}
