import "./App.css";
import Header from "./Components/Header";
import Quote from "./Components/Quote";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.location.replace("https://dhanush.io");
  }, []);

  return null;

  return (
    <>
      <Header />
      <Quote />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
