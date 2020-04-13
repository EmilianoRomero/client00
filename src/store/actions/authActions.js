import axios from "axios";
import setAuthToken from "../../setAuthToken";
import jwt_decode from "jwt-decode";
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING, ADD_FAV } from "./types";

let reglink = "http://localhost:5000/users/register";
let loginlink = "http://localhost:5000/users/login";
// Register User
export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post(reglink, userData) //originalmente "/api/users/register"
    .then((res) => history.push("/users/login")) // re-direct to login on successful register
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};
// Login - get user token
export const loginUser = (userData) => (dispatch) => {
  axios
    .post(loginlink, userData) //originalmente "/api/users/login"
    .then((res) => {
      // Save to localStorage
      // Set token to localStorage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};
// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};
// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING,
  };
};
// Log user out
export const logoutUser = () => (dispatch) => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};

export const fetchUserFavourites = (favourites) => {
  return {
    type: ADD_FAV,
    favourites,
  };
};

export const addFav = (favourite) => (dispatch) => {
  // Headers
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "x-auth-token": localStorage.getItem("token"),
    },
    mode: "no-cors",
    body: favourite,
  };

  // dispatch(fetchUserRequest());
  dispatch(fetchUserFavourites());

  fetch("/users/favourites", config)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      dispatch({
        type: ADD_FAV,
      });
    })
    .catch((error) => {});
};
