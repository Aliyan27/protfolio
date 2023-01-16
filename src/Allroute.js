import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import About from "./components/About/About";
import Navbar from "./components/navbarmain/Navbar";
import Mainpage from "./Mainpage";
import Contactus from "./components/contact us/Contactus";

const Allroute = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/about" element={<About />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/Contactus" element={<Contactus />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Allroute;
