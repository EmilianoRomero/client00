import React, { Component } from "react";
import CarouselContent from "./CarouselContent";
import "./Carousel.css";
//import Images from "./Images";

class Carousel extends Component {
  render() {
    return (
      <div className="carousel">
        <CarouselContent />
      </div>
    );
  }
}

export default Carousel;
