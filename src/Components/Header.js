import React, { useState } from "react";
import Navbar from "./Navbar";
import logo from "../assets/coder-logo.png";
import styles from "../Styles/Header.module.css";
import Typewriter from "typewriter-effect";

const Header = () => {
  const [nameDesign, setNameDesign] = useState(false);
  return (
    <>
      <Navbar />
      <header id="header">
        <div className="container">
          <div className={styles.hero}>
            <div className={styles.textInfo}>
              <h1>
                Hey I'm{" "}
                <span
                  onMouseEnter={() => setNameDesign(true)}
                  onMouseLeave={() => setNameDesign(false)}
                  className={styles.name}
                >
                  Dhanush
                </span>
              </h1>
              <Typewriter
                className={styles.dynamicText}
                options={{
                  loop: true,
                  autoStart: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Web Developer")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Web Designer")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("MERN Stack Developer")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Writer")
                    .pauseFor(1000)
                    .deleteAll()
                    .start();
                }}
              />
              <p>
                A passionate self taught developer who had done some hands on
                real time projects. Looking forward to catch up with you!{" "}
              </p>

              <a
                className={styles.resume}
                href="https://drive.google.com/file/d/1Kzigl7z24ICGIq6l1FMnExukfIpwrPfC/view?usp=share_link"
                target="_blank"
                rel="noreferrer"
                download="Dhanush-Resume.pdf"
              >
                Checkout My Resume
              </a>
              <span className={styles.dot}></span>
              <div className={styles.links}>
                <a
                  href="https://github.com/Dhanush-Ma"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://linkedin.com/in/iamdhanush02"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div className={styles.imgHolder}>
              {nameDesign && (
                <p className={styles.nameDesign}>Trust Me I'm a Programmer..</p>
              )}
              <img className={styles.heroLogo} src={logo} alt="coder img" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
