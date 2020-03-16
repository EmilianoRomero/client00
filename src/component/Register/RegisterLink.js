import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./RegisterLink.css";

export default class RegisterLink extends Component {
  render() {
    return (
      <div className="register">
        <NavLink
          exact
          to="/"
          className="register-link"
          activeClassName="register-link-active"
        >
          Create Account
        </NavLink>
      </div>
    );
  }
}