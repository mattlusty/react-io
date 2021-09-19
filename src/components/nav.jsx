import React, { Component } from 'react'
import NavToggler from "./navToggler";

class Nav extends Component {
  state = {
    locked: false
  }
  callbacks = [];

  constructor (props) {
    super(props)
    this.myRef = React.createRef();
  }

  // NEEDS CHANGING TO REACT CODE

  componentDidMount() {
    let that = this;
    this.content = this.myRef.current;
    this.content.addEventListener("transitionend", function () {
      // let isLocked = this.classList.contains("locked");
      let isLocked = that.state.locked;
      that.setState({fixed: that.toggleBool(that.state.fixed, isLocked)});
      that.setState({transition: false});
      that.setState({translate: false});
    });
  }

  toggleBool (boolvalue, bool) {
    if (bool === undefined) {
      return !boolvalue;
    } if (bool === true) {
      return true;
    } else if (bool === false) {
      return false;
    }
  }

  forcePageReflow = () => {
    let x = this.content.offsetWidth;
  }

  componentDidUpdate() {
    if(this.callbacks.length > 0) {
      let callbacks = [...this.callbacks]
      this.callbacks.shift()();
      this.setState(callbacks)
    }
  }

  // NEEDS CHANGING TO REACT CODE

  onClick = () => {
    // navToggler.classList.toggle("locked");
    // need to feed this to navToggler
    let wasLocked = this.state.locked;
    // let isLocked = this.content.classList.contains("locked");
    let scroll = window.scrollY;
    this.setState({scroll})

    if (scroll > 58) {
      if (!wasLocked) {  
        this.setState({fixed: true})
        this.callbacks.push(() => {
            this.forcePageReflow() 
        })
      }
      this.callbacks.push(() => {
          this.setState({transition: true})
          this.setState({locked: !this.state.locked})
      })
    } else {
      if (scroll == 0) {
        // this.content.classList.toggle("fixed");
        this.setState({fixed: !this.state.fixed});
      } else {
        if (!wasLocked) {
          // this.content.classList.toggle("fixed");
          this.setState({fixed: true});
          // this.content.style.transform = "translateY(-" + scroll + "px)";
          // NEED TO FEED THIS TO UPDATE NAV TRANSFORM STYLE
          this.setState({translate: scroll});
          // NEED TO FORCE REFLOW - but by when? (before remove transform class - falling back to orginal translate 0 / for what? (transition)
          // this.content.clientWidth;
          this.callbacks.push(() => {
             // maybe able to include transition class before reflow (and adddition of translate - bcoz I dont think it would have has any class given translate prior making unwanted transition)
            // this.content.classList.add("transition");
            this.setState({transition: true});
            this.forcePageReflow() 
          })
          this.callbacks.push(() => {
            // starts transition
            // this.content.style.transform = null;
            this.setState({translate: null});
          })
        } else {
          this.callbacks.push(() => {
            // so long as the changing translate after adding transition in other half of IF does not cause unwanted transition - can exract this line outside and before if
            // this.content.classList.add("transition");
            this.setState({transition: true});
             // starts transition
            // this.content.style.transform = "translateY(-" + scroll + "px)";
            this.setState({translate: scroll});
          });
          // this.callbacks.push(() => {
          //   // starts transition
          //   // this.content.style.transform = "translateY(-" + scroll + "px)";
          //   this.setState({translate: scroll});
          // });
        }
      }
      // can extract this up out of if block
      // this.content.classList.toggle("locked");
      this.callbacks.push(() => {
        // can extract this up out of if block
        // this.content.classList.toggle("locked");
        this.setState({locked: !wasLocked})
      });
    }
  }

  render() {
    let classes = `nav ${
      this.state.locked ? "locked" : ""} ${
      this.state.transition ? "transition" : ""} ${
      this.state.fixed ? "fixed" : ""
    }`;


    let style = this.state.translate ? {transform: "translateY(-" + this.state.translate + "px)"} : {}

    console.log("style = ", style);
    
     return (
      <React.Fragment>
        <div className="nav-wrapper">
          <div className="place-holder"></div>
          <div className={classes} style={style} ref={this.myRef}>
            <div className="header flex-center-v no-shrink">
              <div className="ham rounded border flex-center">
                  <div className="icon marg4 marg-v flex-center no-shrink open shad-hov">
                      <i className="mai-menu"></i>
                  </div>
              </div>
              <div className="logo marg-l rounded flex-grow flex-center-v">
                  <div className="text">Intelligent Office</div>
              </div>
            </div>
            <div className="flex-grow">
            </div>
            <div className="pad-v pad-l">
                <div className="search flex-center-v pad-l">
                    <div className="icon flex-center shad-hov">
                        <i className="mai-search"></i>
                        <div className="search-text"></div>
                    </div>
                </div>
            </div>
            <div className="pad">
                <div className="profile flex-center">
                    ML
                </div>
            </div>
          </div>
        </div>
        <NavToggler onClick={this.onClick} />
      </React.Fragment>
    )
  }
}

export default Nav;