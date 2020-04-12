import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./RegisterLink.css";

export default class RegisterLink extends Component {
  render() {
    return (
      <div className="register">
        <Link
          to="/users/register"
          className="register-link"
          activeClassName="register-link-active"
        >
          Create Account
        </Link>
      </div>
    );
  }
}
