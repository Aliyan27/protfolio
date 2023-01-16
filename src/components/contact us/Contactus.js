import React from "react";
import "./contactus.css";
import Subheading from "../sub heading/Subheading";

const Contactus = () => {
  const heading = "contact us";
  return (
    <section className="Form">
      <div className="container">
        <Subheading heading={heading} className="sub-heading" />
        <form>
          <label>Name: </label>
          <input type="text" placeholder="Name" name="name" />
          <label>Email: </label>
          <input type="Email" placeholder="Email" name="email" />
          <label>Number: </label>
          <input type="text" placeholder="Number" name="number" />
          <button type="submit">
            Submit
            <span></span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contactus;
