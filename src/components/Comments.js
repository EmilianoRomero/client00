import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getComments,
  errorGetComments,
  postNewComment,
  errorPostComment,
  deleteComment,
} from "../store/actions/commentActions";
import "./ActivitiesComments.css";

class Comments extends Component {
  componentDidMount() {
    const itinerary_id = this.props.itinerary;
    //I want the object, not the array, that's why I use itinerary and no itineraries.whatever
    this.props.getComments(itinerary_id);
    //console.log("props by fetching", this.props.itinerary);
  }

  handleDelete = (id) => {
    /*if (!this.props.authenticated) {
      this.handleError();
    } else {*/
    this.props.deleteComment(id);
    window.location.reload(false);
  };
  //};

  render() {
    //let comment = this.props;
    let comments = this.props.comments.filter((comment) => {
      //console.log("COMMENT.ITINERARY_REF --> ", comment.itinerary_ref);
      return comment.itinerary_ref === this.props.itinerary;
    });
    //console.log("THIS.PROPS.COMMENTS --> ", this.props.comments);
    //console.log("THIS.PROPS.ITINERARY --> ", this.props.itinerary);

    return (
      <React.Fragment>
        {comments ? (
          comments.map((comment, i) => {
            return (
              <div className="comment" key={i}>
                <p className="comment">{comment.comment}</p>
                <button
                  className="delete-comment"
                  onClick={(e) => this.handleDelete(comment._id)}
                >
                  Delete your comment
                </button>
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
    comment: state.comments,
    error: state.comments.error,
    itineraries: state.itineraries.itineraries,
  };
};

//TRAIGO DESPACHO DE ACCIONES DESDE LAS ACTIONS Y LAS BAJO COMO PROPIEDADES
const mapDispatchToProps = (dispatch) => ({
  getComments: () => dispatch(getComments()),
  errorGetComments: (error) => dispatch(errorGetComments(error)),
  postNewComment: () => dispatch(postNewComment()),
  errorPostComment: (error) => dispatch(errorPostComment(error)),
  deleteComment: (id) => dispatch(deleteComment(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
