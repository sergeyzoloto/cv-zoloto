import type { CasualOverlay } from "../types";

/**
 * Casual voice, English. Same facts as `en.ts`, relaxed register.
 * Anything not listed here falls through to the formal copy.
 */
export const casualEn: CasualOverlay = {
  profile: {
    title: "Analyst who went and learned to code — now in the Netherlands",
    contactButton: "Say hello",
    downloadButton: "Grab the CV",
  },
  summary: {
    title: "The short version",
    briefIntro:
      "I trained as a business analyst and I'm now moving into web development. Five-plus years in small businesses and big corporations taught me budget planning and how to build complex financial and marketing models — meticulous where it counts, flexible everywhere else. Add an engineering education and an intensive coding boot camp on top, and I'm ready to join a team as a junior developer.",
  },
  experience: {
    title: "Where I've worked",
    description: "Analytics, then development — how I got here",
    responsibilitiesLabel: "What I did:",
    achievementsLabel: "What came out of it:",
    technologiesLabel: "What I used:",
    items: [
      {
        description: "A course covering every corner of full-stack development",
        shortResponsibilities:
          "Built a small social network with live chat, together with a team",
        shortAchievements: "This is where my web development career starts",
      },
      {
        description: "Russia's largest mobile operator",
        shortResponsibilities:
          "Lived in a heavily loaded database, writing regular and ad hoc reports",
        shortAchievements: "Got properly good at optimising queries",
      },
      {
        description: "The largest private bank in Russia",
        shortResponsibilities:
          "Owned budget planning for the corporate loan portfolio",
        shortAchievements:
          "Built the annual plans that tens of thousands of colleagues worked to",
      },
      {
        description: "Russia's largest mobile operator",
        shortResponsibilities:
          "Kept dozens of financial models alive and accurate",
        shortAchievements:
          "Pulled the detailed annual budget plans together, business unit by business unit",
      },
      {
        position: "Head of Marketing",
        description:
          "A small wine-focused bar in Moscow, opened by friends with an outside investor",
      },
    ],
  },
  education: {
    title: "Where I studied",
    description: "Two diplomas, one university, six years",
    education: [
      {
        shortDescription:
          "Five years and ten months — a Master's equivalent, and the reason engineering and programming feel like home",
      },
      {
        shortDescription:
          "Five years of management and economics for industrial and tech companies",
      },
    ],
  },
  skills: {
    title: "What I'm good at",
    description: "The technical half and the human half",
    technicalSkillsTitle: "The technical half",
    softSkillsTitle: "The human half",
    introduction:
      "Financial plans and ad-hoc analytics turn out to need far more conversation than you'd expect. I learned to pick up the phone to get to the bottom of a problem, and to put the agreement in an email afterwards.",
  },
  about: {
    title: "A bit about me",
    description: "",
    cards: [
      {
        title: "What I'm after",
        content:
          "A junior developer seat in a team of people who know more than I do. Interesting projects, colleagues to learn from, and room to grow.",
      },
      {
        title: "What I bring",
      },
      {
        title: "What I'm hoping to find",
      },
      {
        title: "Away from the keyboard",
        content:
          "I keep the family finances in detail, run my life out of To Do and Trello, and have been doing gymnastics since 2016. Otherwise: cycling, travelling, films, music, board games, and a long-standing soft spot for cocktail culture.",
      },
    ],
  },
  contact: {
    title: "Let's talk",
    description: "Any of these reach me",
    contactInfoTitle: "How to find me",
  },
};
