import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getComments,
  errorGetComments,
  postNewComment,
  errorPostComment,
  //deleteComment,
} from "../store/actions/commentActions";
import "./ActivitiesComments.css";

class Comments extends Component {
  /*---GET---*/
  componentDidMount() {
    const itinerary_id = this.props.itinerary;
    //I'm accessing the object, not the array,
    //that's why I use itinerary and no itineraries.whatever
    this.props.getComments(itinerary_id);
    console.log("props by fetching", itinerary_id); //id de cada itinerarios
  }

  /*---POST NEW---*/
  handleSubmit(e) {
    //console.log(this.refs);
    e.preventDefault();
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log("submitting message!");
    console.log(this.props.itinerary);
    //const username = this.refs.username.value;
    //const comment = this.refs.comment.value;
    //this.props.postNewComment();
    //this.refs.commentForm.reset();
  }

  render() {
    /*---FILTER GET---*/
    let comments = this.props.comments.filter((comment) => {
      return comment.itinerary_id !== this.props.itinerary;
    });
    //console.log("props Comments.js are here!", this.props);

    return (
      <React.Fragment>
        {/*---MAP FILTERED GET---*/}
        <div className="new-comment-container">
          <form
            noValidate
            ref="commentForm"
            className="comment-form"
            onSubmit={this.handleSubmit}
          >
            <input type="text" ref="username" placeholder="username" />
            <input type="text" ref="comment" placeholder="comment" />
            <input type="submit" hidden />
          </form>
        </div>
        {/*---POST NEW---*/}
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
  /*---GET---*/
  getComments: PropTypes.func.isRequired,
  errorGetComments: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired,
  /*---ITINERARIES---*/
  itineraries: PropTypes.array.isRequired,
  /*---POST NEW---*/
  errorPostComment: PropTypes.func.isRequired,
  postNewComment: PropTypes.func.isRequired,
};

//TRAIGO ESTADOS DESDE EL REDUCER Y LOS BAJO COMO PROPIEDADES
const mapStateToProps = (state) => {
  //console.log("state Comments.js here!", state);
  //console.log("state comments.comments here", state.comments.comments);
  return {
    /*---GET---*/
    isLoading: state.comments.isLoading,
    /*---ITINERARIES---*/
    itineraries: state.itineraries.itineraries,
    /*---GET + POST NEW---*/
    comments: state.comments.comments,
    error: state.comments.error,
    comment: state.comment,
  };
};

//TRAIGO DESPACHO DE ACCIONES DESDE LAS ACTIONS Y LAS BAJO COMO PROPIEDADES
const mapDispatchToProps = (dispatch) => ({
  /*---GET---*/
  getComments: (itinerary_id) => dispatch(getComments(itinerary_id)),
  errorGetComments: (error) => dispatch(errorGetComments(error)),
  /*---POST NEW---*/
  postNewComment: (itinerary_id, username, comment) =>
    dispatch(postNewComment(itinerary_id, username, comment)),
  errorPostComment: (error) => dispatch(errorPostComment(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);

//postNewComment: (itinerary_id, username, comment)
