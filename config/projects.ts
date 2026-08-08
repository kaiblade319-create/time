import { Project } from '@/types';

export const projectsData: Project[] = [
  {
    id: 'proj-1',
    slug: 'hospital-management-system',
    title: 'Smart Hospital Management & Analytics Platform',
    tagline: 'Automated Patient Flow, Real-Time Bed Allocation & Decision Dashboard',
    description: 'An enterprise healthcare platform reducing patient admission bottleneck by 40% using automated triage algorithms, real-time bed tracking, and SQL analytical reporting.',
    type: 'Full-Stack Web App + Analytics Dashboard',
    guidedType: 'Unguided',
    roleRelevance: ['full-stack', 'tech-lead', 'data-scientist'],
    featured: true,
    image: 'https://picsum.photos/seed/hospital-dash/800/450',
    techs: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Docker', 'Recharts'],
    githubUrl: 'https://github.com/example/hospital-management-system',
    liveUrl: 'https://ais-dev-pvmh6ztemq25w536mcqyxg-521747128928.asia-southeast1.run.app',
    dataFile: {
      name: 'hospital_patient_admissions_sample.csv',
      content: `PatientID,AdmissionDate,Department,TriageScore,WaitTimeMinutes,Status,LengthOfStayDays
P-1001,2025-01-10,Emergency,4,12,Discharged,2
P-1002,2025-01-10,Cardiology,2,45,Admitted,5
P-1003,2025-01-11,Pediatrics,5,8,Discharged,1
P-1004,2025-01-11,Neurology,1,60,In-Treatment,4
P-1005,2025-01-12,Orthopedics,3,25,Admitted,3`,
    },
    docs: {
      overview: 'The Smart Hospital Management & Analytics Platform modernizes patient check-ins, department queuing, bed availability tracking, and automated analytical reporting for regional clinic networks.',
      goal: 'Eliminate manual paper-based patient triage logs, cut patient wait times from 2 hours to under 15 minutes, and provide hospital administrators with real-time bed capacity visualizers.',
      problem: 'Clinic staff spent 2.5 hours every morning manually auditing bed status across 6 wards. Miscommunications led to overcrowded emergency rooms and delayed urgent treatments.',
      tools: ['Next.js 15 App Router', 'TypeScript', 'Node.js Express backend', 'PostgreSQL relational database', 'Tailwind CSS v4 styling', 'Recharts for BI visualizers'],
      processSteps: [
        { title: 'Requirements & Discovery', description: 'Mapped ER triage workflows across 4 hospital departments and identified key latency bottlenecks in bed allocation.' },
        { title: 'Architecture & Schema Design', description: 'Designed a normalized PostgreSQL schema featuring ACID transactions for patient check-ins and concurrent bed locking.' },
        { title: 'Frontend & API Development', description: 'Built responsive React dashboards with automated websocket polling for live queue updates and staff status badges.' },
        { title: 'Testing & Deployment', description: 'Executed end-to-end integration tests using Docker containers and containerized deployment to Cloud Run.' },
      ],
      insights: [
        'Automated priority queues reduced peak emergency wait times by 42%.',
        'Real-time bed locking eliminated double-booking errors across all wards.',
        'SQL reporting queries pre-aggregated overnight, dropping dashboard load latency to under 120ms.',
      ],
      results: [
        { metric: '42%', label: 'Reduction in Patient Wait Time' },
        { metric: '2.5 hrs -> 3 mins', label: 'Daily Bed Status Audit Speed' },
        { metric: '99.9%', label: 'System Uptime Across Wards' },
        { metric: '<120ms', label: 'Average Dashboard Query Latency' },
      ],
      beforeAfter: {
        before: 'Manual whiteboard queue, 120 min wait time, paper triage sheets, frequent bed allocation errors.',
        after: 'Digital real-time triage queue, 15 min wait time, automated SQL dashboard, 100% accurate bed allocation.',
        beforeImg: 'https://picsum.photos/seed/old-hospital/600/350',
        afterImg: 'https://picsum.photos/seed/new-hospital/600/350',
      },
      gallery: [
        { url: 'https://picsum.photos/seed/hosp-1/800/500', caption: 'Executive Hospital Dashboard & Live Bed Matrix' },
        { url: 'https://picsum.photos/seed/hosp-2/800/500', caption: 'Patient Emergency Triage Queue View' },
        { url: 'https://picsum.photos/seed/hosp-3/800/500', caption: 'Department Analytics & Summary Metrics' },
      ],
    },
    report: {
      summary: 'Comprehensive technical case study detailing the end-to-end engineering of a high-concurrency hospital queue management and bed allocation system built with Node.js and PostgreSQL.',
      environment: 'Staging and production Cloud Run Linux containers integrated with managed PostgreSQL instance, operating under strict HIPAA compliance rules and high peak load expectations.',
      scopeSteps: [
        'Phase 1: Stakeholder requirements gathering and workflow mapping.',
        'Phase 2: Relational database schema design, indexing, and transactional isolation levels.',
        'Phase 3: Development of RESTful microservices for patient admissions and bed state machines.',
        'Phase 4: Building the frontend dashboard with interactive charts and real-time updates.',
        'Phase 5: User acceptance testing with hospital staff and production deployment.',
      ],
      dataSources: [
        'Electronic Health Record (EHR) CSV exports and REST endpoints.',
        'Live IoT bed pressure sensors sending heartbeat status messages.',
        'Departmental staff attendance and shifts database tables.',
      ],
      dataChecks: [
        { metric: 'Null Patient Records', status: 'Passed', detail: '0 missing required fields across 10,000 test check-ins.' },
        { metric: 'Bed ID Uniqueness', status: 'Passed', detail: 'Primary keys and unique constraints enforced bed isolation.' },
        { metric: 'Triage Score Bounds', status: 'Passed', detail: 'Validation schema restricted scores strictly between 1 and 5.' },
      ],
      worksheetBuild: 'Data ingestion scripts transformed raw hospital CSV logs into normalized SQL tables. Indexes were created on `admission_timestamp`, `department_id`, and `triage_priority`.',
      dashboardBuild: 'The dashboard was constructed using React components and Recharts. Key performance indicators (KPIs) include active capacity percentage, average wait time per department, and daily discharge velocities.',
      storyBuild: 'By visualizing department wait times side-by-side with bed vacancy rates, medical directors immediately spotted bottlenecks in Cardiology that were previously obscured by manual logs.',
      detailedDiscussion: 'Trade-offs between WebSocket persistent connections and short-polling were analyzed. Given the hospital network proxy constraints, a 5-second resilient HTTP polling strategy with ETags was selected for optimal battery and bandwidth efficiency.',
      extraSection: 'Security & Compliance: Implemented role-based access control (RBAC), TLS 1.3 encryption in transit, and AES-256 field-level encryption for sensitive patient health identifiers.',
      extraToggleSection: {
        title: 'Deep System Configuration Insights',
        description: 'Toggle between configuration views to inspect architectural decisions.',
        options: [
          { key: 'db-config', label: 'Database Indexing Strategy', content: 'CREATE INDEX idx_admissions_dept_time ON admissions (department_id, admission_timestamp DESC); CREATE UNIQUE INDEX idx_active_bed ON bed_allocations (bed_id) WHERE status = "occupied";' },
          { key: 'cache-config', label: 'Caching & Query Performance', content: 'Redis memory cache stores active ward counts with a 15-second TTL, reducing PostgreSQL read pressure by 85% during emergency rush hours.' },
          { key: 'load-test', label: 'Load Test Results', content: 'Simulated 1,200 concurrent staff requests using K6 benchmarking tool. 99% of responses returned within 140ms with 0 database deadlock errors.' },
        ],
      },
    },
  },
  {
    id: 'proj-2',
    slug: 'ai-healthcare-recommender',
    title: 'AI Clinical Diagnosis & Treatment Recommender',
    tagline: 'Deep Learning Model & FastAPI Service for Diagnostic Support',
    description: 'A neural network pipeline trained on 50,000 clinical records delivering diagnostic likelihood scores and evidence-backed medical recommendations with 93.4% top-3 accuracy.',
    type: 'AI / Machine Learning Service',
    guidedType: 'Unguided',
    roleRelevance: ['ai-ml', 'data-scientist', 'full-stack'],
    featured: true,
    image: 'https://picsum.photos/seed/ai-recommender/800/450',
    techs: ['Python', 'PyTorch', 'FastAPI', 'Scikit-Learn', 'Pandas', 'Gemini API', 'Docker'],
    githubUrl: 'https://github.com/example/ai-clinical-recommender',
    liveUrl: 'https://ais-dev-pvmh6ztemq25w536mcqyxg-521747128928.asia-southeast1.run.app',
    dataFile: {
      name: 'clinical_dataset_metrics.csv',
      content: `SymptomCode,Feature1_Weight,Feature2_Weight,PrimaryDiagnosis,ConfidenceScore,ValidationF1
SYM-01,0.85,0.42,Acute Bronchitis,0.94,0.91
SYM-02,0.91,0.78,Type 2 Diabetes,0.96,0.95
SYM-03,0.34,0.88,Hypertension,0.89,0.88
SYM-04,0.77,0.65,Migraine Variant,0.92,0.90`,
    },
    docs: {
      overview: 'An AI-powered clinical decision support engine that assists physicians by processing patient symptoms, lab results, and history to output probabilistically ranked diagnostic recommendations.',
      goal: 'Reduce diagnostic oversight in emergency rooms and streamline clinical documentation using explainable AI model predictions.',
      problem: 'Emergency room physicians face cognitive overload during high-volume shifts, leading to misordered laboratory tests and delayed treatment paths.',
      tools: ['Python 3.11', 'PyTorch Neural Networks', 'FastAPI Web Framework', 'Scikit-Learn', 'Gemini API for clinical summarization', 'Pandas & NumPy'],
      processSteps: [
        { title: 'Data Cleaning & Anonymization', description: 'Cleaned 50k anonymized electronic health logs, engineered symptom vector embeddings, and handled missing values.' },
        { title: 'Model Architecture Selection', description: 'Benchmarked Logistic Regression, Random Forest, XGBoost, and a 4-layer Dense Neural Network with Dropout regularization.' },
        { title: 'Explainability & Calibration', description: 'Utilized SHAP (SHapley Additive exPlanations) values to output feature importance for every individual prediction.' },
        { title: 'API & Docker Serving', description: 'Wrapped model inference inside a high-throughput FastAPI container with endpoint response times under 85ms.' },
      ],
      insights: [
        'Multi-layer dense network achieved 93.4% top-3 diagnostic recall rate on held-out test data.',
        'SHAP explainability cards boosted physician trust scores by 65% in clinical trial evaluations.',
        'ONNX runtime quantization reduced RAM footprint from 1.2GB down to 180MB.',
      ],
      results: [
        { metric: '93.4%', label: 'Top-3 Diagnostic Recall Accuracy' },
        { metric: '<85ms', label: 'Inference Latency Per Request' },
        { metric: '180MB', label: 'Quantized Model Footprint' },
        { metric: '+65%', label: 'Physician Trust Rating in Evaluation' },
      ],
      beforeAfter: {
        before: 'Manual symptom reference lookup taking 8-12 minutes per patient case.',
        after: 'Instant AI diagnostic likelihood score with SHAP evidence in 85ms.',
        beforeImg: 'https://picsum.photos/seed/manual-lookup/600/350',
        afterImg: 'https://picsum.photos/seed/ai-lookup/600/350',
      },
      gallery: [
        { url: 'https://picsum.photos/seed/ai-dash-1/800/500', caption: 'Diagnostic Prediction Matrix & Confidence Distribution' },
        { url: 'https://picsum.photos/seed/ai-dash-2/800/500', caption: 'SHAP Feature Contribution Card for Clinical Trust' },
        { url: 'https://picsum.photos/seed/ai-dash-3/800/500', caption: 'FastAPI Model Inference Benchmarks' },
      ],
    },
    report: {
      summary: 'Complete technical report detailing model architecture, loss function formulations, hyperparameter tuning, and containerized deployment of an AI medical diagnostic recommender.',
      environment: 'PyTorch CUDA GPU training environment, converted to ONNX weights for production CPU serving inside Docker on Google Cloud Run.',
      scopeSteps: [
        'Data Ingestion: Filtered 50k clinical patient logs with multi-label diagnosis target vectors.',
        'Feature Engineering: TF-IDF symptom tokenizers combined with numerical lab metrics.',
        'Training Phase: Cross-validation grid search optimizing Cross-Entropy Loss with Label Smoothing.',
        'Validation & Evaluation: Precision, Recall, F1 Score, and ROC-AUC curve benchmarking.',
        'Inference Deployment: Asynchronous FastAPI endpoints with health check routes and Prometheus metrics.',
      ],
      dataSources: [
        'Anonymized open-access MIMIC-III clinical records dataset.',
        'Standardized ICD-10 diagnostic coding classification tables.',
      ],
      dataChecks: [
        { metric: 'Class Imbalance Ratio', status: 'Handled', detail: 'SMOTE resampling applied to balance rare disease classes.' },
        { metric: 'Outlier Detection', status: 'Passed', detail: 'Z-score filtering removed corrupted sensor data points.' },
        { metric: 'Missing Value Imputation', status: 'Passed', detail: 'KNN Imputer filled missing lab values with 98% fidelity.' },
      ],
      worksheetBuild: 'Exploratory data analysis notebooks revealed strong collinearity between blood pressure markers and renal diagnoses. Principal Component Analysis (PCA) was evaluated before selecting explicit domain features.',
      dashboardBuild: 'The interactive frontend allows clinicians to check diagnostic probability sliders, view patient history risk trends, and export structured clinical summary notes in 1 click.',
      storyBuild: 'During validation, the model correctly identified rare presentation cases of Lyme disease that had been overlooked in initial paper triage routines.',
      detailedDiscussion: 'Ethical AI safeguards were embedded: the system explicitly labels predictions as diagnostic assistance rather than autonomous decisions, mandating physician sign-off before record submission.',
      extraSection: 'Model Quantization Details: Converted FP32 PyTorch weights to INT8 ONNX representation, resulting in a 4.2x speedup in CPU inference with less than 0.3% loss in F1 score.',
      extraToggleSection: {
        title: 'Model Evaluation Metrics & Hyperparameters',
        description: 'Explore neural network hyperparameter settings and validation benchmarks.',
        options: [
          { key: 'hyperparams', label: 'Hyperparameter Grid', content: 'Learning Rate: 1e-4 | Optimizer: AdamW | Batch Size: 64 | Weight Decay: 1e-2 | Dropout: 0.3 | Epochs: 50' },
          { key: 'f1-scores', label: 'Category F1 Breakdown', content: 'Cardiology: 0.94 F1 | Respiratory: 0.92 F1 | Neurology: 0.89 F1 | General Medicine: 0.95 F1' },
          { key: 'api-benchmark', label: 'API Serving Metrics', content: 'P50 Latency: 42ms | P99 Latency: 84ms | Max Throughput: 450 requests/sec per CPU core' },
        ],
      },
    },
  },
  {
    id: 'proj-3',
    slug: 'enterprise-churn-predictor',
    title: 'Enterprise Customer Churn Prediction Engine',
    tagline: 'Predictive Machine Learning & Executive Retention Dashboard',
    description: 'An end-to-end churn forecasting platform that identifies at-risk accounts 60 days before contract expiration, driving a 28% reduction in revenue churn.',
    type: 'Data Science & Predictive Analytics',
    guidedType: 'Unguided',
    roleRelevance: ['data-scientist', 'ai-ml', 'tech-lead'],
    featured: true,
    image: 'https://picsum.photos/seed/churn-predict/800/450',
    techs: ['Python', 'SQL', 'Scikit-Learn', 'Logistic Regression', 'XGBoost', 'Tableau / Recharts', 'FastAPI'],
    githubUrl: 'https://github.com/example/churn-prediction-engine',
    liveUrl: 'https://ais-dev-pvmh6ztemq25w536mcqyxg-521747128928.asia-southeast1.run.app',
    dataFile: {
      name: 'b2b_churn_dataset_sample.csv',
      content: `AccountID,MonthlySpend,SupportTickets,ContractLengthMonths,LoginFrequency,PredictedChurnRisk,ActualChurn
ACC-901,4500,12,12,3,0.88,1
ACC-902,12000,1,24,28,0.05,0
ACC-903,3200,8,6,5,0.74,1
ACC-904,18000,2,36,45,0.02,0`,
    },
    docs: {
      overview: 'A predictive analytics pipeline that mines customer usage behavior, support ticket volume, and payment histories to generate early warning churn risk scores for Customer Success teams.',
      goal: 'Identify enterprise accounts with >70% churn risk at least 2 months prior to renewal, enabling targeted retention campaigns.',
      problem: 'Subscription SaaS companies lose millions annually to surprise account cancellations because risk signals were scattered across disconnected CRM and ticketing systems.',
      tools: ['Python 3.10', 'PostgreSQL Data Warehouse', 'Logistic Regression & XGBoost Models', 'FastAPI microservice', 'React + Recharts BI frontend'],
      processSteps: [
        { title: 'Data Pipeline Integration', description: 'Extracted 120,000 event rows from CRM tables via SQL window functions and aggregation scripts.' },
        { title: 'Feature Engineering', description: 'Created composite metrics: support escalation velocity, product feature adoption depth, and payment delay scores.' },
        { title: 'Model Training & Calibration', description: 'Trained Logistic Regression as interpretable baseline, then fine-tuned XGBoost Classifier with ROC-AUC optimization.' },
        { title: 'Retention Dashboard Build', description: 'Built an executive dashboard ranking high-value accounts by risk tier with recommended intervention playbooks.' },
      ],
      insights: [
        'Support ticket velocity (3+ escalations in 14 days) was the single strongest early indicator of churn risk.',
        'XGBoost achieved 0.91 ROC-AUC score, outperforming baseline rule-based systems by 34%.',
        'Targeted outreach playbooks prevented $480,000 in ARR losses during the 6-month pilot trial.',
      ],
      results: [
        { metric: '28%', label: 'Reduction in Enterprise Churn' },
        { metric: '0.91', label: 'ROC-AUC Prediction Score' },
        { metric: '$480k', label: 'ARR Saved in 6-Month Pilot' },
        { metric: '60 Days', label: 'Early Risk Warning Window' },
      ],
      beforeAfter: {
        before: 'Reactive cancellation notices received on renewal date with 0 lead time.',
        after: 'Proactive 60-day early warning alert with automated CS rep task assignment.',
        beforeImg: 'https://picsum.photos/seed/reactive-churn/600/350',
        afterImg: 'https://picsum.photos/seed/proactive-churn/600/350',
      },
      gallery: [
        { url: 'https://picsum.photos/seed/churn-1/800/500', caption: 'Executive Churn Risk Matrix & Revenue ARR Distribution' },
        { url: 'https://picsum.photos/seed/churn-2/800/500', caption: 'Feature Importance & Logistic Regression Coefficients' },
        { url: 'https://picsum.photos/seed/churn-3/800/500', caption: 'Account Retention Playbook & Task Queue' },
      ],
    },
    report: {
      summary: 'Data science case study documenting data extraction, feature engineering, model selection, and business financial impact of an enterprise B2B churn prediction engine.',
      environment: 'PostgreSQL warehouse environment running automated Python ETL scripts, integrated with FastAPI prediction endpoints.',
      scopeSteps: [
        'Data Consolidation: Merged billing, product analytics, and customer support tables.',
        'Data Wrangling: Normalized continuous variables and encoded categorical contract types.',
        'Model Comparison: Benchmarked Logistic Regression, Decision Trees, and XGBoost.',
        'Financial Calibration: Aligned probability thresholds to maximize Net Saved Revenue.',
        'Production Deployment: Scheduled daily batch prediction jobs and webhook notifications.',
      ],
      dataSources: [
        'Billing history table (`invoices`, `payment_status`).',
        'Product event telemetry (`logins`, `feature_clicks`).',
        'Customer support ticket database (`tickets`, `severity_score`).',
      ],
      dataChecks: [
        { metric: 'Duplicate Accounts', status: 'Cleaned', detail: '0 duplicate account IDs after canonical entity resolution.' },
        { metric: 'Data Completeness', status: 'Passed', detail: '99.4% record completeness across key behavior metrics.' },
        { metric: 'Data Leakage', status: 'Verified', detail: 'Strict cutoff dates prevented future leakage into training sets.' },
      ],
      worksheetBuild: 'Calculated 30-day moving averages of login frequency and support ticket growth rates using SQL CTEs (`WITH account_activity AS (...)`).',
      dashboardBuild: 'Designed an interactive dashboard with account search, filterable risk tiers (High, Medium, Low), and drill-down historical usage sparklines.',
      storyBuild: 'The data revealed that accounts with high monthly spend who experienced 2+ unresolved support tickets in a single week had an 82% probability of cancelling within 60 days.',
      detailedDiscussion: 'Logistic regression provided executive clarity due to interpretable odds ratios, while XGBoost delivered maximum predictive power for automated triage routing.',
      extraSection: 'Cost-Benefit Matrix Analysis: Evaluated false positive vs. false negative costs. Offering a $500 discount to a non-churner costs far less than losing a $15,000 ARR account.',
      extraToggleSection: {
        title: 'Logistic Regression vs. XGBoost Trade-Offs',
        description: 'Toggle between model performance comparison views.',
        options: [
          { key: 'logistic', label: 'Logistic Regression Baseline', content: 'ROC-AUC: 0.82 | Interpretability: High (Direct Odds Ratios) | Training Time: 0.4 seconds | Features: MonthlySpend (+), TicketVelocity (-)' },
          { key: 'xgboost', label: 'XGBoost Optimized Model', content: 'ROC-AUC: 0.91 | Interpretability: Medium (SHAP Plots) | Training Time: 4.2 seconds | Features: Non-linear interactions captured' },
          { key: 'roi-calculator', label: 'Financial Impact Breakdown', content: 'Total High-Risk Accounts Identified: 140 | Successful Retentions: 42 | Net Saved Annual Revenue: $480,000 | Program Cost: $35,000' },
        ],
      },
    },
  },
  {
    id: 'proj-4',
    slug: 'collaborative-workspace',
    title: 'Real-Time Collaborative Developer Workspace',
    tagline: 'Multi-User Code Canvas, Task Boards & Live State Sync',
    description: 'A multi-tenant developer workspace featuring real-time collaborative code editing, Kanban project management, and automated GitHub repository synchronization.',
    type: 'Full-Stack Real-Time Platform',
    guidedType: 'Guided',
    roleRelevance: ['full-stack', 'tech-lead'],
    featured: true,
    image: 'https://picsum.photos/seed/workspace/800/450',
    techs: ['React', 'Next.js', 'WebSockets', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Redis'],
    githubUrl: 'https://github.com/example/collaborative-workspace',
    liveUrl: 'https://ais-dev-pvmh6ztemq25w536mcqyxg-521747128928.asia-southeast1.run.app',
    dataFile: {
      name: 'workspace_activity_logs_sample.csv',
      content: `SessionID,UserID,WorkspaceRoom,ActiveConnections,LatencyMs,SyncStatus
S-101,USR-42,Frontend-Dev,8,18,Synchronized
S-102,USR-88,Backend-API,5,22,Synchronized
S-103,USR-12,Design-System,12,15,Synchronized`,
    },
    docs: {
      overview: 'A full-stack collaborative platform built for remote software engineering teams, featuring live multi-cursor code editing, integrated issue tracking, and team messaging.',
      goal: 'Enable developer teams to pair-program and conduct technical architecture reviews in real-time with sub-30ms latency.',
      problem: 'Existing developer tools lacked unified context between code snippets, task backlogs, and active video/audio discussion channels.',
      tools: ['Next.js 15', 'TypeScript', 'WebSockets & Socket.io', 'Redis Pub/Sub state sync', 'PostgreSQL', 'Tailwind CSS v4'],
      processSteps: [
        { title: 'Conflict-Free State Sync', description: 'Implemented Operational Transformation (OT) algorithms to handle simultaneous edits without state divergence.' },
        { title: 'WebSocket Gateway Build', description: 'Architected scalable Node.js socket servers backed by Redis Pub/Sub for cross-instance message routing.' },
        { title: 'UI Canvas & Kanban Board', description: 'Built drag-and-drop Kanban task boards synchronized instantly across connected clients.' },
        { title: 'Security & Auth Integration', description: 'Integrated JWT authentication, room access control tokens, and secure WebSocket handshake validation.' },
      ],
      insights: [
        'Operational Transformation ensured 100% document consistency across 20+ concurrent editors.',
        'Redis Pub/Sub enabled seamless horizontal scaling across 4 server nodes.',
        'User satisfaction scores increased by 88% compared to asynchronous code review tools.',
      ],
      results: [
        { metric: '<20ms', label: 'Average Sync Latency' },
        { metric: '20+', label: 'Concurrent Editor Capacity Per Room' },
        { metric: '99.99%', label: 'State Synchronization Accuracy' },
        { metric: '88%', label: 'Positive Developer Experience Rating' },
      ],
      beforeAfter: {
        before: 'Fragmented communication across 4 separate tabs (Slack, Jira, GitHub, Google Docs).',
        after: 'Single unified workspace tab with live code editing and instant board sync.',
        beforeImg: 'https://picsum.photos/seed/old-tools/600/350',
        afterImg: 'https://picsum.photos/seed/new-tools/600/350',
      },
      gallery: [
        { url: 'https://picsum.photos/seed/ws-1/800/500', caption: 'Live Multi-User Code Editor & Cursor Presence' },
        { url: 'https://picsum.photos/seed/ws-2/800/500', caption: 'Real-Time Drag and Drop Kanban Board' },
        { url: 'https://picsum.photos/seed/ws-3/800/500', caption: 'Team Communication & Activity Logs' },
      ],
    },
    report: {
      summary: 'System architecture case study detailing WebSocket gateway design, operational transformation algorithms, and Redis Pub/Sub scaling for a real-time developer workspace.',
      environment: 'Cluster of Node.js container nodes behind Nginx load balancer connected to Redis cluster and PostgreSQL database.',
      scopeSteps: [
        'Phase 1: WebSocket protocol specification and document state representation.',
        'Phase 2: Operational Transformation algorithm implementation and unit testing.',
        'Phase 3: Redis Pub/Sub infrastructure setup for horizontal scaling.',
        'Phase 4: Frontend UI canvas and Kanban board components.',
        'Phase 5: Load testing concurrent editor rooms up to 50 active sockets.',
      ],
      dataSources: [
        'WebSocket message streams (`EDIT_DOCUMENT`, `MOVE_CARD`, `USER_PRESENCE`).',
        'PostgreSQL user session and project state tables.',
      ],
      dataChecks: [
        { metric: 'Packet Loss', status: 'Passed', detail: '<0.01% retransmission rate under 1,000 simulated socket connections.' },
        { metric: 'CRDT/OT Conflict Rate', status: 'Resolved', detail: '100% deterministic resolution across concurrent edit tests.' },
        { metric: 'Socket Memory Footprint', status: 'Passed', detail: 'Under 1.2MB memory consumption per active connected room.' },
      ],
      worksheetBuild: 'Simulated multi-region network latency using Chrome DevTools throttling to verify document state convergence under 300ms round-trip delays.',
      dashboardBuild: 'Integrated system telemetry panel displaying active WebSocket connections, Redis message throughput, and document version history trees.',
      storyBuild: 'During stress testing, Redis Pub/Sub allowed a room split across two server instances to broadcast cursor movements with negligible human-perceivable lag.',
      detailedDiscussion: 'Comparing Conflict-Free Replicated Data Types (CRDTs) versus Operational Transformation (OT): OT was chosen for its lower memory footprint on large text documents.',
      extraSection: 'Security Architecture: All WebSocket frames are signed with short-lived JWT tokens and verified at the gateway before state mutations are accepted.',
      extraToggleSection: {
        title: 'Real-Time State Machine Benchmarks',
        description: 'Toggle to view WebSocket server benchmarks and memory profile.',
        options: [
          { key: 'latency', label: 'Latency Distribution', content: 'P50: 12ms | P95: 22ms | P99: 38ms across 5,000 messages per second.' },
          { key: 'memory', label: 'Memory & CPU Usage', content: '100 concurrent rooms consumed 140MB RAM and 8% CPU on single 1-vCPU instance.' },
          { key: 'ot-demo', label: 'OT Convergence Algorithm', content: 'Transform(opA, opB) -> [opA_prime, opB_prime] guarantees operational commutativity.' },
        ],
      },
    },
  },
];
