import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { errorEditComment, editComment } from "../store/actions/commentActions";
import "./CommentEdit.css";
import CommentModal from "./CommentModal";

class CommentEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      edit: false,
      errors: {},
      comment: "",
      updated_comment: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this); //analizar bien el caso edit/submit/update
    console.log(this.props);
  }

  showModal = () => {
    this.setState({ show: true });
    console.log("clicking show modal");
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  handleEdit = (_id, e) => {
    _id = this.props.comment._id;
    e.persist();
    /*if (!this.props.authenticated) {
      this.handleError();
    } else {*/
    this.setState({
      edit: true,
    });
    this.props.editComment(_id);
    console.log("clicking handle edit", _id);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const _id = this.props.comment._id;
    const updated_comment = this.state.updated_comment;
    const comment = {
      //itinerary_ref: this.props.itinerary,
      //itinerary_id: this.props.itinerary_id,
      _id, //this.state.itinerary_ref,
      updated_comment,
      //itinerary_ref: this.state.itinerary_ref,
      //updated_comment: this.state.comment,
    };
    this.props.editComment(comment, this.props.history);
    this.setState({
      edit: false,
    });
    console.log("clicking handle submit", comment, _id);
    //window.location.reload(false);
  };

  render() {
    const { errors } = this.state;
    const handleEdit = this.handleEdit;
    const handleSubmit = this.handleSubmit;
    return (
      <main>
        <CommentModal show={this.state.show} handleClose={this.hideModal}>
          <form onSubmit={this.handleSubmit}>
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
                onChange={this.handleInputChange}
                autoComplete="off"
                autoCorrect="off"
                spellCheck="off"
                name="updated_comment"
                value={this.state.updated_comment}
                error={errors.username}
              />
              <span className="red-text">{errors.username}</span>
              <button
                className="line1-submit"
                id="update-comment-button"
                type="submit"
                onClick={(_id, e) => {
                  handleEdit(_id, e);
                  handleSubmit(e);
                }}
              >
                Update your comment!
              </button>
            </div>
          </form>
        </CommentModal>
        <button
          className="line1-toggle"
          id="toggle-button"
          type="button"
          onClick={this.showModal} //{(id) => this.handleEdit(id)}
        >
          ---Edit your comment---
        </button>
      </main>
    );
  }
}

CommentEdit.propTypes = {
  errorEditComment: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired,
  itineraries: PropTypes.array.isRequired,
  comment: PropTypes.object.isRequired,
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
  editComment: (_id) => dispatch(editComment(_id)), //orignalmente (comment)
  errorEditComment: (error) => dispatch(errorEditComment(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentEdit);
