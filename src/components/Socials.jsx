import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaDiscord } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Socials = () => {
  return (
    <section id="socials" className="socials">
      <h2 className="section-title">Socials</h2>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/bart-slagboom-08364225b/" target="_blank"><FaLinkedin /></a>
        <a href="mailto:bartslagboom@gmail.com"><SiGmail /></a>
        <a href="https://github.com/Bslagboom" target="_blank"><FaGithub /></a>
        <a href="https://www.instagram.com/bart__0187/" target="_blank"><FaInstagram /></a>
        <a href="https://discord.gg/vCR3nytnug" target="_blank"><FaDiscord /></a>
      </div>
    </section>
  );
};

export default Socials;
