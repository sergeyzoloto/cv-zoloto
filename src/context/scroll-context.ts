import { createContext, useContext } from "react";

export const ScrollContext = createContext<{ activeSection: string | null }>({
  activeSection: null,
});

export const useScrollContext = () => useContext(ScrollContext);
