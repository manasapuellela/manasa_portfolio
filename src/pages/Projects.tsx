import FocusToggle from "../components/FocusToggle";
import ProjectCard from "../components/ProjectCard";
import { FocusLens } from "../data/focus";
import { projects } from "../data/projects";

type ProjectsProps = {
  focus: FocusLens;
  onFocusChange: (value: FocusLens) => void;
};

const Projects = ({ focus, onFocusChange }: ProjectsProps) => {
  const filteredProjects = projects.filter((project) => {
    if (focus === "all") {
      return true;
    }
    return project.tags.includes(focus);
  });

  return (
    <div className="page">
      <section className="section">
        <div className="section__header">
          <h1>Projects</h1>
          <p className="muted">Sanitized examples — no confidential systems.</p>
        </div>
        <FocusToggle value={focus} onChange={onFocusChange} />
      </section>

      <section className="section">
        <div className="grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
