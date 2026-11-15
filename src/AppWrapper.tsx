import { BrowserRouter as Router } from "react-router-dom";
import { LanguageProvider } from "./context/language-provider";

/**
 * This component wraps our App with the providers
 * that we do not want to have in our tests
 */
import type { ReactNode } from "react";

function AppWrapper({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <Router>
      <LanguageProvider>{children}</LanguageProvider>
    </Router>
  );
}

export default AppWrapper;
