import React from "react";
import { Link } from "react-router-dom";
import "./navtoogle.css";

const Navtoggle = () => {
  return (
    <>
      <Link to={"/navbar"}>
        <div className="navbar">
          <div className="navtoggle"></div>
          <div className="navtoggle"></div>
          <div className="navtoggle"></div>
        </div>
      </Link>
    </>
  );
};

export default Navtoggle;
