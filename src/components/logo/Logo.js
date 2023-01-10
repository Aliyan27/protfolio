import React from "react";
import "./logo.css";
import { Link } from "react-router-dom";
import img from "../../assets/img-1.jpeg";

const Logo = () => {
  return (
    <>
      <Link className="logo" to="/">
        <div className="logo-image">
          <img src={img} alt="Missing" />
        </div>
        <span> Muhammad Aliyan</span>
      </Link>
    </>
  );
};

export default Logo;
