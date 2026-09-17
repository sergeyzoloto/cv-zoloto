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
    index: number
  ) => (
    <Card
      key={`experience-${index}`}
      className="overflow-y-auto h-full lg:h-auto flex-[3_1_300px] max-h-[calc(100vh-15rem)]"
    >
      <CardHeader>
        <div className="flex flex-row justify-between gap-4">
          <div className="flex flex-col gap-4">
            <CardTitle>{experience.company}</CardTitle>
            <CardDescription>{experience.position}</CardDescription>
          </div>
          <Badge variant="outline" className="w-fit h-fit">
            {experience.period}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="overflow-y-auto px-4 text-sm xl:text-base">
        {/* Scrollable content */}
        <div className="px-2 space-y-4">
          <div>
            <h4 className="font-medium">
              {experienceData.responsibilitiesLabel}
            </h4>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              {experience.responsibilities.map((responsibility, respIndex) => (
                <li key={`resp-${index}-${respIndex}`}>{responsibility}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium">{experienceData.achievementsLabel}</h4>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              {experience.achievements.map((achievement, achIndex) => (
                <li key={`ach-${index}-${achIndex}`}>{achievement}</li>
              ))}
            </ul>
          </div>
          {experience.technologies && (
            <div>
              <h4 className="font-medium">
                {experienceData.technologiesLabel}
              </h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {experience.technologies.map((tech, techIndex) => (
                  <Badge key={`tech-${index}-${techIndex}`} variant="secondary">
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
    index: number
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
          className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary"
          aria-hidden="true"
        />
        <p className="text-xs uppercase tracking-wide text-muted-foreground">
          {experience.period}
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
                )
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
            renderTimelineEntry(experience, index)
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
          renderExperienceCard(experience, index)
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
