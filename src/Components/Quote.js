import React from "react";
import styles from "../Styles/Quote.module.css"

const Quote = () => {
  return (
    <section className={styles.quoteBg}>
      <div className="container">
        <div className={styles.quote}>
          <div>
            <i className="fa-sharp fa-solid fa-quote-left"></i>
            <p>
              <span style={{fontSize:"2rem"}}>A</span> strange as well as an immense belief is that knowledge leads to
              movement and which in turn or eventually leads to freedom.
            </p>
          </div>
          <p className={styles.auth}>- Someone Wiser</p>
        </div>
      </div>
    </section>
  );
};

export default Quote;
