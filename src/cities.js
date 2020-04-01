import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./screen/Header/Header";
import HomeButton from "./screen/Footer/HomeButton";
import SearchCity from "./components/Search/SearchCity";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchCities, filterCities } from "./store/actions/cityActions";
import "./cities.css";

class Cities extends Component {
  
  componentWillMount() {
    this.props.fetchCities();
    this.props.filterCities();
  }

  searchUpdate(search) {
    this.setState({
      typedCity: search
    });
    console.log(search)
  }

  render() {

    const { cities } = this.props.cities;
    const { typedCity } = this.props.typedCity;

    const filteredCity = cities
      .filter(city => {
        let cityName = city.name.toLowerCase();
        let typedCityName = typedCity.toString().toLowerCase();
        return (
          cityName.indexOf(typedCityName) !== -1 &&
          //if you cannot find (-1) typedCityName, don't return it
          (cityName.includes(typedCityName) || !typedCityName) &&
          cityName.match(typedCityName)
          //(cityName.includes(typedCityName)|| !typedCityName)
        );
        //return cityName.indexOf(typedCityName) !== -1;
      })
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
          filteredCity={this.props.filteredCity}
          filterCities={this.props.filterCities}
          //searchUpdate={this.searchUpdate.bind(this)}
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
  filterCities: PropTypes.func.isRequired,
  typedCity: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    cities: state.cities
  };
};

export default connect(mapStateToProps, { fetchCities, filterCities })(Cities);