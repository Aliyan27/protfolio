import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h2>Hi! I'm Muhammad Aliyan</h2>
        <p>
          "Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in."
        </p>
        <span>
          <a
            className="button"
            href="../../assets/Muhammad's Resume.pdf"
            download="Muhammad's Resume.pd"
          >
            ChecKout my resume
          </a>
        </span>
      </div>
    </section>
  );
};

export default About;
