import type { TranslationData } from "./types";

export const nl: TranslationData = {
  profile: {
    name: "Sergey\u00A0Zolotko",
    title: "Analist-ontwikkelaar gevestigd in\u00A0Nederland",
    profileImage: "/profile-pic.jpg",
    contactButton: "Neem contact op",
    downloadButton: "Download CV",
  },
  summary: {
    title: "Samenvatting",
    briefIntro:
      "Opgeleide bedrijfsanalist die zich nu omschoolt naar webontwikkeling. Verantwoordelijk, gericht op teamwork, nauwkeurig maar flexibel. Vijf+ jaar ervaring als analist in kleine bedrijven en grote ondernemingen, met vaardigheden in budgetplanning en het maken van complexe financiële en marketingmodellen. Dankzij een sterke technische achtergrond als ingenieur en een intensieve codeeropleiding ben ik klaar om in een team te werken als junior ontwikkelaar.",
  },
  experience: {
    title: "Werkervaring",
    description: "Mijn professionele reis in analyse en ontwikkeling",
    items: [
      {
        company: "HackYourFuture, Amsterdam, Nederland",
        position: "Full Stack Web Developer Trainee",
        description:
          "Opleiding ontworpen om alle aspecten van full-stack ontwikkeling te behandelen",
        period: "09/2022 - Heden",
        responsibilities: [
          "Samen met een team een eenvoudige sociale netwerksite gebouwd met online chatfunctie",
        ],
        achievements: [
          "Webtechnologieën geleerd, evenals SCRUM-methoden, samenwerkingstools en presentatievaardigheden",
          "Een single-page app ontwikkeld om snel cocktailrecepten te vinden via een openbare API",
        ],
        technologies: [
          "HTML",
          "CSS",
          "JavaScript",
          "NodeJS",
          "ExpressJS",
          "MySQL",
          "ReactJS",
        ],
        shortResponsibilities:
          "Samen in een team een eenvoudige sociale netwerksite gebouwd",
        shortAchievements: "Mijn carrière in webontwikkeling gestart",
      },
      {
        company: "Mobile TeleSystems (MTS), Moskou, Rusland",
        position: "SQL Data Analist",
        period: "02/2020 - 10/2020",
        description:
          "Grootste mobiele operator van Rusland, beursgenoteerd bedrijf",
        responsibilities: [
          "Werken in een drukke database en optimaliseren van zoekopdrachten",
          "Data verzamelen en ad-hocrapportages maken op grote datasets",
          "Regelmatige rapportages maken over de klantenbasis voor het senior management",
        ],
        achievements: [
          "De impact van COVID-19 op klantgedrag gemeten en gepresenteerd",
        ],
        technologies: ["Teradata", "SQL", "Excel", "PowerPoint"],
        shortResponsibilities:
          "Werken met grote databases voor reguliere en ad-hoc rapportages",
        shortAchievements:
          "Optimaliseren van zoekopdrachten onder de knie gekregen",
      },
      {
        company: "Alfa Bank, Moskou, Rusland",
        position: "Lead Financial Analyst",
        description: "De grootste particuliere bank van Rusland",
        period: "08/2018 - 08/2019",
        responsibilities: [
          "Onderhandelen met belanghebbenden om jaarlijkse plannen goed te keuren",
        ],
        achievements: [
          "Snel SQL geleerd en gebruikt om analyse- en planningsprocessen te verbeteren",
          "Planningsmodellen gemaakt en jaarlijkse budgetplannen opgesteld tijdens reorganisatie",
        ],
        technologies: ["Transact SQL", "Oracle", "PowerPoint", "Excel"],
        shortResponsibilities:
          "Verantwoordelijk voor budgetplanning van de kredietportefeuille",
        shortAchievements: "Jaarplannen opgesteld voor tienduizenden collega’s",
      },
      {
        company: "Mobile TeleSystems (MTS), Moskou, Rusland",
        position: "SQL Data Analist",
        period: "03/2017 - 08/2018",
        description:
          "Grootste mobiele operator van Rusland, beursgenoteerd bedrijf",
        responsibilities: [
          "Gebruik van MS Excel voor financiële data-analyse en modellering, inclusief VBA-macro's",
          "Statistische analyses en plan-versus-werkelijkheid-analyses uitvoeren",
          "Financiële modellen onderhouden en actualiseren voor nauwkeurige prognoses",
        ],
        achievements: ["Samenwerken met teams en jaarbudgetten consolideren"],
        technologies: ["Excel"],
        shortResponsibilities:
          "Onderhouden en bijwerken van tientallen financiële modellen",
        shortAchievements: "Jaarbudgetten per bedrijfsunit geconsolideerd",
      },
      {
        company: "Why Not Wine Bar, Moskou, Rusland",
        position: "Hoofd Marketing",
        period: "08/2014 - 08/2016",
        description:
          "Kleine wijnbar in Moskou, opgezet met externe investeerders",
        responsibilities: [
          "Leidinggeven aan een team van twee en verantwoordelijk voor marketing, PR, SMM en e-mail",
          "Ook technische ondersteuning en administratie verzorgd",
        ],
        achievements: [
          "Een bedrijf vanaf het begin helpen opbouwen",
          "Marketing-, verkoop- en financiële rapportages gemaakt",
        ],
        shortResponsibilities: "",
        shortAchievements: "",
      },
    ],
    responsibilitiesLabel: "Verantwoordelijkheden:",
    achievementsLabel: "Prestaties:",
    technologiesLabel: "Technologieën:",
  },
  education: {
    title: "Opleiding",
    description: "Academische achtergrond en kwalificaties",
    education: [
      {
        degree: "Diploma Ingenieur Transportmachines",
        institution: "Bauman Moscow State Technical University",
        period: "09/2007 - 07/2013",
        description: [
          "5 jaar en 10 maanden opleiding",
          "Sterke basis in wiskunde, werktuigbouwkunde, C-programmering en CAD-systemen",
          "Training in transportoplossingen en ontwerp van transportmachines",
        ],
        shortDescription:
          "5 jaar en 10 maanden opleiding, gelijkwaardig aan een masterdiploma, sterke basis in techniek en programmeren",
      },
      {
        degree: "Diploma Bedrijfsbeheer en Economie",
        institution: "Bauman Moscow State Technical University",
        period: "09/2007 - 07/2013",
        description: [
          "5 jaar opleiding",
          "Financiële, marketing- en technische analyse geleerd, bedrijfseconomie en management",
          "Training in management van industriële en technologische bedrijven",
        ],
        shortDescription:
          "5 jaar opleiding in management en economie van industriële bedrijven",
      },
    ],
  },
  skills: {
    title: "Vaardigheden",
    description: "Mijn technische en soft skills",
    technicalSkillsTitle: "Technische Vaardigheden",
    softSkillsTitle: "Soft Skills",
    skillSet: [
      "HTML, CSS, JS",
      "MongoDB, Express, React, Node",
      "SQL, Python (pandas)",
      "Budgetplanning",
      "Zelfstandig",
      "Snel lerend",
      "Aanpassingsvermogen",
    ],
    technicalSkills: [
      {
        name: "MERN Stack",
        level: "Gevorderd",
        proficiency: 80,
        description:
          "Ervaring met bouwen van webapplicaties met MongoDB, Express, React en Node.js. Kennis van REST API’s en authenticatie.",
      },
      {
        name: "Databases",
        level: "Uitstekend",
        proficiency: 95,
        description:
          "Veel ervaring met relationele databases. Complexe SQL-query’s schrijven en prestaties optimaliseren. Bekend met MongoDB, TransactSQL en Teradata.",
      },
      {
        name: "Programmeren",
        level: "Gemiddeld",
        proficiency: 65,
        description:
          "Technische achtergrond in verschillende talen zoals Pascal, C, VBA en Python. Huidige interesse in fintech en Java.",
      },
      {
        name: "Engels",
        level: "Gevorderd (C1)",
        proficiency: 80,
        description: "Vloeiend in lezen, schrijven en spreken.",
      },
    ],
    softSkills: [
      {
        name: "Analytisch vermogen",
        description:
          "Systematisch denken, probleemoplossend werken, aandacht voor details, ervaring met datamodellering.",
      },
      {
        name: "Mensgericht",
        description:
          "Focus op de behoeften van mensen, klanten en belanghebbenden bij ontwerp en werkprocessen.",
      },
      {
        name: "Generalist",
        description:
          "Snel lerend, flexibel en nieuwsgierig naar verschillende rollen en processen binnen bedrijven.",
      },
      {
        name: "Goede collega",
        description:
          "Gevoelig, empathisch, nauwkeurig, met humor. Flexibele samenwerking met collega's.",
      },
      {
        name: "Procesgericht",
        description:
          "Sterk in betrouwbare resultaten leveren, met focus op procesoptimalisatie.",
      },
      {
        name: "Financiële expertise",
        description:
          "Financiële kennis als basis voor efficiënte werkprocessen en bedrijfsstructuren.",
      },
    ],
    introduction:
      "Financiële planning en ad-hoc analyses vereisen goede communicatie, zowel telefonisch als per e-mail.",
  },
  about: {
    title: "Over Mij",
    description: "",
    cards: [
      {
        title: "Carrièredoel",
        content:
          "Ik zoek een positie als junior ontwikkelaar binnen een professioneel team. Ik wil leren en groeien binnen uitdagende projecten.",
      },
      {
        title: "Wat ik bied",
        content: [
          "betrokkenheid bij bedrijfsbehoeften",
          "technisch inzicht en brede visie",
          "klantgerichtheid en bewezen probleemoplossend vermogen",
        ],
        isListContent: true,
      },
      {
        title: "Wat ik zoek",
        content: [
          "uitdagende projecten en doelen",
          "balans tussen zelfstandig werken en samenwerken",
          "organisatie die groei en leren stimuleert",
        ],
        isListContent: true,
      },
      {
        title: "Persoonlijke interesses",
        content:
          "Gedetailleerde gezinsfinanciën beheren, werken met To Do en Trello, gymnastiek sinds 2016, fietsen, reizen, films, muziek, bordspellen en cocktailcultuur.",
      },
    ],
    interests: [
      { tag: "#workout" },
      { tag: "#cycling" },
      { tag: "#travel" },
      { tag: "#boardgames" },
    ],
  },
  contact: {
    title: "Contact",
    description: "Voel je vrij om contact op te nemen",
    contactInfo: [
      {
        icon: "map-pin",
        title: "Locatie",
        value: "Rotterdam, Nederland",
      },
      {
        icon: "mail",
        title: "Email",
        value: "s.zolotko@gmail.com",
      },
      {
        icon: "phone",
        title: "Telefoon",
        value: "Op aanvraag",
      },
      {
        icon: "github",
        title: "GitHub",
        value: "github.com/sergeyzoloto",
      },
      {
        icon: "linkedin",
        title: "LinkedIn",
        value: "linkedin.com/in/sergey-zolotko",
      },
    ],
    contactInfoTitle: "Contactinformatie",
  },
  navigation: {
    hero: "Start",
    summary: "Samenvatting",
    experience: "Werkervaring",
    education: "Opleiding",
    skills: "Vaardigheden",
    about: "Over",
    contact: "Contact",
    backToTop: "Terug naar boven",
  },
  interface: {
    rotateMessage:
      "Het scherm is te kort om de inhoud goed weer te geven. Draai je apparaat naar de portretmodus.",
    toneToggleLabel: "Informele modus",
  },
};
