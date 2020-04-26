import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getComments,
  errorGetComments,
  //postNewComment,
  //deleteComment,
} from "../store/actions/commentActions";

class Comments extends Component {
  componentDidMount() {
    //const { itinerary_id } = this.props.match.params.itinerary_id;
    //COULDN'T MAKE IT WORK! UNDEFINED WHEN comments/itinerary/itinerary_id
    this.props.getComments();
    console.log("props by fetching", this.props.itineraries.itineraries);
  }

  render() {
    let { comments, itineraries } = this.props;
    console.log("props Comments.js are here!", this.props);

    const itineraryComments =
      comments.length && comments.itinerary_id === itineraries._id ? (
        comments.map((comment, i) => {
          console.log(
            "ITINERARY ID COMMENTS [0] HERE",
            comments[0].itinerary_id
          );
          //OBTENGO ITINERARY_ID del comment
          console.log("ITINERARY ID ITINERARY [0] HERE", itineraries[0]._id);
          //OBTENGO ITINERARY_ID del itinerary
          return (
            <div key={i}>
              <p>{comment.comment}</p>
            </div>
          );
        })
      ) : (
        <div> NO MESSAGES FOR THIS ITINERARY </div>
      );
    return <div>{itineraryComments}</div>;
    /*
    let itineraryComments = comments.filter((comment) => {
      return comment.itinerary_id !== itineraries._id;
    }) ? (
      comments.map((comment, i) => {
        return (
          <div key={i}>
            <p>{comment.comment}</p>
          </div>
        );
      })
    ) : (
      <div> NO MESSAGES FOR THIS ITINERARY </div>
    );
*/
  }
}

Comments.propTypes = {
  getComments: PropTypes.func.isRequired,
  errorGetComments: PropTypes.func.isRequired,
  comments: PropTypes.object.isRequired,
  itineraries: PropTypes.object.isRequired,
};

//TRAIGO ESTADOS DESDE EL REDUCER Y LOS BAJO COMO PROPIEDADES
const mapStateToProps = (state) => {
  console.log("state Comments.js here!", state);
  console.log("state comments.comments here", state.comments.comments);
  return {
    isLoading: state.comments.isLoading,
    comments: state.comments.comments,
    error: state.comments.error,
    itineraries: state.itineraries.itineraries,
  };
};

//TRAIGO DESPACHO DE ACCIONES DESDE LAS ACTIONS Y LAS BAJO COMO PROPIEDADES
const mapDispatchToProps = (dispatch) => ({
  getComments: () => dispatch(getComments()),
  errorGetComments: (error) => dispatch(errorGetComments(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);

//OTRO APPROACH SEMI_FUNCIONAL COPIANDO LO HECHO CON CITIES
/*
class Comments extends Component {
  componentDidMount() {
    this.props.getComments();
    console.log(this.props)
  }

  render() {
    const { comments } = this.props;
    const itineraryComments = comments.map((comment) => {
      return (
        <div key={comment._id}>
          <div>
            <p>{comment.comment}</p>
          </div>
        </div>
      );
    });

    return (
    <div>comments here!>
        {"COMMENTS HERE" + itineraryComments && <div >{itineraryComments}</div>}
      </div>
    
    )
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
  comments: state.comments.comments,
  error: state.comments.error,
  itineraries: state.itineraries.itineraries,
});

//TRAIGO DESPACHO DE ACCIONES DESDE LAS ACTIONS Y LAS BAJO COMO PROPIEDADES
const mapDispatchToProps = (dispatch) => ({
  getComments: () => dispatch(getComments()),
  errorGetComments: (error) => dispatch(errorGetComments(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
*/
