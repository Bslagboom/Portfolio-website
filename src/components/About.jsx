import React from "react";
import pfpImage from "../images/pfp.jpg";

const About = () => {
  return (
    <section id="about" className="about">
          <h1 className="header-title">Frontend Developer</h1>
      <h2 className="section-title">About</h2>
      <div className="about-content">
        <div className="about-text">
          <h2>I'm Bart Slagboom</h2>
          <p>
            I am a driven and eager-to-learn person with a great interest in
            front-end development. I excel in collaboration and like to contribute
            to a positive team atmosphere.
          </p>
        </div>
        <img src={pfpImage} alt="Bart Slagboom" className="profile-pic" />
      </div>
    </section>
  );
};

export default About;