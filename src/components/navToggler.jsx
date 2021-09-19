import React, { Component } from 'react'

class NavToggler extends Component {

  render() {
    return (
      <div className="nav-toggle nav-toggler flex-center locked" onClick={this.props.onClick}>
          <div className="icon flex-center">
              <i className="mai-chevron"></i>
          </div>
      </div>  
    )
  }
}

export default NavToggler