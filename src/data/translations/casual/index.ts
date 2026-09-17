import type { Language } from "@/types/language";
import type { CasualOverlay, TranslationData } from "../types";
import { casualEn } from "./en";
import { casualRu } from "./ru";
import { casualNl } from "./nl";

export const casualOverlays: Record<Language, CasualOverlay> = {
  en: casualEn,
  ru: casualRu,
  nl: casualNl,
};

/** Merge an overlay array over a base array, item by item, by index. */
function mergeItems<TBase, TOverlay extends Partial<TBase>>(
  base: TBase[],
  overlay?: TOverlay[]
): TBase[] {
  if (!overlay) return base;
  return base.map((item, index) => ({ ...item, ...overlay[index] }));
}

/**
 * Lay the casual voice over the formal translation data.
 *
 * Kept explicit on purpose: a generic deep merge would erase the type
 * information that guarantees the result is still a complete TranslationData.
 */
export function mergeCasual(
  base: TranslationData,
  overlay: CasualOverlay
): TranslationData {
  return {
    ...base,
    profile: { ...base.profile, ...overlay.profile },
    summary: { ...base.summary, ...overlay.summary },
    experience: {
      ...base.experience,
      ...overlay.experience,
      items: mergeItems(base.experience.items, overlay.experience?.items),
    },
    education: {
      ...base.education,
      ...overlay.education,
      education: mergeItems(
        base.education.education,
        overlay.education?.education
      ),
    },
    skills: {
      ...base.skills,
      ...overlay.skills,
      technicalSkills: mergeItems(
        base.skills.technicalSkills,
        overlay.skills?.technicalSkills
      ),
      softSkills: mergeItems(base.skills.softSkills, overlay.skills?.softSkills),
    },
    about: {
      ...base.about,
      ...overlay.about,
      cards: mergeItems(base.about.cards, overlay.about?.cards),
    },
    contact: { ...base.contact, ...overlay.contact },
  };
}
