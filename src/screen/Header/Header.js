import React, { Component } from "react";
import LogRegModal from "../Header/LogRegModal";
import SideBar from "./SideBar";
//import PropTypes from 'prop-types';
//import { connect } from 'react-redux';
//import { withRouter } from 'react-router-dom';
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <LogRegModal />
        <SideBar />
      </div>
    );
  }
}

export default Header;
