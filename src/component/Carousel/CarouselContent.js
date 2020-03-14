import React, { Component } from "react";
//import CarouselContentURLS from "./component/CarouselContentSRC"
import "./CarouselContent.css";
import Images from "./images.json";

class CarouselContent extends Component {
  render() {
    return (
      <div>
        {Images.map((image, index) => {
          return (
            <div className="city-image">
              <img key={index} src={image.link} alt="" />
            </div>
          );
        })}
      </div>
    );
  }
}

export default CarouselContent;
