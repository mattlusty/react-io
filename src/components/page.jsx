import React, { Component } from "react";
//
import "../styles/css/Page.css";
//
// import Dashboard from "./dashboard";
import Clients from "./Clients";

class Page extends Component {
  render() {
    return (
      <div className="page">
        <Clients />
      </div>
    );
  }
}

export default Page;
