import React, { Component } from "react";
import NavLogo from "./navLogo";
import NavSearch from "./navSearch";
import NavProfile from "./navProfile";
import "../styles/css/nav.css";

// import { toggleBool, forcePageReflow } from "../scripts/utils.js";

class Nav extends Component {
  render() {
    let { locked, fixed, transition, translate, ref } = this.props.nav;
    let classes = `nav ${locked ? "locked" : ""} ${transition ? "transition" : ""} ${fixed ? "fixed" : ""}`;
    let style = translate ? { transform: "translateY(-" + translate + "px)" } : {};

    return (
      <div className="nav-wrapper">
        <div className="nav-placeHolder"></div>
        <div className={classes} style={style} ref={ref} onTransitionEnd={this.props.onTransitionEnd}>
          <NavLogo />
          <div className="flex-grow"></div>
          <NavSearch />
          <NavProfile />
        </div>
      </div>
    );
  }
}

export default Nav;
