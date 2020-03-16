import React, { Component } from "react";
import Landing from "./screen/Landing";
import Cities from "./cities";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Menu from "./component/Header/Menu";
//import Login from "./component/Header/Login"
import Logo from "./component/00Images/MYtineraryLogo.png";
import Arrow from "./component/00Images/circled-right-2.png";
//import User from "./component/00Images/user.png";
import SideDrawer from "./component/SideDrawer/SideDrawer";
import Backdrop from "./component/Backdrop/Backdrop";
//import LoginLink from "./component/Login/LoginLink";
//import RegisterLink from "./component/Register/RegisterLink";
import LoginRegModal from "./component/LoginReg/LoginRegModal";
import Carousel from "./component/Carousel/Carousel";
import RightArrow from "./component/Carousel/RightArrow";
import LeftArrow from "./component/Carousel/LeftArrow";

export default class App extends Component {
  //We need to be able to listen to the click on the menu,
  //and remove the side drawer and the back drop
  //Initial state: oculto por defecto
  state = {
    sideDrawerOpen: false
  };

  //In the function we receive the previous state as an argument,
  //then return the object with the updated state and we declare it
  //open with the opposite of the previous state, => if it was T, then
  //will be set to F and the opposite.
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  //Closing the side drawer. No importa el estado previo, dejar siempre closed.
  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    //let sideDrawer;
    let backdrop;
    //if this state is T, then...
    //We call the components here instead after the return,
    //and in its former place within the structure we place
    //the variables, making reference to these components.
    //Con el Backdrop component pasa lo mismo: paso la referencia a esta función,
    //y se la llama desde su componente.
    if (this.state.sideDrawerOpen) {
      //sideDrawer= <SideDrawer />;
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <BrowserRouter>
        <div className="App">
          <div className="container-fluid" id="main-container-fluid">
            <Switch>
              <Route exact path="./screen/Landing" component={Landing} />
              <Route exact path="./cities" component={Cities} />
            </Switch>
            <div className="header">
              {/*originalmente acá <div> - <img /> - </div> */}
              <LoginRegModal />
              {/*</div>*/}
              {/*Paso una referencia al método, no es que lo ejecuto*/}
              {/*Ejecutar implica que esté escrito así drawerToggleClickHandler(),*/}
              {/*con los paréntesis al final*/}
              {/*Referir: pasar dirección al método vía propiedad del componente*/}
              {/*Esto se recibe en DrawerToggleButton component en Menu*/}
              {/*Me llevo a {sideDrawer}*/}
              <Menu drawerClickHandler={this.drawerToggleClickHandler} />
              {/*{sideDrawer} Se va y lo dejo siempre presente con una prop*/}
              {/*voy a ir a modificarlo al componente en sí*/}
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
              <h3 className="titleGalleryTxt">Populate MYtineraries</h3>
            </div>
            <div className="carousel-container">
              {/*<!Slider />*/}
              <Carousel />
            </div>
            <div className="slide-bar">
              <LeftArrow />
              <RightArrow />
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
