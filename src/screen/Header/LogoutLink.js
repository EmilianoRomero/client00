import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../store/actions/authActions";
import "./RegisterLink.css";

class LogOut extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
    console.log("you logged out");
  };
  render() {
    return (
      <div className="logout">
        <Link
          to="/"
          className="register-link"
          activeClassName="register-link-active"
        >
          Log Out
        </Link>
      </div>
    );
  }
}
LogOut.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(LogOut);
