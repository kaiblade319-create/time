import { ExperienceItem } from '@/types';

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Senior Full-Stack & AI Systems Lead',
    company: 'Apex HealthTech Solutions',
    location: 'San Francisco, CA (Remote)',
    period: '2023 - Present',
    bullets: [
      'Architected and deployed enterprise hospital triage systems and predictive clinical ML models serving 50,000+ monthly patient visits.',
      'Reduced database read query latency by 85% by implementing Redis caching and normalized PostgreSQL schema indexing.',
      'Led a cross-functional team of 6 engineers across Agile 2-week sprints, achieving 98% on-time feature delivery.',
      'Spearheaded transition to Next.js App Router and containerized Cloud Run deployments with zero downtime.',
    ],
    techs: ['Next.js', 'React', 'Python', 'PyTorch', 'PostgreSQL', 'FastAPI', 'Docker', 'Google Cloud'],
    roleRelevance: ['full-stack', 'ai-ml', 'tech-lead', 'data-scientist'],
  },
  {
    id: 'exp-2',
    role: 'Software Engineer & Machine Learning Specialist',
    company: 'Nexus Data Systems',
    location: 'Austin, TX',
    period: '2021 - 2023',
    bullets: [
      'Built B2B predictive churn scoring models using Logistic Regression and XGBoost, preventing $480,000 in ARR revenue losses.',
      'Developed real-time WebSocket state synchronization engines for collaborative developer toolkits with sub-20ms latency.',
      'Authored comprehensive technical architecture documentation, API specifications, and OpenAPI / Swagger schemas.',
      'Designed executive BI dashboards using React and Recharts for C-suite revenue forecasting.',
    ],
    techs: ['Python', 'Scikit-Learn', 'TypeScript', 'Node.js', 'WebSockets', 'SQL', 'Tableau'],
    roleRelevance: ['full-stack', 'ai-ml', 'data-scientist'],
  },
  {
    id: 'exp-3',
    role: 'Full-Stack Web Developer',
    company: 'Vanguard Digital Studio',
    location: 'Seattle, WA',
    period: '2019 - 2021',
    bullets: [
      'Developed 15+ responsive client web applications using React, Tailwind CSS, and Node.js REST APIs.',
      'Optimized Core Web Vitals to achieve 95+ Lighthouse performance scores across desktop and mobile devices.',
      'Configured automated CI/CD pipelines using GitHub Actions for automated unit testing and staging deployments.',
    ],
    techs: ['React', 'JavaScript', 'Node.js', 'Tailwind CSS', 'Git', 'REST APIs'],
    roleRelevance: ['full-stack', 'tech-lead'],
  },
];
