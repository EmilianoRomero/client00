import { GET_ERRORS, CLEAR_ERRORS } from "../actions/types";

const initalState = {};

export default function (state = initalState, action) {
  switch (action.type) {
    case GET_ERRORS:
    case CLEAR_ERRORS:
      return action.payload;
    default:
      return state;
  }
}

/*
If any errors occur then this reducer fill the state with errors 
and we can display that errors from the frontend.
*/
