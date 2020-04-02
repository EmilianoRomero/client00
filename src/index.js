import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "normalize.css";
import "./index.css";
import App from "./App";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux"; //
import { Provider } from "react-redux";
import thunk from "redux-thunk"; //Middleware
import rootReducer from "./store/reducers/rootReducer";
import * as serviceWorker from "./serviceWorker";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();