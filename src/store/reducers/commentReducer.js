import {
  REQUEST_GET_COMMENTS,
  GET_COMMENTS,
  ERROR_GET_COMMENTS,
  REQUEST_POST_COMMENT,
  POST_COMMENT,
  ERROR_POST_COMMENT,
  REQUEST_DELETE_COMMENT,
  DELETE_COMMENT,
  ERROR_DELETE_COMMENT,
} from "../actions/types";

const initState = {
  isLoading: false,
  comments: [],
  error: null,
};

export default function commentReducer(state = initState, action) {
  switch (action.type) {
    //REQUESTS
    case REQUEST_GET_COMMENTS:
    case REQUEST_POST_COMMENT:
    case REQUEST_DELETE_COMMENT:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    //SUCCESS CASES
    case GET_COMMENTS:
    case POST_COMMENT:
      return {
        ...state,
        isLoading: false,
        //comments: action.payload,
        comments: state.comments.concat(action.payload.comment),
      };
    case DELETE_COMMENT:
      console.log(action.payload.comment._id);
      console.log(state.comments);
      return {
        ...state,
        comments: state.comments.filter(
          (comment) => comment._id !== action.payload.comment._id
        ),
        loading: false,
      };

    //ERROR CASES
    case ERROR_GET_COMMENTS:
    case ERROR_POST_COMMENT:
    case ERROR_DELETE_COMMENT:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        comments: [],
      };

    default:
      return state;
  }
}
