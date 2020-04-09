import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import HomeButton from "../screen/Footer/HomeButton";
import { fetchItineraries } from "../store/actions/itineraryActions";
import "normalize.css";
import "./Itinerary.css";
import Activities from "./Activities";

class Itineraries extends Component {
  componentDidMount() {
    const city = this.props.match.params.city;
    this.props.fetchItineraries(city);
    //console.log(city);
  }

  generateItinerariesList() {
    let itinerariesList = this.props.itineraries.map((itinerary) => {
      return (
          <Activities itinerary={itinerary} key={itinerary._id}></Activities>
      );
    });
    return itinerariesList;
  }

  /*
generateItinerariesHeader() {
    let itinerariesHeader = this.props.itineraries.map((itinerary) => {
      return (
          <div className="itineraries-header" key={itinerary._id}>
          <img className="itinerary-img" src={itinerary.imgurl} alt="" />
        </div>
      );
    });
    return itinerariesHeader
  }
*/

  render() {
    console.log("props are here!", this.props);
    let itinerariesList = this.props;
    //let itinerariesHeader = this.props;
    return (
      <div className="container-itineraries-list">
        <div className="itineraries-header">Cointainer dynamic image of the city</div>
        <div className="header-itinerary-text" />
          {/* check for data before mapping!!! */}
          {itinerariesList && (
            <div className="itineraries-list">
              {this.generateItinerariesList()}
            </div>
          )}
        <HomeButton />
      </div>
    );
  }
}

Itineraries.propTypes = {
  fetchItineraries: PropTypes.func.isRequired,
  itineraries: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    itineraries: state.itineraries.itineraries,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchItineraries: (city) => dispatch(fetchItineraries(city)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Itineraries);
