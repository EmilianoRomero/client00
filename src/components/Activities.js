import React, { Component } from "react";
import { connect } from "react-redux";
import Comments from "./Comments";
import CommentPost from "./CommentPost";
import "normalize.css";
import "./ActivitiesComments.css";

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
    this.setState({
      button: !this.state.button,
    });
  }

  toggle = () => {
    this.setState({ open: !this.state.open });
  };

  generateActivitiesList() {
    const { itinerary } = this.props;
    if (this.state.open) {
      return this.props.itinerary.activities.map((activity) => {
        return (
          <div className="activity-container" key={itinerary._id}>
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
    const { itinerary, comments, comment } = this.props;
    //console.log(this.props);
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
            <div className="line-1">
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
        <div className="grid-collapsible">
          <h2 className="activities-list-title">
            {this.state.open ? "ACTIVITIES:" : " "}
          </h2>
          <div className="activities-list">{this.generateActivitiesList()}</div>
          <h2 className="comments-list-title">
            {this.state.open ? "COMMENTS:" : " "}
          </h2>
          <div className="comments-list">
            <CommentPost itinerary={itinerary._id} comment={comment.comment} {...this.props} /> {/*NO BORRAR {...this.props} */} 
            <Comments itinerary={itinerary._id} comments={comments.comments}/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    itineraries: state.itineraries.itineraries,
    comments: state.comments.comments,
    comment: state.comments,
    error: state.comments.error,

    isLoading: state.comments.isLoading,

    errors: state.errors,
  };
};

export default connect(mapStateToProps)(Activities);
