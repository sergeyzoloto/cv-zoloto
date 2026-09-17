"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Section } from "../ui/section";
import { useContent } from "@/hooks/use-content";
import { cn } from "@/lib/utils";

export function AboutSection() {
  const t = useContent();
  const aboutData = t.about;

  // The interest tags belong to the last card; matching on its English title
  // used to hide them in every other language, and breaks once the casual
  // voice renames it.
  const interestsCardIndex = aboutData.cards.length - 1;

  const aboutCards = aboutData.cards.map((card, index) => (
    <Card
      key={`about-card-${index}`}
      className={cn(
        "overflow-y-auto first:text-base first:xs:text-lg first:2xl:text-2xl",
        // Casual: the cards become plain prose blocks
        "casual:overflow-visible casual:border-0 casual:bg-transparent casual:shadow-none casual:py-0 casual:[&>*]:px-0 casual:gap-3",
        index >= aboutData.cards.length - 2
          ? "flex-[1_1_auto] lg:flex-[1_1_48%]"
          : "flex-[1_1_auto]"
      )} // Adjust width for the last two cards
    >
      <CardHeader>
        <CardTitle>{card.title}</CardTitle>
      </CardHeader>
      <CardContent>
        {card.isListContent ? (
          <ul className="list-disc pl-5 space-y-2">
            {(card.content as string[]).map((item, itemIndex) => (
              <li key={`list-item-${index}-${itemIndex}`}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{card.content as string}</p>
        )}

        {index === interestsCardIndex && (
          <div className="flex flex-wrap gap-2 mt-4">
            {aboutData.interests.map((interest, interestIndex) => (
              <span
                key={`interest-${interestIndex}`}
                className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary casual:text-sm casual:px-3 casual:py-1.5"
              >
                {interest.tag}
              </span>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  ));

  return (
    <Section
      id="about"
      title={aboutData.title}
      description={aboutData.description}
    >
      <div className="flex flex-row flex-wrap gap-2 lg:gap-4 xl:gap-8 mb-20 lg:mb-4 casual:flex-col casual:flex-nowrap casual:gap-10 casual:mb-0 casual:max-w-[65ch] casual:w-full">
        {aboutCards}
      </div>
    </Section>
  );
}
