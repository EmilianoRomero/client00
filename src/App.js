import React, { Component } from "react";
import Landing from "./screen/Landing";
import Cities from "./cities";
import Itineraries from "./components/Itinerary";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "normalize.css";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/cities" component={Cities} />
            <Route path="/itineraries/:city" component={Itineraries} />
            <Route path="/register" component={SignUp} />
            <Route path="/login" component={LogIn} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}