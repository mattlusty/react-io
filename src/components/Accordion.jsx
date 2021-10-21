import React, { Component } from "react";
// data
import areas from "../data/areas.js";
// hello
import "../styles/css/Accordion.css";
//
import Item from "./Item";

class Accordion extends Component {
  render() {
    return (
      <div className="Accordion">
        {areas.map((item) => {
          return <Item key={item.label} item={item} level={1} />;
        })}
      </div>
    );
  }
}

export default Accordion;
