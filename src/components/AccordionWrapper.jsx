import React, { Component } from "react";
//
import "../styles/css/AccordionWrapper.css";
//
import Accordion from "./Accordion";

class AccordionWrapper extends Component {
  render() {
    return (
      <div className="AccordionWrapper">
        <Accordion />
      </div>
    );
  }
}

export default AccordionWrapper;
