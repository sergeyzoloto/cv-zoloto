"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Section } from "../ui/section";
import { useContent } from "@/hooks/use-content";

export function ContactSection() {
  const t = useContent();
  const contactData = t.contact;

  const contactInfoCard = (
    <Card
      key="contact-info"
      // Adjust height for mobile; casual scrolls with the document instead
      className="overflow-y-auto h-full max-h-[calc(100vh-15rem)] casual:overflow-visible casual:max-h-none casual:h-auto casual:rounded-2xl casual:w-full"
    >
      <CardHeader>
        <CardTitle>{contactData.contactInfoTitle}</CardTitle>
        <CardDescription>{contactData.contactInfoDescription}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {contactData.contactInfo.map((info, index) => (
          <div
            key={`contact-info-${index}`}
            className="flex items-center gap-3"
          >
            {info.icon === "map-pin" && (
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
                className="h-5 w-5 text-muted-foreground"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            )}
            {info.icon === "mail" && (
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
                className="h-5 w-5 text-muted-foreground"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            )}
            {info.icon === "phone" && (
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
                className="h-5 w-5 text-muted-foreground"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            )}
            {info.icon === "github" && (
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
                className="h-5 w-5 text-muted-foreground"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            )}
            {info.icon === "linkedin" && (
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
                className="h-5 w-5 text-muted-foreground"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            )}
            <div>
              <h4 className="font-medium">{info.title}</h4>
              <p className="text-sm text-muted-foreground">
                {(() => {
                  if (info.icon === "mail") {
                    return (
                      <a href={`mailto:${info.value}`} className="underline">
                        {info.value}
                      </a>
                    );
                  } else if (
                    info.icon === "github" ||
                    info.icon === "linkedin"
                  ) {
                    return (
                      <a
                        href={`https://${info.value}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        {info.value}
                      </a>
                    );
                  } else {
                    return info.value;
                  }
                })()}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );

  return (
    <Section
      id="contact"
      title={contactData.title}
      description={contactData.description}
    >
      <div className="flex flex-row justify-center lg:gap-4 xl:gap-8 casual:w-full casual:max-w-2xl casual:mx-auto casual:sm:mx-0">
        {contactInfoCard}
      </div>
    </Section>
  );
}
