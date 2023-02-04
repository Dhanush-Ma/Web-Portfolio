import React from "react";
import styles from "./Skill.module.css";
import { motion } from "framer-motion";
const Project = (props) => {
  const pageAnimate = {
    offScreen: { x: "-100", opacity: 0 },
    onScreen: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        type: "spring",
        bounce: 0.5,
      },
    },
  };
  return (
    <motion.div className={styles.individualSkill} variants={pageAnimate}>
      <h3>{props.name}</h3>
      <div className={styles.skillWithPercent}>
        <i className={props.link}></i>
        <p>{props.percent}</p>
      </div>
    </motion.div>
  );
};

export default Project;
