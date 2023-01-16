import React from "react";
import { Link } from "react-router-dom";
import "./navtoogle.css";

const Navtoggle = () => {
  return (
    <>
      <Link to={"/navbar"}>
        <div className="navbar">
          <div class="wrapper">
            <div class="top bar"></div>
            <div class="middle bar"></div>
            <div class="bottom bar"></div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Navtoggle;
