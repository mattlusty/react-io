import React, { Component } from "react";
// Styles
import "../styles/css/ItemName.css";
// Components
import Icon from "./Icon";

class ItemName extends Component {
  render() {
    return (
      <div className="ItemName" onClick={this.props.onClick}>
        <Icon type="button" name={this.props.icon} size={this.props.size} />
        <span className="itemLabel">{this.props.label}</span>
        <div className="spaceFiller"></div>
        {this.props.expandable ? <Icon type="expand" name="chevron" /> : null}
      </div>
    );
  }
}

export default ItemName;
