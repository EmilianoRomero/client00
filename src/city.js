import React, { Component } from "react";
import axios from "axios";


export default class city extends Component {
  state = {
    city: []
  };
  componentDidMount() {
    let id = this.props.match.params.city_id;
    axios.get("http://localhost:5000/cities/all/" + id).then(res => {
      this.setState({
        city: res.data
      });
      console.log(res.data);
    });
  }
  render() {
    const city = this.state.city ? (
      <div className="city">
        <h4 className="city-name">{this.state.city.name}</h4>
        <p>{this.state.city.country}</p>
        <img className="city-img" src={this.state.city.imgurl} alt="" />
      </div>
    ) : (
      <div className="center">Loading city...</div>
    );
    return (
      <div className="container">
        {city}
      </div>
    )
  }
 }
 
