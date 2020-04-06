import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import HomeButton from "../screen/Footer/HomeButton";
import { fetchItineraries } from "../store/actions/itineraryActions";
import "./Itinerary.css";

class Itineraries extends Component {
  componentDidMount() {
    this.props.fetchItineraries();
  }

  render() {
    const { itineraries } = this.props;
    const itinerariesList = itineraries.map((itinerary) => {
      return (
        <div className="container-itinerary" key={itinerary._id}>
          <div className="itinerary">
            <Link to={"/:" + itinerary.title}>
            <img className="itinerary-img" src={itinerary.imgurl} alt="" />
            </Link>
          </div>
        </div>
      );
    });

    return (
      <div className="container-itineraries-list">
        {/* check for data before mapping */}
        {itinerariesList && (
          <div className="itineraries-list">{itinerariesList}</div>
        )}
        <div className="fill"></div>
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
  fetchItineraries: () => dispatch(fetchItineraries)
})


export default connect(mapStateToProps, mapDispatchToProps)(Itineraries);
