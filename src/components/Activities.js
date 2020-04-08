import React, { Component } from "react";
import { connect } from "react-redux";
//import { NavLink } from "react-router-dom";
import "./Activities.css";

class Activities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      button: true,
    };
    //this.handleClick = this.handleClick.bind(this);
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
            {/*<div className="activities">*/}
              <h2 className="activity-title" key={itinerary._id}>{activity.activitytitle}</h2>
              <img
                className="activity-img"
                src={activity.activityimgurl}
                alt="activity img"
              />
            {/*</div>*/}
          </div>
        );
      });
    }

  }

  render() {
    const { itinerary } = this.props;

    return (
        <div className="itinerary">
          <div className="itinerary-profile-img-container">
            <img
              className="itinerary-profile-img"
              src={itinerary.profileimgurl}
              alt=""
            />
          </div>
          <h2 className="itinerary-title">{itinerary.title}</h2>
          <p className="itinerary-likes">{"Likes: " + itinerary.likes}</p>
          <p className="itinerary-duration">{itinerary.duration}</p>
          <p className="itinerary-price">{itinerary.price}</p>
          <p className="itinerary-hashtags"> {itinerary.hashtags}</p>

        <div className="flap-content">
          <button className="flap-content-button" onClick={this.toggle}>
            {this.state.open ? "Close" : "View All"}
          </button>
          {this.state.open ? "* ACTIVITIES:" : " "}
          {this.generateActivitiesList()}
          {this.state.open ? "* COMMENTS:" : " "}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    itineraries: state.itineraries,
  };
};

export default connect(mapStateToProps)(Activities);