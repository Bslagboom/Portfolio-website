import React from "react";
import Project1Image from "../images/Project1.png";
import Project2Image from "../images/Project2.png";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <img src={Project1Image} alt="Project 1" className="project-image" />
          <div className="project-overlay">
            <h3>Project 1</h3>
            <p>Project description</p>
          </div>
        </div>
        <div className="project-item">
          <img src={Project2Image} alt="Project 2" className="project-image" />
          <div className="project-overlay">
            <h3>Project 2</h3>
            <p>Project description</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;