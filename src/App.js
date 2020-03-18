import React, { Component } from "react";
import Landing from "./screen/Landing";
import Cities from "./cities";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Menu from "./component/Header/Menu";
import Logo from "./component/00Images/MYtineraryLogo.png";
import Arrow from "./component/00Images/circled-right-2.png";
import SideDrawer from "./component/Header/SideDrawer";
import Backdrop from "./component/Header/Backdrop";
import LoginRegModal from "./component/Header/LoginRegModal";
import Carousel from "./component/Carousel/Carousel";
import Slider from "./component/Carousel/Slider";

export default class App extends Component {

  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    //fetch Function?

    return (
      <BrowserRouter>
        <div className="App">
          <div className="container-fluid" id="main-container-fluid">
            <Switch>
              <Route exact path="./screen/Landing" component={Landing} />
              <Route exact path="./cities" component={Cities} />
            </Switch>
            <div className="header">
              <LoginRegModal />
              <Menu drawerClickHandler={this.drawerToggleClickHandler} />
              <SideDrawer show={this.state.sideDrawerOpen} />
              {backdrop}
            </div>
            <div className="logo">
              <img className="logoImg" src={Logo} alt="" />
            </div>
            <div className="moto">
              <h2 className="motoTxt">
                Find your perfect trip, designed by insiders who know and love
                their cities
              </h2>
            </div>
            <div className="arrow">
              <img className="arrowImg" src={Arrow} alt="" />
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
      </BrowserRouter>
    );
  }
}

/* ESTO VA JUSTO DESPUÉS DE
<div className="img-gallery">
  <div className="container-fluid" id="img-gallery-wrapper">
-------------------------------------------------------------------
<div className="row" id="row1">
                  <div className="col" id="col11">
                    <img
                      className="imagen"
                      src="https://www.findingtheuniverse.com/wp-content/uploads/2013/05/IMG_20130311_17025261.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col0" />
                  <div className="col" id="col12">
                    <img
                      className="imagen"
                      src="https://www.findingtheuniverse.com/wp-content/uploads/2013/05/IMG_20130312_20072861.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="row" id="row2">
                  <div className="col" id="col21">
                    <img
                      className="imagen"
                      src="https://www.findingtheuniverse.com/wp-content/uploads/2013/05/IMG_20130316_08092591.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col0" />
                  <div className="col" id="col22">
                    <img
                      className="imagen"
                      src="https://www.findingtheuniverse.com/wp-content/uploads/2013/05/IMG_20130321_14353361.jpg"
                      alt=""
                    />
                  </div>
                </div>
*/
