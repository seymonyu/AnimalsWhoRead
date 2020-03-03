import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import Article from "./Article";
<<<<<<< HEAD
import Contact from "./Contact"
=======
import Survey from "./Survey";
>>>>>>> development

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/article/:title" component={Article} />
<<<<<<< HEAD
      <Route path="/contact" component={Contact}/>
=======
      <Route path="/survey" component={Survey} />
>>>>>>> development
    </Switch>
  </BrowserRouter>
);
export default Router;
