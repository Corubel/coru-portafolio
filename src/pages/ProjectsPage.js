import React from "react";
import ProjectItem from "../componentes/ProjectItem";
import { projectList } from "../helper/ProjectList";

import "../estilos/projects.css";

function ProjectsPage() {
  return (
    <div className="projects">
      <h1 className="projectTitle">Proyectos</h1>
      <div className="projectList">
        {projectList.map((project) => {
          return <ProjectItem name={project.name} image={project.image} />;
        })}
      </div>
    </div>
  );
}

export default ProjectsPage;
