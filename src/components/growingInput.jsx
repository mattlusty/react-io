import React, { Component } from "react";
import "../styles/css/GrowingInput.css";

class GrowingInput extends Component {
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
      <div className="GrowingInput" data-value={this.state.inputValue}>
        <input id={this.props.name} type="text" size="18" onInput={this.onInput} />
      </div>
    );
  }
}

export default GrowingInput;
