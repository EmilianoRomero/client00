import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "./screen/Header/Header";
import HomeButton from "./screen/Footer/HomeButton";
import SearchCity from "./components/Search/SearchCity";
import "./cities.css";

export default class Cities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      typedCity: [] //All values stored in this.state.cities
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/cities/all")
      .then(res => {
        console.log(res);
        this.setState({ cities: res.data });
        console.log(this.setState);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  //Abajo paso el valor ingresado en el child y se lo mando al nuevo estado
  //representado por filteredCity
  //Ahora esto tiene que ser llamado por el child, y se hace poniéndolo
  //como prop searchUpdate={this.searchUpdate.bind(this)}
  searchUpdate(search) {
    this.setState({
      typedCity: search
    });
  }

  render() {
    //console.log("filteredCity state del parent", this.state.filteredCity)

    const { cities, typedCity } = this.state;
    
    const filteredCity = cities
      .filter(city => {
        let cityName = city.name.toLowerCase();
        let typedCityName = typedCity.toString().toLowerCase();
        typedCityName.includes(cityName)
        return cityName.indexOf(typedCityName) !== -1;
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
          filteredCity={this.state.filteredCity}
          searchUpdate={this.searchUpdate.bind(this)}
        />
        {/*Con esto de arriba llamamos al método que pertenece al child*/}
        {/*le adjudico el valor del estado resultado de filtrar una búsqueda dada*/}
        <div className="cities-list">{filteredCity}</div>
        <div className="fill"></div>
        <HomeButton />
      </div>
    );
  }
}


//(city.name.toLowerCase().includes(this.state.filteredCities.toString().toLowerCase())