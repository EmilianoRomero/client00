import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./screen/Header/Header";
import HomeButton from "./screen/Footer/HomeButton";
import SearchCity from "./components/Search/SearchCity";
import PropTypes from "prop-types";
import { fetchCities, searchCity } from "./store/actions/cityActions";
import "./cities.css";

class Cities extends Component {
  
  componentDidMount() {
    this.props.fetchCities();
  }

  render() {

    const { cities } = this.props;

    const filteredCity = cities
      .map(city => {
        return (
          <div className="container-cities" key={city._id}>
            <div className="cities">
              <Link to={"/:" + city._id}>
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
          //filteredCity={this.props.filteredCity}
          //filterCities={this.props.filterCities}
        />
        <div className="cities-list">{filteredCity}</div>
        <div className="fill"></div>
        <HomeButton />
      </div>
    );
  }
}

Cities.propTypes = {
  fetchCities: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
  return {
    cities: state.cities.city
  };
};

export default connect(mapStateToProps, { fetchCities, searchCity })(Cities);