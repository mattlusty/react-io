import React, { Component } from "react";
// data
import areas from "../data/areas.js";
// hello
import "../styles/css/Accordion.css";
//
import Item from "./Item";

class AccordionMenu extends Component {
  myRef = React.createRef();

  handleScroll = (e) => {
    var scrollTop = this.myRef.current.scrollTop;
    var scrollHeight = this.myRef.current.scrollHeight;
    var height = this.myRef.current.offsetHeight;
    var delta = e.wheelDelta;
    var up = delta > 0;

    if (!up && -delta > scrollHeight - height - scrollTop) {
      // Scrolling down, but this will take us past the bottom.
      this.myRef.current.scrollTop = scrollHeight;
      return this.prevent(e);
    } else if (up && delta > scrollTop) {
      // Scrolling up, but this will take us past the top.
      this.myRef.current.scrollTop = 0;
      return this.prevent(e);
    }
  };

  prevent = (e) => {
    e.stopPropagation();
    e.preventDefault();
    e.returnValue = false;
    return false;
  };

  componentDidMount() {
    this.myRef.current.addEventListener("wheel", this.handleScroll);
  }

  render() {
    return (
      <div className="Accordion" ref={this.myRef}>
        {areas.map((item) => {
          return <Item key={item.label} item={item} level={1} />;
        })}
      </div>
    );
  }
}

export default AccordionMenu;
