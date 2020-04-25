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
    const itinerary_id = this.props.match.params.itinerary_id;
    this.props.getComments(itinerary_id);
    console.log("props by fetching", this.props.params); //devuelve ciudad y ruta
    console.log("itinerary_id", itinerary_id); //devuelve itineraries.city.name
  }

  render() {
    let { comments } = this.props;
    const commentsList =
      comments.length && comments.itinerary_id === this.props.params ? (
        comments.map((comment) => {
          return (
            <div key={comment.itinerary_id} className="commentBox">
              <p className="comment">{comment.comment}</p>
            </div>
          );
        })
      ) : (
        <div className="empty"> NO MESSAGES FOR THIS ITINERARY </div>
      );
    return <div className="comments">{commentsList}</div>;
  }
}

Comments.propTypes = {
  getComments: PropTypes.func.isRequired,
  errorGetComments: PropTypes.func.isRequired,
  comments: PropTypes.object.isRequired,
  itineraries: PropTypes.object.isRequired,
};

//TRAIGO ESTADOS DESDE EL REDUCER Y LOS BAJO COMO PROPIEDADES
const mapStateToProps = (state) => ({
  isLoading: state.comments.isLoading,
  comments: state.comments,
  error: state.comments.error,
  itineraries: state.itineraries,
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

/*
class Comments extends Component {
  
  render() {
    return (
      <div className="comment">
        COMMENTS HERE! FROM COMPONENT Comments.js return
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
*/

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
