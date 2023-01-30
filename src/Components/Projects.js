import styles from "../Styles/Projects.module.css";
import Carousel from "react-elastic-carousel";
import { projects } from "../data/project";
import Project from "./Layouts/Project";



const Projects = () => {
  const projectElemets = projects.map((project) => {
    return (
      <Project
        key={project.id}
        title={project.title}
        desc={project.desc}
        tags={project.tags}
        img={project.img}
        link={project.navigationLink}
        gitHub={project.gitHub}
      />
    );
  });

  return (
    <div className="container">
      <section id="projects" className={styles.projects}>
        <h1>Some of my Works</h1>
        <Carousel itemsToShow={1}>{projectElemets}</Carousel>
      </section>
    </div>
  );
};

export default Projects;
