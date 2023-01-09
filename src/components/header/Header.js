import React from "react";
import "./header.css";
import Logo from "../logo/Logo";

const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <Logo />
        </div>
      </header>
    </>
  );
};

export default Header;
