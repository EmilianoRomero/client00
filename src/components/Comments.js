



/*
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getComments,
  errorGetComments,
  postNewComment,
  deleteComment,
} from "../store/actions/commentActions";
import { clearErrors } from "../store/actions/errorActions";

import {
  Typography,
  Divider,
  IconButton,
  TextField,
  Button,
  CircularProgress,
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";

import { withSnackbar } from "notistack";

class Comments extends Component {
  constructor() {
    super();
    this.state = {
      comment: "",
      user: "",
      user_id: "",
    };
  }

  componentDidMount() {
    this.props.dispatch(errorGetComments());
    this.props.dispatch(getComments(this.props.params));
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.user !== null) {
      if (this.state.user_id === "") {
        this.setState({ user_id: this.props.user._id });
      }
    }
  }

  handleChange = (e) => {
    this.setState({
      comment: e.target.value,
    });

    if (this.props.authenticated) {
      //this.setState({ user_ref: this.props.user._id });
      if (this.props.user.auth.origin === "local") {
        this.setState({ user: this.props.user.auth.local.userName });
      } else if (this.props.user.auth.origin === "social") {
        this.setState({ user: this.props.user.auth.social.userName });
      }
    } else {
      this.setState({ user: "" });
      this.setState({ user_id: "" });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(clearErrors());
    const comment = {
      comment: this.state.comment,
      user: this.state.user,
      user_id: this.state.user_id,
      itinerary_id: this.props.params,
    };

    if (!this.props.authenticated) {
      this.handleError();
    } else {
      this.props.dispatch(postNewComment(comment));
    }
  };

  handleDelete = (id) => {
    if (!this.props.authenticated) {
      this.handleError();
    } else {
      this.props.dispatch(deleteComment(id));
      //this.props.dispatch(fetchCommentsFailure());
      //this.props.dispatch(fetchComments(this.props.params));
    }
  };

  handleError = () => {
    const message = "You need to be registered to do that";
    this.props.alert(message, {
      anchorOrigin: {
        vertical: "top",
        horizontal: "left",
      },
      variant: "error",
      className: "snackbarError",
    });
    console.log(this.props);
  };

  render() {
    const { comments, loading } = this.props;

    if (loading) {
      return (
        <div className="spinner">
          <CircularProgress color="secondary" />
        </div>
      );
    }

    return (
      <div>
        {comments.map((comment, i) =>
          comment.itinerary_id === this.props.params ? (
            <div key={i} className="commentBox">
              <div>
                <Typography className="pos" color="textPrimary">
                  {comment.comment}
                </Typography>
                {comment.user_id === this.state.user_id ? (
                  <IconButton
                    aria-label="delete"
                    onClick={(e) => this.handleDelete(comment._id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                ) : null}
              </div>
              <Typography
                variant="caption"
                display="block"
                color="textSecondary"
                gutterBottom
                className="commentSignature"
              >
                <div>
                  <span>{comment.user}</span>
                  <span> - </span>
                  <span>{comment.timestamp}</span>
                </div>
              </Typography>
              <Divider />
            </div>
          ) : null
        )}
        <Divider />
        <form
          noValidate
          autoComplete="off"
          className="commentForm"
          onSubmit={this.handleSubmit}
        >
          <TextField
            className="outlined-basic"
            label="Add Comment"
            variant="outlined"
            onChange={this.handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={this.handleSubmit}
          >
            Send comment
          </Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  comments: state.comments.comments,
  loading: state.comments.loading,
  authenticated: state.auth.authenticated,
  user: state.auth.user,
});

export default connect(mapStateToProps)(Comments);
*/

/*
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getComments,
  //postNewComment,
  deleteComment,
} from "../store/actions/commentActions";

class Comments extends Component {
  
    componentDidMount() {
    const itineraryId = this.props.match.params.itinerary_id;
    this.props.getComments(itineraryId);
    //this.props.postNewComment(itineraryId); --> AL COMPONENTE INPUT COMMENT
    //this.props.postNewComment(itineraryId, userId, commentText, commentTime);
    //this.props.deleteComment(id);
    console.log("props by fetching", this.props); //devuelve ciudad y ruta
    console.log("this is the itinerary id", itineraryId); //devuelve itineraries.city.name
  }

  render() {
    let { itinerary, comments } = this.props;
    console.log(this.props);
    return (
      <div className="container-comments-list">
        {this.props.comments.map((comment) => (
          <div className="comment content" key={itinerary._id}>
            <p className="comment">{comment.comment}</p>
          </div>
        ))}
      </div>
    );
  }
}

Comments.propTypes = {
  getComments: PropTypes.func.isRequired,
  //postNewComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  console.log("state here!", state);
  return {
    comments: state.comments.comments,
    itineraries: state.itineraries.itineraries,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getComments: (itineraryId) => dispatch(getComments(itineraryId)),
  //postNewComment: (itineraryId) => dispatch(postNewComment(itineraryId)),
  deleteComment: (id) => dispatch(deleteComment(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
*/
