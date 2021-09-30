import React, { Component } from "react";
import "../styles/css/multiSelect.css";

class MultiSelect extends Component {
  state = {
    inputValue: "",
  };

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  onInput = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    return <div className="multiSelect" data-value={this.state.inputValue}></div>;
  }
}

export default MultiSelect;
