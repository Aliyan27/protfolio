import React from "react";
import "./logo.css";
import { Link } from "react-router-dom";
import img from "../../assets/logo.jpg";

const Logo = () => {
  return (
    <>
      <Link className="logo" to="/">
        <div className="logo-image">
          <img src={img} alt="Missing" />
        </div>
        <span>786 Tech</span>
      </Link>
    </>
  );
};

export default Logo;
