import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about-img"></div>
        <div className="description">
          <h3>About</h3>
          <h2>Hi! I'm Muhammad Aliyan</h2>
          <p>
            "Innovative Programmer and internet Entrepreneur striving to make
            the world a more unified and connected place. A creative thinker,
            adept in Frontend Web development. Seeking new opportunities and
            challenges that will expand my skill set. "
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
      </div>
    </section>
  );
};

export default About;
