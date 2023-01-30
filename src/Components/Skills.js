import React from "react";
import styles from "../Styles/Skills.module.css";
import { skills } from "../data/skills";
import Skill from "./Layouts/Skill";

const Skills = () => {
  const skillElements = skills.map((skill) => {
    return (
    <Skill 
        key={skill.id}
        name={skill.name} 
        percent={skill.percent} 
        link={skill.link}
    />
    )
  });

  return (
    <div className="container">
      <section id="skills" className={styles.skills}>
        <h2 className={styles.heading}>Skills</h2>
        <div className={styles.skillContainer}>{skillElements}</div>
      </section>
    </div>
  );
};

export default Skills;
