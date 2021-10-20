import React, { Component } from "react";
//
import "../styles/css/SideMenu.css";
//
import HamLogo from "./HamLogo";
import Accordion from "./Accordion";

class SideMenu extends Component {
  render() {
    let { hidden, fullClose } = this.props.sideMenu;
    return (
      <div className={`SideMenu ${fullClose ? "fullClose" : "partClose"} ${hidden ? "hidden" : ""}`}>
        <div className="sideMenu">
          <div className="menuHeader" onClick={() => console.log("CLIK")}>
            <HamLogo open={!hidden} sideMenu={this.props.sideMenu} />
          </div>
          <Accordion />
        </div>
      </div>
    );
  }
}

export default SideMenu;
