import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { searchCity }  from "/Users/trancecyberian/Desktop/UBIQUM/01Projects/MERN/fsd/client00/src/store/actions/cityActions";
import "./SearchCity.css";

class SearchCity extends Component {
  render() {
    const { searchCity, value } = this.props;

    return (
      <form className="search-form">
        <input
          className="search-box"
          placeholder={"search your city!"}
          value={value}
          onChange={e => searchCity(e.target.value)}
        ></input>
      </form>
    );
  }
}

function mapStateToProps({ cities }) {
  return { value: cities.value };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchCity }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchCity);
