"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { Section } from "../ui/section";
import { Reveal } from "../ui/reveal";
import { useContent } from "@/hooks/use-content";
import { useTone } from "@/context/tone-context";

export function SkillsSection() {
  const t = useContent();
  const { tone } = useTone();
  const isCasual = tone === "casual";
  const skillsData = t.skills;

  const technicalSkillsCard = (
    <Card
      key="technical-skills"
      className="overflow-y-auto h-full lg:h-auto flex-[3_1_300px] max-h-[calc(100vh-15rem)]"
    >
      <CardHeader>
        <CardTitle>{skillsData.technicalSkillsTitle}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {skillsData.technicalSkills.map((skill, index) => (
          <div key={`tech-skill-${index}`} className="space-y-2">
            <div className="flex justify-between">
              <h4 className="font-medium">{skill.name}</h4>
              <span>{skill.level}</span>
            </div>
            <Progress value={skill.proficiency || 50} />
            {skill.description && (
              <p className="text-sm text-muted-foreground">
                {skill.description}
              </p>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );

  const softSkillsCard = (
    <Card
      key="soft-skills"
      className="overflow-y-auto h-full lg:h-auto flex-[3_1_300px] max-h-[calc(100vh-15rem)]"
    >
      <CardHeader>
        <CardTitle>{skillsData.softSkillsTitle}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          {skillsData.introduction}
        </p>
        <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
          {skillsData.softSkills.map((skill, index) => (
            <div key={`soft-skill-${index}`} className="space-y-2">
              <Badge className="w-full justify-center py-1.5">
                {skill.name}
              </Badge>
              <p className="text-sm text-muted-foreground text-center">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  // Casual: the same skills, full width and unpacked instead of two cards
  if (isCasual) {
    return (
      <Section
        id="skills"
        title={skillsData.title}
        description={skillsData.description}
      >
        <div className="w-full max-w-3xl mx-auto sm:mx-0 space-y-12">
          <div className="space-y-6">
            <h3 className="text-lg sm:text-xl font-semibold">
              {skillsData.technicalSkillsTitle}
            </h3>
            {skillsData.technicalSkills.map((skill, index) => (
              <Reveal
                key={`casual-tech-skill-${index}`}
                delayMs={index * 80}
                className="space-y-2"
              >
                <div className="flex justify-between items-baseline gap-4">
                  <h4 className="font-medium">{skill.name}</h4>
                  <span className="text-sm text-muted-foreground">
                    {skill.level}
                  </span>
                </div>
                <Progress value={skill.proficiency || 50} />
                {skill.description && (
                  <p className="text-sm text-muted-foreground max-w-[65ch]">
                    {skill.description}
                  </p>
                )}
              </Reveal>
            ))}
          </div>

          <div className="space-y-6">
            <h3 className="text-lg sm:text-xl font-semibold">
              {skillsData.softSkillsTitle}
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-[65ch]">
              {skillsData.introduction}
            </p>
            <div className="space-y-4">
              {skillsData.softSkills.map((skill, index) => (
                <Reveal
                  key={`casual-soft-skill-${index}`}
                  delayMs={index * 60}
                  className="space-y-1"
                >
                  <Badge variant="outline" className="text-sm px-3 py-1">
                    {skill.name}
                  </Badge>
                  <p className="text-sm text-muted-foreground max-w-[65ch]">
                    {skill.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section
      id="skills"
      title={skillsData.title}
      description={skillsData.description}
      useCarouselOnMobile={true}
      carouselChildrenFilter={() => [technicalSkillsCard, softSkillsCard]}
    >
      <div className="flex flex-row lg:gap-4 xl:gap-8">
        {technicalSkillsCard}
        {softSkillsCard}
      </div>
    </Section>
  );
}
