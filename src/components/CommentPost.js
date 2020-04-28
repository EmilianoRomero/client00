import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  errorPostComment,
  postNewComment,
  //deleteComment,
} from "../store/actions/commentActions";
//import classnames from "classnames"; //Necessary to render the conditional errors
import "./ActivitiesComments.css";

//LIMPIAR CAMPO
//QUE EL MENSAJE APAREZCA ENTRE LOS MENSAJES
//QUE EL MENSAJE APAREZCA EN MONGOOSE

class CommentPost extends Component {
  constructor() {
    super();
    this.state = {
      comment: "",
      username: "",
      user_id: "",
      errors: {},
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const comment = {
      comment: this.state.comment,
      username: this.state.username,
      user_id: this.state.user_id,
      itinerary_id: this.props.itinerary._id,
      title: this.props.itinerary.title,
    };
    this.props.postNewComment(comment, this.props.history);
    console.log(comment);
    this.setState({ comment: "", username: "" }); //clean fields after submitting
  }

  /*
  componentDidUpdate(prevProps, prevState) {
    if (this.props.username !== null) {
      if (this.state.user_id === "") {
        this.setState({ user_id: this.props.user._id });
      }
    }
  }
*/

  render() {
    const { errors } = this.state;
    return (
      <div className="new-comment-container">
        <form ref="commentForm" onSubmit={this.handleSubmit}>
          <button className="line1-submit" id="submit-button" type="submit">
            Share your comment!
          </button>
          <div className="line2-username">
            <label htmlFor="Username">User name: </label>
            <input
              className={
                ("username-field",
                {
                  invalid: errors.username,
                })
              }
              type="text"
              id="username"
              placeholder="enter username"
              onChange={this.handleInputChange}
              name="username"
              value={this.state.username}
              error={errors.username}
            />
            <span className="red-text">{errors.username}</span>
          </div>

          <div className="line3-comment">
            <label htmlFor="Comment"></label>
            <input
              className={
                ("comment-field",
                {
                  invalid: errors.username,
                })
              }
              type="text"
              id="comment"
              placeholder="write your comment"
              onChange={this.handleInputChange}
              name="comment"
              value={this.state.comment}
              error={errors.username}
            />
            <span className="red-text">{errors.username}</span>
          </div>
        </form>
      </div>
    );
  }
}

CommentPost.propTypes = {
  errorPostComment: PropTypes.func.isRequired,
  postNewComment: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired,
  itineraries: PropTypes.array.isRequired,
};

//TRAIGO ESTADOS DESDE EL REDUCER Y LOS BAJO COMO PROPIEDADES
const mapStateToProps = (state) => {
  //console.log("state PostComment.js here!", state);
  //console.log("state comments.comments here", state.comments.comments);
  return {
    comments: state.comments.comments,
    comment: state.comments,
    error: state.comments.error,
    itineraries: state.itineraries.itineraries,
    errors: state.errors,
  };
};

//TRAIGO DESPACHO DE ACCIONES DESDE LAS ACTIONS Y LAS BAJO COMO PROPIEDADES
const mapDispatchToProps = (dispatch) => ({
  postNewComment: (comment, itinerary_id) => dispatch(postNewComment(comment, itinerary_id)),
  errorPostComment: (error) => dispatch(errorPostComment(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentPost);
