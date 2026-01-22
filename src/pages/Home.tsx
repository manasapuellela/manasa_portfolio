import FocusToggle from "../components/FocusToggle";
import { FocusLens } from "../data/focus";

const highlightsByFocus: Record<FocusLens, string[]> = {
  all: [
    "Python + SQL pipelines that balance speed, reliability, and clarity",
    "AWS-native ETL with monitoring, retries, and cost-aware patterns",
    "Analytics-ready models with documented metrics and reconciliation",
    "Decision-ready dashboards and stakeholder-friendly data products",
  ],
  "data-platforms": [
    "Python services for ETL orchestration and data APIs",
    "AWS Lambda, Step Functions, and S3 for serverless pipelines",
    "Observability with structured logging, alerts, and retries",
    "API-ready datasets with validation and governance built in",
  ],
  "analytics-bi": [
    "SQL modeling for trusted metric definitions",
    "Reconciliation suites that align KPIs across sources",
    "Acceptance tests to protect analytics logic changes",
    "QuickSight dashboards with drilldowns and scheduled refresh",
  ],
};

type HomeProps = {
  focus: FocusLens;
  onFocusChange: (value: FocusLens) => void;
};

const Home = ({ focus, onFocusChange }: HomeProps) => {
  return (
    <div className="page">
      <section className="hero">
        <div>
          <p className="eyebrow">Portfolio</p>
          <h1>Manasa Surya P</h1>
          <p className="hero__title">Data Analytics Engineer (Python-focused)</p>
          <p className="hero__subtitle">
            I build reliable data pipelines and trusted metrics using Python, AWS,
            and SQL, and deliver decision-ready dashboards.
          </p>
          <div className="cta-group">
            <a className="button button--primary" href="/projects">
              View Projects
            </a>
            <a className="button button--ghost" href="/resumes/Manasa_DataAnalyticsEngineer_Python.pdf">
              Download Resume
            </a>
            <a className="button button--ghost" href="https://github.com/your-handle">
              GitHub
            </a>
            <a className="button button--ghost" href="https://linkedin.com/in/your-handle">
              LinkedIn
            </a>
          </div>
        </div>
        <div className="hero__card">
          <h2>About</h2>
          <p>
            I partner with data, product, and business teams to ship analytics
            foundations that scale. From Python ETL and API services to
            stakeholder-facing metrics and dashboards, I focus on clarity,
            reliability, and strong data contracts.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section__header">
          <h2>Focus lens</h2>
          <p>Choose a lens to emphasize different strengths.</p>
        </div>
        <FocusToggle value={focus} onChange={onFocusChange} />
      </section>

      <section className="section">
        <div className="section__header">
          <h2>Highlights</h2>
          <p>Tailored to your current hiring focus.</p>
        </div>
        <ul className="highlight-list">
          {highlightsByFocus[focus].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
