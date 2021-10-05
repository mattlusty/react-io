import React, { Component } from "react";
import { Route } from "react-router-dom";
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
        <Route path="/clients" component={Clients} />
        <Route path="/client" component={Client} />
        {/* <Clients /> */}
        {/* <Client data={clients[0]} /> */}
      </div>
    );
  }
}

export default Page;
