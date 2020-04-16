import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../store/actions/authActions";
import { withRouter } from "react-router-dom";
import "./LogRegModal.css";

class LogRegContent extends Component {
  onLogout(e) {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
  }

  render() {
    const { isAuthenticated, user } = this.props.auth; //user o userData?! userData no funciona
    const authLinks = (
      <button className="log-out" onClick={this.onLogout.bind(this)}>
        <img
          src={user.avatar}
          alt={user.name}
          title={user.name}
          className="rounded-circle"
          style={{ width: "10px", marginRight: "1px" }}
        />
        Logout
      </button>
    );
    const guestLinks = (
      <ul className="login-signup">
        <li className="list-item">
          <Link
            to="/users/login"
            className="login-link"
            activeclassname="login-link-active"
          >
            Log in
          </Link>
        </li>
        <li className="list-item">
          <Link
            to="/users/register"
            className="register-link"
            activeclassname="register-link-active"
          >
            Create Account
          </Link>
        </li>
      </ul>
    );
    return (
      <div className="selective-content">
        {isAuthenticated ? authLinks : guestLinks}
      </div>
    );
  }
}
LogRegContent.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(
  withRouter(LogRegContent)
);
