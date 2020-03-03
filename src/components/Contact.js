import React from "react";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Paw from "./Paw.svg";
import { Link } from "react-router-dom";

function Contact(props) {
  return (
    <div className="contacts-page" id="contact">
      <div className="about-paws">
        <h1> About Paws </h1>
        <img src={Paw} className="navbar__brand-img" alt="logo" />
      </div>
      <Footer />
      <button className="active-article__button">
        <Link to="/">Go Home</Link>
      </button>
    </div>
  );
}
export default Contact;
