import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Router from "./components/Router";
import * as serviceWorker from "./serviceWorker";
<<<<<<< HEAD
import "font-awesome/css/font-awesome.min.css";
=======
import "bootstrap/dist/css/bootstrap.min.css";
>>>>>>> 56acbb6e5ed25ab704ac059309bb0175b7edf595

ReactDOM.render(<Router />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
