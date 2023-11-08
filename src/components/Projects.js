import { projects } from "../utils/constants";
import "./Projects.css";

import MotionBox from "../utils/motion";
import { fadeIn, textVariant } from "../utils/motion_variants";

const ProjectLinks = ({ project }) => {
  return (
    <div className="icon-list mb-2">
      {project.links && (
        <>
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-github icon me-2"></i>
            </a>
          )}
          {project.links.youtube && (
            <a
              href={project.links.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-youtube icon text-danger me-2"></i>
            </a>
          )}
          {project.links.website && (
            <a
              href={project.links.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-link text-warning icon"></i>
            </a>
          )}
        </>
      )}
    </div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <MotionBox variants={fadeIn("up", "spring", 0.2, 0.75)}>
      <div className="card project-card m-2 p-3">
        <img src={project.image} className="card-img-top" alt={project.title} />
        <div className="card-body">
          <h5 className="card-title">{project.name}</h5>
          <p className="card-text">{project.description}</p>
        </div>
        <div className="px-2">
          <ProjectLinks project={project} />
          <div className="tags d-flex flex-wrap ">
            {project.tags.map((tag, index) => (
              <span key={index} className={`${tag.color} me-2`}>
                #{tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </MotionBox>
  );
};

const Projects = () => {
  return (
    <div id="projects">
      <div className="projects-container text-light">
        <div className="container text-center py-5">
          <MotionBox variants={textVariant}>
            <h1>Projects</h1>
            <p className="mt-4">
              Following projects showcases my skills and experience through
              real-world examples of my work. Each project is briefly described
              with links to code repositories and live demos in it.
            </p>
          </MotionBox>
        </div>

        <div className="container-fluid mb-5 d-flex flex-wrap justify-content-center align-items-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="col-xs-8 col-sm-6 col-md-4 mx-md-1 mb-3"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
