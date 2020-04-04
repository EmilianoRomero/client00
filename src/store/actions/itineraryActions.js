import {
  FETCH_ITINERARIES_REQUEST,
  FETCH_ITINERARIES_SUCCESS,
  FETCH_ITINERARIES_FAILURE,
} from "./types";

const fetchItinerariesRequest = () => {
  return {
    type: FETCH_ITINERARIES_REQUEST,
  };
};

const fetchItinerariesSuccess = (itineraries) => {
  return {
    type: FETCH_ITINERARIES_SUCCESS,
    payload: itineraries,
  };
};

const fetchItinerariesFailure = (error) => {
  return {
    type: FETCH_ITINERARIES_FAILURE,
    payload: error,
  };
};

export const fetchItineraries = (itineraries) => {
  return async (dispatch) => {
    dispatch(fetchItinerariesRequest());
    try {
      let response = await fetch("http://localhost:5000/itineraries/" + itineraries.city); //DUDAS
      let json = await response.json();
      dispatch(fetchItinerariesSuccess(json));
    } catch (error) {
      dispatch(fetchItinerariesFailure(error));
    }
  };
};
