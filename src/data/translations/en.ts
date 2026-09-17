import type { TranslationData } from "./types";

export const en: TranslationData = {
  profile: {
    name: "Sergey\u00A0Zolotko",
    title: "Analyst-Developer based in\u00A0The\u00A0Netherlands",
    profileImage: "/profile-pic.jpg",
    contactButton: "Contact Me",
    downloadButton: "Download CV",
  },
  summary: {
    title: "Summary",
    briefIntro:
      "Educated business analyst now reconverting in web development. Responsible, teamwork-oriented, meticulous but flexible. Five+ years of experience working as an analyst in both small businesses and major corporations equipped me with skills in budget planning, building complex financial and marketing models. Paired with strong technical skills rooted in an engineer education and an intensive coding boot camp, I'm ready to start working in a team as a junior developer.",
  },
  experience: {
    title: "Work Experience",
    description: "My professional journey in analytics and development",
    items: [
      {
        company: "HackYourFuture, Amsterdam, Netherlands",
        position: "Full Stack Web Developer Trainee",
        description:
          "Course designed to cover all aspects of full-stack development",
        period: "09/2022 - Present",
        responsibilities: [
          "Working in a team, built a simple social networking site with an online chat function",
        ],
        achievements: [
          "Learned web technologies, as well as SCRUM methods, teamwork tools, and presentation",
          "Developed a single-page app to quickly find cocktail recipes via public API",
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
          "Worked in a team, built a simple social networking site with an online chat function",
        shortAchievements: "Started my career in web development",
      },
      {
        company: "Mobile TeleSystems (MTS), Moscow, Russia",
        position: "SQL Data Analyst",
        period: "02/2020 - 10/2020",
        description:
          "Russia’s largest mobile operator, Public Joint Stock Company",
        responsibilities: [
          "Worked in a loaded database, mastered query optimization",
          "Collected data and built ad hoc reports on large data sets",
          "Prepared regular reports on the company customer base for senior management.",
        ],
        achievements: [
          "Measured and demonstrated the COVID-19 impact on the company base behavior",
        ],
        technologies: ["Teradata", "SQL", "Excel", "PowerPoint"],
        shortResponsibilities:
          "Worked in a loaded database for regular and ad hoc reports",
        shortAchievements: "Mastered query optimization",
      },
      {
        company: "Alfa Bank, Moscow, Russia",
        position: "Lead Financial Analyst",
        description: "The largest private bank in Russia",
        period: "08/2018 - 08/2019",
        responsibilities: [
          "Negotiated with stakeholders, including sales departments, regional managers, BI, and external contractors to approve annual plans",
        ],
        achievements: [
          "Quickly adapted and mastered SQL to optimize data analysis and planning process",
          "Built planning models and prepared annual budget plans and reports on the bank's corporate loan portfolio, all in the process of business reorganization and structural changes in the company",
        ],
        technologies: ["Transact SQL", "Oracle", "Power Point", "Excel"],
        shortResponsibilities:
          "Responsible for credit portfolio budget planning",
        shortAchievements:
          "Prepared annual plans for dozens of thousands of colleagues",
      },
      {
        company: "Mobile TeleSystems (MTS), Moscow, Russia",
        position: "SQL Data Analyst",
        period: "03/2017 - 08/2018",
        description:
          "Russia’s largest mobile operator, Public Joint Stock Company",
        responsibilities: [
          "Used MS Excel for financial data intelligence and modeling, including writing macros in VBA",
          "Performed statistical and plan-fact-analysis",
          "Maintained and updated dozens of financial models, ensuring the required accuracy in PL forecasting",
        ],
        achievements: [
          "Collaborated with cross-functional teams, coordinated with plans contractors, processed feedback, and corrected budget plans",
          "Consolidated annual detailed budget plans by business units",
        ],
        technologies: ["Excel", "Excel again", "one more time Excel"],
        shortResponsibilities:
          "Maintained and updated dozens of financial models",
        shortAchievements:
          "Consolidated annual detailed budget plans by business units",
      },
      {
        company: "Why Not Wine Bar, Moscow, Russia",
        position: "Head of Marketing",
        period: "08/2014 - 08/2016",
        description:
          "Small bar in Moscow, opened by friends with an outside investor involved and focused on wine",
        responsibilities: [
          "Led a team of 2 colleagues and oversaw marketing, PR, SMM, and email",
          "Took various side responsibilities, such as technical support, administration, etc.",
        ],
        achievements: [
          "Participated in starting a business from scratch",
          "Created marketing, sales, and financial reports performing regular analysis",
        ],
        shortResponsibilities: "",
        shortAchievements: "",
      },
    ],
    responsibilitiesLabel: "Responsibilities:",
    achievementsLabel: "Achievements:",
    technologiesLabel: "Technologies:",
  },
  education: {
    title: "Education",
    description: "Academic background and qualifications",
    education: [
      {
        degree: "Specialist Diploma in Transport Machines Engineering",
        institution: "Bauman Moscow State Technical University",
        period: "09/2007 - 07/2013",
        description: [
          "5 year and 10 month Programme",
          "Gained a solid mathematical and general engineering foundation, machine design skills, mastered C programming, computer-aided design systems",
          "Trained in transportation infrastructure solutions, material handling machines and continuous transportation machines design",
        ],
        shortDescription:
          "5 year and 10 month Programme, equivalent to a Master's degree, solid foundation in engineering and programming",
      },
      {
        degree: "Specialist Diploma in Enterprise Management and Economics",
        institution: "Bauman Moscow State Technical University",
        period: "09/2007 - 07/2013",
        description: [
          "5 year Programme",
          "Studied financial, marketing and technical analysis, organizational and economic modeling and business projection",
          "Trained in management of industrial and tech enterprises",
        ],
        shortDescription:
          "5 year Programme, training in management and economics of industrial and tech enterprises",
      },
    ],
  },
  skills: {
    title: "Skills",
    description: "My technical and soft skills",
    technicalSkillsTitle: "Technical Skills",
    softSkillsTitle: "Soft Skills",
    skillSet: [
      "HTML, CSS, JS",
      "MongoDB, Express, React, Node",
      "SQL, Python (pandas)",
      "Budget Planning",
      "Independent",
      "Fast learner",
      "Adaptive",
    ],
    technicalSkills: [
      {
        name: "MERN Stack",
        level: "Advanced",
        proficiency: 80,
        description:
          "My main stack was MERN, so I understand the JavaScript design best. Built web applications using MongoDB, Express, React, and Node.js. Experience with RESTful APIs and authentication.",
      },
      {
        name: "Databases",
        level: "Excellent",
        proficiency: 95,
        description:
          "My major advantage is my long experience with relational databases. I have written financial models using sequel alone, for which I have earned a reputation as a master of SQL among my colleagues. Experience with MongoDB, TransactSQL, and Teradata. Skilled in writing complex queries and optimizing performance.",
      },
      {
        name: "Programming",
        level: "Intermediate",
        proficiency: 65,
        description:
          "Not just another newbie in the IT world, I am a real tech guy. I have experience with several programming languages. Pascal in school and C in university. In my job, I have used VBA and Python to automate processes and SQL scripting to handle data. I have a great interest in fintech, so I am mastering Java. I don't need to be taught from scratch, I am proficient in git, GitHub. Docker, Linux, etc. I always manage to master new technology, just tell me what you need.",
      },
      {
        name: "English",
        level: "Advanced (C1)",
        proficiency: 80,
        description: "Fluent in reading, writing, and speaking.",
      },
    ],
    softSkills: [
      {
        name: "Analytical approach",
        description:
          "Systematic, analytical and critical thinking, problem-solving skills, data based modeling. Special attention to details as I know the importance of checking, testing, and validating data.",
      },
      {
        name: "Human-oriented",
        description:
          "At the heart of my approach are the principles and practices of human-centered design, which shifts the focus from technology to the needs of people, stakeholders and customers.",
      },

      {
        name: "Generalist",
        description:
          "I am a fast learner, a generalist, and an experimentalist. I enjoy trying out different roles and gradually gaining a better understanding of how businesses operate.",
      },
      {
        name: "Real comrade",
        description:
          "I'm sensitive, empathic, meticulous but humorous. My approach gives me more flexibility and makes it easier for me to find a common language with colleagues.",
      },
      {
        name: "Process-oriented",
        description:
          "My rational focus on results, reliability, and responsible attitude towards work says a lot about my productivity skills.",
      },
      {
        name: "Financial expertise",
        description:
          "Experience in finance is not just a set of skills, it is a specific perspective and mindset aimed at building efficient processes. Amen.",
      },
    ],
    introduction:
      "Making financial plans and conducting ad-hoc analytics requires a lot more communication than you first think it should. I had to learn how to use the phone to diagnose problems firsthand and how to confirm agreements by email.",
  },
  about: {
    title: "About Me",
    description: "",
    cards: [
      {
        title: "Career Goal",
        content:
          "I am looking for a position as a junior developer in a team of professionals. I want to work on interesting projects, learn from my colleagues, and grow as a developer.",
      },
      {
        title: "What I Offer",
        content: [
          "responsive attitude with business' needs in mind",
          "excellent balance of technical intelligence and broad mindset",
          "customer focus, a proven track record of problem solving and conflict management",
        ],
        isListContent: true,
      },
      {
        title: "What I'm Looking For",
        content: [
          "challenging projects, ambitious goals, collaborative environment",
          "balance between autonomous work, team-, and cross-functional interactions",
          "organization that encourages a growth mindset and fosters a try-and-fail culture",
        ],
        isListContent: true,
      },
      {
        title: "Personal Interests",
        content:
          "I maintain detailed family finances, use To Do and Trello for personal organization, and have been practicing gymnastics since 2016. I enjoy cycling, traveling, movies, music, board games, and cocktail culture.",
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
    title: "In Touch",
    description: "Feel free to reach me out",
    contactInfo: [
      {
        icon: "map-pin",
        title: "Location",
        value: "Rotterdam, The Netherlands",
      },
      {
        icon: "mail",
        title: "Email",
        value: "s.zolotko@gmail.com",
      },
      {
        icon: "phone",
        title: "Phone",
        value: "Available upon request",
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
    contactInfoTitle: "Contact Info",
  },
  navigation: {
    hero: "Start",
    summary: "Summary",
    experience: "Experience",
    education: "Education",
    skills: "Skills",
    about: "About",
    contact: "Contact",
    backToTop: "Back to top",
  },
  interface: {
    rotateMessage:
      "Screen height is too short to display the content properly. Please rotate your device to portrait mode.",
    toneToggleLabel: "Relaxed mode",
  },
};
