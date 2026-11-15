import { createContext, useContext } from "react";

export type Theme = "dark" | "light" | "system";

export type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const initialThemeState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

export const ThemeProviderContext =
  createContext<ThemeProviderState>(initialThemeState);

// Add a utility function to toggle between light and dark
export function toggleTheme(currentTheme: Theme): Theme {
  // If system, we need to check what the system theme is
  if (currentTheme === "system") {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    return systemTheme === "dark" ? "light" : "dark";
  }

  // Otherwise just toggle between light and dark
  return currentTheme === "dark" ? "light" : "dark";
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
