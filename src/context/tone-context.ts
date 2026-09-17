import { createContext, useContext } from "react";
import type { Tone } from "@/types/tone";

export type ToneProviderState = {
  tone: Tone;
  setTone: (tone: Tone) => void;
};

export const initialToneState: ToneProviderState = {
  tone: "formal",
  setTone: () => null,
};

export const ToneProviderContext =
  createContext<ToneProviderState>(initialToneState);

// Add a utility function to toggle between formal and casual
export function toggleTone(currentTone: Tone): Tone {
  return currentTone === "casual" ? "formal" : "casual";
}

export const useTone = () => useContext(ToneProviderContext);
