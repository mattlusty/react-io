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
      fullClose: false,
    },
    scrollerRef: React.createRef(),
  };

  componentDidMount() {
    this.setState({
      nav: {
        ...this.state.nav,
        element: this.state.nav.ref.current,
        onTransitionEnd: this.handleNavTransitionEnd,
        onToggleSideMenu: this.handleToggleSideMenu,
      },
      sideMenu: {
        ...this.state.sideMenu,
        onToggleSideMenu: this.handleToggleSideMenu,
      },
    });
  }

  handleToggleNav = () => {
    let wasLocked = this.state.nav.locked;
    let scroll = this.state.scrollerRef.current._osInstance.scroll().position.y;
    console.log("scroll", this.state.scrollerRef.current._osInstance.scroll());
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
    this.setState({ sideMenu: { ...this.state.sideMenu, hidden: !this.state.sideMenu.hidden } });
  };

  render() {
    return (
      <OverlayScrollbarsComponent
        style={{ height: "100vh" }}
        options={{ scrollbars: { autoHide: "scroll" } }}
        ref={this.state.scrollerRef}
      >
        <div className="Main">
          <div className="accordionSide" onClick={this.handleToggleSideMenu} />
          <Nav nav={this.state.nav} sideMenu={this.state.sideMenu} />
          <NavToggler onClick={this.handleToggleNav} />
          <SideMenu sideMenu={this.state.sideMenu} />
          <Page />
        </div>
      </OverlayScrollbarsComponent>
    );
  }
}

export default Main;
