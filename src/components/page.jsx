import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
//
import "../styles/css/Page.css";
import clients from "../data/clients.js";
//
// import Dashboard from "./dashboard";
import Clients from "./Clients";
import Client from "./Client";
import Test from "./Test";

class Page extends Component {
  render() {
    return (
      <div className="page">
        <Switch>
          <Route path="/client" component={Test} />
          <Route path="/clients" component={Clients} />
          <Route path="/client" component={Client} />
          {/* <Clients /> */}
          {/* <Client data={clients[0]} /> */}
        </Switch>
      </div>
    );
  }
}

export default Page;
