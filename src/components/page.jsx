import React, { Component } from "react";
//
import "../styles/css/Page.css";
import clients from "../data/clients.js";
//
// import Dashboard from "./dashboard";
import Clients from "./Clients";
import Client from "./Client";

class Page extends Component {
  render() {
    return (
      <div className="page">
        {/* <Clients /> */}
        <Client data={clients[0]} />
      </div>
    );
  }
}

export default Page;
