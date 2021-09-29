import React, { Component } from "react";
import NavLogo from "./nav-logo";
import NavSearch from "./nav-search";
import NavProfile from "./nav-profile";
import "../styles/css/nav.css";

// import { toggleBool, forcePageReflow } from "../scripts/utils.js";

class Nav extends Component {
  render() {
    let classes = `nav ${this.props.nav.locked ? "locked" : ""} ${this.props.nav.transition ? "transition" : ""} ${
      this.props.nav.fixed ? "fixed" : ""
    }`;
    let style = this.props.nav.translate ? { transform: "translateY(-" + this.props.nav.translate + "px)" } : {};

    return (
      <React.Fragment>
        <div className="nav-wrapper">
          <div className="place-holder"></div>
          <div className={classes} style={style} ref={this.props.nav.ref} onTransitionEnd={this.props.onTransitionEnd}>
            <NavLogo />
            <div className="flex-grow"></div>
            <NavSearch />
            <NavProfile />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Nav;
