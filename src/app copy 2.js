import React, { Component } from "react";
import Nav from "./components/nav";
import NavToggler from "./components/navToggler";
import SideMenu from "./components/sideMenu";
import Page from "./components/page";
import "./styles/css/general.css";
import "./styles/css/index.css";
import "./styles/icons/custom_icons.css";
import { forcePageReflow } from "./scripts/utils.js";

class App extends Component {
  state = {
    boo: "hoo",
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

  onClick = () => {
    let wasLocked = this.state.nav.locked;
    let scroll = window.scrollY;
    if (scroll > 58) {
      if (!wasLocked) {
        this.setState(
          (prevState) => ({ nav: { ...prevState.nav, fixed: true } }),
          () => {
            forcePageReflow(this.state.nav.element);
            this.setState({ nav: { ...this.state.nav, transition: true, locked: true } });
          }
        );
      } else {
        this.setState((prevState) => ({ nav: { ...this.state.nav, transition: true, locked: false } }));
      }
    } else {
      if (scroll === 0) {
        this.setState((prevState) => ({ nav: { ...prevState.nav, fixed: !prevState.nav.fixed } }));
      } else {
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
      }
    }
  };

  handleTransitionEnd = () => {
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
    console.log("RENDER");
    return (
      <div className="App">
        <div className="main">
          <Nav nav={this.state.nav} onTransitionEnd={this.handleTransitionEnd} />
          <NavToggler onClick={this.onClick} />
          <SideMenu />
          <Page />
        </div>
      </div>
    );
  }
}

export default App;
