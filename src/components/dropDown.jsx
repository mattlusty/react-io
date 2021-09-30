import React, { Component } from "react";
import "../styles/css/drop-down.css";

class DropDown extends Component {
  render() {
    // let classes = `drop-down ${this.props.open ? "focus" : ""}`;
    return (
      <div className="drop-down">
        <ul>
          <li>Messages</li>
          <li>Help</li>
          <li className="logout">Logout</li>
        </ul>
      </div>
    );
  }
}

export default DropDown;
