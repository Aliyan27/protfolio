import React, { useEffect, useState } from "react";
import MainHeading from "../Main heading/MainHeading";
import "./banner.css";

const Banner = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const ref = setInterval(() => {
      if (value === 1) {
        setValue(0);
      } else {
        setValue(value + 1);
      }
    }, 5000);
    return () => clearInterval(ref);
  }, [value]);
  const text = ["Hello! I'm", "I'M From England"];
  return (
    <section className="Banner">
      <div className="container">
        <p>{text[value]}</p>
        <MainHeading value={value} />
      </div>
    </section>
  );
};

export default Banner;
