import React, { Component } from "react";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
//
import { forcePageReflow } from "../scripts/utils.js";
//
import "../styles/css/Main.css";
//
import Nav from "./Nav";
import NavToggler from "./NavToggle";
import SideMenu from "./SideMenu";
import Page from "./Page";

class Main extends Component {
  state = {
    nav: {
      locked: false,
      translate: null,
      fixed: null,
      transition: null,
      ref: React.createRef(),
      element: null,
    },
    sideMenu: {
      hidden: false,
    },
  };

  componentDidMount() {
    this.setState({ nav: { ...this.state.nav, element: this.state.nav.ref.current } });
  }

  handleNavToggle = () => {
    let wasLocked = this.state.nav.locked;
    let scroll = window.scrollY;

    console.log({
      wasLocked,
      scroll,
    });
    console.log("ref", this.state.nav.ref.current);

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

  handleToggleSideMenu = () => {
    console.log("HANDLE SIDEMENU TOGGLE", this.state.sideMenu.hidden);
    this.setState({ sideMenu: { ...this.state.sideMenu, hidden: !this.state.sideMenu.hidden } });
  };

  // componentDidUpdate() {
  //   console.log("UPDATED");
  // }

  render() {
    return (
      <OverlayScrollbarsComponent>
        <div className="Main">
          <div className="accordionSide" onClick={this.handleToggleSideMenu} />
          <Nav
            nav={this.state.nav}
            onTransitionEnd={this.handleNavTransitionEnd}
            toggleSideMenu={this.handleToggleSideMenu}
          />
          <NavToggler onClick={this.handleNavToggle} />
          <SideMenu toggleSideMenu={this.handleToggleSideMenu} hidden={this.state.sideMenu.hidden} />
          <Page />
        </div>
      </OverlayScrollbarsComponent>
    );
  }
}

export default Main;
