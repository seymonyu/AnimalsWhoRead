import React from "react";
import "./Header.scss";
import "./Global.scss";
import Paw from "./img/Paw.svg";
import Panda from "./img/Panda.svg";

function Header({ handleChange, handleUserInput }) {
  return (
    <main>
      <section>
        <div className="bg--main">
          <div></div>
          <div className="frame--main">
            <img className="panda" src={Panda} alt="panda" />
          </div>
          <div className="circle--corner">
            <img src={Paw} alt="paw" />
          </div>
          <div className="circle--corner">
            <img src={Paw} alt="paw" />
          </div>
          <div className="circle--corner">
            <img src={Paw} alt="paw" />
          </div>
          <div className="circle--corner">
            <img src={Paw} alt="paw" />
          </div>
        </div>
      </section>
    </main>
  );
}
// <img src={logo} className="App-logo" alt="logo" />

export default Header;
