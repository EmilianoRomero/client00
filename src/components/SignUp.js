import React, { Component } from "react";
import { withRouter } from "react-router-dom"; //Link,
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../store/actions/authActions.js";
import Header from "../screen/Header/Header";
import HomeButton from "../screen/Footer/HomeButton";
import classnames from "classnames"; //Necessary to render the conditional errors
import "normalize.css";
import "../index.css";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      password2: "",
      firstname: "",
      lastname: "",
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
    const newUser = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
    };
    this.props.registerUser(newUser, this.props.history);
    console.log(newUser);
  }

  /*
Check the logged in user status. If any point in time, the user is logged in 
then he can not able to see the login or register route. 
For that, a componentDidMount method has been added. 
If the current user is logged in user and trying to register the new user, 
then it prevents it and redirects to a home route.
*/

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

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="signup-container">
        <Header />

        <div className="form-container">
          <h3 className="line1-title">Create your MYtinerary Account</h3>

          <form noValidate onSubmit={this.handleSubmit}>
            <div className="line2-username">
              <label htmlFor="username">User name: </label>
              <input
                className={classnames("", {
                  invalid: errors.username,
                })}
                type="text"
                id="username"
                placeholder="enter username"
                onChange={this.handleInputChange}
                name="username"
                value={this.state.username}
                error={errors.username}
              />
              <span className="red-text">{errors.username}</span>
            </div>

            <div className="line3-email">
              <label htmlFor="email">e-mail: </label>
              <input
                className={classnames("", {
                  invalid: errors.email,
                })}
                type="email"
                id="email"
                placeholder="enter valid e-mail"
                onChange={this.handleInputChange}
                name="email"
                value={this.state.email}
                error={errors.email}
              />
              <span className="red-text">{errors.email}</span>
            </div>

            <div className="line4-password">
              <label htmlFor="password">Password: </label>
              <input
                className={classnames("", {
                  invalid: errors.password,
                })}
                type="password"
                id="password"
                placeholder="enter valid password"
                onChange={this.handleInputChange}
                name="password"
                value={this.state.password}
                error={errors.password}
              />
              <span className="red-text">{errors.password}</span>
            </div>

            <div className="line5-password2">
              <label htmlFor="password">Confirm Password: </label>
              <input
                className={classnames("", {
                  invalid: errors.password2,
                })}
                type="password"
                id="password2"
                placeholder="confirm password"
                onChange={this.handleInputChange}
                name="passwprd2"
                value={this.state.password2}
                error={errors.password2}
              />
              <span className="red-text">{errors.password2}</span>
            </div>

            <div className="line6-firstname">
              <label htmlFor="firstname">First Name: </label>
              <input
                type="text"
                id="firstname"
                placeholder="enter your first name"
                onChange={this.handleInputChange}
                name="firstname"
                value={this.state.firstname}
                //error={errors.firstname}
              />
            </div>

            <div className="line7-lastname">
              <label htmlFor="lastname">Last Name: </label>
              <input
                type="text"
                id="lastname"
                placeholder="enter your last name"
                onChange={this.handleInputChange}
                name="lastname"
                value={this.state.lastname}
                //error={errors.lastname}
              />
            </div>

            <div className="line8-avatarpicture"></div>

            {/*
            <div className="line8-country">
              <p>Country: </p>
              <select name="signUpCountry">
                <option>Select One Country</option>
                {this.state.countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            */}

            {/*
            <div className="line9-checkbox">
              <input
                className=" inputCheckbox"
                type="checkbox"
                name="checked"
              />
            */}

            {/*
              <h6 className="line9-text">
                I agree to MYtinerary's
                <Link className="terms_conditions" to="/terms_conditions">
                  Terms & Conditions
                </Link>
                .
              </h6>
            </div>
            */}

            <button className="line9-submit" id="submit-button" type="submit">
              Sign up
            </button>
          </form>

          <HomeButton />
        </div>
      </div>
    );
  }
}

SignUp.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired, //form. .object.
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(SignUp));
