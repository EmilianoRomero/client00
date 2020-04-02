import React, { Component } from "react";
import { Link } from "react-router-dom";
import Arrow from "./Images/circled-right-2.png";
import Logo from "./Images/MYtineraryLogo.png";
import Carousel from "./Carousel/Carousel";
import Slider from "./Carousel/Slider";
import Header from "./Header/Header";
import "./Landing.css";

export default class Landing extends Component {
  
  render() {
    
    return (
      <div>
        <div className="main-container-fluid" id="main-container-fluid">
          <Header />
          <div className="logo">
            <img className="logoImg" src={Logo} alt="" />
          </div>
          <div className="moto">
            <h2 className="motoTxt">
              Find your perfect trip, designed by insiders who know and love
              their cities
            </h2>
          </div>
          <div className="start">
            <Link className="arrow" to="/cities">
              <img className="arrowImg" src={Arrow} alt="" />
            </Link>
          </div>
          <div className="title-gallery">
            <h3 className="titleGalleryTxt">Popular MYtineraries</h3>
          </div>
          <div className="carousel-container">
            <Carousel />
          </div>
          <div className="slide-bar">
            <Slider />
          </div>
        </div>
      </div>
    );
  }
}
