import React, { Component } from "react";
import "../styles/css/growingInput.css";

class growingInput extends Component {
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
    return (
      <div className="growingInput" data-value={this.state.inputValue}>
        <input id={this.props.name} type="text" size="1" onInput={this.onInput} />
      </div>
    );
  }
}

export default growingInput;
