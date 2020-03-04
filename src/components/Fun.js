import React from "react";
import { Link } from "react-router-dom";
import "./Fun.scss";
import dog from "./dog.gif";
import dog2 from "./dog2.gif";
import dog3 from "./dog3.gif";
import elef from "./elef.gif";
import pig from "./pig.gif";
import pauk from "./pauk.gif";
import animal2 from "./animal2.gif";
import animal3 from "./animal3.gif";
import animal4 from "./animal4.gif";
import cat from "./cat.gif";
import giphy from "./giphy.gif";
import octop from "./octop.gif";

const Fun = props => (
  <section id="fun">
    <header className="header">
      <h1>Animals have Fun !</h1>
    </header>
    <div className="gif">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {" "}
            <img src={giphy} alt="gif" height="350" width="350" />{" "}
          </div>
          <div className="col-md-4">
            <img src={pauk} alt="animal" height="350" width="350" />
          </div>
          <div className="col-md-4">
            {" "}
            <img src={animal2} alt="gif" height="350" width="350" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img src={animal3} alt="gif" height="350" width="350" />
          </div>
          <div className="col-md-4">
            <img src={animal4} alt="gif" height="350" width="350" />
          </div>
          <div className="col-md-4">
            {" "}
            <img src={cat} alt="gif" height="350" width="350" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img src={dog} alt="gif" height="350" width="350" />
          </div>
          <div className="col-md-4">
            {" "}
            <img src={octop} alt="gif" height="350" width="350" />
          </div>
          <div className="col-md-4">
            <img src={dog2} alt="gif" height="350" width="350" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img src={dog3} alt="gif" height="350" width="350" />
          </div>
          <div className="col-md-4">
            <img src={elef} alt="gif" height="350" width="350" />
          </div>
          <div className="col-sm-4">
            {" "}
            <img src={pig} alt="gif" height="350" width="350" />
          </div>
        </div>
      </div>
    </div>
    <button className="active-article__button">
      <Link to="/">Go Home</Link>
    </button>
  </section>
);

export default Fun;
