import React, { Component } from "react";
//
import "../styles/css/SideMenu.css";
//
import HamLogo from "./HamLogo";
import AccordionWrapper from "./AccordionWrapper";

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
          <div className="menuHeader" onClick={() => console.log("CLIK")}>
            <HamLogo onClick={this.props.toggleSideMenu} open={!this.props.hidden} />
          </div>
          <AccordionWrapper toggleSideMenu={this.props.toggleSideMenu} />
        </div>
      </div>
    );
  }
}

export default SideMenu;
