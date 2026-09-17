export type Tone = "formal" | "casual";

export const tones: Tone[] = ["formal", "casual"];

export function isTone(value: unknown): value is Tone {
  return value === "formal" || value === "casual";
}
