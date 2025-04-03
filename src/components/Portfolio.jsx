import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Socials from "./Socials";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <Header />
      <About />
      <Projects />
      <Skills />
      <Socials />
    </div>
  );
};

export default Portfolio;
