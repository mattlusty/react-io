import React, { Component } from "react";
//
import "../styles/css/TableControls.css";
//
import Pagination from "./Pagination";

class TableControls extends Component {
  render() {
    return (
      <div className="TableControls">
        <div className="action delete flex-center-v">Delete</div>
        <div className="action relocate flex-center-v">Reallocate</div>
        <div className="space flex-center-v"></div>
        <Pagination pagination={this.props.pagination} onPageChange={this.props.onPageChange} />
      </div>
    );
  }
}

export default TableControls;
