/*
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { signUp } from '../src/store/actions/userAction.js'
import Header from "./screen/Header/Header";
import HomeButton from "./screen/Footer/HomeButton";
import "normalize.css";
import "./index.css";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [
        "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bhutan",
        "Bolivia",
        "Bosnia and Herzegovina",
        "Botswana",
        "Brazil",
        "Brunei",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cape Verde",
        "Central African Republic",
        "Chad",
        "Chile",
        "China",
        "Colombi",
        "Comoros",
        "Congo (Brazzaville)",
        "Congo",
        "Costa Rica",
        "Cote d'Ivoire",
        "Croatia",
        "Cuba",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "East Timor (Timor Timur)",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Ethiopia",
        "Fiji",
        "Finland",
        "France",
        "Gabon",
        "Gambia, The",
        "Georgia",
        "Germany",
        "Ghana",
        "Greece",
        "Grenada",
        "Guatemala",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Honduras",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Korea, North",
        "Korea, South",
        "Kuwait",
        "Kyrgyzstan",
        "Laos",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macedonia",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Mauritania",
        "Mauritius",
        "Mexico",
        "Micronesia",
        "Moldova",
        "Monaco",
        "Mongolia",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Portugal",
        "Qatar",
        "Romania",
        "Russia",
        "Rwanda",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Vincent",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia and Montenegro",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "Spain",
        "Sri Lanka",
        "Sudan",
        "Suriname",
        "Swaziland",
        "Sweden",
        "Switzerland",
        "Syria",
        "Taiwan",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Togo",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "United States",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Vatican City",
        "Venezuela",
        "Vietnam",
        "Yemen",
        "Zambia",
        "Zimbabwe",
      ],
    };
  }

  handleCheckBox = () => {
    this.setState({ checked: !this.state.checked });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);

    let newUser = {
      signUpUsername: e.target.signUpUsername.value,
      signUpPassword: e.target.signUpPassword.value,
      signUpEmail: e.target.signUpEmail.value,
      signUpFirstName: e.target.signUpFirstName.value,
      signUpLastName: e.target.signUpLastName.value,
      signUpCountry: e.target.signUpCountry.value,
      checked: e.target.checked.value,
    };
    console.log(newUser);
    if (this.props.signUp(newUser)) {
    }
  };

  render() {
    return (
      <div className="sign-up-container">
        <Header />

        <div className="form-container">
          <h3 className="line1-title">Create your MYtinerary Account</h3>

          <div className="line2-addphoto"></div>

          <form onSubmit={(e) => this.handleSubmit(e)}>

            <div className="line3-username">
              <p>Username: </p>
              <input
                type="text"
                placeholder="enter username"
                name="signUpUsername"
              />
            </div>

            <div className="line4-password">
              <p>Password: </p>
              <input
                type="password"
                placeholder="enter password"
                name="signUpPassword"
              />
            </div>

            <div className="line5-email">
              <p>Email: </p>
              <input
                type="email"
                placeholder="enter valid e-mail"
                name="signUpEmail"
              />
            </div>

            <div className="line6-firstname">
              <p>First Name: </p>
              <input
                type="text"
                placeholder="enter first Name"
                name="signUpFirstName"
              />
            </div>

            <div className="line7-lastname">
              <p>Last Name: </p>
              <input
                type="text"
                placeholder="enter last Name"
                name="signUpLastName"
              />
            </div>

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

            <div className="line9-checkbox">
              <input
                className=" inputCheckbox"
                type="checkbox"
                name="checked"
              />

              <h6 className="line10-text">
                I agree to MYtinerary's
                <Link className="terms_conditions" to="/terms_conditions">
                  Terms & Conditions
                </Link>
                .
              </h6>
            </div>

            <button className="line11-submit">Submit</button>
          </form>
          <HomeButton />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
*/