export interface ProfileTranslation {
  name: string;
  title: string;
  profileImage: string;
  contactButton: string;
  downloadButton: string;
}

export interface InterfaceTranslation {
  rotateMessage: string;
  /** Accessible name of the formal/casual toggle. Describes the current state,
   *  because the button carries aria-pressed. */
  toneToggleLabel: string;
}

export interface ExperienceItemTranslation {
  company: string;
  position: string;
  description?: string;
  period: string;
  responsibilities: string[];
  achievements: string[];
  technologies?: string[];
  shortResponsibilities: string;
  shortAchievements: string;
}

export interface ExperienceTranslation {
  title: string;
  description: string;
  items: ExperienceItemTranslation[];
  responsibilitiesLabel: string;
  achievementsLabel: string;
  technologiesLabel: string;
}

export interface EducationItemTranslation {
  degree: string;
  institution: string;
  period: string;
  description: string[];
  shortDescription: string;
}

export interface EducationTranslation {
  title: string;
  description: string;
  education: EducationItemTranslation[];
}

export interface TechnicalSkillTranslation {
  name: string;
  level: string;
  proficiency: number;
  description: string;
}

export interface SoftSkillTranslation {
  name: string;
  description: string;
}

export interface ForecastingProcessTranslation {
  title: string;
  steps: string[];
}

export interface SkillsTranslation {
  title: string;
  description: string;
  introduction: string;
  technicalSkillsTitle: string;
  softSkillsTitle: string;
  skillSet: string[];
  technicalSkills: TechnicalSkillTranslation[];
  softSkills: SoftSkillTranslation[];
}

export interface AboutCardTranslation {
  title: string;
  content: string | string[];
  isListContent?: boolean;
}

export interface InterestTranslation {
  tag: string;
}

export interface AboutTranslation {
  title: string;
  description: string;
  cards: AboutCardTranslation[];
  interests: InterestTranslation[];
}

export interface ContactInfoTranslation {
  icon: string;
  title: string;
  value: string;
}

export interface ContactTranslation {
  title: string;
  description: string;
  contactInfo: ContactInfoTranslation[];
  contactInfoTitle?: string;
  contactInfoDescription?: string;
}

export interface NavigationTranslation {
  hero: string;
  summary: string;
  experience: string;
  education: string;
  skills: string;
  about: string;
  contact: string;
  backToTop: string;
}

export interface SummaryTranslation {
  title: string;
  briefIntro: string;
}

export interface TranslationData {
  profile: ProfileTranslation;
  summary: SummaryTranslation;
  experience: ExperienceTranslation;
  education: EducationTranslation;
  skills: SkillsTranslation;
  about: AboutTranslation;
  contact: ContactTranslation;
  navigation: NavigationTranslation;
  interface: InterfaceTranslation;
}

/**
 * Casual tone rewrites the *voice* of the copy, never the facts.
 *
 * It is an overlay, not a second translation tree: only the prose that
 * actually differs is listed, and everything else falls through to the formal
 * data. Structural fields (company, period, technologies, proficiency, contact
 * values, icons) are deliberately absent — they are identical in both tones
 * and must never be duplicated.
 *
 * Item arrays are merged by index against the formal arrays.
 */
export type CasualExperienceItemOverlay = Partial<
  Pick<
    ExperienceItemTranslation,
    "position" | "description" | "shortResponsibilities" | "shortAchievements"
  >
>;

export type CasualEducationItemOverlay = Partial<
  Pick<EducationItemTranslation, "shortDescription">
>;

export type CasualTechnicalSkillOverlay = Partial<
  Pick<TechnicalSkillTranslation, "description">
>;

export type CasualSoftSkillOverlay = Partial<
  Pick<SoftSkillTranslation, "description">
>;

export interface CasualOverlay {
  profile?: Partial<
    Pick<ProfileTranslation, "title" | "contactButton" | "downloadButton">
  >;
  summary?: Partial<SummaryTranslation>;
  experience?: Partial<
    Pick<
      ExperienceTranslation,
      | "title"
      | "description"
      | "responsibilitiesLabel"
      | "achievementsLabel"
      | "technologiesLabel"
    >
  > & {
    items?: CasualExperienceItemOverlay[];
  };
  education?: Partial<Pick<EducationTranslation, "title" | "description">> & {
    education?: CasualEducationItemOverlay[];
  };
  skills?: Partial<
    Pick<
      SkillsTranslation,
      | "title"
      | "description"
      | "introduction"
      | "technicalSkillsTitle"
      | "softSkillsTitle"
    >
  > & {
    technicalSkills?: CasualTechnicalSkillOverlay[];
    softSkills?: CasualSoftSkillOverlay[];
  };
  about?: Partial<Pick<AboutTranslation, "title" | "description">> & {
    cards?: Array<Partial<AboutCardTranslation>>;
  };
  contact?: Partial<
    Pick<
      ContactTranslation,
      "title" | "description" | "contactInfoTitle" | "contactInfoDescription"
    >
  >;
}
