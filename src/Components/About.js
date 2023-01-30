import React from "react";
import styles from "../Styles/About.module.css";
import logo from "../assets/coder2.png";

const About = () => {
  return (
    <div className="container">
      <section id="about" className={styles.about}>
        <h2 className={styles.heading}>about Me</h2>
        <div className={styles.aboutContainer}>
          <div>
            <p className={styles.desc}>
              Penultimate year undergrad IT student who started Programming as a
              complete Noob. I can undoubtedly say that I am a Self taught
              Developer.I'm eager for internship opportunities to increase my
              knowledge and enthusiasm for the software and web development
              industry. The technology I've been surrounded by has been admiring
              me for the past several years, and I hope my creativity combines
              with technology to create a lovely environment for all of us.Right
              now I am into Web Domain as it fascinated me at the start. I am
              planning on to learn Mobile Development in the near feature. And
              yes Googling is one of my top Skills.
            </p>
            <p>Done an Internship for 2 weeks at Puducherry Technological University as a team member in Controller of Examinations.</p>
            <p className={styles.current}>Currently I am Learning React Native</p>
          </div>
          <div className={styles.imgHolder}>
            <img src={logo} alt="Dhanush Mahesh" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
