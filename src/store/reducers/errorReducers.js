import { GET_ERRORS, CLEAR_ERRORS } from "../actions/errorActions";

const initalState = {
  msg: "",
  status: null,
  id: null,
};

export default function (state = initalState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        msg: action.payload.msg,
        status: action.payload.status,
        id: action.payload.id,
      };
    case CLEAR_ERRORS:
      return {
        msg: "",
        status: null,
        id: null,
      };

    default:
      return state;
  }
}

/*
import { GET_ERRORS } from "../actions/types";

const initialState = {};

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
}
*/
/*
If any errors occur then this reducer fill the state with errors 
and we can display that errors from the frontend.
*/
