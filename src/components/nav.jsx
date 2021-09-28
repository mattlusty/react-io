import React, { Component } from "react";
import NavLogo from "./nav-logo";
import NavSearch from "./nav-search";
import NavProfile from "./nav-profile";

// import { toggleBool, forcePageReflow } from "../scripts/utils.js";

class Nav extends Component {
  // state = {
  //   locked: false, // move up and pass down thru props
  // };
  // callbacks = []; // move up

  // constructor(props) {
  //   super(props);
  //   this.myRef = React.createRef(); // move up and pass down thru props
  // }

  // componentDidMount() {
  //   // move up (also use React inline Event handler)
  //   let that = this;
  //   this.content = this.myRef.current; // used onClick (needs moving up)
  //   this.content.addEventListener("transitionend", function () {
  //     let isLocked = that.state.locked;
  //     that.setState({ fixed: toggleBool(that.state.fixed, isLocked) });
  //     that.setState({ transition: false });
  //     that.setState({ translate: false });
  //   });
  // }

  // componentDidUpdate() {
  //   // move up
  //   if (this.callbacks.length > 0) {
  //     let callbacks = [...this.callbacks];
  //     this.callbacks.shift()();
  //     this.setState(callbacks);
  //   }
  // }

  // onClick = () => {
  //   // move up
  //   let wasLocked = this.state.locked; // navLocked
  //   let scroll = window.scrollY;
  //   this.setState({ scroll }); // navScroll

  //   if (scroll > 58) {
  //     if (!wasLocked) {
  //       this.setState({ fixed: true }); // navFixed
  //       this.callbacks.push(() => {
  //         forcePageReflow(this.content);
  //       });
  //     }
  //     this.callbacks.push(() => {
  //       this.setState({ transition: true }); // navTransition
  //       this.setState({ locked: !this.state.locked });
  //     });
  //   } else {
  //     if (scroll === 0) {
  //       this.setState({ fixed: !this.state.fixed });
  //     } else {
  //       if (!wasLocked) {
  //         this.setState({ fixed: true });
  //         this.setState({ translate: scroll }); // nav.translate
  //         this.callbacks.push(() => {
  //           this.setState({ transition: true });
  //           forcePageReflow(this.content);
  //         });
  //         this.callbacks.push(() => {
  //           this.setState({ translate: null });
  //         });
  //       } else {
  //         this.callbacks.push(() => {
  //           this.setState({ transition: true });
  //           this.setState({ translate: scroll });
  //         });
  //       }
  //     }
  //     this.callbacks.push(() => {
  //       this.setState({ locked: !wasLocked });
  //     });
  //   }
  // };

  render() {
    let classes = `nav ${this.props.nav.locked ? "locked" : ""} ${this.props.nav.transition ? "transition" : ""} ${
      this.props.nav.fixed ? "fixed" : ""
    }`;
    let style = this.props.nav.translate ? { transform: "translateY(-" + this.props.nav.translate + "px)" } : {};

    return (
      <React.Fragment>
        <div className="nav-wrapper">
          <div className="place-holder"></div>
          <div className={classes} style={style} ref={this.props.nav.ref} onTransitionEnd={this.props.onTransitionEnd}>
            <NavLogo />
            <div className="flex-grow"></div>
            <NavSearch />
            <NavProfile />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Nav;
