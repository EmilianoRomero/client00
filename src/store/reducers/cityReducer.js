import { SEARCH_CITY, FETCH_CITIES_SUCCESS } from "../actions/types";
const initCities = [
  {
    name: "San Francisco",
    _id: 1,
    country: "Country",
    imgurl: "https://source.unsplash.com/user/loukass23"
  },
  {
    name: "Paris",
    _id: 2,
    country: "Country",
    imgurl: "https://source.unsplash.com/user/loukass23"
  },
]
const initialState = {
  searchValue: "",
  filteredCities: initCities,
  cities: initCities
};

export default function cityReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_CITY: {
      const searchValue = action.payload;
      console.log('searchValue :', searchValue);
      const filteredCities = state.cities.filter(
        city =>
          city.name.toString().toLowerCase().includes(searchValue)
      );
      return {
        ...state,
        searchValue,
        filteredCities
      };
    }
    case FETCH_CITIES_SUCCESS: {
      const cities = action.payload;
      return {
        ...state,
        cities,
        filteredCities: cities
      };
    }
    default:
      return state;
  }
}
