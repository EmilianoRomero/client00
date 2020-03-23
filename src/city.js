import React, { Component } from "react";
import axios from "axios";

export default class city extends Component {
  state = {
    city: null
  };

  componentDidMount() {
    let id = this.props.match.params.city_id;
    axios.get("http://localhost:5000/cities/all" + id).then(res => {
      this.setState({
        city: res.data
      });
      console.log(res.data);
    });
  }

  render() {
    const city = this.state.city(
      <div className="city-stories">
        <h3 className="story-content">{this.state.city.story}</h3>
      </div>
    );
    return <div className="city-container">{city}</div>;
  }
}
