export type Project = {
  id: string;
  title: string;
  summary: string;
  tech: string[];
  tags: string[];
  whatIDid: string[];
  impact: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    id: "serverless-etl",
    title: "Serverless ETL for Operational Reporting",
    summary:
      "Event-driven ingestion and transformations for reliable, near-real-time reporting.",
    tech: ["Python", "AWS Lambda", "S3", "Step Functions", "CloudWatch"],
    tags: ["data-platforms", "aws", "etl", "python", "serverless"],
    whatIDid: [
      "Built event-driven ingestion and transformation steps",
      "Implemented retries, idempotency, and structured logging",
      "Wrote unit tests and validation checks",
    ],
    impact: [
      "Reduced manual reporting effort and improved data freshness",
      "Improved reliability with monitored failures and alerts",
    ],
  },
  {
    id: "python-api-service",
    title: "Python API Service for Data Access",
    summary:
      "Secure, documented endpoints that expose analytics datasets with consistent contracts.",
    tech: [
      "FastAPI",
      "AWS API Gateway",
      "AWS Lambda",
      "PostgreSQL",
    ],
    tags: ["data-platforms", "api", "python", "aws"],
    whatIDid: [
      "Designed REST endpoints with schema validation",
      "Added pagination, error handling, and auth placeholders",
    ],
    impact: [
      "Standardized data access patterns and reduced ad hoc queries",
    ],
  },
  {
    id: "sql-refactor",
    title: "SQL Refactoring and Performance Optimization",
    summary:
      "Refined analytical queries into maintainable layers with faster runtimes.",
    tech: ["SQL", "Databricks", "Spark", "Git"],
    tags: ["analytics-bi", "sql", "performance", "databricks"],
    whatIDid: [
      "Refactored complex SQL into modular readable layers",
      "Added data quality checks and reconciliation queries",
    ],
    impact: ["Reduced runtime and improved maintainability"],
  },
  {
    id: "metrics-reliability",
    title: "Metrics Reliability and Reconciliation Framework",
    summary:
      "Acceptance tests and reconciliation suites that keep KPI definitions trustworthy.",
    tech: ["SQL", "Python", "Acceptance tests", "CI placeholders"],
    tags: ["analytics-bi", "data-quality", "sql", "testing"],
    whatIDid: [
      "Defined KPI logic and created reconciliation suites",
      "Built acceptance tests to detect breaking changes",
    ],
    impact: [
      "Increased trust in metrics and reduced stakeholder escalations",
    ],
  },
  {
    id: "executive-dashboards",
    title: "Executive Dashboards with Governed Datasets",
    summary:
      "Curated datasets and dashboards that deliver leadership-ready KPIs.",
    tech: ["AWS QuickSight", "Redshift", "SQL"],
    tags: ["analytics-bi", "aws", "bi", "dashboards"],
    whatIDid: [
      "Modeled datasets for consistent definitions",
      "Built dashboards with drilldowns and scheduled refresh",
    ],
    impact: [
      "Improved visibility into operational KPIs for leadership",
    ],
  },
];
