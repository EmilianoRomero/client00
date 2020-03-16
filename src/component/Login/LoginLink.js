import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./LoginLink.css";

export default class LoginLink extends Component {
  render() {
    return (
      <div className="login">
        <NavLink
          exact
          to="/"
          className="login-link"
          activeClassName="login-link-active"
        >
          Log in
        </NavLink>
      </div>
    );
  }
}
