import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { motion } from "framer-motion";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <motion.div
      // initial="pageInitail"
      // animate="pageAnimate"
      // transition={{duration: 0.5}}
      // variants={{
      //   pageInitail: {
      //     opacity: 0,
      //   },
      //   pageAnimate: {
      //     opacity: 1,
      //   },
      // }}
    >
      <App />
    </motion.div>
  </React.StrictMode>
);
