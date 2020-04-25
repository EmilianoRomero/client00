import { FETCH_ITINERARIES_SUCCESS } from "../actions/types";

const initialState = {
  itineraries: [],
};

export default function itineraryReducer(state = initialState, action) {
  //console.log(action);
  switch (action.type) {
    case FETCH_ITINERARIES_SUCCESS: {
      return {
        ...state,
        itineraries: action.payload,
      };
    }
    default:
      return state;
  }
}
//const itineraries = action.payload;
      //itineraries constituye el payload del action,
      //no como yo había puesto (itineraries = action.itineraries)