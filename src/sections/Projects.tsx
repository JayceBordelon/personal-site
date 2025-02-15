import FloatingInView from '../components/FloatingInView';
import ProjectCard from '../components/ProjectCard';
import TypeWriter from '../components/TypeWriter';
import { myProjects } from '../constants/projectConstants';

export default function Projects() {
  return (
    <section id="projects">
      <header>
        <h2>
          <TypeWriter>Projects</TypeWriter>
        </h2>
      </header>
      <div className="project-card-container">
        {myProjects.map((project) => (
          <FloatingInView key={project.title} threshold={0.4}>
            <ProjectCard project={project} />
          </FloatingInView>
        ))}
      </div>
    </section>
  );
}
