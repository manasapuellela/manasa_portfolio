import { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="card project-card">
      <div className="project-card__header">
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
      </div>
      <div className="project-card__chips">
        {project.tech.map((item) => (
          <span key={`${project.id}-${item}`} className="chip">
            {item}
          </span>
        ))}
      </div>
      <div className="project-card__section">
        <h4>What I did</h4>
        <ul>
          {project.whatIDid.map((item) => (
            <li key={`${project.id}-did-${item}`}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="project-card__section">
        <h4>Impact</h4>
        <ul>
          {project.impact.map((item) => (
            <li key={`${project.id}-impact-${item}`}>{item}</li>
          ))}
        </ul>
      </div>
      {project.links && project.links.length > 0 ? (
        <div className="project-card__links">
          {project.links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
};

export default ProjectCard;
