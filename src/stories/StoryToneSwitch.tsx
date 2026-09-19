import { useEffect, useState, type ReactNode } from "react";
import { ToneProviderContext, toggleTone, useTone } from "@/context/tone-context";
import type { Tone } from "@/types/tone";

/**
 * Switches tone in place, like the header toggle does: the children stay
 * mounted and only the context value and the <html> class change. Starts from
 * the toolbar's tone.
 */
export function StoryToneSwitch({ children }: Readonly<{ children: ReactNode }>) {
  const toolbarTone = useTone().tone;
  const [tone, setTone] = useState<Tone>(toolbarTone);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("formal", "casual");
    root.classList.add(tone);
    root.dataset.tone = tone;
  }, [tone]);

  return (
    <ToneProviderContext.Provider value={{ tone, setTone }}>
      {/* Fixed, so it never takes part in the layout under test */}
      <button
        type="button"
        onClick={() => setTone(toggleTone(tone))}
        className="fixed top-2 left-2 z-50 rounded-md border bg-background px-2 py-1 text-xs"
      >
        Switch tone ({tone})
      </button>
      {children}
    </ToneProviderContext.Provider>
  );
}
