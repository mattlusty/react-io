import React, { Component } from 'react'
import NavToggler from "./navToggler";

class Nav extends Component {
  state = {
    locked: false
  }

  constructor (props) {
    super(props)
    this.myRef = React.createRef();
  }

  // NEEDS CHANGING TO REACT CODE

  componentDidMount() {
    // let that = this;
    // this.content = this.myRef.current;
    // this.content.addEventListener("transitionend", function () {
    //   // let isLocked = this.classList.contains("locked");
    //   let isLocked = this.state.locked;
    //   that.classList.toggle("fixed", isLocked);
    //   that.classList.remove("transition");
    //   that.style.transform = null;
    // });
  }

  componentDidUpdate() {

  }

  // NEEDS CHANGING TO REACT CODE

  onClick = () => {
    console.log("click");
    // navToggler.classList.toggle("locked");
    // need to feed this to navToggler
    let wasLocked = this.state.locked;
    // let isLocked = this.content.classList.contains("locked");
    let scroll = window.scrollY;

    if (scroll > 58) {
      if (!wasLocked) {
        // this.content.classList.toggle("fixed");
        this.setState({fixed: true})
        // NEED TO FORCE REFLOW - but by when? (before lock class updates new translateY) / for what? (transition)
        // this.content.clientWidth;
      }
      // this.content.classList.add("transition")
      // CAN EXTRACT UP OUT OF IF 
      this.setState({transition: true})
      // this.content.classList.toggle("locked");
      // starts transition of translate
      this.setState({locked: !wasLocked})
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
          // maybe able to include transition class before reflow (and adddition of translate - bcoz I dont think it would have has any class given translate prior making unwanted transition)
          // this.content.classList.add("transition");
          this.setState({transition: true});
          // starts transition
          // this.content.style.transform = null;
          this.setState({translate: null});
        } else {
          // so long as the changing translate after adding transition in other half of IF does not cause unwanted transition - can exract this line outside and before if
          // this.content.classList.add("transition");
          this.setState({transition: true});
          // starts transition
          // this.content.style.transform = "translateY(-" + scroll + "px)";
          this.setState({translate: scroll});
        }
      }
      // can extract this up out of if block
      // this.content.classList.toggle("locked");
      this.setState({locked: !wasLocked})
    }
  }

  render() {
    let classes = `x`;
     return (
      <React.Fragment>
        <div className="nav" ref={this.myRef}>
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
        <NavToggler onClick={this.onClick} />
      </React.Fragment>
    )
  }
}

export default Nav;