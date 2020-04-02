import {
  FETCH_CITIES_REQUEST,
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_FAILURE,
  SEARCH_CITY
} from "./types";

const fetchCitiesRequest = () => {
  return {
    type: FETCH_CITIES_REQUEST
  };
};

const fetchCitiesSuccess = json => {
  return {
    type: FETCH_CITIES_SUCCESS,
    payload: json
  };
};

const fetchCitiesFailure = error => {
  return {
    type: FETCH_CITIES_FAILURE,
    payload: error
  };
};

export const fetchCities = () => {
  return async dispatch => {
    dispatch(fetchCitiesRequest());
    try {
      let response = await fetch("http://localhost:5000/cities/all");
      let json = await response.json();
      dispatch(fetchCitiesSuccess(json));
      console.log(json);
    } catch (error) {
      dispatch(fetchCitiesFailure(error));
    }
  };
};

export const searchCity = value => {
  return {
    type: SEARCH_CITY,
    payload: value
  };
};
