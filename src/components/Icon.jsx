import React, { Component } from "react";

class Icon extends Component {
  render() {
    let { type, name } = this.props;
    let style = { fontSize: this.props.size };
    return (
      <div className={`Icon ${type}Icon`} style={style} onClick={this.props.onClick ?? null}>
        <i className={`mai-${name}`}></i>
      </div>
    );
  }
}

export default Icon;
