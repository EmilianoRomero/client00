import React, { Component } from "react";
import Menu from "../Header/Menu";
import SideDrawer from "../Header/SideDrawer";
import Backdrop from "../Header/Backdrop";
import LoginRegModal from "../Header/LoginRegModal";
import "./Header.css";

export default class Header extends Component {
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

    //render()
    return (
      <div className="header">
        <LoginRegModal />
        <Menu drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
      </div>
    );
  }
}
