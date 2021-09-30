import React, { Component } from "react";
//
import "../styles/css/navToggle.css";

class NavToggler extends Component {
  render() {
    return (
      <div className="nav-toggle flex-center locked" onClick={this.props.onClick}>
        <div className="icon flex-center">
          <i className="mai-chevron"></i>
        </div>
      </div>
    );
  }
}

export default NavToggler;
