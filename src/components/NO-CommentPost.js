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

class CommentPost extends Component {
  /*
    componentDidMount() {
    const itinerary_id  = this.props.itinerary;
    //I'm accessing the object, not the array,
    //that's why I use itinerary and no itineraries.whatever
    console.log("PROPS ITINERARY ID", itinerary_id);
  }
  */

  handleSubmit(e) {
    e.preventDefault();
    console.log("submitting message!");
    console.log(this.refs);
    const itinerary_id = this.props.itinerary;
    console.log(this.props.params);
    const username = this.refs.username.value;
    const comment = this.refs.comment.value;
    this.props.postNewComment(itinerary_id, username, comment);
    this.refs.commentForm.reset();
  }

  render() {
    return (
      <div className="new-comment-container">
        <form
          ref="commentForm"
          className="comment-form"
          onSubmit={this.handleSubmit}
        >
          <input type="text" ref="username" placeholder="username" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}

CommentPost.propTypes = {
  errorPostComment: PropTypes.func.isRequired,
  postNewComment: PropTypes.func.isRequired,
  comments: PropTypes.object.isRequired,
  itineraries: PropTypes.object.isRequired,
};

//TRAIGO ESTADOS DESDE EL REDUCER Y LOS BAJO COMO PROPIEDADES
const mapStateToProps = (state) => {
  console.log("state Comments.js here!", state);
  console.log("state comments.comments here", state.comments.comments);
  return {
    comments: state.comments.comments,
    error: state.comments.error,
    itineraries: state.itineraries.itineraries,
  };
};

//TRAIGO DESPACHO DE ACCIONES DESDE LAS ACTIONS Y LAS BAJO COMO PROPIEDADES
const mapDispatchToProps = (dispatch) => ({
  postNewComment: (itinerary_id, username, comment) =>
    dispatch(postNewComment(itinerary_id, username, comment)),
  errorPostComment: (error) => dispatch(errorPostComment(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentPost);

/*
<div className="line2-itinerary">
          <label htmlFor="itinerary_id">Itinerary: </label>
          <p>DYNAMICALLY AUTOCOMPLETED ITINERARY NAME FROM itinerary_id</p>
        </div>
*/
/*
class CommentPost extends Component {
    constructor(props) {
      super(props);
      this.state = {
        username: "",
        //itinerary_id: "",
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
        username: this.state.username,
        //itinerary_id: this.state.itinerary_id,
      };
      this.props.postNewComment(comment, this.props.history);
      console.log(comment);
    }
  
    render() {
      const { errors } = this.state;
      return (
        <div className="new-comment-container">
            <button className="line1-submit" id="submit-button" type="submit">
            Post your comment!
            </button>
          
          <form noValidate onSubmit={this.handleSubmit}>
            <div className="line2-username">
              <label htmlFor="username">User name: </label>
              <input
                className={classnames("", {
                  invalid: errors.username,
                })}
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
  
            <div className="line4-comment">
              <label htmlFor="comment">Comment: </label>
              <input
                className={classnames("", {
                  invalid: errors.username,
                })}
                type="text"
                id="comment-field"
                placeholder="enter your comment"
                onChange={this.handleInputChange}
                name="comment"
                value={this.state.comment}
              />
            </div>
          </form>
        </div>
      );
    }
  }
  
  CommentPost.propTypes = {
    errorPostComment: PropTypes.func.isRequired,
    postNewComment: PropTypes.func.isRequired,
    comments: PropTypes.object.isRequired,
    itineraries: PropTypes.object.isRequired,
  };
  
  //TRAIGO ESTADOS DESDE EL REDUCER Y LOS BAJO COMO PROPIEDADES
  const mapStateToProps = (state) => {
    console.log("state Comments.js here!", state);
    console.log("state comments.comments here", state.comments.comments);
    return {
      comments: state.comments.comments,
      error: state.comments.error,
      itineraries: state.itineraries.itineraries,
    };
  };
  
  //TRAIGO DESPACHO DE ACCIONES DESDE LAS ACTIONS Y LAS BAJO COMO PROPIEDADES
  const mapDispatchToProps = (dispatch) => ({
    postNewComment: (comment) => dispatch(postNewComment(comment)),
    errorPostComment: (error) => dispatch(errorPostComment(error)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(CommentPost);
  */
