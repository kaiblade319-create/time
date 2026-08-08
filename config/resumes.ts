import { ResumeRoleData } from '@/types';

export const resumesData: Record<string, ResumeRoleData> = {
  'generalist': {
    roleId: 'generalist',
    roleTitle: 'Generalist Software Engineer & Tech Lead',
    summary: 'Versatile Software Engineering Leader with 6+ years of expertise spanning full-stack web platforms, machine learning model integration, data science pipelines, and technical team leadership.',
    highlights: [
      'Architected healthcare & developer platforms serving 50,000+ users with 99.9% availability.',
      'Trained deep diagnostic AI models (93.4% recall) & predictive churn models saving $480k ARR.',
      'Led cross-functional teams of 6+ engineers with an Agile 98% milestone delivery success rate.',
    ],
    topSkills: ['Full-Stack (React/Node/Postgres)', 'AI/ML (PyTorch/FastAPI)', 'Data Science (Python/SQL)', 'Tech Leadership & Agile'],
    textResume: {
      title: 'Generalist Software Engineer & Leader Resume',
      contactInfo: {
        email: 'kaiblade319@gmail.com',
        phone: '+1 (555) 019-2834',
        location: 'San Francisco, CA / Remote',
        linkedin: 'https://linkedin.com/in/kaiblade',
        github: 'https://github.com/kaiblade',
      },
      summary: 'Multi-disciplinary Engineering Lead bringing together full-stack web architecture, machine learning integration, data analytics, and technical team management.',
      experience: [
        {
          title: 'Senior Systems & AI Lead',
          company: 'Apex HealthTech Solutions',
          period: '2023 - Present',
          details: [
            'Architected healthcare platform serving 50,000+ visits while training AI models with 93.4% recall accuracy.',
            'Optimized PostgreSQL queries by 85% and deployed sub-85ms FastAPI AI endpoints.',
            'Led cross-functional team of 6 engineers across bi-weekly Agile sprints.',
          ],
        },
        {
          title: 'Full-Stack & Data Engineer',
          company: 'Nexus Data Systems',
          period: '2021 - 2023',
          details: [
            'Developed real-time WebSocket state sync engine and predictive churn model saving $480k ARR.',
            'Built RESTful Express APIs and SQL data pipelines for enterprise analytics.',
          ],
        },
      ],
      projects: [
        { name: 'Smart Hospital Management System', description: 'Full-stack platform with Next.js, Node.js, and PostgreSQL.', tech: 'Next.js, Node.js, PostgreSQL, Docker' },
        { name: 'AI Clinical Diagnostic Recommender', description: 'Deep neural network & FastAPI service with SHAP explainability.', tech: 'Python, PyTorch, FastAPI, Gemini API' },
        { name: 'Enterprise Customer Churn Engine', description: 'Predictive analytics engine identifying churn risk 60 days in advance.', tech: 'Python, SQL, XGBoost, Recharts' },
      ],
      skills: ['React', 'Next.js', 'Node.js', 'Python', 'PyTorch', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'SQL', 'Agile Leadership'],
    },
    videoResume: {
      title: 'Full-Spectrum Software Engineering Overview',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      duration: '3 min 00 sec',
      transcriptSummary: 'Hello! I am Kai Blade. In this video, I provide a high-level walkthrough of my multi-disciplinary engineering background—combining full-stack craftsmanship, production AI/ML deployment, data science insights, and technical team leadership.',
      keyPoints: [
        'How cross-domain knowledge allows me to build better web products and ML integrations.',
        'Walkthrough of key production achievements across healthcare and enterprise SaaS.',
        'Engineering leadership philosophy: clear systems design, strong metrics, and high velocity.',
      ],
    },
  },
  'full-stack': {
    roleId: 'full-stack',
    roleTitle: 'Full-Stack Software Engineer',
    summary: 'Senior Full-Stack Engineer with 6+ years of experience crafting high-throughput React/Next.js web applications, Node.js microservices, and PostgreSQL cloud infrastructures.',
    highlights: [
      'Built multi-tenant web platforms serving 50,000+ monthly active users with 99.9% uptime.',
      'Reduced database read latency by 85% with Redis caching and normalized SQL schema design.',
      'Proficient in React 19, Next.js 15, TypeScript, Node.js, PostgreSQL, Docker, and GCP.',
    ],
    topSkills: ['React & Next.js', 'TypeScript', 'Node.js & Express', 'PostgreSQL & Redis', 'Tailwind CSS', 'Docker & GCP'],
    textResume: {
      title: 'Full-Stack Software Engineer Resume',
      contactInfo: {
        email: 'kaiblade319@gmail.com',
        phone: '+1 (555) 019-2834',
        location: 'San Francisco, CA / Remote',
        linkedin: 'https://linkedin.com/in/kaiblade',
        github: 'https://github.com/kaiblade',
      },
      summary: 'Results-driven Full-Stack Engineer specializing in scalable web systems, clean architecture, and modern React ecosystems. Proven track record of reducing latency and engineering robust microservices.',
      experience: [
        {
          title: 'Senior Full-Stack Systems Lead',
          company: 'Apex HealthTech Solutions',
          period: '2023 - Present',
          details: [
            'Architected full-stack hospital management web app serving 50,000+ monthly visits.',
            'Optimized API query performance by 85% using Redis caching and PostgreSQL query indexing.',
            'Engineered responsive Next.js App Router frontends with 98+ Lighthouse performance scores.',
          ],
        },
        {
          title: 'Full-Stack Software Engineer',
          company: 'Nexus Data Systems',
          period: '2021 - 2023',
          details: [
            'Developed real-time WebSocket state synchronization engine for multi-user developer tools.',
            'Built RESTful Node.js Express APIs integrated with JWT authentication and PostgreSQL.',
          ],
        },
      ],
      projects: [
        { name: 'Smart Hospital Management System', description: 'Real-time patient flow and bed allocation platform built with Next.js, Node.js, PostgreSQL.', tech: 'Next.js, Node.js, PostgreSQL, Docker' },
        { name: 'Real-Time Developer Workspace', description: 'Multi-user collaborative code editor with WebSocket sync and drag-and-drop Kanban.', tech: 'React, WebSockets, TypeScript, Redis' },
      ],
      skills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'Docker', 'Tailwind CSS', 'Git', 'GCP'],
    },
    videoResume: {
      title: 'Full-Stack Engineering Video Pitch',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      duration: '2 min 15 sec',
      transcriptSummary: 'Hello! I am Kai Blade. In this video, I break down my approach to full-stack architecture, demonstrating how I build resilient React/Next.js frontends and high-performance Node.js/PostgreSQL backends that scale reliably under heavy traffic.',
      keyPoints: [
        'Full-stack architecture philosophy: simple abstractions, fast initial load, strict type safety.',
        'Walkthrough of the Smart Hospital Management System build and performance optimizations.',
        'Demonstration of WebSocket multi-user synchronization for collaborative tools.',
      ],
    },
  },
  'ai-ml': {
    roleId: 'ai-ml',
    roleTitle: 'AI / Machine Learning Engineer',
    summary: 'AI/ML Specialist with expertise in neural network fine-tuning, computer vision, natural language processing, and high-throughput model serving via FastAPI.',
    highlights: [
      'Developed clinical diagnostic neural models achieving 93.4% top-3 recall accuracy.',
      'Quantized PyTorch weights to INT8 ONNX, reducing CPU memory footprint from 1.2GB down to 180MB.',
      'Proficient in Python, PyTorch, TensorFlow, Scikit-Learn, FastAPI, SHAP explainability, and Gemini API.',
    ],
    topSkills: ['Python 3.11', 'PyTorch & TensorFlow', 'Scikit-Learn', 'FastAPI Model Serving', 'Explainable AI (SHAP)', 'Gemini AI API'],
    textResume: {
      title: 'AI / Machine Learning Engineer Resume',
      contactInfo: {
        email: 'kaiblade319@gmail.com',
        phone: '+1 (555) 019-2834',
        location: 'San Francisco, CA / Remote',
        linkedin: 'https://linkedin.com/in/kaiblade',
        github: 'https://github.com/kaiblade',
      },
      summary: 'AI/ML Engineer dedicated to building production-ready machine learning pipelines and explainable artificial intelligence models that deliver direct business value.',
      experience: [
        {
          title: 'Senior AI Systems Lead',
          company: 'Apex HealthTech Solutions',
          period: '2023 - Present',
          details: [
            'Trained deep diagnostic neural networks on 50,000 anonymized clinical records with 93.4% recall accuracy.',
            'Wrapped model inference inside sub-85ms FastAPI containerized endpoints on Cloud Run.',
            'Embedded SHAP explainability cards into physician interfaces to establish clinical trust.',
          ],
        },
        {
          title: 'Machine Learning Engineer',
          company: 'Nexus Data Systems',
          period: '2021 - 2023',
          details: [
            'Trained XGBoost churn models achieving 0.91 ROC-AUC score, preventing $480k ARR losses.',
            'Built automated data cleaning and feature engineering pipelines in Python & SQL.',
          ],
        },
      ],
      projects: [
        { name: 'AI Clinical Diagnostic Recommender', description: 'Deep neural network & FastAPI service for diagnostic support with SHAP explainability.', tech: 'Python, PyTorch, FastAPI, Gemini API' },
        { name: 'Enterprise Churn Prediction Engine', description: 'XGBoost predictive engine identifying at-risk accounts 60 days before contract expiry.', tech: 'Python, Scikit-Learn, XGBoost, SQL' },
      ],
      skills: ['Python', 'PyTorch', 'TensorFlow', 'Scikit-Learn', 'FastAPI', 'SHAP', 'Pandas', 'NumPy', 'Docker', 'SQL', 'Gemini API'],
    },
    videoResume: {
      title: 'AI/ML Engineering & Model Serving Overview',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      duration: '2 min 40 sec',
      transcriptSummary: 'Hi, I am Kai Blade. In this video resume, I discuss my machine learning engineering workflow—from exploratory dataset analysis and neural loss function selection to ONNX model quantization and sub-85ms FastAPI deployment.',
      keyPoints: [
        'How I approach model evaluation: prioritizing precision/recall metrics over naive accuracy.',
        'Explaining the AI Clinical Recommender: SHAP values and building physician trust.',
        'ONNX INT8 quantization techniques for cost-effective CPU inference in production.',
      ],
    },
  },
  'tech-lead': {
    roleId: 'tech-lead',
    roleTitle: 'Project Manager / Tech Lead',
    summary: 'Technical Leader & Project Manager with 6+ years experience directing cross-functional software teams, architecting distributed systems, and delivering complex products on schedule.',
    highlights: [
      'Led engineering teams of 6+ developers across Agile 2-week sprints with 98% milestone completion rate.',
      'Authored comprehensive technical architecture designs, RFCs, and security compliance frameworks.',
      'Expertise in Sprint Planning, Architecture Reviews, Code Quality, Risk Management, and Stakeholder Reporting.',
    ],
    topSkills: ['Agile & Scrum Management', 'System Architecture', 'Technical Documentation', 'Cross-Team Leadership', 'Risk Management'],
    textResume: {
      title: 'Project Manager & Tech Lead Resume',
      contactInfo: {
        email: 'kaiblade319@gmail.com',
        phone: '+1 (555) 019-2834',
        location: 'San Francisco, CA / Remote',
        linkedin: 'https://linkedin.com/in/kaiblade',
        github: 'https://github.com/kaiblade',
      },
      summary: 'Engineering Lead and Project Manager skilled in translating business visions into technical execution plans, managing engineering velocity, and fostering high-performing team cultures.',
      experience: [
        {
          title: 'Senior Engineering & Systems Lead',
          company: 'Apex HealthTech Solutions',
          period: '2023 - Present',
          details: [
            'Managed end-to-end delivery of healthcare software suite, leading 6 developers and designers.',
            'Established automated CI/CD pipeline tests reducing production deployment bug reports by 60%.',
            'Conducted bi-weekly stakeholder roadmapping reviews and technical trade-off analyses.',
          ],
        },
        {
          title: 'Technical Project Lead',
          company: 'Nexus Data Systems',
          period: '2021 - 2023',
          details: [
            'Guided development of enterprise data platforms, overseeing sprint backlogs and code quality.',
            'Mentored junior and mid-level developers through structured peer code review programs.',
          ],
        },
      ],
      projects: [
        { name: 'Collaborative Developer Workspace', description: 'Multi-tenant developer workspace with real-time state sync and Kanban boards.', tech: 'Agile, Architecture, Next.js, WebSockets' },
        { name: 'Smart Hospital Management System', description: 'Enterprise healthcare platform delivering 99.9% uptime across clinic networks.', tech: 'System Design, PostgreSQL, Node.js' },
      ],
      skills: ['Agile/Scrum', 'System Architecture', 'Jira/Linear', 'Risk Management', 'Technical Writing', 'CI/CD', 'Code Review', 'Leadership'],
    },
    videoResume: {
      title: 'Technical Leadership & Project Management Philosophy',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      duration: '2 min 20 sec',
      transcriptSummary: 'Hello! I am Kai Blade. In this video, I share my philosophy on engineering leadership: establishing clear architectural boundaries, empowering team members with psychological safety, and maintaining strict transparency with business stakeholders.',
      keyPoints: [
        'Sprint planning methodology: breaking monolithic epics into testable, independent user stories.',
        'How I balance technical debt remediation with fast feature shipping velocity.',
        'Case study of guiding Apex HealthTech to 98% on-time release milestones.',
      ],
    },
  },
  'data-scientist': {
    roleId: 'data-scientist',
    roleTitle: 'Data Scientist & Analytics Lead',
    summary: 'Data Scientist skilled in statistical modeling, advanced SQL warehousing, predictive analytics, and building executive C-suite BI dashboards.',
    highlights: [
      'Engineered B2B churn forecasting models saving $480,000 in ARR through early risk warnings.',
      'Formulated SQL analytical window functions processing 100,000+ daily telemetry events.',
      'Proficient in Python, SQL, Logistic Regression, XGBoost, Pandas, A/B Testing, and Tableau / Recharts.',
    ],
    topSkills: ['Advanced SQL & ETL', 'Python (Pandas / NumPy)', 'Logistic Regression & ML', 'Statistical A/B Testing', 'Tableau & Recharts'],
    textResume: {
      title: 'Data Scientist & Analytics Lead Resume',
      contactInfo: {
        email: 'kaiblade319@gmail.com',
        phone: '+1 (555) 019-2834',
        location: 'San Francisco, CA / Remote',
        linkedin: 'https://linkedin.com/in/kaiblade',
        github: 'https://github.com/kaiblade',
      },
      summary: 'Data Scientist passionate about extracting high-value business insights from raw data, building probabilistic risk models, and presenting actionable strategy dashboards.',
      experience: [
        {
          title: 'Lead Analytics & Systems Specialist',
          company: 'Apex HealthTech Solutions',
          period: '2023 - Present',
          details: [
            'Analyzed 50,000 patient flow records to optimize department staffing and wait time bottlenecks.',
            'Designed executive telemetry dashboards tracking discharge metrics and bed utilization.',
          ],
        },
        {
          title: 'Data Scientist',
          company: 'Nexus Data Systems',
          period: '2021 - 2023',
          details: [
            'Built enterprise customer churn prediction pipeline with 0.91 ROC-AUC score using XGBoost & SQL.',
            'Conducted A/B testing campaigns on customer onboarding flows, improving conversion by 18%.',
          ],
        },
      ],
      projects: [
        { name: 'Enterprise Customer Churn Engine', description: 'Predictive analytics engine identifying churn risk 60 days in advance.', tech: 'Python, SQL, XGBoost, Recharts' },
        { name: 'AI Healthcare Diagnostic Analytics', description: 'Statistical evaluation and SHAP feature analysis of 50k patient logs.', tech: 'Python, Pandas, Statistical Analysis' },
      ],
      skills: ['Python', 'SQL', 'Logistic Regression', 'XGBoost', 'Pandas', 'NumPy', 'Scikit-Learn', 'Tableau', 'Recharts', 'A/B Testing'],
    },
    videoResume: {
      title: 'Data Science & Predictive Analytics Overview',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      duration: '2 min 30 sec',
      transcriptSummary: 'Hi, I am Kai Blade. In this video, I walk through my data science pipeline: clean data aggregation via SQL CTEs, exploratory statistical testing, model threshold calibration, and presenting high-impact insights to executive teams.',
      keyPoints: [
        'Data cleaning & feature engineering strategies for noisy enterprise datasets.',
        'Explaining the $480k ARR saved through early 60-day churn predictions.',
        'Designing intuitive BI dashboards that bridge complex metrics with business decisions.',
      ],
    },
  },
};
