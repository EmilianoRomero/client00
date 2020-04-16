import React, { Component } from "react";
import { connect } from "react-redux";
//import { NavLink } from "react-router-dom";
import { addFav } from "../store/actions/authActions";
import "normalize.css";
import "./Activities.css";

class Activities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      button: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { itinerary } = this.props;

    this.setState({
      button: !this.state.button,
    });
    this.props.addFav(itinerary._id);
  }

  toggle = () => {
    this.setState({ open: !this.state.open });
  };

  generateActivitiesList() {
    const { itinerary } = this.props;
    if (this.state.open) {
      return this.props.itinerary.activities.map((activity) => {
        return (
          <div className="activitiy-container" key={itinerary._id}>
            <h2 className="activity-title">{activity.activitytitle}</h2>
            <img
              className="activity-img"
              src={activity.activityimgurl}
              alt="activity img"
            />
          </div>
        );
      });
    }
  }

  render() {
    const { itinerary } = this.props;

    return (
      <div className="itinerary">
        <div className="grid-itinerary">
          <div className="left">
            <div className="itinerary-profile-img-container">
              <img
                className="itinerary-profile-img"
                src={itinerary.profileimgurl}
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <div className="line-1left">
              <h2 className="itinerary-title">{itinerary.title}</h2>
            </div>
            <div className="line-1right">
              <button
                className={this.state.button ? "buttonTrue" : "buttonFalse"}
                onClick={this.handleClick}
              >
                Like
              </button>
            </div>
            <div className="line-2">
              <p className="itinerary-likes">{"Likes: " + itinerary.likes}</p>
              <p className="itinerary-duration">{itinerary.duration}</p>
              <p className="itinerary-price">{itinerary.price}</p>
            </div>
            <div className="line-3">
              <p className="itinerary-hashtags"> {itinerary.hashtags}</p>
            </div>
          </div>
        </div>
        <button className="flap-content-button" onClick={this.toggle}>
          {this.state.open ? "Close" : "View All"}
        </button>
        <div className="grid-activities">
          <h2 className="activities-list-header">
            {this.state.open ? "ACTIVITIES:" : " "}
          </h2>
          <div className="activities-list">{this.generateActivitiesList()}</div>
          <h2 className="activities-list-comments">
            {this.state.open ? "COMMENTS:" : " "}
          </h2>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    itineraries: state.itineraries,
    favourites: state.favourites,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addFav: (favourite) => dispatch(addFav(favourite)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Activities);

/* SECCIÓN ÍNTEGRA
return (
      <div className="itinerary">
        <div className="grid-itinerary">
          <div className="left">
            <div className="itinerary-profile-img-container">
              <img
                className="itinerary-profile-img"
                src={itinerary.profileimgurl}
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <div className="line-1left">
              <h2 className="itinerary-title">{itinerary.title}</h2>
            </div>
            <div className="line-1right">
              <button
                className={this.state.button ? "buttonTrue" : "buttonFalse"}
                onClick={this.handleClick}
              >
                Like
              </button>
            </div>
            <div className="line-2">
              <p className="itinerary-likes">{"Likes: " + itinerary.likes}</p>
              <p className="itinerary-duration">{itinerary.duration}</p>
              <p className="itinerary-price">{itinerary.price}</p>
            </div>
            <div className="line-3">
              <p className="itinerary-hashtags"> {itinerary.hashtags}</p>
            </div>
          </div>
        </div>
        <div className="flap-content">
          <button className="flap-content-button" onClick={this.toggle}>
            {this.state.open ? "Close" : "View All"}
          </button>
          <div className="grid-activities">
            <h2 className="activities-list-header">
              {this.state.open ? "ACTIVITIES:" : " "}
            </h2>
            <div className="activities-list">
              {this.generateActivitiesList()}
            </div>
            <h2 className="activities-list-comments">
              {this.state.open ? "COMMENTS:" : " "}
            </h2>
          </div>
        </div>
      </div>
    );
    */
