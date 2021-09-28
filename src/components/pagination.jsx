import React, { Component } from "react";
import "../styles/css/pagination.css";
import GrowingInput from "./growingInput";

class Pagination extends Component {
  getPageSelection = () => {
    let { pagesCount: n, currentPage: c } = this.props;
    if (n <= 9) {
      return this.props.pages;
    } else {
      if (c <= 5) {
        return [1, 2, 3, 4, 5, 6, 7, ". . .", n];
      } else if (c <= n - 5) {
        return [1, ". . .", c - 2, c - 1, c, c + 1, c + 2, ". . .", n];
      } else {
        return [1, ". . .", n - 6, n - 5, n - 4, n - 3, n - 2, n - 1, n];
      }
    }
  };

  render() {
    return (
      <div className="pagination">
        <div className="pageSize">
          <div>
            <GrowingInput name="pageSize" />
            <label htmlFor="pageSize">Results per page</label>
          </div>
        </div>
        <div className="previous" onClick={() => this.props.onPageChange(this.props.currentPage - 1)}>
          <div>&lt;</div>
        </div>
        <div className="pages">
          {this.getPageSelection().map((page) => {
            return (
              <div
                key={Math.random()}
                className={`${this.props.currentPage === page ? "active" : ""}`}
                onClick={() => this.props.onPageChange(page)}
              >
                {page}
              </div>
            );
          })}
        </div>
        <div className="next" onClick={() => this.props.onPageChange(this.props.currentPage + 1)}>
          <div>&gt;</div>
        </div>
      </div>
    );
  }
}

export default Pagination;
