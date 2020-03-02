import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import Article from "./Article";
import Contact from "./Contact"

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/article/:title" component={Article} />
      <Route path="/contact" component={Contact}/>
    </Switch>
  </BrowserRouter>
);
export default Router;
