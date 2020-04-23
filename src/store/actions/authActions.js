import axios from "axios";
import setAuthToken from "../../setAuthToken";
import jwt_decode from "jwt-decode";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";

/*
So, from this file, we will send an AJAX request to the node.js server. 
We can not write this code inside Reducer because otherwise, it is a violation 
of pure function. So we need to write any database operations from actions.
If we get any errors, then we dispatch the actions and reducer will handle that for us.
*/

let reglink = "http://localhost:5000/users/register";
let loginlink = "http://localhost:5000/users/login";
// Register User
export const registerUser = (user, history) => (dispatch) => {
  axios
    .post(reglink, user)
    .then((res) => history.push("/users/login")) // re-direct to login on successful register
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};
// Login - get user token
export const loginUser = (user) => (dispatch) => {
  axios
    .post(loginlink, user) //originalmente "/api/users/login"
    .then((res) => {
      // Save to localStorage
      // Set token to localStorage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token); //guardamos el token del usuario que hizo login
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
// Set logged in user: usuario que hizo login exitosamente y obtuvo su token
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};
// Log user out
export const logoutUser = (history) => (dispatch) => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
  //redirigir a login una vez hecho logout
  history.push("users/login");
};
