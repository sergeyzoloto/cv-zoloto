import type { ReactNode } from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { ThemeProvider } from "../components/theme-provider";
import { ToneProvider } from "../components/tone-provider";
import { ScrollProvider } from "../context/scroll-context";
import { useTone } from "@/context/tone-context";

import { usePageTitle } from "@/hooks/use-page-title";
import { NavigationBar } from "@/components/navigation-bar";

interface MainLayoutProps {
  children: ReactNode;
}

// Lives below ToneProvider so it can read the tone and hand it to ScrollProvider,
// whose IntersectionObserver has to be rebuilt when the layout changes.
function LayoutShell({ children }: Readonly<MainLayoutProps>) {
  const { tone } = useTone();

  return (
    <ScrollProvider observeKey={tone}>
      <Header />
      <NavigationBar />
      {children}
      <Footer />
    </ScrollProvider>
  );
}

function MainLayout({ children }: Readonly<MainLayoutProps>) {
  // Update page title based on language
  usePageTitle();

  return (
    <div>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <ToneProvider defaultTone="formal" storageKey="vite-ui-tone">
          <LayoutShell>{children}</LayoutShell>
        </ToneProvider>
      </ThemeProvider>
    </div>
  );
}

export default MainLayout;
