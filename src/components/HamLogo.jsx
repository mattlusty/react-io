import React, { Component } from "react";
// Styles
import "../styles/css/HamLogo.css";

class HamLogo extends Component {
  render() {
    let icon = this.props.open ? "mai-times" : "mai-menu";
    let { onToggleSideMenu } = this.props.sideMenu;
    let marginLeft = this.props.sideMenu.fullClose ? "0px" : "10px";

    return (
      <div className={`HamLogoWrapper`}>
        <div className="HamLogo">
          <div className="ham rounded flex-center" onClick={onToggleSideMenu}>
            <div className="buttonIcon open">
              <i className={icon}></i>
            </div>
          </div>
          <div className={`logoWrapper flex-grow flex-collapse`} style={{ marginLeft }}>
            <div className="logo ">
              <div className="text">Lusty Financial</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HamLogo;
