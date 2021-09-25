import React, { Component } from "react";
import "../styles/css/pagination.css";
import GrowingInput from "./growingInput";

class Pagination extends Component {
  state = {
    inputValue: "",
  };

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  onInput = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    let n = this.props.pagesCount;
    let pages;
    if (n > 9) {
      if (this.props.currentPage > n - 5) {
        pages = [1, ". . .", n - 6, n - 5, n - 4, n - 3, n - 2, n - 1, n];
      } else if (this.props.currentPage <= n - 4) {
        if (this.props.currentPage <= 5) {
          pages = [1, 2, 3, 4, 5, 6, 7, ". . .", n];
        } else {
          pages = [
            1,
            ". . .",
            this.props.currentPage - 2,
            this.props.currentPage - 1,
            this.props.currentPage,
            this.props.currentPage + 1,
            this.props.currentPage + 2,
            ". . .",
            n,
          ];
        }
      }
    }
    pages = this.props.pages;
    console.log(pages);
    return (
      <div className="paginator">
        <div className="pageSize">
          <div>
            <GrowingInput />
            <label htmlFor="pageSize">Results per page</label>
          </div>
        </div>
        <div className="previous" onClick={() => this.props.onPageChange(this.props.currentPage - 1)}>
          <div>&lt;</div>
        </div>
        <div className="pages">
          {pages.map((page) => {
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
          {/* <div>1</div>
          <div>. . .</div>
          <div>14</div>
          <div className="active">15</div>
          <div>16</div>
          <div>. . .</div>
          <div>31</div> */}

          {/* <div className="active">1</div>
          <div>2</div>
          <div>3</div>
          <div>. . .</div>
          <div>31</div> */}

          {/* <div>1</div>
          <div>2</div>
          <div className="active">3</div>
          <div>4</div>
          <div>. . .</div>
          <div>31</div> */}
        </div>
        <div className="next" onClick={() => this.props.onPageChange(this.props.currentPage + 1)}>
          <div>&gt;</div>
        </div>
      </div>
    );
  }
}

export default Pagination;
