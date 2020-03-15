import React, { Component } from "react";
//import CarouselContentURLS from "./component/CarouselContentSRC"
import "./CarouselContent.css";
import Images from "./images.json";

class CarouselContent extends Component {
  render() {
    return (
      <div className="carousel-content">
        {Images.map((image, index) => {
          return (
            <div className="city-image-div">
              <img className="city-image" key={index} src={image.link} alt="" />
            </div>
          );
        })}
      </div>
    );
  }
}

export default CarouselContent;
