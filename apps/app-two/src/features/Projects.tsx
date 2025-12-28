import { projects } from "@constants/portfolio";
import FullScreen from "@layouts/FullScreen";

const Projects = () => {
  return <FullScreen>
    {projects.map(project => (
      <div key={project.title}>
        <div>{project.title}</div>
        <div>{project.description}</div>
        <div>{JSON.stringify(project.tech)}</div>
      </div>
    ))}
  </FullScreen>;
};

export default Projects;
