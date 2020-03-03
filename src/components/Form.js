import React from "react";
import "./Form.scss";

const Form = props => (
  <form
    className="btn--section"
    onSubmit={props.getArticles}
    style={{ marginBottom: "2rem" }}
  >
    <input className="form__input" type="text" name="articleName" />
    <button className="btn">friends'n'foes stalking</button>
  </form>
);

export default Form;
