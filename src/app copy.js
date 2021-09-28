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
      scroll: null,
      translate: null,
      fixed: null,
      transition: null,
      ref: React.createRef(),
      element: null,
    },
  };

  callbacks = [];

  componentDidMount() {
    this.setState({ nav: { ...this.state.nav, element: this.state.nav.ref.current } });
  }

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

  componentDidUpdate() {
    if (this.callbacks.length > 0) {
      this.callbacks.shift()();
    }
  }

  onClick = () => {
    let wasLocked = this.state.nav.locked;
    let scroll = window.scrollY;
    this.setState({ nav: { ...this.state.nav, scroll } });
    if (scroll > 58) {
      if (!wasLocked) {
        this.setState({ nav: { ...this.state.nav, fixed: true } }); // set fixed
        this.callbacks.push(() => {
          forcePageReflow(this.state.nav.element);
          this.setState({});
        });
      }
      this.callbacks.push(() => {
        this.setState({ nav: { ...this.state.nav, transition: true, locked: !wasLocked } }); // set transition / toggle lock
      });
    } else {
      if (scroll === 0) {
        this.setState({ nav: { ...this.state.nav, fixed: !this.state.nav.fixed } }); // set fixed
      } else {
        if (!wasLocked) {
          this.setState({ nav: { ...this.state.nav, fixed: true, translate: scroll } }); // set fixed / set translate = scroll px
          this.callbacks.push(() => {
            this.setState({ nav: { ...this.state.nav, transition: true } }); // set transition
            forcePageReflow(this.state.nav.element);
          });
          this.callbacks.push(() => {
            this.setState({ nav: { ...this.state.nav, translate: null } }); // set translate = null
          });
        } else {
          this.callbacks.push(() => {
            this.setState({ nav: { ...this.state.nav, transition: true, translate: scroll } }); // set transition / set translate = scroll px
          });
        }
      }
      this.callbacks.push(() => {
        this.setState({ nav: { ...this.state.nav, locked: !wasLocked } }); // toggle lock
      });
    }
  };

  render() {
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
