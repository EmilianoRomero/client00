import { FETCH_ITINERARIES_SUCCESS } from "../actions/types";

const itineraries = [];

const initialState = {
  itineraries,
};

export default function itineraryReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITINERARIES_SUCCESS: {
      const itineraries = action.payload;
      return {
        ...state,
        itineraries,
      };
    }
    default:
      return state;
  }
}
