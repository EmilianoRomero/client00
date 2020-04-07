import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import HomeButton from "../screen/Footer/HomeButton";
import { fetchItineraries } from "../store/actions/itineraryActions";
import "./Itinerary.css";

class Itineraries extends Component {
  componentDidMount() {
    //acá estaba pasando bien, que haga fetch en itinerario con ciudad como parámetro, pero debo definir antes city
    const city = this.props.match.params.city;
    this.props.fetchItineraries(city);
    console.log(city);
  }

  render() {
    const { itineraries } = this.props;
    console.log(itineraries);
    const itinerariesList = itineraries.map((itinerary) => {
      return (
        <div className="itinerary" key={itinerary._id}>
          <div className="itinerary-profile-img-container">
            <img
              className="itinerary-profile-img"
              src={itinerary.profileimgurl}
              alt=""
            />
          </div>
          <h2 className="itinerary-title">{itinerary.title}</h2>
          <p className="itinerary-likes">{"Likes " + itinerary.likes}</p>
          <p className="itinerary-duration">
            {itinerary.duration}
          </p>
          <p className="itinerary-price">{itinerary.price}</p>
          {itineraries.map((hashtag) => {
            return (
              <p key={itinerary._id} className="itinerary-hashtags">
                {hashtag.hashtags}
              </p>
            );
          })}
          <h3 className="flap-content">"view all"</h3>
        </div>
      );
    });

    return (
      <div className="container-itineraries-list">
        <div className="itineraries-header">
          <img className="itinerary-img" alt="" />
        </div>
        <div className="header-itinerary-text" />
        <div className="container-itinerary">
          {/* check for data before mapping */}
          {itineraries && (
            <div className="itineraries-list">{itinerariesList}</div>
          )}
        </div>
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

//acá también debo pasar la ciudad como parámetro
const mapDispatchToProps = (dispatch) => ({
  fetchItineraries: (city) => dispatch(fetchItineraries(city)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Itineraries);

/* imagen en el 2 render
{itineraries.map(itinerary => (
    <div className="itineraries-header">
    <img className="itinerary-img" src={itinerary.imgurl} alt="" />
    </div>))}
*/

/* primer render
render() {
    const { itineraries } = this.props;
    console.log(itineraries);
    const itinerariesList = itineraries.map(itinerary => {
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
  */
