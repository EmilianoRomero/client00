import {
  REQUEST_GET_COMMENTS,
  GET_COMMENTS_SUCCESS,
  ERROR_GET_COMMENTS,
  REQUEST_POST_COMMENT,
  POST_COMMENT_SUCCESS,
  ERROR_POST_COMMENT,
  REQUEST_EDIT_COMMENT,
  EDIT_COMMENT_SUCCESS,
  ERROR_EDIT_COMMENT,
  REQUEST_DELETE_COMMENT,
  DELETE_COMMENT_SUCCESS,
  ERROR_DELETE_COMMENT,
} from "../actions/types";

const initialState = {
  isLoading: false,
  comments: [],
  error: null,
  //updated_comment: [],
};

export default function commentReducer(state = initialState, action) {
  //console.log(action)
  switch (action.type) {
    //REQUESTS
    case REQUEST_GET_COMMENTS:
    case REQUEST_POST_COMMENT:
    case REQUEST_EDIT_COMMENT:
    case REQUEST_DELETE_COMMENT:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    //SUCCESS CASES
    case GET_COMMENTS_SUCCESS:
      //console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        comments: action.payload,
        error: null,
      };
    case POST_COMMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        //comments: [action.payload, ...state.comments], NO FUNCIONA
        comments: state.comments.concat(action.payload.comment),
        error: null,
      };
    case DELETE_COMMENT_SUCCESS:
      return {
        //state.filter((comment) => comment._id !== action._id);
        ...state,
        comments: state.comments.filter(
          (comment) => comment._id !== action.payload.comment._id
        ),
        isLoading: false,
      };
    case EDIT_COMMENT_SUCCESS:
      return {
        ...state,
        //comments: action.payload,
        //updated_comment: action.payload,
        comments: state.comments.map(
          (comment) => comment._id === action.payload.comment._id
        ),
        isLoading: false,
      };

    //ERROR CASES
    case ERROR_GET_COMMENTS:
    case ERROR_POST_COMMENT:
    case ERROR_EDIT_COMMENT:
    case ERROR_DELETE_COMMENT:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
        comments: [],
      };

    default:
      return state;
  }
}
