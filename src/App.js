import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
//
import "./styles/css/general.css";
import "./styles/css/HamLogo.css";
import "./styles/css/card.css";
import "./styles/css/icons.css";
import "./styles/icons/custom_icons.css";
// Removed
import "./styles/css/App.css";
// Removed
import Nav from "./components/Nav";
import NavToggler from "./components/NavToggle";
import SideMenu from "./components/SideMenu";
import Page from "./components/Page";
// Removed
import { forcePageReflow } from "./scripts/utils.js";
// Components
import Login from "./components/Login";
import Main from "./components/Main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Main} />
        </Switch>
      </div>
    );
  }
}

export default App;
