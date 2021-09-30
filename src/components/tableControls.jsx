import React, { Component } from "react";
import "../styles/css/tableControls.css";
import Pagination from "./pagination";

class TableControls extends Component {
  render() {
    return (
      <div className="table-controls">
        <div className="action delete flex-center-v">Delete</div>
        <div className="action relocate flex-center-v">Reallocate</div>
        <div className="space flex-center-v"></div>
        <Pagination pagination={this.props.pagination} onPageChange={this.props.onPageChange} />
      </div>
    );
  }
}

export default TableControls;
