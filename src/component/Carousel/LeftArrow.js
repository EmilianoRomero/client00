import React, { Component } from "react";
import 'font-awesome/css/font-awesome.min.css';
import "./LeftArrow.css"
//import ArrowLeft from "./../00Images/caret-left-solid.svg";

class LeftArrow extends Component {
  render() {
    return (
      <div className="back-arrow" onClick={this.props.goToPrevSlide}>
        <i className='fa fa-caret-left fa-3x' aria-hidden='true'></i>
      </div>
    );
  }
}

export default LeftArrow;
