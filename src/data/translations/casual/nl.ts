import type { CasualOverlay } from "../types";

/**
 * Casual voice, Dutch. Same facts as `nl.ts`, relaxed register.
 * Anything not listed here falls through to the formal copy.
 */
export const casualNl: CasualOverlay = {
  profile: {
    title: "Analist die leerde programmeren — inmiddels in Nederland",
    contactButton: "Even kennismaken",
    downloadButton: "Pak het CV",
  },
  summary: {
    title: "Kort samengevat",
    briefIntro:
      "Ik ben opgeleid als bedrijfsanalist en stap nu over naar webontwikkeling. Ruim vijf jaar werkte ik als analist, bij kleine bedrijven én grote ondernemingen: budgetten plannen en complexe financiële en marketingmodellen bouwen. Nauwkeurig waar het moet, flexibel waar het kan. Met een technische achtergrond als ingenieur en een intensieve codeeropleiding erbij ben ik klaar om als junior ontwikkelaar in een team aan de slag te gaan.",
  },
  experience: {
    title: "Waar ik gewerkt heb",
    description: "Eerst analyse, daarna ontwikkeling — zo ben ik hier gekomen",
    responsibilitiesLabel: "Wat ik deed:",
    achievementsLabel: "Wat het opleverde:",
    technologiesLabel: "Waarmee ik werkte:",
    items: [
      {
        description: "Een opleiding die full-stack ontwikkeling helemaal afdekt",
        shortResponsibilities:
          "Met een team een eenvoudige sociale netwerksite gebouwd",
        shortAchievements: "Hier begon mijn carrière in webontwikkeling",
      },
      {
        description: "De grootste mobiele operator van Rusland",
        shortResponsibilities:
          "Leefde in een zwaarbelaste database: reguliere en ad-hoc rapportages",
        shortAchievements: "Query's optimaliseren echt onder de knie gekregen",
      },
      {
        description: "De grootste particuliere bank van Rusland",
        shortResponsibilities:
          "Verantwoordelijk voor de budgetplanning van de kredietportefeuille",
        shortAchievements:
          "Jaarplannen gemaakt waar tienduizenden collega's mee werkten",
      },
      {
        description: "De grootste mobiele operator van Rusland",
        shortResponsibilities:
          "Tientallen financiële modellen kloppend gehouden",
        shortAchievements: "Jaarbudgetten per bedrijfsunit samengebracht",
      },
      {
        description:
          "Een kleine wijnbar in Moskou, geopend door vrienden met een externe investeerder",
      },
    ],
  },
  education: {
    title: "Waar ik studeerde",
    description: "Twee diploma's, één universiteit, zes jaar",
    education: [
      {
        shortDescription:
          "Vijf jaar en tien maanden — gelijkwaardig aan een master, en de reden dat techniek en programmeren vertrouwd voelen",
      },
      {
        shortDescription:
          "Vijf jaar management en economie van industriële en technologische bedrijven",
      },
    ],
  },
  skills: {
    title: "Waar ik goed in ben",
    description: "De technische helft en de menselijke helft",
    technicalSkillsTitle: "De technische helft",
    softSkillsTitle: "De menselijke helft",
    introduction:
      "Financiële planning en ad-hoc analyses vragen veel meer overleg dan je zou denken. Ik leerde bellen om een probleem echt te doorgronden, en het daarna per e-mail vast te leggen.",
  },
  about: {
    title: "Iets over mij",
    description: "",
    cards: [
      {
        title: "Wat ik zoek",
        content:
          "Een plek als junior ontwikkelaar in een team waar ik van kan leren. Uitdagende projecten, goede collega's en ruimte om te groeien.",
      },
      {
        title: "Wat ik meebreng",
      },
      {
        title: "Wat ik hoop te vinden",
      },
      {
        title: "Naast het toetsenbord",
        content:
          "Ik houd de gezinsfinanciën tot in detail bij, regel mijn leven via To Do en Trello en doe sinds 2016 aan gymnastiek. Verder: fietsen, reizen, films, muziek, bordspellen en een zwak voor cocktailcultuur.",
      },
    ],
  },
  contact: {
    title: "Laten we praten",
    description: "Elk van deze kanalen werkt",
    contactInfoTitle: "Waar je me vindt",
  },
};
