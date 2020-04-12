import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import HeaderLanded from "./screen/Header/HeaderLanded";
import SearchCity from "./components/SearchCity";
import { fetchCities, searchCity } from "./store/actions/cityActions";
import "normalize.css";
import "./cities.css";
import HomeAuth from "./screen/Footer/HomeAuth";

class Cities extends Component {
  componentDidMount() {
    this.props.fetchCities();
  }

  render() {
    const { filteredCities } = this.props;
    const filteredCity = filteredCities.map(city => {
      return (
        <div className="container-cities" key={city._id}>
          <div className="cities">
            <Link to={"/itineraries/" + city.name}>
              <img className="cities-img" src={city.imgurl} alt="" />
              {/*<div className="city-name">
              <h3>{city.name}</h3>
              </div>*/}
            </Link>
          </div>
        </div>
      );
    });

    return (
      <div className="cities-list-container">
        <HeaderLanded />
        <SearchCity
          searchCity={this.props.searchCity}
          value={this.props.value}
        />
        {/* check for data before mapping */}
        {filteredCity && <div className="cities-list">{filteredCity}</div>}
        <div className="fill"></div>
        <HomeAuth />
      </div>
    );
  }
}

Cities.propTypes = {
  fetchCities: PropTypes.func.isRequired,
  filteredCities: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    filteredCities: state.cities.filteredCities
  };
};

export default connect(mapStateToProps, { fetchCities, searchCity })(Cities);
