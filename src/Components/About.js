import React from "react";
import styles from "../Styles/About.module.css";
import logo from "../assets/coder2.png";
import pageAnimate from "../animation";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="container">
      <motion.section
        initial={"offScreen"}
        whileInView={"onScreen"}
        variants={pageAnimate}
        viewport={{ once: false, amount: 0.2 }}
        id="about"
        className={styles.about}
      >
        <h2 className={styles.heading}>about Me</h2>
        <div className={styles.aboutContainer}>
          <div>
            <p className={styles.desc}>
              As a penultimate year undergraduate IT student, I have carved a
              niche for myself as a self-taught developer with a focus on
              full-stack web and mobile application development. My freelance
              journey has been rich and rewarding, having successfully managed
              projects for over five clients, each with unique demands and
              technological challenges. My expertise spans from designing
              responsive user interfaces to developing complex backend
              functionalities, using a blend of modern technologies that ensure
              seamless user experiences. Currently, I'm deeply engrossed in the
              web development domain, which first captured my interest and
              continues to fuel my passion for coding. Looking ahead, I am eager
              to expand my skill set into mobile development, aiming to craft
              integrated solutions that bridge the gap between web and mobile
              platforms.
            </p>
            <p>
              Research and problem-solving are integral parts of my workflow,
              with 'Googling' serving as a vital skill in my arsenal, enabling
              me to stay updated with the latest technologies and industry
              practices. As I continue to grow professionally, I am enthusiastic
              about exploring internship opportunities that will broaden my
              horizons and help me contribute more effectively to the technology
              sector, ultimately aiming to create an engaging and functional
              digital environment for all users.
            </p>
            <p className={styles.current}>
              Currently I am Learning
              <br />
              <div className={styles.currentContainer}>
                <span style={{ color: "#0f0f0f" }}>
                  NextJS
                  <i
                    style={{ fontSize: "40px", marginLeft: "10px" }}
                    class="devicon-nextjs-original colored"
                  ></i>{" "}
                </span>
                &{" "}
                <span style={{ color: "#0db7ed" }}>
                  Docker
                  <i
                    style={{ fontSize: "40px", marginLeft: "10px" }}
                    class="devicon-docker-plain colored"
                  ></i>
                </span>
              </div>
            </p>
          </div>
          <div className={styles.imgHolder}>
            <img src={logo} alt="Dhanush Mahesh" />
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
