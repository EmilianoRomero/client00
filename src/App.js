import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Landing from "./screen/Landing";
import AppLanded from "./screen/AppLanded";
import Cities from "./cities";
import Itineraries from "./components/Itinerary";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Favourites from "./components/Favourites";

/*
import jwt_decode from "jwt-decode";
import setAuthToken from "./setAuthToken";
import { setCurrentUser, logoutUser } from "./store/actions/authActions";
import store from "./index";
*/

import "normalize.css";
import "./App.css";

/*
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "/users/login";  //or ./login like originally was?
  }
}
*/


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/app" component={AppLanded} />
            <Route path="/cities" component={Cities} />
            <Route path="/itineraries/:city" component={Itineraries} />
            <Route path="/users/register" component={SignUp} />
            <Route path="/users/login" component={LogIn} />
            <Route path="/users/favourites" component={Favourites} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}