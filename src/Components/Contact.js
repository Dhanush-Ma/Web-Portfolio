import { useEffect, useState, useRef } from "react";
import styles from "../Styles/Contact.module.css";
import validator from "validator";
import logo from "../assets/get-in-touch.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [validData, setValidData] = useState(false);

  function handleChange(e) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  }

  useEffect(() => {
    checkForErrors();
  }, [formData]);

  function checkForErrors() {
    if (
      validator.isEmail(formData.email) &&
      formData.name &&
      formData.message
    ) {
      setValidData(true);
    } else {
      setValidData(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    //handle email messsage
    emailjs
      .sendForm(
        "service_8zmgis6",
        "template_tm6fbf3",
        form.current,
        "K01d63QMtMM4joJiX"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="container">
      <section id="contact" className={styles.contact}>
        <h1 className={styles.heading}>Get in Touch.</h1>
        <div className={styles.contactConatiner}>
          <form ref={form} onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              value={formData.name}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={formData.email}
            />{" "}
            <textarea
              name="message"
              placeholder="Your Message"
              onChange={handleChange}
              value={formData.message}
            />
            {validData ? (
              <button className={styles.btn}>SEND</button>
            ) : (
              <button className={styles.btn} disabled>
                SEND
              </button>
            )}
          </form>
          <div className={styles.imgHolder}>
            <img src={logo} alt="logo"></img>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
