import React, { Component } from "react";
import { forcePageReflow } from "../scripts/utils.js";

class Item extends Component {
  state = {
    open: false,
  };

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  toggle = () => {
    if (this.props.item.content.length === 0) {
      return;
    }
    this.setState({ open: !this.state.open });
    this.setState({ transitioning: true });
    this.setState({ phase: 0 });
  };

  componentDidUpdate() {
    if (this.state.phase > 2) {
      return;
    } else if (this.state.phase === 0) {
      this.setInitialHeight();
    } else if (this.state.phase === 1) {
      forcePageReflow(this.content);
    } else if (this.state.phase === 2) {
      this.setFinalHeight();
    } else {
      return;
    }
    this.setState({ phase: this.state.phase + 1 });
  }

  setInitialHeight() {
    if (this.state.initialHeight) {
      if (this.state.open) {
        this.setState({ finalHeight: this.state.initialHeight });
      } else {
        this.setState({ finalHeight: "0px" });
      }
    } else {
      let fullHeight = this.content.offsetHeight + "px";
      if (this.state.open) {
        this.setState({ initialHeight: "0px" });
        this.setState({ finalHeight: fullHeight });
        this.setState({ height: "0px" });
      } else {
        this.setState({ initialHeight: fullHeight });
        this.setState({ finalHeight: "0px" });
        this.setState({ height: fullHeight });
      }
    }
  }

  setFinalHeight() {
    this.setState({ height: this.state.finalHeight });
  }

  componentDidMount() {
    let that = this;
    this.content = this.myRef.current;
    this.content.addEventListener("transitionend", function () {
      that.setState({ transitioning: null });
      that.setState({ height: null });
      that.setState({ initialHeight: null, finalHeight: null });
    });
  }

  render() {
    let itemNameClasses = `item tier-${this.props.level} ${this.state.open ? "open" : ""}`;
    let itemContentClasses = `content rounded ${this.state.transitioning ? "transitioning" : ""} ${
      this.state.open ? "open" : ""
    }`;
    return (
      <div className={itemNameClasses}>
        <div className="item-name border flex-center-v rounded" onClick={this.toggle}>
          <div className="icon flex-center no-shrink shad-hov marg4">
            <i className={`mai-${this.props.item.icon}`} src=""></i>
          </div>
          <span className="item-label no-shrink">{this.props.item.label}</span>
          <div className="flex-grow"></div>
          <div className="icon flex-center no-shrink shad-hov marg4 rot90">
            <i className="mai-chevron"></i>
          </div>
        </div>
        <div className={itemContentClasses} style={{ height: this.state.height }} ref={this.myRef}>
          {this.props.item.content.map((item) => {
            return <Item key={item.label} item={item} level={this.props.level + 1}></Item>;
          })}
        </div>
      </div>
    );
  }
}

export default Item;
