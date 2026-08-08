import { TargetRole } from '@/types';

export interface RoleConfig {
  id: TargetRole;
  titleKey: string;
  badge: string;
  tagline: string;
  valueProp: string;
  primaryTechs: string[];
  defaultResumeSlug: string;
  featuredProjectSlugs: string[];
  topSkills: string[];
  aboutBio: string;
}

export const generalistRoleConfig: RoleConfig = {
  id: 'full-stack',
  titleKey: 'roles.generalist',
  badge: 'Multi-Disciplinary Software Engineer & Tech Lead',
  tagline: 'Full-Stack Systems, Machine Learning Integration & Team Leadership',
  valueProp: 'Crafting high-throughput React/Node web platforms, serving production AI models, and directing cross-functional engineering teams with end-to-end execution.',
  primaryTechs: ['React & Next.js', 'Python & PyTorch', 'Node.js & Express', 'PostgreSQL & SQL', 'FastAPI & AI', 'Docker & GCP', 'Agile Leadership'],
  defaultResumeSlug: 'generalist',
  featuredProjectSlugs: ['hospital-management-system', 'ai-healthcare-recommender', 'collaborative-workspace', 'enterprise-churn-predictor'],
  topSkills: ['Full-Stack Web Architecture', 'AI/ML Model Serving', 'Data Science Analytics', 'Technical Team Leadership'],
  aboutBio: 'Versatile software engineer bringing together web craftsmanship, production artificial intelligence, statistical data science, and technical project management to build end-to-end digital systems.',
};

export const rolesConfig: Record<TargetRole, RoleConfig> = {
  'full-stack': {
    id: 'full-stack',
    titleKey: 'roles.full-stack',
    badge: 'Full-Stack Web & Systems',
    tagline: 'Building High-Performance Web Platforms & Cloud APIs',
    valueProp: 'Designing scalable frontends, resilient microservices, and automated CI/CD pipelines that deliver 99.9% uptime.',
    primaryTechs: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
    defaultResumeSlug: 'full-stack',
    featuredProjectSlugs: ['hospital-management-system', 'collaborative-workspace', 'enterprise-churn-predictor'],
    topSkills: ['React & Next.js', 'Node.js & Express', 'PostgreSQL & SQL', 'TypeScript', 'Docker & Cloud Deployments'],
    aboutBio: 'Specializing in full-stack architecture, I craft lightning-fast web applications with modern React frameworks, robust REST/GraphQL APIs, and resilient relational database designs.',
  },
  'ai-ml': {
    id: 'ai-ml',
    titleKey: 'roles.ai-ml',
    badge: 'AI / Machine Learning Engineer',
    tagline: 'Engineered Neural Networks, Predictive Analytics & LLM Pipelines',
    valueProp: 'Building production ML pipelines, computer vision models, and natural language interfaces with high accuracy and low latency.',
    primaryTechs: ['Python', 'PyTorch', 'TensorFlow', 'Scikit-Learn', 'FastAPI', 'Pandas', 'Gemini API'],
    defaultResumeSlug: 'ai-ml',
    featuredProjectSlugs: ['ai-healthcare-recommender', 'enterprise-churn-predictor', 'hospital-management-system'],
    topSkills: ['Python & PyTorch', 'Machine Learning Models', 'Deep Learning & NLP', 'FastAPI & ML Serving', 'Data Wrangling'],
    aboutBio: 'Focused on applied artificial intelligence and machine learning engineering. Experienced in fine-tuning neural architectures, optimizing inference speed, and serving models via scalable APIs.',
  },
  'tech-lead': {
    id: 'tech-lead',
    titleKey: 'roles.tech-lead',
    badge: 'Project Manager & Tech Lead',
    tagline: 'Cross-Functional Engineering Leadership & Product Delivery',
    valueProp: 'Bridging engineering rigor with strategic business goals to ship complex software projects on schedule and under budget.',
    primaryTechs: ['Agile / Scrum', 'System Architecture', 'Roadmapping', 'CI/CD', 'Quality Assurance', 'Team Mentorship'],
    defaultResumeSlug: 'tech-lead',
    featuredProjectSlugs: ['collaborative-workspace', 'hospital-management-system', 'ai-healthcare-recommender'],
    topSkills: ['Agile Project Management', 'System Architecture Design', 'Technical Documentation', 'Cross-Team Leadership'],
    aboutBio: 'Experienced technical lead adept at managing cross-functional development sprints, architecting enterprise systems, enforcing rigorous code reviews, and delivering clear stakeholder communications.',
  },
  'data-scientist': {
    id: 'data-scientist',
    titleKey: 'roles.data-scientist',
    badge: 'Data Scientist & Analytics Lead',
    tagline: 'Transforming Raw Datasets Into Actionable Business Intelligence',
    valueProp: 'Extracting strategic value from structured & unstructured data through statistical modelling, SQL warehousing, and interactive BI dashboards.',
    primaryTechs: ['Python', 'SQL', 'Pandas & NumPy', 'Logistic Regression', 'Tableau / BI', 'Statistical Testing'],
    defaultResumeSlug: 'data-scientist',
    featuredProjectSlugs: ['enterprise-churn-predictor', 'ai-healthcare-recommender', 'hospital-management-system'],
    topSkills: ['Statistical Analysis & SQL', 'Predictive Modeling', 'Data Visualization', 'A/B Testing & Metrics'],
    aboutBio: 'Data scientist skilled in statistical inference, advanced regression, feature engineering, and designing comprehensive dashboards that empower executive decision-making.',
  },
};
