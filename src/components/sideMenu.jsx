import React, { Component } from "react";
//
import "../styles/css/SideMenu.css";
//
import HamLogo from "./HamLogo";
import Accordion from "./Accordion";

class SideMenu extends Component {
  state = {
    hidden: true,
  };

  onClick = () => {
    this.setState({ hidden: !this.state.hidden });
  };

  render() {
    let wrapperClasses = `sideMenuWrapper ${this.state.hidden ? "hidden" : ""}`;
    let menuClasses = `side-menu ${this.state.hidden ? "hidden" : ""}`;

    return (
      <div className={wrapperClasses} ref={this.sideMenuWrapperRef}>
        <div className={menuClasses}>
          <div className="menuHeader">
            <HamLogo onClick={this.onClick} />
          </div>
          <Accordion />
        </div>
      </div>
    );
  }
}

export default SideMenu;
