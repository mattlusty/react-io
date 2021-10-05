import React, { Component } from "react";

class HamLogo extends Component {
  render() {
    return (
      <div className="HamLogo">
        <div className="ham rounded flex-center" onClick={this.props.onClick}>
          <div className="buttonIcon open">
            <i className="mai-menu"></i>
          </div>
        </div>
        <div className="logoWrapper rounded marg-l flex-grow flex-collapse">
          <div className="logo rounded flex-center-v ">
            <div className="text">Intelligent Office</div>
          </div>
        </div>
      </div>
    );
  }
}

export default HamLogo;
