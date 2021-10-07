import React, { Component } from "react";
import { withRouter } from "react-router-dom";
//
import "../styles/css/DropDown.css";

class DropDown extends Component {
  render() {
    // let classes = `drop-down ${this.props.open ? "focus" : ""}`;
    return (
      <div className="DropDown">
        <ul>
          <li>Messages</li>
          <li>Help</li>
          <li
            className="logout"
            onClick={() => {
              this.props.history.push("/login");
            }}
          >
            Logout
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(DropDown);
