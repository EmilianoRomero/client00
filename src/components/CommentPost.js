import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  errorPostComment,
  postNewComment,
} from "../store/actions/commentActions";
import "./ActivitiesComments.css";

class CommentPost extends Component {
  constructor() {
    super();
    this.state = {
      comment: "",
      username: "",
      user_ref: "",
      itinerary_ref: "",
      errors: {},
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //determino que el valor de la propiedad "itinerary_id" del nuevo comentario que voy a postear
  //sea el valor de la propiedad ".id" del itinerario en cuestión
  //la propiedad "itinerary_id" fue declarada en el modelo y esquema "comment"
  componentDidMount() {
    this.setState({ itinerary_ref: this.props.itinerary._id });
    //console.log(this.props.itinerary._id);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const comment = {
      itinerary_id: this.props.itinerary._id, //id del objeto itinerary
      title: this.props.itinerary.title,

      comment: this.state.comment,
      username: this.state.username,
      user_ref: this.props.user_id, //this.state.user_ref ?!?!?
      itinerary_ref: this.state.itinerary_ref,
      //comments: this.props.comments, //array de comentarios ya existente para los itinerarios de la ciudad, a donde mandar el nuevo comment
    };
    //const comments = this.props.comments;
    // if (this.props.itinerary_id_itinerary === this.state.comments.itinerary_id) {
    //  this.props.postNewComment(comment, this.props.history);
    // }
    this.props.postNewComment(comment, this.props.history); //new comment + estado al momento de postearlo
    //console.log(comment); //const comment, o sea el nuevo comentario generado y arriba definido
    //console.log(this.props.comments); //todos los comentarios existentes para el id en cuestión
    //console.log(this.props.comment); //todas las propiedades del objeto comment
    this.setState({ comment: "", username: "" }); //limpia los campos después del envío
    window.location.reload(false);
  }

  //  componentDidUpdate(prevProps, prevState) {
  //    if (this.props.username !== null) {
  //      if (this.state.user_id === "") {
  //        this.setState({ user_id: this.props.user._id });
  //      }
  //    }
  //  }

  render() {
    const { errors } = this.state;
    return (
      <div className="new-comment-container">
        <form onSubmit={this.handleSubmit}>
          <button
            className="line1-submit"
            id="submit-button"
            type="submit"
            onClick={this.handleSubmit}
          >
            Share your comment!
          </button>
          <div className="line2-username">
            <label htmlFor="username"></label>
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
              autoComplete="off"
              autoCorrect="off"
              spellCheck="off"
              name="username"
              value={this.state.username}
              error={errors.username}
            />
            <span className="red-text">{errors.username}</span>
          </div>

          <div className="line3-comment">
            <label htmlFor="comment"></label>
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
              autoComplete="off"
              autoCorrect="off"
              spellCheck="off"
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
  postNewComment: (comment, itinerary_ref) =>
    dispatch(postNewComment(comment, itinerary_ref)), //orignalmente (comment)
  errorPostComment: (error) => dispatch(errorPostComment(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentPost);
