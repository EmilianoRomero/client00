import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Landing from "./screen/Landing";
import Cities from "./cities";
import Itineraries from "./components/Itinerary";
import Comments from "./components/Comments";
import CommentPost from "./components/CommentPost";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";

import "bootstrap/dist/css/bootstrap.min.css";
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
            {/*<Route exact path="/comments" component={Comments} />
            <Route path="/comments/all" component={Comments} />
            <Route path="/commments/itinerary/:itinerary_id" component={Comments}/>*/}
            <Route path="/commments/itinerary/:itinerary_id" component={CommentPost} />
            <Route path="/users/register" component={SignUp} />
            <Route path="/users/login" component={LogIn} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
