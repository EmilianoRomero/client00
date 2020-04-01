import { FETCH_CITIES, FILTER_CITIES } from "./types";

export const fetchCities = () => dispatch => {
  fetch("http://localhost:5000/cities/all")
    .then(res => res.json())
    .then(cities =>
      dispatch({
        type: FETCH_CITIES,
        payload: cities
      })
    );
};

export const filterCities = filteredcities => ({
  type: FILTER_CITIES,
  payload: filteredcities
});

