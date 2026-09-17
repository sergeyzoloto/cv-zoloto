import { HeroSection } from "../components/sections/hero-section";
import { AboutSection } from "../components/sections/about-section";
import { ExperienceSection } from "../components/sections/experience-section";
import { SkillsSection } from "../components/sections/skills-section";
import { EducationSection } from "../components/sections/education-section";
import { ContactSection } from "../components/sections/contact-section";
import { SummarySection } from "@/components/sections/summary-section";
import { useTone } from "@/context/tone-context";
import { cn } from "@/lib/utils";

function HomePage() {
  const { tone } = useTone();
  const isCasual = tone === "casual";

  return (
    <div className="min-h-dvh bg-background font-sans antialiased">
      {/* Formal: <main> is the scroll container, one section per screen.
          Casual: the document scrolls; pb-16 clears the fixed footer.
          Only the className changes, so the sections are never remounted
          and the IntersectionObservers keep their targets. */}
      <main
        className={cn(
          "scroll-smooth sm:scroll-smooth",
          isCasual
            ? "min-h-dvh pb-16"
            : "snap-y snap-mandatory overflow-y-scroll h-dvh"
        )}
      >
        <HeroSection />
        <SummarySection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default HomePage;
