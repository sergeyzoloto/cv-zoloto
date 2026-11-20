"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Section } from "../ui/section";
import { Reveal } from "../ui/reveal";
import { useContent } from "@/hooks/use-content";
import { useTone } from "@/context/tone-context";

export function ExperienceSection() {
  const t = useContent();
  const { tone } = useTone();
  const isCasual = tone === "casual";
  const experienceData = t.experience;

  // Render experience cards
  const renderExperienceCard = (
    experience: (typeof experienceData.items)[0],
    index: number,
  ) => (
    <Card
      key={`experience-${index}`}
      className="h-full lg:h-auto flex-[3_1_300px] transition-all duration-200 motion-reduce:transition-none hover:shadow-md hover:border-primary/40"
    >
      <CardHeader>
        <div className="flex flex-col gap-1">
          <CardTitle>{experience.company}</CardTitle>
          <CardDescription className="text-primary font-medium">
            {experience.position}
          </CardDescription>
          <p className="font-mono text-xs text-muted-foreground">
            {experience.period.replace(" - ", " → ")}
          </p>
        </div>
      </CardHeader>
      <CardContent className="px-4 text-sm xl:text-base">
        {/* Scrollable content */}
        <div className="px-2 space-y-4">
          <div>
            <h4 className="font-medium text-primary">
              {experienceData.responsibilitiesLabel}
            </h4>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              {experience.responsibilities.map((responsibility, respIndex) => (
                <li key={`resp-${index}-${respIndex}`}>{responsibility}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-primary">
              {experienceData.achievementsLabel}
            </h4>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              {experience.achievements.map((achievement, achIndex) => (
                <li key={`ach-${index}-${achIndex}`}>{achievement}</li>
              ))}
            </ul>
          </div>
          {experience.technologies && (
            <div>
              <h4 className="font-medium text-primary">
                {experienceData.technologiesLabel}
              </h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {experience.technologies.map((tech, techIndex) => (
                  <Badge
                    key={`tech-${index}-${techIndex}`}
                    variant="secondary"
                    className="border border-transparent transition-all duration-200 motion-reduce:transition-none hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );

  // Casual: every role on one timeline, told in short prose
  const renderTimelineEntry = (
    experience: (typeof experienceData.items)[0],
    index: number,
  ) => {
    const shortLines = [
      experience.shortResponsibilities,
      experience.shortAchievements,
    ].filter(Boolean);

    return (
      <Reveal
        key={`experience-timeline-${index}`}
        delayMs={index * 80}
        className="relative pl-6 sm:pl-8 pb-10 last:pb-0 border-l border-border"
      >
        <span
          className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-primary/20"
          aria-hidden="true"
        />
        <p className="font-mono text-xs text-muted-foreground">
          {experience.period.replace(" - ", " → ")}
        </p>
        <h3 className="mt-1 text-lg sm:text-xl font-semibold">
          {experience.position}
        </h3>
        <p className="text-sm text-muted-foreground">{experience.company}</p>
        {experience.description && (
          <p className="mt-1 text-sm text-muted-foreground italic">
            {experience.description}
          </p>
        )}
        <div className="mt-3 space-y-2 text-sm sm:text-base max-w-[65ch]">
          {shortLines.length > 0 ? (
            shortLines.map((line, lineIndex) => (
              <p key={`experience-line-${index}-${lineIndex}`}>{line}</p>
            ))
          ) : (
            // The oldest role has no short summary written for it
            <ul className="list-disc pl-5 space-y-1">
              {[...experience.responsibilities, ...experience.achievements].map(
                (line, lineIndex) => (
                  <li key={`experience-full-${index}-${lineIndex}`}>{line}</li>
                ),
              )}
            </ul>
          )}
        </div>
        {experience.technologies && (
          <div className="flex flex-wrap gap-2 mt-3">
            {experience.technologies.map((tech, techIndex) => (
              <Badge
                key={`timeline-tech-${index}-${techIndex}`}
                variant="secondary"
                className="rounded-full border-0 bg-primary/10 text-primary cursor-default transition-all duration-200 motion-reduce:transition-none hover:-translate-y-0.5 hover:scale-105 hover:bg-primary hover:text-primary-foreground hover:shadow-md hover:shadow-primary/30 active:scale-95"
              >
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </Reveal>
    );
  };

  if (isCasual) {
    return (
      <Section
        id="experience"
        title={experienceData.title}
        description={experienceData.description}
      >
        <div className="w-full max-w-3xl mx-auto sm:mx-0">
          {experienceData.items.map((experience, index) =>
            renderTimelineEntry(experience, index),
          )}
        </div>
      </Section>
    );
  }

  return (
    <Section
      id="experience"
      title={experienceData.title}
      description={experienceData.description}
      useCarouselOnMobile={true}
      carouselChildrenFilter={() =>
        experienceData.items.map((experience, index) =>
          renderExperienceCard(experience, index),
        )
      }
    >
      <div className="flex flex-row lg:gap-4 xl:gap-8">
        {experienceData.items
          .slice(0, 3)
          .map((experience, index) => renderExperienceCard(experience, index))}
      </div>
    </Section>
  );
}
