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
          className="registerLink"
          activeClassName="registerLink-active"
        >
          Create Account
        </NavLink>
      </div>
    );
  }
}