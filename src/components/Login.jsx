import React, { Component } from "react";
// Styles
import "../styles/css/Login.css";

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <div className="loginContainer">
          <div className="header">
            <div className="name">
              <span className="intelliflo">intelliflo</span>
              <span className="office">office</span>
            </div>
          </div>
          <form className="content">
            <label htmlFor="username" className="username" type="label">
              Email or Username
            </label>
            <input id="username" className="username" type="text"></input>
            <label htmlFor="password" className="password" type="label">
              Password
            </label>
            <input id="password" className="password" type="password"></input>
            <div className="reset">Forgotten your password?</div>
            <button
              className="password"
              type="button"
              onClick={() => {
                this.props.history.push("/leads");
              }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
