import React from "react";
import "./stylesheets/TickerItem.scss";

function TickerItem(props) {
  return <div className="ticker__item">{props.text}</div>;
}

export default TickerItem;
