import React, { Component } from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loginUser } from "../store/actions/authActions.js";
//import OtherHeader from "../screen/Header/Header";
import HomeButton from "../screen/Footer/HomeButton";
import classnames from "classnames";
import "normalize.css";
import "../index.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  /* PARA REDIRIGIR AL DASHBOARD -CONTIENE AL LOG OUT-
  1) SI EL USUARIO ESTÁ LOGIN Y VUELVE A CLICAR LOGIN
  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  2) INMEDIATAMENTE DESPUÉS DE LOGIN
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }
*/

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData);
    console.log(userData)
    // since we handle the redirect within our component,
    //we don't need to pass in this.props.history as a parameter
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="login-container">
        {/*<Header />*/}
        <div className="form-container">
          <h3 className="line1-title">Login</h3>

          <form noValidate onSubmit={this.onSubmit}>
            <div className="line2-email">
              <label htmlFor="email">e-mail: </label>
              <input
                className={classnames("", {
                  invalid: errors.email || errors.emailnotfound,
                })}
                type="email"
                id="email"
                placeholder="enter valid e-mail"
                onChange={this.onChange}
                value={this.state.email}
                error={errors.email}
              />
              <span className="red-text">
                {errors.email}
                {errors.emailnotfound}
              </span>
            </div>

            <div className="line3-password">
              <label htmlFor="password">Password: </label>
              <input
                className={classnames("", {
                  invalid: errors.password || errors.passwordincorrect,
                })}
                type="password"
                id="password"
                placeholder="enter valid password"
                onChange={this.onChange}
                value={this.state.password}
                error={errors.password}
              />
              <span className="red-text">
                {errors.password}
                {errors.passwordincorrect}
              </span>
            </div>

            <button className="line4-login" id="login-button" type="submit">
              Login
            </button>
            <button className="line5-login" id="google-login-button" type="submit">
              Login with google
            </button>
          </form>

          <HomeButton />
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired //form. .object.
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { loginUser })(Login);
