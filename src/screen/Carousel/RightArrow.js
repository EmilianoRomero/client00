import React, { Component } from "react";
import 'font-awesome/css/font-awesome.min.css';
import "./RightArrow.css"
//import ArrowRight from "./../00Images/caret-right-solid.svg";

class RightArrow extends Component {
  render() {
    return (
      <div className="forward-arrow" onClick={this.props.goToNextSlide}>
        <i className='fa fa-caret-right fa-3x' aria-hidden='true'></i>
      </div>
    );
  }
}

export default RightArrow;
