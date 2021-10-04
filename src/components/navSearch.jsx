import React, { Component } from "react";
//
import "../styles/css/NavSearch.css";

class NavSearch extends Component {
  render() {
    return (
      <div className="search-wrapper">
        <div className="search flex-center-v pad-l">
          <div className="icon flex-center shad-hov">
            <i className="mai-search"></i>
            <div className="search-text"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavSearch;
