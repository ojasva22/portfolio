export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'GenAI-Powered CLI Assistant',
    description: 'AI assistant for automated log debugging and documentation retrieval, reducing incident resolution time by 40%',
    longDescription: 'Built a GenAI-powered CLI assistant using LangChain, AWS Bedrock Titan, and Guardrails that automated log debugging and documentation retrieval. The system ensures safe AI responses and integrates domain RAG pipelines for root-cause tracing. Features context-aware multi-step LLM interactions with DynamoDB as session memory, and a parallelized embedding pipeline (Titan → S3 Vector Store + OpenSearch KNN) that accelerates semantic log similarity search 3× faster across millions of records.',
    image: '/projects/genai-cli.jpg',
    technologies: ['LangChain', 'AWS Bedrock', 'DynamoDB', 'S3', 'OpenSearch', 'Python', 'RAG', 'Guardrails', 'CLI'],
    featured: true,
  },
  {
    id: '2',
    title: 'Tier-0 Microservice for E-Commerce',
    description: 'High-availability microservice powering customer orders with 99.99% uptime for millions of users',
    longDescription: 'Owned and operated a Tier-0 microservice powering Walmart Canada\'s customer orders, ensuring 99.99% uptime and zero critical downtime incidents. Designed and deployed backend microservices with dynamic filtering and caching, boosting search conversion rates by 20%. Strengthened service resilience through Kubernetes, Istio, and autoscaling, validated at 1M+ requests/minute. Implemented priority routing with Azure SQL and introduced service registry, rate-limiting, and fault-injection testing.',
    image: '/projects/microservice.jpg',
    technologies: ['Java', 'Spring Boot', 'Kubernetes', 'Istio', 'Azure SQL', 'Microservices', 'Docker'],
    featured: true,
  },
  {
    id: '3',
    title: 'CI/CD Testing Pipeline',
    description: 'Automated testing pipeline reducing post-deployment failures by 90%',
    longDescription: 'Embedded regression, integration, and load testing directly into CI/CD pipelines using Jenkins, JUnit, and JMeter. The pipeline validates service stability at scale and includes comprehensive test coverage for microservices architecture.',
    image: '/projects/cicd.jpg',
    technologies: ['Jenkins', 'JUnit', 'JMeter', 'CI/CD', 'Load Testing', 'Integration Testing', 'Java'],
    featured: false,
  },
  {
    id: '4',
    title: 'Kafka-Based File Processing Microservice',
    description: 'High-performance file parsing microservice accelerating partner data processing',
    longDescription: 'Built a Kafka-based file parsing microservice with MongoDB and REST APIs that accelerated partner processing workflows. The system handles high-throughput data ingestion and processing with fault tolerance and scalability.',
    image: '/projects/kafka-microservice.jpg',
    technologies: ['Kafka', 'MongoDB', 'REST APIs', 'Java', 'Microservices'],
    featured: false,
  },
  {
    id: '5',
    title: 'Monitoring & Observability Platform',
    description: 'Splunk and Grafana dashboards improving incident response efficiency by 30%',
    longDescription: 'Implemented comprehensive Splunk and Grafana dashboards with automated alerts for anomaly detection. The monitoring system ensures service robustness during peak loads and provides real-time insights into system health and performance metrics.',
    image: '/projects/monitoring.jpg',
    technologies: ['Splunk', 'Grafana', 'Prometheus', 'Monitoring', 'Alerting'],
    featured: false,
  },
  {
    id: '6',
    title: 'REST-Based Test Data Generator',
    description: 'Modular test data generation system reducing QA database retrieval times',
    longDescription: 'Developed a modular REST-based Test Data Generator that significantly reduced QA teams\' database retrieval times and improved testing speed. The system provides flexible test data generation capabilities for various testing scenarios.',
    image: '/projects/test-generator.jpg',
    technologies: ['REST APIs', 'Java', 'Testing', 'QA Automation'],
    featured: false,
  },
]

