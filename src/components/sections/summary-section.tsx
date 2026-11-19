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

export function SummarySection() {
  const t = useContent();
  const { tone } = useTone();
  const isCasual = tone === "casual";
  const summaryData = t.summary;
  const experienceData = t.experience;
  const educationData = t.education;
  const skillsData = t.skills;

  // Render summary cards
  const renderExperienceCard = (
    experience: (typeof experienceData.items)[0],
    index: number,
  ) => (
    <Card
      key={`summary-${index}`}
      className="transition-all duration-200 motion-reduce:transition-none hover:shadow-md hover:border-primary/40"
    >
      <CardHeader>
        <div className="flex flex-col gap-1 w-full">
          <CardTitle>{experience.company}</CardTitle>
          <CardDescription className="text-primary font-medium">
            {experience.position}
          </CardDescription>
          <p className="font-mono text-xs text-muted-foreground">
            {experience.period.replace(" - ", " → ")}
          </p>
        </div>
      </CardHeader>
      <CardContent className="overflow-y-auto max-h-full px-4">
        {/* Scrollable content */}
        <div className="space-y-4">
          <p className="text-sm mb-0">{experience.shortResponsibilities}</p>
          <p className="text-sm">{experience.shortAchievements}</p>
        </div>
      </CardContent>
    </Card>
  );

  // Render brief intro card
  const renderBriefIntroCard = () => (
    <Card className="md:col-span-2 border-l-4 border-l-primary bg-gradient-to-br from-primary/10 to-card">
      <CardContent>
        <p className="text-base xl:text-xl font-medium">
          {summaryData.briefIntro}
        </p>
      </CardContent>
    </Card>
  );

  // Render skills card
  const renderSkillsCard = () => (
    <Card className="overflow-x-hidden md:col-span-2">
      <CardHeader>
        <CardTitle>{skillsData.title}</CardTitle>
      </CardHeader>
      <CardContent>
        {skillsData.skillSet.map((skill, index) => (
          <Badge
            key={`summary-skill-${index}`}
            variant="secondary"
            className="w-fit h-fit mb-2 mr-2 last:mb-0 last:mr-0 text-sm px-3 py-1 rounded-md border border-transparent transition-all duration-200 motion-reduce:transition-none hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
          >
            {skill}
          </Badge>
        ))}
      </CardContent>
    </Card>
  );

  // Render education card
  const renderEducationCard = () => (
    <Card className="md:col-start-3 md:row-span-2 md:row-start-1">
      <CardHeader>
        <CardTitle>{educationData.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col divide-y divide-border">
          {educationData.education.map((edu, index) => (
            <li
              key={`summary-edu-${index}`}
              className="text-sm flex flex-col gap-2 py-4 first:pt-0 last:pb-0"
            >
              <p className="font-bold">{edu.degree}</p>
              <p className="font-mono text-xs text-muted-foreground">
                {edu.period.replace(" - ", " → ")}
              </p>
              <p>{edu.shortDescription}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );

  // Casual: first sentence leads, the rest recedes
  const introMatch = /^(.+?[.!?])\s+([\s\S]*)$/.exec(summaryData.briefIntro);
  const lead = introMatch ? introMatch[1] : summaryData.briefIntro;
  const rest = introMatch ? introMatch[2] : "";

  // Casual: one prose block instead of the card grid — the details live in
  // the experience, education and skills sections further down.
  if (isCasual) {
    return (
      <Section id="summary" title={summaryData.title}>
        <div className="w-full mx-auto sm:mx-0 lg:grid lg:grid-cols-[1.4fr_1fr] lg:gap-12 space-y-8 lg:space-y-0">
          <Reveal className="border-l-2 border-primary/40 pl-6 max-w-[65ch]">
            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">{lead}</span>
              {rest && ` ${rest}`}
            </p>
          </Reveal>
          <div className="flex flex-wrap content-start gap-2">
            {skillsData.skillSet.map((skill, index) => (
              <Reveal key={`summary-skill-${index}`} delayMs={160 + index * 40}>
                <Badge
                  variant="secondary"
                  className="rounded-full border-0 bg-primary/10 text-primary text-base px-4 py-1.5 cursor-default transition-all duration-200 motion-reduce:transition-none hover:-translate-y-0.5 hover:scale-105 hover:bg-primary hover:text-primary-foreground hover:shadow-md hover:shadow-primary/30 active:scale-95"
                >
                  {skill}
                </Badge>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section id="summary" title={summaryData.title}>
      <div className="flex flex-col justify-center overflow-x-hidden mb-20 lg:mb-4">
        {/* Same three columns as the experience row below: intro and skills
            stacked over two columns, education alone in the third, as tall
            as both */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {renderBriefIntroCard()}
          {renderEducationCard()}
          {renderSkillsCard()}
        </div>
        {/* Render the first three experience cards in a row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {experienceData.items
            .slice(0, 3)
            .map((summary, index) => renderExperienceCard(summary, index))}
        </div>
      </div>
    </Section>
  );
}
