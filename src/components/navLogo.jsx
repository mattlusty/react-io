import React, { Component } from "react";
//
import "../styles/css/navLogo.css";

class NavLogo extends Component {
  render() {
    return (
      <div className="header no-shrink">
        <div className="ham rounded border flex-center">
          <div className="icon marg4 marg-v flex-center no-shrink open shad-hov">
            <i className="mai-menu"></i>
          </div>
        </div>
        <div className="logo marg-l rounded flex-grow flex-center-v">
          <div className="text">Intelligent Office</div>
        </div>
      </div>
    );
  }
}

export default NavLogo;
