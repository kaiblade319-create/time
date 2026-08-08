export type TargetRole = 'full-stack' | 'ai-ml' | 'tech-lead' | 'data-scientist';

export type PortfolioMode = 'generalist' | 'targeted';

export type LanguageCode = 'en' | 'hi' | 'es' | 'fr';

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced';

export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export type GuidedType = 'Guided' | 'Unguided';

export interface SkillItem {
  id: string;
  name: string;
  level: SkillLevel;
  category: 'technical' | 'soft';
  roleRelevance?: TargetRole[];
}

export interface LanguageSkill {
  id: string;
  name: string;
  cefr: CEFRLevel;
  nativeName?: string;
}

export interface ProjectDocs {
  overview: string;
  goal: string;
  problem: string;
  tools: string[];
  processSteps: { title: string; description: string }[];
  insights: string[];
  results: { metric: string; label: string }[];
  beforeAfter?: { before: string; after: string; beforeImg?: string; afterImg?: string };
  gallery: { url: string; caption: string }[];
}

export interface ProjectReport {
  summary: string;
  environment: string;
  scopeSteps: string[];
  dataSources: string[];
  dataChecks: { metric: string; status: string; detail: string }[];
  worksheetBuild: string;
  dashboardBuild: string;
  storyBuild?: string;
  detailedDiscussion?: string;
  extraSection?: string;
  extraToggleSection?: {
    title: string;
    description: string;
    options: { key: string; label: string; content: string }[];
  };
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  type: string;
  guidedType: GuidedType;
  roleRelevance: TargetRole[];
  featured: boolean;
  image: string;
  techs: string[];
  githubUrl: string;
  liveUrl: string;
  dataFile?: {
    name: string;
    content: string;
  };
  docs: ProjectDocs;
  report: ProjectReport;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  techs: string[];
  roleRelevance: TargetRole[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  year: string;
  highlights: string[];
}

export interface ResumeRoleData {
  roleId: string;
  roleTitle: string;
  summary: string;
  highlights: string[];
  topSkills: string[];
  textResume: {
    title: string;
    contactInfo: { email: string; phone: string; location: string; linkedin: string; github: string };
    summary: string;
    experience: { title: string; company: string; period: string; details: string[] }[];
    projects: { name: string; description: string; tech: string }[];
    skills: string[];
  };
  videoResume: {
    title: string;
    videoUrl: string;
    duration: string;
    transcriptSummary: string;
    keyPoints: string[];
  };
}

export interface ProfilePlatform {
  id: string;
  name: string;
  category: 'social' | 'coding';
  handle: string;
  description: string;
  url: string;
  iconName: string;
}

export interface ToastMessage {
  id: string;
  title: string;
  message: string;
  type?: 'success' | 'info' | 'download';
}
