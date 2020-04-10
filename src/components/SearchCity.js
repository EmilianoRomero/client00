import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { searchCity } from "../store/actions/cityActions";
import "./SearchCity.css";

class SearchCity extends Component {
  render() {
    const { searchCity, searchValue } = this.props;

    return (
      <form className="search-form">
        <input
          className="search-box"
          placeholder={"search your city!"}
          value={searchValue}
          onChange={(e) => searchCity(e.target.value)}
        ></input>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    searchValue: state.cities.searchValue,
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchCity }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchCity);
