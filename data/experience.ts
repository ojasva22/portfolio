export interface ExperienceItem {
  id: string
  company: string
  position: string
  duration: string
  location: string
  description: string[]
  technologies: string[]
  logo?: string
  logoUrl?: string
}

export const experiences: ExperienceItem[] = [
  {
    id: '1',
    company: 'Amazon',
    position: 'Software Engineer Intern',
    duration: 'May 2025 - August 2025',
    location: 'North Reading, MA, USA',
    logoUrl: 'https://logo.clearbit.com/amazon.com',
    description: [
      'Built a GenAI-powered CLI assistant (LangChain + Bedrock Titan + Guardrails) that automated log debugging and doc retrieval, ensuring safe responses and cutting incident resolution time by 40%',
      'Developed a parallelized embedding pipeline (Titan → S3 Vector Store + OpenSearch KNN) that accelerated semantic log similarity search 3× faster across millions of records',
      'Integrated domain RAG pipelines for root-cause tracing and system knowledge retrieval, improving developer triage accuracy',
      'Developed context-aware multi-step LLM interactions using DynamoDB as a short-term session memory store',
      'Partnered with service owners to integrate the AI assistant into internal incident workflows, improving root-cause coverage',
    ],
    technologies: ['LangChain', 'AWS Bedrock', 'DynamoDB', 'S3', 'OpenSearch', 'Python', 'RAG', 'Guardrails'],
  },
  {
    id: '2',
    company: 'Walmart',
    position: 'Software Engineer III',
    duration: 'August 2022 - August 2024',
    location: 'Bengaluru, KA, India',
    logoUrl: 'https://logo.clearbit.com/walmart.com',
    description: [
      'Owned and operated a Tier-0 microservice powering Walmart Canada\'s customer orders, ensuring 99.99% uptime and zero critical downtime incidents across millions of users',
      'Designed and deployed a new backend microservice with dynamic filtering and caching, boosting search conversion rates by 20%',
      'Embedded regression, integration, and load testing directly into CI/CD pipelines (Jenkins + JUnit + JMeter), reducing post-deployment failures by 90%',
      'Strengthened service resilience through Kubernetes, Istio, and autoscaling, validating stability at 1M+ requests/minute via synthetic load tests',
      'Introduced service registry, rate-limiting, and fault-injection testing, hardening system reliability during traffic surges',
      'Implemented priority routing with Azure SQL, eliminating cross-datacenter timeouts and improving API reliability for critical services',
      'Mentored junior developers through design reviews, improving team code quality and onboarding speed',
    ],
    technologies: ['Java', 'Spring Boot', 'Kubernetes', 'Istio', 'Azure SQL', 'Jenkins', 'JUnit', 'JMeter', 'Microservices'],
  },
  {
    id: '3',
    company: 'Piramal Finance',
    position: 'Software Engineer',
    duration: 'August 2021 - August 2022',
    location: 'Bengaluru, KA, India',
    logoUrl: 'https://logo.clearbit.com/piramal.com',
    description: [
      'Designed REST APIs to streamline lead onboarding and loan creation, improving partner integration workflows',
      'Implemented Splunk and Grafana dashboards with alerts, improving anomaly detection and enhancing incident response efficiency by 30% while ensuring service robustness during peak loads',
      'Built Kafka-based file parsing microservice (MongoDB + REST) that accelerated partner processing',
      'Automated daily reporting with cron-based MongoDB system to generate Excel reports, eliminating manual work and boosting operational efficiency',
    ],
    technologies: ['Java', 'REST APIs', 'Kafka', 'MongoDB', 'Splunk', 'Grafana', 'Cron'],
  },
  {
    id: '4',
    company: 'Baker Hughes',
    position: 'Software Engineer',
    duration: 'May 2020 - August 2021',
    location: 'Mumbai City, MH, India',
    logoUrl: 'https://logo.clearbit.com/bakerhughes.com',
    description: [
      'Developed a modular REST-based Test Data Generator, reducing QA teams\' database retrieval times and improving testing speed',
      'Upgraded microservices (10K+ LOC) from Java 8 → 11, with full regression validation to ensure zero production regressions',
      'Automated monitoring workflows with shell scripts for email alerts, reducing incident response time by 50%',
      'Remediated OSS and SAST vulnerabilities, ensuring license compliance and reducing security risks',
    ],
    technologies: ['Java', 'REST APIs', 'Shell Scripting', 'Security', 'OSS Compliance', 'SAST'],
  },
]

