import React, { Component } from "react";
// Styles
import "../styles/css/HamLogo.css";

class HamLogo extends Component {
  render() {
    let icon = this.props.open ? "mai-times" : "mai-menu";
    return (
      <div className="HamLogo">
        <div className="ham rounded flex-center" onClick={this.props.onClick}>
          <div className="buttonIcon open">
            <i className={icon}></i>
          </div>
        </div>
        <div className="logoWrapper flex-grow flex-collapse">
          <div className="logo ">
            <div className="text">Intelligent Office</div>
          </div>
        </div>
      </div>
    );
  }
}

export default HamLogo;
