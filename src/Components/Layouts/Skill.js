import React from 'react'
import styles from './Skill.module.css'

const Project = (props) => {
  return (
    <div className={styles.individualSkill}>
      <h3>{props.name}</h3>
      <div className={styles.skillWithPercent}>
        <i className={props.link}></i>
        <p>{props.percent}</p>
      </div>
    </div>
  );
}

export default Project