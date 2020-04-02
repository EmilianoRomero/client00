import {
  FETCH_CITIES_REQUEST,
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_FAILURE,
} from "../actions/types";

const initialState = {
  loading: false,
  cities: [],
  error: ""
};

export default function fetchingReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CITIES_REQUEST:
      return {
        ...state,
        loading: true
      };

    case FETCH_CITIES_SUCCESS:
      return {
        ...state,
        loading: false,
        cities: action.cities
      };

    case FETCH_CITIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    default:
      return state;
  }
}
