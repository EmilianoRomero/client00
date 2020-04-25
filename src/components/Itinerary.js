import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import HomeButton from "../screen/Footer/HomeButton";
import { fetchItineraries } from "../store/actions/itineraryActions";
//import Comments from "./Comments";
import "normalize.css";
import "./Itinerary.css";
import Activities from "./Activities";
import Header from "../screen/Header/Header";

class Itineraries extends Component {
  componentDidMount() {
    const city = this.props.match.params.city;
    this.props.fetchItineraries(city);
    console.log("props by fetching", this.props); //devuelve ciudad y ruta
    console.log("this is the city", city); //devuelve itineraries.city.name
  }

  //IMPORTAR LOS COMENTARIOS ACÁ? MAPEAR APARTE?
  generateItinerariesList() {
    let itinerariesList = this.props.itineraries.map((itinerary) => {
      console.log(this.props); //devuelve lo mismo de 15 pero ahora incluye objetos itinerario y toda su info
      return (
        <Activities itinerary={itinerary} key={itinerary._id}></Activities>
      );
    });
    return itinerariesList;
  }

  //BUSCAR OTRO MÉTODO PARA QUE:
  //a) muestre la foto de la ciudad y despliegue un aviso de que no hay itinerarios para esta ciudad
  //b) directamente despliegue aviso de que no hay itinerarios para esta ciudad
  generateItineraryHeaderImage() {
    let itineraryHeaderImage = this.props.itineraries.map((itinerary) => {
      return (
        <img
          className="itinerary-img"
          key={itinerary._id}
          src={itinerary.imgurl}
          alt=""
        />
      );
    });
    return itineraryHeaderImage.slice(1);
  }

  render() {
    let itinerariesList = this.props;
    console.log("props are here!", this.props);

    return (
      <div className="container-itineraries-list">
        <Header className="header" />
        <div className="itinerary-img">
          {this.generateItineraryHeaderImage()}
        </div>
        <div className="header-itinerary-text" />
        {
          /* check for data before mapping!!! */
          itinerariesList && (
            <div className="itineraries-list">
              {this.generateItinerariesList()}
            </div>
          )
        }
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
  console.log("state here!", state);
  return {
    itineraries: state.itineraries.itineraries,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchItineraries: (city) => dispatch(fetchItineraries(city)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Itineraries);
