export interface SkillCategory {
  category: string
  skills: string[]
  icon?: string
}

export const skills: SkillCategory[] = [
  {
    category: 'Backend & Languages',
    skills: ['Java', 'Python', 'SQL', 'Shell', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    category: 'Frameworks & Libraries',
    skills: ['Spring Boot', 'Looper', 'LangChain'],
  },
  {
    category: 'Cloud & Infrastructure',
    skills: ['AWS Bedrock', 'AWS Lambda', 'DynamoDB', 'S3', 'AWS Lex', 'AWS SES', 'Azure', 'Kubernetes', 'Docker', 'Terraform', 'Apache Spark'],
  },
  {
    category: 'Databases & Search',
    skills: ['PostgreSQL', 'MongoDB', 'DynamoDB', 'OpenSearch', 'Redis'],
  },
  {
    category: 'Messaging & Streaming',
    skills: ['Kafka'],
  },
  {
    category: 'LLM & Agent Systems',
    skills: ['LangChain', 'LangGraph', 'Retrieval-Augmented Generation (RAG)', 'Multi-Agent Frameworks', 'Guardrails'],
  },
  {
    category: 'DevOps & Monitoring',
    skills: ['Git', 'Jenkins', 'GitHub Actions', 'Prometheus', 'Grafana', 'Splunk', 'Postman'],
  },
  {
    category: 'Testing & QA',
    skills: ['JUnit', 'JMeter', 'Load Testing', 'Performance Testing', 'Integration Testing', 'Regression Testing'],
  },
]

