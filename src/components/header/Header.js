import React from "react";
import "./header.css";
import Logo from "../logo/Logo";
import Button from "../button/Button";
import Navtoggle from "../nav-toggle/Navtoggle";

const Header = () => {
  return (
    <>
      <header>
        <div className="container-large">
          <Logo />
          <Navtoggle />
          <Button />
        </div>
      </header>
    </>
  );
};

export default Header;
