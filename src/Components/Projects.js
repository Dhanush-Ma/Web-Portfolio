import styles from "../Styles/Projects.module.css";
import Carousel, { consts } from "react-elastic-carousel";
import { projects } from "../data/project";
import Project from "./Layouts/Project";
import { useState } from "react";
import { motion } from "framer-motion";
import pageAnimate from "../animation";

const Projects = () => {
  const [showArrow, setShowArrows] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setShowArrows(window.innerWidth);
  });

  function myArrow({ type, onClick, isEdge }) {
    const pointer = type === consts.PREV ? "" : "";
    return (
      <button style={{ display: "none" }} onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    );
  }

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
        <motion.div
          initial={"offScreen"}
          whileInView={"onScreen"}
          variants={pageAnimate}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Carousel itemsToShow={1} renderArrow={showArrow < 700 && myArrow}>
            {projectElemets}
          </Carousel>
        </motion.div>
      </section>
    </div>
  );
};

export default Projects;
