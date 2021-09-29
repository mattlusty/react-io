import React, { Component } from "react";
import DropDown from "./drop-down";
import "../styles/css/nav-profile.css";

class NavProfile extends Component {
  state = {
    open: false,
  };

  render() {
    let classes = `profile-wrapper ${this.state.open ? "open" : ""}`;
    return (
      <div
        className={classes}
        tabIndex="1"
        onFocus={() => {
          console.log("focus");
        }}
        onBlur={(e) => {
          console.log("blur", e);
          this.setState({ open: false });
        }}
      >
        <div
          className="profile flex-center"
          onClick={() => {
            console.log("click");
            this.setState({ open: !this.state.open });
          }}
        >
          Mlusty
        </div>
        <DropDown />
      </div>
    );
  }
}

export default NavProfile;
