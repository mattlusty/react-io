import React, { Component } from "react";
//
import "../styles/css/SideMenu.css";
//
import HamLogo from "./HamLogo";
import Accordion from "./Accordion";

class SideMenu extends Component {
  // state = {
  //   hidden: this.props.hidden,
  // };

  // onClick = () => {
  //   this.setState({ hidden: !this.state.hidden });
  // };

  render() {
    let wrapperClasses = `sideMenuWrapper ${this.props.hidden ? "hidden" : ""}`;
    let menuClasses = `side-menu ${this.props.hidden ? "hidden" : ""}`;

    return (
      <div className={wrapperClasses} ref={this.sideMenuWrapperRef}>
        <div className={menuClasses}>
          <div className="menuHeader">
            <HamLogo onClick={this.props.toggleSideMenu} open={!this.props.hidden} />
          </div>
          <Accordion />
        </div>
      </div>
    );
  }
}

export default SideMenu;
