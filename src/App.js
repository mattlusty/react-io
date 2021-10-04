import React, { Component } from "react";
//
import "./styles/css/App.css";
//
import "./styles/css/general.css";
import "./styles/css/HamLogo.css";
import "./styles/css/card.css";
import "./styles/css/icons.css";
import "./styles/icons/custom_icons.css";
//
import Nav from "./components/Nav";
import NavToggler from "./components/NavToggle";
import SideMenu from "./components/SideMenu";
import Page from "./components/Page";

import { forcePageReflow } from "./scripts/utils.js";

class App extends Component {
  state = {
    nav: {
      locked: false,
      translate: null,
      fixed: null,
      transition: null,
      ref: React.createRef(),
      element: null,
    },
  };

  componentDidMount() {
    this.setState({ nav: { ...this.state.nav, element: this.state.nav.ref.current } });
  }

  handleNavToggle = () => {
    let wasLocked = this.state.nav.locked;
    let scroll = window.scrollY;

    if (scroll === 0) {
      this.setState((prevState) => ({
        nav: { ...prevState.nav, fixed: !prevState.nav.fixed, locked: !prevState.nav.fixed },
      }));
    } else if (scroll <= 58) {
      if (!wasLocked) {
        this.setState(
          (prevState) => ({ nav: { ...prevState.nav, fixed: true, translate: scroll } }),
          () => {
            forcePageReflow(this.state.nav.element);
            this.setState({ nav: { ...this.state.nav, transition: true, translate: null, locked: true } }); // set transition
          }
        );
      } else {
        this.setState({ nav: { ...this.state.nav, transition: true, translate: scroll, locked: false } });
      }
    } else {
      if (!wasLocked) {
        this.setState(
          (prevState) => ({ nav: { ...prevState.nav, fixed: true } }),
          () => {
            forcePageReflow(this.state.nav.element);
            this.setState({ nav: { ...this.state.nav, transition: true, locked: true } });
          }
        );
      } else {
        console.log("here");
        this.setState((prevState) => ({ nav: { ...this.state.nav, transition: true, locked: false } }));
      }
    }
  };

  handleNavTransitionEnd = () => {
    this.setState({
      nav: {
        ...this.state.nav,
        fixed: this.state.nav.locked ? true : false,
        transition: false,
        translate: null,
      },
    });
  };

  render() {
    return (
      <div className="App">
        <Nav nav={this.state.nav} onTransitionEnd={this.handleNavTransitionEnd} />
        <NavToggler onClick={this.handleNavToggle} />
        <SideMenu />
        <Page />
      </div>
    );
  }
}

export default App;
