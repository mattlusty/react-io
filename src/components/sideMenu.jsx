import React, { Component } from "react";
//
import "../styles/css/SideMenu.css";
//
import SideMenuHeader from "./SideMenuHeader";
import AccordionMenu from "./AccordionMenu";

class SideMenu extends Component {
  state = {
    hidden: true,
  };

  constructor(props) {
    super(props);
    this.sideMenuWrapperRef = React.createRef();
    this.sideMenuRef = React.createRef();
  }

  componentDidMount() {
    this.sideMenuWrapper = this.sideMenuWrapperRef.current;
    this.sideMenu = this.sideMenuRef.current;
  }

  onClick = () => {
    this.setState({ hidden: !this.state.hidden });
  };

  render() {
    let wrapperClasses = `side-menu-wrapper ${this.state.hidden ? "hidden" : ""}`;
    let menuClasses = `side-menu ${this.state.hidden ? "hidden" : ""}`;

    return (
      <div className={wrapperClasses} ref={this.sideMenuWrapperRef}>
        <div className={menuClasses}>
          {" "}
          {/* class=hidden */}
          <SideMenuHeader onClick={this.onClick} ref={this.sideMenuRef} />
          <AccordionMenu />
        </div>
      </div>
    );
  }
}

export default SideMenu;
