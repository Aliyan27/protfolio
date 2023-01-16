import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="container">
        <nav>
          <ul>
            <li className="text-fill-ttb" id="test">
              about
            </li>
            <li className="text-fill-ttb" id="test">
              Services
            </li>
            <li className="text-fill-ttb" id="test">
              team
            </li>
            <li className="text-fill-ttb" id="test">
              Contact
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
