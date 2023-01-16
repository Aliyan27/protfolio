import React from "react";
import "./button.css";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <>
      <Link to={"/contactus"}>
        <button class="button-1">
          Contact US
          <div class="button__horizontal"></div>
          <div class="button__vertical"></div>
        </button>
      </Link>
    </>
  );
};

export default Button;
