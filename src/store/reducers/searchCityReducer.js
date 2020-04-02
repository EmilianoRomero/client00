import { SEARCH_CITY } from "../actions/types";

const initialState = {
  value: "",
  cities: []
};

export default function searchCityReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_CITY: {
      const { value } = action;
      const filteredCities = this.state.cities.filter(              
        city =>
          city.name.toString().toLowerCase().includes(value).indexOf(this.state.value.toLowerCase()) !== -1
      ); 
      return {
        ...state,
        value,
        filteredCities
      };
    }
    default:
      return state;
  }
}
