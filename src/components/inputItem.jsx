import React, { Component } from "react";
import "../styles/css/inputItem.css";

class InputItem extends Component {
  state = {};

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div className="input-item">
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <input id={this.props.name} value={this.state.value} type="text" onChange={this.handleChange} />
      </div>
    );
  }
}

export default InputItem;
