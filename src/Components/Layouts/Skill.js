import React, { useState } from "react";
import styles from "./Skill.module.css";
import { motion } from "framer-motion";
const Project = (props) => {
  const [percentage, setPercentage] = useState(0);
  const [progrssBar, setProgressBar] = useState({});

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

  function animateProgressBar(finalValue) {
    let progressValue = 0;
    let speed = 20;
    let progress = setInterval(() => {
      progressValue++;
      setPercentage(progressValue);
      setProgressBar({
        background: `conic-gradient(
          var(--green) ${progressValue * 3.6}deg,
          var(--ligter-green) ${progressValue * 3.6}deg
        )`,
      });

      if (progressValue == finalValue) clearInterval(progress);
    }, speed);
  }

  return (
    <motion.div
      className={styles.individualSkill}
      variants={pageAnimate}
      onViewportEnter={() => animateProgressBar(props.percent)}
    >
      <h3>{props.name}</h3>
      <div className={styles.skillWithPercent}>
        <i className={props.link}></i>
        <div className={styles.percentProgressBar} style={progrssBar}>
          <p className={styles.percent}>{percentage}%</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
