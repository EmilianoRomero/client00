import { SEARCH_CITY, FETCH_CITIES_SUCCESS } from "../actions/types";

const initCities = [];

const initialState = {
  searchValue: "",
  filteredCities: initCities,
  cities: initCities,
};

export default function cityReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_CITY: {
      const searchValue = action.payload;
      const filteredCities = state.cities.filter((city) =>
        city.name.toString().toLowerCase().includes(searchValue)
      );
      return {
        ...state,
        searchValue,
        filteredCities,
      };
    }
    case FETCH_CITIES_SUCCESS: {
      const cities = action.payload;
      return {
        ...state,
        cities,
        filteredCities: cities,
      };
    }
    default:
      return state;
  }
}
