import React, { Component } from "react";
// Styles
import "../styles/css/Login.css";

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <div class="loginContainer">
          <div class="header">
            <div class="name">
              <span class="intelliflo">intelliflo</span>
              <span class="office">office</span>
            </div>
          </div>
          <div class="content">
            <label for="username" class="username" type="label">
              Email or Username
            </label>
            <input id="username" class="username" type="text"></input>
            <label for="password" class="password" type="label">
              Password
            </label>
            <input id="password" class="password" type="password"></input>
            <div class="reset">Forgotten your password?</div>
            <button
              class="password"
              type="button"
              onClick={() => {
                this.props.history.push("/");
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
