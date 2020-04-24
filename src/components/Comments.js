import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getComments,
  errorGetComments,
  postNewComment,
  deleteComment,
} from "../store/actions/commentActions";

class Comments extends Component {
  componentDidMount() {
    const itinerary_id = this.props.params;
    this.props.getComments(itinerary_id);
    console.log("props by fetching", this.props); //devuelve ciudad y ruta
    console.log("this is the itinerary id", itinerary_id); //devuelve itineraries.city.name
  }

  render() {
    let { comments } = this.props;
    console.log("props are here!", this.props);
    return (
      <div>
        {comments.map((comment) =>
          comment.itinerary_id === this.props.params ? (
            <div key={comments._id} className="commentBox">
              <p className="comment">{comment.comment}</p>
            </div>
          ) : null
        )}
      </div>
    );
  }
}

Comments.propTypes = {
  getComments: PropTypes.func.isRequired,
  errorGetComments: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired,
};

//TRAIGO ESTADOS DESDE EL REDUCER Y LOS BAJO COMO PROPIEDADES
const mapStateToProps = (state) => ({
  isLoading: state.comments.isLoading,
  comments: state.comments.comments,
  error: state.comments.error,
});

//TRAIGO DESPACHO DE ACCIONES DESDE LAS ACTIONS Y LAS BAJO COMO PROPIEDADES
const mapDispatchToProps = (dispatch) => ({
  getComments: (itinerary_id) => dispatch(getComments(itinerary_id)),
  errorGetComments: (error) => dispatch(errorGetComments(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);

//RETURN ORIGINAL
/*
<div className="comments-container">
        {comments && (
            <div className="comments-list">
              "COMMENTS" {this.generateComments()}
            </div>
          )}
      </div>
      */
