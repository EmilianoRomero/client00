import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getComments,
  errorGetComments,
  //postNewComment,
  //deleteComment,
} from "../store/actions/commentActions";
import "./ActivitiesComments.css";

class Comments extends Component {
  componentDidMount() {
    const itinerary_id = this.props.itinerary;
    //I'm accessing the object, not the array,
    //that's why I use itinerary and no itineraries.whatever
    this.props.getComments(itinerary_id);
    //console.log("props by fetching", this.props.itineraries);
  }

  render() {
    let comments = this.props.comments.filter((comment) => {
      return comment.itinerary_id !== this.props.itinerary;
    });
    //console.log("props Comments.js are here!", this.props);

    return (
      <React.Fragment>
        {comments ? (
          comments.map((comment, i) => {
            return (
              <div className="comment" key={i}>
                <p className="comment">{comment.comment}</p>
              </div>
            );
          })
        ) : (
          <div className="no-message"> NO MESSAGES FOR THIS ITINERARY </div>
        )}
      </React.Fragment>
    );
  }
}

Comments.propTypes = {
  getComments: PropTypes.func.isRequired,
  errorGetComments: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired,
  itineraries: PropTypes.array.isRequired,
};

//TRAIGO ESTADOS DESDE EL REDUCER Y LOS BAJO COMO PROPIEDADES
const mapStateToProps = (state) => {
  //console.log("state Comments.js here!", state);
  //console.log("state comments.comments here", state.comments.comments);
  return {
    isLoading: state.comments.isLoading,
    comments: state.comments.comments,
    error: state.comments.error,
    itineraries: state.itineraries.itineraries,
  };
};

//TRAIGO DESPACHO DE ACCIONES DESDE LAS ACTIONS Y LAS BAJO COMO PROPIEDADES
const mapDispatchToProps = (dispatch) => ({
  getComments: (itinerary_id) => dispatch(getComments(itinerary_id)),
  errorGetComments: (error) => dispatch(errorGetComments(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
