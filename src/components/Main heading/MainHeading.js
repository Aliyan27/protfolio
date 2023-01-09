import React from "react";
import "./mainheading.css";

const MainHeading = ({ value }) => {
  const heading = ["Muhammad Aliyan", "A front end developer"];

  return (
    <>
      <h1>{heading[value]}</h1>
    </>
  );
};

export default MainHeading;
