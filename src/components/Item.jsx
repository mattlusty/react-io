import React, { Component } from "react";
import { withRouter } from "react-router-dom";
//
import { forcePageReflow } from "../scripts/utils.js";
//
import ItemName from "./ItemName";

class Item extends Component {
  state = {
    open: false,
    selected: false,
  };

  myRef = React.createRef();

  // constructor(props) {
  //   super(props);
  //   this.myRef = React.createRef();
  // }

  toggle = () => {
    if (this.props.item.content.length === 0) {
      this.setState({ selected: true });
      this.props.history.push(this.props.item.url);
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
      that.setState({ transitioning: null, height: null, initialHeight: null, finalHeight: null });
    });
  }

  render() {
    let { open, height, transitioning, selected } = this.state;
    let { level } = this.props;
    let { icon, label, content, size } = this.props.item;
    let expandable = content.length > 0;
    let classes = `Item level-${level} ${open ? "open" : ""} ${transitioning ? "transitioning" : ""} ${
      selected ? "selected" : ""
    } `;
    return (
      <div className={classes}>
        <ItemName icon={icon} label={label} size={size} expandable={expandable} onClick={this.toggle} />
        <div className="content" style={{ height }} ref={this.myRef}>
          {expandable
            ? content.map((item) => {
                return <Item key={item.label} item={item} level={level + 1} history={this.props.history}></Item>;
              })
            : null}
        </div>
      </div>
    );
  }
}

export default withRouter(Item);
