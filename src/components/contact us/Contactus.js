import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contactus.css";
import Subheading from "../sub heading/Subheading";

const Contactus = () => {
  const heading = "contact us";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o231tia",
        "template_kwh6ssk",
        form.current,
        "hgIhSze6Aeza3pWTj"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="Form">
      <div className="container">
        <Subheading heading={heading} className="sub-heading" />
        <form ref={form} onSubmit={sendEmail}>
          <label>Name: </label>
          <input type="text" placeholder="Name" name="from_name" />
          <label>Email: </label>
          <input type="Email" placeholder="Email" name="email" />
          <label>Number: </label>
          <input type="text" placeholder="Number" name="number" />
          <label>How can we help!: </label>
          <input type="text" placeholder="Message" name="message" />
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
