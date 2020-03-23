import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
//const DB = 'http://localhost:5000/cities/all'

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

  componentDidMount() {
    axios
      .get("http://localhost:5000/cities/all")
      .then(res => {
        console.log(res);
        this.setState({ cities: res.data });
        console.log(res.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const { cities } = this.state;
    const citiesList = cities.map((city, _id) => {
      return (
        <div className="cities-city" key={city._id}>
          <Link to={"/" + city._id}>
            <img className="cites-city img" src={city.imgurl} alt="" />
          </Link>
        </div>
      );
    });
    return (
      <div className="container-cities">
        <div>{citiesList}</div>
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
