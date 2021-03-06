import React, { Component } from "react";
//import Menu from "../Header/Menu";
//import SideDrawer from "../Header/SideDrawer";
import Backdrop from "../Header/Backdrop";
import LogRegModal from "./LogRegModal";
import "./Header.css";

export default class Header2 extends Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen,
      };
    });
  };

  backdropClickHandler = () => {
    this.setState({
      sideDrawerOpen: false,
    });
  };

  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="header">
        <LogRegModal /> {/*<LoginRegModal />*/}
        {/*<Menu drawerClickHandler={this.drawerToggleClickHandler} />*/}
        {/*<SideDrawer show={this.state.sideDrawerOpen} />*/}
        {backdrop}
      </div>
    );
  }
}
