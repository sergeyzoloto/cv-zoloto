"use client";

import { Button } from "./ui/button";
import { useLanguage } from "@/context/language-context";
import { languages } from "@/types/language";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Check } from "lucide-react";
import { LanguageIndicator } from "./language-indicator";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  // Find the current language option

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="relative focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none"
          aria-label="Select language"
        >
          <LanguageIndicator />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 min-w-[160px]"
      >
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className="flex items-center justify-between cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <span className="font-medium">{lang.nativeName}</span>
            </div>
            {language === lang.code && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
