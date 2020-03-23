import React, { Component } from "react";
import Landing from "./screen/Landing";
import Cities from "./cities";
import City from "./city";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="./screen/Landing" component={Landing} />
            <Route exact path="./cities" component={Cities} />
            <Route exact path="/:city_id" component={City} />
          </Switch>
          <Landing />
        </div>
      </BrowserRouter>
    );
  }
}
