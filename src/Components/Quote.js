import React from "react";
import styles from "../Styles/Quote.module.css"
import { motion } from "framer-motion";
import pageAnimate from "../animation"
const Quote = () => {
  return (
    <section className={styles.quoteBg}>
      <motion.div
        className="container"
        initial={"offScreen"}
        whileInView={"onScreen"}
        variants={pageAnimate}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className={styles.quote}>
          <div>
            <i className="fa-sharp fa-solid fa-quote-left"></i>
            <p className={styles.text}>
              <span style={{ fontSize: "2rem" }}>A</span> strange as well as an
              immense belief is that knowledge leads to movement and which in
              turn or eventually leads to freedom.
            </p>
          </div>
          <p className={styles.auth}>- Someone Wiser</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Quote;
