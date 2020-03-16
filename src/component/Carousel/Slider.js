import React, { Component } from "react";
import Images from "./images.json";
//import Slide from './slide';
//import landingData from '../Landing';
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import "./Slider.css"
//import './main.css';

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: [0, 1, 2, 3],
      length: { Images }
    };
  }
  goToPrevSlide() {
    let index = this.state.activeIndex;
    let length = this.state.length;
    if (index < 1) {
      index = length - 1;
    } else {
      index--;
    }
    this.setState({
      activeIndex: index
    });
  }
  goToNextSlide() {
    let index = this.state.activeIndex;
    let length = this.state.length;
    if (index === length - 1) {
      index = 0;
    } else {
      index ++;
    }
    this.setState({
      activeIndex: index
    });
  }
  render() {
    return (
      <div className="slider">
        <LeftArrow goToPrevSlide={() => this.goToPrevSlide()} />
        <RightArrow goToNextSlide={() => this.goToNextSlide()} />
      </div>
    );
  }
}
