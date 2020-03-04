import React from "react";
import "./Form.scss";

const Form = props => (
  <form
    className="btn--section"
    onSubmit={props.getArticles}
    style={{ marginBottom: "2rem" }}
  >
    <span>Enter Animal here!</span>
    <div class="arrow bounce"></div>
    <input className="form__input" type="text" name="articleName" />
    <button className="btn">Check it out!</button>
  </form>
);

export default Form;
