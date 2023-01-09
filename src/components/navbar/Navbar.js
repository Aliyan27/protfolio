import React from "react";
import "./Navbar.css";
import MainHeading from "../Main heading/MainHeading";

const Navbar = () => {
  return (
    <>
      <MainHeading />
      <nav>
        <ul>
          <li>Home</li>
          <li>Resume</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
