import React, { Component } from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loginUser } from "../store/actions/authActions.js";
import Header from "../screen/Header/Header";
import HomeButton from "../screen/Footer/HomeButton";
import classnames from "classnames"; //We use same classnames module to display the errors.
import "normalize.css";
import "./Login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(user);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/");
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="login-container">
        <Header />
        <div className="form-container">
          <h3 className="line1-title">Login</h3>

          <form noValidate onSubmit={this.handleSubmit}>
            <div className="line2-email">
              <label htmlFor="email">e-mail: </label>
              <input
                className={classnames("", {
                  invalid: errors.email || errors.emailnotfound,
                })}
                type="email"
                id="email"
                placeholder="enter valid e-mail"
                name="email"
                onChange={this.handleInputChange}
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
                name="password"
                onChange={this.handleInputChange}
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

            <button
              className="line5-google-btn"
              id="login-button"
              type="button"
            >
              <a href="http://localhost:5000/oauth/google/redirect">Google</a>
            </button>
            {/*}
            <Link>
              <button
                className="line5-google-btn"
                id="google-login-button"
                to="/auth/google" //"http://localhost:5000/oauth/google/redirect"
                type="submit"
              >
                Google
              </button>
            </Link>
              */}
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
  errors: PropTypes.object.isRequired, //form. .object.
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);

/*
Register with a new User and it will redirect to a login page.
Login with your credentials and the avatar is appears inside the navbar and links are also changed.
Access the login or register route and you will be redirected to the root or home route.
Try to log out and you will be on the login page.
*/
