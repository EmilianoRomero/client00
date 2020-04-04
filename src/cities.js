import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Header from "./screen/Header/Header";
import HomeButton from "./screen/Footer/HomeButton";
import SearchCity from "./components/Search/SearchCity";
import { fetchCities, searchCity } from "./store/actions/cityActions";
import "./cities.css";

class Cities extends Component {
  componentDidMount() {
    this.props.fetchCities();
  }

  render() {
    const { filteredCities } = this.props;
    const filteredCity = filteredCities.map((city, itinerary) => {
      return (
        <div className="container-cities" key={city._id}>
          <div className="cities">
            <Link to={"/itineraries/:" + itinerary.city}>
              {/*<h4>{city.name}</h4>*/}
              <img className="cities-img" src={city.imgurl} alt="" />
            </Link>
          </div>
        </div>
      );
    });

    return (
      <div className="cities-list-container">
        <Header />
        <SearchCity
          searchCity={this.props.searchCity}
          value={this.props.value}
        />
        {/* check for data before mapping */}
        {filteredCity && <div className="cities-list">{filteredCity}</div>}
        <div className="fill"></div>
        <HomeButton />
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
