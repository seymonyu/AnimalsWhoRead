import React from "react";

const NavBar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
<<<<<<< HEAD
    <a className="navbar-brand" href="#">
=======
    <a className="navbar-brand" href="/">
>>>>>>> development
      Animals Who Fight
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
<<<<<<< HEAD
          <a className="nav-link" href="#">
=======
          <a className="nav-link">
>>>>>>> development
            Home <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
<<<<<<< HEAD
          <a className="nav-link" href="survey">
=======
          <a className="nav-link" href="/survey">
>>>>>>> development
            Extinction
          </a>
        </li>
        <li className="nav-item">
<<<<<<< HEAD
          <a className="nav-link" href="contact">
            Humans Who Help
          </a>
        </li>
=======
          <a className="nav-link" href="/contact">
            Humans Who Help
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/fun">
            Animals have Fun
          </a>
        </li>
>>>>>>> development
      </ul>
    </div>
  </nav>
);

export default NavBar;
