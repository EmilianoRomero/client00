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
            <Route exact path="/" component={Landing} />
            <Route path="/cities" component={Cities} />
            <Route path="/:city_id" component={City} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
