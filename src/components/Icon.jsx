import React, { Component } from "react";

class Icon extends Component {
  render() {
    let { type, name } = this.props;
    return (
      <div className={`${type}Icon`}>
        <i className={`mai-${name}`}></i>
      </div>
    );
  }
}

export default Icon;
