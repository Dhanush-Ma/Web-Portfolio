import React from "react";
import styles from "../Styles/Skills.module.css";
import { skills } from "../data/skills";
import Skill from "./Layouts/Skill";
import { motion } from "framer-motion";

const Skills = () => {
  const skillElements = skills.map((skill) => {
    return (
      <Skill
        key={skill.id}
        name={skill.name}
        percent={skill.percent}
        link={skill.link}
      />
    );
  });

  return (
    <div className="container">
      <section id="skills" className={styles.skills}>
        <h2 className={styles.heading}>{`Skills in my ToolBox`}</h2>
        <motion.div
          transition={{ staggerChildren: 0.1 }}
          initial={"offScreen"}
          whileInView={"onScreen"}
          viewport={{once:false, amount: 0.2}}
          className={styles.skillContainer}
        >
          {skillElements}
        </motion.div>
      </section>
    </div>
  );
};

export default Skills;
