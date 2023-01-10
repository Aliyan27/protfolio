import React from "react";
import "./header.css";
import Logo from "../logo/Logo";
import Navtoggle from "../nav-toggle/Navtoggle";

const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <Logo />
          <Navtoggle />
        </div>
      </header>
    </>
  );
};

export default Header;
