import React, { Component } from "react";
//
import "../styles/css/Nav.css";
//
import HamLogo from "./HamLogo";
import NavSearch from "./NavSearch";
import NavProfile from "./NavProfile";

// import { toggleBool, forcePageReflow } from "../scripts/utils.js";

class Nav extends Component {
  render() {
    let { locked, fixed, transition, translate, ref, onTransitionEnd, onToggleSideMenu } = this.props.nav;
    let classes = `nav ${locked ? "locked" : ""} ${transition ? "transition" : ""} ${fixed ? "fixed" : ""}`;
    let style = translate ? { transform: "translateY(-" + translate + "px)" } : {};
    console.log("Toglle?", this.props.toggleSideMenu);
    return (
      <div className="navWrapper">
        <div className="navPlaceHolder"></div>
        <div className={classes} style={style} ref={ref} onTransitionEnd={onTransitionEnd}>
          <HamLogo onClick={onToggleSideMenu} sideMenu={this.props.sideMenu} />
          <div className="flex-grow"></div>
          <NavSearch />
          <NavProfile />
          {/* <div className="extends" /> */}
        </div>
      </div>
    );
  }
}

export default Nav;
