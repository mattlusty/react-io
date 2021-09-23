import React, { Component } from "react";

class SideMenuHeader extends Component {
  render() {
    return (
      <div className="clipper">
        <div className="shad-bott">
          <div className="header">
            <div className="header-inner">
              <div className="ham rounded border flex-center" onClick={this.props.onClick}>
                <div className="icon marg4 marg-v flex-center no-shrink open shad-hov">
                  <i className="mai-menu"></i>
                </div>
              </div>
              <div className="logo marg-l rounded flex-grow flex-center-v flex-collapse">
                <div className="text">Intelligent Office</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SideMenuHeader;
