import { createContext, useContext } from "react";
import type { Language } from "@/types/language";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const defaultLanguage: Language = "en";

export const LanguageContext = createContext<LanguageContextType>({
  language: defaultLanguage,
  setLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);
