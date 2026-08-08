import { SkillItem, LanguageSkill } from '@/types';

export const technicalSkills: SkillItem[] = [
  { id: 'tech-1', name: 'React & Next.js (App Router)', level: 'advanced', category: 'technical', roleRelevance: ['full-stack', 'tech-lead'] },
  { id: 'tech-2', name: 'TypeScript & JavaScript (ESNext)', level: 'advanced', category: 'technical', roleRelevance: ['full-stack', 'tech-lead'] },
  { id: 'tech-3', name: 'Python & PyTorch', level: 'advanced', category: 'technical', roleRelevance: ['ai-ml', 'data-scientist'] },
  { id: 'tech-4', name: 'Node.js & Express / NestJS', level: 'advanced', category: 'technical', roleRelevance: ['full-stack'] },
  { id: 'tech-5', name: 'PostgreSQL, SQL & Prisma ORM', level: 'advanced', category: 'technical', roleRelevance: ['full-stack', 'data-scientist'] },
  { id: 'tech-6', name: 'Machine Learning & Deep Learning', level: 'advanced', category: 'technical', roleRelevance: ['ai-ml', 'data-scientist'] },
  { id: 'tech-7', name: 'FastAPI & REST API Architecture', level: 'intermediate', category: 'technical', roleRelevance: ['ai-ml', 'full-stack'] },
  { id: 'tech-8', name: 'Docker & Containerization', level: 'intermediate', category: 'technical', roleRelevance: ['full-stack', 'tech-lead'] },
  { id: 'tech-9', name: 'Tailwind CSS & Motion Animations', level: 'advanced', category: 'technical', roleRelevance: ['full-stack'] },
  { id: 'tech-10', name: 'Scikit-Learn & Statistical Analysis', level: 'advanced', category: 'technical', roleRelevance: ['ai-ml', 'data-scientist'] },
  { id: 'tech-11', name: 'Cloud Deployments (GCP / AWS / Cloud Run)', level: 'intermediate', category: 'technical', roleRelevance: ['full-stack', 'tech-lead'] },
  { id: 'tech-12', name: 'LLM Fine-Tuning & Prompt Engineering', level: 'intermediate', category: 'technical', roleRelevance: ['ai-ml'] },
  { id: 'tech-13', name: 'GraphQL & WebSockets', level: 'beginner', category: 'technical', roleRelevance: ['full-stack'] },
  { id: 'tech-14', name: 'Kubernetes Orchestration', level: 'beginner', category: 'technical', roleRelevance: ['tech-lead', 'full-stack'] },
];

export const softSkills: SkillItem[] = [
  { id: 'soft-1', name: 'Agile & Scrum Sprint Planning', level: 'advanced', category: 'soft' },
  { id: 'soft-2', name: 'Technical Documentation & Architecture Specs', level: 'advanced', category: 'soft' },
  { id: 'soft-3', name: 'Cross-Functional Team Communication', level: 'advanced', category: 'soft' },
  { id: 'soft-4', name: 'Problem Solving & Critical Decision Making', level: 'advanced', category: 'soft' },
  { id: 'soft-5', name: 'Code Review & Peer Mentorship', level: 'intermediate', category: 'soft' },
  { id: 'soft-6', name: 'Stakeholder Presentations', level: 'intermediate', category: 'soft' },
  { id: 'soft-7', name: 'Time & Risk Management', level: 'intermediate', category: 'soft' },
];

export const languageSkills: LanguageSkill[] = [
  { id: 'lang-1', name: 'English', nativeName: 'English', cefr: 'C2' },
  { id: 'lang-2', name: 'Hindi', nativeName: 'हिन्दी', cefr: 'C2' },
  { id: 'lang-3', name: 'Spanish', nativeName: 'Español', cefr: 'B2' },
  { id: 'lang-4', name: 'French', nativeName: 'Français', cefr: 'A2' },
  { id: 'lang-5', name: 'Japanese', nativeName: '日本語', cefr: 'A1' },
];

// Plain tech arsenal WITHOUT badges as specified
export const techArsenal = [
  'Python',
  'SQL',
  'Logistic Regression',
  'Random Forest',
  'PyTorch',
  'TensorFlow',
  'Scikit-Learn',
  'Pandas & NumPy',
  'FastAPI',
  'React 19',
  'Next.js 15',
  'TypeScript',
  'Node.js',
  'Express.js',
  'PostgreSQL',
  'MongoDB',
  'Redis',
  'Docker',
  'Google Cloud Run',
  'Tailwind CSS v4',
  'Git & GitHub',
  'Linux / Bash',
  'Postman',
  'Jest / Playwright',
];
