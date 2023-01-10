import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="container">
        <nav>
          <ul>
            <li>Home</li>
            <li>Resume</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
