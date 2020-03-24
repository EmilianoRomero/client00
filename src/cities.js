import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "./screen/Header/Header";
import HomeButton from "./screen/Footer/HomeButton";
import "./cities.css";
//const cities = 'http://localhost:5000/cities/all'

export default class Cities extends Component {
  /*
  constructor(props) {
    super(props);
    this.timer = null;
    this.state = {
      isFetching: false,
      cities: []};
  }*/
  state = {
    cities: []
  };

  /*
  componentDidMount() {
    this.getCities();
  }

  getCities = () => {
    axios.get("http://localhost:5000/cities/all")
    .then(res=>{
      console.log(res);
      if(res.data){
        this.setState({
        cities: res.data
        }, console.log(res.data))
      }
    })
    .catch(err => console.log(err))
  }
  */
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

  render() {
    const { cities } = this.state;
    const citiesList = cities.map((city, _id) => {
      return (
        <div className="container-cities">
          <div className="cities" key={city._id}>
            <Link to={"/" + city._id}>
              <img className="cities-img" src={city.imgurl} alt="" />
            </Link>
          </div>
        </div>
      );
    });
    return (
      <div className="cities-list-container">
        <Header />
        <form className="search-form">
          <input
            className="search-box"
            type="text"
            placeholder={"search your city!"}
          ></input>
        </form>
        <div className="cities-list">{citiesList}</div>
          <HomeButton />
      </div>
    );
  }
}

/* SRC:
https://gitlab.com/the-gigi/react-data-fetcher/-/blob/master/src/App.js

    componentDidMount() {
      this.fetchCities()
      this.timer = setInterval(() => this.fetchCities(), 5000);
    }
  
    componentWillUnmount() {
      this.timer = null;
    }
  
    fetchCities = () => {
      this.setState({...this.state, isFetching: true})
      axios.get(DB)
        .then(response => {
          console.log(response);
          this.setState({cities: response.data, isFetching: false})
        })
        .catch(e => console.log(e));
    }
  
    fetchCitiesWithFetch = () => {
      this.setState({...this.state, isFetching: true})
      fetch(DB)
        .then(response => response.json())
        .then(result => this.setState({cities: result, isFetching: false}))
        .catch(e => console.log(e));
    }
  }
*/
