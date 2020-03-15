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
          className="loginLink"
          activeClassName="loginLink-active"
        >
          Log in
        </NavLink>
      </div>
    );
  }
}
