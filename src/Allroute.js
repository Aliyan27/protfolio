import React from "react";
import Header from "./components/header/Header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";

const Allroute = () => {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <About />
      </BrowserRouter>
    </>
  );
};

export default Allroute;
