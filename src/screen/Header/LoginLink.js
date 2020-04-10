import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LoginLink.css";

export default class LoginLink extends Component {
  render() {
    return (
      <div className="login">
        <Link
          exact
          to="/users/login"
          className="login-link"
          activeClassName="login-link-active"
        >
          Log in
        </Link>
      </div>
    );
  }
}
