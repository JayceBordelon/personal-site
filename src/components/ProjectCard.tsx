import { openLinkInNewTab } from '../functions/helpers';
import { project } from '../types/project';

interface projectCardProps {
  project: project;
}

export default function ProjectCard({ project }: projectCardProps) {
  return (
    <div className="project-card" onClick={() => openLinkInNewTab(project.link)}>
      <header>
        <h3>{project.title}</h3>
      </header>
      <p>{project.desc}</p>
      <button
        className="open-project-button"
        onClick={() => openLinkInNewTab(project.link)}
        type="button"
      >
        {project.icon}
      </button>
    </div>
  );
}
