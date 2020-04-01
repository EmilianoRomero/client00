import { FETCH_CITIES, FILTER_CITIES } from "../actions/types";

const initialState = {
  cities: [],
  typedCity: ""
};

const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CITIES:
      return { ...state, cities: action.payload };
    case FILTER_CITIES:
      return { ...state, typedCity: action.payload};
    default:
      return state;
  }
}

export default citiesReducer;