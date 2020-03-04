import React from "react";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Paw from "./Paw.svg";
import { Link } from "react-router-dom";
import "./stylesheets/Contact.scss";

function Contact(props) {
  return (
    <div className="contacts-page" id="contact">
      <div className="about-paws">
        <h1> About Paws </h1>
        <p>
          Not all stinky humans are bad! There are humans out there who want to
          help animals to stand for their rights! That is why we have worked
          hard to provide this one and only website for Animals Who Read. By
          doing so - we believe that we empower animals to have access to the
          news. Which in turn means - empowering animals to act! We aim to
          provide a platform for Animals where they can feel connected, express
          their feelings and thoughts and most important - learn about what
          other animals are up to. If you would like to contact us, or if you
          would like to see more things in this website - please reach out! We
          are open and verry happy to help!
        </p>
        <img src={Paw} className="navbar__brand-img" alt="logo" />
      </div>
      <button className="home_from_contact">
        <Link to="/" className="contact-button">
          Go Home
        </Link>
      </button>
      <Footer />
    </div>
  );
}
export default Contact;
