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

export function EducationSection() {
  const t = useContent();
  const { tone } = useTone();
  const isCasual = tone === "casual";
  const educationData = t.education;

  const educationCards = educationData.education.map((edu, index) => (
    <Card
      key={`education-${index}`}
      className="overflow-y-auto flex-[1_1_300px] h-full lg:h-auto max-h-[calc(100vh-15rem)]"
    >
      <CardHeader className="flex flex-row flex-wrap items-start justify-between gap-4">
        <div className="flex flex-row items-center gap-4 mb-2">
          <div className="flex min-h-12 min-w-12 items-center justify-center rounded-full bg-primary/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-primary"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
            </svg>
          </div>
          <div className="flex flex-col gap-2">
            <CardTitle>{edu.degree}</CardTitle>
            <CardDescription>{edu.institution}</CardDescription>
          </div>
        </div>
        <Badge variant="outline" className="text-sm">
          {edu.period}
        </Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="ml-auto"></div>
        {edu.description.map((desc, descIndex) => (
          <p
            key={`edu-desc-${index}-${descIndex}`}
            className="text-sm md:text-base"
          >
            {desc}
          </p>
        ))}
      </CardContent>
    </Card>
  ));

  // Casual: the same two diplomas as timeline rows
  if (isCasual) {
    return (
      <Section
        id="education"
        title={educationData.title}
        description={educationData.description}
      >
        <div className="w-full max-w-3xl mx-auto sm:mx-0">
          {educationData.education.map((edu, index) => (
            <Reveal
              key={`education-timeline-${index}`}
              delayMs={index * 80}
              className="relative pl-6 sm:pl-8 pb-10 last:pb-0 border-l border-border"
            >
              <span
                className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary"
                aria-hidden="true"
              />
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                {edu.period}
              </p>
              <h3 className="mt-1 text-lg sm:text-xl font-semibold">
                {edu.degree}
              </h3>
              <p className="text-sm text-muted-foreground">{edu.institution}</p>
              <p className="mt-3 text-sm sm:text-base max-w-[65ch]">
                {edu.shortDescription}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>
    );
  }

  return (
    <Section
      id="education"
      title={educationData.title}
      description={educationData.description}
      useCarouselOnMobile={true}
      carouselChildrenFilter={() => educationCards}
    >
      <div className="flex lg:gap-4 xl:gap-8">{educationCards}</div>
    </Section>
  );
}
