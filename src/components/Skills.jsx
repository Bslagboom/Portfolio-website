import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaFigma, FaGitAlt } from "react-icons/fa";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skill-list">
        <FaHtml5 className="icon html" style={{ color: "#E34F26" }} /> 
        <FaCss3Alt className="icon css" style={{ color: "#1572B6" }} /> 
        <FaJs className="icon js" style={{ color: "#F7DF1E" }} /> 
        <FaReact className="icon react" style={{ color: "#61DAFB" }} /> 
        <FaNodeJs className="icon node" style={{ color: "#339933" }} /> 
        <FaFigma className="icon figma" style={{ color: "#F24E1E" }} /> 
        <FaGitAlt className='icon' style={{ color: "#E34F26" }}/>
      </div>
    </section>
  );
};

export default Skills;
